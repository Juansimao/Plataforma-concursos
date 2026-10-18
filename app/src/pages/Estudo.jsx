import { useState, Fragment } from 'react';
import { S, save, useStore, prefs } from '../lib/store.js';
import { DOCS, LEIS } from '../data/content.js';
import { TODAY, checkBadges, XP } from '../lib/logic.js';
import { flush } from '../lib/actions.js';
import { Icon, A, toast } from '../components/ui.jsx';

function Zoom() {
  const fz = +prefs().fz || 1;
  const set = (v) => { prefs().fz = Math.round(Math.min(1.8, Math.max(0.8, v)) * 10) / 10; save(); };
  return (
    <span className="row" style={{ gap: 4 }}>
      <button className="btn xs" aria-label="Diminuir texto" onClick={() => set(fz - 0.1)}>A−</button>
      <span className="small muted num" style={{ minWidth: 38, textAlign: 'center' }}>{Math.round(fz * 100)}%</span>
      <button className="btn xs" aria-label="Aumentar texto" onClick={() => set(fz + 0.1)}>A+</button>
    </span>
  );
}

const hl = (txt, q) => {
  if (!q || q.length < 2) return txt;
  const i = txt.toLowerCase().indexOf(q.toLowerCase()); if (i < 0) return txt;
  return <>{txt.slice(0, i)}<mark>{txt.slice(i, i + q.length)}</mark>{txt.slice(i + q.length)}</>;
};

/* ---------------- Materiais ---------------- */
export function Materiais() {
  useStore();
  const cats = [['guia', 'Guias'], ['resumo', 'Resumos']];
  return (
    <>
      <div className="vh"><div><h1>Materiais</h1><p>Resumos e guias de estudo. Marque cada seção como lida para ganhar XP e acompanhar o progresso.</p></div><A h="leis" className="btn"><Icon n="law" />Legislação</A></div>
      {cats.map(([c, t]) => (
        <section key={c} style={{ marginBottom: 18 }}><h2 style={{ marginBottom: 10 }}>{t}</h2>
          <div className="links">{DOCS.filter((d) => d.cat === c).map((d) => { const lidas = d.secoes.filter((_, i) => S.docs.lido[`${d.id}:${i}`]).length;
            return <A key={d.id} h={`doc.${d.id}`} className="lk"><span className="ic doc"><Icon n="book" /></span><span className="tx"><b>{d.title}</b><span>{d.sub} · {lidas}/{d.secoes.length} lidas</span></span></A>; })}</div></section>
      ))}
    </>
  );
}

