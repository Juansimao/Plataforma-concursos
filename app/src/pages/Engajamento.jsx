import { useEffect, useMemo, useState } from 'react';
import { S, save, useStore, prefs } from '../lib/store.js';
import { QUESTOES, RANKING_FAKE, JOGOS } from '../data/content.js';
import { TODAY, br, fmtNum, level, breakdown, LEVELS, BADGES, XP, doneList, streak, pace, checkBadges } from '../lib/logic.js';
import { Icon, A, toast } from '../components/ui.jsx';
import { flush } from '../lib/actions.js';

/* ---------------- Conquistas ---------------- */
export function Conquistas() {
  useStore();
  const L = level(); const b = breakdown(); const had = S.perfil.badges || {};
  const rows = [
    ['Metas concluídas', b.metas, `+${XP.meta} por meta de estudo · +${XP.rev} revisão do cronograma · +${XP.sim} simulado`],
    ['Revisões espaçadas', b.revs, `+${XP.revR} por revisão R1, R2 ou R3`],
    ['Questões do app', b.q, `+${XP.qAny} por questão respondida · +${XP.qOk} por acerto`],
    ['Questões externas', b.ext, '+1 por questão e +1 por acerto registrados (até 300 por registro)'],
    ['Horas líquidas', b.horas, `+${XP.hora} por hora no cronômetro`],
    ['Simulados lançados', b.sims, `+${XP.simL} por simulado`],
    ['Redações', b.red, `+${XP.red} por redação salva`],
    ['Normas lidas', b.leis, `+${XP.lei} por norma marcada como lida`],
    ['Seções de resumo lidas', b.docs, `+${XP.doc} por seção`],
    ['Dias com estudo', b.dias, `+${XP.dia} por dia ativo`],
    ['Jogos', b.jogos, 'até 30 XP por rodada, no máximo 150 XP por dia'],
  ];
  const compartilhar = async () => {
    const txt = `Estou no nível ${L.n} (${L.nome}) com ${fmtNum(L.xp)} XP, ${doneList().length} metas e ${streak()} dias seguidos de estudo!`;
    try { if (navigator.share) await navigator.share({ text: txt }); else { await navigator.clipboard.writeText(txt); toast('Texto copiado para a área de transferência.'); } } catch { /* cancelado */ }
  };
  return (
    <>
      <div className="vh"><div><h1>Conquistas</h1><p>Cada ação de estudo vale XP. Os níveis mostram o quanto você já construiu; as medalhas marcam os pontos de virada da preparação.</p></div>
        <div className="row"><button className="btn pri" onClick={compartilhar}><Icon n="share" />Compartilhar evolução</button><A h="ranking" className="btn"><Icon n="trophy" />Ranking</A></div></div>
      <section className="card"><div className="lvl"><div className="badge" style={{ width: 72, height: 72, fontSize: 28 }}>{L.n}</div><div className="ltx"><b style={{ fontSize: 20 }}>Nível {L.n} · {L.nome}</b><span>{fmtNum(L.xp)} XP{L.next ? ` · faltam ${fmtNum(L.next - L.xp)} XP para ${LEVELS[L.n][1]}` : ' · nível máximo'}</span><div className="xpbar"><i style={{ width: `${L.pct}%` }} /></div></div></div></section>
      <div className="grid g2" style={{ marginTop: 14, alignItems: 'start' }}>
        <section className="card"><div className="ch"><h2>Medalhas</h2><span className="sub">{Object.keys(had).length}/{BADGES.length}</span></div>
          <div className="badges">{BADGES.map((x) => (<div key={x.id} className={`bdg ${had[x.id] ? 'on' : ''}`}><span className="ic"><Icon n={x.ic} /></span><b>{x.nome}</b><span className="d">{x.desc}{had[x.id] ? ` · ${br(had[x.id])}` : ''}</span></div>))}</div></section>
        <div className="stack">
          <section className="card"><div className="ch"><h2>De onde vem o seu XP</h2><span className="sub">{fmtNum(b.total)} XP</span></div>
            <div className="tw"><table className="dtab"><tbody>{rows.map(([l, v, d]) => <tr key={l}><td><b>{l}</b><div className="xs muted">{d}</div></td><td className="n"><b>{fmtNum(v)}</b></td></tr>)}</tbody></table></div></section>
          <section className="card"><div className="ch"><h2>Níveis</h2></div>
            <div>{LEVELS.map(([xp, nome], i) => <div key={nome} className={`lvlrow ${i + 1 < L.n ? 'on' : ''} ${i + 1 === L.n ? 'cur on' : ''}`}><span className="n">{i + 1}</span><b>{nome}</b><span className="small muted num">{fmtNum(xp)} XP</span></div>)}</div></section>
        </div>
      </div>
    </>
  );
}

