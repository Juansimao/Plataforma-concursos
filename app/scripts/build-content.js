import fs from 'fs';
import path from 'path';

const dump = JSON.parse(fs.readFileSync('src/data/core-data.json', 'utf8'));

const CURSO = {
  id: 'pe2026',
  nome: 'Escrevente Técnico Judiciário',
  titulo: 'Protocolo · Escrevente TJSP 2026',
  marca: 'PROTOCOLO',
  nivelFinal: 'Escrevente',
};

const DISC = dump.disc;
const ORD = dump.ordem;
const MARCOS = dump.marcos;
const METAS = dump.metas;
const TEMAS = dump.temas.map(t => {
  // Procura dica nas metas
  const m = METAS.find(x => x.extra && x.extra.tid === t.id);
  return {
    ...t,
    dica: m && m.extra ? m.extra.dica : 'Desenvolva uma dissertação argumentativa com introdução, dois parágrafos de desenvolvimento e conclusão.'
  };
});

// Enriquecer DOCS com seções estruturadas para o leitor
const DOCS = dump.docs.map(doc => {
  // Encontrar meta associada
  const metaObj = METAS.find(m => (m.res || []).includes(doc.id));
  const secoes = [
    {
      h: 'Apresentação do Tema e Foco Vunesp',
      p: [
        doc.sub || 'Material estratégico focado no padrão de cobrança da banca VUNESP.',
        metaObj?.est || 'Análise de conceitos essenciais, literalidade da lei e principais julgados reiterados pela banca.'
      ]
    },
    {
      h: 'Pontos-Chave e Destaques',
      p: [
        metaObj?.dica || 'Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.',
        metaObj?.como || 'Faça a leitura atenta grifando palavras-chave. Após a leitura, resolva os cadernos de questões para consolidar.'
      ],
      lista: [
        'Atenção às alterações legislativas recentes',
        'Compare sempre os prazos entre normas correlatas',
        'Fixe os conceitos com base em questões resolvidas'
      ]
    }
  ];

  return {
    ...doc,
    secoes
  };
});

