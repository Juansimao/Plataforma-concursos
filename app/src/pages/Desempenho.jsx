import { useState } from 'react';
import { S, save, useStore } from '../lib/store.js';
import { META, METAS, ORD, DISC } from '../data/content.js';
import {
  TODAY, addDays, br, brY, fmtNum, fmtPct, fmtMin, pct, uid, diffDays, qAgg, tecAgg, minutesBy, minTotal, activityDays, streak, doneList, revList, checkBadges, xpFor, discShort, DISC_NAME,
} from '../lib/logic.js';
import { flush } from '../lib/actions.js';
import { Icon, A, LineChart, HBars, Heatmap, toast, toastUndo } from '../components/ui.jsx';

function porDisciplina() {
  const ag = qAgg(); const ta = tecAgg();
  return ORD.map((d) => {
    const x = ag.by[d] || { c: 0, e: 0 }; const tq = (ta.by[d] || {}).q || 0; const ta_ = (ta.by[d] || {}).a || 0;
    const total = x.c + x.e + tq; const ac = x.c + ta_;
    return { d, total, ac, v: pct(ac, total) };
  }).filter((r) => r.total);
}
const corPct = (v) => (v >= 70 ? 'var(--ok-dot)' : v >= 50 ? 'var(--warn-dot)' : 'var(--bad-dot)');

/* ---------------- Desempenho ---------------- */
export function Desempenho() {
  useStore();
  const t = TODAY(); const ag = qAgg(); const ta = tecAgg(); const dias = activityDays();
  const totalQ = ag.c + ag.e + ta.q; const totalA = ag.c + ta.a;
  const semanas = Array.from({ length: 8 }, (_, i) => { const fim = addDays(t, -7 * (7 - i)); const ini = addDays(fim, -6); return { l: br(ini), ini, fim }; });
  const serie = semanas.map((w) => {
    const q = Object.values(S.questoes).filter((a) => a.r !== 'B' && a.d >= w.ini && a.d <= w.fim);
    const ext = S.tec.filter((e) => e.d >= w.ini && e.d <= w.fim);
    const n = q.length + ext.reduce((s, e) => s + e.q, 0); const c = q.filter((a) => a.ok).length + ext.reduce((s, e) => s + e.a, 0);
    return { n, p: n ? pct(c, n) : null };
  });
  const rows = porDisciplina().map((r) => ({ l: discShort(r.d), v: r.v, sub: `${r.ac}/${r.total}`, cor: corPct(r.v) }));
  const diasAtivos = Object.keys(dias).length;
  let maior = 0, atual = 0; const all = Object.keys(dias).sort();
  all.forEach((d, i) => { atual = i && diffDays(d, all[i - 1]) === 1 ? atual + 1 : 1; maior = Math.max(maior, atual); });
  return (
    <>
      <div className="vh"><div><h1>Desempenho</h1><p>Painel com tudo o que você já fez: questões do app, registros externos, horas e constância.</p></div><A h="relatorio" className="btn"><Icon n="doc" />Relatório</A></div>
      <div className="kpis" style={{ marginBottom: 14 }}>
        <div className="kpi"><div className="l">Questões</div><div className="v">{fmtNum(totalQ)}</div><div className="d">{ag.c + ag.e} no app · {fmtNum(ta.q)} externas</div></div>
        <div className="kpi"><div className="l">Acerto geral</div><div className="v">{totalQ ? fmtPct(pct(totalA, totalQ)) : '—'}</div></div>
        <div className="kpi"><div className="l">Horas líquidas</div><div className="v">{fmtMin(minTotal())}</div></div>
        <div className="kpi"><div className="l">Metas</div><div className="v">{doneList().length}<small> concluídas</small></div></div>
        <div className="kpi"><div className="l">Sequência</div><div className="v">{streak()}<small> dias</small></div></div>
      </div>
      <div className="grid g2">
        <section className="card"><div className="ch"><h2>Acerto por semana</h2><span className="sub">últimas 8 semanas</span></div>
          {serie.some((s) => s.n) ? <LineChart labels={semanas.map((w) => w.l)} max={100} series={[{ nome: '% de acerto', cor: 'var(--s1)', data: serie.map((s) => s.p) }]} /> : <div className="empty">Resolva questões para ver a evolução.</div>}</section>
        <section className="card"><div className="ch"><h2>Acerto por disciplina</h2></div>
          {rows.length ? <HBars rows={rows} /> : <div className="empty">Sem dados por disciplina ainda.</div>}
          <p className="xs muted" style={{ marginTop: 6 }}>Verde ≥ 70% · amarelo ≥ 50% · vermelho abaixo de 50%.</p></section>
      </div>
      <section className="card" style={{ marginTop: 14 }}><div className="ch"><h2>Constância</h2><span className="sub">últimas 20 semanas</span></div>
        <div className="cons"><Heatmap days={dias} today={t} weeks={20} />
          <dl className="cstats"><div><dt>Dias com estudo</dt><dd>{diasAtivos}</dd></div><div><dt>Sequência atual</dt><dd>{streak()} <small>dias</small></dd></div><div><dt>Maior sequência</dt><dd>{maior} <small>dias</small></dd></div><div><dt>Horas hoje</dt><dd>{fmtMin(minutesBy()[t] || 0)}</dd></div></dl></div></section>
    </>
  );
}

