import { useEffect, useMemo, useState } from 'react';
import { S, save, useStore } from '../lib/store.js';
import { QUESTOES, FLASHCARDS, DISC, ORD, META } from '../data/content.js';
import { TODAY, pct, fmtPct, fmtNum, uid, qAgg, BLANK, errosPend, checkBadges, XP, discShort, DISC_NAME } from '../lib/logic.js';
import { flush } from '../lib/actions.js';
import { Icon, Bar, A, toast, toastUndo, go } from '../components/ui.jsx';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const acertou = (q, r) => (q.tipo === 'ce' ? r === q.gab : r === q.gab);
const gabTxt = (q) => (q.tipo === 'ce' ? (q.gab === 'C' ? 'Certo' : 'Errado') : `${LERAS_TXT(q)}`);
const LERAS_TXT = (q) => {
  if (typeof q.gab === 'number' && q.alts && q.alts[q.gab]) return `${LETRAS[q.gab]}) ${q.alts[q.gab]}`;
  return q.gab;
};

/* ---------------- Hub de questões ---------------- */
export function Questoes() {
  useStore();
  const ag = qAgg(); const resolvidas = ag.n - ag.b; const pend = QUESTOES.filter((q) => !S.questoes[q.id] || S.questoes[q.id].r === BLANK);
  const [deckAtivo, setDeckAtivo] = useState(null);
  const [cardIdx, setCardIdx] = useState(0);
  const [virado, setVirado] = useState(false);

  const abrirDeck = (d) => { setDeckAtivo(d); setCardIdx(0); setVirado(false); };
  const proximoCard = (acertou) => {
    toast(acertou ? '✓ Cartão dominado! +5 XP' : 'Marcado para rever em breve');
    setVirado(false);
    if (cardIdx + 1 < (deckAtivo.cards || []).length) {
      setCardIdx(cardIdx + 1);
    } else {
      toast('🎉 Parabéns! Você concluiu este baralho!');
      setDeckAtivo(null);
    }
  };

  return (
    <>
      <div className="vh">
        <div>
          <h1>Questões & Flashcards</h1>
          <p>{fmtNum(QUESTOES.length)} questões oficiais da banca VUNESP em Certo/Errado e Múltipla Escolha com gabarito comentado e fundamentação legal. Errou: vai para o Banco de Erros.</p>
        </div>
      </div>
      <div className="kpis" style={{ marginBottom: 14 }}>
        <div className="kpi"><div className="l">Disponíveis</div><div className="v">{fmtNum(QUESTOES.length)}</div></div>
        <div className="kpi"><div className="l">Resolvidas</div><div className="v">{resolvidas}</div></div>
        <div className="kpi"><div className="l">Acerto</div><div className="v">{resolvidas ? fmtPct(pct(ag.c, ag.c + ag.e)) : '—'}</div></div>
        <div className="kpi"><div className="l">No Banco de Erros</div><div className="v">{errosPend().length}</div></div>
      </div>

      {deckAtivo && (
        <section className="card" style={{ marginBottom: 16, border: '2px solid var(--gold)', background: 'var(--surface)' }}>
          <div className="ch">
            <h2>{deckAtivo.nome}</h2>
            <span className="sub">Cartão {cardIdx + 1} de {deckAtivo.cards.length}</span>
            <button className="btn sm ghost" onClick={() => setDeckAtivo(null)}><Icon n="x" />Fechar Baralho</button>
          </div>
          <div 
            onClick={() => setVirado(!virado)}
            style={{ 
              minHeight: 180, 
              padding: 24, 
              background: 'var(--surface-2)', 
              borderRadius: 12, 
              cursor: 'pointer',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              textAlign: 'center',
              border: '1px dashed var(--line)'
            }}
          >
            <span className="small muted" style={{ marginBottom: 8 }}>{virado ? 'VERSO (RESPOSTA / FUNDAMENTO)' : 'FRENTE (PERGUNTA / CONCEITO)'} · Toque para virar</span>
            <div style={{ fontSize: 16, fontWeight: virado ? 600 : 700, color: virado ? 'var(--gold-ink)' : 'var(--ink)' }}>
              {virado ? deckAtivo.cards[cardIdx].b : deckAtivo.cards[cardIdx].f}
            </div>
            {deckAtivo.cards[cardIdx].fonte && <span className="small muted" style={{ marginTop: 12 }}>Fonte: {deckAtivo.cards[cardIdx].fonte}</span>}
          </div>
          <div className="row between" style={{ marginTop: 14 }}>
            <button className="btn" onClick={() => setVirado(!virado)}><Icon n="repeat" />Virar Cartão</button>
            <div className="row" style={{ gap: 8 }}>
              <button className="btn bad" onClick={() => proximoCard(false)}>Errei / Difícil</button>
              <button className="btn ok" onClick={() => proximoCard(true)}>Acertei / Fácil</button>
            </div>
          </div>
        </section>
      )}

      <div className="grid g2" style={{ marginBottom: 16 }}>
        <section className="card"><div className="ch"><h2>Treinar Questões</h2></div>
          <div className="stack">
            <A h="treino.all" className="btn pri"><Icon n="quiz" />{pend.length ? `Resolver pendentes (${fmtNum(pend.length)})` : 'Refazer todas'}</A>
            <A h="treino.sim.15" className="btn"><Icon n="target" />Mini simulado de 15 questões</A>
            <A h="treino.sim.70" className="btn"><Icon n="target" />Simulado Geral TJSP (70 questões)</A>
            <A h="treino.erros" className="btn" disabled={!errosPend().length}><Icon n="alert" />Refazer o Banco de Erros ({errosPend().length})</A>
          </div></section>

        <section className="card"><div className="ch"><h2>Flashcards FSRS ({FLASHCARDS.length} baralhos)</h2></div>
          <div className="stack" style={{ maxHeight: 250, overflowY: 'auto' }}>
            {FLASHCARDS.map((d) => (
              <div key={d.id} className="row between" style={{ padding: '6px 0', borderBottom: '1px solid var(--line)' }}>
                <div>
                  <b style={{ fontSize: 13.5 }}>{d.nome}</b>
                  <div className="small muted">{d.cards ? d.cards.length : 0} cartões</div>
                </div>
                <button className="btn sm" onClick={() => abrirDeck(d)}><Icon n="play" />Estudar</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card"><div className="ch"><h2>Por disciplina ({fmtNum(QUESTOES.length)} questões)</h2></div>
        <div className="grid g3">
          {ORD.map((d) => { 
            const qs = QUESTOES.filter((q) => q.d === d); 
            if (!qs.length) return null; 
            const fe = qs.filter((q) => S.questoes[q.id] && S.questoes[q.id].r !== BLANK).length;
            return (
              <div key={d} className="card lawcard" style={{ background: 'var(--surface-2)', padding: 12 }}>
                <b>{DISC[d] ? DISC[d].nome : d}</b>
                <div className="small muted" style={{ margin: '4px 0 8px' }}>{fe} de {qs.length} resolvidas</div>
                <A h={`treino.d.${d}`} className="btn sm pri" style={{ width: '100%' }}>Treinar {DISC[d] ? DISC[d].curto : d}</A>
              </div>
            ); 
          })}
        </div>
      </section>
    </>
  );
}

/* ---------------- Treino / simulado ---------------- */
function montarFila(p) {
  const modo = p[0];
  if (modo === 'd') return QUESTOES.filter((q) => q.d === p[1]);
  if (modo === 'erros') return errosPend();
  if (modo === 'sim') return shuffle(QUESTOES).slice(0, Math.min(+p[1] || 15, QUESTOES.length));
  const pend = QUESTOES.filter((q) => !S.questoes[q.id] || S.questoes[q.id].r === BLANK);
  return pend.length ? pend : QUESTOES;
}

export function Treino({ p }) {
  useStore();
  const chave = p.join('.');
  const fila = useMemo(() => montarFila(p), [chave]); // eslint-disable-line react-hooks/exhaustive-deps
  const sim = p[0] === 'sim';
  const [i, setI] = useState(0); const [sess, setSess] = useState({}); const [fim, setFim] = useState(false);
  useEffect(() => { setI(0); setSess({}); setFim(false); }, [chave]);
  const q = fila[i]; const resp = q ? sess[q.id] : undefined; const revelada = !!resp && !sim;

  const responder = (r) => {
    if (!q || (resp !== undefined && !sim)) return;
    const ok = r === BLANK ? null : acertou(q, r);
    setSess((s) => ({ ...s, [q.id]: r }));
    S.questoes[q.id] = { r, ok: ok ? 1 : 0, d: TODAY() };
    if (r !== BLANK && ok === false) delete S.erros.dom[q.id];
    save();
    if (!sim && ok) flush(checkBadges());
  };
  useEffect(() => {
    if (!q) return undefined;
    const k = (e) => {
      if (e.target.closest && e.target.closest('input,textarea,select')) return;
      const key = e.key.toLowerCase();
      if (q.tipo === 'ce' && (key === 'c' || key === 'e')) responder(key.toUpperCase());
      else if (q.tipo === 'mc' && 'abcde'.includes(key) && key.length === 1 && LETRAS.indexOf(key.toUpperCase()) < q.alts.length) responder(LETRAS.indexOf(key.toUpperCase()));
      else if (key === 'arrowright' || key === 'enter') avancar();
      else if (key === 'arrowleft') setI((x) => Math.max(0, x - 1));
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  });
  const avancar = () => { if (i + 1 < fila.length) setI(i + 1); else finalizar(); };
  const finalizar = () => {
    if (sim) {
      const c = fila.filter((x) => sess[x.id] !== undefined && sess[x.id] !== BLANK && acertou(x, sess[x.id])).length;
      S.simulados.push({ id: uid(), d: TODAY(), nome: `Mini simulado (${fila.length})`, total: fila.length, c, app: true }); save();
    }
    flush(checkBadges()); setFim(true);
  };

  if (!fila.length) return <div className="empty"><b>Nada para treinar aqui.</b> {p[0] === 'erros' ? 'Seu Banco de Erros está vazio.' : 'Sem questões neste filtro.'} <A h="questoes">Voltar</A></div>;
  if (fim) {
    const lista = fila.map((x) => { const r = sess[x.id]; const st = r === undefined || r === BLANK ? 'blank' : acertou(x, r) ? 'ok' : 'bad'; return { x, st }; });
    const c = lista.filter((l) => l.st === 'ok').length; const e = lista.filter((l) => l.st === 'bad').length;
    return (
      <>
        <div className="vh"><div><h1>Resultado</h1></div></div>
        <section className="card" style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="res-big"><strong>{fmtPct(pct(c, fila.length))}</strong><span>{c} de {fila.length} · {e} erro(s) · {fila.length - c - e} em branco</span></div>
          <div className="row" style={{ margin: '14px 0' }}><button className="btn pri" onClick={() => { setI(0); setSess({}); setFim(false); }}><Icon n="rev" />Refazer</button><A h="questoes" className="btn">Voltar às questões</A>{e > 0 && <A h="erros" className="btn"><Icon n="alert" />Banco de Erros</A>}</div>
          {lista.map(({ x, st }) => (<div key={x.id} className="qli"><span className={`mk ${st}`}>{st === 'ok' ? '✓' : st === 'bad' ? '✗' : '–'}</span><div><div>{x.t}</div><div className="small muted">Gabarito: {gabTxt(x)} · {x.exp}</div></div></div>))}
        </section>
      </>
    );
  }
  const ok = revelada ? (resp === BLANK ? null : acertou(q, resp)) : null;
  return (
    <div className="qcard fade" key={q.id}>
      <div className="qmeta"><span>{DISC_NAME(q.d)} · {q.tipo === 'ce' ? 'Certo ou Errado' : 'Múltipla escolha'}</span><span>{i + 1}/{fila.length}{sim ? ' · modo simulado' : ''}</span></div>
      <div className="qprog"><i style={{ width: `${((i + (resp !== undefined ? 1 : 0)) / fila.length) * 100}%` }} /></div>
      <div className="qtext">{q.t}</div>
      {q.tipo === 'ce' ? (
        <div className="qbtns">
          <button className={`btn c ${resp === 'C' ? 'sel' : ''}`} disabled={revelada} onClick={() => responder('C')}>Certo <span className="small">(C)</span></button>
          <button className={`btn e ${resp === 'E' ? 'sel' : ''}`} disabled={revelada} onClick={() => responder('E')}>Errado <span className="small">(E)</span></button>
          <button className="btn" disabled={revelada} onClick={() => responder(BLANK)} title="Deixar em branco">Pular</button>
        </div>
      ) : (
        <div className="alts">{q.alts.map((a, k) => (
          <button key={k} className={`alt ${revelada && k === q.gab ? 'ok' : ''} ${revelada && resp === k && k !== q.gab ? 'bad' : ''}`} disabled={revelada} onClick={() => responder(k)} style={sim && resp === k ? { borderColor: 'var(--brand)', boxShadow: '0 0 0 2px var(--brand)' } : undefined}>
            <span className="lt">{LETRAS[k]}</span><span>{a}</span></button>))}
          {!revelada && <button className="btn ghost sm" style={{ alignSelf: 'flex-start' }} onClick={() => responder(BLANK)}>Pular</button>}
        </div>
      )}
      {revelada && <div className={`fb ${ok === null ? 'blank' : ok ? 'ok' : 'bad'}`}><b className="h">{ok === null ? 'Em branco' : ok ? `Certo! +${XP.qAny + XP.qOk} XP` : `Errado. +${XP.qAny} XP`}</b>Gabarito: <b>{gabTxt(q)}</b>. {q.exp}</div>}
      <div className="qnav"><button className="btn sm ghost" disabled={i === 0} onClick={() => setI(i - 1)}><Icon n="left" /><span className="qn-l">Anterior</span></button>
        <span className="small muted qn-w">{sim ? 'Correção no fim' : 'Atalhos: C / E / A–E · →'}</span>
        <button className="btn sm pri" onClick={avancar} disabled={!sim && resp === undefined}>{i + 1 < fila.length ? 'Próxima' : 'Finalizar'}<Icon n="right" /></button></div>
    </div>
  );
}

/* ---------------- Banco de Erros ---------------- */
export function Erros() {
  useStore();
  const erros = errosPend(); const dominados = QUESTOES.filter((q) => S.erros.dom[q.id]);
  const dominar = (id) => { S.erros.dom[id] = TODAY(); save(); toastUndo('Marcado como dominado', () => { delete S.erros.dom[id]; save(); }); flush(checkBadges()); };
  const porDisc = ORD.map((d) => [d, erros.filter((q) => q.d === d).length]).filter(([, n]) => n);
  return (
    <>
      <div className="vh"><div><h1>Banco de Erros</h1><p>Tudo o que você errou nas questões do app. Reveja a explicação, refaça e marque como dominado quando tiver certeza.</p></div>{erros.length > 0 && <A h="treino.erros" className="btn pri"><Icon n="rev" />Refazer os {erros.length} erros</A>}</div>
      <div className="kpis" style={{ marginBottom: 14 }}><div className="kpi"><div className="l">Para revisar</div><div className="v" style={{ color: erros.length ? 'var(--bad)' : 'inherit' }}>{erros.length}</div></div><div className="kpi"><div className="l">Dominados</div><div className="v">{dominados.length}</div></div></div>
      {porDisc.length > 0 && <div className="chips" style={{ marginBottom: 14 }}>{porDisc.map(([d, n]) => <span key={d} className="chip">{discShort(d)} · {n}</span>)}</div>}
      {erros.length ? <div className="stack">{erros.map((q) => (
        <section key={q.id} className="card"><div className="small muted">{DISC_NAME(q.d)} · {q.tipo === 'ce' ? 'Certo ou Errado' : 'Múltipla escolha'}</div>
          <p style={{ margin: '6px 0', fontFamily: 'var(--f-read)' }}>{q.t}</p>
          <div className="note green"><b className="t">Gabarito: {gabTxt(q)}</b>{q.exp}</div>
          <div className="row" style={{ marginTop: 10 }}><button className="btn sm ok" onClick={() => dominar(q.id)}><Icon n="check" />Já domino</button>{META && <A h={`treino.d.${q.d}`} className="btn sm ghost">Treinar disciplina</A>}</div></section>))}</div>
        : <div className="empty"><b>Banco de Erros vazio.</b> Erre uma questão e ela aparece aqui para revisão. <A h="questoes">Ir para as questões</A></div>}
    </>
  );
}
