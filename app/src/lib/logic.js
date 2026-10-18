import { S, save, prefs } from './store.js';
import { META, METAS, NTOTAL, SCHED, ORD, DISC, QUESTOES, LEIS, MARCOS, CURSO } from '../data/content.js';

/* ---------- datas (ISO local YYYY-MM-DD) ---------- */
const pad = (n) => String(n).padStart(2, '0');
export const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const TODAY = () => iso(new Date());
export const parseISO = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
export const addDays = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return iso(d); };
export const diffDays = (a, b) => Math.round((parseISO(a) - parseISO(b)) / 864e5);
export const br = (s) => (s ? `${s.slice(8, 10)}/${s.slice(5, 7)}` : '');
export const brY = (s) => (s ? `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(0, 4)}` : '');
export const fmtNum = (n) => Number(n || 0).toLocaleString('pt-BR');
export const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
export const fmtPct = (n) => `${n}%`;
export const fmtMin = (m) => { m = Math.round(m || 0); const h = Math.floor(m / 60); return h ? `${h}h${pad(m % 60)}` : `${m}min`; };
export const plural = (n, s, p) => `${n} ${n === 1 ? s : p || s + 's'}`;
export const uid = () => Math.random().toString(36).slice(2, 10);
export const revLabel = (k) => ({ 1: 'R1 · 24 horas', 2: 'R2 · 7 dias', 3: 'R3 · 30 dias' }[k]);
export const intervalo = (d) => (d === 1 ? '24h' : `${d} dias`);

export const BLANK = 'B';

/* ---------- metas e revisões ---------- */
export const mst = (n) => S.metas[n] || {};
export const setMeta = (n, patch) => { S.metas[n] = { ...(S.metas[n] || {}), ...patch }; save(); };
export const isDone = (n) => !!(S.metas[n] && S.metas[n].done);
export const doneList = () => SCHED.filter(isDone);
export const nextMetas = (k) => SCHED.filter((n) => !isDone(n)).slice(0, k);
export const metaLabel = (m) => (m.tipo === 'meta' ? DISC_NAME(m.d) : m.nome);
export const topShort = (m) => (m.tipo === 'meta' ? m.top : m.top);
export const DISC_NAME = (d) => (DISC[d] ? DISC[d].nome : d);
export const discShort = (d) => (DISC[d] ? DISC[d].curto : d);

export function revList() {
  const out = [];
  const iv = prefs().rev;
  SCHED.forEach((n) => {
    const s = S.metas[n];
    if (!s || !s.done || META[n].tipo !== 'meta') return;
    [1, 2, 3].forEach((k) => out.push({ n, k, due: addDays(s.done, +iv[k - 1]), at: (s.r || {})[k] || '' }));
  });
  return out;
}

/* ---------- questões, registros externos e cronômetro ---------- */
export function qAgg(filter = () => true) {
  const o = { n: 0, c: 0, e: 0, b: 0, by: {} };
  Object.entries(S.questoes).forEach(([id, a]) => {
    if (!filter(a, id)) return;
    const q = QUESTOES.find((x) => x.id === id);
    o.n++;
    if (a.r === BLANK) { o.b++; return; }
    a.ok ? o.c++ : o.e++;
    const d = q ? q.d : '?';
    o.by[d] = o.by[d] || { c: 0, e: 0 };
    a.ok ? o.by[d].c++ : o.by[d].e++;
  });
  return o;
}
export function tecAgg(filter = () => true) {
  const o = { q: 0, a: 0, by: {} };
  S.tec.filter(filter).forEach((e) => {
    o.q += e.q; o.a += e.a;
    const b = (o.by[e.s] = o.by[e.s] || { q: 0, a: 0 });
    b.q += e.q; b.a += e.a;
  });
  return o;
}
export const tecMeta = (n) => tecAgg((e) => +e.c === +n);
export function minutesBy() {
  const o = {};
  S.sessoes.forEach((s) => { o[s.d] = (o[s.d] || 0) + (+s.min || 0); });
  S.tec.forEach((e) => { if (e.min) o[e.d] = (o[e.d] || 0) + e.min; });
  return o;
}
export const minTotal = () => Object.values(minutesBy()).reduce((a, b) => a + b, 0);