/* ---------------- Registro externo ---------------- */
export function Registro() {
  useStore();
  const t = TODAY();
  const add = (e) => {
    e.preventDefault(); const fd = new FormData(e.currentTarget);
    const q = parseInt(fd.get('q'), 10); const a = parseInt(fd.get('a'), 10); const d = fd.get('d') || t; const min = parseInt(fd.get('min'), 10);
    if (!(q > 0)) return toast('Informe quantas questões você fez.');
    if (!(a >= 0) || a > q) return toast('Os acertos devem ficar entre 0 e o total.');
    if (d > t) return toast('A data não pode ser no futuro.');
    const c = +fd.get('c') || 0;
    S.tec.push({ id: uid(), d, c, s: c ? META[c].d : fd.get('s'), q, a, min: min > 0 ? min : 0, src: fd.get('src') }); save();
    toast(`Registrado: ${a}/${q} · +${xpFor('ext', { q, a })} XP`); flush(checkBadges()); e.currentTarget.reset();
  };
  const del = (id) => { const i = S.tec.findIndex((x) => x.id === id); if (i < 0) return; const [rm] = S.tec.splice(i, 1); save(); toastUndo('Registro apagado', () => { S.tec.push(rm); save(); }); };
  const lista = S.tec.slice().sort((a, b) => (a.d < b.d ? 1 : -1));
  return (
    <>
      <div className="vh"><div><h1>Registro externo</h1><p>Lance aqui as questões que resolveu fora do app (bancos de questões, provas anteriores, cadernos). O desempenho e o XP consideram esses registros.</p></div></div>
      <div className="grid g2">
        <section className="card"><div className="ch"><h2>Novo registro</h2></div>
          <form className="form" onSubmit={add}>
            <label className="f">Data<input type="date" name="d" defaultValue={t} max={t} /></label>
            <label className="f">Meta (opcional)<select name="c" defaultValue=""><option value="">—</option>{METAS.filter((m) => m.tipo === 'meta').map((m) => <option key={m.n} value={m.n}>M{m.n} · {m.top.slice(0, 32)}</option>)}</select></label>
            <label className="f">Disciplina<select name="s">{ORD.map((d) => <option key={d} value={d}>{DISC[d].curto}</option>)}</select></label>
            <label className="f">Fonte<select name="src"><option>Externo</option><option>Prova anterior</option><option>Caderno</option><option>Outro</option></select></label>
            <label className="f">Questões<input type="number" name="q" min="1" max="2000" /></label>
            <label className="f">Acertos<input type="number" name="a" min="0" max="2000" /></label>
            <label className="f">Tempo (min)<input type="number" name="min" min="0" max="1440" placeholder="opcional" /></label>
            <button className="btn pri" type="submit"><Icon n="plus" />Registrar</button>
          </form></section>
        <section className="card"><div className="ch"><h2>Histórico</h2><span className="sub">{lista.length} registros</span></div>
          {lista.length ? <div className="tw"><table className="dtab"><thead><tr><th>Data</th><th>Disciplina</th><th className="n">Acertos</th><th className="n">%</th><th /></tr></thead><tbody>{lista.slice(0, 40).map((e) => (
            <tr key={e.id}><td className="num">{br(e.d)}</td><td>{discShort(e.s)}{e.c ? <span className="muted small"> · M{e.c}</span> : ''}</td><td className="n">{e.a}/{e.q}</td><td className="n">{fmtPct(pct(e.a, e.q))}</td><td><button className="btn xs ghost" aria-label="Apagar" onClick={() => del(e.id)}><Icon n="trash" /></button></td></tr>))}</tbody></table></div>
            : <div className="empty">Nenhum registro ainda.</div>}</section>
      </div>
    </>
  );
}

