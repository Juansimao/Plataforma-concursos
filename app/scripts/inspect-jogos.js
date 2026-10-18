import fs from 'fs';
const html = fs.readFileSync('c:/Users/juanf/Econverse/rea/analysis-protocolo/raw/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const appSrc = scripts[6];

// Procurar onde aparece jogos
let pos = 0;
while ((pos = appSrc.indexOf("case 'jogos'", pos + 1)) !== -1) {
  console.log('case jogos at', pos, ':');
  console.log(appSrc.slice(pos, pos + 1000));
}

let pos2 = 0;
while ((pos2 = appSrc.indexOf("r === 'jogos'", pos2 + 1)) !== -1) {
  console.log('r === jogos at', pos2, ':');
  console.log(appSrc.slice(pos2, pos2 + 1000));
}

// Procurar onde estão os modos de jogo (ex: 'jogo', 'duelo', 'quiz', 'corrida', 'forca', 'memoria')
const gameTypes = ['jogo.', 'jogo-', 'jogos/', 'data/jogos', 'CORE.jogos', 'LOADED.jogos'];
gameTypes.forEach(gt => {
  let p = 0;
  while ((p = appSrc.indexOf(gt, p + 1)) !== -1) {
    console.log('Game type', gt, 'at', p, ':', appSrc.slice(p, p + 400).replace(/\n/g, ' '));
  }
});
