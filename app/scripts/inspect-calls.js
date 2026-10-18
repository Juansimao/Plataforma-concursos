import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

const targets = ['load(\'questoes\')', 'needs(\'questoes\'', 'docs/', 'leis/'];
targets.forEach(tgt => {
  let idx = 0;
  while ((idx = appSrc.indexOf(tgt, idx + 1)) !== -1) {
    console.log('=== Achou', tgt, 'em', idx, '===');
    console.log(appSrc.slice(Math.max(0, idx - 100), Math.min(appSrc.length, idx + 300)));
  }
});
