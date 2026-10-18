import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

const matches = [];
const regex = /(?:load|needs)\((['"`])([^'"`]+)\1/g;
let m;
while ((m = regex.exec(appSrc)) !== null) {
  if (!matches.includes(m[2])) matches.push(m[2]);
}
console.log('Arquivos chamados por load() e needs():');
console.log(matches);

// Procurar chamadas dinâmicas como load(`leis/${id}`) ou load(`sets/${id}`)
const dynRegex = /(?:load|needs)\((`[^`]+`)/g;
const dynMatches = [];
while ((m = dynRegex.exec(appSrc)) !== null) {
  if (!dynMatches.includes(m[1])) dynMatches.push(m[1]);
}
console.log('Chamadas dinâmicas:');
console.log(dynMatches);
