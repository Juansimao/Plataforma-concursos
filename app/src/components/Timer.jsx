import { useEffect, useState } from 'react';
import { S, save } from '../lib/store.js';
import { TODAY, uid, fmtMin, minutesBy, checkBadges } from '../lib/logic.js';
import { Icon, toast } from './ui.jsx';
import { flush } from '../lib/actions.js';

export const fmtClock = (ms) => {
  const t = Math.floor(ms / 1000); const h = Math.floor(t / 3600); const m = Math.floor((t % 3600) / 60); const s = t % 60;
  const p = (n) => String(n).padStart(2, '0');
  return `${p(h)}:${p(m)}:${p(s)}`;
};

export function timerStart(meta = null) {
  if (S.timer.run) return;
  S.timer = { run: true, start: Date.now(), meta };
  save();
}
export function timerStop(save_ = true) {
  if (!S.timer.run) return 0;
  const min = Math.round((Date.now() - S.timer.start) / 60000);
  const meta = S.timer.meta;
  S.timer = { run: false, start: 0, meta: null };
  if (save_ && min >= 1) {
    S.sessoes.push({ id: uid(), d: TODAY(), min, c: meta });
    toast(`Sessão registrada: ${fmtMin(min)}`);
    flush(checkBadges());
  } else if (save_) {
    toast('Sessão menor que 1 minuto não foi registrada.');
  }
  save();
  return min;
}

export function useTick(active) {
  const [, set] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    const id = setInterval(() => set((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, [active]);
}

export function TimerMini() {
  useTick(S.timer.run);
  const run = S.timer.run;
  return (
    <div className="row between">
      <span className="timer">{fmtClock(run ? Date.now() - S.timer.start : 0)}</span>
      <div className="row">
        {run ? <button className="btn pri sm" onClick={() => timerStop()}><Icon n="check" />Parar e registrar</button> : <button className="btn pri sm" onClick={() => timerStart(null)}><Icon n="play" />Iniciar</button>}
        <a className="btn sm ghost" href="#cronometro">Detalhes</a>
      </div>
    </div>
  );
}

export const minutosHoje = () => minutesBy()[TODAY()] || 0;