/* ---------------- Ranking (dados de demonstração + você) ---------------- */
export function Ranking() {
  useStore();
  const P = prefs(); const U = S.ui; const L = level(); const pc = pace();
  const [nick, setNick] = useState(P.nick); const [opt, setOpt] = useState(P.rank);
  const me = { id: 'me', nick: P.nick || 'Você', lvl: L.n, xp: L.xp, metas: doneList().length, n7: pc.n7, streak: streak() };
  const base = P.rank && P.nick ? [...RANKING_FAKE, me] : RANKING_FAKE;
  const key = U.rankTab === 'metas' ? 'metas' : U.rankTab === 'semana' ? 'n7' : 'xp';
  const rows = base.slice().sort((a, b) => (b[key] || 0) - (a[key] || 0) || b.xp - a.xp);
  const pos = rows.findIndex((r) => r.id === 'me');
  const salvar = () => {
    const n = nick.trim().slice(0, 24); if (opt && n.length < 3) return toast('Escolha um apelido com pelo menos 3 letras.');
    P.nick = n; P.rank = opt; save(); toast(opt ? 'Você entrou no ranking' : 'Você saiu do ranking');
  };
  return (
    <>
      <div className="vh"><div><h1>Ranking</h1><p>Alunos que escolheram competir, por XP, metas ou metas na semana. Nesta demonstração os demais participantes são fictícios.</p></div>{pos >= 0 && <span className="pill-lvl"><Icon n="trophy" />Você está em {pos + 1}º de {rows.length}</span>}</div>
      <div className="grid g2" style={{ alignItems: 'start' }}>
        <section className="card"><div className="ch"><h2>Classificação</h2><div className="seg">{[['xp', 'XP total'], ['metas', 'Metas'], ['semana', 'Na semana']].map(([k, l]) => <button key={k} className={(U.rankTab || 'xp') === k ? 'on' : ''} onClick={() => { S.ui.rankTab = k; save(); }}>{l}</button>)}</div></div>
          <div>{rows.map((r, i) => (<div key={r.id} className={`rk-row ${r.id === 'me' ? 'me' : ''}`}><span className={`pos ${i < 3 ? 'top' : ''}`}>{i + 1}º</span><div className="nm"><b>{r.nick}{r.id === 'me' ? ' (você)' : ''}</b><span>Nível {r.lvl} · {r.metas} metas · {r.n7} nesta semana{r.streak ? ` · ${r.streak} dias seguidos` : ''}</span></div><span className="xp">{fmtNum(key === 'xp' ? r.xp : r[key] || 0)}{key === 'xp' ? ' XP' : ''}</span></div>))}</div></section>
        <section className="card"><div className="ch"><h2>Sua participação</h2></div>
          <p className="small ink2">O ranking é opcional e usa só um apelido: ninguém vê o seu nome ou e-mail. Você pode sair quando quiser.</p>
          <div className="form" style={{ marginTop: 10 }}><label className="f">Apelido no ranking<input type="text" maxLength={24} value={nick} onChange={(e) => setNick(e.target.value)} placeholder="Ex.: Futuro escrevente" /></label>
            <label className="row small ink2" style={{ gap: 8, alignSelf: 'center' }}><input type="checkbox" checked={opt} onChange={(e) => setOpt(e.target.checked)} />Participar do ranking</label>
            <button className="btn pri" onClick={salvar}><Icon n="check" />Salvar</button></div></section>
      </div>
    </>
  );
}

