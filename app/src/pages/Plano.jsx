import { useState } from 'react';
import { S, save, useStore, prefs } from '../lib/store.js';
import { META, METAS, MARCOS, NTOTAL, SCHED, DISC, ORD, DOCS, LEIS, QUESTOES, CURSO, AVISOS } from '../data/content.js';
import {
  TODAY, addDays, br, brY, fmtNum, fmtPct, pct, fmtMin, plural, uid, mst, setMeta, isDone, doneList, nextMetas, revList, revLabel, intervalo, DISC_NAME, discShort,
  metaLabel, topShort, pace, streak, level, tecAgg, tecMeta, qAgg, minutesBy, checkBadges, xpFor,
} from '../lib/logic.js';
import { toggleMeta, toggleRev, flush } from '../lib/actions.js';
import { Icon, Bar, Tag, TipoPill, A, toast, toastUndo, go } from '../components/ui.jsx';
import { TimerMini, timerStart } from '../components/Timer.jsx';

const marcoOf = (n) => MARCOS.find((x) => x.n === META[n].marco);
const Ck = ({ on, rev, onClick, label }) => <button className={`ck ${rev ? 'rev' : ''} ${on ? 'on' : ''}`} onClick={onClick} aria-pressed={on} aria-label={label}><Icon n="check" /></button>;

function DueRow({ x, t }) {
  const m = META[x.n]; const cls = x.due < t ? 'late' : x.due === t ? 'today' : '';
  return (
    <div className="due">
      <span className={`rk ${cls}`}>R{x.k}</span>
      <div style={{ minWidth: 0 }}>
        <A h={`meta.${x.n}`}><b>M{x.n}</b> · {topShort(m).slice(0, 70)}</A>
        <div className="small muted">{revLabel(x.k)} · {x.due < t ? `pendente desde ${br(x.due)}` : x.due === t ? 'hoje' : br(x.due)}</div>
      </div>
      <div className="due-b"><A h={`revisar.${x.n}.${x.k}`} className="btn xs">Revisar</A><button className="btn xs ok" onClick={() => toggleRev(x.n, x.k)}>Fiz</button></div>
    </div>
  );
}

export function MetaItem({ n, compact }) {
  const m = META[n]; const s = mst(n); const done = !!s.done; const tm = tecMeta(n);
  return (
    <div className="nextcard" style={{ gridTemplateColumns: 'auto 1fr' }}>
      <Ck on={done} rev={m.tipo !== 'meta'} onClick={() => toggleMeta(n)} label={done ? 'Desmarcar meta' : 'Marcar meta como concluída'} />
      <div className="t">
        <div className="row"><span className="code">M{n}</span><b>{metaLabel(m)}</b><Tag t={m.tag} /><TipoPill m={m} />{done && <span className="st ok"><i />Concluída {br(s.done)}</span>}</div>
        <p>{topShort(m)}</p>
        {!compact && (<div className="row" style={{ marginTop: 8 }}>
          {m.res.length > 0 && <A h={`doc.${m.res[0]}`} className="btn sm"><Icon n="book" />Resumo</A>}
          <A h={`meta.${n}`} className="btn sm ghost">Abrir meta <Icon n="right" /></A>
          {tm.q > 0 && <span className="small muted">{tm.a}/{tm.q} questões ({fmtPct(pct(tm.a, tm.q))})</span>}
        </div>)}
      </div>
    </div>
  );
}