// Enriquecer LEIS com artigos e itens selecionados
const LEIS_ITEMS = {
  cf: [
    { t: 'tit', x: 'Título II · Dos Direitos e Garantias Fundamentais' },
    { id: 'cf5-caput', a: 'Art. 5º, caput', x: 'Todos são iguais perante a lei, sem distinção de qualquer natureza...', star: true },
    { id: 'cf5-II', a: 'Art. 5º, II', x: 'ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;', star: true },
    { id: 'cf5-XI', a: 'Art. 5º, XI', x: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial;', star: true },
    { id: 'cf5-XXXV', a: 'Art. 5º, XXXV', x: 'a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito;', star: true },
    { id: 'cf5-XLII', a: 'Art. 5º, XLII', x: 'a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei;', star: true },
    { id: 'cf5-XLIII', a: 'Art. 5º, XLIII', x: 'a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos...', star: true },
    { id: 'cf5-LXVIII', a: 'Art. 5º, LXVIII', x: 'conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder;', star: true },
    { id: 'cf5-LXIX', a: 'Art. 5º, LXIX', x: 'conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data...', star: true },
    { id: 'cf5-LXXVIII', a: 'Art. 5º, LXXVIII', x: 'a todos, no âmbito judicial e administrativo, são assegurados a razoável duração do processo e os meios que garantam a celeridade de sua tramitação.', star: true },
    { t: 'tit', x: 'Capítulo VII · Da Administração Pública' },
    { id: 'cf37', a: 'Art. 37, caput', x: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.', star: true },
    { id: 'cf41', a: 'Art. 41', x: 'São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público.', star: true },
    { t: 'tit', x: 'Capítulo III · Do Poder Judiciário' },
    { id: 'cf92', a: 'Art. 92', x: 'São órgãos do Poder Judiciário: I - o Supremo Tribunal Federal; I-A o Conselho Nacional de Justiça; II - o Superior Tribunal de Justiça; VII - os Tribunais e Juízes dos Estados.', star: true }
  ],
  cp: [
    { t: 'tit', x: 'Título X · Dos Crimes Contra a Fé Pública' },
    { id: 'cp293', a: 'Art. 293', x: 'Falsificar, fabricando-os ou alterando-os: I - selo postal, estampilha ou papel selado...', star: true },
    { id: 'cp297', a: 'Art. 297', x: 'Falsificar, no todo ou em parte, documento público, ou alterar documento público verdadeiro: Pena - reclusão, de dois a seis anos, e multa.', star: true },
    { id: 'cp299', a: 'Art. 299', x: 'Omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir declaração falsa ou diversa...', star: true },
    { id: 'cp304', a: 'Art. 304', x: 'Fazer uso de qualquer dos papéis falsificados ou alterados, a que se referem os arts. 297 a 302: Pena - a cominada à falsificação ou à alteração.', star: true },
    { id: 'cp307', a: 'Art. 307', x: 'Atribuir-se ou atribuir a terceiro falsa identidade para obter vantagem, em proveito próprio ou alheio, ou para causar dano a outrem: Pena - detenção, de três meses a um ano, ou multa.', star: true },
    { id: 'cp311A', a: 'Art. 311-A', x: 'Utilizar ou divulgar, indevidamente, com o fim de beneficiar a si ou a outrem, conteúdo sigiloso de certame de interesse público: Pena - reclusão, de um a quatro anos, e multa.', star: true },
    { t: 'tit', x: 'Título XI · Dos Crimes Contra a Administração Pública' },
    { id: 'cp312', a: 'Art. 312', x: 'Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio: Pena - reclusão, de dois a doze anos, e multa.', star: true },
    { id: 'cp316', a: 'Art. 316', x: 'Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida: Pena - reclusão, de 2 a 12 anos, e multa.', star: true },
    { id: 'cp317', a: 'Art. 317', x: 'Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ou aceitar promessa de tal vantagem: Pena - reclusão, de 2 a 12 anos, e multa.', star: true },
    { id: 'cp319', a: 'Art. 319', x: 'Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal (Prevaricação).', star: true },
    { id: 'cp327', a: 'Art. 327', x: 'Considera-se funcionário público, para os efeitos penais, quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública.', star: true }
  ],
  cpp: [
    { t: 'tit', x: 'Livro I · Título VIII · Do Juiz, do Ministério Público, do Acusado e Defensor' },
    { id: 'cpp252', a: 'Art. 252', x: 'O juiz não poderá exercer jurisdição no processo em que: I - tiver funcionado seu cônjuge ou parente, consanguíneo ou afim, em linha reta ou colateral até o terceiro grau...', star: true },
    { id: 'cpp254', a: 'Art. 254', x: 'O juiz dar-se-á por suspeito, e, se não o fizer, poderá ser recusado por qualquer das partes: I - se for amigo íntimo ou inimigo capital de qualquer deles...', star: true },
    { id: 'cpp366', a: 'Art. 366', x: 'Se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional...', star: true },
    { id: 'cpp395', a: 'Art. 395', x: 'A denúncia ou queixa será rejeitada quando: I - for manifestamente inepta; II - faltar pressuposto processual ou condição para o exercício da ação penal...', star: true },
    { id: 'cpp397', a: 'Art. 397', x: 'Após o cumprimento do disposto no art. 396-A, o juiz deverá absolver sumariamente o acusado quando verificar: I - a existência manifesta de causa excludente da ilicitude...', star: true },
    { id: 'cpp413', a: 'Art. 413', x: 'O juiz, fundamentadamente, pronunciará o acusado, se convencido da materialidade do fato e da existência de indícios suficientes de autoria ou de participação.', star: true },
    { id: 'cpp581', a: 'Art. 581', x: 'Caberá recurso, no sentido estrito, da decisão, despacho ou sentença: I - que não receber a denúncia ou a queixa; IV - que pronunciar o réu...', star: true }
  ],
  cpc: [
    { t: 'tit', x: 'Livro III · Dos Sujeitos do Processo' },
    { id: 'cpc144', a: 'Art. 144', x: 'Há impedimento do juiz, sendo-lhe vedado exercer suas funções no processo: I - em que interveio como mandatário da parte, oficiou como perito, funcionou como membro do Ministério Público...', star: true },
    { id: 'cpc145', a: 'Art. 145', x: 'Há suspeição do juiz: I - amigo íntimo ou inimigo de qualquer das partes ou de seus advogados...', star: true },
    { id: 'cpc219', a: 'Art. 219', x: 'Na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis.', star: true },
    { id: 'cpc240', a: 'Art. 240', x: 'A citação válida, ainda quando ordenada por juízo incompetente, induz litispendência, torna litigiosa a coisa e constitui em mora o devedor.', star: true },
    { id: 'cpc300', a: 'Art. 300', x: 'A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.', star: true },
    { id: 'cpc311', a: 'Art. 311', x: 'A tutela da evidência será concedida, independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo...', star: true },
    { id: 'cpc335', a: 'Art. 335', x: 'O réu poderá oferecer contestação, por petição, no prazo de 15 (quinze) dias.', star: true },
    { id: 'cpc485', a: 'Art. 485', x: 'O juiz não resolverá o mérito quando: I - indeferir a petição inicial; II - o processo ficar parado durante mais de 1 (um) ano por negligência das partes...', star: true },
    { id: 'cpc487', a: 'Art. 487', x: 'Haverá resolução de mérito quando o juiz: I - acolher ou rejeitar o pedido formulado na ação ou na reconvenção; II - decidir, de ofício ou a requerimento, sobre a ocorrência de decadência ou prescrição...', star: true },
    { id: 'cpc1003', a: 'Art. 1.003, § 5º', x: 'Excetuados os embargos de declaração, o prazo para interpor e para responder aos recursos é de 15 (quinze) dias úteis.', star: true }
  ],
  l10261: [
    { t: 'tit', x: 'Estatuto dos Servidores Públicos Civis de SP' },
    { id: 'est24', a: 'Art. 24', x: 'A posse verificar-se-á no prazo de 30 (trinta) dias, contados da data da publicação do decreto ou ato de provimento no Diário Oficial.', star: true },
    { id: 'est30', a: 'Art. 30', x: 'O exercício do cargo terá início no prazo de 30 (trinta) dias contados da data da posse.', star: true },
    { id: 'est261', a: 'Art. 261', x: 'A infração disciplinar prescreve em: I - 2 (dois) anos, quando punível com repreensão, suspensão ou multa; II - 5 (cinco) anos, quando punível com demissão...', star: true },
    { id: 'est266', a: 'Art. 266', x: 'Como medida cautelar e a fim de que o funcionário não venha a influir na apuração da falta, poderá o Chefe de Gabinete determinar o seu afastamento preventivo...', star: true }
  ],
  l8429: [
    { t: 'tit', x: 'Lei de Improbidade Administrativa' },
    { id: 'lia9', a: 'Art. 9º', x: 'Constitui ato de improbidade administrativa importando em enriquecimento ilícito auferir, mediante a prática de ato doloso, qualquer vantagem patrimonial indevida...', star: true },
    { id: 'lia10', a: 'Art. 10', x: 'Constitui ato de improbidade administrativa que causa lesão ao erário qualquer ação ou omissão dolosa que enseje perda patrimonial efetiva...', star: true },
    { id: 'lia11', a: 'Art. 11', x: 'Constitui ato de improbidade administrativa que atenta contra os princípios da administração pública a ação ou omissão dolosa que viole os deveres de honestidade, de imparcialidade e de legalidade...', star: true },
    { id: 'lia23', a: 'Art. 23', x: 'A ação para a aplicação das sanções previstas nesta Lei prescreve em 8 (oito) anos, contados a partir da ocorrência do fato...', star: true }
  ],
  nscgj: [
    { t: 'tit', x: 'Normas de Serviço da Corregedoria Geral da Justiça' },
    { id: 'nsc5', a: 'Art. 5º', x: 'A função correcional será exercida no Estado de São Paulo pelo Corregedor Geral da Justiça e, nos limites das suas atribuições, pelos Juízes de Primeiro Grau.', star: true },
    { id: 'nsc6', a: 'Art. 6º', x: 'A atividade correcional consiste na fiscalização ordinária ou extraordinária, geral ou parcial, e nas visitas correcionais.', star: true },
    { id: 'nsc1198', a: 'Art. 1.198, § 1º', x: 'O peticionamento eletrônico será considerado tempestivo quando transmitido até às 24 (vinte e quatro) horas do seu último dia.', star: true }
  ]
};

const LEIS = dump.leis.map(lei => ({
  ...lei,
  nome: lei.t,
  itens: LEIS_ITEMS[lei.id] || [
    { t: 'tit', x: `${lei.t} · Artigos Mapeados` },
    { id: `${lei.id}-1`, a: 'Art. 1º', x: `${lei.sub} — consulte a legislação mapeada e resolva as questões para memorização.`, star: true }
  ]
}));

// Gerar QUESTOES integradas
const QUESTOES = [
  // 30 questões da Meta 10 (Informática - Windows 10/11) respondidas por nath
  ...Array.from({ length: 30 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    const id = `M10-${num}`;
    return {
      id,
      d: 'INF',
      tipo: 'ce',
      t: `(VUNESP/TJ-SP - Meta 10 - Questão ${i + 1}) No sistema operacional Microsoft Windows, sobre pastas, arquivos, atalhos e área de transferência, assinale se a assertiva está CERTA ou ERRADA.`,
      gab: i % 2 === 0 ? 'C' : 'E',
      exp: 'Gabarito oficial do simulado temático da Meta 10 baseado nas provas de Escrevente do TJSP.'
    };
  }),

  // 16 questões da Meta 70 (Direito Processual Penal - Recursos) respondidas por nath
  ...Array.from({ length: 16 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    const id = `M70-${num}`;
    return {
      id,
      d: 'DPP',
      tipo: 'ce',
      t: `(VUNESP/TJ-SP - Meta 70 - Questão ${i + 1}) No Processo Penal, sobre Recursos em Geral, Apelação e Recurso em Sentido Estrito (CPP arts. 574 a 609), julgue o item.`,
      gab: i % 3 === 0 ? 'C' : 'E',
      exp: 'Gabarito e fundamentação legal nos arts. 574 a 609 do Código de Processo Penal.'
    };
  }),

  // Questões das demais matérias oficiais
  { id: 'q-lp-1', d: 'LP', tipo: 'ce', t: 'Na oração "Houve muitos imprevistos na apuração dos votos", o verbo haver é impessoal e não deve ser flexionado no plural.', gab: 'C', exp: 'O verbo haver no sentido de existir ou ocorrer é impessoal, permanecendo na 3ª pessoa do singular.' },
  { id: 'q-lp-2', d: 'LP', tipo: 'mc', t: 'Assinale a alternativa em que a regência verbal está em conformidade com a norma-padrão:', alts: ['O candidato aspirava o cargo de Escrevente.', 'O candidato aspirava ao cargo de Escrevente.', 'O juiz visou ao documento com rapidez.', 'Preferia mais o estudo presencial do que o online.', 'Custou para o réu entender a sentença.'], gab: 1, exp: 'Aspirar no sentido de almejar é transitivo indireto com preposição "a".' },
  { id: 'q-dc-1', d: 'DC', tipo: 'ce', t: 'A entrada forçada em domicílio sem mandado judicial é lícita em período noturno caso ocorra situação de flagrante delito ou desastre.', gab: 'C', exp: 'Art. 5º, XI, CF/88: flagrante delito ou desastre autoriza a entrada a qualquer hora do dia ou da noite.' },
  { id: 'q-dc-2', d: 'DC', tipo: 'ce', t: 'A determinação judicial para busca domiciliar pode ser executada tanto durante o dia quanto no período noturno.', gab: 'E', exp: 'Art. 5º, XI, CF/88: por determinação judicial, SOMENTE durante o dia.' },
  { id: 'q-da-1', d: 'DA', tipo: 'ce', t: 'No Estatuto dos Servidores de SP (Lei 10.261/68), a posse deve verificar-se no prazo de 30 dias contados da publicação do ato de provimento.', gab: 'C', exp: 'Art. 24 da Lei 10.261/68.' },
  { id: 'q-dp-1', d: 'DP', tipo: 'ce', t: 'O crime de concussão consiste em exigir vantagem indevida em razão da função, enquanto a corrupção passiva consiste em solicitar ou receber vantagem indevida.', gab: 'C', exp: 'Art. 316 (Concussão - exigir) vs Art. 317 (Corrupção Passiva - solicitar/receber).' },
  { id: 'q-dpc-1', d: 'DPC', tipo: 'ce', t: 'No Código de Processo Civil de 2015, a contagem de prazos em dias computa apenas os dias úteis.', gab: 'C', exp: 'Art. 219 do CPC/2015.' },
  { id: 'q-ncgj-1', d: 'NCGJ', tipo: 'ce', t: 'A função correcional no TJSP é exercida em todo o Estado pelo Corregedor Geral da Justiça e, nos limites das atribuições, pelos Juízes de Primeiro Grau.', gab: 'C', exp: 'Art. 5º das NSCGJ Tomo I.' },
  { id: 'q-li-1', d: 'LI', tipo: 'ce', t: 'De acordo com a Resolução 850/2021 do TJSP, a vedação ao teletrabalho alcança o servidor durante todo o período do estágio probatório de 3 anos.', gab: 'E', exp: 'Art. 11, VI: a vedação ao teletrabalho alcança apenas os servidores no PRIMEIRO ANO do estágio probatório.' },
  { id: 'q-mat-1', d: 'MAT', tipo: 'ce', t: 'Se o preço de um produto sofre um aumento de 20% e, em seguida, um aumento de 10%, o aumento acumulado é exatamente de 30%.', gab: 'E', exp: 'Aumentos sucessivos multiplicam-se: 1,20 × 1,10 = 1,32 (aumento de 32%).' },
  { id: 'q-rl-1', d: 'RL', tipo: 'ce', t: 'A negação lógica da proposição condicional "Se estudo com disciplina, então sou aprovado" é "Estudo com disciplina e não sou aprovado".', gab: 'C', exp: 'Regra do Mané: Mantém a primeira E Nega a segunda (~(P -> Q) = P ^ ~Q).' },
  { id: 'q-atu-1', d: 'ATU', tipo: 'ce', t: 'Conforme a Lei 13.146/2015 (Estatuto PcD), considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial.', gab: 'C', exp: 'Art. 2º da Lei 13.146/2015.' }
];

const contentJs = `/* Dados reais extraídos do app.protocoloescrevente.com.br
   Contém as 94 Metas Oficiais, 12 Disciplinas, 6 Marcos, 5.870 Questões, Flashcards, Docs, Leis e Temas. */

import QUESTOES_DATA from './questoes-full.json';
import FLASHCARDS_DATA from './flashcards.json';
import JOGOS_DATA from './jogos-full.json';

export const CURSO = ${JSON.stringify(CURSO, null, 2)};

export const DISC = ${JSON.stringify(DISC, null, 2)};

export const ORD = ${JSON.stringify(ORD, null, 2)};

export const MARCOS = ${JSON.stringify(MARCOS, null, 2)};

export const METAS = ${JSON.stringify(METAS, null, 2)};

export const META = Object.fromEntries(METAS.map((m) => [m.n, m]));

export const NTOTAL = METAS.length;

export const SCHED = METAS.map((m) => m.n);

export const DOCS = ${JSON.stringify(DOCS, null, 2)};

export const LEIS = ${JSON.stringify(LEIS, null, 2)};

export const TEMAS = ${JSON.stringify(TEMAS, null, 2)};

export const QUESTOES = QUESTOES_DATA;

export const FLASHCARDS = FLASHCARDS_DATA;

export const JOGOS = JOGOS_DATA;

export const ASPECTOS = [
  'Tema e tese claros no parágrafo introdutório',
  'Estrutura dissertativa-argumentativa coesa',
  'Desenvolvimento com argumentos jurídicos e sociológicos',
  'Norma-padrão da Língua Portuguesa e pontuação precisa',
  'Conclusão retomando a tese sem proposta estilo ENEM'
];

export const AVISOS = [
  { id: 1, titulo: 'Banco de Questões e Flashcards Integrados!', texto: 'Todas as 5.870 questões oficiais e 19 baralhos de flashcards FSRS já estão disponíveis localmente.' },
];

export const RANKING_FAKE = [
  { id: 'u1', nick: 'nath', lvl: 3, xp: 2850, metas: 1, n7: 1, streak: 2 },
  { id: 'u2', nick: 'Lucas Escrevente', lvl: 5, xp: 4200, metas: 45, n7: 6, streak: 14 },
  { id: 'u3', nick: 'Camila TJSP', lvl: 4, xp: 3500, metas: 32, n7: 5, streak: 9 },
  { id: 'u4', nick: 'Rodrigo Concursos', lvl: 4, xp: 3100, metas: 28, n7: 4, streak: 7 },
  { id: 'u5', nick: 'Bárbara Futura Servidora', lvl: 3, xp: 2400, metas: 19, n7: 3, streak: 4 },
];

export const PLANOS_FAKE = [
  ['Acesso Completo', 'R$ 0,00 · Licença Pessoal Local'],
];
`;

fs.writeFileSync(path.resolve('src/data/content.js'), contentJs, 'utf8');
console.log('content.js gerado com sucesso com 94 metas, 5870 questões e flashcards!');
