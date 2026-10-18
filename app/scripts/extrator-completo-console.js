// =========================================================================
// PROTOCOLO ESCREVENTE - EXTRATOR COMPLETO DE DADOS PAGOS (DEVTOOLS CONSOLE)
// =========================================================================
// Execute este script no Console (F12) na aba logada do app.protocoloescrevente.com.br
// Ele baixa:
//  - Todos os Jogos (data/jogos.json, pares, lacunas, prazos, crimes)
//  - Todos os Flashcards oficiais (data/flash.json)
//  - Todas as 5.870 Questões comentadas (data/questoes.json)
//  - Todos os 75 Resumos teóricos com textos e seções (data/docs/*.json)
//  - Todas as 14 Leis completas artigo por artigo (data/leis/*.json)
//  - Caderno de Redação (data/redacao.json)
//  - Conjuntos de questões por tema (data/sets/*.json)
//  - Cache Storage e memória do app
// =========================================================================

(async function extrairTudoDoProtocolo() {
  console.clear();
  console.log('%c[Protocolo VIP] Iniciando extração completa de todos os conteúdos pagos...', 'color: #c49b36; font-size: 16px; font-weight: bold;');

  const dump = {
    exportado_em: new Date().toISOString(),
    jogos: null,
    flashcards: null,
    questoes: null,
    redacao: null,
    leis: {},
    docs: {},
    sets: {},
    outros: {}
  };

  // Helper para tentar obter texto descriptografado ou de cache/API
  async function obterConteudo(id) {
    const limpo = id.replace(/^data\//, '').replace(/\.json$/, '');
    
    // 1. Tentar PECurso.texto (descriptografa arquivos .bin com a chave AES-GCM da sua conta)
    if (window.PECurso && typeof window.PECurso.texto === 'function') {
      try {
        const txt = await window.PECurso.texto(limpo, 'escrevente');
        if (txt) return JSON.parse(txt);
      } catch(e) {}
      try {
        const txt = await window.PECurso.texto(limpo);
        if (txt) return JSON.parse(txt);
      } catch(e) {}
    }

    // 2. Tentar PEContent (Cache Storage 'pe-conteudo' ou Supabase Storage)
    if (window.PEContent) {
      try {
        const C = await window.PEContent.init();
        if (C) {
          const path = id.startsWith('data/') ? id : `data/${id}.json`;
          if (C.has && C.has(path)) {
            const txt = await C.text(path);
            if (txt) return JSON.parse(txt);
          }
        }
      } catch(e) {}
    }

    // 3. Tentar CacheStorage 'pe-conteudo' diretamente
    try {
      const c = await caches.open('pe-conteudo');
      const keys = await c.keys();
      const match = keys.find(k => k.url.includes(limpo));
      if (match) {
        const res = await c.match(match);
        if (res) {
          const txt = await res.text();
          return JSON.parse(txt);
        }
      }
    } catch(e) {}

    // 4. Tentar fetch direto da URL
    const paths = [`data/${limpo}.json`, `${limpo}.json`, id];
    for (const p of paths) {
      try {
        const r = await fetch(p);
        if (r.ok) {
          return await r.json();
        }
      } catch(e) {}
    }

    return null;
  }

  // --- 1. JOGOS ---
  console.log('%c[1/6] Extraindo Minijogos e Desafios (Pareamento, Crimes, Lacunas, Ritos)...', 'color: #3b82f6;');
  try {
    dump.jogos = await obterConteudo('jogos');
    if (!dump.jogos && window.JD) dump.jogos = window.JD;
    console.log(dump.jogos ? '✓ Jogos extraídos com sucesso!' : '⚠ Jogos não encontrados diretamente.');
  } catch(e) {
    console.warn('Erro ao extrair jogos:', e);
  }

  // --- 2. FLASHCARDS ---
  console.log('%c[2/6] Extraindo Baralhos de Flashcards oficiais FSRS...', 'color: #3b82f6;');
  try {
    dump.flashcards = await obterConteudo('flash');
    if (!dump.flashcards && window.FD) dump.flashcards = window.FD;
    console.log(dump.flashcards ? '✓ Flashcards extraídos com sucesso!' : '⚠ Flashcards não encontrados diretamente.');
  } catch(e) {
    console.warn('Erro ao extrair flashcards:', e);
  }

  // --- 3. QUESTÕES E REDAÇÃO ---
  console.log('%c[3/6] Extraindo Banco de Questões (5.870 itens) e Redação...', 'color: #3b82f6;');
  try {
    dump.questoes = await obterConteudo('questoes');
    console.log(dump.questoes ? `✓ Banco de Questões extraído! (${Array.isArray(dump.questoes) ? dump.questoes.length : Object.keys(dump.questoes).length} itens)` : '⚠ Questões não encontradas');
  } catch(e) {}
  try {
    dump.redacao = await obterConteudo('redacao');
    console.log(dump.redacao ? '✓ Caderno de Redação extraído!' : '⚠ Redação não encontrada');
  } catch(e) {}

  // --- 4. LEIS COMPLETAS ---
  console.log('%c[4/6] Extraindo todas as 14 Leis completas com todos os artigos...', 'color: #3b82f6;');
  const leisIds = ['cf', 'cp', 'cpp', 'cpc', 'l9099', 'l12153', 'l10261', 'l8429', 'l13146', 'lc1111', 'res850', 'res963', 'ritjsp', 'nscgj'];
  for (const lid of leisIds) {
    try {
      const data = await obterConteudo(`leis/${lid}`);
      if (data) {
        dump.leis[lid] = data;
        console.log(`  ✓ Lei ${lid.toUpperCase()} carregada (${(data.it || []).length || 0} dispositivos)`);
      }
    } catch(e) {}
  }

  // --- 5. RESUMOS E GUIAS TEÓRICOS ---
  console.log('%c[5/6] Extraindo todos os 75 Resumos e Documentos teóricos...', 'color: #3b82f6;');
  const docsIds = [
    'edital', 'guia-revisoes', 'orientacoes', 'prazos', 'redacao-teoria', 'penal-bizurado',
    'm1', 'm2', 'm3', 'm5', 'm5b', 'm5c', 'm6', 'm7', 'm9', 'm10', 'm11', 'm12', 'm13',
    'm17', 'm18', 'm19', 'm20', 'm21', 'm23', 'm24', 'm25', 'm26', 'm27', 'm28',
    'm30', 'm31', 'm32', 'm33', 'm34', 'm38', 'm39', 'm40', 'm41', 'm43', 'm44',
    'm45', 'm46', 'm47', 'm48', 'm50', 'm51', 'm52', 'm53a', 'm53b', 'm54', 'm58',
    'm59', 'm60', 'm61', 'm63', 'm64', 'm65', 'm66', 'm67', 'm68', 'm70', 'm71',
    'm72', 'm76', 'm77', 'm78a', 'm78b', 'm78c', 'm80a', 'm80b', 'm81a', 'm81b', 'm82', 'm83'
  ];

  let docsCount = 0;
  for (const did of docsIds) {
    try {
      const data = await obterConteudo(`docs/${did}`);
      if (data) {
        dump.docs[did] = data;
        docsCount++;
      }
    } catch(e) {}
  }
  console.log(`  ✓ ${docsCount}/${docsIds.length} Resumos extraídos com sucesso.`);

  // --- 6. CONJUNTOS DE QUESTÕES (SETS) ---
  console.log('%c[6/6] Extraindo conjuntos temáticos (sets)...', 'color: #3b82f6;');
  const setIds = ['CON', 'PCD', 'PEN', 'PPEN', 'RL', 'EST', 'MAT1', 'MAT2', 'JECR', 'JEC', 'LC1111', 'PC2', 'R850', 'R963', 'RI', 'PC1', 'NSC', 'MT', 'PQ'];
  for (const sid of setIds) {
    try {
      const data = await obterConteudo(`sets/${sid}`);
      if (data) dump.sets[sid] = data;
    } catch(e) {}
  }

  // Se houver objetos em LOADED em memória, inclui também
  if (typeof LOADED !== 'undefined') {
    dump.memoria_loaded = LOADED;
  }

  console.log('%c========================================================================', 'color: #0b7a28;');
  console.log('%c[Protocolo VIP] Extração Finalizada com Sucesso!', 'color: #0b7a28; font-weight: bold; font-size: 16px;');
  console.log(`- Jogos: ${dump.jogos ? 'Sim' : 'Não'}`);
  console.log(`- Flashcards: ${dump.flashcards ? 'Sim' : 'Não'}`);
  console.log(`- Questões: ${dump.questoes ? 'Sim' : 'Não'}`);
  console.log(`- Leis: ${Object.keys(dump.leis).length} leis com artigos completos`);
  console.log(`- Resumos: ${Object.keys(dump.docs).length} resumos teóricos`);
  console.log(`- Sets: ${Object.keys(dump.sets).length} cadernos`);

  // Gerar download do arquivo JSON
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'protocolo-dados-completos.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('%c[Download] Arquivo "protocolo-dados-completos.json" baixado automaticamente no seu navegador!', 'color: #c49b36; font-weight: bold;');
})();
