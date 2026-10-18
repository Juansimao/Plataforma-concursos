import { useRef, useState } from 'react';
import { S, save, useStore, prefs, resetAll, importAll } from '../lib/store.js';
import { META, METAS, TEMAS, ASPECTOS, DOCS, LEIS, QUESTOES, CURSO, PLANOS_FAKE, ORD, DISC, SCHED } from '../data/content.js';
import { TODAY, br, brY, fmtMin, fmtNum, uid, minutesBy, level, intervalo, addDays, doneList, streak, pace, checkBadges, topShort, metaLabel, breakdown, qAgg, tecAgg } from '../lib/logic.js';
import { flush } from '../lib/actions.js';
import { Icon, A, Bar, toast, toastUndo, closeSheet, openSheet, go } from '../components/ui.jsx';
import { fmtClock, timerStart, timerStop, useTick } from '../components/Timer.jsx';

/* ---------------- Cronômetro ---------------- */
export function Cronometro() {
  useStore(); useTick(S.timer.run);
  const t = TODAY(); const mins = minutesBy(); const run = S.timer.run;
  const [meta, setMeta] = useState(S.timer.meta || ''); const [manual, setManual] = useState('');
  const sessoes = S.sessoes.slice().sort((a, b) => (a.d < b.d ? 1 : -1));
  const addManual = () => { const m = parseInt(manual, 10); if (!(m > 0 && m <= 1440)) return toast('Informe os minutos (1 a 1440).'); S.sessoes.push({ id: uid(), d: t, min: m, c: meta ? +meta : null }); save(); setManual(''); toast('Sessão adicionada'); flush(checkBadges()); };
  const del = (id) => { const i = S.sessoes.findIndex((s) => s.id === id); if (i < 0) return; const [rm] = S.sessoes.splice(i, 1); save(); toastUndo('Sessão apagada', () => { S.sessoes.push(rm); save(); }); };
  const dias = Array.from({ length: 7 }, (_, i) => { const d = addDays(t, -(6 - i)); return { d, m: mins[d] || 0 }; }); const mx = Math.max(60, ...dias.map((x) => x.m));
  return (
    <>
      <div className="vh"><div><h1>Cronômetro</h1><p>Marque o tempo líquido de estudo (sem pausas longas). As horas entram no desempenho e no XP.</p></div></div>
      <div className="grid g2">
        <section className="card"><div className="bigtime">{fmtClock(run ? Date.now() - S.timer.start : 0)}</div>
          <div className="form" style={{ marginTop: 14 }}>
            <label className="f wide">Estudando a meta (opcional)<select value={run ? S.timer.meta || '' : meta} disabled={run} onChange={(e) => setMeta(e.target.value)}><option value="">Sem meta específica</option>{METAS.filter((m) => m.tipo === 'meta').map((m) => <option key={m.n} value={m.n}>M{m.n} · {m.top.slice(0, 44)}</option>)}</select></label>
            {run ? <button className="btn pri" onClick={() => timerStop()}><Icon n="check" />Parar e registrar</button> : <button className="btn pri" onClick={() => timerStart(meta ? +meta : null)}><Icon n="play" />Iniciar</button>}
            {run && <button className="btn ghost" onClick={() => { timerStop(false); toast('Sessão descartada'); }}>Descartar</button>}
          </div>
          <div className="hr" />
          <div className="row"><label className="f" style={{ flex: 1 }}>Adicionar manualmente (min)<input type="number" min="1" max="1440" value={manual} onChange={(e) => setManual(e.target.value)} /></label><button className="btn" style={{ alignSelf: 'flex-end' }} onClick={addManual}><Icon n="plus" />Adicionar</button></div></section>
        <div className="stack">
          <section className="card"><div className="ch"><h2>Hoje</h2><span className="sub">meta {prefs().horas}h</span></div><div className="kpi" style={{ border: 0, padding: 0 }}><div className="v">{fmtMin(mins[t] || 0)}</div></div><Bar v={((mins[t] || 0) / (prefs().horas * 60)) * 100} style={{ marginTop: 8 }} /></section>
          <section className="card"><div className="ch"><h2>Últimos 7 dias</h2></div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 110 }}>{dias.map((x) => (<div key={x.d} style={{ flex: 1, textAlign: 'center' }}><div title={fmtMin(x.m)} style={{ height: Math.max(3, (x.m / mx) * 80), background: x.d === t ? 'var(--gold)' : 'var(--s1)', borderRadius: 6 }} /><div className="xs muted">{br(x.d)}</div></div>))}</div></section>
        </div>
      </div>
      <section className="card" style={{ marginTop: 14 }}><div className="ch"><h2>Sessões</h2><span className="sub">{sessoes.length}</span></div>
        {sessoes.length ? <div className="loglist">{sessoes.slice(0, 20).map((s) => <div key={s.id} className="logr"><span className="small muted num">{br(s.d)}</span><span>{fmtMin(s.min)}{s.c ? <span className="muted small"> · M{s.c}</span> : ''}</span><button className="btn xs ghost" aria-label="Apagar" onClick={() => del(s.id)}><Icon n="trash" /></button></div>)}</div> : <div className="empty">Nenhuma sessão registrada.</div>}</section>
    </>
  );
}

