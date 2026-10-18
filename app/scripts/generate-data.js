import fs from 'fs';
import path from 'path';

const dumpPath = 'C:/Users/juanf/.gemini/antigravity-ide/brain/94714b48-0f9f-48fb-9af7-5eb077908f41/.user_uploaded/media_1792270450769.json';
const dump = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));

const { core, progressoLocal } = dump;

// 1. Salvar core-data.json
const coreTarget = path.resolve('src/data/core-data.json');
fs.writeFileSync(coreTarget, JSON.stringify(core, null, 2), 'utf8');
console.log('Gravado core-data.json');

// 2. Extrair dados de perfil e progresso de nath
const perfilRaw = JSON.parse(progressoLocal['pe26:perfil'] || '{}');
const metasRaw = JSON.parse(progressoLocal['pe26:metas'] || '{}');
const questoesRaw = JSON.parse(progressoLocal['pe26:questoes'] || '{}');
const simuladosRaw = JSON.parse(progressoLocal['pe26:simulados'] || '{}');
const tecRaw = JSON.parse(progressoLocal['pe26:tec'] || '{}');
const prefsRaw = JSON.parse(progressoLocal['pe26:prefs'] || '{}');
const leisRaw = JSON.parse(progressoLocal['pe26:leis'] || '{}');
const leituraRaw = JSON.parse(progressoLocal['pe26:leitura'] || '{}');

// Mapear questões respondidas
const questoesMapped = {};
if (questoesRaw.a) {
  for (const [qid, qdata] of Object.entries(questoesRaw.a)) {
    questoesMapped[qid] = {
      r: qdata.r,
      ok: qdata.ok === 1,
      d: qdata.d,
      s: qdata.s,
      n: qdata.n
    };
  }
}

// Mapear metas
const metasMapped = {};
if (metasRaw.m) {
  for (const [mid, mdata] of Object.entries(metasRaw.m)) {
    metasMapped[mid] = {
      done: mdata.done || '',
      r: mdata.r || {},
      ck: mdata.ck || {},
      n: ''
    };
  }
}

const initialUser = {
  perfil: {
    nome: perfilRaw.nome || 'nath',
    inicio: perfilRaw.inicio || '2026-08-17',
    badges: perfilRaw.badges || { m1: '2026-10-16', m10: '2026-10-16', sim1: '2026-10-16' },
    lvl: 3,
    xp: 2850
  },
  metas: metasMapped,
  questoes: questoesMapped,
  tec: (tecRaw.log || []).map(item => ({
    id: item.id,
    d: item.d,
    c: item.c || 1,
    s: item.s,
    q: item.q,
    a: item.a,
    min: item.min || 0,
    src: item.src || 'Qconcursos',
    obs: item.obs || ''
  })),
  sessoes: [
    { id: 's1', d: '2026-10-16', c: 1, min: 45 },
    { id: 's2', d: '2026-10-17', c: 10, min: 60 }
  ],
  simulados: (simuladosRaw.items || []).map(sim => ({
    id: sim.id,
    d: sim.d,
    nome: sim.nome,
    total: sim.total,
    c: sim.c,
    e: sim.e,
    b: sim.b,
    red: sim.red,
    obs: sim.obs || ''
  })),
  redacao: [
    { id: 'r1', d: '2026-10-16', tema: 'T01', linhas: 28, nota: 31, min: 55, txt: '' }
  ],
  leis: {
    lida: leisRaw.lida || {},
    duv: leisRaw.duv || {},
    nt: leisRaw.nt || {},
    pos: leisRaw.pos || {}
  },
  docs: {
    lido: { 'orientacoes:0': '2026-10-16', 'guia-revisoes:0': '2026-10-16' },
    pos: leituraRaw.pos || {}
  },
  erros: { dom: {} },
  avisosOk: [1],
  prefs: {
    tema: prefsRaw.tema || 'auto',
    fz: prefsRaw.fz || 1,
    rev: prefsRaw.rev || [1, 7, 30],
    horas: prefsRaw.horas || 3,
    metasSem: prefsRaw.metasSem || 5,
    verde: prefsRaw.verde || 80,
    amarelo: prefsRaw.amarelo || 65,
    alvo: 'Escrevente Técnico Judiciário - TJSP',
    nick: 'nath',
    rank: true
  },
  ui: { planMode: 'marco', planDisc: '', planSt: 'todas', rankTab: 'xp' },
  timer: { run: false, start: 0, meta: null },
  user: { email: 'nath@exemplo.com', nome: 'nath' }
};

fs.writeFileSync(path.resolve('src/data/initial-user.json'), JSON.stringify(initialUser, null, 2), 'utf8');
console.log('Gravado initial-user.json');