/* ---------------- Jogos: relâmpago de 60s com questões Certo/Errado ---------------- */
/* ---------------- Jogos Oficiais Protocolo Escrevente ---------------- */
export function Jogos() {
  useStore();
  const hoje = TODAY(); const J = S.jogos || (S.jogos = { xp: 0, ac: 0, dia: {}, n: 0 });
  const [modoAtivo, setModoAtivo] = useState(null); // 'quem' | 'comp' | 'crime' | 'rel' | 'caca'
  const [idx, setIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respondido, setRespondido] = useState(null);
  const [tempo, setTempo] = useState(60);

  // Dados dos jogos com proteção
  const JOGOS_SAFE = JOGOS || {};
  const quemList = JOGOS_SAFE.quem || [];
  const compList = JOGOS_SAFE.comp || [];
  const crimeList = JOGOS_SAFE.crime || [];
  const ceList = JOGOS_SAFE.ce || [];
  const cacaList = (JOGOS_SAFE.pt && JOGOS_SAFE.pt.caca) || [];

  // Timer para o modo relâmpago
  useEffect(() => {
    if (modoAtivo !== 'rel' || tempo <= 0) return undefined;
    const id = setInterval(() => setTempo((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [modoAtivo, tempo]);

  const iniciar = (m) => {
    setModoAtivo(m);
    setIdx(0);
    setAcertos(0);
    setRespondido(null);
    setTempo(60);
  };

  const sair = () => {
    setModoAtivo(null);
    setRespondido(null);
  };

  const darXP = (pontos) => {
    const usado = J.dia[hoje] || 0;
    const ganho = Math.max(0, Math.min(pontos, 150 - usado));
    J.xp += ganho; J.ac += 1; J.dia[hoje] = usado + ganho; save();
    if (ganho) toast(`+${ganho} XP nos jogos!`);
  };

  // --- 1. QUEM DISSE ISSO ---
  if (modoAtivo === 'quem') {
    if (!quemList.length) return <div className="card empty">Nenhum desafio deste jogo disponível no momento. <button className="btn sm" onClick={sair}>Voltar</button></div>;
    const item = quemList[idx % quemList.length] || {};
    const kArray = Array.isArray(item.k) ? item.k : (item.k != null ? [item.k] : []);
    const clickPalavra = (i) => {
      if (respondido !== null) return;
      const ok = kArray.includes(i);
      setRespondido(ok ? 'certo' : 'errado');
      if (ok) { setAcertos(a => a + 1); darXP(5); }
    };
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="row between" style={{ marginBottom: 12 }}>
          <button className="btn sm" onClick={sair}><Icon n="left" />Sair do Jogo</button>
          <span className="small muted">Quem Disse Isso? · Item {idx + 1} de {quemList.length} · {item.ref || ''}</span>
        </div>
        <section className="card">
          <div className="ch"><h2>Toque na palavra que a VUNESP trocou!</h2></div>
          <p className="small ink2" style={{ marginBottom: 16 }}>A banca alterou um termo da lei seca. Encontre e toque na pegadinha:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: 16, background: 'var(--surface-2)', borderRadius: 12, lineHeight: 1.8, fontSize: 16 }}>
            {(item.w || []).map((palavra, i) => (
              <span
                key={i}
                onClick={() => clickPalavra(i)}
                style={{
                  cursor: respondido ? 'default' : 'pointer',
                  padding: '2px 6px',
                  borderRadius: 6,
                  background: respondido && kArray.includes(i) ? 'var(--gold)' : 'var(--surface)',
                  color: respondido && kArray.includes(i) ? '#0d1b2a' : 'inherit',
                  fontWeight: respondido && kArray.includes(i) ? 800 : 500,
                  border: '1px solid var(--line)'
                }}
              >
                {palavra}
              </span>
            ))}
          </div>
          {respondido && (
            <div style={{ marginTop: 16, padding: 14, background: respondido === 'certo' ? 'rgba(11,122,40,0.1)' : 'rgba(180,35,24,0.1)', borderRadius: 10 }}>
              <b>{respondido === 'certo' ? '✓ Na mosca!' : '✗ Não era essa palavra.'}</b>
              <p style={{ marginTop: 6, fontSize: 14 }}><b>Como está na lei:</b> {item.orig || ''}</p>
              <p className="small muted" style={{ marginTop: 4 }}>Palavra trocada: <s>{(item.w || [])[kArray[0]]}</s> ➔ <b>{item.cert || ''}</b></p>
              <button className="btn pri sm" style={{ marginTop: 10 }} onClick={() => { setIdx(idx + 1); setRespondido(null); }}>Próximo desafio ➔</button>
            </div>
          )}
        </section>
      </div>
    );
  }

  // --- 2. COMPLETE O ARTIGO ---
  if (modoAtivo === 'comp') {
    if (!compList.length) return <div className="card empty">Nenhum desafio deste jogo disponível. <button className="btn sm" onClick={sair}>Voltar</button></div>;
    const item = compList[idx % compList.length] || {};
    const fichas = item.fich || [];
    const clickFicha = (f) => {
      if (respondido !== null) return;
      const ok = item.lac && item.lac[0] && item.lac[0].cert === f;
      setRespondido(ok ? 'certo' : 'errado');
      if (ok) { setAcertos(a => a + 1); darXP(5); }
    };
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="row between" style={{ marginBottom: 12 }}>
          <button className="btn sm" onClick={sair}><Icon n="left" />Sair do Jogo</button>
          <span className="small muted">Complete o Artigo · Item {idx + 1} · {item.ref}</span>
        </div>
        <section className="card">
          <div className="ch"><h2>Qual palavra completa a lacuna da lei?</h2></div>
          <div style={{ padding: 16, background: 'var(--surface-2)', borderRadius: 12, fontSize: 16, lineHeight: 1.8, margin: '14px 0' }}>
            {item.w.map((p, i) => (
              <span key={i}>
                {item.lac && item.lac.some(l => l.i === i) ? (
                  <span style={{ padding: '2px 10px', margin: '0 4px', background: 'var(--gold)', color: '#0d1b2a', fontWeight: 800, borderRadius: 6 }}>
                    {respondido ? item.lac[0].cert : '________'}
                  </span>
                ) : ` ${p} `}
              </span>
            ))}
          </div>
          <p className="small muted">Escolha a opção correta:</p>
          <div className="row" style={{ gap: 10, marginTop: 8 }}>
            {item.fich.map((f, i) => (
              <button key={i} className="btn" disabled={respondido !== null} onClick={() => clickFicha(f)} style={{ fontSize: 15, padding: '10px 18px', fontWeight: 700 }}>
                {f}
              </button>
            ))}
          </div>
          {respondido && (
            <div style={{ marginTop: 14 }}>
              <span className={`st ${respondido === 'certo' ? 'ok' : 'bad'}`}>{respondido === 'certo' ? '✓ Correto!' : '✗ Errado!'}</span>
              <button className="btn pri sm" style={{ marginLeft: 12 }} onClick={() => { setIdx(idx + 1); setRespondido(null); }}>Próximo ➔</button>
            </div>
          )}
        </section>
      </div>
    );
  }

  // --- 3. QUAL É O CRIME? ---
  if (modoAtivo === 'crime') {
    if (!crimeList.length) return <div className="card empty">Nenhum cenário de crime disponível. <button className="btn sm" onClick={sair}>Voltar</button></div>;
    const item = crimeList[idx % crimeList.length] || {};
    const opcoes = item.op || [];
    const clickOp = (op) => {
      if (respondido !== null) return;
      const ok = op === item.c;
      setRespondido(ok ? 'certo' : 'errado');
      if (ok) { setAcertos(a => a + 1); darXP(8); }
    };
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="row between" style={{ marginBottom: 12 }}>
          <button className="btn sm" onClick={sair}><Icon n="left" />Sair do Jogo</button>
          <span className="small muted">Qual é o Crime? · Item {idx + 1} de {crimeList.length} · {item.ref || ''}</span>
        </div>
        <section className="card">
          <div className="ch"><h2>Enquadre a conduta no crime correto:</h2></div>
          <div style={{ padding: 16, background: 'var(--surface-2)', borderRadius: 12, fontSize: 15, lineHeight: 1.6, margin: '12px 0' }}>
            {item.q || ''}
          </div>
          <div className="stack" style={{ gap: 8 }}>
            {opcoes.map((op, i) => (
              <button
                key={i}
                className="btn"
                disabled={respondido !== null}
                onClick={() => clickOp(op)}
                style={{
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  background: respondido && op === item.c ? 'var(--ok-wash)' : undefined,
                  borderColor: respondido && op === item.c ? 'var(--ok)' : undefined,
                  fontWeight: 600
                }}
              >
                {op}
              </button>
            ))}
          </div>
          {respondido && (
            <div style={{ marginTop: 16, padding: 14, background: 'var(--surface-3)', borderRadius: 10 }}>
              <b>{respondido === 'certo' ? '✓ Exato! É ' + item.c : '✗ Resposta incorreta. Crime correto: ' + item.c}</b>
              <p className="small" style={{ marginTop: 6, lineHeight: 1.5 }}>{item.exp || ''}</p>
              <button className="btn pri sm" style={{ marginTop: 10 }} onClick={() => { setIdx(idx + 1); setRespondido(null); }}>Próximo caso ➔</button>
            </div>
          )}
        </section>
      </div>
    );
  }

  // --- 4. RELÂMPAGO C/E ---
  if (modoAtivo === 'rel') {
    if (!ceList.length) return <div className="card empty">Nenhuma questão relâmpago disponível. <button className="btn sm" onClick={sair}>Voltar</button></div>;
    const q = ceList[idx % ceList.length] || {};
    const responderCE = (r) => {
      if (r === q.g) { setAcertos(a => a + 1); darXP(3); }
      setIdx(x => x + 1);
    };
    if (tempo <= 0) {
      return (
        <section className="card" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: 30 }}>
          <h2>Tempo Esgotado!</h2>
          <div className="res-big" style={{ margin: '16px 0' }}><strong>{acertos}</strong><span>acertos em 60 segundos</span></div>
          <div className="row center" style={{ gap: 10 }}><button className="btn pri" onClick={() => iniciar('rel')}><Icon n="rev" />Jogar de novo</button><button className="btn" onClick={sair}>Voltar aos Jogos</button></div>
        </section>
      );
    }
    return (
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div className="row between" style={{ marginBottom: 12 }}>
          <button className="btn sm" onClick={sair}><Icon n="left" />Sair</button>
          <span className="timer" style={{ fontSize: 20, fontWeight: 800, color: tempo < 10 ? 'var(--bad)' : 'var(--gold)' }}>{tempo}s</span>
          <span className="small muted">{acertos} acertos</span>
        </div>
        <section className="card">
          <div className="ch"><h2>Certo ou Errado Relâmpago</h2><span className="sub">{q.ref}</span></div>
          <div className="qtext" style={{ margin: '16px 0', fontSize: 16, lineHeight: 1.5 }}>{q.t}</div>
          <div className="qbtns" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <button className="btn c" style={{ height: 48, fontSize: 16, fontWeight: 700 }} onClick={() => responderCE('C')}>Certo</button>
            <button className="btn e" style={{ height: 48, fontSize: 16, fontWeight: 700 }} onClick={() => responderCE('E')}>Errado</button>
          </div>
        </section>
      </div>
    );
  }

  // --- HUB PRINCIPAL DE JOGOS ---
  return (
    <>
      <div className="vh">
        <div>
          <h1>Jogos Oficiais do Protocolo</h1>
          <p>Minijogos de 1 a 3 minutos para fixar lei seca, pegar pegadinhas e treinar agilidade nos intervalos.</p>
        </div>
      </div>

      <div className="kpis" style={{ marginBottom: 16 }}>
        <div className="kpi"><div className="l">XP nos Jogos</div><div className="v">{J.xp || 0}</div></div>
        <div className="kpi"><div className="l">Acertos Totais</div><div className="v">{J.ac || 0}</div></div>
        <div className="kpi"><div className="l">Desafios Disponíveis</div><div className="v">{quemList.length + compList.length + ceList.length + crimeList.length}</div></div>
      </div>

      <div className="grid g2">
        <section className="card lawcard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="ch">
              <b style={{ fontSize: 16 }}>Quem Disse Isso?</b>
              <span className="sub">{quemList.length} desafios</span>
            </div>
            <p className="small ink2">Um artigo com uma palavra trocada exatamente do jeito que a VUNESP faz. Encontre e toque na pegadinha da banca!</p>
          </div>
          <button className="btn pri" style={{ marginTop: 14 }} onClick={() => iniciar('quem')}><Icon n="play" />Jogar Quem Disse Isso</button>
        </section>

        <section className="card lawcard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="ch">
              <b style={{ fontSize: 16 }}>Complete o Artigo</b>
              <span className="sub">{compList.length} lacunas</span>
            </div>
            <p className="small ink2">Preencha as lacunas da lei seca tocando na palavra correta. Fixação rápida dos dispositivos mais cobrados.</p>
          </div>
          <button className="btn pri" style={{ marginTop: 14 }} onClick={() => iniciar('comp')}><Icon n="play" />Jogar Complete o Artigo</button>
        </section>

        <section className="card lawcard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="ch">
              <b style={{ fontSize: 16 }}>Qual é o Crime?</b>
              <span className="sub">{crimeList.length} cenários</span>
            </div>
            <p className="small ink2">Uma cena prática da prova e quatro crimes parecidos (Concussão, Corrupção, Prevaricação, etc.). Enquadre pelo verbo do tipo penal!</p>
          </div>
          <button className="btn pri" style={{ marginTop: 14 }} onClick={() => iniciar('crime')}><Icon n="play" />Jogar Qual é o Crime?</button>
        </section>

        <section className="card lawcard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="ch">
              <b style={{ fontSize: 16 }}>Certo ou Errado Relâmpago</b>
              <span className="sub">{ceList.length} itens</span>
            </div>
            <p className="small ink2">60 segundos de adrenalina! Responda o máximo de afirmações da lei seca antes que o cronômetro zere.</p>
          </div>
          <button className="btn pri" style={{ marginTop: 14 }} onClick={() => iniciar('rel')}><Icon n="play" />Jogar Relâmpago (60s)</button>
        </section>
      </div>
    </>
  );
}

export function Indique() {
  const link = `${location.origin}/?ref=demo`;
  return (
    <>
      <div className="vh"><div><h1>Indique e ganhe</h1><p>Programa de indicação (demonstração). Nesta versão local não há pagamentos nem comissões reais.</p></div></div>
      <section className="card" style={{ maxWidth: 640 }}>
        <div className="ch"><h2>Seu link de indicação</h2></div>
        <div className="form"><label className="f wide">Link<input type="text" readOnly value={link} onFocus={(e) => e.target.select()} /></label>
          <button className="btn pri" onClick={async () => { try { await navigator.clipboard.writeText(link); toast('Link copiado'); } catch { toast('Copie manualmente o link acima.'); } }}><Icon n="share" />Copiar link</button></div>
        <div className="note gold" style={{ marginTop: 14 }}><b className="t">Como funcionaria</b>Quem assinar pelo seu link geraria uma comissão sobre cada assinatura indicada. Aqui é só a tela de exemplo.</div>
      </section>
    </>
  );
}