/* ---------------- INÍCIO ---------------- */
export function Inicio() {
  useStore();
  const t = TODAY(); const P = prefs(); const pc = pace(); const L = level(); const nexts = nextMetas(3);
  const wk0 = addDays(t, -6); const tw = tecAgg(() => true); const qw = qAgg((a) => a.d >= wk0);
  const mins = minutesBy(); let wmin = 0; for (let i = 0; i < 7; i++) wmin += mins[addDays(t, -i)] || 0;
  const extW = S.tec.filter((e) => e.d >= wk0).reduce((a, e) => ({ q: a.q + e.q, a: a.a + e.a }), { q: 0, a: 0 });
  const wq = extW.q + qw.n - qw.b; const wa = extW.a + qw.c;
  const rv = revList().filter((x) => !x.at && x.due <= t).sort((a, b) => (a.due < b.due ? -1 : 1));
  const marcoCur = nexts.length ? marcoOf(nexts[0]) : MARCOS[MARCOS.length - 1];
  const st = streak(); const first = !pc.doneN && !S.sessoes.length && !Object.keys(S.questoes).length;
  const avs = AVISOS.filter((a) => !S.avisosOk.includes(a.id));
  const tl = MARCOS.map((mc) => {
    const ms = METAS.filter((m) => m.marco === mc.n); const d = ms.filter((m) => isDone(m.n)).length;
    const cls = d === ms.length ? 'past' : mc.n === marcoCur.n ? 'cur' : '';
    return <i key={mc.n} className={cls} style={{ flex: ms.length }} title={`Marco ${mc.n}: ${mc.nome} · ${d}/${ms.length}`} />;
  });
  return (
    <>
      {avs.map((a) => (
        <section key={a.id} className="card" style={{ marginBottom: 14 }}>
          <div className="row between"><b>{a.titulo}</b><button className="btn xs ghost" aria-label="Dispensar aviso" onClick={() => { S.avisosOk.push(a.id); save(); }}><Icon n="x" /></button></div>
          <p className="small ink2" style={{ marginTop: 4 }}>{a.texto}</p>
        </section>
      ))}
      <section className="hero">
        <div>
          <div className="lvl"><div className="badge">{L.n}</div><div className="ltx"><b>Nível {L.n} · {L.nome}</b><span>{fmtNum(L.xp)} XP{L.next ? ` · faltam ${fmtNum(L.next - L.xp)} XP para o nível ${L.n + 1}` : ' · nível máximo'}</span><div className="xpbar"><i style={{ width: `${L.pct}%` }} /></div></div></div>
          <p className="meta" style={{ marginTop: 12 }}>Marco {marcoCur.n} · <b>{marcoCur.nome}</b> · {pc.doneN}/{NTOTAL} metas</p>
          <div className="tl" aria-label={`Linha dos ${MARCOS.length} marcos`}>{tl}</div>
          <div className="tl-l"><span>M1</span><span>M{NTOTAL}</span></div>
        </div>
        <div className="hk">
          <div><b>{pc.doneN}<small>/{NTOTAL}</small></b><span>metas concluídas</span></div>
          <div><b>{st}</b><span>{st === 1 ? 'dia seguido' : 'dias seguidos'} estudando</span></div>
          <div><b>{wq}</b><span>questões em 7 dias{wq ? ` · ${fmtPct(pct(wa, wq))} de acerto` : ''}</span></div>
          <div><b>{fmtMin(wmin)}</b><span>horas líquidas em 7 dias</span></div>
        </div>
      </section>
      {first && <div className="note gold" style={{ marginTop: 14 }}><b className="t">Bem-vindo ao {CURSO.titulo}</b>Comece pelas <A h="doc.orientacoes">Orientações iniciais</A> e pelo <A h="doc.guia-revisoes">Guia de Revisões</A>. Depois abra a <A h={`meta.${SCHED[0]}`}>Meta {SCHED[0]}</A>: leia o resumo, resolva as questões e marque a meta como concluída. As metas são flexíveis: você avança no seu ritmo, sem data marcada e sem meta atrasada.</div>}
      <div className="grid g2" style={{ marginTop: 14 }}>
        <section className="card">
          <div className="ch"><h2>{nexts.length ? 'Próximas metas' : 'Parabéns!'}</h2><A h="plano" className="small">Ver todas</A></div>
          {nexts.length ? nexts.map((n, i) => { const m = META[n]; return (
            <div key={n} className={`nextcard ${m.tipo !== 'meta' ? 'rev' : ''}`}><div className="num">M{n}</div><div className="t"><b>{metaLabel(m)}</b> <Tag t={m.tag} /> <TipoPill m={m} /><p>{topShort(m)}</p>
              <div className="row" style={{ marginTop: 8 }}><A h={`meta.${n}`} className={`btn sm ${i === 0 ? 'pri' : ''}`}>{i === 0 && <Icon n="go" />}{i === 0 ? 'Estudar agora' : 'Abrir'}</A>{m.res.length > 0 && <A h={`doc.${m.res[0]}`} className="btn sm"><Icon n="book" />Resumo</A>}</div></div></div>
          ); }) : <div className="empty">Você concluiu todas as metas. Mantenha as revisões em dia e refaça o Banco de Erros.</div>}
        </section>
        <div className="stack">
          <section className="card">
            <div className="ch"><h2>Seu ritmo</h2><A h="ajustes" className="small">Meta semanal e data-alvo</A></div>
            <div className="proj">
              <div><b>{pc.perWeek ? pc.perWeek.toFixed(1).replace('.', ',') : '—'}</b><span>metas por semana (ritmo real)</span></div>
              <div><b>{pc.n7}<small style={{ fontSize: 13, color: 'var(--muted)' }}>/{pc.metaSem}</small></b><span>nesta semana · sua meta semanal</span></div>
              <div><b>{pc.left}</b><span>metas restantes</span></div>
              <div><b>{pc.eta ? br(pc.eta) + '/' + pc.eta.slice(2, 4) : '—'}</b><span>{pc.eta ? 'previsão de término neste ritmo' : 'conclua metas para ver a previsão'}</span></div>
              {P.alvo && <div><b>{pc.need != null ? pc.need.toFixed(1).replace('.', ',') : '—'}</b><span>metas/semana para fechar até {brY(P.alvo)}{pc.eta && pc.eta > P.alvo ? ' · acelere' : pc.eta ? ' · no prazo' : ''}</span></div>}
            </div>
            <Bar v={(pc.n7 / Math.max(1, pc.metaSem)) * 100} style={{ marginTop: 12 }} />
            <p className="small muted" style={{ marginTop: 6 }}>{pc.n7 >= pc.metaSem ? 'Meta da semana batida.' : `Faltam ${plural(pc.metaSem - pc.n7, 'meta')} para bater a sua meta semanal.`} Metas são flexíveis: sem data fixa e sem atraso.</p>
          </section>
          <section className="card">
            <div className="ch"><h2>Revisões para hoje</h2>{rv.length ? <A h="revisar" className="btn sm pri"><Icon n="go" />Revisar agora</A> : <A h="revisoes" className="small">Todas</A>}</div>
            {rv.length ? <div className="dues">{rv.slice(0, 5).map((x) => <DueRow key={`${x.n}-${x.k}`} x={x} t={t} />)}</div> : <div className="empty">Nada para revisar hoje. Cada meta concluída gera revisões em <b>{P.rev.map(intervalo).join(', ')}</b>.</div>}
            {rv.length > 5 && <p className="small muted" style={{ marginTop: 8 }}>+ {rv.length - 5} revisões</p>}
          </section>
          <section className="card"><div className="ch"><h2>Cronômetro</h2><span className="sub">{fmtMin(mins[t] || 0)} hoje · meta {P.horas}h</span></div><TimerMini /></section>
          <section className="card"><div className="ch"><h2>Atalhos</h2></div>
            <div className="quick"><A h="questoes"><Icon n="quiz" />Questões</A><A h="erros"><Icon n="alert" />Banco de Erros</A><A h="leis"><Icon n="law" />Legislação</A><A h="redacao"><Icon n="pen" />Redação</A><A h="doc.prazos"><Icon n="clock" />Tabela de prazos</A><A h="conquistas"><Icon n="medal" />Conquistas</A></div>
          </section>
        </div>
      </div>
    </>
  );
}

