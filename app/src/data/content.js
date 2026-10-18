/* Dados reais extraídos do app.protocoloescrevente.com.br
   Contém as 94 Metas Oficiais, 12 Disciplinas, 6 Marcos, 5.870 Questões, Flashcards, Docs, Leis e Temas. */

import QUESTOES_DATA from './questoes-full.json';
import FLASHCARDS_DATA from './flashcards.json';
import JOGOS_DATA from './jogos-full.json';

export const CURSO = {
  "id": "pe2026",
  "nome": "Escrevente Técnico Judiciário",
  "titulo": "Protocolo · Escrevente TJSP 2026",
  "marca": "PROTOCOLO",
  "nivelFinal": "Escrevente"
};

export const DISC = {
  "LP": {
    "nome": "Língua Portuguesa",
    "curto": "Português",
    "bloco": "I",
    "q": 16
  },
  "DC": {
    "nome": "Direito Constitucional",
    "curto": "Constitucional",
    "bloco": "II",
    "q": 0
  },
  "DA": {
    "nome": "Direito Administrativo",
    "curto": "Administrativo",
    "bloco": "II",
    "q": 0
  },
  "DP": {
    "nome": "Direito Penal",
    "curto": "Penal",
    "bloco": "II",
    "q": 0
  },
  "DPP": {
    "nome": "Direito Processual Penal",
    "curto": "Proc. Penal",
    "bloco": "II",
    "q": 0
  },
  "DPC": {
    "nome": "Direito Processual Civil",
    "curto": "Proc. Civil",
    "bloco": "II",
    "q": 0
  },
  "NCGJ": {
    "nome": "Normas da Corregedoria (NSCGJ)",
    "curto": "Normas CGJ",
    "bloco": "II",
    "q": 0
  },
  "LI": {
    "nome": "Legislação Interna do TJSP",
    "curto": "Legislação Interna",
    "bloco": "II",
    "q": 0
  },
  "ATU": {
    "nome": "Atualidades e Legislação Especial",
    "curto": "Atualidades",
    "bloco": "III",
    "q": 4
  },
  "MAT": {
    "nome": "Matemática",
    "curto": "Matemática",
    "bloco": "III",
    "q": 4
  },
  "INF": {
    "nome": "Noções de Informática",
    "curto": "Informática",
    "bloco": "III",
    "q": 9
  },
  "RL": {
    "nome": "Raciocínio Lógico",
    "curto": "Rac. Lógico",
    "bloco": "III",
    "q": 7
  }
};

export const ORD = [
  "LP",
  "DC",
  "DA",
  "DP",
  "DPP",
  "DPC",
  "NCGJ",
  "LI",
  "ATU",
  "MAT",
  "INF",
  "RL"
];

export const MARCOS = [
  {
    "n": 1,
    "nome": "O Alicerce"
  },
  {
    "n": 2,
    "nome": "Avançando no Direito"
  },
  {
    "n": 3,
    "nome": "Consolidação"
  },
  {
    "n": 4,
    "nome": "Reta Final de Conteúdo"
  },
  {
    "n": 5,
    "nome": "Sprint Final"
  },
  {
    "n": 6,
    "nome": "Revisão Final e Simulados"
  }
];