export function activityDays() {
  const o = {};
  const mark = (d) => { if (d) o[d] = (o[d] || 0) + 1; };
  Object.values(S.metas).forEach((s) => { mark(s.done); Object.values(s.r || {}).forEach(mark); });
  Object.values(S.questoes).forEach((a) => mark(a.d));
  S.tec.forEach((e) => mark(e.d)); S.sessoes.forEach((e) => mark(e.d)); S.simulados.forEach((e) => mark(e.d)); S.redacao.forEach((e) => mark(e.d));
  return o;
}
export function streak() {
  const days = activityDays(); const t = TODAY();
  let d = days[t] ? t : addDays(t, -1); let n = 0;
  while (days[d]) { n++; d = addDays(d, -1); }
  return n;
}

export function pace() {
  const t = TODAY(); const doneN = doneList().length; const P = prefs();
  const ds = doneList().map((n) => S.metas[n].done);
  const n7 = ds.filter((d) => d >= addDays(t, -6)).length;
  const inicio = S.perfil.inicio || (ds.length ? ds.slice().sort()[0] : '');
  const sinceStart = inicio ? Math.max(1, diffDays(t, inicio) + 1) : 0;
  const janela = Math.max(7, Math.min(28, sinceStart));
  const n28 = ds.filter((d) => d >= addDays(t, -(janela - 1))).length;
  const perWeek = sinceStart ? (n28 / janela) * 7 : 0;
  const left = NTOTAL - doneN;
  const eta = perWeek > 0 && left > 0 ? addDays(t, Math.ceil((left / perWeek) * 7)) : '';
  const need = P.alvo ? left / Math.max(1, diffDays(P.alvo, t) / 7) : null;
  return { doneN, n7, perWeek, left, eta, sinceStart, metaSem: +P.metaSem || 5, need };
}

/* ---------- gamificação (regras de XP observadas no app original, valores próprios onde divergem) ---------- */
export const XP = { meta: 100, rev: 60, sim: 150, revR: 30, qOk: 5, qAny: 2, extQ: 1, extA: 1, hora: 15, simL: 150, red: 120, lei: 80, doc: 10, dia: 10 };
export const LEVELS = [[0, 'Inscrito'], [300, 'Candidato'], [800, 'Em treino'], [1600, 'Habilitado'], [2800, 'Classificado'], [4500, 'Convocado'], [6800, 'Nomeado'], [9800, 'Empossado'], [13500, CURSO.nivelFinal], [18000, 'Lenda']];
export const xpFor = (kind, o) => (kind === 'meta' ? (o.tipo === 'sim' ? XP.sim : o.tipo === 'rev' ? XP.rev : XP.meta) : kind === 'ext' ? Math.min(300, (+o.q || 0) * XP.extQ + (+o.a || 0) * XP.extA) : 0);

export function breakdown() {
  const b = { metas: 0, revs: 0, q: 0, ext: 0, horas: 0, sims: 0, red: 0, leis: 0, docs: 0, dias: 0 };
  Object.entries(S.metas).forEach(([n, s]) => {
    const m = META[n]; if (!m || !s.done) return;
    b.metas += xpFor('meta', m);
    Object.values(s.r || {}).forEach((v) => { if (v) b.revs += XP.revR; });
  });
  Object.values(S.questoes).forEach((a) => { if (a.r !== BLANK) { b.q += XP.qAny; if (a.ok) b.q += XP.qOk; } });
  S.tec.forEach((e) => { b.ext += xpFor('ext', e); });
  b.horas = Math.round((minTotal() / 60) * XP.hora);
  b.sims = S.simulados.filter((x) => !x.app).length * XP.simL;
  b.red = S.redacao.length * XP.red;
  b.leis = Object.keys(S.leis.lida).length * XP.lei;
  b.docs = Object.keys(S.docs.lido).length * XP.doc;
  b.dias = Object.keys(activityDays()).length * XP.dia;
  b.total = Object.values(b).reduce((a, v) => a + v, 0);
  return b;
}
export function level() {
  const xp = breakdown().total; let i = 0;
  while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1][0]) i++;
  const cur = LEVELS[i][0]; const next = LEVELS[i + 1] ? LEVELS[i + 1][0] : null;
  return { n: i + 1, nome: LEVELS[i][1], xp, cur, next, pct: next ? Math.round(((xp - cur) / (next - cur)) * 100) : 100 };
}