/* ---------------- Simulados ---------------- */
export function Simulados() {
  useStore();
  const t = TODAY();
  const add = (e) => {
    e.preventDefault(); const fd = new FormData(e.currentTarget);
    const total = parseInt(fd.get('total'), 10); const c = parseInt(fd.get('c'), 10); const d = fd.get('d') || t;
    if (!(total > 0) || !(c >= 0) || c > total) return toast('Confira o total de questões e os acertos.');
    if (d > t) return toast('A data não pode ser no futuro.');
    S.simulados.push({ id: uid(), d, nome: fd.get('nome') || 'Simulado', total, c }); save(); toast(`Simulado lançado: ${fmtPct(pct(c, total))} · +150 XP`); flush(checkBadges()); e.currentTarget.reset();
  };
  const del = (id) => { const i = S.simulados.findIndex((x) => x.id === id); if (i < 0) return; const [rm] = S.simulados.splice(i, 1); save(); toastUndo('Simulado apagado', () => { S.simulados.push(rm); save(); }); };
  const lista = S.simulados.slice().sort((a, b) => (a.d < b.d ? 1 : -1)); const asc = lista.slice().reverse();
  return (
    <>
      <div className="vh"><div><h1>Simulados</h1><p>Lance o resultado dos simulados (externos ou do app) e acompanhe a evolução da nota.</p></div></div>
      <div className="grid g2">
        <section className="card"><div className="ch"><h2>Lançar resultado</h2></div>
          <form className="form" onSubmit={add}>
            <label className="f wide">Nome<input type="text" name="nome" placeholder="Ex.: Simulado 1" /></label>
            <label className="f">Data<input type="date" name="d" defaultValue={t} max={t} /></label>
            <label className="f">Questões<input type="number" name="total" min="1" max="500" defaultValue={50} /></label>
            <label className="f">Acertos<input type="number" name="c" min="0" max="500" /></label>
            <button className="btn pri" type="submit"><Icon n="plus" />Lançar</button>
          </form>
          <div className="row" style={{ marginTop: 12 }}><A h="treino.sim.15" className="btn sm"><Icon n="target" />Fazer mini simulado no app</A></div></section>
        <section className="card"><div className="ch"><h2>Evolução</h2></div>
          {asc.length > 1 ? <LineChart labels={asc.map((s) => br(s.d))} max={100} series={[{ nome: '% de acerto', cor: 'var(--s2)', data: asc.map((s) => pct(s.c, s.total)) }]} /> : <div className="empty">Lance pelo menos dois simulados para ver a linha de evolução.</div>}</section>
      </div>
      <section className="card" style={{ marginTop: 14 }}><div className="ch"><h2>Histórico</h2></div>
        {lista.length ? <div className="tw"><table className="dtab"><thead><tr><th>Data</th><th>Simulado</th><th className="n">Acertos</th><th className="n">Nota</th><th /></tr></thead><tbody>{lista.map((s) => (
          <tr key={s.id}><td className="num">{brY(s.d)}</td><td>{s.nome}{s.app && <span className="muted small"> · no app</span>}</td><td className="n">{s.c}/{s.total}</td><td className="n"><b>{fmtPct(pct(s.c, s.total))}</b></td><td><button className="btn xs ghost" aria-label="Apagar" onClick={() => del(s.id)}><Icon n="trash" /></button></td></tr>))}</tbody></table></div>
          : <div className="empty">Nenhum simulado lançado.</div>}</section>
    </>
  );
}