export function Doc({ p }) {
  useStore();
  const d = DOCS.find((x) => x.id === p[0]); const [q, setQ] = useState('');
  if (!d) return <div className="empty">Material não encontrado. <A h="materiais">Voltar</A></div>;
  const marcar = (i) => { const k = `${d.id}:${i}`; if (S.docs.lido[k]) delete S.docs.lido[k]; else { S.docs.lido[k] = TODAY(); toast(`Seção lida · +${XP.doc} XP`); } save(); flush(checkBadges()); };
  return (
    <div className="reader">
      <div className="crumb"><A h="materiais">Materiais</A> › {d.title}</div>
      <div className="vh"><div><h1>{d.title}</h1><p>{d.sub}</p></div></div>
      <div className="rd-tools"><input type="search" placeholder="Buscar neste material…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar" /><Zoom /></div>
      <div className="card" style={{ marginBottom: 14 }}><div className="toc"><b className="small muted">Neste material</b>{d.secoes.map((s, i) => <a key={i} href={`#doc.${d.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(`sec${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>{s.h}</a>)}</div></div>
      <article className="doc">
        {d.secoes.map((s, i) => (
          <section key={i} id={`sec${i}`}>
            <h2 className="d-h2">{hl(s.h, q)}<button className={`lido ${S.docs.lido[`${d.id}:${i}`] ? 'on' : ''}`} onClick={() => marcar(i)}>{S.docs.lido[`${d.id}:${i}`] ? '✓ Lido' : 'Marcar como lido'}</button></h2>
            {s.p.map((t, k) => <p key={k}>{hl(t, q)}</p>)}
            {s.lista && <ul>{s.lista.map((t, k) => <li key={k}>{hl(t, q)}</li>)}</ul>}
            {s.tabela && <div className="tw" style={{ margin: '12px 0', border: '1px solid var(--line)', borderRadius: 10 }}><table><thead><tr>{s.tabela.cab.map((c) => <th key={c}>{c}</th>)}</tr></thead><tbody>{s.tabela.linhas.map((l, k) => <tr key={k}>{l.map((c, j) => <td key={j}>{hl(c, q)}</td>)}</tr>)}</tbody></table></div>}
          </section>
        ))}
      </article>
    </div>
  );
}

/* ---------------- Legislação ---------------- */
export function Leis() {
  useStore();
  return (
    <>
      <div className="vh"><div><h1>Legislação</h1><p>Lei seca com marcação ★ nos trechos de maior incidência. Trechos selecionados para a demonstração.</p></div></div>
      <div className="grid g3">{LEIS.map((l) => (
        <section key={l.id} className="card lawcard"><b style={{ fontSize: 16 }}>{l.curto}</b><span className="small ink2">{l.nome}</span><span className="small muted">{l.sub} · {l.itens.filter((i) => i.id).length} dispositivos</span>
          <div className="row" style={{ marginTop: 4 }}>{S.leis.lida[l.id] ? <span className="st ok"><i />Lida</span> : <span className="st"><i />Não lida</span>}<A h={`lei.${l.id}`} className="btn sm pri" style={{ marginLeft: 'auto' }}>Abrir</A></div></section>))}</div>
    </>
  );
}

export function Lei({ p }) {
  useStore();
  const l = LEIS.find((x) => x.id === p[0]); const [q, setQ] = useState(''); const [soStar, setSoStar] = useState(false);
  if (!l) return <div className="empty">Norma não encontrada. <A h="leis">Voltar</A></div>;
  const lida = !!S.leis.lida[l.id];
  const toggleLida = () => { if (lida) delete S.leis.lida[l.id]; else { S.leis.lida[l.id] = TODAY(); toast(`Norma lida · +${XP.lei} XP`); } save(); flush(checkBadges()); };
  const toggleDuv = (id) => { if (S.leis.duv[id]) delete S.leis.duv[id]; else S.leis.duv[id] = TODAY(); save(); };
  return (
    <div className="reader">
      <div className="crumb"><A h="leis">Legislação</A> › {l.curto}</div>
      <div className="vh"><div><h1>{l.nome}</h1><p>{l.sub}. ★ = trecho de alta incidência. Use a bandeira para marcar dúvida.</p></div><button className={`btn ${lida ? 'done' : 'pri'}`} onClick={toggleLida}><Icon n="check" />{lida ? 'Norma lida · desfazer' : 'Marcar norma como lida'}</button></div>
      <div className="rd-tools"><input type="search" placeholder="Buscar artigo ou palavra…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar" /><button className={`chip ${soStar ? 'on' : ''}`} onClick={() => setSoStar(!soStar)}>★ Só incidência</button><Zoom /></div>
      <article className="law">
        {l.itens.map((it, i) => {
          if (it.t === 'tit') return <div key={i} className="lt1">{it.x}</div>;
          const txt = `${it.a} ${it.x}`.toLowerCase();
          if ((soStar && !it.star) || (q.length >= 2 && !txt.includes(q.toLowerCase()))) return null;
          return (
            <div key={it.id} id={it.id} className={`a art ${it.star ? 'sx' : ''} ${S.leis.duv[it.id] ? 'duv' : ''}`}>
              <div>{it.star && <span className="star">★</span>}<b>{hl(it.a, q)}</b> {hl(it.x, q)}</div>
              <button className={`fl ${S.leis.duv[it.id] ? 'on' : ''}`} aria-label="Marcar dúvida" title="Marcar dúvida" onClick={() => toggleDuv(it.id)}><Icon n="flag" /></button>
            </div>
          );
        })}
      </article>
    </div>
  );
}
