import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

// Procurar onde renderiza rota doc
const p = appSrc.indexOf("r === 'doc'");
console.log('r === doc:');
console.log(appSrc.slice(p, p + 1200));

// Procurar onde renderiza rota lei
const p2 = appSrc.indexOf("r === 'lei'");
console.log('r === lei:');
console.log(appSrc.slice(p2, p2 + 1200));
