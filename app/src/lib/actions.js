import { S, save, prefs } from './store.js';
import { META } from '../data/content.js';
import { TODAY, mst, setMeta, xpFor, checkBadges, intervalo, XP } from './logic.js';
import { toast, toastUndo } from '../components/ui.jsx';

const flush = (msgs) => msgs.forEach((m, i) => toast(m, 4000 + i * 300));

export function toggleMeta(n) {
  const s = mst(n); const m = META[n];
  if (s.done) {
    const antes = { done: s.done, r: { ...(s.r || {}) } };
    setMeta(n, { done: '', r: {} });
    toastUndo(`M${n} desmarcada`, () => setMeta(n, antes));
    return;
  }
  if (!S.perfil.inicio) { S.perfil.inicio = TODAY(); save(); }
  setMeta(n, { done: TODAY() });
  const xp = xpFor('meta', m);
  toast(m.tipo === 'meta' ? `M${n} concluída · +${xp} XP · revisões em ${prefs().rev.map(intervalo).join(', ')}` : `M${n} concluída · +${xp} XP`);
  flush(checkBadges());
}

export function toggleRev(n, k) {
  const r = { ...(mst(n).r || {}) };
  if (r[k]) delete r[k]; else r[k] = TODAY();
  setMeta(n, { r });
  toast(r[k] ? `Revisão R${k} de M${n} registrada · +${XP.revR} XP` : `Revisão R${k} de M${n} desmarcada`);
  if (r[k]) flush(checkBadges());
}

export { flush };