/* ---------------- Relatório ---------------- */
export function Relatorio() {
  useStore();
  const [dias, setDias] = useState(30); const t = TODAY(); const ini = addDays(t, -(dias - 1));
  const metas = doneList().filter((n) => S.metas[n].done >= ini).length;
  const revs = revList().filter((x) => x.at && x.at >= ini).length;
  const q = Object.values(S.questoes).filter((a) => a.r !== 'B' && a.d >= ini); const qc = q.filter((a) => a.ok).length;
  const ext = S.tec.filter((e) => e.d >= ini).reduce((a, e) => ({ q: a.q + e.q, a: a.a + e.a }), { q: 0, a: 0 });
  const mins = minutesBy(); let h = 0; for (let i = 0; i < dias; i++) h += mins[addDays(t, -i)] || 0;
  const sims = S.simulados.filter((s) => s.d >= ini); const reds = S.redacao.filter((r) => r.d >= ini);
  const fracas = porDisciplina().filter((r) => r.v < 60 && r.total >= 3).sort((a, b) => a.v - b.v);
  return (
    <>
      <div className="vh"><div><h1>Relatório</h1><p>Resumo do período para você avaliar seu progresso e ajustar o plano.</p></div><div className="row"><div className="seg">{[7, 30, 90].map((d) => <button key={d} className={dias === d ? 'on' : ''} onClick={() => setDias(d)}>{d} dias</button>)}</div><button className="btn" onClick={() => window.print()}><Icon n="pdf" />Imprimir</button></div></div>
      <section className="card" style={{ padding: 22 }}>
        <h2>Período: {brY(ini)} a {brY(t)}</h2>
        <div className="kpis" style={{ margin: '14px 0' }}>
          <div className="kpi"><div className="l">Metas concluídas</div><div className="v">{metas}</div></div>
          <div className="kpi"><div className="l">Revisões feitas</div><div className="v">{revs}</div></div>
          <div className="kpi"><div className="l">Questões</div><div className="v">{q.length + ext.q}</div><div className="d">{q.length + ext.q ? fmtPct(pct(qc + ext.a, q.length + ext.q)) + ' de acerto' : ''}</div></div>
          <div className="kpi"><div className="l">Horas líquidas</div><div className="v">{fmtMin(h)}</div></div>
          <div className="kpi"><div className="l">Simulados</div><div className="v">{sims.length}</div></div>
          <div className="kpi"><div className="l">Redações</div><div className="v">{reds.length}</div></div>
        </div>
        <h2 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: 6, margin: '18px 0 8px' }}>Pontos de atenção</h2>
        {fracas.length ? <ul>{fracas.map((r) => <li key={r.d}><b>{DISC_NAME(r.d)}</b>: {fmtPct(r.v)} de acerto em {r.total} questões. Volte às metas e refaça os erros.</li>)}</ul> : <p className="ink2">Nenhuma disciplina abaixo de 60% (com ao menos 3 questões). Continue assim.</p>}
        <h2 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: 6, margin: '18px 0 8px' }}>Próximos passos</h2>
        <ul><li>Mantenha a sequência de estudo diária.</li><li>Faça as revisões pendentes antes de iniciar novas metas.</li><li>Lance um simulado a cada marco concluído.</li></ul>
      </section>
    </>
  );
}
