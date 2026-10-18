import fs from 'fs';

const core = JSON.parse(fs.readFileSync('src/data/core-data.json', 'utf8'));

const docsList = core.docs.map(d => ({ id: d.id, title: d.title, src: d.src }));
const leisList = core.leis.map(l => ({ id: l.id, t: l.t, src: l.src }));

const script = `// =========================================================================
// PROTOCOLO ESCREVENTE - EXTRATOR DEFINITIVO DE MATERIAIS, LEIS E APOSTILAS
// =========================================================================
(async function extrairMateriaisDefinitivo() {
  console.clear();
  console.log('%c[Extrator Definitivo] Iniciando extração de 75 Resumos e 14 Leis...', 'color: #c49b36; font-size: 15px; font-weight: bold;');

  const sb = window.PESupabase ? window.PESupabase() : null;
  const docsList = ${JSON.stringify(docsList)};
  const leisList = ${JSON.stringify(leisList)};

  const dump = {
    exportado_em: new Date().toISOString(),
    docs: {},
    leis: {},
    pdf_links: []
  };

  const pdfKey = s => 'arquivos/' + String(s).replace(/^\\/+/, '').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/[^A-Za-z0-9._\\/-]+/g, '-').replace(/-+/g, '-');

  // 1. Chamar a função nativa load() do app para carregar todos os docs e leis na tela
  console.log('%c[1/2] Baixando textos completos dos 75 Resumos e 14 Leis via load()...', 'color: #3b82f6;');
  
  for (const d of docsList) {
    try {
      let data = null;
      if (typeof load === 'function') {
        data = await load('docs/' + d.id);
      }
      if (!data && typeof LOADED !== 'undefined' && LOADED['docs/' + d.id]) {
        data = LOADED['docs/' + d.id];
      }
      if (data) dump.docs[d.id] = data;
    } catch(e) {}
  }
  console.log('✓ Resumos teóricos carregados:', Object.keys(dump.docs).length);

  for (const l of leisList) {
    try {
      let data = null;
      if (typeof load === 'function') {
        data = await load('leis/' + l.id);
      }
      if (!data && typeof LOADED !== 'undefined' && LOADED['leis/' + l.id]) {
        data = LOADED['leis/' + l.id];
      }
      if (data) dump.leis[l.id] = data;
    } catch(e) {}
  }
  console.log('✓ Leis completas carregadas:', Object.keys(dump.leis).length);

  // 2. Gerar links assinados de download para todas as apostilas e legislações em PDF
  if (sb) {
    console.log('%c[2/2] Gerando links diretos de download para todos os PDFs...', 'color: #3b82f6;');
    for (const d of docsList) {
      if (d.src) {
        try {
          const key = pdfKey(d.src);
          const { data, error } = await sb.storage.from('conteudo').createSignedUrl(key, 86400);
          if (data && data.signedUrl) {
            dump.pdf_links.push({ id: d.id, tipo: 'resumo', titulo: d.title, url: data.signedUrl, src: d.src });
          } else if (error) {
            console.warn('Erro PDF doc', d.id, error.message);
          }
        } catch(e) {}
      }
    }

    for (const l of leisList) {
      if (l.src) {
        try {
          const key = pdfKey(l.src);
          const { data, error } = await sb.storage.from('conteudo').createSignedUrl(key, 86400);
          if (data && data.signedUrl) {
            dump.pdf_links.push({ id: l.id, tipo: 'lei', titulo: l.t, url: data.signedUrl, src: l.src });
          } else if (error) {
            console.warn('Erro PDF lei', l.id, error.message);
          }
        } catch(e) {}
      }
    }
    console.log('✓ Links de apostilas e leis em PDF gerados:', dump.pdf_links.length);
  }

  console.log('%c========================================================================', 'color: #0b7a28;');
  console.log(\`Resumos: \${Object.keys(dump.docs).length} | Leis: \${Object.keys(dump.leis).length} | PDFs: \${dump.pdf_links.length}\`);

  // Disparar o download
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'protocolo-materiais-completos.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log('%c[Download] Arquivo "protocolo-materiais-completos.json" baixado com sucesso!', 'color: #c49b36; font-size: 14px; font-weight: bold;');
})();
`;

fs.writeFileSync('scripts/extrator-definitivo.js', script, 'utf8');
console.log('Script definitivo gerado em scripts/extrator-definitivo.js');