export const METAS = [
  {
    "n": 1,
    "c": "M1",
    "marco": 1,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Interpretação de Texto (atenção: aqui engloba os tópicos 1 a 3 do edital; o tópico 4 — estruturação do texto e coesão — está na Meta 51)",
    "modo": "Teoria",
    "tempo": "2h",
    "min": 20,
    "art": "",
    "est": "Análise, compreensão e interpretação de textos verbais/não verbais, literários/não literários. Informações literais e inferências. Ponto de vista do autor.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "O que a banca cobra não é o par ‘inferir/deduzir’ (que na prática são sinônimos), mas a distinção entre informação EXPLÍCITA (está escrita) e informação IMPLÍCITA (a inferência, que decorre do texto sem estar escrita). Marque no texto CADA informação literal antes de buscar inferências e desconfie da alternativa que amplia o que o autor disse.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=S_mivI0CxJ8",
        "t": "Interpretação de Texto - Banca VUNESP (Como dominar a banca)",
        "ch": "Prof. Álvaro Ferreira"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6B1L6",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14655&subject_ids%5B%5D=19271",
    "links": [],
    "res": [
      "m1"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 2,
    "c": "M2",
    "marco": 1,
    "tipo": "meta",
    "d": "DC",
    "nome": "",
    "tag": "ALTA",
    "top": "Art. 5º CF — Parte 1 (Incisos I a XXXV)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "CF/88, Art. 5º, incisos I a XXXV",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: inviolabilidade do domicílio, com a distinção entre dia e noite (inciso XI — 2023 e 2025). Questões gerais sobre \"direitos e deveres individuais e coletivos\" apareceram em 2024 e na reaplicação de 2024.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo. Se achar necessário assista uma aula.",
    "dica": "O inciso XI (inviolabilidade do lar) é o mais cobrado: flagrante delito ou desastre = qualquer hora. Determinação judicial = SOMENTE DIA. A Vunesp troca 'dia' por 'noite'. Atenção ao Tema 280 do STF (RE 603.616, julgado em 2015) - Provas obtidas mediante invasão de domicílio por policiais sem mandado de busca e apreensão. Tese: A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade, e de nulidade dos atos praticados.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=ihalDRkq4AU",
        "t": "Art. 5o para a VUNESP | Direito Constitucional | Adriane Fauth",
        "ch": "Adriane Fauth"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6AqPH",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=3&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=1418&subject_ids%5B%5D=16249&subject_ids%5B%5D=16265&subject_ids%5B%5D=16321&subject_ids%5B%5D=16322&subject_ids%5B%5D=16323&subject_ids%5B%5D=16324&subject_ids%5B%5D=16325&subject_ids%5B%5D=16327&subject_ids%5B%5D=16328&subject_ids%5B%5D=20760&subject_ids%5B%5D=20761&subject_ids%5B%5D=20762&subject_ids%5B%5D=20763&subject_ids%5B%5D=20764&subject_ids%5B%5D=20765",
    "links": [],
    "res": [
      "m2"
    ],
    "lei": [
      "cf"
    ],
    "qi": 30
  },
  {
    "n": 3,
    "c": "M3",
    "marco": 1,
    "tipo": "meta",
    "d": "INF",
    "nome": "",
    "tag": "ALTA",
    "top": "Correio Eletrônico",
    "modo": "Teoria",
    "tempo": "2h",
    "min": 15,
    "art": "",
    "est": "Uso de correio eletrônico, preparo e envio de mensagens, anexação de arquivos. CC, CCO, campos de destinatário, protocolos SMTP/POP3/IMAP.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "CCO (cópia oculta): os demais NÃO veem quem está em CCO. CC: todos veem. POP3 = baixa as mensagens e, por padrão, apaga do servidor (pode ser configurado para manter cópia). IMAP = sincroniza e mantém no servidor.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=dRVuvqFeE9s",
        "t": "CONCURSO ESCREVENTE TJSP: INFORMÁTICA - CORREIO ELETRÔNICO",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6B1pt",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=46&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=241&subject_ids%5B%5D=27964",
    "links": [],
    "res": [
      "m3"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 4,
    "c": "M4",
    "marco": 1,
    "tipo": "meta",
    "d": "DC",
    "nome": "",
    "tag": "ALTA",
    "top": "Art. 5º CF — Parte 2 (Incisos XXXVI a LXXVIII + §§)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "CF/88, Art. 5º, incisos XXXVI a LXXVIII + §1º a §4º",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: as ações e remédios constitucionais — habeas corpus, habeas data, mandado de segurança e ação popular (incisos LXVIII a LXXIII) — em 2017, 2023, na reaplicação de 2024 e em 2025, com atenção à gratuidade e à responsabilidade do autor da ação popular em caso de má-fé (LXXIII).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Racismo (XLII) e ação de grupos armados contra a ordem constitucional (XLIV) = IMPRESCRITÍVEIS + INAFIANÇÁVEIS. Tortura, tráfico, terrorismo e hediondos (XLIII) = INAFIANÇÁVEIS + INSUSCETÍVEIS DE GRAÇA OU ANISTIA, mas NÃO imprescritíveis. Decore: 'RA-I-I' (Racismo = Imprescritível + Inafiançável).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=ihalDRkq4AU",
        "t": "Art. 5o para a VUNESP | Direito Constitucional | Adriane Fauth",
        "ch": "Adriane Fauth"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6AqPH",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=3&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=1418&subject_ids%5B%5D=16249&subject_ids%5B%5D=16265&subject_ids%5B%5D=16321&subject_ids%5B%5D=16322&subject_ids%5B%5D=16323&subject_ids%5B%5D=16324&subject_ids%5B%5D=16325&subject_ids%5B%5D=16327&subject_ids%5B%5D=16328&subject_ids%5B%5D=20760&subject_ids%5B%5D=20761&subject_ids%5B%5D=20762&subject_ids%5B%5D=20763&subject_ids%5B%5D=20764&subject_ids%5B%5D=20765",
    "links": [],
    "res": [
      "m2"
    ],
    "lei": [
      "cf"
    ],
    "qi": 30
  },
  {
    "n": 5,
    "c": "M5",
    "marco": 1,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Classes de Palavras",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Emprego: substantivo, adjetivo, artigo, numeral, pronome (pessoal, demonstrativo, relativo, indefinido), verbo (modos, tempos, vozes), advérbio, preposição, conjunção.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Pronome relativo 'ONDE' = apenas lugar físico. 'EM QUE' substitui 'onde' e serve para tempo/lugar/situação. A Vunesp troca um pelo outro.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=GEUbeiBI6vU",
        "t": "CONCURSO ESCREVENTE TJSP 2025: LÍNGUA PORTUGUESA - CLASSES DE PALAVRAS ✅",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6B86d",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14628&subject_ids%5B%5D=14630&subject_ids%5B%5D=14631&subject_ids%5B%5D=14632&subject_ids%5B%5D=14633&subject_ids%5B%5D=14636&subject_ids%5B%5D=16003&subject_ids%5B%5D=16157&subject_ids%5B%5D=16158&subject_ids%5B%5D=16159&subject_ids%5B%5D=16160&subject_ids%5B%5D=16161&subject_ids%5B%5D=16170&subject_ids%5B%5D=16171&subject_ids%5B%5D=16172&subject_ids%5B%5D=16173&subject_ids%5B%5D=16174&subject_ids%5B%5D=16175&subject_ids%5B%5D=16176&subject_ids%5B%5D=16177&subject_ids%5B%5D=16178&subject_ids%5B%5D=16179&subject_ids%5B%5D=16181&subject_ids%5B%5D=16183&subject_ids%5B%5D=16184&subject_ids%5B%5D=16187&subject_ids%5B%5D=20181",
    "links": [],
    "res": [
      "m5",
      "m5b",
      "m5c"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 6,
    "c": "M6",
    "marco": 1,
    "tipo": "meta",
    "d": "DA",
    "nome": "",
    "tag": "ALTA",
    "top": "Estatuto Lei 10.261/68 — Provimento (Arts. 1-36)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "Lei 10.261/68, Arts. 1 a 36",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: formas de provimento, com destaque para a REINTEGRAÇÃO e sua diferença em relação à readmissão e à reversão (2025); prazos e requisitos de posse e exercício (2025). O bloco também apareceu em 2017 e 2021.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Posse: 30 DIAS DA PUBLICAÇÃO. Exercício: 30 DIAS DA POSSE. Estágio Probatório: 3 ANOS. A Vunesp troca os prazos.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=m_LjT7517VM",
        "t": "Estatuto SP - Arts. 1º a 10 (Disposições Preliminares) - Lei 10.261/68",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BNe2",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=61&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14325",
    "links": [],
    "res": [
      "m6"
    ],
    "lei": [
      "l10261"
    ],
    "qi": 30
  },
  {
    "n": 7,
    "c": "M7",
    "marco": 1,
    "tipo": "meta",
    "d": "MAT",
    "nome": "",
    "tag": "ALTA",
    "top": "Operações com Números Reais + MMC/MDC",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Operações fundamentais, frações, decimais, potenciação, radiciação. MMC e MDC.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Na Vunesp, MMC = eventos cíclicos. MDC = divisão em partes iguais. Decore: MMC = 'Menos Comum é o Maior'.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=-EqB7PlS_CM",
        "t": "Concurso Escrevente TJSP 2025: Matemática - Operações com Números Reais",
        "ch": "Nova Concursos"
      },
      {
        "u": "https://www.youtube.com/watch?v=-KXW03bm6Bo",
        "t": "MATEMÁTICA VUNESP - MMC E MDC - QUESTÕES RESOLVIDAS",
        "ch": "Ciência Exata"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BNmP",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=13&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20313&subject_ids%5B%5D=20315",
    "links": [],
    "res": [
      "m7"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 8,
    "c": "M8",
    "marco": 1,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 1",
    "tag": "",
    "top": "Revisão das Metas 1 a 7",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Releia anotações das Metas 1-7. Refaça questões ERRADAS. Foque nos artigos marcados com dúvida. NÃO estude conteúdo novo.",
    "como": "",
    "dica": "Revisão espaçada é o que separa quem passa. 60% do tempo nas questões erradas, 40% relendo artigos difíceis. Se acertou >80%: releia resumo. Se <60%: refaça TODAS.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T01",
      "tema": "O equilíbrio entre eficiência tecnológica no Judiciário e o acolhimento humano",
      "dica": "Apresente tese clara no 1.o parágrafo. Desenvolva com argumento jurídico e argumento social. Conclua retomando a tese, sem proposta de intervenção no estilo ENEM. Nunca use 1.a pessoa. Escreva de 25 a 30 linhas."
    },
    "faixa": [
      1,
      7
    ],
    "qi": 0
  },
  {
    "n": 9,
    "c": "M9",
    "marco": 1,
    "tipo": "meta",
    "d": "DP",
    "nome": "",
    "tag": "ALTA",
    "top": "Crimes contra Fé Pública (Arts. 293-305, 307, 308, 311-A)",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 20,
    "art": "CP, Arts. 293-305 + 307 + 308 + 311-A",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: falsificação de papéis públicos, de selos e petrechos de falsificação (arts. 293 a 296 — 2017, 2021, 2024 e reaplicação de 2024); falsa identidade (art. 307 — 2017, 2021, 2024 e 2025); uso de documento de outrem (art. 308 — 2017, 2021 e 2024); fraude em certames de interesse público (art. 311-A — 2023, 2024 e reaplicação de 2024). Falsa identidade e o art. 311-A são os campeões de repetição.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Uso de documento falso (304): pena = MESMA da falsificação. Quem falsifica e depois usa: responde SÓ pela falsificação (post factum impunível). Quem só usa: responde pelo 304.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=6gddkjfla2E",
        "t": "Direito Penal Especial - Dos Crimes contra a Fé Pública com Lucas Fávero - Focus Concursos",
        "ch": "Focus Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BOOr",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=9&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=17383",
    "links": [],
    "res": [
      "m9",
      "penal-bizurado"
    ],
    "lei": [
      "cp"
    ],
    "qi": 30
  },
  {
    "n": 10,
    "c": "M10",
    "marco": 1,
    "tipo": "meta",
    "d": "INF",
    "nome": "",
    "tag": "ALTA",
    "top": "MS-Windows 10 ou superior",
    "modo": "Teoria",
    "tempo": "2h",
    "min": 15,
    "art": "",
    "est": "Pastas, diretórios, arquivos, atalhos, área de trabalho, área de transferência, manipulação de arquivos, uso dos menus, programas.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Atalhos: Clique aqui",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=7dC_FVw_pJc",
        "t": "INFORMÁTICA PARA TJSP: MS-WINDOWS",
        "ch": "Léo Matos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BuFP",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=46&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19793&subject_ids%5B%5D=33016",
    "links": [
      "https://tecnoblog.net/responde/70-atalhos-para-controle-e-navegacao-do-windows-10/"
    ],
    "res": [
      "m10"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 11,
    "c": "M11",
    "marco": 1,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Juiz, MP, Acusado e Defensor (Arts. 251 a 258, 261 a 267 e 274)",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 15,
    "art": "CPP, Arts. 251-258 + 261-267 + 274",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — bloco cobrado em TODOS os anos analisados: impedimento e suspeição do juiz (arts. 252 e 254 — 2017, 2021, 2023, 2024 e reaplicação de 2024) e \"do acusado e seu defensor\" (arts. 261 a 267 — 2017, 2023, reaplicação de 2024 e 2025).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Impedimento (252) = ABSOLUTO (nulidade absoluta). Suspeição (254) = RELATIVA.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=hpHIn8j_bUw",
        "t": "",
        "ch": ""
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BuHY",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=4284",
    "links": [],
    "res": [
      "m11"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 12,
    "c": "M12",
    "marco": 1,
    "tipo": "meta",
    "d": "RL",
    "nome": "",
    "tag": "ALTA",
    "top": "Estruturas Lógicas",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 15,
    "art": "",
    "est": "Proposições, conectivos lógicos, tabela verdade, tautologia, contradição, negação de proposições compostas.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Negação de 'Se A então B' = 'A e não B' (NÃO é 'Se não A então não B'). Para negar 'A e B' = 'não A OU não B'. Para negar 'A ou B' = 'não A E não B' (De Morgan).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=cLWP39aIgGA",
        "t": "Concurso TJ SP Escrevente 2023: Estruturas Lógicas",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BuJK",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=4&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=15441&subject_ids%5B%5D=15442&subject_ids%5B%5D=15443&subject_ids%5B%5D=15446&subject_ids%5B%5D=17777&subject_ids%5B%5D=17778",
    "links": [],
    "res": [
      "m12"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 13,
    "c": "M13",
    "marco": 1,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Significação Contextual + Sinônimos/Antônimos + Sentido próprio e figurado",
    "modo": "Teoria",
    "tempo": "2h",
    "min": 20,
    "art": "",
    "est": "Significação contextual de palavras/expressões. Sinônimos e antônimos. Sentido próprio e figurado.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "A Vunesp NÃO cobra sinônimos absolutos — cobra substituição SEM ALTERAR SENTIDO DO TEXTO. Sempre releia o parágrafo inteiro.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=jXgaKQZDb_M",
        "t": "SINÔNIMO E ANTÔNIMO || Teoria + Questões de Concurso",
        "ch": "Prof. Álvaro Ferreira"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BuLx",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14657&subject_ids%5B%5D=16331",
    "links": [],
    "res": [
      "m13"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 14,
    "c": "M14",
    "marco": 1,
    "tipo": "meta",
    "d": "DA",
    "nome": "",
    "tag": "ALTA",
    "top": "Estatuto — Direitos e Vantagens (Arts. 37-86)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "Lei 10.261/68, Arts. 37 a 86",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: afastamentos e licenças do funcionário, inclusive o afastamento para participação em competições desportivas e as situações que contam como efetivo exercício (2025).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Licença-saúde: até 4 ANOS (art. 191). Gestante: 180 DIAS (art. 198). Licença-prêmio: 90 dias a cada 5 anos de exercício ininterrupto (art. 209). Atenção: esses artigos ficam fora do recorte do edital (arts. 1 a 86); dentro dele, o art. 78 lista as licenças e os afastamentos considerados de efetivo exercício, tema cobrado em 2025.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=j2Cio2a8bBY",
        "t": "Estatuto SP - Arts. 26 a 45 (Reintegração, Reversão, Readaptação, Remoção) - Lei 10.261/68",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BNe2",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=61&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14325",
    "links": [],
    "res": [
      "m6"
    ],
    "lei": [
      "l10261"
    ],
    "qi": 30
  },
  {
    "n": 15,
    "c": "M15",
    "marco": 1,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 2",
    "tag": "",
    "top": "Revisão das Metas 9 a 14",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Releia as anotações e resumos das Metas 9-14. Refaça questões erradas. Compare impedimentos CPP (252) vs CPC (144). Revise todo o Art. 5º.",
    "como": "",
    "dica": "Faça MAPA MENTAL (opcional): impedimentos CPP vs CPC, prazos do Estatuto (posse 30d, exercício 30d, estágio 3a, férias 30d, licença-saúde 4a, gestante 180d).",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T02",
      "tema": "Inteligência artificial e seus efeitos no mercado de trabalho",
      "dica": "Aborde pontos positivos (produtividade, inovação) e negativos (desemprego estrutural). Use dados reais. Conclua retomando a tese; a formação profissional pode aparecer como reflexão final, sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      9,
      14
    ],
    "qi": 0
  },
  {
    "n": 16,
    "c": "M16",
    "marco": 1,
    "tipo": "sim",
    "d": "",
    "nome": "SIMULADO + REVISÃO — MARCO 1",
    "tag": "",
    "top": "30 questões cronometradas + Banco de Erros",
    "modo": "Simulado",
    "tempo": "2h30",
    "min": 30,
    "art": "",
    "est": "Mini-prova: 5 Português + 10 Direito + 8 Gerais + 7 mistas. Cronometre 2h. Anote CADA erro no Banco de Erros.",
    "como": "",
    "dica": "O Banco de Erros é o documento mais importante. Cada erro vira ficha: questão, por que errou, conceito correto.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 17,
    "c": "M17",
    "marco": 2,
    "tipo": "meta",
    "d": "DP",
    "nome": "",
    "tag": "ALTA",
    "top": "Crimes contra Adm. Pública — Funcionário (Arts. 312 a 317 e 319 a 321)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "CP, Arts. 312 a 317 e 319 a 321",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: peculato e a reparação do dano no peculato culposo (art. 312, §§ 2º e 3º — 2024); inserção de dados falsos em sistema de informações (art. 313-A — 2025); concussão e excesso de exação (art. 316 e § 1º — reaplicação de 2024); condescendência criminosa (art. 320 — 2025). Bloco presente em 2017, 2021, 2023, 2024, reaplicação de 2024 e 2025.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Concussão (316) = EXIGIR. Corrupção passiva (317) = SOLICITAR/RECEBER/ACEITAR. Decore: 'ConCussão = Cobrar'. Peculato culposo: reparar o dano ANTES da sentença IRRECORRÍVEL = extingue a punibilidade; DEPOIS dela = reduz de metade a pena imposta (art. 312, § 3º).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=sg0ocjzz4OA",
        "t": "Sexta Extravagante: Crimes contra a Administração Pública",
        "ch": "Gran Cursos Online"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bumk",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=9&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=17398",
    "links": [],
    "res": [
      "m17",
      "penal-bizurado"
    ],
    "lei": [
      "cp"
    ],
    "qi": 30
  },
  {
    "n": 18,
    "c": "M18",
    "marco": 2,
    "tipo": "meta",
    "d": "DP",
    "nome": "",
    "tag": "ALTA",
    "top": "Crimes contra Adm. Pública — Funcionário (Arts. 322 a 327) e Particular (Arts. 328 a 333, 336 e 337)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "CP, Arts. 322-333 + 336 + 337",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: inutilização de edital ou de sinal (art. 336) e subtração ou inutilização de livro ou documento (art. 337), ambos em 2023 e na reaplicação de 2024; usurpação de função pública (328), resistência (329), desobediência (330) e desacato (331) — 2023 e reaplicação de 2024. O bloco também apareceu em 2017.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Resistência = VIOLÊNCIA/AMEAÇA. Desobediência = DESCUMPRIR sem violência. Corrupção ativa = OFERECER/PROMETER.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=jH8VAgYuaiQ",
        "t": "Direito Penal Especial - Dos Crimes contra a Administração Pública com Lucas Fávero",
        "ch": "Focus Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BuoM",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=9&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=17398",
    "links": [],
    "res": [
      "m18",
      "penal-bizurado"
    ],
    "lei": [
      "cp"
    ],
    "qi": 30
  },
  {
    "n": 19,
    "c": "M19",
    "marco": 2,
    "tipo": "meta",
    "d": "ATU",
    "nome": "",
    "tag": "ALTA",
    "top": "Estatuto PcD (Arts. 1-13 + 34-38) + Fatos janeiro/2026",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 15,
    "art": "Lei 13.146/2015, Arts. 1-13 + 34-38",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — cobrado em TODOS os anos analisados, com 2 questões por prova: conceito de pessoa com deficiência e o impedimento de LONGO PRAZO (art. 2º — 2025); atendimento prioritário, inclusive do acompanhante (art. 9º — 2023 e reaplicação de 2024); direito ao trabalho, habilitação e reabilitação profissional (arts. 34 a 38 — 2021, 2023, 2024 e reaplicação de 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Art. 2º: deficiência = impedimento de LONGO PRAZO (não temporário). Art. 34: trabalho em igualdade. A Vunesp cobra literalidade.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=i7i9c84ICHo",
        "t": "Tudo sobre o Estatuto da Pessoa com Deficiência - Artigos mais cobrados! Com Carlinhos Costa",
        "ch": "Gran Cursos Online"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bupt",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=579&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest",
    "links": [],
    "res": [
      "m19"
    ],
    "lei": [
      "l13146"
    ],
    "qi": 34
  },
  {
    "n": 20,
    "c": "M20",
    "marco": 2,
    "tipo": "meta",
    "d": "DP",
    "nome": "",
    "tag": "ALTA",
    "top": "Crimes contra Adm. Justiça (Arts. 339 a 347, 357, 359)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "CP, Arts. 339 a 347 + 357 + 359",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP em 2017, 2021, 2023 e na reaplicação de 2024, com destaque para exercício arbitrário das próprias razões (art. 345 — 2021), fraude processual (art. 347 — 2023), exploração de prestígio (art. 357 — 2017) e desobediência a decisão judicial (art. 359 — 2023).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Denunciação caluniosa (339) = dá causa a investigação ou processo contra pessoa DETERMINADA, imputando-lhe crime, infração ético-disciplinar ou ato ímprobo de que a sabe inocente. Comunicação falsa (340) = informa crime que NÃO existiu. Falso testemunho: retratação antes da sentença = extingue.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=C4qOIZOH1EE",
        "t": "Revisão Escrevente TJSP - Direito Penal, crimes contra a administração da Justiça",
        "ch": "Prof. Otaviano Uwada"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BurV",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=9&examining_board_ids%5B%5D=1&examining_board_ids%5B%5D=2&examining_board_ids%5B%5D=63&examining_board_ids%5B%5D=152&examining_board_ids%5B%5D=1794&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=17399",
    "links": [],
    "res": [
      "m20",
      "penal-bizurado"
    ],
    "lei": [
      "cp"
    ],
    "qi": 30
  },
  {
    "n": 21,
    "c": "M21",
    "marco": 2,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Concordância Verbal e Nominal",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Concordância verbal: sujeito composto, oracional, partitivas, porcentagem, verbo SER, voz passiva sintética. Concordância nominal: MEIO/MEIA, BASTANTE, ANEXO, OBRIGADO.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "'A maioria dos candidatos': verbo pode ir singular OU plural. 'Faz 5 anos' = impessoal (não flexiona). 'Fazem 5 anos' = ERRADO.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=jdqhnVUvqOc",
        "t": "🔴 CONCORDÂNCIA VERBAL - Teoria e Questões para Concurso",
        "ch": "Prof. Álvaro Ferreira"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Butm",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=16012",
    "links": [],
    "res": [
      "m21"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 22,
    "c": "M22",
    "marco": 2,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 3",
    "tag": "",
    "top": "Revisão das Metas 17 a 21",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões erradas. Monte quadro: peculato Vs concussão Vs corrupção passiva Vs ativa. Compare denunciação caluniosa Vs comunicação falsa. Volte em pontos que ainda está com dúvida, releia os resumos e faça mais questões para entender o estilo de cobrança e os peguinhas mais cobrados.",
    "como": "",
    "dica": "",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T03",
      "tema": "Saúde mental no ambiente de trabalho: responsabilidade individual ou coletiva?",
      "dica": "Defenda que a responsabilidade é compartilhada. Use argumento do direito ao trabalho digno (CF/88) e argumento prático de produtividade. Evite discurso apenas motivacional."
    },
    "faixa": [
      17,
      21
    ],
    "qi": 0
  },
  {
    "n": 23,
    "c": "M23",
    "marco": 2,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "ALTA",
    "top": "Citações e Intimações (Arts. 351 a 372)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPP, Arts. 351 a 372",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: citação do acusado (por mandado, por edital e por hora certa) e intimações, em 2017, 2021, reaplicação de 2024 e 2025. Não pule as citações especiais: militar (358), funcionário público (359) e réu preso (360).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Citação por edital: réu NÃO encontrado, prazo 15 DIAS. Réu citado por edital que não comparece NEM constitui advogado: processo e prazo prescricional SUSPENSOS (art. 366), NÃO revelia.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=sbntBKj2f0I",
        "t": "CITAÇÕES E INTIMAÇÕES | DIREITO PROCESSUAL PENAL",
        "ch": "Focus Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Buvf",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=157&subject_ids%5B%5D=20589",
    "links": [],
    "res": [
      "m23"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 24,
    "c": "M24",
    "marco": 2,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Impedimento e Suspeição (Arts. 144 a 155)",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 10,
    "art": "CPC, Arts. 144 a 155",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: deveres e atribuições do escrivão/chefe de secretaria e dos demais auxiliares da justiça (arts. 149 a 155 — 2017). O rol do impedimento (144) e da suspeição (145) costuma ser cobrado em comparação com o CPP.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Compare com CPP (254): CPC impedimento=144, suspeição=145. CPP impedimento=252, suspeição=254. Rol DIFERENTE. Faça tabela lado a lado.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=3sL0TYqc7mc",
        "t": "Impedimento e Suspeição | Processo Civil Desenhado",
        "ch": "Ricardo Torques"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Buzc",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=1&examining_board_ids%5B%5D=2&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19101",
    "links": [],
    "res": [
      "m24"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 25,
    "c": "M25",
    "marco": 2,
    "tipo": "meta",
    "d": "INF",
    "nome": "",
    "tag": "MÉDIA",
    "top": "MS-Word (Microsoft 365)",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 15,
    "art": "",
    "est": "Edição, formatação, cabeçalhos, parágrafos, fontes, colunas, marcadores, tabelas, quebras, índices, caixas de texto.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Ctrl+Enter = quebra de página. Ctrl+Shift+Enter = quebra de coluna. Cabeçalho: para ter cabeçalho diferente em cada seção, DESATIVE 'Vincular ao Anterior' (ativado, repete o da seção anterior).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=JNcFzb9gfEg",
        "t": "INFORMÁTICA VUNESP 2025 - WORD",
        "ch": "Ciência Exata"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bv1m",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=46&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20770&subject_ids%5B%5D=27893",
    "links": [],
    "res": [
      "m25"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 26,
    "c": "M26",
    "marco": 2,
    "tipo": "meta",
    "d": "DC",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Direitos Sociais + Nacionalidade (Arts. 6 a 13 CF)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CF/88, Arts. 6 a 13",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: nacionalidade — brasileiro nato e naturalizado, hipóteses de naturalização e cargos privativos de brasileiro nato (art. 12 — 2017, 2021, 2024 e 2025); direitos sociais e direitos dos trabalhadores (arts. 6º e 7º — 2021 e 2024); liberdade sindical (art. 8º — 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Brasileiro NATO: NUNCA extraditado. NATURALIZADO: extraditado por crime comum anterior ou tráfico a qualquer tempo.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=bFdXOeLfDAY",
        "t": "Questões Comentadas de Direitos Sociais | VUNESP | Direito Constitucional",
        "ch": "Adriane Fauth"
      },
      {
        "u": "https://www.youtube.com/watch?v=7xBUVLIb0Zw",
        "t": "NACIONALIDADE - Artigo 12 CF/88 - Direito Constitucional para Concursos - Professor Franco",
        "ch": "JUS POLIS"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bv3H",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=3&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=436&subject_ids%5B%5D=438",
    "links": [],
    "res": [
      "m26"
    ],
    "lei": [
      "cf"
    ],
    "qi": 33,
    "atual": "**EC 141/2026 (16/10/2026), fim da escala 6x1:** o art. 7º da CF mudou. Inciso XIII: jornada de 8 horas diárias e **40 semanais** (antes 44), com redução progressiva (42 horas a partir de 2 meses da publicação e 40 horas 1 ano depois). Inciso XV: repouso semanal remunerado de **2 dias**, um deles preferencialmente aos domingos, em vigor 2 meses após a publicação. O antigo parágrafo único (domésticos) virou **§ 1º**, e entraram os **§§ 2º e 3º**. A lei seca, o resumo e as questões do app já estão atualizados."
  },
  {
    "n": 27,
    "c": "M27",
    "marco": 2,
    "tipo": "meta",
    "d": "RL",
    "nome": "",
    "tag": "ALTA",
    "top": "Lógica de Argumentação",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 15,
    "art": "",
    "est": "Argumentos válidos/inválidos, falácias, silogismos, modus ponens, modus tollens, contrapositiva.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Modus Ponens: Se P→Q e P é V, então Q é V. Modus Tollens: Se P→Q e Q é F, então P é F. CONTRAPOSITIVA = equivalente. INVERSA ≠ equivalente.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=5NPPjMh_ulo",
        "t": "RLM para Concursos: Aprenda o que são Argumentações Lógicas de uma forma fácil e rápida",
        "ch": "Focus Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bv4K",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=4&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=15450",
    "links": [],
    "res": [
      "m27"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 28,
    "c": "M28",
    "marco": 2,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Regência Verbal e Nominal + Crase",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Regência: assistir (a), visar (a), obedecer (a), preferir (a), implicar, aspirar. Crase: regras, obrigatória, proibida, facultativa.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Crase NUNCA antes de: masculino, verbo, pronome pessoal. OBRIGATÓRIA: 'à moda de', 'à medida que'. Truque: se trocar por masculino e ficar 'AO', tem crase.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=1IRO-p95oo0",
        "t": "REGÊNCIA VERBAL E NOMINAL - Muitos exemplos e questões",
        "ch": "Prof. Álvaro Ferreira"
      },
      {
        "u": "https://www.youtube.com/watch?v=5uMooAjtVis",
        "t": "CRASE - As 6 regras mais cobradas em CONCURSO (Teoria + Questões)",
        "ch": "Prof. Álvaro Ferreira"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bv59",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=15727&subject_ids%5B%5D=16011&subject_ids%5B%5D=30912",
    "links": [],
    "res": [
      "m28"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 29,
    "c": "M29",
    "marco": 2,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 4",
    "tag": "",
    "top": "Revisão das Metas 23 a 28",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões. Compare citação CPP vs CPC. Releia crimes. Revise concordância e crase.",
    "como": "",
    "dica": "Teste: feche material, escreva de memória os verbos nucleares de cada crime (312 a 317 e 319 a 333). Anote os que esqueceu. Isso é 'recordação ativa', que fixa muito mais do que apenas reler.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T04",
      "tema": "O papel do Poder Judiciário na proteção dos direitos fundamentais",
      "dica": "Contextualize o art. 5.o da CF. Cite ao menos um mecanismo concreto (HC, MS, ação popular). Conclua com a importância do Judiciário como guardião dos direitos."
    },
    "faixa": [
      23,
      28
    ],
    "qi": 0
  },
  {
    "n": 30,
    "c": "M30",
    "marco": 2,
    "tipo": "meta",
    "d": "DA",
    "nome": "",
    "tag": "ALTA",
    "top": "Estatuto dos Funcionários Públicos Civis do Estado de São Paulo (Lei n.º 10.261/68) – arts 171 a 175 + 239 a 270",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "Lei 10.261/68, Arts. 171 a 175 + 239 a 270",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: penas disciplinares e autoridade competente para aplicá-las (2023 e 2024); prescrição da ação disciplinar (art. 261 — 2023); afastamento preventivo determinado pelo Chefe de Gabinete (art. 266 — 2024); apuração preliminar (2021).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Prescrição (art. 261): repreensão, suspensão E MULTA = 2 anos. Demissão, demissão a bem do serviço público e cassação da aposentadoria = 5 anos. Conta-se do dia em que a falta foi COMETIDA (nas faltas continuadas ou permanentes, do dia em que cessou a continuação ou a permanência), art. 261, § 1º, e a portaria que instaura sindicância ou processo administrativo INTERROMPE a prescrição. Guarde ainda: o processo administrativo é OBRIGATÓRIO quando a falta puder gerar demissão, demissão a bem do serviço público ou cassação (art. 270) — sindicância não serve para demissão. Afastamento preventivo (art. 266): até 180 dias, prorrogáveis uma única vez por igual período, sem prejuízo dos vencimentos.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=3yirVgRq-AM",
        "t": "Estatuto SP - Arts. 171 a 175 (Das Acumulações Remuneradas) - Lei 10.261/68",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6Bv9i",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=61&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14325",
    "links": [],
    "res": [
      "m30"
    ],
    "lei": [
      "l10261"
    ],
    "qi": 30
  },
  {
    "n": 31,
    "c": "M31",
    "marco": 2,
    "tipo": "meta",
    "d": "DA",
    "nome": "",
    "tag": "ALTA",
    "top": "PAD — Defesa, Julgamento e Penalidades (Arts. 271-323)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "Lei 10.261/68, Arts. 271 a 323",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — bloco cobrado em todos os anos analisados: número de testemunhas que as partes podem arrolar no processo disciplinar (2021 e 2023); práticas autocompositivas, termo de ajustamento de conduta e suspensão condicional da sindicância (2023); pedido de revisão e a proibição de agravar a pena (art. 316 — 2023); processo por abandono de cargo e inassiduidade (reaplicação de 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Sindicância (art. 273): deve estar concluída em 60 DIAS, e a autoridade sindicante e cada acusado podem arrolar até 3 TESTEMUNHAS. CUIDADO com a pegadinha: o famoso “30 + 30 dias” é da Lei 8.112/90 (federal), NÃO do Estatuto paulista. Em SP, os procedimentos disciplinares punitivos são presididos por servidores ocupantes de cargos efetivos e confirmados na respectiva carreira (art. 271, redação da LC 1.419/2024), e não por comissão de 3 membros. Na revisão, a pena imposta NÃO pode ser agravada (art. 316).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=TvH2iWoqhYU",
        "t": "Revisão de Véspera MP SP - Lei 10.261/1968 (Legislação)",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvC4",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=61&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14325",
    "links": [],
    "res": [
      "m31"
    ],
    "lei": [
      "l10261"
    ],
    "qi": 30
  },
  {
    "n": 32,
    "c": "M32",
    "marco": 2,
    "tipo": "meta",
    "d": "MAT",
    "nome": "",
    "tag": "ALTA",
    "top": "Razão, Proporção e Porcentagem",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Razão, proporção, grandezas direta/inversamente proporcionais, porcentagem, aumentos/descontos sucessivos.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Aumentos sucessivos: NUNCA some. 20% + 10% ≠ 30%. Calcule: 1,20 × 1,10 = 1,32 = 32%.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=ErlOZ8Xgi6s",
        "t": "Razão e Proporção Para Concursos: Aprenda o Macete do K Passo a Passo!",
        "ch": "Felippe Loureiro"
      },
      {
        "u": "https://www.youtube.com/watch?v=kiPLYrTqyrQ",
        "t": "VUNESP - PORCENTAGEM PARA CONCURSOS - CONCURSO GUARDA MUNICIPAL DE SÃO PAULO",
        "ch": "Dandan da Matemática"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvEO",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=13&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20317&subject_ids%5B%5D=20321",
    "links": [],
    "res": [
      "m32"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 33,
    "c": "M33",
    "marco": 2,
    "tipo": "meta",
    "d": "DA",
    "nome": "",
    "tag": "ALTA",
    "top": "Improbidade Parte 1 (Lei 8.429 Arts. 1 a 12)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "Lei 8.429/92 Arts. 1 a 12",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: atos que importam enriquecimento ilícito (art. 9º — 2017 e 2025), atos que causam prejuízo ao erário (art. 10 — 2021 e 2025) e atos que atentam contra os princípios da administração (art. 11 — 2017). Depois da Lei 14.230/2021, todos exigem DOLO.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Art. 9/10/11: TODOS exigem DOLO (desde reforma 2021). Não existe mais improbidade por culpa. A Vunesp cobra: 'Ato culposo configura improbidade?' NÃO mais.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=paly7jtgPH8",
        "t": "Concurso Escrevente TJSP 2025: Improbidade Administrativa",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvFO",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=2&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=16073&subject_ids%5B%5D=16197",
    "links": [],
    "res": [
      "m33"
    ],
    "lei": [
      "l8429"
    ],
    "qi": 30
  },
  {
    "n": 34,
    "c": "M34",
    "marco": 2,
    "tipo": "meta",
    "d": "DA",
    "nome": "",
    "tag": "ALTA",
    "top": "Improbidade Parte 2 (Lei 8.429 Arts. 13-25)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "Lei 8.429/92, Arts. 13 a 25",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: sanções aplicáveis, inclusive a multa (art. 12 — 2023 e 2024); decisões do juiz no curso da ação e aspectos processuais da ação de improbidade (reaplicação de 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Prescrição: 8 ANOS, contados da ocorrência do fato ou, nos ilícitos permanentes, do dia em que cessou (art. 23). CUIDADO: o ressarcimento ao erário é imprescritível SOMENTE quando o ato de improbidade é DOLOSO (STF, Tema 897) — não existe imprescritibilidade geral. As sanções do art. 12 podem ser aplicadas isolada ou cumulativamente.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=RYDvJEuTL00",
        "t": "Lei de Improbidade Esquematizada 2026",
        "ch": "Estratégia Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvGS",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=2&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=16073&subject_ids%5B%5D=16197",
    "links": [],
    "res": [
      "m34"
    ],
    "lei": [
      "l8429"
    ],
    "qi": 30
  },
  {
    "n": 35,
    "c": "M35",
    "marco": 2,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 5",
    "tag": "",
    "top": "Revisão das Metas 30 a 34",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões PAD e Improbidade. Monte quadro: penalidades Estatuto vs sanções LIA. Compare prescrição Estatuto (2 ou 5 anos; se a falta também for crime, o prazo penal quando superior a 5 anos, art. 261) vs LIA (8 anos, art. 23).",
    "como": "",
    "dica": "PAD da lei 10.261 + Improbidade = bloco MAIS cobrado em Dir. Administrativo. Domine = garante 5-6 questões do Bloco II.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T05",
      "tema": "Desinformação digital e seus impactos na democracia",
      "dica": "Relacione desinformação com o exercício do voto consciente. Cite impactos eleitorais. Alfabetização midiática e regulação podem entrar como argumentos; conclua retomando a tese, sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      30,
      34
    ],
    "qi": 0
  },
  {
    "n": 36,
    "c": "M36",
    "marco": 2,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO GERAL 1",
    "tag": "",
    "top": "Revisão aprofundada Metas 1-34 (Banco de Erros)",
    "modo": "Revisão Geral",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "FOQUE NOS PONTOS FRACOS. Banco de Erros: 3 matérias com menor %. Refaça APENAS questões erradas dessas matérias.",
    "como": "",
    "dica": "Se >70%: caminho certo, foque nos 30% de erro. Se <60%: reduza ritmo, reforce pontos fracos. Qualidade > velocidade.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "faixa": [
      1,
      34
    ],
    "qi": 0
  },
  {
    "n": 37,
    "c": "M37",
    "marco": 2,
    "tipo": "sim",
    "d": "",
    "nome": "SIMULADO + REVISÃO — MARCO 2",
    "tag": "",
    "top": "30 questões: Penal + Adm. + Português",
    "modo": "Simulado",
    "tempo": "2h30",
    "min": 30,
    "art": "",
    "est": "30 questões cronometradas: 8 Português + 15 Direito + 7 Gerais. Atualize Banco de Erros.",
    "como": "",
    "dica": "Classifique cada erro: (1) não sabia (2) confundiu (3) desatenção. Tipo 2 é o mais perigoso: gera falsa confiança.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 38,
    "c": "M38",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Atos Processuais — Forma e Tempo (Arts. 188-211)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPC, Arts. 188 a 211",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; ele aparece de forma indireta em outras questões de Processo Civil. Como está no edital, faça a leitura da lei seca.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Sentença (art. 203, §1º) = pronunciamento que, com base nos arts. 485 ou 487, põe fim à fase de conhecimento ou extingue a execução — ATENÇÃO: pode ser COM ou SEM resolução de mérito. Interlocutória = decisão que não é sentença (§2º). Despacho = sem conteúdo decisório (§3º). Recursos: apelação contra sentença; agravo de instrumento SÓ nas hipóteses taxativas do art. 1.015 — as demais interlocutórias são impugnadas na apelação (art. 1.009, §1º).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=aAWf4iLIUF8",
        "t": "05.01.01. Da Forma dos Atos Processuais (arts. 188 a 211) Parte 1 - Prof. João Liberato",
        "ch": "TecConcursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvJ3",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20421&subject_ids%5B%5D=20429",
    "links": [],
    "res": [
      "m38"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 39,
    "c": "M39",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Prazos Processuais (Arts. 212-235)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPC, Arts. 212 a 235",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: atos que se processam durante as férias forenses e a não suspensão dos prazos (art. 215 — 2017). A contagem em dias ÚTEIS (art. 219) é a comparação clássica com o CPP. Não pule os arts. 233 a 235: responsabilidade do escrivão/chefe de secretaria pelo excesso de prazo e devolução dos autos.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "CUIDADO: CPC = DIAS ÚTEIS. CPP = DIAS CORRIDOS. Lei 9.099: JEC (cível) = dias ÚTEIS (art. 12-A, incluído pela Lei 13.728/2018); JECrim = CORRIDOS (segue o CPP). A Vunesp cruza essas contagens.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=d9jMtonpI5E",
        "t": "05.01.02. Do Tempo e Do Lugar dos Atos Processuais (arts. 212 a 217) - Prof. João Liberato",
        "ch": "TecConcursos"
      },
      {
        "u": "https://www.youtube.com/watch?v=ifWUyUgEJSc",
        "t": "05.01.03. Dos Prazos (arts. 218 a 235) Parte 1 (Direito Processual Civil) - Prof. João Liberato",
        "ch": "TecConcursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvJV",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20430",
    "links": [],
    "res": [
      "m39"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 40,
    "c": "M40",
    "marco": 3,
    "tipo": "meta",
    "d": "INF",
    "nome": "",
    "tag": "ALTA",
    "top": "MS-Excel (Microsoft 365)",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Planilhas, células, fórmulas (SOMA, MÉDIA, SE, CONT.SE, SOMASE, PROCV), gráficos, macros, classificação de dados.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "=PROCV (valor;tabela;coluna;FALSO). FALSO = correspondência EXATA. Referência absoluta: $A$1 (não muda ao copiar). A Vunesp SEMPRE cobra PROCV.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=bfHoR57T_L4",
        "t": "Concurso Escrevente TJSP 2025: Aula completa Excel - INFORMÁTICA",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6BvKR",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=46&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&my_questions=all&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20771&subject_ids%5B%5D=27894",
    "links": [],
    "res": [
      "m40"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 41,
    "c": "M41",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Citação (Arts. 236-259)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "CPC, Arts. 236 a 259",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: lugar em que a citação pode ser feita (art. 243 — 2021); citação por meio eletrônico (art. 246 — 2023); atos de comunicação processual em geral (2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Citação por edital CPC: réu DESCONHECIDO ou local INCERTO (256). CPP: réu NÃO ENCONTRADO (361). São DIFERENTES. Efeitos da citação válida (art. 240): induz litispendência, torna litigiosa a coisa e constitui em mora o devedor. A prevenção NÃO é efeito da citação no CPC/2015: decorre do registro ou da distribuição da inicial (art. 59).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=yzxnc_DhY3A",
        "t": "Citação | Processo Civil Desenhado",
        "ch": "Ricardo Torques"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8E6",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&sort=newest&subject_ids%5B%5D=20431",
    "links": [],
    "res": [
      "m41"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 42,
    "c": "M42",
    "marco": 3,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 6",
    "tag": "",
    "top": "Revisão das Metas 38 a 41",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Compare prazos CPC vs CPP. Refaça Excel. Releia citação CPC vs CPP. Monte quadro: efeitos da citação.",
    "como": "",
    "dica": "Nos arts. 188 a 259 do CPC, o que mais caiu foi a citação (art. 243 em 2021 e art. 246 em 2023), além do art. 215 (férias forenses, 2017); os arts. 188 a 211 não tiveram questão específica nas provas analisadas. Domine citação e contagem em dias úteis.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T06",
      "tema": "Crise climática e o papel das cidades na adaptação ambiental",
      "dica": "Foque em políticas urbanas concretas (arborização, drenagem, mobilidade). Use dados de enchentes ou secas no Brasil. Conclua com corresponsabilidade entre poder público e cidadão."
    },
    "faixa": [
      38,
      41
    ],
    "qi": 0
  },
  {
    "n": 43,
    "c": "M43",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Intimação + Cartas (Arts. 260-275)",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 15,
    "art": "CPC, Arts. 260 a 275",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: intimações no CPC (arts. 269 a 275 — 2024). As cartas (260 a 268) costumam ser cobradas pela distinção entre carta de ordem, precatória e rogatória.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Carta de ordem: tribunal→juiz (HIERARQUIA). Precatória: entre órgãos jurisdicionais brasileiros de competência territorial DIVERSA (comarcas diferentes). Rogatória: órgão jurisdicional ESTRANGEIRO. Arbitral: pedido do juízo arbitral ao Judiciário (art. 237, IV).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=sXnNVFOnxcY",
        "t": "Intimações | Processo Civil Desenhado",
        "ch": "Ricardo Torques"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8Hs",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&sort=newest&subject_ids%5B%5D=20433",
    "links": [],
    "res": [
      "m43"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 44,
    "c": "M44",
    "marco": 3,
    "tipo": "meta",
    "d": "DC",
    "nome": "",
    "tag": "ALTA",
    "top": "Adm. Pública (Arts. 37 a 41) + Art. 92 CF",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "CF/88, Arts. 37 a 41 + Art. 92",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: regras do art. 37, com destaque para o teto remuneratório (inciso XI — 2025) e as vedações de acumulação (XVI e XVII); administração pública em geral (2023, 2024 e reaplicação de 2024); regime previdenciário e aposentadoria do servidor (art. 40 — 2023 e 2024); estrutura do Poder Judiciário (art. 92 — 2023).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Estabilidade (41): 3 ANOS + aprovação em avaliação. Perda do cargo: sentença transitada, PAD, ou avaliação periódica (esta depende de LC nunca editada).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=AtRBQRwaTw4",
        "t": "DIREITO CONSTITUCIONAL: ADMINISTRAÇÃO PÚBLICA - FGV | ADRIANE FAUTH",
        "ch": "Adriane Fauth"
      },
      {
        "u": "https://www.youtube.com/watch?v=qMAkh-g8sO8",
        "t": "Poder Judiciário: Estrutura, Órgãos e Competências | Adriane Fauth",
        "ch": "Adriane Fauth"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8Kp",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=3&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&job_ids%5B%5D=6644&per_page=20&publication_year%5B%5D=2010&publication_year%5B%5D=2011&publication_year%5B%5D=2012&publication_year%5B%5D=2013&publication_year%5B%5D=2014&publication_year%5B%5D=2015&publication_year%5B%5D=2016&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=806&subject_ids%5B%5D=16255&subject_ids%5B%5D=16267&subject_ids%5B%5D=16269",
    "links": [],
    "res": [
      "m44"
    ],
    "lei": [
      "cf"
    ],
    "qi": 30
  },
  {
    "n": 45,
    "c": "M45",
    "marco": 3,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Pontuação",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Vírgula: adj. adverbiais deslocados, apostos, vocativos, enumerações. Ponto e vírgula. Dois-pontos. Travessão.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "NUNCA separe sujeito do verbo com vírgula (exceto intercalação). Vírgula antes de 'e': quando os sujeitos forem diferentes, no polissíndeto ou quando o 'e' tiver valor adversativo.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=G8Stjzy-87k",
        "t": "PONTUAÇÃO - Aulão completo para Concurso Público!",
        "ch": "Prof. Álvaro Ferreira"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8WR",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2012&publication_year%5B%5D=2013&publication_year%5B%5D=2014&publication_year%5B%5D=2015&publication_year%5B%5D=2016&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14647&subject_ids%5B%5D=14649&subject_ids%5B%5D=14650&subject_ids%5B%5D=17753",
    "links": [],
    "res": [
      "m45"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 46,
    "c": "M46",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Tutelas Provisórias (Arts. 294-311)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPC, Arts. 294 a 311",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: tutela antecipada requerida em caráter antecedente e a sua ESTABILIZAÇÃO (arts. 303 e 304 — 2017 e 2021).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Urgência: probabilidade do direito + perigo de dano OU risco ao resultado útil do processo (art. 300). Evidência: NÃO exige perigo. 'Qual dispensa perigo?' Evidência (311).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=AUMa1ANfIGM",
        "t": "06. Da Tutela Provisória (arts 294 a 311) Parte 1 (Direito Processual Civil) - Prof. João Liberato",
        "ch": "TecConcursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8XD",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2012&publication_year%5B%5D=2013&publication_year%5B%5D=2014&publication_year%5B%5D=2015&publication_year%5B%5D=2016&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=20266&subject_ids%5B%5D=20267&subject_ids%5B%5D=20268&subject_ids%5B%5D=20269",
    "links": [],
    "res": [
      "m46"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 47,
    "c": "M47",
    "marco": 3,
    "tipo": "meta",
    "d": "MAT",
    "nome": "",
    "tag": "ALTA",
    "top": "Regra de Três + Médias + Juros Simples",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Regra de três simples/composta, média aritmética simples/ponderada, juros simples",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "J = C×i×t (fórmula). Não tem juros sobre juros (composto não cai). Regra de três composta: identifique direta/inversamente proporcional.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=LNSMWZjY1dA",
        "t": "Matemática VUNESP 2026 | Regra de Três Simples: questões que mais caem | Dominando a Vunesp",
        "ch": "Prof. Edu Tavares | Matemática do Zero à Aprovação"
      },
      {
        "u": "https://www.youtube.com/watch?v=puCoZOsNoxg",
        "t": "Matemática VUNESP 2026 | Média Aritmética: 95% errou a questão (inclusive eu) | Dominando a Vunesp",
        "ch": "Prof. Edu Tavares | Matemática do Zero à Aprovação"
      },
      {
        "u": "https://www.youtube.com/watch?v=C7lsKfVxX2g",
        "t": "Juros Simples : Teoria e Exercícios",
        "ch": "Matemática Pra Passar"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8cm",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=13&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2012&publication_year%5B%5D=2013&publication_year%5B%5D=2014&publication_year%5B%5D=2015&publication_year%5B%5D=2016&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=20319&subject_ids%5B%5D=20320&subject_ids%5B%5D=20322",
    "links": [],
    "res": [
      "m47"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 48,
    "c": "M48",
    "marco": 3,
    "tipo": "meta",
    "d": "NCGJ",
    "nome": "",
    "tag": "ALTA",
    "top": "Cap. II Seção I + Cap. III Seções I, II, V",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 10,
    "art": "NSCGJ Tomo I: Cap. II Seção I Subseções I e II (Arts. 5º a 18) + Cap. III Seções I (arts. 26 a 27), II (arts. 28 a 29), V (arts. 46 a 62)",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: atividade correicional — correição ordinária, correição extraordinária e visita correicional, com seus prazos e formas de anúncio (2023).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=QKdJxSX5GLo",
        "t": "TJSP - Normas da Corregedoria - Art. 5º  (Função Correcional - Atribuições)",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8ix",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=43&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=18015",
    "links": [],
    "res": [
      "m48"
    ],
    "lei": [
      "nscgj"
    ],
    "qi": 30
  },
  {
    "n": 49,
    "c": "M49",
    "marco": 3,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 7",
    "tag": "",
    "top": "Revisão das Metas 43 a 48",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões Proc. Civil. Compare citação CPC vs CPP. Releia Adm. Pública CF. Revise pontuação.",
    "como": "",
    "dica": "Teste: escreva de memória o que significa a sigla LIMPE (princípios da Administração Pública, art. 37, caput, da CF) e requisitos tutela urgência vs evidência (Do CPC). Se travou, releia.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T07",
      "tema": "A violência doméstica e o papel do Estado na proteção das vítimas",
      "dica": "Cite a Lei Maria da Penha. Use argumento jurídico (proteção integral) e argumento social (subnotificação). Conclua retomando a tese (prevenção e rede de apoio podem aparecer como reflexão final), sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      43,
      48
    ],
    "qi": 0
  },
  {
    "n": 50,
    "c": "M50",
    "marco": 3,
    "tipo": "meta",
    "d": "NCGJ",
    "nome": "",
    "tag": "ALTA",
    "top": "Cap. III Seções VI, VII, VIII Subseções I, II e III (Arts. 63 a 99)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 10,
    "art": "NSCGJ Tomo I, Cap. III, Seções VI (63 a 79), VII (80 a 86), VIII Subseções I, II e III (87 a 99)",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — bloco cobrado em quase todos os anos: protocolo de petições intermediárias e protocolo integrado, físico e eletrônico (2023 e reaplicação de 2024); vista, carga, retirada e consulta de autos (2017, 2021 e 2023); mandados e ofícios, inclusive quem pode assiná-los (2021 e 2025).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Seção VIII: prazos internos do cartório ≠ prazos processuais do CPC. Leia subseções I e II com atenção. OBS: DO ART. 63 A 79 E 80 A 86 JÁ TEM NA META 48 (TECCONCURSOS). NESSA FICOU O FILTRO DO ART. 87 A 99 (TECCONCURSOS) DO QCONCURSOS JÁ EXPLICAMOS ANTERIORMENTE AS LIMITAÇÕES DA PLATAFORMA NOS FILTROS",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=WbTA_dCwPzY",
        "t": "TJSP - Normas da Corregedoria - Arts. 63 a 74 (Dos Livros Obrigatórios)",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8kT",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=43&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=18015",
    "links": [],
    "res": [
      "m50"
    ],
    "lei": [
      "nscgj"
    ],
    "qi": 30
  },
  {
    "n": 51,
    "c": "M51",
    "marco": 3,
    "tipo": "meta",
    "d": "LP",
    "nome": "",
    "tag": "ALTA",
    "top": "Colocação Pronominal + Estruturação do Texto",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 20,
    "art": "",
    "est": "Próclise/mesóclise/ênclise. Estruturação: relações entre ideias, coesão (anáfora, catáfora, substituição, conectivos).",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "NUNCA inicie frase com pronome oblíquo átono. 'Me disseram' = ERRADO. Negação/advérbio/relativo ATRAEM pronome.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=6zsVwix7Uh0",
        "t": "COLOCAÇÃO PRONOMINAL (Para Concurso)",
        "ch": "Prof. Álvaro Ferreira"
      },
      {
        "u": "https://www.youtube.com/watch?v=_v3wOabOeQU",
        "t": "CONCURSO GCM SP 2026 | Redação: Estrutura Perfeita Vunesp!",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8oG",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=1&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=16173",
    "links": [],
    "res": [
      "m51"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 52,
    "c": "M52",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Proc. Comum — Petição a Contestação (Arts. 318-345)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPC, Arts. 318-345",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; a banca costuma trazer casos práticos de Vara Cível que exigem esses artigos de forma indireta. Como está no edital, faça a leitura da lei seca.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Improcedência liminar (332): julga IMPROCEDENTE sem citar réu. 'Possível julgar mérito sem citar?' SIM. Reconvenção: NA CONTESTAÇÃO.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=QWed3Pg4fEc",
        "t": "TUDO sobre o Procedimento Comum | Esquema + Legislação",
        "ch": "Ricardo Torques"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8r8",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19010&subject_ids%5B%5D=19050",
    "links": [],
    "res": [
      "m52"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 53,
    "c": "M53",
    "marco": 3,
    "tipo": "meta",
    "d": "INF",
    "nome": "",
    "tag": "ALTA",
    "top": "Internet + MS Teams + OneDrive",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 15,
    "art": "",
    "est": "Navegação, URL, links, sites, busca. Teams: chats, chamadas de áudio e vídeo, criação de grupos, agendamento de reuniões e gravação, além do trabalho em equipe integrado com Word, Excel, PowerPoint, SharePoint e OneNote. OneDrive: armazenamento e compartilhamento de arquivos.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Teams: gravação notifica TODOS. OneDrive: 5GB gratuito, 1TB com Microsoft 365. Arquivos sincronizados = acesso offline.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=6Fnxxe6-Xj0",
        "t": "Concurso TJSP 2024 Informática: Conceitos de Internet",
        "ch": "Nova Concursos"
      },
      {
        "u": "https://www.youtube.com/watch?v=Nj5pAJPAVHg",
        "t": "Concurso TJSP 2024 Informática: Microsoft Teams do zero",
        "ch": "Nova Concursos"
      },
      {
        "u": "https://www.youtube.com/watch?v=KNNXkCu42AI",
        "t": "Concurso Escrevente TJSP 2025: Informática - ONEDRIVE",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8sn",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=46&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=237&subject_ids%5B%5D=11846&subject_ids%5B%5D=27888",
    "links": [],
    "res": [
      "m53a",
      "m53b"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 54,
    "c": "M54",
    "marco": 3,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Réplica a Saneamento + Revelia (Arts. 346-357)",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 15,
    "art": "CPC, Arts. 346-357",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas. Ainda assim, leia a lei seca: revelia e suas exceções é tema clássico de comparação com o processo penal.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "A presunção de veracidade NÃO se aplica nas hipóteses do art. 345: pluralidade de réus com um deles contestando, direito indisponível, falta de instrumento indispensável à prova do ato e alegações inverossímeis ou contrariadas pelas provas dos autos. Não confunda: no réu citado por edital ou por hora certa o que há é nomeação de curador especial (art. 72, II), que contesta e afasta os efeitos práticos da revelia.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=CDsxcUjNPHM",
        "t": "Revelia | Processo Civil Desenhado",
        "ch": "Ricardo Torques"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8va",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19048&subject_ids%5B%5D=19103&subject_ids%5B%5D=19153",
    "links": [],
    "res": [
      "m54"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 55,
    "c": "M55",
    "marco": 3,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 8",
    "tag": "",
    "top": "Revisão das Metas 50 a 54",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões Proc. Civil. Revise Normas CGJ. Releia colocação pronominal. Compare revelia CPC vs CPP.",
    "como": "",
    "dica": "Teste: requisitos petição inicial? Indeferimento? Improcedência liminar? Efeitos revelia e exceções?",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T08",
      "tema": "Sustentabilidade e consumo consciente: responsabilidade do indivíduo e do Estado",
      "dica": "Equilibre responsabilidade individual (escolhas de consumo) e coletiva (regulação, incentivos). Use exemplos concretos de políticas públicas brasileiras."
    },
    "faixa": [
      50,
      54
    ],
    "qi": 0
  },
  {
    "n": 56,
    "c": "M56",
    "marco": 3,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO GERAL 2",
    "tag": "",
    "top": "Revisão Metas 38-54 (Banco de Erros)",
    "modo": "Revisão Geral",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "Banco de Erros: 3 piores temas desde Meta 36. Refaça APENAS questões erradas. Se >70%: mantenha. Se <60%: pare e reforce.",
    "como": "",
    "dica": "~60% do conteúdo estudado. Temas fracos agora = fracos na prova. Dedique revisão inteira aos 3 piores. Nada de conteúdo novo.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "faixa": [
      38,
      54
    ],
    "qi": 0
  },
  {
    "n": 57,
    "c": "M57",
    "marco": 3,
    "tipo": "sim",
    "d": "",
    "nome": "SIMULADO — MARCO 3",
    "tag": "",
    "top": "35 questões cronometradas",
    "modo": "Simulado",
    "tempo": "2h30",
    "min": 35,
    "art": "",
    "est": "35 questões: 8 Português + 15 Direito + 12 Gerais (mesma proporção da prova real). Cronometre 2h30. Meta: 70%+.",
    "como": "",
    "dica": "Se <70%: onde perdeu? Português=foque concordância/crase. Direito=releia artigos (maioria dos erros=prazos/verbos nucleares).",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 58,
    "c": "M58",
    "marco": 4,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Provas — Parte 1 (Arts. 358-404)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "CPC, Arts. 358-404",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: produção antecipada da prova e suas hipóteses de cabimento (art. 381 — 2023).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Ônus (373): autor prova fato constitutivo, réu prova impeditivo/modificativo/extintivo. 'Quem prova prescrição?' Réu (fato extintivo).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=kB81-xVUX2w",
        "t": "Provas | Processo Civil Desenhado",
        "ch": "Ricardo Torques"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8xw",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19215&subject_ids%5B%5D=19248",
    "links": [],
    "res": [
      "m58"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 59,
    "c": "M59",
    "marco": 4,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Provas — Parte 2 (Arts. 405-463)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "CPC, Arts. 405-463",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas. Como está no edital, faça a leitura da lei seca, com atenção à prova documental e às testemunhas impedidas.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Doc. PARTICULAR: presume-se verdadeiro ao signatário (408). Doc. PÚBLICO: faz prova da sua formação e dos fatos que o escrivão, o chefe de secretaria, o tabelião ou o servidor declarar que ocorreram em sua presença (405). Testemunha impedida: cônjuge, companheiro, ascendente e descendente em qualquer grau e colateral até o 3º grau (447, § 2º, I).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=J0n49AjgMFI",
        "t": "08.01.11.07. Da Prova Documental (arts. 405 a 438) (Direito Processual Civil) Prof. João Liberato",
        "ch": "TecConcursos"
      },
      {
        "u": "https://www.youtube.com/watch?v=I_6PWwBvjk4",
        "t": "08.01.11.09. Da Prova Testemunhal (arts. 442 a 463) Parte 1 - Prof. João Liberato",
        "ch": "TecConcursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G8yN",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19215&subject_ids%5B%5D=19248",
    "links": [],
    "res": [
      "m59"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 60,
    "c": "M60",
    "marco": 4,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "ALTA",
    "top": "Provas pt 3 + Sentença + Coisa Julgada (Arts. 464 a 538)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "CPC, Arts. 464 a 538",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas. Como está no edital, faça a leitura da lei seca, com atenção à sentença (485 e 487) e à coisa julgada.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Art. 489 §1º: NÃO fundamentada = conceitos vagos, motivos genéricos, não enfrenta argumentos. Art. 485 (sem mérito) vs 487 (com mérito): decore hipóteses.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=TS_sX5Xmc4U",
        "t": "08.01.11.10. Da Prova Pericial (art. 464-480) Parte 1 (Direito Processual Civil) Prof. João Liberato",
        "ch": "TecConcursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G90k",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19269&subject_ids%5B%5D=19533&subject_ids%5B%5D=20270",
    "links": [],
    "res": [
      "m60"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 61,
    "c": "M61",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "ALTA",
    "top": "Proc. Ordinário (Arts. 394 a 405)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPP, Arts. 394-405",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: rejeição da denúncia e absolvição sumária (arts. 395 e 397 — 2021); procedimento comum ordinário e sumário, com o número de testemunhas de cada um (2017, 2021, 2023, 2024, reaplicação de 2024 e 2025).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Ordinário: ≥4 anos = 8 testemunhas. Sumário: <4 anos = 5. Sumaríssimo: ≤2 anos = 3. Decore: 'O-S-S = 8-5-3'.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=ar2n3ZmUJwc",
        "t": "Procedimentos Comuns no Direito Processual Penal - Introdução:  Profª. Lorena Ocampos",
        "ch": "Gran Jurídico"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G92j",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=8056",
    "links": [],
    "res": [
      "m61"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 62,
    "c": "M62",
    "marco": 4,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 9",
    "tag": "",
    "top": "Revisão Metas 58-61",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões sobre provas do CPC e proc. ordinário CPP. Monte quadro: extinção sem mérito (485) vs com mérito (487). Compare testemunhas 8-5-3. (O-S-S)",
    "como": "",
    "dica": "Sentença e coisa julgada (arts. 485, 487, 489 e 502 a 508) não tiveram questão específica nas provas de 2017 a 2025 analisadas, mas sustentam todo o procedimento comum: domine as hipóteses de extinção sem e com resolução de mérito.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T09",
      "tema": "O acesso à justiça como direito fundamental no Brasil",
      "dica": "Aborde obstáculos reais (custo, distância, linguagem jurídica). Cite instrumentos constitucionais de acesso (defensoria pública, juizados especiais). Conclua retomando a tese, sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      58,
      61
    ],
    "qi": 0
  },
  {
    "n": 63,
    "c": "M63",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Tribunal do Júri — 1ª Fase (Arts. 406 a 421)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPP, Arts. 406 a 421",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: procedimento da 1ª fase do júri e as decisões possíveis — pronúncia, impronúncia, absolvição sumária e desclassificação (arts. 413 a 419 — 2021, 2023 e reaplicação de 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Pronúncia (art. 413) exige prova da materialidade e INDÍCIOS suficientes de autoria — é juízo de admissibilidade, não de certeza. Impronúncia = ausência desses requisitos (art. 414). Absolvição sumária (art. 415) = PROVA da inexistência do fato, de não ser o acusado autor ou partícipe, de que o fato não constitui infração penal ou de causa de isenção de pena ou de exclusão do crime. Desclassificação (art. 419). Para a prova, dúvida na 1ª fase leva à PRONÚNCIA; guarde apenas que a fórmula “in dubio pro societate” vem sendo criticada e afastada em julgados recentes do STF.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=zE-TFjRtQAk",
        "t": "",
        "ch": ""
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G93Q",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=6990",
    "links": [],
    "res": [
      "m63"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 64,
    "c": "M64",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Tribunal do Júri — Plenário e Sentença (Arts. 422 a 497)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 10,
    "art": "CPP, Arts. 422 a 497",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: composição do Tribunal do Júri e formação do Conselho de Sentença (2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Tribunal do Júri = 1 juiz togado + 25 jurados sorteados; 7 deles formam o Conselho de Sentença (art. 447). 3 recusas imotivadas por parte (art. 468). Votação: 4 absolverem = encerra sem contar votos (sigilo).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=pvSUA-ujK-Y",
        "t": "Concurso TJ MG   |  Júri -  Processual Penal  com Geilza Diniz",
        "ch": "Gran Cursos Online"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G93Q",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=6990",
    "links": [],
    "res": [
      "m64"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 65,
    "c": "M65",
    "marco": 4,
    "tipo": "meta",
    "d": "RL",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Diagramas Lógicos + Sequências",
    "modo": "Teoria",
    "tempo": "2h30",
    "min": 15,
    "art": "",
    "est": "Diagramas Euler-Venn: todo, nenhum, algum. Sequências numéricas (PA, PG, Fibonacci) e figurais.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "'Todo A é B' = A dentro de B. 'Nenhum A é B' = separados. Sequências: razão constante=PA, quociente constante=PG.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=l_20kYKKZk0",
        "t": "Aprenda DIAGRAMAS LÓGICOS em 30 minutos - Aula 1",
        "ch": "Felippe Loureiro"
      },
      {
        "u": "https://www.youtube.com/watch?v=Yn9EguapweY",
        "t": "(TJ-SP 2025) Raciocínio Lógico Vunesp 2025: Sequências Númericas (teoria e questões)",
        "ch": "Prof. Edu Tavares | Matemática do Zero à Aprovação"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G95A",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=4&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=15450&subject_ids%5B%5D=15463",
    "links": [],
    "res": [
      "m65"
    ],
    "lei": [],
    "qi": 30
  },
  {
    "n": 66,
    "c": "M66",
    "marco": 4,
    "tipo": "meta",
    "d": "NCGJ",
    "nome": "",
    "tag": "ALTA",
    "top": "Cap. III Seções IX-XII (Arts. 103 a 111)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 10,
    "art": "NSCGJ Tomo I, Cap. III, Seções IX a XII",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: certidões (2024); escrituração de autos e termos — abreviaturas, assinaturas e correção de erros na escrituração (2017, 2023 e reaplicação de 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Certidões: escrevente certifica o que CONSTA dos autos, NÃO a verdade dos fatos.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=GNUo7_1q5uA",
        "t": "TJSP - Normas da Corregedoria - Arts. 103 a 104-A (Papeis em Andamento ou Findos e Certidões)",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G97C",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=43&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=18015",
    "links": [],
    "res": [
      "m66"
    ],
    "lei": [
      "nscgj"
    ],
    "qi": 30
  },
  {
    "n": 67,
    "c": "M67",
    "marco": 4,
    "tipo": "meta",
    "d": "NCGJ",
    "nome": "",
    "tag": "ALTA",
    "top": "Cap. III Seções XIII-XIX (Arts. 112 a 189-G)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 10,
    "art": "NSCGJ Tomo I, Cap. III, Seções XIII-XIX",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — os temas de processo eletrônico já cobrados pela VUNESP (documentos institucionais padronizados, modelos de grupo e aplicação das regras do processo físico ao digital — 2017, 2023 e reaplicação de 2024) estão no Cap. XI (arts. 1.228, 1.237 e 1.238, Meta 84), e o Sistema Informatizado Oficial está no Cap. III, Seção V (Meta 48). Neste bloco (Seções XIII a XIX), o foco são comunicações oficiais, cartas, intimações, audiências, consulta e carga dos autos, desentranhamento e arquivamento.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Seção XVI = audiências (inclusive gravação) e Seção XVII = consulta e carga dos autos; RPVs e precatórios ficam no Cap. XI, Seção VII (Meta 84). Números que a banca troca: carta precatória em 3 vias (art. 122), carga rápida por 1 hora (art. 165) e vedação de precatória para oitivas em outras comarcas de SP, salvo exceções (art. 156-A). eProc substitui gradualmente o SAJ/e-SAJ (Res. 963/2025).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=XaDx3XcfKCg",
        "t": "TJSP - Normas da Corregedoria - Arts. 112 a 121 (Prática de Atos por Meio Eletrônico)",
        "ch": "Prof. Emerson Bruno"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G983",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=43&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=18015",
    "links": [],
    "res": [
      "m67"
    ],
    "lei": [
      "nscgj"
    ],
    "qi": 30
  },
  {
    "n": 68,
    "c": "M68",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Proc. Sumário + Restauração de Autos (Arts. 531 a 538 e 541 a 548)",
    "modo": "Legislação",
    "tempo": "2h",
    "min": 15,
    "art": "CPP, Arts. 531 a 538 e 541 a 548",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: processo de restauração de autos extraviados ou destruídos (arts. 541 a 548 — 2023); procedimento sumário (arts. 531 a 538 — 2021 e 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Sumário CPP ≠ sumaríssimo JECRIM. Sumário (5 test.) vs Sumaríssimo (3 test.). A Vunesp troca os dois.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=bTagCw7fbkw",
        "t": "PROCESSO e PROCEDIMENTOS em PROCESSO PENAL | Aula 01 | Disposições Gerais",
        "ch": "Ana Carolina Aidar"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9NO",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=6423&subject_ids%5B%5D=6944",
    "links": [],
    "res": [
      "m68"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 69,
    "c": "M69",
    "marco": 4,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 10",
    "tag": "",
    "top": "Revisão Metas 63-68",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Refaça questões Júri CPP. Releia Normas IX-XIX. Compare sumário vs sumaríssimo.",
    "como": "",
    "dica": "Quadro final procedimentos: Ordinário (≥4a, 8) / Sumário (<4a, 5) / Sumaríssimo (≤2a, 3) / Júri (dolosos vida). Vale ouro.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T10",
      "tema": "Fake news e os limites da liberdade de expressão",
      "dica": "Diferencie liberdade de expressão de desinformação. Use o art. 5.o da CF como base. Educação midiática e responsabilização de plataformas podem entrar como argumentos; conclua retomando a tese, sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      63,
      68
    ],
    "qi": 0
  },
  {
    "n": 70,
    "c": "M70",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Recursos — Parte 1 (Arts. 574 a 609)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 15,
    "art": "CPP, Arts. 574 a 609",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: disposições gerais dos recursos e o direito de recorrer (arts. 574 a 580 — 2017); recursos em espécie do CPP, com destaque para o RESE e a apelação e seus prazos (2021).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "RESE: 5 DIAS, TAXATIVO, tem retratação. Apelação penal: 5 DIAS, SEM retratação. Compare: apelação CPC = 15 dias ÚTEIS.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=2E3uOIZE8Y0",
        "t": "Concurso TJ SP:  Aulão de Processo Penal - Recursos! ⚖",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9Pb",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=162&subject_ids%5B%5D=20566&subject_ids%5B%5D=20567&subject_ids%5B%5D=20571&subject_ids%5B%5D=20575",
    "links": [],
    "res": [
      "m70"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 71,
    "c": "M71",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Recursos — Parte 2 (Arts. 610 a 667)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "CPP, Arts. 610 a 667",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: revisão criminal (arts. 621 a 631 — 2017 e 2023) e habeas corpus (arts. 647 a 667 — 2021 e 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Revisão criminal: SEMPRE pro reo, NUNCA contra. Qualquer tempo. HC: qualquer pessoa impetra, sem advogado. 'Cabe revisão para agravar pena?' JAMAIS.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=BqmQV6Z5J1c",
        "t": "Gabaritando Recursos em Processo Penal - OAB 39",
        "ch": "Estratégia OAB"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9Qj",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=162&subject_ids%5B%5D=20566&subject_ids%5B%5D=20567&subject_ids%5B%5D=20571&subject_ids%5B%5D=20575",
    "links": [],
    "res": [
      "m71"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 72,
    "c": "M72",
    "marco": 4,
    "tipo": "meta",
    "d": "DPP",
    "nome": "",
    "tag": "ALTA",
    "top": "JECrim — Lei 9.099/95 (Arts. 60 a 83, 88 e 89)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "Lei 9.099/95, Arts. 60 a 83 + 88 + 89",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: competência do JECrim e infração de menor potencial ofensivo (arts. 60 e 61), transação penal (art. 76), representação (art. 88) e suspensão condicional do processo (art. 89) — 2017, 2021, reaplicação de 2024 e 2025.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Transação penal (76): MP propõe restritiva/multa. Sursis (89): pena MÍNIMA ≤1 ano (não máxima!). A Vunesp troca 'mínima' por 'máxima'.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=ptauf-jsxe0",
        "t": "JECRIM Juizado Especial Criminal (Lei 9.099/95) - Live #004 Concurso Polícia Civil",
        "ch": "Prof. Diego Pureza"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9Rr",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=10&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=6423",
    "links": [],
    "res": [
      "m72"
    ],
    "lei": [
      "cpp"
    ],
    "qi": 30
  },
  {
    "n": 73,
    "c": "M73",
    "marco": 4,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 11",
    "tag": "",
    "top": "Revisão Metas 70-72",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Monte tabela recursos penais: RESE (5d, retratação), Apelação (5d, sem retratação), Embargos (2d), Revisão (qualquer tempo, pro reo). Compare JECrim vs CPP.",
    "como": "",
    "dica": "Domine recursos penais AGORA para depois fazer comparativo completo com cíveis (Marco 5). Foco: prazos e efeitos.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T11",
      "tema": "Desigualdade social e o papel da educação na transformação estrutural",
      "dica": "Argumente com dados de desigualdade (Gini, PNAD). Cite o art. 205 da CF. Conclua retomando a tese (a educação pública de qualidade como caminho de longo prazo), sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      70,
      72
    ],
    "qi": 0
  },
  {
    "n": 74,
    "c": "M74",
    "marco": 4,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO GERAL 3",
    "tag": "",
    "top": "Revisão Metas 58-72 (Banco de Erros)",
    "modo": "Revisão Geral",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "Banco de Erros: 3 piores temas desde Meta 56. Refaça questões. Se >75%: excelente. Se <65%: reforço urgente.",
    "como": "",
    "dica": "~80% do conteúdo estudado. Revisão > conteúdo novo agora. Cada hora revisando vale mais que cada hora de conteúdo novo.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "faixa": [
      58,
      72
    ],
    "qi": 0
  },
  {
    "n": 75,
    "c": "M75",
    "marco": 4,
    "tipo": "sim",
    "d": "",
    "nome": "SIMULADO — MARCO 4",
    "tag": "",
    "top": "40 questões cronometradas",
    "modo": "Simulado",
    "tempo": "3h",
    "min": 40,
    "art": "",
    "est": "40 questões: 9 Português + 17 Direito + 14 Gerais (mesma proporção da prova real). Cronometre 3h. Meta: 75%+.",
    "como": "",
    "dica": "Análise: tempo/questão (ideal ~2min Gerais, ~3min Direito). Em quais matérias errou? Desconhecimento ou desatenção?",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 76,
    "c": "M76",
    "marco": 5,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Recursos CPC (Arts. 994 a 1.026)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 20,
    "art": "CPC, Arts. 994 a 1.026",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica de recursos do CPC nas provas de 2017 a 2025 analisadas (os recursos cobrados foram os do CPP). Como está no edital, leia a lei seca e foque nos prazos.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "COMPARAÇÃO: Apelação CPC=15 dias ÚTEIS. Apelação CPP=5 dias CORRIDOS. Embargos CPC=5 dias ÚTEIS. Embargos CPP=2 dias CORRIDOS. Monte tabela.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=SOBitTlmMlA",
        "t": "Processo Civil - Recursos",
        "ch": "Thállius Moraes - Simplifica"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9UW",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19280&subject_ids%5B%5D=19281&subject_ids%5B%5D=19908&subject_ids%5B%5D=19910&subject_ids%5B%5D=19911&subject_ids%5B%5D=19912&subject_ids%5B%5D=19916",
    "links": [],
    "res": [
      "m76"
    ],
    "lei": [
      "cpc"
    ],
    "qi": 30
  },
  {
    "n": 77,
    "c": "M77",
    "marco": 5,
    "tipo": "meta",
    "d": "DPC",
    "nome": "",
    "tag": "MÉDIA",
    "top": "JEC Cível (Lei 9.099 Arts. 3 a 19) + Juizados Especiais da Fazenda Pública Lei 12.153",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 15,
    "art": "Lei 9.099/95 Arts. 3 a 19 + Lei 12.153/2009",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — cobrado em todos os anos analisados: competência do Juizado Especial Cível (art. 3º — 2017, 2021, 2023 e 2025); quem pode ser parte no JEC (art. 8º — 2017); Juizado Especial da Fazenda Pública e o pedido de uniformização de interpretação de lei (Lei 12.153/2009 — 2024 e reaplicação de 2024).",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "JEC: NÃO podem ser partes PJ de direito público, incapaz, preso. Fazenda: até 60 SM contra estados/municípios. 'Ação de 30 SM contra Estado: JEC Fazenda.'",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=p9yCAWvo02k",
        "t": "Processo Civil - Juizado Especial Cível e Juizado Especial da Fazenda Pública",
        "ch": "Thállius Moraes - Simplifica"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9wS",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=560&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=19001&subject_ids%5B%5D=19002",
    "links": [],
    "res": [
      "m77"
    ],
    "lei": [
      "l9099",
      "l12153"
    ],
    "qi": 30
  },
  {
    "n": 78,
    "c": "M78",
    "marco": 5,
    "tipo": "meta",
    "d": "LI",
    "nome": "",
    "tag": "ALTA",
    "top": "Res. 850/2021 + Res. 963/2025 + LC 1.111/2010 (são leis curtas que da para matar em uma leitura)",
    "modo": "Legislação",
    "tempo": "4h30",
    "min": 10,
    "art": "Res. TJSP 850/2021 + 963/2025 + LC 1.111/2010",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: teletrabalho, seus requisitos e a vedação durante o estágio probatório (Res. 850/2021 — 2025); implantação do sistema eproc e o protocolo no novo sistema (Res. 963/2025 — 2025); requisitos para o cargo de chefe de seção judiciária (LC 1.111/2010 — 2025). Atenção: tema novo, cobrado a partir de 2025.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Teletrabalho: a produtividade do servidor deve ser SUPERIOR à aferida na atividade presencial da unidade (art. 18, sem percentual fixo). PEGADINHA: a vedação alcança apenas quem está no PRIMEIRO ANO do estágio probatório (art. 11, VI), e não todo o estágio probatório. Outras vedações do art. 11: penalidade disciplinar nos 2 anos anteriores, desligamento do teletrabalho ou relotação por remoção nos últimos 6 meses e ausência de conceito positivo na avaliação mais recente. eProc substitui gradualmente o SAJ/e-SAJ.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=PonuVAGYng8",
        "t": "ESCREVENTE TJSP 2025 - LEGISLAÇÃO INTERNA - RESOLUÇÃO 850/2021 - TELETRABALHO",
        "ch": "Professor Cenoura | Direito Penal"
      },
      {
        "u": "https://www.youtube.com/watch?v=CFqnHTGd0sI",
        "t": "Resolução 963/2025 | Questão CERTA na Vunesp! GABARITANDO EPROC TJ-SP!",
        "ch": "CONCURSEIRO ON - A sua conexão com o seu futuro!"
      },
      {
        "u": "https://www.youtube.com/watch?v=bTbbDIfQbxA",
        "t": "🔴 Escrevente TJ SP 2025: Legislação Interna - Parte Nova da Lei 1.111/10",
        "ch": "NEAF Concursos"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6G9y0",
    "qc": "",
    "links": [],
    "res": [
      "m78a",
      "m78b",
      "m78c"
    ],
    "lei": [
      "res850",
      "res963",
      "lc1111"
    ],
    "qi": 34
  },
  {
    "n": 79,
    "c": "M79",
    "marco": 5,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 12",
    "tag": "",
    "top": "Revisão Metas 76-78",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Compare recursos CPC vs CPP. Releia JEC Cível vs Fazenda. Revise Legislação Interna.",
    "como": "",
    "dica": "Legislação Interna = tema MAIS novo. A Vunesp cobra pelo menos 2-3 questões. Leia com MUITA atenção.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "extra": {
      "tid": "T12",
      "tema": "Segurança pública e os direitos fundamentais: como equilibrar",
      "dica": "Aborde o conflito entre segurança coletiva e direitos individuais. Cite exemplos de políticas de segurança bem-sucedidas. Defenda como tese uma abordagem que respeite direitos e reduza a violência e conclua retomando-a, sem proposta de intervenção no estilo ENEM."
    },
    "faixa": [
      76,
      78
    ],
    "qi": 0
  },
  {
    "n": 80,
    "c": "M80",
    "marco": 5,
    "tipo": "meta",
    "d": "LI",
    "nome": "",
    "tag": "MÉDIA",
    "top": "RI TJSP — Parte 1 (Arts. 1 a 100)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 10,
    "art": "Regimento Interno TJSP, Arts. 1 a 100",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: sessões, reuniões, audiências, pauta e ordem dos trabalhos, com a regra sobre julgamento na ausência do relator (2025). Tema recente no edital.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Presidente: administra, representa, convoca. Corregedor: fiscaliza 1ª instância. Órgão Especial: 25 desembargadores (art. 8º), com atribuições delegadas pelo Tribunal Pleno (a CF, art. 93, XI, permite criá-lo nos tribunais com mais de 25 julgadores).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=CQO1N88WvRE",
        "t": "CONCURSO TJSP: REGIMENTO INTERNO (DOUGLAS OLIVEIRA)",
        "ch": "Direção Concursos"
      }
    ],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [
      "m80a",
      "m80b"
    ],
    "lei": [
      "ritjsp"
    ],
    "qi": 30
  },
  {
    "n": 81,
    "c": "M81",
    "marco": 5,
    "tipo": "meta",
    "d": "LI",
    "nome": "",
    "tag": "MÉDIA",
    "top": "RI TJSP — Parte 2 (Arts. 101 a 200)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 10,
    "art": "Regimento Interno TJSP, Arts. 101 a 200",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; o Regimento Interno só passou a ser cobrado a partir de 2025. Leia a lei seca e use as questões inéditas.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Distribuição: por sorteio, de forma ininterrupta e paritária, respeitadas prevenções e impedimentos (art. 181). Prevenção (art. 105): a CÂMARA ou o GRUPO que primeiro conhecer da causa fica prevento para os feitos conexos e os recursos; o RELATOR do primeiro recurso fica prevento para os recursos seguintes no mesmo processo ou em conexos (§ 3º).",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=K6lRxm0fsRg",
        "t": "REGIMENTO INTERNO TJ-SP: PONTOS CHAVE para GABARITAR a Prova! (Guia Completo para o Concurso)",
        "ch": "CONCURSEIRO ON - A sua conexão com o seu futuro!"
      }
    ],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [
      "m81a",
      "m81b"
    ],
    "lei": [
      "ritjsp"
    ],
    "qi": 30
  },
  {
    "n": 82,
    "c": "M82",
    "marco": 5,
    "tipo": "meta",
    "d": "LI",
    "nome": "",
    "tag": "MÉDIA",
    "top": "RI TJSP — Parte 3 (Arts. 201 a 290)",
    "modo": "Legislação",
    "tempo": "3h",
    "min": 10,
    "art": "Regimento Interno TJSP, Arts. 201 a 290",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; o Regimento Interno só passou a ser cobrado a partir de 2025. Leia a lei seca e use as questões inéditas.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "IRDR: exige, SIMULTANEAMENTE, efetiva repetição de processos sobre a mesma questão unicamente de direito e risco de ofensa à isonomia e à segurança jurídica (CPC, art. 976). Quem suscita: juiz, relator, partes, MP, Defensoria.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=GRDMZxkSRcY",
        "t": "",
        "ch": ""
      }
    ],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [
      "m82"
    ],
    "lei": [
      "ritjsp"
    ],
    "qi": 30
  },
  {
    "n": 83,
    "c": "M83",
    "marco": 5,
    "tipo": "meta",
    "d": "NCGJ",
    "nome": "",
    "tag": "ALTA",
    "top": "Cap. XI Seções I a III (Arts. 1.189 a 1.219)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 10,
    "art": "NSCGJ Tomo I, Cap. XI, Seções I a III",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — este bloco trata do processo eletrônico: conceito e sistema (Seção I), peticionamento eletrônico e indisponibilidade do sistema (Seção II) e distribuição (Seção III). Precatórios e RPVs ficam na Seção VII, estudada na Meta 84. Como está no edital e é rotina de cartório, faça a leitura das seções indicadas.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Petição eletrônica é tempestiva se recebida até as 24h do último dia do prazo, pela hora oficial de Brasília (art. 1.198, § 1º). Indisponibilidade do sistema prorroga para o 1º dia útil seguinte o prazo que vence no dia se passar de 60 minutos (ininterruptos ou não) entre 6h e 23h, ou se ocorrer entre 23h e 24h (art. 1.205, I); entre 0h e 6h, não prorroga (§ 1º).",
    "vid": [],
    "tec": "https://www.tecconcursos.com.br/s/Q6GA2f",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=43&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2017&publication_year%5B%5D=2018&publication_year%5B%5D=2019&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&scholarity_ids%5B%5D=2&sort=newest&subject_ids%5B%5D=18015",
    "links": [],
    "res": [
      "m83"
    ],
    "lei": [
      "nscgj"
    ],
    "qi": 30
  },
  {
    "n": 84,
    "c": "M84",
    "marco": 5,
    "tipo": "meta",
    "d": "NCGJ",
    "nome": "",
    "tag": "ALTA",
    "top": "Cap. XI Seções IV a VII (Arts. 1.220 a 1.301)",
    "modo": "Legislação",
    "tempo": "2h30",
    "min": 10,
    "art": "NSCGJ Tomo I, Cap. XI, Seções IV a VII",
    "est": "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: documentos institucionais padronizados, modelos de grupo e aplicação subsidiária das regras gerais das Normas ao processo eletrônico (arts. 1.228, 1.237 e 1.238, na Seção VI — 2017, 2023 e reaplicação de 2024). Não localizamos questão específica de precatórios e RPVs (Seção VII) nas provas analisadas. Como está no edital, faça a leitura das seções indicadas.",
    "como": "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo.",
    "dica": "Alimentares têm PREFERÊNCIA sobre os comuns. Sequestro: cabe na preterição do direito de precedência do credor ou quando o ente não aloca no orçamento o valor necessário ao pagamento (CF, art. 100, §6º) — não é simples atraso. ‘Medida cabível?’ Sequestro. Obs: não tem aula disponível nem questões no TEC e QConcursos– Foque nos resumos e questões inéditas",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [
      "nscgj"
    ],
    "qi": 30
  },
  {
    "n": 85,
    "c": "M85",
    "marco": 5,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 13",
    "tag": "",
    "top": "Revisão Metas 80-84",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Releia RI TJSP (competências). Revise Normas Cap. XI. Compare recursos CPC vs CPP (tabela definitiva).",
    "como": "",
    "dica": "Legislação + Normas = MENOS questões disponíveis. Leia lei SECA. Faça FLASHCARDS, MAPAS MENTAIS E AS QUESTÕES INÉDITAS.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "faixa": [
      80,
      84
    ],
    "qi": 0
  },
  {
    "n": 86,
    "c": "M86",
    "marco": 5,
    "tipo": "meta",
    "d": "MAT",
    "nome": "",
    "tag": "ALTA",
    "top": "Equações + Geometria + Tabelas/Gráficos",
    "modo": "Teoria",
    "tempo": "3h30",
    "min": 20,
    "art": "",
    "est": "Equação 1º/2º grau, sistemas. Tabelas e gráficos. Medidas usuais. Geometria: forma, perímetro, área, volume, ângulo e teorema de Pitágoras.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Bhaskara: x=[-b±√(b²-4ac)]/2a. Área: retângulo=b×h, triângulo=b×h/2, círculo=πr². Vunesp cobra situações-problema.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=CfvDQUtNheg",
        "t": "AULÃO MATEMÁTICA VUNESP - SISTEMA DE EQUAÇÕES",
        "ch": "Ciência Exata"
      },
      {
        "u": "https://www.youtube.com/watch?v=mKiitpAZxAA",
        "t": "AULÃO MATEMÁTICA VUNESP - GEOMETRIA",
        "ch": "Ciência Exata"
      },
      {
        "u": "https://www.youtube.com/watch?v=SlVbkrbCH4U",
        "t": "AULÃO MATEMÁTICA VUNESP - GRÁFICOS E TABELAS",
        "ch": "Ciência Exata"
      }
    ],
    "tec": "https://www.tecconcursos.com.br/s/Q6GA58",
    "qc": "https://www.qconcursos.com/questoes-de-concursos/questoes?discipline_ids%5B%5D=13&examining_board_ids%5B%5D=152&exclude_nullified=true&exclude_outdated=true&per_page=20&publication_year%5B%5D=2020&publication_year%5B%5D=2021&publication_year%5B%5D=2022&publication_year%5B%5D=2023&publication_year%5B%5D=2024&publication_year%5B%5D=2025&publication_year%5B%5D=2026&sort=newest&subject_ids%5B%5D=14570&subject_ids%5B%5D=20297&subject_ids%5B%5D=21769",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 30
  },
  {
    "n": 87,
    "c": "M87",
    "marco": 5,
    "tipo": "meta",
    "d": "ATU",
    "nome": "",
    "tag": "MÉDIA",
    "top": "Fatos de fevereiro a abril de 2026",
    "modo": "Teoria",
    "tempo": "2h a 3h",
    "min": 10,
    "art": "",
    "est": "Fatos políticos, econômicos, sociais e culturais, nacionais e internacionais, de fevereiro a abril de 2026. Atenção: cada edital fixa o seu próprio marco inicial de Atualidades (no edital anterior, o marco era o 1º semestre de 2025). Confira o marco assim que o novo edital for publicado.",
    "como": "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo.",
    "dica": "Temas quentes: reformas, STF, crise climática, IA regulamentação, economia (PIB, Selic). Vunesp cobra CONTEXTO, não notícia específica.",
    "vid": [
      {
        "u": "https://www.youtube.com/watch?v=H-O2mUg9wZI",
        "t": "Atualidades para Concursos: Questões Inéditas Fevereiro 2026",
        "ch": "Nova Concursos"
      }
    ],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 88,
    "c": "M88",
    "marco": 5,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO SEMANAL 14",
    "tag": "",
    "top": "Revisão Metas 86-87",
    "modo": "Revisão",
    "tempo": "2h30",
    "min": 0,
    "art": "",
    "est": "Revise matemática. Releia atualidades. 10 questões de cada tema <70%.",
    "como": "",
    "dica": "Faltam poucas metas. TODA revisão = Banco de Erros. Se acertar: avance. Se errar: anote e estude.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "faixa": [
      86,
      87
    ],
    "qi": 0
  },
  {
    "n": 89,
    "c": "M89",
    "marco": 5,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO GERAL 4",
    "tag": "",
    "top": "Revisão Metas 76-87 (Banco de Erros)",
    "modo": "Revisão Geral",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "ÚLTIMA revisão geral. 5 piores temas. 10 questões de cada. Se >75%: pronto. Se <70%: 2-3 dias de reforço.",
    "como": "",
    "dica": "Conteúdo dominado. O que reprova agora = CONFUSÃO entre conceitos parecidos. Elimine: prazos CPC vs CPP, verbos nucleares, impedimento vs suspeição.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "faixa": [
      76,
      87
    ],
    "qi": 0
  },
  {
    "n": 90,
    "c": "M90",
    "marco": 5,
    "tipo": "sim",
    "d": "",
    "nome": "SIMULADO GERAL",
    "tag": "",
    "top": "70 questões + Redação (5h)",
    "modo": "Simulado",
    "tempo": "5h",
    "min": 70,
    "art": "",
    "est": "Prova REAL: 16 Port. + 30 Dir. + 24 Gerais + Redação. Condições reais: caneta preta, sem celular, 5h.",
    "como": "",
    "dica": "Estratégia: Redação (40min) → Português (30min) → Gerais (45min) → Direito (2h) → Revisão (45min). Não gaste >3min/questão.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 91,
    "c": "M91",
    "marco": 6,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO FINAL — Boxes de Ouro (Parte 1)",
    "tag": "",
    "top": "CF + Penal + Proc. Penal",
    "modo": "Revisão Final",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "Releitura RÁPIDA: Art. 5º CF, Arts. 312 a 317 e 319 a 333 CP, Citações CPP, JECrim. APENAS questões erradas dos simulados.",
    "como": "",
    "dica": "NÃO estude nada NOVO. Apenas releia. Durma bem, coma bem, hidrate-se. Prova = maratona de 5h.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 92,
    "c": "M92",
    "marco": 6,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO FINAL — Boxes de Ouro (Parte 2)",
    "tag": "",
    "top": "CPC + Adm. + Normas",
    "modo": "Revisão Final",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "Releitura: Prazos CPC, Sentença (485-489), PAD lei 10.261 (239-323), Improbidade lei 8.429, Normas CGJ, RI TJSP pontos-chave.",
    "como": "",
    "dica": "Faça 'folha de véspera': 1 página com TUDO que mais erra. Leia 3x: noite anterior, manhã da prova, caminho.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 93,
    "c": "M93",
    "marco": 6,
    "tipo": "rev",
    "d": "",
    "nome": "REVISÃO FINAL — Banco de Erros",
    "tag": "",
    "top": "TODAS as questões erradas",
    "modo": "Revisão Final",
    "tempo": "3h",
    "min": 0,
    "art": "",
    "est": "Resolva CADA questão errada do cronograma inteiro. Marque as que errou NOVAMENTE = pontos críticos.",
    "como": "",
    "dica": "Errou 2x = ponto CEGO. Leia artigo em voz alta, escreva à mão 3x, explique para alguém.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  },
  {
    "n": 94,
    "c": "M94",
    "marco": 6,
    "tipo": "sim",
    "d": "",
    "nome": "SIMULADO GERAL FINAL",
    "tag": "",
    "top": "70 questões + Redação (5h)",
    "modo": "Simulado Final",
    "tempo": "5h",
    "min": 70,
    "art": "",
    "est": "ÚLTIMO simulado. 16+30+24+Redação. Caneta preta, 5h. Após: anote últimos erros para VÉSPERA.",
    "como": "",
    "dica": "Se ≥75%: PRONTO. Se 65-74%: competitivo, reforce últimos erros. Se <65%: foque nos Blocos I e II (Português e Direito), que somam 46 das 70 questões.",
    "vid": [],
    "tec": "",
    "qc": "",
    "links": [],
    "res": [],
    "lei": [],
    "qi": 0
  }
];

export const META = Object.fromEntries(METAS.map((m) => [m.n, m]));

export const NTOTAL = METAS.length;

export const SCHED = METAS.map((m) => m.n);

export const DOCS = [
  {
    "id": "edital",
    "title": "Edital Verticalizado — Escrevente Técnico Judiciário TJSP",
    "sub": "Tribunal de Justiça do Estado de São Paulo · Banca VUNESP — todos os tópicos do edital por bloco e disciplina, com incidência histórica",
    "cat": "edital",
    "metas": [],
    "src": "pdf/02 - Cronograma de Metas/01 - Edital Verticalizado/Edital-Verticalizado-Escrevente-TJSP-Protocolo 2026.pdf",
    "h2": 11,
    "n": 33,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Tribunal de Justiça do Estado de São Paulo · Banca VUNESP — todos os tópicos do edital por bloco e disciplina, com incidência histórica",
          "Análise de conceitos essenciais, literalidade da lei e principais julgados reiterados pela banca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.",
          "Faça a leitura atenta grifando palavras-chave. Após a leitura, resolva os cadernos de questões para consolidar."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "guia-revisoes",
    "title": "Guia Completo de Revisões",
    "sub": "Guia do cronograma — como executar as revisões semanais e gerais, registrar e revisar seus erros, simulados e semáforo de desempenho",
    "cat": "guia",
    "metas": [],
    "src": "pdf/02 - Cronograma de Metas/04 - Guia de Revisões das Metas/Guia-Completo-de-Revisoes.pdf",
    "h2": 15,
    "n": 63,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Guia do cronograma — como executar as revisões semanais e gerais, registrar e revisar seus erros, simulados e semáforo de desempenho",
          "Análise de conceitos essenciais, literalidade da lei e principais julgados reiterados pela banca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.",
          "Faça a leitura atenta grifando palavras-chave. Após a leitura, resolva os cadernos de questões para consolidar."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m1",
    "title": "Língua Portuguesa — Interpretação de Textos (Compreensão)",
    "sub": "Língua Portuguesa · Resumo Estratégico Meta 1 · baseado em questões VUNESP",
    "cat": "resumo",
    "metas": [
      1
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/meta 1.pdf",
    "h2": 8,
    "n": 54,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Resumo Estratégico Meta 1 · baseado em questões VUNESP",
          "Análise, compreensão e interpretação de textos verbais/não verbais, literários/não literários. Informações literais e inferências. Ponto de vista do autor."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "O que a banca cobra não é o par ‘inferir/deduzir’ (que na prática são sinônimos), mas a distinção entre informação EXPLÍCITA (está escrita) e informação IMPLÍCITA (a inferência, que decorre do texto sem estar escrita). Marque no texto CADA informação literal antes de buscar inferências e desconfie da alternativa que amplia o que o autor disse.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m10",
    "title": "Informática — Windows 10 e Windows 11",
    "sub": "Informática · Explorador de Arquivos · Área de Transferência · Lixeira · atalhos — Resumo Estratégico Meta 10",
    "cat": "resumo",
    "metas": [
      10
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/META 10.pdf",
    "h2": 8,
    "n": 54,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Informática · Explorador de Arquivos · Área de Transferência · Lixeira · atalhos — Resumo Estratégico Meta 10",
          "Pastas, diretórios, arquivos, atalhos, área de trabalho, área de transferência, manipulação de arquivos, uso dos menus, programas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atalhos: Clique aqui",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m11",
    "title": "Sujeitos do Processo: Juiz, Ministério Público, Acusado e Defensor e Funcionários da Justiça",
    "sub": "Direito Processual Penal · CPP, arts. 251 a 258, 261 a 267 e 274 — lei seca tabelada VUNESP/TJSP",
    "cat": "resumo",
    "metas": [
      11
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 11 CPP_Sujeitos_do_Processo_arts_251-274_Protocolo.pdf",
    "h2": 6,
    "n": 31,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal · CPP, arts. 251 a 258, 261 a 267 e 274 — lei seca tabelada VUNESP/TJSP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — bloco cobrado em TODOS os anos analisados: impedimento e suspeição do juiz (arts. 252 e 254 — 2017, 2021, 2023, 2024 e reaplicação de 2024) e \"do acusado e seu defensor\" (arts. 261 a 267 — 2017, 2023, reaplicação de 2024 e 2025)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Impedimento (252) = ABSOLUTO (nulidade absoluta). Suspeição (254) = RELATIVA.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m12",
    "title": "Raciocínio Lógico — Lógica Proposicional Completa",
    "sub": "Raciocínio Lógico · Proposições · Tabela Verdade · Equivalências · Negações · Argumentos — Resumo Estratégico Meta 12",
    "cat": "resumo",
    "metas": [
      12
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 12.pdf",
    "h2": 8,
    "n": 46,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Raciocínio Lógico · Proposições · Tabela Verdade · Equivalências · Negações · Argumentos — Resumo Estratégico Meta 12",
          "Proposições, conectivos lógicos, tabela verdade, tautologia, contradição, negação de proposições compostas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Negação de 'Se A então B' = 'A e não B' (NÃO é 'Se não A então não B'). Para negar 'A e B' = 'não A OU não B'. Para negar 'A ou B' = 'não A E não B' (De Morgan).",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m13",
    "title": "Língua Portuguesa — Significação de Vocábulos e Expressões",
    "sub": "Língua Portuguesa · Denotação/Conotação · Sinônimos/Antônimos · Polissemia — Resumo Estratégico Meta 13",
    "cat": "resumo",
    "metas": [
      13
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 13.pdf",
    "h2": 5,
    "n": 37,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Denotação/Conotação · Sinônimos/Antônimos · Polissemia — Resumo Estratégico Meta 13",
          "Significação contextual de palavras/expressões. Sinônimos e antônimos. Sentido próprio e figurado."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "A Vunesp NÃO cobra sinônimos absolutos — cobra substituição SEM ALTERAR SENTIDO DO TEXTO. Sempre releia o parágrafo inteiro.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m17",
    "title": "Crimes contra a Administração Pública — Praticados por funcionário público (arts. 312 a 321)",
    "sub": "Direito Penal · CP, arts. 312 a 321 — resumo tabelado VUNESP/TJSP",
    "cat": "resumo",
    "metas": [
      17
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 17 Resumo_Tabelado_Crimes_Administracao_Publica_312-321.pdf",
    "h2": 19,
    "n": 56,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Penal · CP, arts. 312 a 321 — resumo tabelado VUNESP/TJSP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: peculato e a reparação do dano no peculato culposo (art. 312, §§ 2º e 3º — 2024); inserção de dados falsos em sistema de informações (art. 313-A — 2025); concussão e excesso de exação (art. 316 e § 1º — reaplicação de 2024); condescendência criminosa (art. 320 — 2025). Bloco presente em 2017, 2021, 2023, 2024, reaplicação de 2024 e 2025."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Concussão (316) = EXIGIR. Corrupção passiva (317) = SOLICITAR/RECEBER/ACEITAR. Decore: 'ConCussão = Cobrar'. Peculato culposo: reparar o dano ANTES da sentença IRRECORRÍVEL = extingue a punibilidade; DEPOIS dela = reduz de metade a pena imposta (art. 312, § 3º).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m18",
    "title": "Crimes contra a Administração Pública — Arts. 322 a 337 do Código Penal",
    "sub": "Direito Penal · CP, arts. 322 a 327 (funcionário público) e 328 a 337 (particular contra a Administração) — lei seca tabelada VUNESP/TJSP",
    "cat": "resumo",
    "metas": [
      18
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 18 DPenal_Crimes_contra_Administracao_Publica_arts_322-337.pdf",
    "h2": 18,
    "n": 56,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Penal · CP, arts. 322 a 327 (funcionário público) e 328 a 337 (particular contra a Administração) — lei seca tabelada VUNESP/TJSP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: inutilização de edital ou de sinal (art. 336) e subtração ou inutilização de livro ou documento (art. 337), ambos em 2023 e na reaplicação de 2024; usurpação de função pública (328), resistência (329), desobediência (330) e desacato (331) — 2023 e reaplicação de 2024. O bloco também apareceu em 2017."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Resistência = VIOLÊNCIA/AMEAÇA. Desobediência = DESCUMPRIR sem violência. Corrupção ativa = OFERECER/PROMETER.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m19",
    "title": "Lei Brasileira de Inclusão — Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015)",
    "sub": "Legislação especial · Lei 13.146/2015, arts. 1º a 13 e 34 a 38 — disposições preliminares, direitos fundamentais e direito ao trabalho",
    "cat": "resumo",
    "metas": [
      19
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 19 RESUMO LEI 13146.pdf",
    "h2": 23,
    "n": 65,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Legislação especial · Lei 13.146/2015, arts. 1º a 13 e 34 a 38 — disposições preliminares, direitos fundamentais e direito ao trabalho",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — cobrado em TODOS os anos analisados, com 2 questões por prova: conceito de pessoa com deficiência e o impedimento de LONGO PRAZO (art. 2º — 2025); atendimento prioritário, inclusive do acompanhante (art. 9º — 2023 e reaplicação de 2024); direito ao trabalho, habilitação e reabilitação profissional (arts. 34 a 38 — 2021, 2023, 2024 e reaplicação de 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Art. 2º: deficiência = impedimento de LONGO PRAZO (não temporário). Art. 34: trabalho em igualdade. A Vunesp cobra literalidade.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m2",
    "title": "Direitos e Garantias Fundamentais — Art. 5º da Constituição Federal",
    "sub": "Direito Constitucional · art. 5º da CF/88 — lei seca tabelada VUNESP/TJSP",
    "cat": "resumo",
    "metas": [
      2,
      4
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/_Resumo-meta 2 e 4 Tabelado_Protocolo-Escrevente.pdf",
    "h2": 22,
    "n": 63,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Constitucional · art. 5º da CF/88 — lei seca tabelada VUNESP/TJSP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: inviolabilidade do domicílio, com a distinção entre dia e noite (inciso XI — 2023 e 2025). Questões gerais sobre \"direitos e deveres individuais e coletivos\" apareceram em 2024 e na reaplicação de 2024."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "O inciso XI (inviolabilidade do lar) é o mais cobrado: flagrante delito ou desastre = qualquer hora. Determinação judicial = SOMENTE DIA. A Vunesp troca 'dia' por 'noite'. Atenção ao Tema 280 do STF (RE 603.616, julgado em 2015) - Provas obtidas mediante invasão de domicílio por policiais sem mandado de busca e apreensão. Tese: A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade, e de nulidade dos atos praticados.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo. Se achar necessário assista uma aula."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m20",
    "title": "Crimes contra a Administração da Justiça — Código Penal, arts. 339 a 347, 357 e 359",
    "sub": "Direito Penal · CP, arts. 339 a 347, 357 e 359 — lei seca tabelada VUNESP/TJSP",
    "cat": "resumo",
    "metas": [
      20
    ],
    "src": "pdf/04 - Resumos/02 - RESUMOS - Metas 11 a 20/META 20 - Resumo-Protocolo-Crimes-Administracao-Justica.pdf",
    "h2": 14,
    "n": 43,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Penal · CP, arts. 339 a 347, 357 e 359 — lei seca tabelada VUNESP/TJSP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP em 2017, 2021, 2023 e na reaplicação de 2024, com destaque para exercício arbitrário das próprias razões (art. 345 — 2021), fraude processual (art. 347 — 2023), exploração de prestígio (art. 357 — 2017) e desobediência a decisão judicial (art. 359 — 2023)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Denunciação caluniosa (339) = dá causa a investigação ou processo contra pessoa DETERMINADA, imputando-lhe crime, infração ético-disciplinar ou ato ímprobo de que a sabe inocente. Comunicação falsa (340) = informa crime que NÃO existiu. Falso testemunho: retratação antes da sentença = extingue.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m21",
    "title": "Gramática — Concordância Verbal e Nominal",
    "sub": "Língua Portuguesa — sujeito simples, sujeito composto, verbo SER e casos especiais (norma-padrão Vunesp)",
    "cat": "resumo",
    "metas": [
      21
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META 21.pdf",
    "h2": 14,
    "n": 74,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa — sujeito simples, sujeito composto, verbo SER e casos especiais (norma-padrão Vunesp)",
          "Concordância verbal: sujeito composto, oracional, partitivas, porcentagem, verbo SER, voz passiva sintética. Concordância nominal: MEIO/MEIA, BASTANTE, ANEXO, OBRIGADO."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "'A maioria dos candidatos': verbo pode ir singular OU plural. 'Faz 5 anos' = impessoal (não flexiona). 'Fazem 5 anos' = ERRADO.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m23",
    "title": "CPP — Das Citações e das Intimações (arts. 351 a 372)",
    "sub": "Direito Processual Penal — Título X: Capítulo I Das Citações (arts. 351 a 369) e Capítulo II Das Intimações (arts. 370 a 372)",
    "cat": "resumo",
    "metas": [
      23
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META 23 CPP_Citacoes_Intimacoes_arts351-372_.pdf",
    "h2": 25,
    "n": 68,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Título X: Capítulo I Das Citações (arts. 351 a 369) e Capítulo II Das Intimações (arts. 370 a 372)",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: citação do acusado (por mandado, por edital e por hora certa) e intimações, em 2017, 2021, reaplicação de 2024 e 2025. Não pule as citações especiais: militar (358), funcionário público (359) e réu preso (360)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Citação por edital: réu NÃO encontrado, prazo 15 DIAS. Réu citado por edital que não comparece NEM constitui advogado: processo e prazo prescricional SUSPENSOS (art. 366), NÃO revelia.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m24",
    "title": "CPC — Impedimento, Suspeição e Auxiliares da Justiça (arts. 144 a 155)",
    "sub": "Direito Processual Civil — impedimento e suspeição do juiz, procedimento de arguição e auxiliares da Justiça (escrivão e oficial de justiça)",
    "cat": "resumo",
    "metas": [
      24
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META 24_CPC_144-155_Impedimento_Suspeicao_Auxiliares.pdf",
    "h2": 14,
    "n": 48,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Civil — impedimento e suspeição do juiz, procedimento de arguição e auxiliares da Justiça (escrivão e oficial de justiça)",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: deveres e atribuições do escrivão/chefe de secretaria e dos demais auxiliares da justiça (arts. 149 a 155 — 2017). O rol do impedimento (144) e da suspeição (145) costuma ser cobrado em comparação com o CPP."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Compare com CPP (254): CPC impedimento=144, suspeição=145. CPP impedimento=252, suspeição=254. Rol DIFERENTE. Faça tabela lado a lado.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m25",
    "title": "Informática — Microsoft Word 2019 / 365",
    "sub": "Informática — Word: formatação, tabelas, controle de alterações, estilos, layout, ilustrações e Faixa de Opções",
    "cat": "resumo",
    "metas": [
      25
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META 25.pdf",
    "h2": 12,
    "n": 121,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Informática — Word: formatação, tabelas, controle de alterações, estilos, layout, ilustrações e Faixa de Opções",
          "Edição, formatação, cabeçalhos, parágrafos, fontes, colunas, marcadores, tabelas, quebras, índices, caixas de texto."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Ctrl+Enter = quebra de página. Ctrl+Shift+Enter = quebra de coluna. Cabeçalho: para ter cabeçalho diferente em cada seção, DESATIVE 'Vincular ao Anterior' (ativado, repete o da seção anterior).",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m26",
    "title": "CF/88 — Direitos Sociais e Nacionalidade (arts. 6º a 13)",
    "sub": "Direito Constitucional — direitos sociais, direitos dos trabalhadores, sindicatos, greve, nacionalidade, idioma e símbolos",
    "cat": "resumo",
    "metas": [
      26
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META 26 RESUMO - CF88_Direitos_Sociais_e_Nacionalidade_arts_6_a_13.pdf",
    "h2": 12,
    "n": 38,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Constitucional — direitos sociais, direitos dos trabalhadores, sindicatos, greve, nacionalidade, idioma e símbolos",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: nacionalidade — brasileiro nato e naturalizado, hipóteses de naturalização e cargos privativos de brasileiro nato (art. 12 — 2017, 2021, 2024 e 2025); direitos sociais e direitos dos trabalhadores (arts. 6º e 7º — 2021 e 2024); liberdade sindical (art. 8º — 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Brasileiro NATO: NUNCA extraditado. NATURALIZADO: extraditado por crime comum anterior ou tráfico a qualquer tempo.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m27",
    "title": "Raciocínio Lógico — Lógica de Argumentação",
    "sub": "Raciocínio Lógico — Modus Ponens, Modus Tollens, contrapositiva, silogismos, proposições categóricas, negação de quantificadores e diagramas lógicos",
    "cat": "resumo",
    "metas": [
      27
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META27 _ProtocoloEscrevente.pdf",
    "h2": 17,
    "n": 61,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Raciocínio Lógico — Modus Ponens, Modus Tollens, contrapositiva, silogismos, proposições categóricas, negação de quantificadores e diagramas lógicos",
          "Argumentos válidos/inválidos, falácias, silogismos, modus ponens, modus tollens, contrapositiva."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Modus Ponens: Se P→Q e P é V, então Q é V. Modus Tollens: Se P→Q e Q é F, então P é F. CONTRAPOSITIVA = equivalente. INVERSA ≠ equivalente.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m28",
    "title": "Língua Portuguesa — Regência Verbal e Nominal e Crase",
    "sub": "Língua Portuguesa — verbos transitivos, pronomes relativos, regência nominal e crase obrigatória, proibida e facultativa",
    "cat": "resumo",
    "metas": [
      28
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META28_ProtocoloEscrevente.pdf",
    "h2": 13,
    "n": 46,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa — verbos transitivos, pronomes relativos, regência nominal e crase obrigatória, proibida e facultativa",
          "Regência: assistir (a), visar (a), obedecer (a), preferir (a), implicar, aspirar. Crase: regras, obrigatória, proibida, facultativa."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Crase NUNCA antes de: masculino, verbo, pronome pessoal. OBRIGATÓRIA: 'à moda de', 'à medida que'. Truque: se trocar por masculino e ficar 'AO', tem crase.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m3",
    "title": "Informática — Correio Eletrônico",
    "sub": "Informática · Campos · Endereçamento · Outlook · Gmail — Resumo Estratégico Meta 3",
    "cat": "resumo",
    "metas": [
      3
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/meta 3.pdf",
    "h2": 8,
    "n": 37,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Informática · Campos · Endereçamento · Outlook · Gmail — Resumo Estratégico Meta 3",
          "Uso de correio eletrônico, preparo e envio de mensagens, anexação de arquivos. CC, CCO, campos de destinatário, protocolos SMTP/POP3/IMAP."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "CCO (cópia oculta): os demais NÃO veem quem está em CCO. CC: todos veem. POP3 = baixa as mensagens e, por padrão, apaga do servidor (pode ser configurado para manter cópia). IMAP = sincroniza e mantém no servidor.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m30",
    "title": "Estatuto dos Funcionários Públicos do Estado de São Paulo (Lei 10.261/68) — Disciplina Funcional",
    "sub": "Direito Administrativo — acumulações, direito de petição, deveres, proibições, responsabilidades, penalidades e procedimento disciplinar",
    "cat": "resumo",
    "metas": [
      30
    ],
    "src": "pdf/04 - Resumos/03 - RESUMOS - Metas 21 a 30/META 30 RESUMO -Estatuto-SP-Lei-10261-Disciplina-Funcional.pdf",
    "h2": 111,
    "n": 240,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Administrativo — acumulações, direito de petição, deveres, proibições, responsabilidades, penalidades e procedimento disciplinar",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: penas disciplinares e autoridade competente para aplicá-las (2023 e 2024); prescrição da ação disciplinar (art. 261 — 2023); afastamento preventivo determinado pelo Chefe de Gabinete (art. 266 — 2024); apuração preliminar (2021)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Prescrição (art. 261): repreensão, suspensão E MULTA = 2 anos. Demissão, demissão a bem do serviço público e cassação da aposentadoria = 5 anos. Conta-se do dia em que a falta foi COMETIDA (nas faltas continuadas ou permanentes, do dia em que cessou a continuação ou a permanência), art. 261, § 1º, e a portaria que instaura sindicância ou processo administrativo INTERROMPE a prescrição. Guarde ainda: o processo administrativo é OBRIGATÓRIO quando a falta puder gerar demissão, demissão a bem do serviço público ou cassação (art. 270) — sindicância não serve para demissão. Afastamento preventivo (art. 266): até 180 dias, prorrogáveis uma única vez por igual período, sem prejuízo dos vencimentos.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m31",
    "title": "Direito Administrativo — PAD: Defesa, Julgamento, Recursos e Revisão (Lei 10.261/68, arts. 271 a 323)",
    "sub": "Direito Administrativo — sindicância, instauração, citação, testemunhas, alegações finais, relatório, recursos, revisão e prescrição",
    "cat": "resumo",
    "metas": [
      31
    ],
    "src": "pdf/04 - Resumos/04 - RESUMOS - Meta 31 a 40/META31_ProtocoloEscrevente.pdf",
    "h2": 15,
    "n": 54,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Administrativo — sindicância, instauração, citação, testemunhas, alegações finais, relatório, recursos, revisão e prescrição",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — bloco cobrado em todos os anos analisados: número de testemunhas que as partes podem arrolar no processo disciplinar (2021 e 2023); práticas autocompositivas, termo de ajustamento de conduta e suspensão condicional da sindicância (2023); pedido de revisão e a proibição de agravar a pena (art. 316 — 2023); processo por abandono de cargo e inassiduidade (reaplicação de 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Sindicância (art. 273): deve estar concluída em 60 DIAS, e a autoridade sindicante e cada acusado podem arrolar até 3 TESTEMUNHAS. CUIDADO com a pegadinha: o famoso “30 + 30 dias” é da Lei 8.112/90 (federal), NÃO do Estatuto paulista. Em SP, os procedimentos disciplinares punitivos são presididos por servidores ocupantes de cargos efetivos e confirmados na respectiva carreira (art. 271, redação da LC 1.419/2024), e não por comissão de 3 membros. Na revisão, a pena imposta NÃO pode ser agravada (art. 316).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m32",
    "title": "Matemática — Razão, Proporção e Porcentagem",
    "sub": "Matemática — grandezas proporcionais, divisão proporcional, escala, porcentagem direta e inversa, aumentos e descontos sucessivos e velocidade",
    "cat": "resumo",
    "metas": [
      32
    ],
    "src": "pdf/04 - Resumos/04 - RESUMOS - Meta 31 a 40/META32_ProtocoloEscrevente.pdf",
    "h2": 10,
    "n": 46,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Matemática — grandezas proporcionais, divisão proporcional, escala, porcentagem direta e inversa, aumentos e descontos sucessivos e velocidade",
          "Razão, proporção, grandezas direta/inversamente proporcionais, porcentagem, aumentos/descontos sucessivos."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Aumentos sucessivos: NUNCA some. 20% + 10% ≠ 30%. Calcule: 1,20 × 1,10 = 1,32 = 32%.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m33",
    "title": "Lei de Improbidade Administrativa — Lei 8.429/92 (atualizada pela Lei 14.230/2021)",
    "sub": "Direito Administrativo — arts. 1º a 12: enriquecimento ilícito, dano ao erário, violação de princípios e sanções",
    "cat": "resumo",
    "metas": [
      33
    ],
    "src": "pdf/04 - Resumos/04 - RESUMOS - Meta 31 a 40/resumo-lia-META 33.pdf",
    "h2": 14,
    "n": 50,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Administrativo — arts. 1º a 12: enriquecimento ilícito, dano ao erário, violação de princípios e sanções",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: atos que importam enriquecimento ilícito (art. 9º — 2017 e 2025), atos que causam prejuízo ao erário (art. 10 — 2021 e 2025) e atos que atentam contra os princípios da administração (art. 11 — 2017). Depois da Lei 14.230/2021, todos exigem DOLO."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Art. 9/10/11: TODOS exigem DOLO (desde reforma 2021). Não existe mais improbidade por culpa. A Vunesp cobra: 'Ato culposo configura improbidade?' NÃO mais.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m34",
    "title": "Lei de Improbidade Administrativa — Lei 8.429/92 (arts. 13 a 23-C)",
    "sub": "Direito Administrativo — declaração de bens, representação, indisponibilidade de bens, ANPC, disposições penais e prescrição",
    "cat": "resumo",
    "metas": [
      34
    ],
    "src": "pdf/04 - Resumos/04 - RESUMOS - Meta 31 a 40/meta34_improbidade.pdf",
    "h2": 22,
    "n": 78,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Administrativo — declaração de bens, representação, indisponibilidade de bens, ANPC, disposições penais e prescrição",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: sanções aplicáveis, inclusive a multa (art. 12 — 2023 e 2024); decisões do juiz no curso da ação e aspectos processuais da ação de improbidade (reaplicação de 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Prescrição: 8 ANOS, contados da ocorrência do fato ou, nos ilícitos permanentes, do dia em que cessou (art. 23). CUIDADO: o ressarcimento ao erário é imprescritível SOMENTE quando o ato de improbidade é DOLOSO (STF, Tema 897) — não existe imprescritibilidade geral. As sanções do art. 12 podem ser aplicadas isolada ou cumulativamente.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m38",
    "title": "CPC — Forma dos Atos Processuais (arts. 188 a 211)",
    "sub": "Direito Processual Civil — publicidade e segredo de justiça, negócios jurídicos processuais, calendário processual, pronunciamentos do juiz, atos das partes, idioma e atos eletrônicos",
    "cat": "resumo",
    "metas": [
      38
    ],
    "src": "pdf/04 - Resumos/04 - RESUMOS - Meta 31 a 40/META38_Forma_dos_Atos_Processuais.pdf",
    "h2": 17,
    "n": 67,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Civil — publicidade e segredo de justiça, negócios jurídicos processuais, calendário processual, pronunciamentos do juiz, atos das partes, idioma e atos eletrônicos",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; ele aparece de forma indireta em outras questões de Processo Civil. Como está no edital, faça a leitura da lei seca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Sentença (art. 203, §1º) = pronunciamento que, com base nos arts. 485 ou 487, põe fim à fase de conhecimento ou extingue a execução — ATENÇÃO: pode ser COM ou SEM resolução de mérito. Interlocutória = decisão que não é sentença (§2º). Despacho = sem conteúdo decisório (§3º). Recursos: apelação contra sentença; agravo de instrumento SÓ nas hipóteses taxativas do art. 1.015 — as demais interlocutórias são impugnadas na apelação (art. 1.009, §1º).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m39",
    "title": "CPC — Tempo, Lugar e Prazos (arts. 212 a 235)",
    "sub": "Direito Processual Civil — tempo e lugar dos atos processuais, prazos, contagem em dias úteis, início do prazo por modalidade, suspensão, recesso e preclusão",
    "cat": "resumo",
    "metas": [
      39
    ],
    "src": "pdf/04 - Resumos/04 - RESUMOS - Meta 31 a 40/META39_Tempo_Lugar_e_Prazos.pdf",
    "h2": 18,
    "n": 74,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Civil — tempo e lugar dos atos processuais, prazos, contagem em dias úteis, início do prazo por modalidade, suspensão, recesso e preclusão",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: atos que se processam durante as férias forenses e a não suspensão dos prazos (art. 215 — 2017). A contagem em dias ÚTEIS (art. 219) é a comparação clássica com o CPP. Não pule os arts. 233 a 235: responsabilidade do escrivão/chefe de secretaria pelo excesso de prazo e devolução dos autos."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "CUIDADO: CPC = DIAS ÚTEIS. CPP = DIAS CORRIDOS. Lei 9.099: JEC (cível) = dias ÚTEIS (art. 12-A, incluído pela Lei 13.728/2018); JECrim = CORRIDOS (segue o CPP). A Vunesp cruza essas contagens.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m40",
    "title": "Informática — MS-Excel: Resumo de Revisão VUNESP",
    "sub": "Informática · MS-Excel 2016/2019/365 — funções, referências, pegadinhas da VUNESP e questões comentadas",
    "cat": "resumo",
    "metas": [
      40
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META 40-Excel_Resumo_VUNESP_Protocolo.pdf",
    "h2": 37,
    "n": 174,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Informática · MS-Excel 2016/2019/365 — funções, referências, pegadinhas da VUNESP e questões comentadas",
          "Planilhas, células, fórmulas (SOMA, MÉDIA, SE, CONT.SE, SOMASE, PROCV), gráficos, macros, classificação de dados."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "=PROCV (valor;tabela;coluna;FALSO). FALSO = correspondência EXATA. Referência absoluta: $A$1 (não muda ao copiar). A Vunesp SEMPRE cobra PROCV.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m41",
    "title": "Comunicação dos Atos Processuais — Verificação de Prazos · Cartas · Citação (CPC arts. 233 a 259)",
    "sub": "Processo Civil · CPC arts. 233 a 259 — prazos, cartas, citação (eletrônica, correio, oficial, hora certa e edital)",
    "cat": "resumo",
    "metas": [
      41
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/meta 41.pdf",
    "h2": 62,
    "n": 242,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 233 a 259 — prazos, cartas, citação (eletrônica, correio, oficial, hora certa e edital)",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: lugar em que a citação pode ser feita (art. 243 — 2021); citação por meio eletrônico (art. 246 — 2023); atos de comunicação processual em geral (2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Citação por edital CPC: réu DESCONHECIDO ou local INCERTO (256). CPP: réu NÃO ENCONTRADO (361). São DIFERENTES. Efeitos da citação válida (art. 240): induz litispendência, torna litigiosa a coisa e constitui em mora o devedor. A prevenção NÃO é efeito da citação no CPC/2015: decorre do registro ou da distribuição da inicial (art. 59).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m43",
    "title": "Cartas e Intimações — CPC arts. 260 a 275",
    "sub": "Processo Civil · CPC arts. 260 a 275 — requisitos e trâmite das cartas, caráter itinerante, recusa e devolução, intimações (eletrônica, DJe, correio, oficial)",
    "cat": "resumo",
    "metas": [
      43
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META 43 CARTAS_INTIMACOES.pdf",
    "h2": 24,
    "n": 93,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 260 a 275 — requisitos e trâmite das cartas, caráter itinerante, recusa e devolução, intimações (eletrônica, DJe, correio, oficial)",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: intimações no CPC (arts. 269 a 275 — 2024). As cartas (260 a 268) costumam ser cobradas pela distinção entre carta de ordem, precatória e rogatória."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Carta de ordem: tribunal→juiz (HIERARQUIA). Precatória: entre órgãos jurisdicionais brasileiros de competência territorial DIVERSA (comarcas diferentes). Rogatória: órgão jurisdicional ESTRANGEIRO. Arbitral: pedido do juízo arbitral ao Judiciário (art. 237, IV).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m44",
    "title": "CF/88 — Administração Pública e Poder Judiciário (arts. 37 a 41 e art. 92)",
    "sub": "Direito Constitucional · CF arts. 37 a 41 e 92 — tabela por artigo, comparativos, números e prazos, pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      44
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META 44.pdf",
    "h2": 13,
    "n": 45,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Constitucional · CF arts. 37 a 41 e 92 — tabela por artigo, comparativos, números e prazos, pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: regras do art. 37, com destaque para o teto remuneratório (inciso XI — 2025) e as vedações de acumulação (XVI e XVII); administração pública em geral (2023, 2024 e reaplicação de 2024); regime previdenciário e aposentadoria do servidor (art. 40 — 2023 e 2024); estrutura do Poder Judiciário (art. 92 — 2023)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Estabilidade (41): 3 ANOS + aprovação em avaliação. Perda do cargo: sentença transitada, PAD, ou avaliação periódica (esta depende de LC nunca editada).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m45",
    "title": "Pontuação — vírgula, ponto e vírgula, dois-pontos, reticências, aspas, travessão, parênteses, ponto final",
    "sub": "Língua Portuguesa · Pontuação — regras por sinal, comparativos, critérios de extensão e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      45
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/meta 45.pdf",
    "h2": 29,
    "n": 69,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Pontuação — regras por sinal, comparativos, critérios de extensão e pegadinhas VUNESP",
          "Vírgula: adj. adverbiais deslocados, apostos, vocativos, enumerações. Ponto e vírgula. Dois-pontos. Travessão."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "NUNCA separe sujeito do verbo com vírgula (exceto intercalação). Vírgula antes de 'e': quando os sujeitos forem diferentes, no polissíndeto ou quando o 'e' tiver valor adversativo.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m46",
    "title": "Código de Processo Civil — Tutela Provisória (arts. 294 a 311)",
    "sub": "Processo Civil · CPC arts. 294 a 311 — tutela de urgência e de evidência, análise por artigo, comparativos, prazos e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      46
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META 46 CPC_TUTELA_PROVISORIA_PROTOCOLO.pdf",
    "h2": 27,
    "n": 69,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 294 a 311 — tutela de urgência e de evidência, análise por artigo, comparativos, prazos e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: tutela antecipada requerida em caráter antecedente e a sua ESTABILIZAÇÃO (arts. 303 e 304 — 2017 e 2021)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Urgência: probabilidade do direito + perigo de dano OU risco ao resultado útil do processo (art. 300). Evidência: NÃO exige perigo. 'Qual dispensa perigo?' Evidência (311).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m47",
    "title": "Regra de Três Simples & Juros Simples",
    "sub": "Matemática · Regra de três (direta, inversa, composta), misturas, gotejamento, velocidade e juros simples — padrão VUNESP",
    "cat": "resumo",
    "metas": [
      47
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META_47_Regra_Tres_Juros_Simples.pdf",
    "h2": 20,
    "n": 78,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Matemática · Regra de três (direta, inversa, composta), misturas, gotejamento, velocidade e juros simples — padrão VUNESP",
          "Regra de três simples/composta, média aritmética simples/ponderada, juros simples"
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "J = C×i×t (fórmula). Não tem juros sobre juros (composto não cai). Regra de três composta: identifique direta/inversamente proporcional.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m48",
    "title": "Normas de Serviço da Corregedoria — Tomo I, Capítulos II e III (arts. 5º a 18 e 26 a 86)",
    "sub": "Normas da Corregedoria · NSCGJ arts. 5º a 18 e 26 a 86 — função correcional, sindicância e PAD, sistema informatizado, atendimento e ordem dos serviços",
    "cat": "resumo",
    "metas": [
      48
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META_48_NSCGJSP_.pdf",
    "h2": 20,
    "n": 83,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Normas da Corregedoria · NSCGJ arts. 5º a 18 e 26 a 86 — função correcional, sindicância e PAD, sistema informatizado, atendimento e ordem dos serviços",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: atividade correicional — correição ordinária, correição extraordinária e visita correicional, com seus prazos e formas de anúncio (2023)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m5",
    "title": "Classe de Palavras — Emprego e Sentido",
    "sub": "Língua Portuguesa · Material Progressivo + 4 Blocos · foco TJSP/VUNESP",
    "cat": "resumo",
    "metas": [
      5
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/RESUMO META 05 Classe-de-Palavras-VUNESP-.pdf",
    "h2": 17,
    "n": 95,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Material Progressivo + 4 Blocos · foco TJSP/VUNESP",
          "Emprego: substantivo, adjetivo, artigo, numeral, pronome (pessoal, demonstrativo, relativo, indefinido), verbo (modos, tempos, vozes), advérbio, preposição, conjunção."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Pronome relativo 'ONDE' = apenas lugar físico. 'EM QUE' substitui 'onde' e serve para tempo/lugar/situação. A Vunesp troca um pelo outro.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m50",
    "title": "NSCGJ-TJSP — Livros, Classificadores, Escrituração e Ordem dos Serviços (arts. 63 a 99)",
    "sub": "Normas da Corregedoria · NSCGJ arts. 63 a 99 — livros obrigatórios, cargas, registro de sentenças, escrituração, autuação e movimentação dos autos",
    "cat": "resumo",
    "metas": [
      50
    ],
    "src": "pdf/04 - Resumos/05 - RESUMOS - Meta 41 a 50/META 50.pdf",
    "h2": 19,
    "n": 79,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Normas da Corregedoria · NSCGJ arts. 63 a 99 — livros obrigatórios, cargas, registro de sentenças, escrituração, autuação e movimentação dos autos",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — bloco cobrado em quase todos os anos: protocolo de petições intermediárias e protocolo integrado, físico e eletrônico (2023 e reaplicação de 2024); vista, carga, retirada e consulta de autos (2017, 2021 e 2023); mandados e ofícios, inclusive quem pode assiná-los (2021 e 2025)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Seção VIII: prazos internos do cartório ≠ prazos processuais do CPC. Leia subseções I e II com atenção. OBS: DO ART. 63 A 79 E 80 A 86 JÁ TEM NA META 48 (TECCONCURSOS). NESSA FICOU O FILTRO DO ART. 87 A 99 (TECCONCURSOS) DO QCONCURSOS JÁ EXPLICAMOS ANTERIORMENTE AS LIMITAÇÕES DA PLATAFORMA NOS FILTROS",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m51",
    "title": "Colocação Pronominal — próclise, ênclise, mesóclise, palavras atrativas e proibições",
    "sub": "Língua Portuguesa · Colocação pronominal — regra por regra, comparativos, róis e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      51
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 51 Colocacao_Pronominal_Protocolo.pdf",
    "h2": 18,
    "n": 55,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Colocação pronominal — regra por regra, comparativos, róis e pegadinhas VUNESP",
          "Próclise/mesóclise/ênclise. Estruturação: relações entre ideias, coesão (anáfora, catáfora, substituição, conectivos)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "NUNCA inicie frase com pronome oblíquo átono. 'Me disseram' = ERRADO. Negação/advérbio/relativo ATRAEM pronome.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m52",
    "title": "Procedimento Comum — petição inicial, pedido, contestação, reconvenção e revelia (CPC arts. 318 a 345)",
    "sub": "Processo Civil · CPC arts. 318 a 345 — tabela por artigo, comparativos, prazos, róis e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      52
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 52 - CPC_318-345_Procedimento_Comum_Protocolo_Escrevente.pdf",
    "h2": 33,
    "n": 85,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 318 a 345 — tabela por artigo, comparativos, prazos, róis e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; a banca costuma trazer casos práticos de Vara Cível que exigem esses artigos de forma indireta. Como está no edital, faça a leitura da lei seca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Improcedência liminar (332): julga IMPROCEDENTE sem citar réu. 'Possível julgar mérito sem citar?' SIM. Reconvenção: NA CONTESTAÇÃO.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m53a",
    "title": "Navegadores e Internet",
    "sub": "Informática · Navegadores, protocolos, URL, DNS, cookies, cache, plug-ins e extensões — padrão VUNESP",
    "cat": "resumo",
    "metas": [
      53
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 53 Protocolo_Navegadores_Internet_VUNESP.pdf",
    "h2": 11,
    "n": 39,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Informática · Navegadores, protocolos, URL, DNS, cookies, cache, plug-ins e extensões — padrão VUNESP",
          "Navegação, URL, links, sites, busca. Teams: chats, chamadas de áudio e vídeo, criação de grupos, agendamento de reuniões e gravação, além do trabalho em equipe integrado com Word, Excel, PowerPoint, SharePoint e OneNote. OneDrive: armazenamento e compartilhamento de arquivos."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Teams: gravação notifica TODOS. OneDrive: 5GB gratuito, 1TB com Microsoft 365. Arquivos sincronizados = acesso offline.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m53b",
    "title": "Teams · OneDrive · SharePoint · OneNote",
    "sub": "Informática · Colaboração e produtividade Microsoft 365 — Teams, OneDrive, SharePoint e OneNote no padrão VUNESP",
    "cat": "resumo",
    "metas": [
      53
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/meta 53 Teams_OneDrive_SharePoint_OneNote-DESKTOP-3BHI5SK.pdf",
    "h2": 10,
    "n": 37,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Informática · Colaboração e produtividade Microsoft 365 — Teams, OneDrive, SharePoint e OneNote no padrão VUNESP",
          "Navegação, URL, links, sites, busca. Teams: chats, chamadas de áudio e vídeo, criação de grupos, agendamento de reuniões e gravação, além do trabalho em equipe integrado com Word, Excel, PowerPoint, SharePoint e OneNote. OneDrive: armazenamento e compartilhamento de arquivos."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Teams: gravação notifica TODOS. OneDrive: 5GB gratuito, 1TB com Microsoft 365. Arquivos sincronizados = acesso offline.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m54",
    "title": "Providências Preliminares, Saneamento e Julgamento conforme o Estado do Processo (CPC arts. 346 a 357)",
    "sub": "Processo Civil · CPC arts. 346 a 357 — tabela por artigo, comparativos, prazos e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      54
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 54 CPC_346-357_Providencias_Saneamento_Julgamento_ProtocoloEscrevente.pdf",
    "h2": 15,
    "n": 49,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 346 a 357 — tabela por artigo, comparativos, prazos e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas. Ainda assim, leia a lei seca: revelia e suas exceções é tema clássico de comparação com o processo penal."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "A presunção de veracidade NÃO se aplica nas hipóteses do art. 345: pluralidade de réus com um deles contestando, direito indisponível, falta de instrumento indispensável à prova do ato e alegações inverossímeis ou contrariadas pelas provas dos autos. Não confunda: no réu citado por edital ou por hora certa o que há é nomeação de curador especial (art. 72, II), que contesta e afasta os efeitos práticos da revelia.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m58",
    "title": "CPC — Audiência de Instrução e Julgamento e das Provas (arts. 358 a 404)",
    "sub": "Processo Civil · CPC arts. 358 a 404 — AIJ, teoria geral das provas, ata notarial, depoimento pessoal, confissão, exibição — tabela por artigo e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      58
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 58 resumo_cpc_358-404-DESKTOP-3BHI5SK.pdf",
    "h2": 52,
    "n": 124,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 358 a 404 — AIJ, teoria geral das provas, ata notarial, depoimento pessoal, confissão, exibição — tabela por artigo e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: produção antecipada da prova e suas hipóteses de cabimento (art. 381 — 2023)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Ônus (373): autor prova fato constitutivo, réu prova impeditivo/modificativo/extintivo. 'Quem prova prescrição?' Réu (fato extintivo).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m59",
    "title": "Prova Documental, Documentos Eletrônicos e Prova Testemunhal (CPC arts. 405 a 463)",
    "sub": "Processo Civil · CPC arts. 405 a 463 — força probante, arguição de falsidade, produção, prova testemunhal — tabela por artigo e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      59
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 59-CPC-Prova-Documental-Testemunhal-arts-405-463.pdf",
    "h2": 64,
    "n": 147,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 405 a 463 — força probante, arguição de falsidade, produção, prova testemunhal — tabela por artigo e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas. Como está no edital, faça a leitura da lei seca, com atenção à prova documental e às testemunhas impedidas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Doc. PARTICULAR: presume-se verdadeiro ao signatário (408). Doc. PÚBLICO: faz prova da sua formação e dos fatos que o escrivão, o chefe de secretaria, o tabelião ou o servidor declarar que ocorreram em sua presença (405). Testemunha impedida: cônjuge, companheiro, ascendente e descendente em qualquer grau e colateral até o 3º grau (447, § 2º, I).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m5b",
    "title": "Conjunções VUNESP: do Zero ao Gabarito",
    "sub": "Língua Portuguesa · Material progressivo em 4 capítulos · 194 questões VUNESP (2024 a 2026)",
    "cat": "resumo",
    "metas": [
      5
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/Bônus meta 5- CONJUNCOES_VUNESP_MATERIAL_PROGRESSIVO.pdf",
    "h2": 19,
    "n": 78,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Material progressivo em 4 capítulos · 194 questões VUNESP (2024 a 2026)",
          "Emprego: substantivo, adjetivo, artigo, numeral, pronome (pessoal, demonstrativo, relativo, indefinido), verbo (modos, tempos, vozes), advérbio, preposição, conjunção."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Pronome relativo 'ONDE' = apenas lugar físico. 'EM QUE' substitui 'onde' e serve para tempo/lugar/situação. A Vunesp troca um pelo outro.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m5c",
    "title": "Mapa de Conectivos VUNESP",
    "sub": "Língua Portuguesa · Conjunções tabeladas + questões comentadas · TJSP",
    "cat": "resumo",
    "metas": [
      5
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/CONJUNCOES_VUNESP_MAPA_CONECTIVOS_QUESTOES_COMENTADAS.pdf",
    "h2": 12,
    "n": 59,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Língua Portuguesa · Conjunções tabeladas + questões comentadas · TJSP",
          "Emprego: substantivo, adjetivo, artigo, numeral, pronome (pessoal, demonstrativo, relativo, indefinido), verbo (modos, tempos, vozes), advérbio, preposição, conjunção."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Pronome relativo 'ONDE' = apenas lugar físico. 'EM QUE' substitui 'onde' e serve para tempo/lugar/situação. A Vunesp troca um pelo outro.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m6",
    "title": "Estatuto dos Funcionários Públicos Civis do Estado de São Paulo — Lei 10.261/68 (arts. 1º a 86)",
    "sub": "Direito Administrativo · Lei 10.261/68, arts. 1º a 86 — provimento, exercício e vacância dos cargos",
    "cat": "resumo",
    "metas": [
      6,
      14
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/meta 6 e 14_Estatuto_Func_Publicos_SP_Lei10261_arts1-86.pdf",
    "h2": 91,
    "n": 202,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Administrativo · Lei 10.261/68, arts. 1º a 86 — provimento, exercício e vacância dos cargos",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: formas de provimento, com destaque para a REINTEGRAÇÃO e sua diferença em relação à readmissão e à reversão (2025); prazos e requisitos de posse e exercício (2025). O bloco também apareceu em 2017 e 2021."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Posse: 30 DIAS DA PUBLICAÇÃO. Exercício: 30 DIAS DA POSSE. Estágio Probatório: 3 ANOS. A Vunesp troca os prazos.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m60",
    "title": "CPC — Prova Pericial, Inspeção Judicial, Sentença, Coisa Julgada, Liquidação e Cumprimento de Sentença (arts. 464 a 538)",
    "sub": "Processo Civil · CPC arts. 464 a 538 — lei seca tabelada, comparativos, números e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      60
    ],
    "src": "pdf/04 - Resumos/06 - RESUMOS - Meta 51 a 60/META 60 CPC_464-538_Prova-Pericial_Sentenca_Cumprimento.pdf",
    "h2": 97,
    "n": 197,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Processo Civil · CPC arts. 464 a 538 — lei seca tabelada, comparativos, números e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas. Como está no edital, faça a leitura da lei seca, com atenção à sentença (485 e 487) e à coisa julgada."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Art. 489 §1º: NÃO fundamentada = conceitos vagos, motivos genéricos, não enfrenta argumentos. Art. 485 (sem mérito) vs 487 (com mérito): decore hipóteses.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m61",
    "title": "CPP — Procedimento Comum (arts. 394 a 405)",
    "sub": "Direito Processual Penal — Instrução criminal, procedimento comum ordinário e sumário: lei seca tabelada (CPP, arts. 394 a 405)",
    "cat": "resumo",
    "metas": [
      61
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 61 - CPP Procedimento Comum (arts. 394 a 405).pdf",
    "h2": 18,
    "n": 55,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Instrução criminal, procedimento comum ordinário e sumário: lei seca tabelada (CPP, arts. 394 a 405)",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: rejeição da denúncia e absolvição sumária (arts. 395 e 397 — 2021); procedimento comum ordinário e sumário, com o número de testemunhas de cada um (2017, 2021, 2023, 2024, reaplicação de 2024 e 2025)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Ordinário: ≥4 anos = 8 testemunhas. Sumário: <4 anos = 5. Sumaríssimo: ≤2 anos = 3. Decore: 'O-S-S = 8-5-3'.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m63",
    "title": "Procedimento do Tribunal do Júri — CPP, arts. 406 a 421",
    "sub": "Direito Processual Penal — Tribunal do Júri, 1ª fase (acusação, instrução e juízo de admissibilidade): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      63
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 63_CPP_Tribunal_do_Juri_406-421.pdf",
    "h2": 19,
    "n": 57,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Tribunal do Júri, 1ª fase (acusação, instrução e juízo de admissibilidade): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: procedimento da 1ª fase do júri e as decisões possíveis — pronúncia, impronúncia, absolvição sumária e desclassificação (arts. 413 a 419 — 2021, 2023 e reaplicação de 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Pronúncia (art. 413) exige prova da materialidade e INDÍCIOS suficientes de autoria — é juízo de admissibilidade, não de certeza. Impronúncia = ausência desses requisitos (art. 414). Absolvição sumária (art. 415) = PROVA da inexistência do fato, de não ser o acusado autor ou partícipe, de que o fato não constitui infração penal ou de causa de isenção de pena ou de exclusão do crime. Desclassificação (art. 419). Para a prova, dúvida na 1ª fase leva à PRONÚNCIA; guarde apenas que a fórmula “in dubio pro societate” vem sendo criticada e afastada em julgados recentes do STF.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m64",
    "title": "Tribunal do Júri — CPP, arts. 422 a 497",
    "sub": "Direito Processual Penal — Tribunal do Júri: preparação, jurados, plenário, quesitos, sentença e ata (CPP, arts. 422 a 497)",
    "cat": "resumo",
    "metas": [
      64
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 64_CPP_Tribunal_do_Juri_arts_422-497.pdf",
    "h2": 81,
    "n": 178,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Tribunal do Júri: preparação, jurados, plenário, quesitos, sentença e ata (CPP, arts. 422 a 497)",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: composição do Tribunal do Júri e formação do Conselho de Sentença (2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Tribunal do Júri = 1 juiz togado + 25 jurados sorteados; 7 deles formam o Conselho de Sentença (art. 447). 3 recusas imotivadas por parte (art. 468). Votação: 4 absolverem = encerra sem contar votos (sigilo).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m65",
    "title": "Raciocínio Lógico — Diagramas Lógicos & Raciocínio Sequencial",
    "sub": "Raciocínio Lógico — Diagramas lógicos, negação de proposições quantificadas, sequências (letras, figuras, numéricas), Fibonacci, PA e PG",
    "cat": "resumo",
    "metas": [
      65
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 65 Raciocinio_Logico_Diagramas_Sequencias_Protocolo.pdf",
    "h2": 27,
    "n": 137,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Raciocínio Lógico — Diagramas lógicos, negação de proposições quantificadas, sequências (letras, figuras, numéricas), Fibonacci, PA e PG",
          "Diagramas Euler-Venn: todo, nenhum, algum. Sequências numéricas (PA, PG, Fibonacci) e figurais."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "'Todo A é B' = A dentro de B. 'Nenhum A é B' = separados. Sequências: razão constante=PA, quociente constante=PG.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m66",
    "title": "NSCGJ TJSP — Papéis, Certidões, Mandados e Ofícios (arts. 103 a 111)",
    "sub": "Normas da Corregedoria — Papéis, certidões, mandados e ofícios (NSCGJ, arts. 103 a 111, Seções IX a XII): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      66
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 66 NSCGJ-TJSP-Arts-103-a-111-Certidoes-Mandados-Oficios-.pdf",
    "h2": 9,
    "n": 33,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Normas da Corregedoria — Papéis, certidões, mandados e ofícios (NSCGJ, arts. 103 a 111, Seções IX a XII): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: certidões (2024); escrituração de autos e termos — abreviaturas, assinaturas e correção de erros na escrituração (2017, 2023 e reaplicação de 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Certidões: escrevente certifica o que CONSTA dos autos, NÃO a verdade dos fatos.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m67",
    "title": "NSCGJ / TJSP — Comunicações, Cartas, Intimações, Audiências, Carga e Arquivamento (arts. 112 a 189-G)",
    "sub": "Normas da Corregedoria — Seções XIII a XIX do Cap. III (NSCGJ, arts. 112 a 189-G): comunicações eletrônicas, cartas precatórias, intimações, audiências, carga, desentranhamento e arquivamento",
    "cat": "resumo",
    "metas": [
      67
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 67-NSCGJ-Secoes-XIII-a-XIX-arts-112-189G.pdf",
    "h2": 94,
    "n": 206,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Normas da Corregedoria — Seções XIII a XIX do Cap. III (NSCGJ, arts. 112 a 189-G): comunicações eletrônicas, cartas precatórias, intimações, audiências, carga, desentranhamento e arquivamento",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — os temas de processo eletrônico já cobrados pela VUNESP (documentos institucionais padronizados, modelos de grupo e aplicação das regras do processo físico ao digital — 2017, 2023 e reaplicação de 2024) estão no Cap. XI (arts. 1.228, 1.237 e 1.238, Meta 84), e o Sistema Informatizado Oficial está no Cap. III, Seção V (Meta 48). Neste bloco (Seções XIII a XIX), o foco são comunicações oficiais, cartas, intimações, audiências, consulta e carga dos autos, desentranhamento e arquivamento."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Seção XVI = audiências (inclusive gravação) e Seção XVII = consulta e carga dos autos; RPVs e precatórios ficam no Cap. XI, Seção VII (Meta 84). Números que a banca troca: carta precatória em 3 vias (art. 122), carga rápida por 1 hora (art. 165) e vedação de precatória para oitivas em outras comarcas de SP, salvo exceções (art. 156-A). eProc substitui gradualmente o SAJ/e-SAJ (Res. 963/2025).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m68",
    "title": "CPP — Processo Sumário e Restauração de Autos (arts. 531 a 548)",
    "sub": "Direito Processual Penal — Processo sumário (arts. 531 a 538) e restauração de autos (arts. 541 a 548): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      68
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 68 - RESUMO - CPP_Processo_Sumario_e_Restauracao_de_Autos_arts531-548.pdf",
    "h2": 2,
    "n": 22,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Processo sumário (arts. 531 a 538) e restauração de autos (arts. 541 a 548): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: processo de restauração de autos extraviados ou destruídos (arts. 541 a 548 — 2023); procedimento sumário (arts. 531 a 538 — 2021 e 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Sumário CPP ≠ sumaríssimo JECRIM. Sumário (5 test.) vs Sumaríssimo (3 test.). A Vunesp troca os dois.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m7",
    "title": "Matemática — MDC · MMC · Divisibilidade · Operações Decimais",
    "sub": "Matemática · Resumo Estratégico Meta 7 · MDC, MMC, divisibilidade e operações decimais",
    "cat": "resumo",
    "metas": [
      7
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/resumo 7.pdf",
    "h2": 6,
    "n": 48,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Matemática · Resumo Estratégico Meta 7 · MDC, MMC, divisibilidade e operações decimais",
          "Operações fundamentais, frações, decimais, potenciação, radiciação. MMC e MDC."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Na Vunesp, MMC = eventos cíclicos. MDC = divisão em partes iguais. Decore: MMC = 'Menos Comum é o Maior'.",
          "Assista à videoaula ou leia o PDF do tema. Depois, resolva questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m70",
    "title": "CPP — Recursos em Geral: Disposições Gerais, Recurso em Sentido Estrito e Apelação (arts. 574 a 609)",
    "sub": "Direito Processual Penal — Recursos, parte 1 (CPP, arts. 574 a 609): disposições gerais, RESE, apelação e processo nos tribunais: lei seca tabelada",
    "cat": "resumo",
    "metas": [
      70
    ],
    "src": "pdf/04 - Resumos/07 - RESUMOS - Meta 61 a 70/META 70_CPP_RECURSOS_EM_GERAL_ARTS_574-609.pdf",
    "h2": 8,
    "n": 39,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Recursos, parte 1 (CPP, arts. 574 a 609): disposições gerais, RESE, apelação e processo nos tribunais: lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: disposições gerais dos recursos e o direito de recorrer (arts. 574 a 580 — 2017); recursos em espécie do CPP, com destaque para o RESE e a apelação e seus prazos (2021)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "RESE: 5 DIAS, TAXATIVO, tem retratação. Apelação penal: 5 DIAS, SEM retratação. Compare: apelação CPC = 15 dias ÚTEIS.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m71",
    "title": "CPP — Recursos nos Tribunais, Embargos, Revisão Criminal, RE/REsp, Carta Testemunhável e Habeas Corpus (arts. 609 a 667)",
    "sub": "Direito Processual Penal — Recursos, parte 2 (CPP, arts. 609 a 667): processo nos tribunais, embargos, revisão criminal, RE/REsp, carta testemunhável e habeas corpus: lei seca tabelada",
    "cat": "resumo",
    "metas": [
      71
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/META 71 - RESUMO CPP_RECURSOS_REVISAO_HC_ARTS_609-667.pdf",
    "h2": 59,
    "n": 137,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — Recursos, parte 2 (CPP, arts. 609 a 667): processo nos tribunais, embargos, revisão criminal, RE/REsp, carta testemunhável e habeas corpus: lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: revisão criminal (arts. 621 a 631 — 2017 e 2023) e habeas corpus (arts. 647 a 667 — 2021 e 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Revisão criminal: SEMPRE pro reo, NUNCA contra. Qualquer tempo. HC: qualquer pessoa impetra, sem advogado. 'Cabe revisão para agravar pena?' JAMAIS.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m72",
    "title": "Lei 9.099/95 — Juizados Especiais Criminais: Disposições Gerais e Procedimento Sumaríssimo (arts. 60 a 83)",
    "sub": "Direito Processual Penal — JECrim (Lei 9.099/95, arts. 60 a 83): competência, atos processuais, fase preliminar, procedimento sumaríssimo e recursos: lei seca tabelada",
    "cat": "resumo",
    "metas": [
      72
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/META 72 - RESUMO_Lei9099_JECrim_arts_60_83.pdf",
    "h2": 27,
    "n": 73,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Penal — JECrim (Lei 9.099/95, arts. 60 a 83): competência, atos processuais, fase preliminar, procedimento sumaríssimo e recursos: lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: competência do JECrim e infração de menor potencial ofensivo (arts. 60 e 61), transação penal (art. 76), representação (art. 88) e suspensão condicional do processo (art. 89) — 2017, 2021, reaplicação de 2024 e 2025."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Transação penal (76): MP propõe restritiva/multa. Sursis (89): pena MÍNIMA ≤1 ano (não máxima!). A Vunesp troca 'mínima' por 'máxima'.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m76",
    "title": "CPC — Recursos: Disposições Gerais, Apelação, Agravo de Instrumento, Agravo Interno e Embargos de Declaração (arts. 994 a 1.026)",
    "sub": "Direito Processual Civil — Recursos (CPC, arts. 994 a 1.026): disposições gerais, apelação, agravo de instrumento, agravo interno e embargos de declaração: lei seca tabelada",
    "cat": "resumo",
    "metas": [
      76
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/META 76 resumo PE_CPC_Recursos_994-1026.pdf",
    "h2": 37,
    "n": 88,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Civil — Recursos (CPC, arts. 994 a 1.026): disposições gerais, apelação, agravo de instrumento, agravo interno e embargos de declaração: lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica de recursos do CPC nas provas de 2017 a 2025 analisadas (os recursos cobrados foram os do CPP). Como está no edital, leia a lei seca e foque nos prazos."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "COMPARAÇÃO: Apelação CPC=15 dias ÚTEIS. Apelação CPP=5 dias CORRIDOS. Embargos CPC=5 dias ÚTEIS. Embargos CPP=2 dias CORRIDOS. Monte tabela.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m77",
    "title": "Juizados Especiais — Lei 9.099/95 (JEC) e Lei 12.153/09 (JEFP)",
    "sub": "Direito Processual Civil — Juizado Especial Cível (Lei 9.099/95, arts. 3º a 19) e Juizados Especiais da Fazenda Pública (Lei 12.153/2009, arts. 1º a 28): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      77
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/Meta77_RESUMO Juizados_Especiais_9099_12153_ProtocoloEscrevente.pdf",
    "h2": 52,
    "n": 123,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Processual Civil — Juizado Especial Cível (Lei 9.099/95, arts. 3º a 19) e Juizados Especiais da Fazenda Pública (Lei 12.153/2009, arts. 1º a 28): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — cobrado em todos os anos analisados: competência do Juizado Especial Cível (art. 3º — 2017, 2021, 2023 e 2025); quem pode ser parte no JEC (art. 8º — 2017); Juizado Especial da Fazenda Pública e o pedido de uniformização de interpretação de lei (Lei 12.153/2009 — 2024 e reaplicação de 2024)."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "JEC: NÃO podem ser partes PJ de direito público, incapaz, preso. Fazenda: até 60 SM contra estados/municípios. 'Ação de 30 SM contra Estado: JEC Fazenda.'",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m78a",
    "title": "Resolução nº 850/2021 — Teletrabalho no âmbito do TJ/SP",
    "sub": "Legislação Interna — Resolução TJSP 850/2021 (teletrabalho de servidores e magistrados, arts. 1º a 40): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      78
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/RESUMO META 78 Resolucao_850_2021_Teletrabalho_TJSP_ProtocoloEscrevente.pdf",
    "h2": 45,
    "n": 109,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Legislação Interna — Resolução TJSP 850/2021 (teletrabalho de servidores e magistrados, arts. 1º a 40): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: teletrabalho, seus requisitos e a vedação durante o estágio probatório (Res. 850/2021 — 2025); implantação do sistema eproc e o protocolo no novo sistema (Res. 963/2025 — 2025); requisitos para o cargo de chefe de seção judiciária (LC 1.111/2010 — 2025). Atenção: tema novo, cobrado a partir de 2025."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Teletrabalho: a produtividade do servidor deve ser SUPERIOR à aferida na atividade presencial da unidade (art. 18, sem percentual fixo). PEGADINHA: a vedação alcança apenas quem está no PRIMEIRO ANO do estágio probatório (art. 11, VI), e não todo o estágio probatório. Outras vedações do art. 11: penalidade disciplinar nos 2 anos anteriores, desligamento do teletrabalho ou relotação por remoção nos últimos 6 meses e ausência de conceito positivo na avaliação mais recente. eProc substitui gradualmente o SAJ/e-SAJ.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m78b",
    "title": "Resolução nº 963/2025 — Sistema eproc no TJSP",
    "sub": "Legislação Interna — Resolução TJSP 963/2025 (governança e utilização do sistema eproc, arts. 1º a 42): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      78
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/META 78_Resumo_Res_963_2025_eproc.pdf",
    "h2": 46,
    "n": 111,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Legislação Interna — Resolução TJSP 963/2025 (governança e utilização do sistema eproc, arts. 1º a 42): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: teletrabalho, seus requisitos e a vedação durante o estágio probatório (Res. 850/2021 — 2025); implantação do sistema eproc e o protocolo no novo sistema (Res. 963/2025 — 2025); requisitos para o cargo de chefe de seção judiciária (LC 1.111/2010 — 2025). Atenção: tema novo, cobrado a partir de 2025."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Teletrabalho: a produtividade do servidor deve ser SUPERIOR à aferida na atividade presencial da unidade (art. 18, sem percentual fixo). PEGADINHA: a vedação alcança apenas quem está no PRIMEIRO ANO do estágio probatório (art. 11, VI), e não todo o estágio probatório. Outras vedações do art. 11: penalidade disciplinar nos 2 anos anteriores, desligamento do teletrabalho ou relotação por remoção nos últimos 6 meses e ausência de conceito positivo na avaliação mais recente. eProc substitui gradualmente o SAJ/e-SAJ.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m78c",
    "title": "LC 1.111/2010 — Plano de Cargos e Carreiras dos Servidores do TJSP",
    "sub": "Legislação Interna — Lei Complementar 1.111/2010 (quadro de pessoal, vencimentos, ingresso, estágio probatório, progressão, promoção, acesso, gratificações e Anexo VII): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      78
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/RESUMO META 78 LC-1111-2010-Plano-Cargos-Carreiras-TJSP-.pdf",
    "h2": 16,
    "n": 134,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Legislação Interna — Lei Complementar 1.111/2010 (quadro de pessoal, vencimentos, ingresso, estágio probatório, progressão, promoção, acesso, gratificações e Anexo VII): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: teletrabalho, seus requisitos e a vedação durante o estágio probatório (Res. 850/2021 — 2025); implantação do sistema eproc e o protocolo no novo sistema (Res. 963/2025 — 2025); requisitos para o cargo de chefe de seção judiciária (LC 1.111/2010 — 2025). Atenção: tema novo, cobrado a partir de 2025."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Teletrabalho: a produtividade do servidor deve ser SUPERIOR à aferida na atividade presencial da unidade (art. 18, sem percentual fixo). PEGADINHA: a vedação alcança apenas quem está no PRIMEIRO ANO do estágio probatório (art. 11, VI), e não todo o estágio probatório. Outras vedações do art. 11: penalidade disciplinar nos 2 anos anteriores, desligamento do teletrabalho ou relotação por remoção nos últimos 6 meses e ausência de conceito positivo na avaliação mais recente. eProc substitui gradualmente o SAJ/e-SAJ.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m80a",
    "title": "Regimento Interno do TJSP — Organização (arts. 1º a 50)",
    "sub": "Legislação Interna — Regimento Interno do TJSP, parte 1 (arts. 1º a 50): composição, Tribunal Pleno, Órgão Especial, CSM, cargos de direção, Ouvidoria, Seções, Câmaras e Comissões: lei seca tabelada",
    "cat": "resumo",
    "metas": [
      80
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/RESUMO META 80 PARTE 1 Protocolo-Escrevente_Regimento-Interno-TJSP_arts-1-50.pdf",
    "h2": 21,
    "n": 162,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Legislação Interna — Regimento Interno do TJSP, parte 1 (arts. 1º a 50): composição, Tribunal Pleno, Órgão Especial, CSM, cargos de direção, Ouvidoria, Seções, Câmaras e Comissões: lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: sessões, reuniões, audiências, pauta e ordem dos trabalhos, com a regra sobre julgamento na ausência do relator (2025). Tema recente no edital."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Presidente: administra, representa, convoca. Corregedor: fiscaliza 1ª instância. Órgão Especial: 25 desembargadores (art. 8º), com atribuições delegadas pelo Tribunal Pleno (a CF, art. 93, XI, permite criá-lo nos tribunais com mais de 25 julgadores).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m80b",
    "title": "Regimento Interno do TJSP — Comissões, Desembargadores e Juízes (arts. 51 a 100)",
    "sub": "Legislação Interna — Regimento Interno do TJSP, parte 2 (arts. 51 a 100): comissões permanentes, desembargadores (posse, antiguidade, remoção, licenças) e juízes (carreira, promoção, aposentadoria, prisão): lei seca tabelada",
    "cat": "resumo",
    "metas": [
      80
    ],
    "src": "pdf/04 - Resumos/08 - RESUMOS - Meta 71 a 80/meta 80 pt2_RITJSP_arts_51_a_100.pdf",
    "h2": 54,
    "n": 127,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Legislação Interna — Regimento Interno do TJSP, parte 2 (arts. 51 a 100): comissões permanentes, desembargadores (posse, antiguidade, remoção, licenças) e juízes (carreira, promoção, aposentadoria, prisão): lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: sessões, reuniões, audiências, pauta e ordem dos trabalhos, com a regra sobre julgamento na ausência do relator (2025). Tema recente no edital."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Presidente: administra, representa, convoca. Corregedor: fiscaliza 1ª instância. Órgão Especial: 25 desembargadores (art. 8º), com atribuições delegadas pelo Tribunal Pleno (a CF, art. 93, XI, permite criá-lo nos tribunais com mais de 25 julgadores).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m81a",
    "title": "Regimento Interno do TJSP — arts. 101 a 151 (Parte 1)",
    "sub": "Regimento Interno TJSP · arts. 101 a 151 — lei seca tabelada, comparativos, números, róis e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      81
    ],
    "src": "pdf/04 - Resumos/09 - RESUMOS - Meta 81 a 94 -EM PRODUÇÃO/Meta-81-RITJSP-arts-101-a-151--Parte-1.pdf",
    "h2": 54,
    "n": 135,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Regimento Interno TJSP · arts. 101 a 151 — lei seca tabelada, comparativos, números, róis e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; o Regimento Interno só passou a ser cobrado a partir de 2025. Leia a lei seca e use as questões inéditas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Distribuição: por sorteio, de forma ininterrupta e paritária, respeitadas prevenções e impedimentos (art. 181). Prevenção (art. 105): a CÂMARA ou o GRUPO que primeiro conhecer da causa fica prevento para os feitos conexos e os recursos; o RELATOR do primeiro recurso fica prevento para os recursos seguintes no mesmo processo ou em conexos (§ 3º).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m81b",
    "title": "Regimento Interno do TJSP — arts. 152 a 200 (Parte 2)",
    "sub": "Regimento Interno TJSP · arts. 152 a 200 — lei seca tabelada, comparativos, róis e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      81
    ],
    "src": "pdf/04 - Resumos/09 - RESUMOS - Meta 81 a 94 -EM PRODUÇÃO/Meta-81-Parte-2-Regimento-Interno-TJSP-arts-152-a-200-.pdf",
    "h2": 59,
    "n": 137,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Regimento Interno TJSP · arts. 152 a 200 — lei seca tabelada, comparativos, róis e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; o Regimento Interno só passou a ser cobrado a partir de 2025. Leia a lei seca e use as questões inéditas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Distribuição: por sorteio, de forma ininterrupta e paritária, respeitadas prevenções e impedimentos (art. 181). Prevenção (art. 105): a CÂMARA ou o GRUPO que primeiro conhecer da causa fica prevento para os feitos conexos e os recursos; o RELATOR do primeiro recurso fica prevento para os recursos seguintes no mesmo processo ou em conexos (§ 3º).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m82",
    "title": "Regimento Interno do TJSP — arts. 201 a 290",
    "sub": "Regimento Interno TJSP · arts. 201 a 290 — processos e recursos no Tribunal, intervenções, precatórios e disposições finais — lei seca tabelada",
    "cat": "resumo",
    "metas": [
      82
    ],
    "src": "pdf/04 - Resumos/09 - RESUMOS - Meta 81 a 94 -EM PRODUÇÃO/resumo meta 82 -RITJSP-Arts-201-a-290.pdf",
    "h2": 112,
    "n": 222,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Regimento Interno TJSP · arts. 201 a 290 — processos e recursos no Tribunal, intervenções, precatórios e disposições finais — lei seca tabelada",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — não localizamos questão específica desse bloco nas provas de 2017 a 2025 analisadas; o Regimento Interno só passou a ser cobrado a partir de 2025. Leia a lei seca e use as questões inéditas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "IRDR: exige, SIMULTANEAMENTE, efetiva repetição de processos sobre a mesma questão unicamente de direito e risco de ofensa à isonomia e à segurança jurídica (CPC, art. 976). Quem suscita: juiz, relator, partes, MP, Defensoria.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m83",
    "title": "NSCGJ — Processo Eletrônico (arts. 1.189 a 1.219)",
    "sub": "Normas da Corregedoria · Processo eletrônico — lei seca tabelada, comparativos, números e pegadinhas VUNESP",
    "cat": "resumo",
    "metas": [
      83
    ],
    "src": "pdf/04 - Resumos/09 - RESUMOS - Meta 81 a 94 -EM PRODUÇÃO/RESUMO META 83 -NSCGJ-Processo-Eletronico.pdf",
    "h2": 41,
    "n": 107,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Normas da Corregedoria · Processo eletrônico — lei seca tabelada, comparativos, números e pegadinhas VUNESP",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — este bloco trata do processo eletrônico: conceito e sistema (Seção I), peticionamento eletrônico e indisponibilidade do sistema (Seção II) e distribuição (Seção III). Precatórios e RPVs ficam na Seção VII, estudada na Meta 84. Como está no edital e é rotina de cartório, faça a leitura das seções indicadas."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Petição eletrônica é tempestiva se recebida até as 24h do último dia do prazo, pela hora oficial de Brasília (art. 1.198, § 1º). Indisponibilidade do sistema prorroga para o 1º dia útil seguinte o prazo que vence no dia se passar de 60 minutos (ininterruptos ou não) entre 6h e 23h, ou se ocorrer entre 23h e 24h (art. 1.205, I); entre 0h e 6h, não prorroga (§ 1º).",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "m9",
    "title": "Crimes contra a Fé Pública — Falsidade Documental · Falsa Identidade · Uso de Documento Falso · Certidão Falsa · Fraudes em Certames",
    "sub": "Direito Penal · CP, arts. 293 a 311-A — Resumo Estratégico Meta 9",
    "cat": "resumo",
    "metas": [
      9
    ],
    "src": "pdf/04 - Resumos/01 - RESUMOS - Metas 1 a 10 - NOVOS RESUMOS DA META 5 INSERIDOS (08-07)/resumo meta 09.pdf",
    "h2": 7,
    "n": 97,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Penal · CP, arts. 293 a 311-A — Resumo Estratégico Meta 9",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: falsificação de papéis públicos, de selos e petrechos de falsificação (arts. 293 a 296 — 2017, 2021, 2024 e reaplicação de 2024); falsa identidade (art. 307 — 2017, 2021, 2024 e 2025); uso de documento de outrem (art. 308 — 2017, 2021 e 2024); fraude em certames de interesse público (art. 311-A — 2023, 2024 e reaplicação de 2024). Falsa identidade e o art. 311-A são os campeões de repetição."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Uso de documento falso (304): pena = MESMA da falsificação. Quem falsifica e depois usa: responde SÓ pela falsificação (post factum impunível). Quem só usa: responde pelo 304.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "orientacoes",
    "title": "Orientações iniciais",
    "sub": "Guia do cronograma — como funcionam as metas, resumos, revisões, simulados, controle de estudo e materiais complementares",
    "cat": "guia",
    "metas": [],
    "src": "pdf/01 - Guia do Cronograma/orientacoes_iniciais_protocolo_escrevente.pdf",
    "h2": 16,
    "n": 89,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Guia do cronograma — como funcionam as metas, resumos, revisões, simulados, controle de estudo e materiais complementares",
          "Análise de conceitos essenciais, literalidade da lei e principais julgados reiterados pela banca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.",
          "Faça a leitura atenta grifando palavras-chave. Após a leitura, resolva os cadernos de questões para consolidar."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "penal-bizurado",
    "title": "Direito Penal — Lei Seca Comentada (Crimes contra a Fé Pública e contra a Administração Pública)",
    "sub": "Direito Penal — Títulos X e XI do Código Penal (arts. 293 a 359): lei seca integral, explicação, leitura VUNESP, pegadinhas e tabelas técnicas",
    "cat": "bonus",
    "metas": [
      9,
      17,
      18,
      20
    ],
    "src": "pdf/03 - Legislação Mapeada/04 - Bônus - Direito Penal Bizurado/PE_Direito_Penal_TJSP - PADRAO NOVO VUNESP.pdf",
    "h2": 58,
    "n": 360,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Direito Penal — Títulos X e XI do Código Penal (arts. 293 a 359): lei seca integral, explicação, leitura VUNESP, pegadinhas e tabelas técnicas",
          "Leia na íntegra os artigos indicados no tópico. DESTAQUE — já cobrado pela VUNESP: falsificação de papéis públicos, de selos e petrechos de falsificação (arts. 293 a 296 — 2017, 2021, 2024 e reaplicação de 2024); falsa identidade (art. 307 — 2017, 2021, 2024 e 2025); uso de documento de outrem (art. 308 — 2017, 2021 e 2024); fraude em certames de interesse público (art. 311-A — 2023, 2024 e reaplicação de 2024). Falsa identidade e o art. 311-A são os campeões de repetição."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Uso de documento falso (304): pena = MESMA da falsificação. Quem falsifica e depois usa: responde SÓ pela falsificação (post factum impunível). Quem só usa: responde pelo 304.",
          "Leia os artigos indicados com atenção, grife os pontos-chave. Após a leitura, resolva as questões para fixar o conteúdo."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "prazos",
    "title": "Tabela de Prazos — TJSP Escrevente Técnico Judiciário",
    "sub": "Consulta rápida e revisão — prazos, números e graus de parentesco mais cobrados pela VUNESP, com fundamento legal artigo por artigo (2.ª edição)",
    "cat": "prazos",
    "metas": [],
    "src": "pdf/03 - Legislação Mapeada/03 - Tabela de prazos completa/Tabela_de_Prazos_TJSP_Protocolo_Escrevente_v2.pdf",
    "h2": 14,
    "n": 64,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Consulta rápida e revisão — prazos, números e graus de parentesco mais cobrados pela VUNESP, com fundamento legal artigo por artigo (2.ª edição)",
          "Análise de conceitos essenciais, literalidade da lei e principais julgados reiterados pela banca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.",
          "Faça a leitura atenta grifando palavras-chave. Após a leitura, resolva os cadernos de questões para consolidar."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  },
  {
    "id": "redacao-teoria",
    "title": "Curso de Redação TJSP/VUNESP",
    "sub": "Critérios oficiais, estrutura dissertativo-argumentativa, armadilhas e treino",
    "cat": "redacao",
    "metas": [],
    "src": "pdf/06 - REDAÇÃO/01 - Acesse a apostila teórica aqui/CURSO_REDACAO_TJSP_VUNESP.pdf",
    "h2": 27,
    "n": 114,
    "secoes": [
      {
        "h": "Apresentação do Tema e Foco Vunesp",
        "p": [
          "Critérios oficiais, estrutura dissertativo-argumentativa, armadilhas e treino",
          "Análise de conceitos essenciais, literalidade da lei e principais julgados reiterados pela banca."
        ]
      },
      {
        "h": "Pontos-Chave e Destaques",
        "p": [
          "Atenção aos termos literais e às pegadinhas de prazos e competências comumente explorados nas provas do TJSP.",
          "Faça a leitura atenta grifando palavras-chave. Após a leitura, resolva os cadernos de questões para consolidar."
        ],
        "lista": [
          "Atenção às alterações legislativas recentes",
          "Compare sempre os prazos entre normas correlatas",
          "Fixe os conceitos com base em questões resolvidas"
        ]
      }
    ]
  }
];

export const LEIS = [
  {
    "id": "cf",
    "t": "Constituição Federal de 1988",
    "curto": "CF/88",
    "sub": "Arts. 5º a 13, 37 a 41 e 92 — texto vigente, com ★ e anos nos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/CONSTITUIÇÃO FEDERAL DE 1988.pdf",
    "n": 318,
    "stars": 126,
    "nome": "Constituição Federal de 1988",
    "itens": [
      {
        "t": "tit",
        "x": "Título II · Dos Direitos e Garantias Fundamentais"
      },
      {
        "id": "cf5-caput",
        "a": "Art. 5º, caput",
        "x": "Todos são iguais perante a lei, sem distinção de qualquer natureza...",
        "star": true
      },
      {
        "id": "cf5-II",
        "a": "Art. 5º, II",
        "x": "ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;",
        "star": true
      },
      {
        "id": "cf5-XI",
        "a": "Art. 5º, XI",
        "x": "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial;",
        "star": true
      },
      {
        "id": "cf5-XXXV",
        "a": "Art. 5º, XXXV",
        "x": "a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito;",
        "star": true
      },
      {
        "id": "cf5-XLII",
        "a": "Art. 5º, XLII",
        "x": "a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei;",
        "star": true
      },
      {
        "id": "cf5-XLIII",
        "a": "Art. 5º, XLIII",
        "x": "a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos...",
        "star": true
      },
      {
        "id": "cf5-LXVIII",
        "a": "Art. 5º, LXVIII",
        "x": "conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder;",
        "star": true
      },
      {
        "id": "cf5-LXIX",
        "a": "Art. 5º, LXIX",
        "x": "conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data...",
        "star": true
      },
      {
        "id": "cf5-LXXVIII",
        "a": "Art. 5º, LXXVIII",
        "x": "a todos, no âmbito judicial e administrativo, são assegurados a razoável duração do processo e os meios que garantam a celeridade de sua tramitação.",
        "star": true
      },
      {
        "t": "tit",
        "x": "Capítulo VII · Da Administração Pública"
      },
      {
        "id": "cf37",
        "a": "Art. 37, caput",
        "x": "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        "star": true
      },
      {
        "id": "cf41",
        "a": "Art. 41",
        "x": "São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público.",
        "star": true
      },
      {
        "t": "tit",
        "x": "Capítulo III · Do Poder Judiciário"
      },
      {
        "id": "cf92",
        "a": "Art. 92",
        "x": "São órgãos do Poder Judiciário: I - o Supremo Tribunal Federal; I-A o Conselho Nacional de Justiça; II - o Superior Tribunal de Justiça; VII - os Tribunais e Juízes dos Estados.",
        "star": true
      }
    ]
  },
  {
    "id": "cp",
    "t": "Código Penal (Decreto-Lei 2.848/40)",
    "curto": "Código Penal",
    "sub": "Arts. 293 a 305, 307, 308 e 311-A (crimes contra a fé pública), 312 a 333, 336 e 337 (crimes contra a Administração Pública) e 339 a 347, 357 e 359 (crimes contra a Administração da Justiça) — com rubricas, ★ e anos dos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/DIREITO PENAL.pdf",
    "n": 191,
    "stars": 42,
    "nome": "Código Penal (Decreto-Lei 2.848/40)",
    "itens": [
      {
        "t": "tit",
        "x": "Título X · Dos Crimes Contra a Fé Pública"
      },
      {
        "id": "cp293",
        "a": "Art. 293",
        "x": "Falsificar, fabricando-os ou alterando-os: I - selo postal, estampilha ou papel selado...",
        "star": true
      },
      {
        "id": "cp297",
        "a": "Art. 297",
        "x": "Falsificar, no todo ou em parte, documento público, ou alterar documento público verdadeiro: Pena - reclusão, de dois a seis anos, e multa.",
        "star": true
      },
      {
        "id": "cp299",
        "a": "Art. 299",
        "x": "Omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir declaração falsa ou diversa...",
        "star": true
      },
      {
        "id": "cp304",
        "a": "Art. 304",
        "x": "Fazer uso de qualquer dos papéis falsificados ou alterados, a que se referem os arts. 297 a 302: Pena - a cominada à falsificação ou à alteração.",
        "star": true
      },
      {
        "id": "cp307",
        "a": "Art. 307",
        "x": "Atribuir-se ou atribuir a terceiro falsa identidade para obter vantagem, em proveito próprio ou alheio, ou para causar dano a outrem: Pena - detenção, de três meses a um ano, ou multa.",
        "star": true
      },
      {
        "id": "cp311A",
        "a": "Art. 311-A",
        "x": "Utilizar ou divulgar, indevidamente, com o fim de beneficiar a si ou a outrem, conteúdo sigiloso de certame de interesse público: Pena - reclusão, de um a quatro anos, e multa.",
        "star": true
      },
      {
        "t": "tit",
        "x": "Título XI · Dos Crimes Contra a Administração Pública"
      },
      {
        "id": "cp312",
        "a": "Art. 312",
        "x": "Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio: Pena - reclusão, de dois a doze anos, e multa.",
        "star": true
      },
      {
        "id": "cp316",
        "a": "Art. 316",
        "x": "Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida: Pena - reclusão, de 2 a 12 anos, e multa.",
        "star": true
      },
      {
        "id": "cp317",
        "a": "Art. 317",
        "x": "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ou aceitar promessa de tal vantagem: Pena - reclusão, de 2 a 12 anos, e multa.",
        "star": true
      },
      {
        "id": "cp319",
        "a": "Art. 319",
        "x": "Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal (Prevaricação).",
        "star": true
      },
      {
        "id": "cp327",
        "a": "Art. 327",
        "x": "Considera-se funcionário público, para os efeitos penais, quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública.",
        "star": true
      }
    ]
  },
  {
    "id": "cpp",
    "t": "Código de Processo Penal + Lei 9.099/95 (JECrim)",
    "curto": "CPP + JECrim",
    "sub": "CPP arts. 251 a 258, 261 a 267, 274, 351 a 372, 394 a 497 (processo comum e júri), 531 a 548 e 574 a 667 (recursos, revisão, habeas corpus) + Lei 9.099/95 arts. 60 a 83, 88 e 89 (JECrim) — com ★ e anos dos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/CÓDIGO DE PROCESSO PENAL + 9.099 JECRIM.pdf",
    "n": 750,
    "stars": 95,
    "nome": "Código de Processo Penal + Lei 9.099/95 (JECrim)",
    "itens": [
      {
        "t": "tit",
        "x": "Livro I · Título VIII · Do Juiz, do Ministério Público, do Acusado e Defensor"
      },
      {
        "id": "cpp252",
        "a": "Art. 252",
        "x": "O juiz não poderá exercer jurisdição no processo em que: I - tiver funcionado seu cônjuge ou parente, consanguíneo ou afim, em linha reta ou colateral até o terceiro grau...",
        "star": true
      },
      {
        "id": "cpp254",
        "a": "Art. 254",
        "x": "O juiz dar-se-á por suspeito, e, se não o fizer, poderá ser recusado por qualquer das partes: I - se for amigo íntimo ou inimigo capital de qualquer deles...",
        "star": true
      },
      {
        "id": "cpp366",
        "a": "Art. 366",
        "x": "Se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional...",
        "star": true
      },
      {
        "id": "cpp395",
        "a": "Art. 395",
        "x": "A denúncia ou queixa será rejeitada quando: I - for manifestamente inepta; II - faltar pressuposto processual ou condição para o exercício da ação penal...",
        "star": true
      },
      {
        "id": "cpp397",
        "a": "Art. 397",
        "x": "Após o cumprimento do disposto no art. 396-A, o juiz deverá absolver sumariamente o acusado quando verificar: I - a existência manifesta de causa excludente da ilicitude...",
        "star": true
      },
      {
        "id": "cpp413",
        "a": "Art. 413",
        "x": "O juiz, fundamentadamente, pronunciará o acusado, se convencido da materialidade do fato e da existência de indícios suficientes de autoria ou de participação.",
        "star": true
      },
      {
        "id": "cpp581",
        "a": "Art. 581",
        "x": "Caberá recurso, no sentido estrito, da decisão, despacho ou sentença: I - que não receber a denúncia ou a queixa; IV - que pronunciar o réu...",
        "star": true
      }
    ]
  },
  {
    "id": "cpc",
    "t": "Código de Processo Civil (Lei 13.105/2015)",
    "curto": "CPC",
    "sub": "Arts. 144 a 155, 188 a 275 (atos processuais, prazos e comunicação dos atos), 294 a 311 (tutela provisória), 318 a 538 (procedimento comum, provas, sentença e cumprimento de sentença) e 994 a 1.026 (recursos) — texto atualizado até a Lei 15.484/2026, com ★ e anos dos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/CODIGO DE PROCESSO CIVIL.pdf",
    "n": 1475,
    "stars": 93,
    "nome": "Código de Processo Civil (Lei 13.105/2015)",
    "itens": [
      {
        "t": "tit",
        "x": "Livro III · Dos Sujeitos do Processo"
      },
      {
        "id": "cpc144",
        "a": "Art. 144",
        "x": "Há impedimento do juiz, sendo-lhe vedado exercer suas funções no processo: I - em que interveio como mandatário da parte, oficiou como perito, funcionou como membro do Ministério Público...",
        "star": true
      },
      {
        "id": "cpc145",
        "a": "Art. 145",
        "x": "Há suspeição do juiz: I - amigo íntimo ou inimigo de qualquer das partes ou de seus advogados...",
        "star": true
      },
      {
        "id": "cpc219",
        "a": "Art. 219",
        "x": "Na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis.",
        "star": true
      },
      {
        "id": "cpc240",
        "a": "Art. 240",
        "x": "A citação válida, ainda quando ordenada por juízo incompetente, induz litispendência, torna litigiosa a coisa e constitui em mora o devedor.",
        "star": true
      },
      {
        "id": "cpc300",
        "a": "Art. 300",
        "x": "A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.",
        "star": true
      },
      {
        "id": "cpc311",
        "a": "Art. 311",
        "x": "A tutela da evidência será concedida, independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo...",
        "star": true
      },
      {
        "id": "cpc335",
        "a": "Art. 335",
        "x": "O réu poderá oferecer contestação, por petição, no prazo de 15 (quinze) dias.",
        "star": true
      },
      {
        "id": "cpc485",
        "a": "Art. 485",
        "x": "O juiz não resolverá o mérito quando: I - indeferir a petição inicial; II - o processo ficar parado durante mais de 1 (um) ano por negligência das partes...",
        "star": true
      },
      {
        "id": "cpc487",
        "a": "Art. 487",
        "x": "Haverá resolução de mérito quando o juiz: I - acolher ou rejeitar o pedido formulado na ação ou na reconvenção; II - decidir, de ofício ou a requerimento, sobre a ocorrência de decadência ou prescrição...",
        "star": true
      },
      {
        "id": "cpc1003",
        "a": "Art. 1.003, § 5º",
        "x": "Excetuados os embargos de declaração, o prazo para interpor e para responder aos recursos é de 15 (quinze) dias úteis.",
        "star": true
      }
    ]
  },
  {
    "id": "l9099",
    "t": "Lei 9.099/95 — Juizados Especiais Cíveis",
    "curto": "Lei 9.099 (JEC)",
    "sub": "Arts. 3º a 19 (Capítulo II — Juizados Especiais Cíveis: competência, juiz, conciliadores, partes, atos processuais, pedido, citações e intimações) — com ★ e anos dos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/lei 9099 JEC.pdf",
    "n": 61,
    "stars": 13,
    "nome": "Lei 9.099/95 — Juizados Especiais Cíveis",
    "itens": [
      {
        "t": "tit",
        "x": "Lei 9.099/95 — Juizados Especiais Cíveis · Artigos Mapeados"
      },
      {
        "id": "l9099-1",
        "a": "Art. 1º",
        "x": "Arts. 3º a 19 (Capítulo II — Juizados Especiais Cíveis: competência, juiz, conciliadores, partes, atos processuais, pedido, citações e intimações) — com ★ e anos dos dispositivos já cobrados pela VUNESP — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "l12153",
    "t": "Lei 12.153/2009 — Juizados da Fazenda Pública",
    "curto": "Lei 12.153",
    "sub": "Arts. 1º a 28 — texto integral da Lei 12.153/2009, com ★ e anos dos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/LEI 12153.pdf",
    "n": 65,
    "stars": 16,
    "nome": "Lei 12.153/2009 — Juizados da Fazenda Pública",
    "itens": [
      {
        "t": "tit",
        "x": "Lei 12.153/2009 — Juizados da Fazenda Pública · Artigos Mapeados"
      },
      {
        "id": "l12153-1",
        "a": "Art. 1º",
        "x": "Arts. 1º a 28 — texto integral da Lei 12.153/2009, com ★ e anos dos dispositivos já cobrados pela VUNESP — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "l10261",
    "t": "Lei 10.261/68 — Estatuto dos Funcionários Públicos Civis de SP",
    "curto": "Estatuto SP",
    "sub": "Arts. 1º a 86 (provimento, exercício e vacância), 171 a 175 (acumulações), 239 a 323 (direito de petição, deveres, proibições, responsabilidades, penalidades e procedimento disciplinar) — atualizada até a Lei 18.473/2026, com ★ e anos dos dispositivos já cobrados pela VUNESP",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/LEI N10261.pdf",
    "n": 567,
    "stars": 52,
    "nome": "Lei 10.261/68 — Estatuto dos Funcionários Públicos Civis de SP",
    "itens": [
      {
        "t": "tit",
        "x": "Estatuto dos Servidores Públicos Civis de SP"
      },
      {
        "id": "est24",
        "a": "Art. 24",
        "x": "A posse verificar-se-á no prazo de 30 (trinta) dias, contados da data da publicação do decreto ou ato de provimento no Diário Oficial.",
        "star": true
      },
      {
        "id": "est30",
        "a": "Art. 30",
        "x": "O exercício do cargo terá início no prazo de 30 (trinta) dias contados da data da posse.",
        "star": true
      },
      {
        "id": "est261",
        "a": "Art. 261",
        "x": "A infração disciplinar prescreve em: I - 2 (dois) anos, quando punível com repreensão, suspensão ou multa; II - 5 (cinco) anos, quando punível com demissão...",
        "star": true
      },
      {
        "id": "est266",
        "a": "Art. 266",
        "x": "Como medida cautelar e a fim de que o funcionário não venha a influir na apuração da falta, poderá o Chefe de Gabinete determinar o seu afastamento preventivo...",
        "star": true
      }
    ]
  },
  {
    "id": "l8429",
    "t": "Lei 8.429/92 — Improbidade Administrativa",
    "curto": "LIA",
    "sub": "Arts. 1º a 25 — texto integral atualizado pela Lei 14.230/2021, com quadros-resumo do material; ★ e anos (e nº de questões) dos dispositivos já cobrados pela VUNESP; ⚠ nas alterações recentes",
    "src": "pdf/03 - Legislação Mapeada/02 - Acesse aqui a parte 2 - Atualizado 23-07-2026/10_PE_LEI_DE_IMPROBIDADE_ADMINISTRATIVA ATUALIZADO 23-07-2026.pdf",
    "n": 256,
    "stars": 21,
    "nome": "Lei 8.429/92 — Improbidade Administrativa",
    "itens": [
      {
        "t": "tit",
        "x": "Lei de Improbidade Administrativa"
      },
      {
        "id": "lia9",
        "a": "Art. 9º",
        "x": "Constitui ato de improbidade administrativa importando em enriquecimento ilícito auferir, mediante a prática de ato doloso, qualquer vantagem patrimonial indevida...",
        "star": true
      },
      {
        "id": "lia10",
        "a": "Art. 10",
        "x": "Constitui ato de improbidade administrativa que causa lesão ao erário qualquer ação ou omissão dolosa que enseje perda patrimonial efetiva...",
        "star": true
      },
      {
        "id": "lia11",
        "a": "Art. 11",
        "x": "Constitui ato de improbidade administrativa que atenta contra os princípios da administração pública a ação ou omissão dolosa que viole os deveres de honestidade, de imparcialidade e de legalidade...",
        "star": true
      },
      {
        "id": "lia23",
        "a": "Art. 23",
        "x": "A ação para a aplicação das sanções previstas nesta Lei prescreve em 8 (oito) anos, contados a partir da ocorrência do fato...",
        "star": true
      }
    ]
  },
  {
    "id": "l13146",
    "t": "Lei 13.146/2015 — Estatuto da Pessoa com Deficiência",
    "curto": "Estatuto PcD",
    "sub": "Arts. 1º a 13 (disposições gerais, atendimento prioritário e direito à vida) e 34 a 38 (direito ao trabalho), com quadros-resumo do material — ★ nos artigos frequentes em prova",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/07_PE_ESTATUTO_DA_PESSOA_COM_DEFICIÊNCIA.pdf",
    "n": 94,
    "stars": 13,
    "nome": "Lei 13.146/2015 — Estatuto da Pessoa com Deficiência",
    "itens": [
      {
        "t": "tit",
        "x": "Lei 13.146/2015 — Estatuto da Pessoa com Deficiência · Artigos Mapeados"
      },
      {
        "id": "l13146-1",
        "a": "Art. 1º",
        "x": "Arts. 1º a 13 (disposições gerais, atendimento prioritário e direito à vida) e 34 a 38 (direito ao trabalho), com quadros-resumo do material — ★ nos artigos frequentes em prova — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "lc1111",
    "t": "Lei Complementar 1.111/2010 — Plano de Cargos e Carreiras do TJSP",
    "curto": "LC 1.111",
    "sub": "Arts. 1º a 51 e Disposições Transitórias (arts. 1º a 3º) — texto consolidado da ALESP, atualizado até a LC 1.441/2026, com notas de alteração; inclui o Anexo VII (atribuições sumárias e pré-requisitos dos cargos). Anexos I a VI e VIII e IX (tabelas de cargos e vencimentos) omitidos",
    "src": "pdf/03 - Legislação Mapeada/02 - Acesse aqui a parte 2 - Atualizado 23-07-2026/LEI COMPLEMENTAR N° 1.111, DE 25 DE MAIO DE 2010 - Assembleia Legislativa do Estado de São.pdf",
    "n": 157,
    "stars": 0,
    "nome": "Lei Complementar 1.111/2010 — Plano de Cargos e Carreiras do TJSP",
    "itens": [
      {
        "t": "tit",
        "x": "Lei Complementar 1.111/2010 — Plano de Cargos e Carreiras do TJSP · Artigos Mapeados"
      },
      {
        "id": "lc1111-1",
        "a": "Art. 1º",
        "x": "Arts. 1º a 51 e Disposições Transitórias (arts. 1º a 3º) — texto consolidado da ALESP, atualizado até a LC 1.441/2026, com notas de alteração; inclui o Anexo VII (atribuições sumárias e pré-requisitos dos cargos). Anexos I a VI e VIII e IX (tabelas de cargos e vencimentos) omitidos — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "res850",
    "t": "Resolução TJSP 850/2021 — Teletrabalho",
    "curto": "Res. 850",
    "sub": "Arts. 1º a 40 — texto compilado (atualizado pela Resolução 864/2022), mapeado e comentado: pegadinhas da banca, dicas de estudo, prazos e quadros-resumo após cada dispositivo",
    "src": "pdf/03 - Legislação Mapeada/01 - Acesse aqui a parte 1 - Atualizado - 02-09-2026/Resolucao850_Teletrabalho_TJSP_Mapeada 18-08.pdf",
    "n": 148,
    "stars": 0,
    "nome": "Resolução TJSP 850/2021 — Teletrabalho",
    "itens": [
      {
        "t": "tit",
        "x": "Resolução TJSP 850/2021 — Teletrabalho · Artigos Mapeados"
      },
      {
        "id": "res850-1",
        "a": "Art. 1º",
        "x": "Arts. 1º a 40 — texto compilado (atualizado pela Resolução 864/2022), mapeado e comentado: pegadinhas da banca, dicas de estudo, prazos e quadros-resumo após cada dispositivo — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "res963",
    "t": "Resolução TJSP 963/2025 — eproc",
    "curto": "Res. 963",
    "sub": "Arts. 1º a 43 — texto integral da Resolução 963/2025 (governança e utilização do sistema eproc no TJSP), com quadros-resumo do material; ★ nos artigos com alto potencial de cobrança",
    "src": "pdf/03 - Legislação Mapeada/02 - Acesse aqui a parte 2 - Atualizado 23-07-2026/PE_RESOLUÇÃO_963_2025_EPROC atualizado 18-08.pdf",
    "n": 128,
    "stars": 18,
    "nome": "Resolução TJSP 963/2025 — eproc",
    "itens": [
      {
        "t": "tit",
        "x": "Resolução TJSP 963/2025 — eproc · Artigos Mapeados"
      },
      {
        "id": "res963-1",
        "a": "Art. 1º",
        "x": "Arts. 1º a 43 — texto integral da Resolução 963/2025 (governança e utilização do sistema eproc no TJSP), com quadros-resumo do material; ★ nos artigos com alto potencial de cobrança — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "ritjsp",
    "t": "Regimento Interno do TJSP",
    "curto": "RITJSP",
    "sub": "Arts. 1º a 290 — texto integral da compilação aprovada pelo Órgão Especial (25/09/2013), atualizado com o CPC/2015 e os Assentos Regimentais até o nº 596/2026; ★ nos artigos estruturais, ⚠ nos alterados recentemente",
    "src": "pdf/03 - Legislação Mapeada/02 - Acesse aqui a parte 2 - Atualizado 23-07-2026/PE_REGIMENTO_INTERNO_TJSP.pdf",
    "n": 1073,
    "stars": 131,
    "nome": "Regimento Interno do TJSP",
    "itens": [
      {
        "t": "tit",
        "x": "Regimento Interno do TJSP · Artigos Mapeados"
      },
      {
        "id": "ritjsp-1",
        "a": "Art. 1º",
        "x": "Arts. 1º a 290 — texto integral da compilação aprovada pelo Órgão Especial (25/09/2013), atualizado com o CPC/2015 e os Assentos Regimentais até o nº 596/2026; ★ nos artigos estruturais, ⚠ nos alterados recentemente — consulte a legislação mapeada e resolva as questões para memorização.",
        "star": true
      }
    ]
  },
  {
    "id": "nscgj",
    "t": "Normas de Serviço da Corregedoria Geral da Justiça (NSCGJ)",
    "curto": "NSCGJ",
    "sub": "Tomo I — arts. 5º a 18 (função correcional), 26 a 29 (ofícios de justiça), 46 a 99 e 103 a 189 (sistema informatizado, livros, escrituração, ordem dos serviços, certidões, mandados, comunicações, cartas, intimações, audiências, carga e arquivamento) e 1.189 a 1.301 (processo eletrônico e precatórios) — atualizado até o Prov. CG 04/2026; ★ nos artigos frequentes, ⚠ nas alterações recentes",
    "src": "pdf/03 - Legislação Mapeada/02 - Acesse aqui a parte 2 - Atualizado 23-07-2026/08_PE_NORMAS_DA_CORREGEDORIA.pdf",
    "n": 913,
    "stars": 71,
    "nome": "Normas de Serviço da Corregedoria Geral da Justiça (NSCGJ)",
    "itens": [
      {
        "t": "tit",
        "x": "Normas de Serviço da Corregedoria Geral da Justiça"
      },
      {
        "id": "nsc5",
        "a": "Art. 5º",
        "x": "A função correcional será exercida no Estado de São Paulo pelo Corregedor Geral da Justiça e, nos limites das suas atribuições, pelos Juízes de Primeiro Grau.",
        "star": true
      },
      {
        "id": "nsc6",
        "a": "Art. 6º",
        "x": "A atividade correcional consiste na fiscalização ordinária ou extraordinária, geral ou parcial, e nas visitas correcionais.",
        "star": true
      },
      {
        "id": "nsc1198",
        "a": "Art. 1.198, § 1º",
        "x": "O peticionamento eletrônico será considerado tempestivo quando transmitido até às 24 (vinte e quatro) horas do seu último dia.",
        "star": true
      }
    ]
  }
];

export const TEMAS = [
  {
    "id": "T01",
    "t": "Proposta 01 — Eficiência tecnológica e acolhimento humano no Judiciário",
    "linhas": 30,
    "min": 60,
    "dica": "Apresente tese clara no 1.o parágrafo. Desenvolva com argumento jurídico e argumento social. Conclua retomando a tese, sem proposta de intervenção no estilo ENEM. Nunca use 1.a pessoa. Escreva de 25 a 30 linhas."
  },
  {
    "id": "T02",
    "t": "Proposta 02 — Inteligência artificial e os efeitos no mercado de trabalho",
    "linhas": 30,
    "min": 60,
    "dica": "Aborde pontos positivos (produtividade, inovação) e negativos (desemprego estrutural). Use dados reais. Conclua retomando a tese; a formação profissional pode aparecer como reflexão final, sem proposta de intervenção no estilo ENEM."
  },
  {
    "id": "T03",
    "t": "Proposta 03 — Saúde mental no ambiente de trabalho",
    "linhas": 30,
    "min": 60,
    "dica": "Defenda que a responsabilidade é compartilhada. Use argumento do direito ao trabalho digno (CF/88) e argumento prático de produtividade. Evite discurso apenas motivacional."
  },
  {
    "id": "T04",
    "t": "Proposta 04 — O papel do Poder Judiciário na proteção dos direitos fundamentais",
    "linhas": 30,
    "min": 60,
    "dica": "Contextualize o art. 5.o da CF. Cite ao menos um mecanismo concreto (HC, MS, ação popular). Conclua com a importância do Judiciário como guardião dos direitos."
  },
  {
    "id": "T05",
    "t": "Proposta 05 — Desinformação digital e seus impactos na democracia",
    "linhas": 30,
    "min": 60,
    "dica": "Relacione desinformação com o exercício do voto consciente. Cite impactos eleitorais. Alfabetização midiática e regulação podem entrar como argumentos; conclua retomando a tese, sem proposta de intervenção no estilo ENEM."
  },
  {
    "id": "T06",
    "t": "Proposta 06 — Crise climática e o papel das cidades na adaptação ambiental",
    "linhas": 30,
    "min": 60,
    "dica": "Foque em políticas urbanas concretas (arborização, drenagem, mobilidade). Use dados de enchentes ou secas no Brasil. Conclua com corresponsabilidade entre poder público e cidadão."
  },
  {
    "id": "T07",
    "t": "Proposta 07 — A violência doméstica e o papel do Estado na proteção das vítimas",
    "linhas": 30,
    "min": 60,
    "dica": "Cite a Lei Maria da Penha. Use argumento jurídico (proteção integral) e argumento social (subnotificação). Conclua retomando a tese (prevenção e rede de apoio podem aparecer como reflexão final), sem proposta de intervenção no estilo ENEM."
  },
  {
    "id": "T08",
    "t": "Proposta 08 — Sustentabilidade e consumo consciente",
    "linhas": 30,
    "min": 60,
    "dica": "Equilibre responsabilidade individual (escolhas de consumo) e coletiva (regulação, incentivos). Use exemplos concretos de políticas públicas brasileiras."
  },
  {
    "id": "T09",
    "t": "Proposta 09 — O acesso à justiça como direito fundamental no Brasil",
    "linhas": 30,
    "min": 60,
    "dica": "Aborde obstáculos reais (custo, distância, linguagem jurídica). Cite instrumentos constitucionais de acesso (defensoria pública, juizados especiais). Conclua retomando a tese, sem proposta de intervenção no estilo ENEM."
  },
  {
    "id": "T10",
    "t": "Proposta 10 — Fake news e os limites da liberdade de expressão",
    "linhas": 30,
    "min": 60,
    "dica": "Diferencie liberdade de expressão de desinformação. Use o art. 5.o da CF como base. Educação midiática e responsabilização de plataformas podem entrar como argumentos; conclua retomando a tese, sem proposta de intervenção no estilo ENEM."
  },
  {
    "id": "T11",
    "t": "Proposta 11 — Desigualdade social e o papel da educação",
    "linhas": 30,
    "min": 60,
    "dica": "Argumente com dados de desigualdade (Gini, PNAD). Cite o art. 205 da CF. Conclua retomando a tese (a educação pública de qualidade como caminho de longo prazo), sem proposta de intervenção no estilo ENEM."
  },
  {
    "id": "T12",
    "t": "Proposta 12 — Segurança pública e direitos fundamentais",
    "linhas": 30,
    "min": 60,
    "dica": "Aborde o conflito entre segurança coletiva e direitos individuais. Cite exemplos de políticas de segurança bem-sucedidas. Defenda como tese uma abordagem que respeite direitos e reduza a violência e conclua retomando-a, sem proposta de intervenção no estilo ENEM."
  }
];

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