/* ---------------- Redação ---------------- */
export function Redacao() {
  useStore();
  return (
    <>
      <div className="vh"><div><h1>Redação</h1><p>Treine com propostas de exemplo, controle de linhas e autoavaliação por aspectos.</p></div></div>
      <div className="grid g2">{TEMAS.map((t) => { const n = S.redacao.filter((r) => r.tema === t.id).length;
        return <section key={t.id} className="card lawcard"><b>{t.t}</b><span className="small ink2">{t.dica}</span><div className="row" style={{ marginTop: 4 }}><span className="small muted">{n ? `${n} versão(ões) salva(s)` : 'Ainda não treinada'}</span><A h={`tema.${t.id}`} className="btn sm pri" style={{ marginLeft: 'auto' }}><Icon n="pen" />Treinar</A></div></section>; })}</div>
    </>
  );
}

export function Tema({ p }) {
  useStore();
  const t = TEMAS.find((x) => x.id === p[0]); const [txt, setTxt] = useState(''); const [av, setAv] = useState({});
  if (!t) return <div className="empty">Proposta não encontrada. <A h="redacao">Voltar</A></div>;
  const palavras = txt.trim() ? txt.trim().split(/\s+/).length : 0; const linhas = Math.ceil((txt.length || 0) / 80);
  const salvar = () => { if (palavras < 30) return toast('Escreva ao menos 30 palavras antes de salvar.'); S.redacao.push({ id: uid(), d: TODAY(), tema: t.id, texto: txt, av }); save(); toast('Redação salva · +120 XP'); flush(checkBadges()); setTxt(''); setAv({}); };
  const anteriores = S.redacao.filter((r) => r.tema === t.id).sort((a, b) => (a.d < b.d ? 1 : -1));
  return (
    <>
      <div className="crumb"><A h="redacao">Redação</A> › Treino</div>
      <div className="vh"><div><h1>{t.t}</h1><p>{t.dica}</p></div></div>
      <div className="grid g2" style={{ alignItems: 'start' }}>
        <section className="card"><textarea className="paper" value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="Escreva aqui o seu texto…" aria-label="Texto da redação" />
          <div className="row between" style={{ marginTop: 10 }}><div className="cnt"><span><b>{palavras}</b> palavras</span><span><b>{txt.length}</b> caracteres</span><span>~<b>{linhas}</b> linhas</span></div><button className="btn pri" onClick={salvar}><Icon n="save" />Salvar redação</button></div></section>
        <div className="stack"><section className="card"><div className="ch"><h2>Autoavaliação</h2></div>
          {ASPECTOS.map((a) => <div key={a} className="asp"><span>{a}</span><span className="tri">{['Não', 'Em parte', 'Sim'].map((l, k) => <button key={k} className={av[a] === k ? `on${k}` : ''} onClick={() => setAv({ ...av, [a]: k })}>{l}</button>)}</span></div>)}</section>
          {anteriores.length > 0 && <section className="card"><div className="ch"><h2>Versões salvas</h2></div>{anteriores.map((r) => <details key={r.id} style={{ padding: '6px 0', borderTop: '1px solid var(--line)' }}><summary style={{ cursor: 'pointer' }}>{brY(r.d)} · {r.texto.trim().split(/\s+/).length} palavras</summary><p className="small ink2" style={{ whiteSpace: 'pre-wrap', marginTop: 6 }}>{r.texto}</p></details>)}</section>}</div>
      </div>
    </>
  );
}

