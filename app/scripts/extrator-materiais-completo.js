// =========================================================================
// PROTOCOLO ESCREVENTE - EXTRATOR DE MATERIAIS E LEIS (CONSOLE DO CHROME)
// =========================================================================
(async function extrairMateriaisCompletos() {
  console.clear();
  console.log('%c[Extrator de Materiais] Iniciando extração de todos os Resumos e Leis...', 'color: #c49b36; font-size: 15px; font-weight: bold;');

  const sb = window.PESupabase ? window.PESupabase() : null;
  const coreEl = document.getElementById('core');
  const core = coreEl ? JSON.parse(coreEl.textContent) : {};

  const dump = {
    exportado_em: new Date().toISOString(),
    docs_html: {},
    leis_html: {},
    pdf_links: []
  };

  const pdfKey = src => 'arquivos/' + String(src).replace(/^\/+/, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9._\/-]+/g, '-').replace(/-+/g, '-');

  // 1. Coletar links assinados de TODOS os PDFs de apostilas e leis (validade 24h)
  if (sb) {
    console.log('Gerando links de download direto das apostilas em PDF...');
    for (const doc of (core.docs || [])) {
      if (doc.src) {
        try {
          const { data } = await sb.storage.from('conteudo').createSignedUrl(pdfKey(doc.src), 86400);
          if (data && data.signedUrl) dump.pdf_links.push({ id: doc.id, tipo: 'resumo', titulo: doc.title, url: data.signedUrl, src: doc.src });
        } catch(e) {}
      }
    }
    for (const lei of (core.leis || [])) {
      if (lei.src) {
        try {
          const { data } = await sb.storage.from('conteudo').createSignedUrl(pdfKey(lei.src), 86400);
          if (data && data.signedUrl) dump.pdf_links.push({ id: lei.id, tipo: 'lei', titulo: lei.t, url: data.signedUrl, src: lei.src });
        } catch(e) {}
      }
    }
    console.log(`✓ ${dump.pdf_links.length} apostilas em PDF mapeadas com links assinados!`);
  }

  // 2. Extrair do CacheStorage 'pe-conteudo' (onde o app salva todos os JSONs já abertos)
  try {
    const c = await caches.open('pe-conteudo');
    const keys = await c.keys();
    console.log(`Cache Storage tem ${keys.length} itens armazenados.`);
    for (const k of keys) {
      try {
        const resp = await c.match(k);
        if (resp) {
          const txt = await resp.text();
          const parsed = JSON.parse(txt);
          const u = k.url;
          if (u.includes('docs/')) {
            const did = u.replace(/^.*docs\//, '').replace(/\.json$/, '');
            dump.docs_html[did] = parsed;
          } else if (u.includes('leis/')) {
            const lid = u.replace(/^.*leis\//, '').replace(/\.json$/, '');
            dump.leis_html[lid] = parsed;
          }
        }
      } catch(e) {}
    }
  } catch(e) {}

  // 3. Tentar baixar via PEContent
  if (window.PEContent) {
    try {
      const C = await window.PEContent.init();
      if (C && C.man) {
        console.log(`Manifesto PEContent tem ${Object.keys(C.man).length} itens.`);
        for (const path of Object.keys(C.man)) {
          if (path.includes('docs/') || path.includes('leis/')) {
            try {
              const txt = await C.text(path);
              if (txt) {
                const parsed = JSON.parse(txt);
                if (path.includes('docs/')) {
                  const did = path.replace(/^.*docs\//, '').replace(/\.json$/, '');
                  dump.docs_html[did] = parsed;
                } else {
                  const lid = path.replace(/^.*leis\//, '').replace(/\.json$/, '');
                  dump.leis_html[lid] = parsed;
                }
              }
            } catch(e) {}
          }
        }
      }
    } catch(e) {}
  }

  // 4. Se algo estiver em LOADED em memória
  if (typeof LOADED !== 'undefined') {
    for (const k of Object.keys(LOADED)) {
      if (k.startsWith('docs/')) dump.docs_html[k.slice(5)] = LOADED[k];
      if (k.startsWith('leis/')) dump.leis_html[k.slice(5)] = LOADED[k];
    }
  }

  console.log('%c========================================================================', 'color: #0b7a28;');
  console.log(`- Resumos JSON: ${Object.keys(dump.docs_html).length}`);
  console.log(`- Leis JSON: ${Object.keys(dump.leis_html).length}`);
  console.log(`- Links de Apostilas PDF Oficiais: ${dump.pdf_links.length}`);

  // Disparar o download do arquivo
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'protocolo-materiais-completos.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log('%c[Download] Arquivo "protocolo-materiais-completos.json" baixado com sucesso!', 'color: #c49b36; font-size: 14px; font-weight: bold;');
})();
