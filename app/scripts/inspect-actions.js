import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

// Manipuladores de clique para abrir docs e leis
const terms = ["ACT['doc']", "ACT['lei']", "ACT['open-doc']", "ACT['open-lei']", "data-a=\"doc\"", "data-a=\"lei\""];
terms.forEach(t => {
  let p = 0;
  while ((p = appSrc.indexOf(t, p + 1)) !== -1) {
    console.log(t, 'em', p, ':', appSrc.slice(p, p + 300).replace(/\n/g, ' '));
  }
});
