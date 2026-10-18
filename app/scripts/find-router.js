import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

// Onde a rota 'doc' é tratada no router?
let p = 0;
while ((p = appSrc.indexOf("case 'doc':", p + 1)) !== -1) {
  console.log('case doc: em', p);
  console.log(appSrc.slice(p, p + 500));
}

// Onde a rota 'lei' é tratada no router?
let p2 = 0;
while ((p2 = appSrc.indexOf("case 'lei':", p2 + 1)) !== -1) {
  console.log('case lei: em', p2);
  console.log(appSrc.slice(p2, p2 + 500));
}