const nQ = () => Object.values(S.questoes).filter((a) => a.r !== BLANK).length;
export const BADGES = [
  { id: 'm1', nome: 'Primeira meta', desc: 'Concluiu a Meta 1', ic: 'go', ok: () => isDone(1) },
  { id: 'm10', nome: '10 metas', desc: 'Dez metas concluídas', ic: 'check', ok: () => doneList().length >= 10 },
  { id: 'm30', nome: '30 metas', desc: 'Um terço do caminho', ic: 'check', ok: () => doneList().length >= 30 },
  { id: 'mall', nome: 'Cronograma completo', desc: `As ${NTOTAL} metas concluídas`, ic: 'trophy', ok: () => doneList().length >= NTOTAL },
  ...MARCOS.map((mc) => ({ id: `marco${mc.n}`, nome: `Marco ${mc.n} fechado`, desc: mc.nome, ic: 'flag', ok: () => METAS.filter((m) => m.marco === mc.n).every((m) => isDone(m.n)) })),
  { id: 'q10', nome: '10 questões', desc: 'Dez questões resolvidas no app', ic: 'quiz', ok: () => nQ() >= 10 },
  { id: 'q20', nome: '20 questões', desc: 'Vinte questões resolvidas no app', ic: 'quiz', ok: () => nQ() >= 20 },
  { id: 'ext500', nome: '500 externas', desc: 'Quinhentas questões registradas', ic: 'grid', ok: () => tecAgg().q >= 500 },
  { id: 's7', nome: '7 dias seguidos', desc: 'Uma semana sem falhar', ic: 'fire', ok: () => streak() >= 7 },
  { id: 's30', nome: '30 dias seguidos', desc: 'Um mês sem falhar', ic: 'fire', ok: () => streak() >= 30 },
  { id: 'r1', nome: 'Primeira redação', desc: 'Salvou uma redação', ic: 'pen', ok: () => S.redacao.length >= 1 },
  { id: 'lei1', nome: 'Lei seca', desc: 'Leu uma norma inteira', ic: 'law', ok: () => Object.keys(S.leis.lida).length >= 1 },
  { id: 'leiall', nome: 'Edital na ponta da língua', desc: `Leu as ${LEIS.length} normas`, ic: 'law', ok: () => Object.keys(S.leis.lida).length >= LEIS.length },
  { id: 'h10', nome: '10 horas líquidas', desc: 'Dez horas de estudo registradas', ic: 'clock', ok: () => minTotal() >= 600 },
  { id: 'h100', nome: '100 horas líquidas', desc: 'Cem horas de estudo registradas', ic: 'clock', ok: () => minTotal() >= 6000 },
  { id: 'sim1', nome: 'Primeiro simulado', desc: 'Lançou um simulado', ic: 'target', ok: () => S.simulados.length >= 1 },
  { id: 'sim70', nome: 'Nota de aprovação', desc: '70% ou mais num simulado de 30+ questões', ic: 'trophy', ok: () => S.simulados.some((x) => x.total >= 30 && pct(x.c, x.total) >= 70) },
  { id: 'rev30', nome: '30 revisões', desc: 'Trinta revisões espaçadas feitas', ic: 'rev', ok: () => revList().filter((x) => x.at).length >= 30 },
  { id: 'err10', nome: 'Erros dominados', desc: '10 itens do Banco de Erros dominados', ic: 'alert', ok: () => Object.keys(S.erros.dom).length >= 10 },
];

/** Verifica medalhas e nível; devolve mensagens para o chamador exibir como toast. */
export function checkBadges() {
  const msgs = [];
  const had = S.perfil.badges || {};
  BADGES.forEach((b) => {
    let ok = false; try { ok = b.ok(); } catch { ok = false; }
    if (ok && !had[b.id]) { had[b.id] = TODAY(); msgs.push(`Conquista desbloqueada: ${b.nome}`); }
  });
  S.perfil.badges = had;
  const L = level();
  if (L.n > (S.perfil.lvl || 1)) msgs.push(`Você subiu para o nível ${L.n}: ${L.nome}`);
  S.perfil.lvl = L.n;
  save();
  return msgs;
}

/* ---------- erros ---------- */
export function errosPend() {
  return Object.entries(S.questoes)
    .filter(([id, a]) => a.r !== BLANK && a.ok === 0 && !S.erros.dom[id])
    .map(([id]) => QUESTOES.find((q) => q.id === id)).filter(Boolean);
}

export { ORD };
