import { useEffect, useState } from 'react';

/* ---------- ícones (traços próprios, 24x24) ---------- */
const P = {
  home: 'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  cal: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  rev: 'M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.5v1',
  quiz: 'M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.1-1.5 2.4M12 17.5v.5M4 4h16v16H4z',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  case: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  pen: 'M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19zM14 7l3 3',
  alert: 'M12 3l10 18H2zM12 10v5M12 18v.5',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13',
  law: 'M12 3v18M6 21h12M4 7h16M4 7l-2 7a3 3 0 0 0 4 0zM20 7l-2 7a3 3 0 0 0 4 0z',
  chart: 'M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-8',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  doc: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7',
  medal: 'M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM8.5 13L7 21l5-3 5 3-1.5-8',
  game: 'M6 9h12a4 4 0 0 1 4 4v1a3 3 0 0 1-5 2l-1-1H8l-1 1a3 3 0 0 1-5-2v-1a4 4 0 0 1 4-4zM8 12v3M6.5 13.5h3M16 12.5h.01M18 14.5h.01',
  trophy: 'M8 4h8v6a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 14v4M8 21h8M10 18h4',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2 20a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14.5a7 7 0 0 1 4 5.5',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  bug: 'M9 7a3 3 0 0 1 6 0M8 9h8v6a4 4 0 0 1-8 0zM4 11h4M16 11h4M4 17h4M16 17h4M12 9v10',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  play: 'M7 4l13 8-13 8z',
  gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  x: 'M6 6l12 12M18 6L6 18',
  menu: 'M4 7h16M4 12h16M4 17h16',
  left: 'M15 5l-7 7 7 7',
  right: 'M9 5l7 7-7 7',
  go: 'M5 12h14M13 6l6 6-6 6',
  flag: 'M5 21V4M5 4h11l-2 4 2 4H5',
  fire: 'M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  plus: 'M12 5v14M5 12h14',
  trash: 'M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10 11v5M14 11v5',
  share: 'M12 4v11M8 8l4-4 4 4M5 13v7h14v-7',
  ext: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
  pdf: 'M6 3h9l4 4v14H6zM14 3v5h5M8.5 16h7',
  yt: 'M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM10 9l5 3-5 3z',
  save: 'M5 4h12l3 3v13H5zM8 4v5h8V4M8 20v-6h8v6',
  sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5',
  moon: 'M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10z',
};
export function Icon({ n, className = '' }) {
  return (
    <svg className={`i ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d={P[n] || P.check} />
    </svg>
  );
}

/* ---------- roteamento por hash: #rota.param1.param2 ---------- */
export function parseHash(known) {
  const h = decodeURIComponent(location.hash.replace(/^#/, ''));
  const parts = h.split('.');
  const r = known[parts[0]] ? parts[0] : 'inicio';
  return { r, p: parts.slice(1) };
}
export const go = (h) => { if (location.hash === `#${h}`) window.dispatchEvent(new HashChangeEvent('hashchange')); else location.hash = h; };
export function useHash() {
  const [h, setH] = useState(location.hash);
  useEffect(() => {
    const f = () => setH(location.hash);
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return h;
}

/* ---------- toasts ---------- */
const toastBus = new EventTarget();
export const toast = (msg, ms = 2600) => toastBus.dispatchEvent(new CustomEvent('t', { detail: { msg, ms } }));
export const toastUndo = (msg, undo) => toastBus.dispatchEvent(new CustomEvent('t', { detail: { msg, ms: 5000, undo } }));
export function ToastHost() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const f = (e) => {
      const id = Math.random();
      setItems((x) => [...x, { id, ...e.detail }]);
      setTimeout(() => setItems((x) => x.filter((i) => i.id !== id)), e.detail.ms);
    };
    toastBus.addEventListener('t', f);
    return () => toastBus.removeEventListener('t', f);
  }, []);
  return (
    <div id="toast" aria-live="polite">
      {items.map((i) => (
        <div key={i.id}>
          <span>{i.msg}</span>
          {i.undo && <button className="btn xs" onClick={() => { i.undo(); setItems((x) => x.filter((y) => y.id !== i.id)); }}>Desfazer</button>}
        </div>
      ))}
    </div>
  );
}

/* ---------- folha (menu/diálogos) ---------- */
const sheetBus = new EventTarget();
export const openSheet = (render) => sheetBus.dispatchEvent(new CustomEvent('s', { detail: render }));
export const closeSheet = () => sheetBus.dispatchEvent(new CustomEvent('s', { detail: null }));
export function SheetHost() {
  const [render, setRender] = useState(null);
  useEffect(() => {
    const f = (e) => setRender(() => e.detail);
    const k = (e) => { if (e.key === 'Escape') setRender(null); };
    const h = () => setRender(null);
    sheetBus.addEventListener('s', f); window.addEventListener('keydown', k); window.addEventListener('hashchange', h);
    return () => { sheetBus.removeEventListener('s', f); window.removeEventListener('keydown', k); window.removeEventListener('hashchange', h); };
  }, []);
  if (!render) return null;
  return (
    <div className="sheetbg" onClick={(e) => e.target === e.currentTarget && setRender(null)}>
      <div className="sheet" role="dialog" aria-modal="true">{render()}</div>
    </div>
  );
}

/* ---------- peças de UI ---------- */
export const Bar = ({ v, className = '', style }) => (
  <div className={`bar ${className}`} style={style}><i style={{ width: `${Math.max(0, Math.min(100, v))}%` }} /></div>
);
export const Tag = ({ t }) => (t ? <span className={`tag ${t === 'ALTA' ? 'alta' : t === 'MÉDIA' ? 'media' : 'baixa'}`}>{t === 'ALTA' ? 'Alta incidência' : t === 'MÉDIA' ? 'Média incidência' : 'Baixa incidência'}</span> : null);
export const TipoPill = ({ m }) => (m.tipo === 'meta' ? null : <span className={`meta-tipo ${m.tipo}`}>{m.tipo === 'sim' ? 'Simulado' : 'Revisão'}</span>);
export const A = ({ h, children, className = '', ...r }) => <a href={`#${h}`} className={className} {...r}>{children}</a>;

/* ---------- gráficos SVG ---------- */
export function LineChart({ labels, series, height = 200, max }) {
  const W = 640, H = height, L = 34, Rr = 10, T = 10, B = 24;
  const n = labels.length; const mx = max || Math.max(10, ...series.flatMap((s) => s.data.filter((v) => v != null)));
  const x = (i) => L + (n <= 1 ? 0 : (i / (n - 1)) * (W - L - Rr));
  const y = (v) => T + (1 - v / mx) * (H - T - B);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(mx * t));
  return (
    <div className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Gráfico de linhas">
        {ticks.map((t) => (<g key={t}><line x1={L} x2={W - Rr} y1={y(t)} y2={y(t)} stroke="var(--grid)" /><text x={L - 6} y={y(t) + 4} textAnchor="end">{t}</text></g>))}
        {labels.map((lb, i) => (i % Math.ceil(n / 8) === 0 ? <text key={i} x={x(i)} y={H - 6} textAnchor="middle">{lb}</text> : null))}
        {series.map((s) => {
          const pts = s.data.map((v, i) => (v == null ? null : [x(i), y(v)]));
          const d = pts.reduce((a, p) => (p ? `${a}${a && a.endsWith('Z') ? '' : a ? 'L' : 'M'}${p[0]},${p[1]} ` : a), '');
          return (<g key={s.nome}><path d={d} fill="none" stroke={s.cor} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />{pts.map((p, i) => (p ? <circle key={i} cx={p[0]} cy={p[1]} r="3" fill={s.cor}><title>{`${labels[i]}: ${s.data[i]}`}</title></circle> : null))}</g>);
        })}
      </svg>
      <div className="legend">{series.map((s) => <span key={s.nome}><i style={{ background: s.cor }} />{s.nome}</span>)}</div>
    </div>
  );
}

export function HBars({ rows, suffix = '%', max = 100 }) {
  const RH = 30, W = 560, LW = 150, H = rows.length * RH + 6;
  return (
    <div className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Gráfico de barras">
        {rows.map((r, i) => {
          const w = Math.max(0, Math.min(1, r.v / max)) * (W - LW - 56);
          return (
            <g key={r.l} transform={`translate(0,${i * RH + 4})`}>
              <text className="lab" x={LW - 8} y={16} textAnchor="end">{r.l}</text>
              <rect x={LW} y={4} width={W - LW - 56} height={14} rx={7} fill="var(--surface-3)" />
              <rect x={LW} y={4} width={w} height={14} rx={7} fill={r.cor || 'var(--s1)'} />
              <text className="val" x={LW + w + 8} y={16}>{r.v}{suffix}{r.sub ? ` · ${r.sub}` : ''}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function Heatmap({ days, today, weeks = 20 }) {
  const dow = (() => { const d = new Date(today + 'T00:00:00'); return d.getDay(); })();
  const total = weeks * 7; const cells = [];
  const start = new Date(today + 'T00:00:00'); start.setDate(start.getDate() - (total - 1) - (6 - dow) + (6 - dow));
  const first = new Date(start); first.setDate(first.getDate() - first.getDay());
  const maxv = Math.max(1, ...Object.values(days));
  for (let i = 0; i < weeks * 7 + 7; i++) {
    const d = new Date(first); d.setDate(first.getDate() + i);
    const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    if (k > today) { cells.push(<i key={k} className="out" />); continue; }
    const v = days[k] || 0; const lvl = !v ? 0 : Math.min(4, Math.ceil((v / maxv) * 4));
    cells.push(<i key={k} className={`${lvl ? 'h' + lvl : ''} ${k === today ? 'td' : ''}`} title={`${k.slice(8, 10)}/${k.slice(5, 7)}: ${v} atividade(s)`} />);
  }
  return <div className="heatwrap"><div className="heat">{cells}</div></div>;
}
