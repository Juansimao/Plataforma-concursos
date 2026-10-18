// Script para executar no Console do DevTools em https://app.protocoloescrevente.com.br/
// Ele faz o download de todo o conteúdo da plataforma (questões, resumos docs, leis)
// aproveitando a sessão autenticada do usuário.

(async function extrairConteudoCompleto() {
  console.log('%c[Protocolo Extrator] Iniciando extração de dados...', 'color: #c49b36; font-weight: bold; font-size: 14px;');

  const C = window.PEContent ? await window.PEContent.init() : null;
  const manifesto = (C && C.man) ? C.man : null;
  
  const resultado = {
    exportado_em: new Date().toISOString(),
    manifesto_chaves: manifesto ? Object.keys(manifesto) : [],
    arquivos: {}
  };

  // Lista de arquivos prioritários
  const prioridades = [
    'data/questoes.json',
    'data/redacao.json'
  ];

  // Adiciona leis e docs do core
  const coreEl = document.getElementById('core');
  if (coreEl && coreEl.textContent) {
    try {
      const core = JSON.parse(coreEl.textContent);
      (core.leis || []).forEach(l => prioridades.push(`data/leis/${l.id}.json`));
      (core.docs || []).forEach(d => prioridades.push(`data/docs/${d.id}.json`));
    } catch(e) {}
  }

  // Se tiver manifesto, inclui todos os arquivos mapeados
  const todosCaminhos = Array.from(new Set([
    ...prioridades,
    ...(manifesto ? Object.keys(manifesto) : [])
  ]));

  console.log(`%c[Protocolo Extrator] Encontrados ${todosCaminhos.length} arquivos para baixar.`, 'color: #0b7a28;');

  let baixados = 0;
  let falhas = 0;

  // Tenta abrir o Cache Storage local
  let cacheLocal = null;
  try { cacheLocal = await caches.open('pe-conteudo'); } catch(e) {}

  for (const path of todosCaminhos) {
    try {
      let conteudo = null;

      // 1. Tenta pegar do cache local do navegador
      if (cacheLocal) {
        try {
          const keys = await cacheLocal.keys();
          const matchKey = keys.find(k => k.url.endsWith('/' + path));
          if (matchKey) {
            const resp = await cacheLocal.match(matchKey);
            if (resp) conteudo = await resp.text();
          }
        } catch(e) {}
      }

      // 2. Se não estiver no cache, baixa autenticado via PEContent
      if (!conteudo && C && C.has(path)) {
        conteudo = await C.text(path);
      } 
      
      // 3. Fallback para fetch direto
      if (!conteudo) {
        try {
          const r = await fetch(path);
          if (r.ok) conteudo = await r.text();
        } catch(e) {}
      }

      if (conteudo) {
        try {
          resultado.arquivos[path] = JSON.parse(conteudo);
        } catch {
          resultado.arquivos[path] = conteudo;
        }
        baixados++;
        if (baixados % 5 === 0 || baixados === todosCaminhos.length) {
          console.log(`[Extrator] Progresso: ${baixados}/${todosCaminhos.length} (${path})`);
        }
      }
    } catch (err) {
      falhas++;
      console.warn(`Não foi possível baixar ${path}:`, err.message || err);
    }
  }

  console.log(`%c[Protocolo Extrator] Concluído! ${baixados} arquivos baixados com sucesso (${falhas} falhas).`, 'color: #0b7a28; font-weight: bold;');

  // Fazer o download do arquivo JSON completo
  const blob = new Blob([JSON.stringify(resultado, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'protocolo-conteudo-completo.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('%c[Protocolo Extrator] Download do arquivo "protocolo-conteudo-completo.json" iniciado no seu navegador!', 'color: #c49b36; font-weight: bold;');
})();