/* ---------------- Tutor (simulado: busca nos materiais locais, sem IA externa) ---------------- */
function responderLocal(pergunta) {
  const q = pergunta.toLowerCase(); const termos = q.split(/\W+/).filter((w) => w.length > 3);
  const pontos = [];
  DOCS.forEach((d) => d.secoes.forEach((s) => { const txt = `${s.h} ${s.p.join(' ')} ${(s.lista || []).join(' ')}`.toLowerCase(); const sc = termos.filter((w) => txt.includes(w)).length; if (sc) pontos.push({ sc, t: `Em "${d.title}" › ${s.h}: ${s.p[0]}` }); }));
  LEIS.forEach((l) => l.itens.forEach((i) => { if (!i.id) return; const sc = termos.filter((w) => `${i.a} ${i.x}`.toLowerCase().includes(w)).length; if (sc) pontos.push({ sc, t: `${l.curto}, ${i.a}: ${i.x}` }); }));
  QUESTOES.forEach((qq) => { const sc = termos.filter((w) => qq.t.toLowerCase().includes(w)).length; if (sc > 1) pontos.push({ sc, t: `Questão relacionada: "${qq.t}" Gabarito: ${qq.tipo === 'ce' ? qq.gab : qq.alts[qq.gab]}. ${qq.exp}` }); });
  const top = pontos.sort((a, b) => b.sc - a.sc).slice(0, 3);
  if (!top.length) return 'Não encontrei esse tema nos materiais desta demonstração. Tente palavras-chave como "prazo", "legalidade", "incapacidade", "crase" ou "phishing".';
  return `Encontrei estes trechos nos materiais locais:\n\n${top.map((x, i) => `${i + 1}. ${x.t}`).join('\n\n')}`;
}
export function Tutor() {
  useStore();
  const [msgs, setMsgs] = useState([{ r: 'a', t: 'Olá! Sou o tutor da demonstração. Não há IA conectada: eu busco trechos nos materiais, leis e questões locais. Pergunte, por exemplo, "qual o prazo da contestação?".' }]);
  const [v, setV] = useState('');
  const enviar = (e) => { e.preventDefault(); const t = v.trim(); if (!t) return; setMsgs((m) => [...m, { r: 'u', t }, { r: 'a', t: responderLocal(t) }]); setV(''); };
  return (
    <>
      <div className="vh"><div><h1>Tutor</h1><p>Tire dúvidas sobre o conteúdo. Confira sempre na lei seca e no material da meta.</p></div></div>
      <section className="card" style={{ maxWidth: 760 }}>
        <div className="chat" aria-live="polite">{msgs.map((m, i) => <div key={i} className={`msg ${m.r}`}>{m.t}</div>)}</div>
        <form className="row" style={{ marginTop: 12, flexWrap: 'nowrap' }} onSubmit={enviar}><input type="text" value={v} onChange={(e) => setV(e.target.value)} placeholder="Digite sua dúvida…" aria-label="Pergunta" /><button className="btn pri" type="submit"><Icon n="go" />Enviar</button></form>
        <p className="xs muted" style={{ marginTop: 8 }}>Para um tutor com IA real, conecte uma API própria no lugar de <code>responderLocal</code> em Ferramentas.jsx.</p></section>
    </>
  );
}

