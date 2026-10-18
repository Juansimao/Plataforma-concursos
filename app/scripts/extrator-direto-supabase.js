// =========================================================================
// PROTOCOLO ESCREVENTE - EXTRATOR DIRETO VIA SUPABASE E CHAVES
// =========================================================================
(async function extrairTudoDireto() {
  console.clear();
  console.log('%c[Extrator Direto] Conectando ao backend da sua conta...', 'color: #c49b36; font-size: 15px; font-weight: bold;');

  const sb = window.PESupabase ? window.PESupabase() : null;
  if (!sb) {
    console.error('PESupabase não encontrado. Verifique se está logado.');
    return;
  }

  const resultado = {
    exportado_em: new Date().toISOString(),
    jogos: null,
    leis: {},
    docs: {},
    chaves: []
  };

  const b64bytes = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));

  // 1. Buscar as chaves AES-GCM da sua conta
  let chaveEsc = null;
  try {
    const { data: chavesData } = await sb.from('extras_chaves').select('produto, chave');
    if (chavesData) {
      resultado.chaves = chavesData.map(c => c.produto);
      console.log('Chaves de aluno encontradas:', resultado.chaves);
      const obj = chavesData.find(c => c.produto === 'escrevente');
      if (obj) chaveEsc = obj.chave;
    }
  } catch(e) {
    console.warn('Erro ao buscar extras_chaves:', e);
  }

  // 2. Se temos a chave, descriptografar extras/escrevente-jogos.bin
  if (chaveEsc) {
    try {
      console.log('Descriptografando extras/escrevente-jogos.bin...');
      const cryptoKey = await crypto.subtle.importKey('raw', b64bytes(chaveEsc), 'AES-GCM', false, ['decrypt']);
      const r = await fetch('extras/escrevente-jogos.bin', { cache: 'no-cache' });
      if (r.ok) {
        const buf = new Uint8Array(await r.arrayBuffer());
        const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf.slice(0, 12) }, cryptoKey, buf.slice(12));
        const txt = await new Response(new Blob([pt]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
        resultado.jogos = JSON.parse(txt);
        console.log('%c✓ Todos os Jogos descriptografados com sucesso!', 'color: #0b7a28; font-weight: bold;');
      }
    } catch(e) {
      console.warn('Falha ao descriptografar jogos:', e);
    }
  }

  // 3. Buscar manifesto oficial de conteúdo e baixar leis e docs do Storage
  try {
    const { data: atual } = await sb.from('conteudo_atual').select('versao').eq('id', 1).maybeSingle();
    if (atual && atual.versao) {
      const { data: versao } = await sb.from('conteudo_versoes').select('manifest').eq('id', atual.versao).maybeSingle();
      const man = versao && versao.manifest ? versao.manifest : {};
      const chaves = Object.keys(man);
      console.log(`Manifesto da versão atual: ${chaves.length} arquivos no bucket.`);

      let baixados = 0;
      for (const path of chaves) {
        try {
          const key = `v/${man[path]}/${path}`;
          const { data, error } = await sb.storage.from('conteudo').download(key);
          if (!error && data) {
            const txt = await data.text();
            const parsed = JSON.parse(txt);
            if (path.includes('leis/')) {
              const lid = path.replace(/^.*leis\//, '').replace(/\.json$/, '');
              resultado.leis[lid] = parsed;
            } else if (path.includes('docs/')) {
              const did = path.replace(/^.*docs\//, '').replace(/\.json$/, '');
              resultado.docs[did] = parsed;
            }
            baixados++;
            if (baixados % 10 === 0) console.log(`Baixados: ${baixados}/${chaves.length} arquivos...`);
          }
        } catch(err) {}
      }
      console.log(`%c✓ ${baixados} arquivos de leis e docs baixados do Storage!`, 'color: #0b7a28; font-weight: bold;');
    }
  } catch(e) {
    console.warn('Erro ao acessar conteudo_versoes:', e);
  }

  // 4. Fallback caso algo esteja em memória
  if (typeof LOADED !== 'undefined') {
    for (const k of Object.keys(LOADED)) {
      if (k.startsWith('leis/')) resultado.leis[k.slice(5)] = LOADED[k];
      if (k.startsWith('docs/')) resultado.docs[k.slice(5)] = LOADED[k];
    }
  }
  if (!resultado.jogos && typeof JD !== 'undefined' && JD) {
    resultado.jogos = JD;
  }

  console.log('%c========================================================================', 'color: #0b7a28;');
  console.log(`- Jogos: ${resultado.jogos ? '✓ Sim' : 'Não'}`);
  console.log(`- Leis extraídas: ${Object.keys(resultado.leis).length}`);
  console.log(`- Docs extraídos: ${Object.keys(resultado.docs).length}`);

  // Disparar o download automático
  const blob = new Blob([JSON.stringify(resultado, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'protocolo-jogos-e-textos.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('%c[Download] Arquivo "protocolo-jogos-e-textos.json" baixado!', 'color: #c49b36; font-size: 14px; font-weight: bold;');
})();
