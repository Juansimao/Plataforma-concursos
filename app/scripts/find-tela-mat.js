import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

let p = 0;
while ((p = appSrc.indexOf('r === \'materiais\'', p + 1)) !== -1) {
  console.log('r === materiais em', p, ':', appSrc.slice(p, p + 500).replace(/\n/g, ' '));
}

let p2 = 0;
while ((p2 = appSrc.indexOf('r === \'leis\'', p2 + 1)) !== -1) {
  console.log('r === leis em', p2, ':', appSrc.slice(p2, p2 + 500).replace(/\n/g, ' '));
}
