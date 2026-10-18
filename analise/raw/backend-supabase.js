/* Protocolo Escrevente — adaptador de armazenamento para Supabase (produção: Vercel + Supabase + Hotmart).
   Carregue este arquivo DEPOIS de supabase-js e ANTES do script principal do app, e defina
   window.PE_CONFIG = { supabase: { url: 'https://xxxx.supabase.co', anonKey: '...' } } em config.js.

   Modelo de dados (ver supabase/schema.sql):
     documents(path text pk, uid uuid, data jsonb, updated_at)  — um "documento" por caminho, igual ao banco do artefato:
       data/users/<uid>/<doc>  (privado do aluno)
       alunos/<uid>            (resumo de progresso: aluno escreve, admin lê)
       ranking/<uid>           (apelido + XP: todos leem, aluno escreve o seu)
     profiles(id uuid pk, email, nome, role 'aluno'|'admin', ativo bool, hotmart_status, expira_em)   — Escrevente
     compras_extras(email, produto 'oficial_justica', ativo, expira_em, plano, origem)               — Oficial de Justiça
   Quem tem só o Oficial de Justiça também entra; o progresso do OJ fica em data/users/<uid>/oj/<doc>.
   O app chama só: init(), doc(path).set/get/onSnapshot/delete, list(prefix).
*/
(function () {
  /* cliente único do Supabase (app e painel) */
  window.PESupabase = function () {
    if (window.__peSb !== undefined) return window.__peSb;
    const c = (window.PE_CONFIG || {}).supabase;
    window.__peSb = (window.supabase && c && c.url && !/SEU-PROJETO/.test(c.url)) ? window.supabase.createClient(c.url, c.anonKey, { auth: { persistSession: true, autoRefreshToken: true } }) : null;
    return window.__peSb;
  };
  /* conteúdo publicado pelo painel: manifesto da versão no ar + arquivos no bucket "conteudo".
     Os arquivos de cada versão nunca mudam, então ficam guardados no aparelho (Cache Storage). */
  const CACHE = 'pe-conteudo', curl = k => location.origin + '/__conteudo/' + k;
  window.PEContent = {
    man: null, ver: null, _p: null,
    init() {
      if (this._p) return this._p;
      this._p = (async () => {
        const sb = window.PESupabase(); if (!sb) return null;
        const { data: ss } = await sb.auth.getSession(); if (!ss || !ss.session) return null;
        const a = await sb.from('conteudo_atual').select('versao').eq('id', 1).maybeSingle();
        if (a.error || !a.data || !a.data.versao) return null;
        const v = await sb.from('conteudo_versoes').select('id,manifest').eq('id', a.data.versao).maybeSingle();
        if (v.error || !v.data) return null;
        this.man = v.data.manifest || {}; this.ver = v.data.id; return this;
      })().catch(e => { console.warn('conteúdo publicado indisponível', e); return null; });
      return this._p;
    },
    has(path) { return !!(this.man && this.man[path]); },
    async text(path) {
      const key = `v/${this.man[path]}/${path}`;
      let c = null; try { c = await caches.open(CACHE); } catch (e) { }
      if (c) { try { const hit = await c.match(curl(key)); if (hit) return await hit.text(); } catch (e) { } }
      const { data, error } = await window.PESupabase().storage.from('conteudo').download(key);
      if (error) throw error;
      const t = await data.text();
      if (c) {
        try {
          await c.put(curl(key), new Response(t, { headers: { 'content-type': 'application/json' } }));
          // apaga as cópias de versões antigas deste mesmo arquivo
          (await c.keys()).forEach(r => { const u = r.url; if (u.endsWith('/' + path) && u.indexOf('/__conteudo/v/') > 0 && u !== curl(key)) c.delete(r); });
        } catch (e) { }
      }
      return t;
    },
  };
  /* Tutor e corretor IA (/api/ia). Mesma interface que o app usa: SAMPLE(prompt, {tipo, onText}) -> {text},
     SAMPLE.json(prompt, {tipo}) -> objeto, SAMPLE.chat(mensagens, {contexto, onText}) -> {text}. Erros: {code}. */
  window.PEIA = (function () {
    const ERR = '\u0000ERR:';
    async function token() {
      const sb = window.PESupabase(); if (!sb) throw { code: 'not_granted' };
      const { data } = await sb.auth.getSession(); if (!data || !data.session) throw { code: 'session_expired' };
      return data.session.access_token;
    }
    async function call(body, onText) {
      body = Object.assign({ curso: (window.PECurso && window.PECurso.curso === 'oj') ? 'oj' : 'esc' }, body);
      const r = await fetch('/api/ia', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + await token() }, body: JSON.stringify(body) });
      if (!r.ok) { let j = {}; try { j = await r.json(); } catch (e) { } throw Object.assign({}, j, { code: (j && j.code) || (r.status === 429 ? 'rate_limited' : 'falha') }); }
      const rd = r.body.getReader(), dec = new TextDecoder(); let raw = '';
      const vis = () => { const k = raw.indexOf('\u0000'); return k >= 0 ? raw.slice(0, k) : raw; };
      for (;;) {
        const { done, value } = await rd.read(); if (done) break;
        raw += dec.decode(value, { stream: true });
        if (onText) onText({ text: vis() });
      }
      raw += dec.decode();
      const k = raw.indexOf(ERR);
      if (k >= 0) throw { code: raw.slice(k + ERR.length).trim() || 'falha', text: raw.slice(0, k) };
      return { text: vis() };
    }
    function parseJSON(t) {
      t = String(t || '').replace(/^\s*```(?:json)?/i, '').replace(/```\s*$/, '').trim();
      try { return JSON.parse(t); } catch (e) { }
      const a = Math.min(...['[', '{'].map(c => t.indexOf(c)).filter(i => i >= 0));
      const b = Math.max(t.lastIndexOf(']'), t.lastIndexOf('}'));
      if (isFinite(a) && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { } }
      throw { code: 'invalid_json' };
    }
    const S = (prompt, o) => call({ tipo: (o && o.tipo) || 'tutor', prompt }, o && o.onText);
    S.json = async (prompt, o) => parseJSON((await call({ tipo: (o && o.tipo) || 'gerar', prompt })).text);
    S.chat = (mensagens, o) => call({ tipo: 'tutor', mensagens, contexto: (o && o.contexto) || '' }, o && o.onText);
    return S;
  })();
  const LVL = { view: 0, interact: 1, admin: 2, owner: 3 };
  window.SupabaseAdapter = function (cfg) {
    const sb = window.PESupabase();
    let session = null, profile = null, oj = null, cursos = { esc: false, oj: false };
    /* assinatura do Oficial de Justiça (compras_extras, produto oficial_justica). Antes da migração oficial_justica.sql não há expira_em: lê só o que existe. */
    async function lerOJ(email) {
      const q = cols => sb.from('compras_extras').select(cols).eq('email', String(email || '').toLowerCase()).eq('produto', 'oficial_justica').maybeSingle();
      let r = await q('ativo,expira_em,plano,origem,atualizado_em');
      if (r.error) r = await q('ativo,origem,atualizado_em');
      return r.error ? null : (r.data || null);
    }
    const ojValido = o => !!(o && o.ativo && (!o.expira_em || new Date(o.expira_em) > new Date()));
    const subs = {}; // path -> {cbs:[], channel}
    async function ensureSession() {
      if (!sb) return null;
      const { data } = await sb.auth.getSession(); session = data.session;
      if (!session) {
        // tela de login mínima (magic link / senha). O app fica em modo local até entrar.
        showLogin(); return null;
      }
      const { data: p, error: pErr } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
      // falha de rede/servidor não é "sem assinatura": avisa e deixa tentar de novo
      if (pErr) { showSemConexao(); return null; }
      profile = p || { id: session.user.id, role: 'aluno', ativo: false };
      const admin = profile.role === 'admin';
      oj = await lerOJ(session.user.email).catch(() => null);
      cursos = { esc: admin || !!(profile.ativo && !(profile.expira_em && new Date(profile.expira_em) < new Date())), oj: admin || ojValido(oj) };
      // entra quem tem o Escrevente OU o Oficial de Justiça ativo (ou é admin)
      if (!cursos.esc && !cursos.oj) { showBlocked(profile); return null; }
      return session;
    }
    function showLogin() {
      if (document.getElementById('pe-login')) return;
      const d = document.createElement('div'); d.id = 'pe-login'; d.className = 'sheetbg';
      d.innerHTML = `<div class="sheet lg-sheet"><h2>Entrar no ${(() => { try { return localStorage.getItem('pe26:curso') === 'oj' ? 'Protocolo Oficial de Justiça' : 'Protocolo Escrevente'; } catch (e) { return 'Protocolo Escrevente'; } })()}</h2><p class="small ink2" style="margin:6px 0 14px">Use o mesmo e-mail da sua compra. Você entra uma vez e o app fica conectado neste aparelho.</p>
        <button class="btn lg-google" id="pe-google" hidden>Entrar com Google</button>
        <div class="lg-or" id="pe-or" hidden><span>ou receba um código por e-mail</span></div>
        <div id="pe-step1" class="form"><label class="f wide">E-mail<input type="email" id="pe-email" autocomplete="email" inputmode="email" placeholder="voce@exemplo.com"></label><button class="btn pri" id="pe-send">Enviar código</button></div>
        <div id="pe-step2" class="form" hidden><p class="small ink2 wide" id="pe-sent"></p><label class="f wide">Código<input type="text" id="pe-code" inputmode="numeric" autocomplete="one-time-code" maxlength="10" placeholder="000000" class="lg-code"></label><button class="btn pri" id="pe-verify">Entrar</button>
          <div class="row wide small" style="gap:14px"><button class="lnk" id="pe-resend" disabled>Reenviar código</button><button class="lnk" id="pe-change">Trocar e-mail</button></div></div>
        <p class="small muted" id="pe-msg" style="margin-top:10px" aria-live="polite"></p>
        <p class="xs muted" style="margin-top:14px">Ao entrar, você concorda com os <a href="/termos.html" target="_blank" rel="noopener">Termos de Uso</a> e com a <a href="/privacidade.html" target="_blank" rel="noopener">Política de Privacidade</a>. Sem login, o app funciona só neste aparelho e sem ranking. Suporte: suporte@protocoloescrevente.com.br</p></div>`;
      document.body.appendChild(d);
      const $ = s => d.querySelector(s), msg = $('#pe-msg'), redirect = location.origin + location.pathname;
      // só cria conta quem comprou (trava no banco: bloqueio-cadastro.sql); o Supabase devolve "Database error saving new user"
      const semCompra = m => /PE_SEM_COMPRA|saving new user|signups? not allowed|Database error/i.test(String(m || ''));
      const SEM_COMPRA = 'Não encontramos uma compra com este e-mail. Entre com o mesmo e-mail usado na compra (está no e-mail de confirmação da Hotmart ou da Kiwify). Se você acabou de comprar, aguarde alguns minutos e tente de novo. Dúvidas: suporte@protocoloescrevente.com.br';
      // volta do "Entrar com Google" com uma conta do Google sem compra
      try { const q = new URLSearchParams(location.search + '&' + location.hash.replace(/^#/, '')); const ed = q.get('error_description') || q.get('error'); if (ed) { msg.textContent = semCompra(ed) ? SEM_COMPRA : 'Não foi possível entrar: ' + ed; history.replaceState(null, '', location.pathname); } } catch (e) { }
      let email = '', timer = null; const OTP = +(window.PE_CONFIG && window.PE_CONFIG.otpLen) || 8; $('#pe-code').placeholder = '0'.repeat(OTP); $('#pe-code').maxLength = OTP;
      // "Entrar com Google" só aparece quando o provedor está ligado no Supabase
      fetch(cfg.url + '/auth/v1/settings', { headers: { apikey: cfg.anonKey } }).then(r => r.json()).then(s => { if (s && s.external && s.external.google) { $('#pe-google').hidden = false; $('#pe-or').hidden = false; } }).catch(() => { });
      $('#pe-google').onclick = async () => {
        msg.textContent = 'Abrindo o Google…';
        const { error } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: redirect, queryParams: { prompt: 'select_account' } } });
        if (error) msg.textContent = 'Não foi possível abrir o Google: ' + error.message;
      };
      const cooldown = () => { let n = 60; const b = $('#pe-resend'); b.disabled = true; clearInterval(timer); b.textContent = `Reenviar código (${n}s)`; timer = setInterval(() => { n--; if (n <= 0) { clearInterval(timer); b.disabled = false; b.textContent = 'Reenviar código'; } else b.textContent = `Reenviar código (${n}s)`; }, 1000); };
      const send = async () => {
        msg.textContent = 'Enviando…';
        const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect } });
        if (error) { msg.textContent = semCompra(error.message) ? SEM_COMPRA : /rate|seconds|segundos/i.test(error.message) ? 'Aguarde um minuto antes de pedir outro código.' : 'Não foi possível enviar: ' + error.message; return false; }
        $('#pe-step1').hidden = true; $('#pe-step2').hidden = false; $('#pe-sent').innerHTML = 'Enviamos um código para <b></b>. Confira também o spam.'; $('#pe-sent b').textContent = email;
        msg.textContent = ''; cooldown(); setTimeout(() => $('#pe-code').focus(), 50); return true;
      };
      $('#pe-send').onclick = () => { email = $('#pe-email').value.trim().toLowerCase(); if (!/^\S+@\S+\.\S+$/.test(email)) { msg.textContent = 'Digite um e-mail válido.'; return; } send(); };
      $('#pe-email').onkeydown = e => { if (e.key === 'Enter') $('#pe-send').click(); };
      $('#pe-resend').onclick = () => send();
      $('#pe-change').onclick = () => { clearInterval(timer); $('#pe-step2').hidden = true; $('#pe-step1').hidden = false; msg.textContent = ''; $('#pe-email').focus(); };
      const verify = async () => {
        const token = $('#pe-code').value.replace(/\D/g, '');
        if (token.length < 6) { msg.textContent = 'Digite o código que chegou no e-mail.'; return; }
        msg.textContent = 'Conferindo…'; $('#pe-verify').disabled = true;
        const { error } = await sb.auth.verifyOtp({ email, token, type: 'email' });
        if (error) { $('#pe-verify').disabled = false; msg.textContent = /expired|invalid/i.test(error.message) ? 'Código inválido ou vencido. Confira os números ou peça outro.' : 'Não foi possível entrar: ' + error.message; return; }
        msg.textContent = 'Pronto! Entrando…'; location.reload();
      };
      $('#pe-verify').onclick = verify;
      $('#pe-code').oninput = e => { const v = e.target.value.replace(/\D/g, ''); if (v !== e.target.value) e.target.value = v; if (v.length === OTP) verify(); };
      $('#pe-code').onkeydown = e => { if (e.key === 'Enter') verify(); };
    }
    function showSemConexao() {
      const d = document.createElement('div'); d.className = 'sheetbg';
      d.innerHTML = `<div class="sheet"><h2>Sem conexão</h2><p class="small ink2" style="margin-top:8px">Não conseguimos falar com o servidor agora para conferir o seu acesso. Confira a internet e tente de novo. Seu progresso está guardado.</p><div class="row" style="margin-top:12px"><button class="btn pri" id="pe-retry">Tentar de novo</button></div></div>`;
      document.body.appendChild(d); d.querySelector('#pe-retry').onclick = () => location.reload();
    }
    function showBlocked(p) {
      // quem estava no Oficial de Justiça (ou só teve o OJ) vê a situação e os planos do OJ
      const ultimo = (function () { try { return localStorage.getItem('pe26:curso'); } catch (e) { return null; } })();
      if (ultimo === 'oj' || (oj && !(p.expira_em || p.hotmart_status))) return showBlockedOJ(p);
      const venceu = p.expira_em && new Date(p.expira_em) < new Date(), emDia = d => new Date(d).toLocaleDateString('pt-BR');
      const renova = (window.PE_CONFIG && window.PE_CONFIG.renovarUrl) || window.PE_RENOVAR_URL || 'vendas/';
      const txt = venceu && p.ativo ? `O acesso de <b>${p.email || session.user.email}</b> venceu em ${emDia(p.expira_em)}. Renove sua assinatura para voltar de onde parou: seu progresso está guardado.`
        : p.expira_em && p.hotmart_status && !p.ativo ? `O acesso de <b>${p.email || session.user.email}</b> está bloqueado porque há um pagamento pendente ou a assinatura foi encerrada. Regularize na Kiwify e o acesso volta sozinho em poucos minutos; seu progresso está guardado.`
        : `Não achamos uma assinatura ativa para <b>${p.email || session.user.email}</b>. Se você acabou de comprar, aguarde alguns minutos: a Kiwify avisa o app automaticamente. Se comprou com outro e-mail, fale com suporte@protocoloescrevente.com.br.`;
      const d = document.createElement('div'); d.className = 'sheetbg';
      d.innerHTML = `<div class="sheet"><h2>${venceu ? 'Acesso vencido' : 'Assinatura não encontrada'}</h2><p class="small ink2" style="margin-top:8px">${txt}</p><div class="row" style="margin-top:12px">${renova ? `<a class="btn pri" href="${renova}" target="_blank" rel="noopener">${venceu || p.expira_em ? 'Renovar' : 'Ver os planos'}</a>` : ''}<button class="btn" id="pe-out">Sair</button></div>
        <p class="xs muted" style="margin-top:12px">Procurando o curso de Oficial de Justiça? <button class="lnk" id="pe-ver-oj">Ver os planos</button></p></div>`;
      document.body.appendChild(d); d.querySelector('#pe-out').onclick = async () => { await sb.auth.signOut({ scope: 'local' }); location.reload(); };
      d.querySelector('#pe-ver-oj').onclick = () => { d.remove(); showBlockedOJ(p); };
    }
    function showBlockedOJ(p) {
      const email = p.email || session.user.email, emDia = d => new Date(d).toLocaleDateString('pt-BR');
      const venceu = oj && oj.expira_em && new Date(oj.expira_em) < new Date();
      const txt = !oj ? `Não achamos uma assinatura do Oficial de Justiça para <b>${email}</b>. Se você acabou de assinar, aguarde alguns minutos: a Kiwify avisa o app automaticamente. Se assinou com outro e-mail, fale com suporte@protocoloescrevente.com.br.`
        : venceu && oj.ativo ? `O acesso de <b>${email}</b> ao Oficial de Justiça venceu em ${emDia(oj.expira_em)}. Renove para voltar de onde parou: seu progresso está guardado.`
        : `O acesso de <b>${email}</b> ao Oficial de Justiça está bloqueado porque há um pagamento pendente ou a assinatura foi encerrada. Regularize na Kiwify e o acesso volta sozinho em poucos minutos; seu progresso está guardado.`;
      const pl = (window.PECurso && window.PECurso.PLANOS_OJ) || [];
      const d = document.createElement('div'); d.className = 'sheetbg';
      d.innerHTML = `<div class="sheet"><h2>${venceu ? 'Acesso vencido' : 'Oficial de Justiça'}</h2><p class="small ink2" style="margin-top:8px">${txt}</p>
        ${pl.length ? `<div class="acct-plans" style="margin-top:12px">${pl.map(x => `<div class="acct-plan"><b>${x[0]}</b><span class="pp">${x[1]}</span><a class="btn sm ${x[0] === 'Anual' ? 'gold' : ''}" href="${x[2]}?email=${encodeURIComponent(String(email).toLowerCase())}" target="_blank" rel="noopener">Assinar</a></div>`).join('')}</div>` : ''}
        <div class="row" style="margin-top:12px"><button class="btn" id="pe-out">Sair</button></div></div>`;
      document.body.appendChild(d); d.querySelector('#pe-out').onclick = async () => { await sb.auth.signOut({ scope: 'local' }); location.reload(); };
    }
    function docRef(path) {
      return {
        async get() { const { data, error } = await sb.from('documents').select('data,updated_at').eq('path', path).maybeSingle(); if (error) throw { code: 'unavailable', message: error.message }; return { exists: !!data, data: () => data ? data.data : null, metadata: {} }; },
        async set(body) { const { error } = await sb.from('documents').upsert({ path, uid: session.user.id, data: body, updated_at: new Date().toISOString() }); if (error) throw { code: error.code === '42501' ? 'invalid_argument' : 'unavailable', message: error.message }; },
        async delete() { await sb.from('documents').delete().eq('path', path); },
        onSnapshot(cb, err) {
          this.get().then(s => cb(Object.assign(s, { metadata: { fromCache: false } }))).catch(e => err && err(e));
          const ch = sb.channel('doc:' + path).on('postgres_changes', { event: '*', schema: 'public', table: 'documents', filter: 'path=eq.' + path }, payload => {
            const row = payload.new && payload.new.path ? payload.new : null;
            cb({ exists: !!row, data: () => row ? row.data : null, metadata: { fromCache: false } });
          }).subscribe();
          return () => sb.removeChannel(ch);
        },
      };
    }
    return {
      kind: 'supabase',
      async init() {
        const s = await ensureSession(); if (!s) return null;
        return { uid: s.user.id, admin: profile.role === 'admin', canWrite: true, me: { id: s.user.id, email: s.user.email, name: profile.nome || '' }, perfil: Object.assign({}, profile), cursos: Object.assign({}, cursos), oj: oj ? Object.assign({}, oj) : null };
      },
      doc: docRef,
      async list(prefix) {
        const { data, error } = await sb.from('documents').select('path,data').like('path', prefix + '/%').limit(2000);
        if (error || !data) return [];
        return data.map(r => ({ id: r.path.slice(prefix.length + 1), data: r.data }));
      },
      // altera o conteúdo de um documento sem trocar o dono (usado pelo professor ao responder um relato)
      async update(path, data) { const { error } = await sb.from('documents').update({ data, updated_at: new Date().toISOString() }).eq('path', path); if (error) throw { code: 'unavailable', message: error.message }; },
      async profiles() { return {}; },
      async avisos() {
        // avisos.curso (migração oficial_justica.sql): vazio = todos os cursos; 'esc' ou 'oj' = só aquele curso
        const q = cols => sb.from('avisos').select(cols).eq('ativo', true).order('id', { ascending: false }).limit(10);
        let { data, error } = await q('id,titulo,texto,link,ativo,inicio,fim,curso');
        if (error) ({ data, error } = await q('id,titulo,texto,link,ativo,inicio,fim'));
        if (error || !data) return [];
        const hoje = new Date().toISOString().slice(0, 10), cur = (window.PECurso && window.PECurso.curso === 'oj') ? 'oj' : 'esc';
        return data.filter(a => (!a.inicio || a.inicio <= hoje) && (!a.fim || a.fim >= hoje) && (!a.curso || a.curso === cur));
      },
      signOut() { return sb.auth.signOut({ scope: 'local' }); },
      // Minha conta: perfil atualizado (plano, validade, origem da compra) e dados do login
      async conta() {
        const { data: p } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
        if (p) profile = p;
        oj = await lerOJ(session.user.email).catch(() => oj);
        const u = session.user;
        return Object.assign({}, profile, { oj: oj ? Object.assign({}, oj) : null, email: u.email, provedor: (u.app_metadata && u.app_metadata.provider) || 'email', criado_em: u.created_at, ultimo_login: u.last_sign_in_at });
      },
      async sair() { try { await sb.auth.signOut({ scope: 'local' }); } catch (e) { } }, // só este aparelho: os outros continuam conectados
      // Painel do professor: liberação manual de acessos (as funções no banco conferem se quem chama é admin)
      async extras() {
        const q = cols => sb.from('compras_extras').select(cols).eq('email', String(session.user.email || '').toLowerCase());
        let { data, error } = await q('produto,ativo,expira_em'); if (error) ({ data, error } = await q('produto,ativo'));
        if (error) throw error; return (data || []).filter(x => x.ativo && (!x.expira_em || new Date(x.expira_em) > new Date())).map(x => x.produto);
      },
      async extraChave(produto) { const { data, error } = await sb.from('extras_chaves').select('chave').eq('produto', produto).maybeSingle(); if (error) throw error; return data ? data.chave : null; },
      async simResultado(sim, acertos) { const { error } = await sb.from('simulado_resultados').insert({ simulado: sim, acertos }); if (error && error.code !== '23505') throw error; },
      async simPosicao(sim, acertos) { const { data, error } = await sb.rpc('simulado_posicao', { p_sim: sim, p_acertos: acertos }); if (error) throw error; return (data || [])[0] || null; },
      async adminExtras() { const { data, error } = await sb.rpc('admin_extras'); if (error) throw error; return data || []; },
      // dias (só Oficial de Justiça): validade a partir de hoje; 0 = sem vencimento; sem dias = como os extras de pagamento único
      async adminExtra(email, produto, ativo, dias) { const a = { p_email: email, p_produto: produto, p_ativo: !!ativo }; if (dias !== undefined && dias !== null) a.p_dias = +dias || 0; const { error } = await sb.rpc('admin_extra', a); if (error) throw error; },
      async adminAcessos() { const { data, error } = await sb.rpc('admin_acessos'); if (error) throw error; return data || []; },
      async adminLiberar(email, dias, plano, admin) { const { error } = await sb.rpc('admin_liberar', { p_email: email, p_dias: dias, p_plano: plano || null, p_admin: !!admin }); if (error) throw error; },
      async adminBloquear(email) { const { error } = await sb.rpc('admin_bloquear', { p_email: email }); if (error) throw error; },
      // LGPD (art. 18): cópia de tudo o que o app guarda sobre o titular
      async exportarDados() {
        const uid = session.user.id;
        const [p, d] = await Promise.all([
          sb.from('profiles').select('*').eq('id', uid).maybeSingle(),
          sb.from('documents').select('path,data,updated_at').eq('uid', uid).limit(5000),
        ]);
        if (d.error) throw d.error;
        return { gerado_em: new Date().toISOString(), controlador: 'Protocolo Escrevente · suporte@protocoloescrevente.com.br',
          conta: { id: uid, email: session.user.email, criada_em: session.user.created_at, ultimo_login: session.user.last_sign_in_at },
          perfil: p.data || null, documentos: d.data || [] };
      },
      // LGPD (art. 18, VI): exclusão definitiva da conta e dos dados de estudo
      async excluirConta() {
        const { data } = await sb.auth.getSession(); const tok = data && data.session && data.session.access_token;
        const r = await fetch('/api/conta', { method: 'DELETE', headers: { Authorization: 'Bearer ' + tok, 'Content-Type': 'application/json' }, body: JSON.stringify({ confirmar: 'EXCLUIR' }) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(j.erro || 'Não foi possível excluir a conta agora.');
        try { await sb.auth.signOut({ scope: 'local' }); } catch (e) { }
        return true;
      },
    };
  };
})();
