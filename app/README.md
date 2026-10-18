# Protocolo Escrevente — Recriação / Clone Local

Este projeto é uma recriação independente e local da experiência de usuário do **Protocolo Escrevente** (`app.protocoloescrevente.com.br`), desenvolvida com **Vite + React (SPA)** e persistência em **`localStorage`**.

---

## 🚀 Como Executar

Dentro da pasta do projeto (`protocolo-clone`):

```bash
# 1. Instalar dependências (se ainda não tiver feito)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build
```

O aplicativo estará disponível em: **`http://127.0.0.1:5173/`**

---

## 🎨 Design System e Identidade Visual

O visual e comportamento foram minuciosamente reproduzidos a partir da análise dos tokens e layouts da plataforma:

- **Paleta de cores:**
  - Azul marinho profundo (`#0D1B2A`, `#16293D`)
  - Dourado característico (`#C49B36`, `#FBF3E1`, `#86620F`)
  - Tons de feedback: verde aprovação (`#0B7A28`), vermelho erro (`#B42318`), amarelo aviso (`#8A5A00`)
- **Modos Claro e Escuro (`data-theme="dark"`):** Alternância completa via botão no rodapé da barra lateral ou na tela de Ajustes.
- **Tipografia:** Google Fonts (`Public Sans` para UI, `Literata` para leitura de resumos/leis, `IBM Plex Mono` para cronômetros e números).
- **Layout Adaptativo:**
  - **Desktop (≥980px):** Barra lateral (*rail*) fixa com menu categorizado, cronômetro rápido no topo e área de trabalho ampla.
  - **Mobile (<980px):** Barra inferior de 5 abas (*tabbar*), menu em folha modal (*bottom sheet*) e cabeçalho com ações rápidas.

---

## 🧩 Funcionalidades Implementadas

| Rota | Funcionalidade | Detalhes |
|---|---|---|
| `#inicio` | **Painel Principal** | Hero de boas-vindas, nível de XP, linha do tempo dos marcos, sequência diária (streak), ritmo semanal e cronômetro rápido |
| `#plano` | **Metas e Cronograma** | 24 metas flexíveis agrupadas em marcos ou disciplinas, marcação com 1 clique e agendamento automático de revisões |
| `#meta.X` | **Detalhe da Meta** | Orientações de estudo ("O que estudar", "Como estudar"), links para resumos/leis, formulário para registro externo e anotações |
| `#cronograma` | **Cronograma Completo** | Visão sequencial de todas as metas e marcos pronta para impressão ou exportação em PDF |
| `#revisoes` | **Revisões Espaçadas** | Curva de esquecimento ativa (R1 24h, R2 7 dias, R3 30 dias), filtros de pendentes e vencidas |
| `#revisar` | **Revisar Agora** | Fluxo guiado em 3 passos para revisar a meta da vez |
| `#migrar` | **Continuar de onde parei** | Permite marcar metas e revisões retroativas para quem já estudava antes |
| `#questoes` | **Hub de Questões** | Estatísticas de resoluções, acertos e atalhos por disciplina |
| `#treino` | **Treino Interativo** | Questões Certo/Errado e múltipla escolha, atalhos de teclado (`C`, `E`, `A`-`E`, `Enter`, `Setas`), feedback imediato e gabarito comentado |
| `#erros` | **Banco de Erros** | Todas as questões erradas são salvas automaticamente aqui para retrabalho e domínio |
| `#materiais` | **Materiais e Guias** | Resumos com leitor especializado, sumário de seções (TOC), busca inline, controle de zoom e status de lido |
| `#leis` | **Legislação Seca** | Dispositivos selecionados com marcação de alta incidência (★), sinalização de dúvida e marcação de norma lida |
| `#desempenho` | **Painel de Desempenho** | Gráficos SVG interativos de acertos por semana, barras horizontais por disciplina e mapa de calor de constância (Heatmap) |
| `#registro` | **Registro Externo** | Lançamento de questões feitas em outros bancos ou apostilas (alimenta horas, acertos e XP) |
| `#simulados` | **Simulados** | Lançamento de simulados externos ou execução de mini simulado no app com curva de notas |
| `#relatorio` | **Relatório Periódico** | Resumo analítico de 7, 30 ou 90 dias com pontos fracos e recomendações |
| `#conquistas` | **Conquistas e Gamificação** | 10 níveis de carreira (de *Inscrito* até *Lenda*), 20+ medalhas desbloqueáveis e extrato de fontes de XP |
| `#ranking` | **Ranking Opcional** | Tabela competitiva com apelido, posição, metas e XP |
| `#jogos` | **Minijogos (Relâmpago)** | Desafio de 60 segundos com perguntas Certo/Errado para fixação rápida com limite diário de XP |
| `#cronometro` | **Cronômetro de Estudo** | Contador de horas líquidas que continua rodando em segundo plano entre abas |
| `#redacao` | **Laboratório de Redação** | Propostas com controle de palavras/linhas, autoavaliação por aspectos e histórico de versões |
| `#tutor` | **Tutor Local** | Assistente de dúvidas que faz busca semântica nos resumos e legislação locais |
| `#ajustes` | **Ajustes e Backup** | Intervalos das revisões, tema, backup em JSON (exportar/importar) e exclusão de dados |
| `#conta` | **Minha Conta** | Dados do usuário, simulador de login e vitrine de planos |

---

## 🔒 Privacidade e Autonomia

- **100% Local:** Nenhum dado sai do seu navegador. Todas as ações usam `localStorage`.
- **Backup e Restauração:** Você pode exportar todo o seu progresso em JSON a qualquer momento em `#ajustes`.
- **Conteúdo de Demonstração:** Os textos e questões incluídos são exemplos autorais, garantindo total conformidade legal e permitindo que você adicione ou conecte seu próprio banco de conteúdo.
