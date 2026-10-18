import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

console.log('--- Contexto needs docs ---');
console.log(appSrc.slice(164100, 164600));

console.log('--- Contexto needs leis ---');
console.log(appSrc.slice(175900, 176400));