/* ---------------- METAS ---------------- */
function PlanRow({ n }) {
  const m = META[n]; const s = mst(n); const tm = tecMeta(n); const t = TODAY();
  const rv = m.tipo === 'meta' ? [1, 2, 3].map((k) => {
    const due = s.done ? addDays(s.done, +prefs().rev[k - 1]) : ''; const at = (s.r || {})[k];
    const cl = at ? 'on' : due && due < t ? 'late' : due && due <= t ? 'due' : '';
    return <i key={k} className={cl} title={`${revLabel(k)}${at ? ' · feita ' + br(at) : due ? ' · prevista ' + br(due) : ''}`}>{k}</i>;
  }) : null;
  return (
    <div className="mt" id={`mrow${n}`}>
      <Ck on={!!s.done} rev={m.tipo !== 'meta'} onClick={() => toggleMeta(n)} label={`Concluir M${n}`} />
      <div className="tt"><A h={`meta.${n}`}><span className="code" style={{ marginRight: 6 }}>M{n}</span>{m.tipo === 'meta' ? topShort(m) : `${m.nome} · ${topShort(m)}`}</A>
        <div>{metaLabel(m)}{m.tag ? ` · ${m.tag === 'ALTA' ? 'alta incidência' : m.tag === 'MÉDIA' ? 'média incidência' : 'baixa incidência'}` : ''}{m.tempo ? ` · ${m.tempo}` : ''}{tm.q ? ` · ${tm.a}/${tm.q} (${fmtPct(pct(tm.a, tm.q))})` : ''}{s.done ? ` · concluída ${br(s.done)}` : ''}</div></div>
      <span className="rv">{rv}</span>
    </div>
  );
}

