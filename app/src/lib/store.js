import { useEffect, useReducer } from 'react';
import initialUserData from '../data/initial-user.json';

const KEY = 'protocolo-clone:v2';

const defaults = () => JSON.parse(JSON.stringify(initialUserData));

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const merged = defaults();
    const saved = JSON.parse(raw);
    for (const k of Object.keys(merged)) if (saved[k] !== undefined) merged[k] = Array.isArray(merged[k]) ? saved[k] : typeof merged[k] === 'object' && merged[k] !== null ? { ...merged[k], ...saved[k] } : saved[k];
    return merged;
  } catch {
    return defaults();
  }
}

export const S = load();
const listeners = new Set();
let timeout = null;

export function save() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* cota cheia: segue só em memória */ }
  }, 150);
  listeners.forEach((l) => l());
}

export function resetAll() {
  const d = defaults();
  Object.keys(S).forEach((k) => delete S[k]);
  Object.assign(S, d);
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

export function importAll(obj) {
  const d = defaults();
  Object.keys(S).forEach((k) => delete S[k]);
  Object.assign(S, d, obj);
  save();
}

export function useStore() {
  const [, force] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    listeners.add(force);
    return () => listeners.delete(force);
  }, []);
  return S;
}

export const prefs = () => S.prefs;
