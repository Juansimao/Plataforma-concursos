import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

// 1. Procurar onde 'jogos.json' aparece
let p = 0;
while ((p = appSrc.indexOf('jogos.json', p + 1)) !== -1) {
  console.log('--- jogos.json em', p, '---');
  console.log(appSrc.slice(Math.max(0, p - 100), p + 200).replace(/\n/g, ' '));
}

// 2. Procurar onde 'leis/' aparece
let p2 = 0;
while ((p2 = appSrc.indexOf('leis/', p2 + 1)) !== -1) {
  console.log('--- leis/ em', p2, '---');
  console.log(appSrc.slice(Math.max(0, p2 - 80), p2 + 150).replace(/\n/g, ' '));
  if (p2 > 200000) break; // só os primeiros
}

// 3. Procurar onde 'docs/' aparece
let p3 = 0;
while ((p3 = appSrc.indexOf('docs/', p3 + 1)) !== -1) {
  console.log('--- docs/ em', p3, '---');
  console.log(appSrc.slice(Math.max(0, p3 - 80), p3 + 150).replace(/\n/g, ' '));
  if (p3 > 200000) break;
}