export function Plano() {
  const store = useStore(); const U = store.ui; const set = (p) => { Object.assign(S.ui, p); save(); };
  const doneN = doneList().length;
  const okMeta = (n) => {
    const m = META[n];
    if (U.planDisc === 'REV') { if (m.tipo === 'meta') return false; } else if (U.planDisc && m.d !== U.planDisc) return false;
    if (U.planSt === 'pend') return !isDone(n); if (U.planSt === 'done') return isDone(n);
    return true;
  };
  const irProxima = () => {
    set({ planDisc: '', planSt: 'todas', planMode: 'marco' });
    setTimeout(() => { const n = nextMetas(1)[0]; const el = n && document.getElementById(`mrow${n}`); if (el) { el.scrollIntoView({ block: 'center' }); el.style.background = 'var(--gold-wash)'; } }, 60);
  };
  const Sec = ({ mn, title, ms, extra }) => {
    const rows = ms.filter((m) => okMeta(m.n)); if (!rows.length) return null;
    const d = ms.filter((m) => isDone(m.n)).length;
    return (
      <section className="marco"><header><div><div className="mn">{mn}</div><h2>{title}</h2></div><div className="pr">{d}/{ms.length}<Bar v={(d / ms.length) * 100} />{extra}</div></header>
        <div className="card" style={{ marginTop: 10, padding: '4px 14px' }}>{rows.map((m) => <PlanRow key={m.n} n={m.n} />)}</div></section>
    );
  };
  return (
    <>
      <div className="vh"><div><h1>Metas</h1><p>{NTOTAL} metas em {MARCOS.length} marcos, na ordem do cronograma. Sem data fixa: conclua no seu ritmo e marque aqui. Cada meta de estudo gera três revisões espaçadas.</p></div>
        <div className="row"><span className="small ink2">{doneN}/{NTOTAL} concluídas</span><Bar v={(doneN / NTOTAL) * 100} style={{ width: 140 }} /><A h="cronograma" className="btn sm"><Icon n="doc" />Cronograma completo</A><A h="migrar" className="btn sm ghost"><Icon n="right" />Já era aluno?</A></div></div>
      <div className="toolbar"><div className="seg"><button className={U.planMode === 'marco' ? 'on' : ''} onClick={() => set({ planMode: 'marco' })}>Por marco</button><button className={U.planMode === 'disc' ? 'on' : ''} onClick={() => set({ planMode: 'disc' })}>Por disciplina</button></div><button className="btn sm" onClick={irProxima}><Icon n="go" />Ir para a próxima meta</button></div>
      <div className="toolbar"><div className="chips"><button className={`chip ${!U.planDisc ? 'on' : ''}`} onClick={() => set({ planDisc: '' })}>Todas as disciplinas</button>{ORD.map((d) => <button key={d} className={`chip ${U.planDisc === d ? 'on' : ''}`} onClick={() => set({ planDisc: d })}>{discShort(d)}</button>)}<button className={`chip ${U.planDisc === 'REV' ? 'on' : ''}`} onClick={() => set({ planDisc: 'REV' })}>Revisões e simulados</button></div></div>
      <div className="toolbar"><div className="chips">{[['todas', 'Todas'], ['pend', 'Pendentes'], ['done', 'Concluídas']].map(([k, l]) => <button key={k} className={`chip ${U.planSt === k ? 'on' : ''}`} onClick={() => set({ planSt: k })}>{l}</button>)}</div></div>
      {U.planMode === 'disc'
        ? [...ORD.map((d) => [d, METAS.filter((m) => m.d === d && m.tipo === 'meta')]), ['REV', METAS.filter((m) => m.tipo !== 'meta')]].filter(([d]) => !U.planDisc || d === U.planDisc).map(([d, ms]) => <Sec key={d} mn={DISC[d] ? `Bloco ${DISC[d].bloco} · ${DISC[d].q} questões na prova · ${ms.length} metas` : `Cronograma · ${ms.length} metas`} title={DISC[d] ? DISC[d].nome : 'Revisões e simulados'} ms={ms} />)
        : MARCOS.map((mc) => { const ms = METAS.filter((m) => m.marco === mc.n); return <Sec key={mc.n} mn={`Marco ${mc.n} · M${ms[0].n} a M${ms[ms.length - 1].n}`} title={mc.nome} ms={ms} />; })}
    </>
  );
}

export function Cronograma() {
  useStore();
  return (
    <>
      <div className="crumb"><A h="plano">Metas</A> › Cronograma completo</div>
      <div className="vh"><div><h1>Cronograma completo · {CURSO.titulo}</h1><p>{NTOTAL} metas flexíveis em {MARCOS.length} marcos: {METAS.filter((m) => m.tipo === 'meta').length} de conteúdo, {METAS.filter((m) => m.tipo === 'rev').length} revisões e {METAS.filter((m) => m.tipo === 'sim').length} simulados.</p></div><button className="btn" onClick={() => window.print()}><Icon n="pdf" />Imprimir / salvar PDF</button></div>
      {MARCOS.map((mc) => (
        <section key={mc.n} style={{ marginBottom: 22 }}><h2 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: 6, marginBottom: 8 }}>Marco {mc.n} · {mc.nome}</h2>
          {METAS.filter((m) => m.marco === mc.n).map((m) => (
            <article key={m.n} style={{ padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
              <div className="row"><A h={`meta.${m.n}`} className="code">M{m.n}</A><Tag t={m.tag} /><TipoPill m={m} /><b>{metaLabel(m)}</b><span className="small muted">{m.tempo}</span></div>
              <p className="small ink2" style={{ marginTop: 4 }}>{m.top}</p>
            </article>
          ))}
        </section>
      ))}
    </>
  );
}

