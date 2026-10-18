import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

// 1. Procurar onde 'load('docs/' é chamado
let p = 0;
while ((p = appSrc.indexOf("load('docs/", p + 1)) !== -1) {
  console.log('load docs at', p, ':', appSrc.slice(Math.max(0, p - 60), p + 160).replace(/\n/g, ' '));
}

// 2. Procurar onde 'load('leis/' é chamado
let p2 = 0;
while ((p2 = appSrc.indexOf("load('leis/", p2 + 1)) !== -1) {
  console.log('load leis at', p2, ':', appSrc.slice(Math.max(0, p2 - 60), p2 + 160).replace(/\n/g, ' '));
}

// 3. Procurar onde 'needs('docs/' é chamado
let p3 = 0;
while ((p3 = appSrc.indexOf("needs('docs/", p3 + 1)) !== -1) {
  console.log('needs docs at', p3, ':', appSrc.slice(Math.max(0, p3 - 60), p3 + 160).replace(/\n/g, ' '));
}

// 4. Procurar onde 'needs('leis/' é chamado
let p4 = 0;
while ((p4 = appSrc.indexOf("needs('leis/", p4 + 1)) !== -1) {
  console.log('needs leis at', p4, ':', appSrc.slice(Math.max(0, p4 - 60), p4 + 160).replace(/\n/g, ' '));
}
