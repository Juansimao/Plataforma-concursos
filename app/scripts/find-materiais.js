import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

let p = 0;
while ((p = appSrc.indexOf('Materiais', p + 1)) !== -1) {
  console.log('Materiais em', p, ':', appSrc.slice(Math.max(0, p - 60), p + 140).replace(/\n/g, ' '));
  if (p > 200000) break;
}