/* ---------------- META ---------------- */
export function Meta({ p }) {
  useStore();
  const n = +p[0]; const m = META[n];
  const [tick, setTick] = useState(0); const rerender = () => setTick(tick + 1);
  if (!m) return <div className="empty">Meta não encontrada. <A h="plano">Voltar às metas</A></div>;
  const s = mst(n); const t = TODAY(); const tm = tecMeta(n);
  const idx = SCHED.indexOf(n); const prev = SCHED[idx - 1]; const next = SCHED[idx + 1];
  const revs = m.tipo !== 'meta' ? null : [1, 2, 3].map((k) => {
    const due = s.done ? addDays(s.done, +prefs().rev[k - 1]) : ''; const at = (s.r || {})[k];
    const cls = at ? 'done' : due && due < t ? 'late' : '';
    return (<div key={k} className={`rev ${cls}`}><b>{revLabel(k)}</b><span>{at ? `Feita em ${br(at)}` : due ? (due < t ? `Pendente: era ${br(due)}` : due === t ? 'Para hoje' : `Prevista para ${br(due)}`) : 'Conclua a meta para agendar'}</span>
      {s.done && <button className={`btn xs ${at ? 'done' : 'ok'}`} onClick={() => toggleRev(n, k)}>{at ? 'Desfazer' : 'Fiz a revisão'}</button>}</div>);
  });
  const logs = S.tec.filter((e) => +e.c === n).sort((a, b) => (a.d < b.d ? 1 : -1));
  const faixa = m.faixa ? SCHED.filter((x) => x >= m.faixa[0] && x <= m.faixa[1] && META[x].tipo === 'meta') : [];
  const f = { d: t, src: 'Externo', q: '', a: '', min: '' };
  const addTec = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget); const q = parseInt(fd.get('q'), 10); const a = parseInt(fd.get('a'), 10); const d = fd.get('d') || t; const min = parseInt(fd.get('min'), 10);
    if (!(q > 0)) return toast('Informe quantas questões você fez.');
    if (!(a >= 0) || a > q) return toast('Os acertos devem ficar entre 0 e o total de questões.');
    if (d > t) return toast('A data não pode ser no futuro.');
    S.tec.push({ id: uid(), d, c: n, s: m.d, q, a, min: min > 0 ? min : 0, src: fd.get('src') }); save();
    toast(`Registrado: ${a}/${q} (${fmtPct(pct(a, q))}) · +${xpFor('ext', { q, a })} XP`); flush(checkBadges()); e.currentTarget.reset();
  };
  const delTec = (id) => { const i = S.tec.findIndex((e) => e.id === id); if (i < 0) return; const [rm] = S.tec.splice(i, 1); save(); toastUndo('Registro apagado', () => { S.tec.push(rm); save(); }); };
  const notaChange = (v) => { S.metas[n] = { ...(S.metas[n] || {}), n: v }; save(); };
  const qs = QUESTOES.filter((q) => q.d === m.d);
  return (
    <>
      <div className="crumb"><A h="plano">Metas</A> › Marco {m.marco} › M{n}</div>
      <div className="mh">
        <div className="row"><span className="code">M{n}</span><Tag t={m.tag} /><TipoPill m={m} /><span className="small muted">Marco {m.marco} · {marcoOf(n).nome}{m.tempo ? ` · ${m.tempo}` : ''}{m.min ? ` · mínimo ${m.min} questões` : ''}</span></div>
        <h1>{metaLabel(m)}</h1><p className="ink2" style={{ maxWidth: '75ch' }}>{m.top}</p>
        <div className="row">
          {s.done
            ? <><button className="btn done" onClick={() => toggleMeta(n)}><Icon n="check" />Concluída em {br(s.done)} · desfazer</button>
              <label className="small muted row" style={{ gap: 6 }}>Data <input type="date" value={s.done} max={t} style={{ width: 'auto' }} onChange={(e) => { const v = e.target.value; if (v && v > t) return toast('A data não pode ser no futuro.'); if (v) { setMeta(n, { done: v }); toast('Data de conclusão atualizada'); } }} /></label></>
            : <button className="btn pri" onClick={() => toggleMeta(n)}><Icon n="check" />Marcar meta como concluída</button>}
          <button className="btn" onClick={() => { timerStart(n); go('cronometro'); }}><Icon n="clock" />Estudar com cronômetro</button>
        </div>
      </div>
      {m.atual && <div className="note" style={{ borderLeft: '4px solid var(--gold)', background: 'rgba(196,155,54,0.12)', margin: '12px 0', padding: '12px 14px', borderRadius: 8 }}>
        <b className="t" style={{ color: 'var(--gold)' }}>Atualização Legislativa</b>
        <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{m.atual}</div>
      </div>}
      {(m.res.length > 0 || m.lei.length > 0 || m.tec || m.qc) && <div className="links">
        {m.res.map((r) => { const d = DOCS.find((x) => x.id === r); return d ? <A key={r} h={`doc.${d.id}`} className="lk"><span className="ic doc"><Icon n="book" /></span><span className="tx"><b>Resumo: {d.title}</b><span>{d.sub}</span></span></A> : null; })}
        {m.lei.map((l) => { const L = LEIS.find((x) => x.id === l); return L ? <A key={l} h={`lei.${L.id}`} className="lk"><span className="ic law"><Icon n="law" /></span><span className="tx"><b>Lei seca: {L.curto}</b><span>★ = trecho de alta incidência</span></span></A> : null; })}
        {m.tec && <a href={m.tec} target="_blank" rel="noopener noreferrer" className="lk" style={{ textDecoration: 'none' }}><span className="ic" style={{ background: '#0284c7', color: '#fff' }}><Icon n="quiz" /></span><span className="tx"><b>Caderno TEC Concursos</b><span>Questões filtradas da banca VUNESP ↗</span></span></a>}
        {m.qc && <a href={m.qc} target="_blank" rel="noopener noreferrer" className="lk" style={{ textDecoration: 'none' }}><span className="ic" style={{ background: '#e11d48', color: '#fff' }}><Icon n="quiz" /></span><span className="tx"><b>Caderno QConcursos</b><span>Filtro de questões anteriores VUNESP ↗</span></span></a>}
      </div>}
      <div className="grid g2" style={{ marginTop: 14 }}>
        <div className="stack">
          {m.est && <div className="note navy"><b className="t">{m.tipo === 'meta' ? 'O que estudar' : 'O que fazer'}</b>{m.est}</div>}
          {m.como && <div className="note gold"><b className="t">Como estudar</b>{m.como}</div>}
          {m.dica && <div className="note green"><b className="t">Dica de ouro</b>{m.dica}</div>}
          {m.vid && m.vid.length > 0 && <section className="card">
            <div className="ch"><h2>Videoaulas recomendadas</h2><span className="sub">{m.vid.length} aula(s)</span></div>
            <div className="stack" style={{ gap: 8 }}>
              {m.vid.map((v, i) => (
                <a key={i} href={v.u} target="_blank" rel="noopener noreferrer" className="lk" style={{ padding: 10, borderRadius: 8, background: 'var(--surface-2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="ic" style={{ background: '#ef4444', color: '#fff', width: 34, height: 34 }}><Icon n="play" /></span>
                  <span className="tx" style={{ flex: 1 }}>
                    <b style={{ fontSize: 13.5 }}>{v.t || 'Assistir aula no YouTube'}</b>
                    <span className="small muted">{v.ch || 'YouTube'} ↗</span>
                  </span>
                </a>
              ))}
            </div>
          </section>}
          {m.extra && <section className="card" style={{ borderLeft: '3px solid var(--brand)' }}>
            <div className="ch"><h2>Proposta de Redação vinculada ({m.extra.tid})</h2></div>
            <p><b>{m.extra.tema}</b></p>
            <p className="small muted" style={{ marginTop: 6 }}>{m.extra.dica}</p>
            <div className="row" style={{ marginTop: 10 }}><A h={`redacao`} className="btn pri sm"><Icon n="edit" />Treinar esta redação</A></div>
          </section>}
          {faixa.length > 0 && <section className="card"><div className="ch"><h2>Metas desta revisão</h2><span className="sub">{faixa.filter(isDone).length}/{faixa.length} concluídas</span></div>
            {faixa.map((x) => <div key={x} className="mt"><span className="code">M{x}</span><div className="tt"><A h={`meta.${x}`}>{topShort(META[x])}</A><div>{discShort(META[x].d)}{isDone(x) ? ' · concluída' : ' · pendente'}</div></div><span className={`st ${isDone(x) ? 'ok' : ''}`}><i /></span></div>)}
            <div className="row" style={{ marginTop: 10 }}><A h="erros" className="btn sm"><Icon n="alert" />Banco de Erros</A></div></section>}
          {m.tipo === 'sim' && <section className="card"><div className="ch"><h2>Simulado</h2></div><p className="small ink2">Monte um simulado com as questões do app (correção no fim) ou lance o resultado de um simulado externo.</p><div className="row" style={{ marginTop: 10 }}><A h="treino.sim" className="btn pri sm"><Icon n="target" />Simulado no app</A><A h="simulados" className="btn sm"><Icon n="plus" />Lançar resultado</A></div></section>}
        </div>
        <div className="stack">
          {m.tipo === 'meta' && <section className="card"><div className="ch"><h2>Questões externas</h2><span className="sub">{tm.q ? `${tm.a}/${tm.q} · ${fmtPct(pct(tm.a, tm.q))}` : 'nenhum registro'}</span></div>
            <form className="form" onSubmit={addTec}>
              <label className="f">Data<input type="date" name="d" defaultValue={f.d} max={t} /></label>
              <label className="f">Fonte<select name="src" defaultValue="Externo"><option>Externo</option><option>Prova anterior</option><option>Outro</option></select></label>
              <label className="f">Questões<input type="number" name="q" min="1" max="2000" placeholder={m.min || 20} /></label>
              <label className="f">Acertos<input type="number" name="a" min="0" max="2000" /></label>
              <label className="f">Tempo (min)<input type="number" name="min" min="0" max="1440" placeholder="opcional" /></label>
              <button className="btn pri" type="submit"><Icon n="plus" />Registrar</button>
            </form>
            {logs.length > 0 ? <div className="loglist" style={{ marginTop: 10 }}>{logs.slice(0, 6).map((e) => <div key={e.id} className="logr"><span className="small muted num">{br(e.d)}</span><span>{e.a}/{e.q} acertos · {fmtPct(pct(e.a, e.q))} <span className="muted small">· {e.src}{e.min ? ` · ${e.min} min` : ''}</span></span><button className="btn xs ghost" aria-label="Apagar registro" onClick={() => delTec(e.id)}><Icon n="trash" /></button></div>)}</div>
              : <p className="small muted" style={{ marginTop: 8 }}>Resolva uma lista externa e lance aqui quantas fez e acertou. Isso alimenta o desempenho, o relatório e o seu XP.</p>}
          </section>}
          <section className="card"><div className="ch"><h2>Questões no app</h2></div><p className="small ink2">{qs.length ? `${qs.length} questões de ${DISC_NAME(m.d)} disponíveis nesta demonstração.` : 'Nenhuma questão desta disciplina ainda.'}</p>
            <div className="row" style={{ marginTop: 10 }}>{qs.length > 0 && <A h={`treino.d.${m.d}`} className="btn"><Icon n="quiz" />Treinar {discShort(m.d)}</A>}<A h="tutor" className="btn ghost"><Icon n="spark" />Perguntar ao tutor</A></div></section>
          {revs && <section className="card"><div className="ch"><h2>Revisões</h2><A h="ajustes" className="sub">Intervalos</A></div><div className="revs">{revs}</div></section>}
          <section className="card"><div className="ch"><h2>Anotações</h2></div><textarea rows={5} placeholder="Dúvidas, artigos para reler, pegadinhas em que você caiu…" defaultValue={s.n || ''} onChange={(e) => notaChange(e.target.value)} onBlur={rerender} /></section>
        </div>
      </div>
      <div className="pager">{prev ? <A h={`meta.${prev}`} className="btn"><Icon n="left" />M{prev}</A> : <span />}{next && <A h={`meta.${next}`} className="btn">M{next}<Icon n="right" /></A>}</div>
    </>
  );
}

/* ---------------- REVISÕES ---------------- */
export function Revisoes() {
  useStore();
  const t = TODAY(); const all = revList(); const P = prefs();
  const pend = all.filter((x) => !x.at); const late = pend.filter((x) => x.due < t); const today = pend.filter((x) => x.due === t);
  const week = pend.filter((x) => x.due > t && x.due <= addDays(t, 7)); const done = all.filter((x) => x.at).sort((a, b) => (a.at < b.at ? 1 : -1));
  const revMetas = SCHED.filter((n) => META[n].tipo !== 'meta' && !isDone(n)).slice(0, 4);
  const Block = ({ title, arr, empty }) => (<section className="card"><div className="ch"><h2>{title}</h2><span className="sub">{arr.length}</span></div>{arr.length ? <div className="dues">{arr.slice().sort((a, b) => (a.due < b.due ? -1 : 1)).map((x) => <DueRow key={`${x.n}-${x.k}`} x={x} t={t} />)}</div> : <div className="empty">{empty}</div>}</section>);
  return (
    <>
      <div className="vh"><div><h1>Revisões</h1><p>Cada meta concluída gera três revisões espaçadas ({P.rev.map((d) => (d === 1 ? '24 horas' : `${d} dias`)).join(', ')} depois). Revisão ativa: refaça as questões que errou, releia os artigos ★ e as suas anotações. O <A h="doc.guia-revisoes">Guia de Revisões</A> explica o método.</p></div><A h="ajustes" className="btn"><Icon n="gear" />Mudar intervalos</A></div>
      {late.length + today.length > 0 && <section className="card" style={{ marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}><div><b>{plural(late.length + today.length, 'revisão para fazer agora', 'revisões para fazer agora')}</b><div className="small muted">{late.length ? `${late.length} pendente(s)` : ''}{late.length && today.length ? ' · ' : ''}{today.length ? `${today.length} de hoje` : ''}. O app abre uma de cada vez, com o passo a passo.</div></div><A h="revisar" className="btn pri"><Icon n="go" />Revisar agora</A></section>}
      <details className="card" style={{ marginBottom: 14 }} open={!all.length}><summary style={{ cursor: 'pointer' }}><b>Como revisar em 3 passos</b></summary>
        <ol className="small ink2"><li><b>Puxe da memória.</b> Antes de abrir o material, escreva 3 pontos principais.</li><li><b>Releia o essencial.</b> Resumo, anotações e artigos ★.</li><li><b>Teste com questões.</b> Refaça as que errou e resolva de 5 a 10 novas.</li></ol></details>
      <div className="kpis" style={{ marginBottom: 14 }}>
        <div className="kpi"><div className="l">Pendentes</div><div className="v" style={{ color: late.length ? 'var(--bad)' : 'inherit' }}>{late.length}</div></div>
        <div className="kpi"><div className="l">Para hoje</div><div className="v">{today.length}</div></div>
        <div className="kpi"><div className="l">Próximos 7 dias</div><div className="v">{week.length}</div></div>
        <div className="kpi"><div className="l">Feitas</div><div className="v">{done.length}<small> de {all.length}</small></div><div className="d">{all.length ? fmtPct(pct(done.length, all.length)) + ' em dia' : 'Conclua metas para gerar revisões'}</div></div>
      </div>
      <div className="grid g2">
        <div className="stack"><Block title="Pendentes" arr={late} empty="Nenhuma revisão pendente." /><Block title="Hoje" arr={today} empty="Nada para hoje." /></div>
        <div className="stack"><Block title="Próximos 7 dias" arr={week} empty="Nada agendado para a próxima semana." />
          <section className="card"><div className="ch"><h2>Revisões do cronograma</h2><span className="sub">semanais, gerais e simulados</span></div>{revMetas.length ? revMetas.map((n) => <MetaItem key={n} n={n} compact />) : <div className="empty">Todas as revisões do cronograma foram concluídas.</div>}</section>
          {done.length > 0 && <section className="card"><div className="ch"><h2>Feitas recentemente</h2></div>{done.slice(0, 8).map((x) => <div key={`${x.n}-${x.k}`} className="due"><span className="rk">R{x.k}</span><div className="small"><A h={`meta.${x.n}`}><b>M{x.n}</b></A> · {topShort(META[x.n]).slice(0, 60)}</div><span className="small muted num">{br(x.at)}</span></div>)}</section>}
        </div>
      </div>
    </>
  );
}

const PASSOS = {
  1: ['Releia o resumo da meta, só o essencial.', 'Reveja suas anotações e os pontos que marcou.', 'Escreva 3 ideias principais com suas palavras.'],
  2: ['Refaça as questões que você errou desta meta.', 'Releia os artigos ★ ligados ao tema.', 'Resolva de 5 a 10 questões novas.'],
  3: ['Tente lembrar tudo antes de abrir qualquer material.', 'Confira o que esqueceu e anote.', 'Faça um treino curto de questões.'],
};
export function Revisar({ p }) {
  useStore();
  const t = TODAY();
  const fila = revList().filter((x) => !x.at && x.due <= t).sort((a, b) => (a.due < b.due ? -1 : 1));
  const alvo = p[0] ? fila.find((x) => x.n === +p[0] && x.k === +p[1]) || { n: +p[0], k: +p[1], due: t } : fila[0];
  if (!alvo) return (<><div className="vh"><h1>Revisar agora</h1></div><div className="empty"><b>Tudo em dia!</b> Nenhuma revisão pendente. <A h="revisoes">Ver agenda</A></div></>);
  const m = META[alvo.n];
  return (
    <>
      <div className="crumb"><A h="revisoes">Revisões</A> › Revisar agora</div>
      <div className="vh"><div><h1>R{alvo.k} · M{alvo.n}</h1><p>{topShort(m)} · {revLabel(alvo.k)}</p></div><span className="pill-lvl">{fila.length} na fila</span></div>
      <section className="card" style={{ maxWidth: 720 }}>
        <div className="ch"><h2>Passo a passo</h2></div>
        <ol className="ink2">{PASSOS[alvo.k].map((x, i) => <li key={i} style={{ margin: '8px 0' }}>{x}</li>)}</ol>
        <div className="row" style={{ marginTop: 14 }}>
          {m.res.length > 0 && <A h={`doc.${m.res[0]}`} className="btn"><Icon n="book" />Abrir resumo</A>}
          <A h={`treino.d.${m.d}`} className="btn"><Icon n="quiz" />Treinar questões</A>
          <button className="btn pri" onClick={() => { toggleRev(alvo.n, alvo.k); }}><Icon n="check" />Fiz a revisão</button>
        </div>
      </section>
    </>
  );
}

/* ---------------- CONTINUAR DE ONDE PAREI ---------------- */
export function Migrar() {
  useStore();
  const t = TODAY();
  const [ate, setAte] = useState(''); const [ini, setIni] = useState(addDays(t, -30)); const [fim, setFim] = useState(t); const [revs, setRevs] = useState(true);
  const idx = SCHED.indexOf(+ate);
  const aplicar = () => {
    if (idx < 0) return toast('Escolha até qual meta você chegou.');
    if (!ini || !fim || ini > fim || fim > t) return toast('Confira as datas do período.');
    const alvo = SCHED.slice(0, idx + 1); const dias = Math.max(0, Math.round((new Date(fim) - new Date(ini)) / 864e5)); const antes = {};
    alvo.forEach((n, i) => {
      if (isDone(n)) return; antes[n] = S.metas[n] || null;
      const d = addDays(ini, alvo.length > 1 ? Math.round((dias * i) / (alvo.length - 1)) : dias); const r = {};
      if (META[n].tipo === 'meta') [1, 2, 3].forEach((k) => { const due = addDays(d, +prefs().rev[k - 1]); if (due < t && revs) r[k] = due; });
      S.metas[n] = { ...(S.metas[n] || {}), done: d, r };
    });
    if (!S.perfil.inicio) S.perfil.inicio = ini; save();
    toastUndo(`${Object.keys(antes).length} metas marcadas`, () => { Object.entries(antes).forEach(([n, v]) => { if (v) S.metas[n] = v; else delete S.metas[n]; }); save(); });
    flush(checkBadges());
  };
  return (
    <>
      <div className="crumb"><A h="plano">Metas</A> › Continuar de onde parei</div>
      <div className="vh"><div><h1>Continuar de onde parei</h1><p>Se você já estudava por outro material, diga até qual meta chegou e em que período. O app marca tudo e agenda as revisões nas datas certas.</p></div></div>
      <section className="card" style={{ maxWidth: 640 }}>
        <div className="form">
          <label className="f wide">Última meta concluída<select value={ate} onChange={(e) => setAte(e.target.value)}><option value="">Escolha…</option>{SCHED.map((n) => <option key={n} value={n}>M{n} · {metaLabel(META[n])} — {topShort(META[n]).slice(0, 50)}</option>)}</select></label>
          <label className="f">Começou a estudar em<input type="date" value={ini} max={t} onChange={(e) => setIni(e.target.value)} /></label>
          <label className="f">Chegou nessa meta em<input type="date" value={fim} max={t} onChange={(e) => setFim(e.target.value)} /></label>
          <label className="row small ink2 wide" style={{ gap: 8 }}><input type="checkbox" checked={revs} onChange={(e) => setRevs(e.target.checked)} />Dar como feitas as revisões que já venceram</label>
          <button className="btn pri" onClick={aplicar}><Icon n="check" />Marcar metas</button>
        </div>
      </section>
    </>
  );
}