/* ---------------- Ajustes ---------------- */
export function Ajustes() {
  useStore();
  const P = prefs(); const arquivo = useRef(null);
  const upd = (patch) => { Object.assign(S.prefs, patch); save(); };
  const exportar = () => { const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `protocolo-backup-${TODAY()}.json`; a.click(); URL.revokeObjectURL(a.href); };
  const importar = async (e) => { const f = e.target.files[0]; if (!f) return; try { importAll(JSON.parse(await f.text())); toast('Backup restaurado'); } catch { toast('Arquivo inválido.'); } e.target.value = ''; };
  const apagar = () => { if (window.confirm('Apagar TODOS os dados deste aparelho? Esta ação não pode ser desfeita.')) { resetAll(); toast('Dados apagados'); } };
  return (
    <>
      <div className="vh"><div><h1>Ajustes</h1><p>Revisões, tema, leitura e backup dos seus dados.</p></div></div>
      <div className="grid g2" style={{ alignItems: 'start' }}>
        <section className="card"><div className="ch"><h2>Revisões espaçadas</h2></div>
          <div className="form">{[0, 1, 2].map((k) => <label key={k} className="f">R{k + 1} (dias depois)<input type="number" min="1" max="365" value={P.rev[k]} onChange={(e) => { const r = [...P.rev]; r[k] = Math.max(1, Math.min(365, +e.target.value || 1)); upd({ rev: r }); }} /></label>)}</div>
          <p className="xs muted" style={{ marginTop: 8 }}>Padrão: 1, 7 e 30 dias. Hoje: {P.rev.map(intervalo).join(' · ')}.</p></section>
        <section className="card"><div className="ch"><h2>Ritmo e metas</h2></div>
          <div className="form"><label className="f">Metas por semana<input type="number" min="1" max="40" value={P.metaSem} onChange={(e) => upd({ metaSem: Math.max(1, +e.target.value || 1) })} /></label>
            <label className="f">Horas líquidas por dia<input type="number" min="1" max="16" value={P.horas} onChange={(e) => upd({ horas: Math.max(1, +e.target.value || 1) })} /></label>
            <label className="f wide">Data-alvo (ex.: dia da prova)<input type="date" value={P.alvo} onChange={(e) => upd({ alvo: e.target.value })} /></label></div></section>
        <section className="card"><div className="ch"><h2>Aparência e leitura</h2></div>
          <div className="seg">{[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Escuro']].map(([k, l]) => <button key={k} className={P.tema === k ? 'on' : ''} onClick={() => upd({ tema: k })}>{l}</button>)}</div>
          <div className="row" style={{ marginTop: 12 }}><span className="small ink2">Tamanho do texto</span><button className="btn xs" onClick={() => upd({ fz: Math.max(0.8, Math.round((P.fz - 0.1) * 10) / 10) })}>A−</button><b className="num">{Math.round(P.fz * 100)}%</b><button className="btn xs" onClick={() => upd({ fz: Math.min(1.8, Math.round((P.fz + 0.1) * 10) / 10) })}>A+</button></div>
          <div className="qtext" style={{ marginTop: 12, border: '1px dashed var(--line-2)', borderRadius: 12, padding: '6px 12px', background: 'var(--surface-2)' }}>Prévia: a razoável duração do processo é garantia fundamental.</div></section>
        <section className="card"><div className="ch"><h2>Backup dos dados</h2></div>
          <p className="small ink2">Seus dados ficam apenas neste navegador. Exporte um backup para guardar ou levar a outro aparelho.</p>
          <div className="row" style={{ marginTop: 10 }}><button className="btn" onClick={exportar}><Icon n="save" />Exportar</button><button className="btn" onClick={() => arquivo.current.click()}><Icon n="share" />Importar</button><input ref={arquivo} type="file" accept="application/json" hidden onChange={importar} /><button className="btn danger" onClick={apagar}><Icon n="trash" />Apagar tudo</button></div></section>
      </div>
    </>
  );
}

/* ---------------- Login simulado ---------------- */
export function LoginSheet() {
  const [step, setStep] = useState(1); const [email, setEmail] = useState(''); const [code, setCode] = useState(''); const [msg, setMsg] = useState('');
  const enviar = () => { if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setMsg('Digite um e-mail válido.'); setStep(2); setMsg(''); };
  const entrar = () => { if (code.replace(/\D/g, '').length < 6) return setMsg('Digite o código de 6 dígitos.'); S.user = { email: email.trim().toLowerCase(), admin: /admin/.test(email) }; save(); closeSheet(); toast('Pronto! Você entrou (modo demonstração).'); };
  return (
    <>
      <h2>Entrar no {CURSO.titulo}</h2>
      <p className="small ink2" style={{ margin: '6px 0 14px' }}>Modo demonstração: nenhum e-mail é enviado. Informe qualquer e-mail e qualquer código de 6 dígitos. Use um e-mail com “admin” para ver o painel do professor.</p>
      {step === 1 ? <div className="form"><label className="f wide">E-mail<input type="email" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && enviar()} placeholder="voce@exemplo.com" /></label><button className="btn pri" onClick={enviar}>Enviar código</button></div>
        : <div className="form"><p className="small ink2 wide">Código “enviado” para <b>{email}</b>.</p><label className="f wide">Código<input type="text" inputMode="numeric" maxLength={8} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} onKeyDown={(e) => e.key === 'Enter' && entrar()} placeholder="000000" /></label><button className="btn pri" onClick={entrar}>Entrar</button><button className="btn ghost" onClick={() => setStep(1)}>Trocar e-mail</button></div>}
      <p className="small muted" style={{ marginTop: 10 }} aria-live="polite">{msg}</p>
      <div className="row" style={{ marginTop: 10 }}><button className="btn ghost sm" onClick={() => { sessionStorage.setItem('pe-skip-login', '1'); closeSheet(); }}>Continuar sem entrar (só neste aparelho)</button></div>
    </>
  );
}

