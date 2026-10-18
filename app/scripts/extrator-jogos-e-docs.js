// Execute este script no Console (F12) da aba logada em app.protocoloescrevente.com.br
(async function extrairJogosLeisDocs() {
  console.log('%c[Extrator 2/2] Buscando Jogos, Leis completas e Resumos teóricos...', 'color: #c49b36; font-size: 15px; font-weight: bold;');

  const pacote = {
    exportado_em: new Date().toISOString(),
    jogos: null,
    leis: {},
    docs: {}
  };

  // 1. Descriptografar os Jogos oficiais (extras/escrevente-jogos.bin)
  try {
    console.log('Baixando e descriptografando Minijogos...');
    if (window.PECurso && typeof window.PECurso.texto === 'function') {
      const txt = await window.PECurso.texto('jogos', 'escrevente');
      if (txt) {
        pacote.jogos = JSON.parse(txt);
        console.log('%c✓ Jogos extraídos com sucesso!', 'color: #0b7a28; font-weight: bold;');
      }
    }
  } catch(e) {
    console.warn('Erro ao extrair jogos:', e);
  }

  // 2. Extrair Leis e Resumos pelo PEContent
  if (window.PEContent) {
    try {
      const C = await window.PEContent.init();
      const man = C && C.man ? C.man : {};
      const chaves = Object.keys(man);
      console.log(`Manifesto encontrado com ${chaves.length} arquivos publicados.`);

      let cont = 0;
      for (const k of chaves) {
        try {
          const txt = await C.text(k);
          if (txt) {
            const parsed = JSON.parse(txt);
            if (k.includes('leis/')) {
              const lid = k.replace(/^.*leis\//, '').replace(/\.json$/, '');
              pacote.leis[lid] = parsed;
            } else if (k.includes('docs/')) {
              const did = k.replace(/^.*docs\//, '').replace(/\.json$/, '');
              pacote.docs[did] = parsed;
            }
            cont++;
            if (cont % 5 === 0) console.log(`Progresso: ${cont}/${chaves.length} arquivos...`);
          }
        } catch(err) {
          console.warn(`Falha em ${k}:`, err.message);
        }
      }
      console.log(`%c✓ ${cont} arquivos baixados do manifesto!`, 'color: #0b7a28; font-weight: bold;');
    } catch(e) {
      console.warn('Erro no PEContent:', e);
    }
  }

  // 3. Fallback: Se alguma lei ou doc ainda não veio, tenta chamar load() direto do app
  const leisIds = ['cf', 'cp', 'cpp', 'cpc', 'l9099', 'l12153', 'l10261', 'l8429', 'l13146', 'lc1111', 'res850', 'res963', 'ritjsp', 'nscgj'];
  for (const lid of leisIds) {
    if (!pacote.leis[lid] && typeof window.LOADED !== 'undefined' && window.LOADED['leis/' + lid]) {
      pacote.leis[lid] = window.LOADED['leis/' + lid];
    }
  }

  // Gera o download automático do JSON
  const blob = new Blob([JSON.stringify(pacote, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'protocolo-jogos-e-textos.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('%c[Download Concluído] Arquivo "protocolo-jogos-e-textos.json" salvo com sucesso!', 'color: #c49b36; font-size: 14px; font-weight: bold;');
})();
