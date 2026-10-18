import fs from 'fs';
import path from 'path';

const fullDump = JSON.parse(fs.readFileSync('src/data/protocolo-dados-completos.json', 'utf8'));

// 1. Salvar questoes-full.json
const questoes = fullDump.questoes.q.map(q => {
  // Padronizar tipo e gabarito
  const isCE = !q.alts || q.alts.length === 0;
  return {
    id: q.id,
    d: q.d === 'LE' ? 'ATU' : (q.d === 'RI' ? 'LI' : q.d),
    s: q.s,
    tema: q.tema || '',
    tipo: isCE ? 'ce' : 'mc',
    t: q.e,
    alts: q.alts || [],
    gab: isCE ? q.g : (typeof q.g === 'string' && q.g.length === 1 ? 'ABCDE'.indexOf(q.g) : q.g),
    exp: q.c || '',
    lei: q.lei || '',
    lk: q.lk || ''
  };
});

fs.writeFileSync('src/data/questoes-full.json', JSON.stringify(questoes), 'utf8');
console.log(`Gravadas ${questoes.length} questões em questoes-full.json`);

// 2. Salvar flashcards.json
const flashcards = fullDump.flashcards.decks;
fs.writeFileSync('src/data/flashcards.json', JSON.stringify(flashcards, null, 2), 'utf8');
console.log(`Gravados ${flashcards.length} baralhos em flashcards.json`);

// 3. Atualizar build-content.js para usar as 5.870 questões e os baralhos de flashcards
const contentBuildScript = fs.readFileSync('scripts/build-content.js', 'utf8');
// Atualizar para importar questoes do json