/* ---------------- Minha conta ---------------- */
export function Conta() {
  useStore();
  const L = level(); const u = S.user;
  return (
    <>
      <div className="vh"><div><h1>Minha conta</h1><p>Plano, nível e dados da sessão.</p></div></div>
      <div className="grid g2" style={{ alignItems: 'start' }}>
        <section className="card"><div className="ch"><h2>Perfil</h2></div>
          <div className="lvl"><div className="badge">{L.n}</div><div className="ltx"><b>Nível {L.n} · {L.nome}</b><span>{fmtNum(L.xp)} XP</span><div className="xpbar"><i style={{ width: `${L.pct}%` }} /></div></div></div>
          <div className="form" style={{ marginTop: 14 }}><label className="f wide">Nome<input type="text" value={S.perfil.nome} onChange={(e) => { S.perfil.nome = e.target.value; save(); }} placeholder="Como quer ser chamado" /></label></div>
          <dl className="cstats" style={{ marginTop: 14 }}><div><dt>E-mail</dt><dd style={{ fontSize: 14 }}>{u ? u.email : 'Sem login (modo local)'}</dd></div><div><dt>Início dos estudos</dt><dd>{S.perfil.inicio ? brY(S.perfil.inicio) : '—'}</dd></div></dl>
          <div className="row" style={{ marginTop: 14 }}>{u ? <button className="btn" onClick={() => { S.user = null; save(); toast('Você saiu.'); }}>Sair</button> : <button className="btn pri" onClick={() => openSheet(() => <LoginSheet />)}>Entrar</button>}</div></section>
        <section className="card"><div className="ch"><h2>Plano</h2></div>
          <p className="small ink2">Nesta recriação não há cobrança. O bloco abaixo mostra como seria a escolha de planos.</p>
          <div className="stack" style={{ marginTop: 10 }}>{PLANOS_FAKE.map(([n, p]) => <div key={n} className="row between" style={{ border: '1px solid var(--line)', borderRadius: 12, padding: '10px 12px' }}><div><b>{n}</b><div className="small muted">{p}</div></div><button className="btn sm gold" onClick={() => toast('Demonstração: sem cobrança.')}>Assinar</button></div>)}</div>
          <div className="hr" /><div className="row"><A h="ajustes" className="btn sm"><Icon n="gear" />Ajustes</A><button className="btn sm danger" onClick={() => { if (window.confirm('Apagar todos os dados locais?')) { resetAll(); toast('Dados apagados'); } }}><Icon n="trash" />Excluir dados</button></div></section>
      </div>
    </>
  );
}

/* ---------------- Painel do professor (dados fictícios) ---------------- */
export function Admin() {
  useStore();
  if (!(S.user && S.user.admin)) return <div className="empty"><b>Área restrita.</b> O painel do professor aparece apenas para contas administradoras. Entre com um e-mail contendo “admin” na demonstração. <A h="inicio">Voltar ao início</A></div>;
  const alunos = [
    { n: 'Aurora', m: 38, x: 3120, u: addDays(TODAY(), 0), s: 12 }, { n: 'Caio', m: 29, x: 2210, u: addDays(TODAY(), -1), s: 7 },
    { n: 'Maru', m: 24, x: 1880, u: addDays(TODAY(), -3), s: 0 }, { n: 'Léo', m: 9, x: 640, u: addDays(TODAY(), -12), s: 0 },
  ];
  const ativos7 = alunos.filter((a) => a.u >= addDays(TODAY(), -6)).length;
  return (
    <>
      <div className="vh"><div><h1>Painel do professor</h1><p>Visão geral dos alunos (dados fictícios para demonstração).</p></div></div>
      <div className="kpis" style={{ marginBottom: 14 }}><div className="kpi"><div className="l">Alunos</div><div className="v">{alunos.length}</div></div><div className="kpi"><div className="l">Ativos em 7 dias</div><div className="v">{ativos7}</div></div><div className="kpi"><div className="l">Média de metas</div><div className="v">{Math.round(alunos.reduce((s, a) => s + a.m, 0) / alunos.length)}</div></div></div>
      <section className="card"><div className="tw"><table className="dtab"><thead><tr><th>Aluno</th><th className="n">Metas</th><th className="n">XP</th><th className="n">Sequência</th><th>Último estudo</th></tr></thead><tbody>{alunos.map((a) => <tr key={a.n}><td><b>{a.n}</b></td><td className="n">{a.m}</td><td className="n">{fmtNum(a.x)}</td><td className="n">{a.s}</td><td>{br(a.u)}</td></tr>)}</tbody></table></div></section>
    </>
  );
}

/* ---------------- Relatos e tutorial ---------------- */
export function Relatos() {
  useStore();
  const [t, setT] = useState('');
  const lista = S.relatos || [];
  const enviar = () => { if (t.trim().length < 5) return toast('Descreva o problema com um pouco mais de detalhe.'); S.relatos = [{ id: uid(), d: TODAY(), t: t.trim() }, ...lista]; save(); setT(''); toast('Relato salvo neste aparelho.'); };
  return (
    <>
      <div className="vh"><div><h1>Meus relatos</h1><p>Registre problemas encontrados. Nesta versão local os relatos ficam apenas neste navegador.</p></div></div>
      <section className="card" style={{ maxWidth: 640 }}><textarea rows={4} value={t} onChange={(e) => setT(e.target.value)} placeholder="O que aconteceu?" /><div className="row" style={{ marginTop: 10 }}><button className="btn pri" onClick={enviar}><Icon n="bug" />Salvar relato</button></div></section>
      {lista.length > 0 && <section className="card" style={{ maxWidth: 640, marginTop: 14 }}>{lista.map((r) => <div key={r.id} className="logr"><span className="small muted num">{br(r.d)}</span><span>{r.t}</span><span /></div>)}</section>}
    </>
  );
}

export function Tutorial() {
  const passos = [['Metas', 'Siga a ordem do cronograma. Marque cada meta concluída para agendar as revisões.', 'plano'], ['Revisões', 'Faça as revisões R1, R2 e R3 nas datas sugeridas.', 'revisoes'], ['Questões', 'Resolva questões e use o Banco de Erros.', 'questoes'], ['Legislação', 'Leia a lei seca com ★ e marque dúvidas.', 'leis'], ['Desempenho', 'Acompanhe acertos, horas e constância.', 'desempenho'], ['Conquistas', 'Ganhe XP, suba de nível e desbloqueie medalhas.', 'conquistas']];
  return (
    <>
      <div className="vh"><div><h1>Tutorial do app</h1><p>Um passeio rápido pelas principais funções.</p></div></div>
      <div className="stack" style={{ maxWidth: 640 }}>{passos.map(([t, d, h], i) => <section key={t} className="card row between"><div className="row" style={{ flexWrap: 'nowrap', alignItems: 'flex-start' }}><span className="code">{i + 1}</span><div><b>{t}</b><div className="small ink2">{d}</div></div></div><A h={h} className="btn sm">Abrir</A></section>)}</div>
    </>
  );
}
