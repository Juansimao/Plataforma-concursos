import { useEffect, useState } from 'react';
import { S, useStore, prefs } from './lib/store.js';
import { CURSO, META } from './data/content.js';
import { diffDays, parseISO, TODAY, level, doneList } from './lib/logic.js';
import { Icon, ToastHost, SheetHost, parseHash, useHash, openSheet, closeSheet, go } from './components/ui.jsx';
import { fmtClock, useTick, timerStop, timerStart } from './components/Timer.jsx';

import { Inicio, Plano, Cronograma, Meta as MetaView, Revisoes, Revisar, Migrar } from './pages/Plano.jsx';
import { Questoes, Treino, Erros } from './pages/Questoes.jsx';
import { Materiais, Doc, Leis, Lei } from './pages/Estudo.jsx';
import { Desempenho, Registro, Simulados, Relatorio } from './pages/Desempenho.jsx';
import { Conquistas, Ranking, Jogos, Indique } from './pages/Engajamento.jsx';
import { Cronometro, Redacao, Tema, Tutor, Ajustes, Conta, Admin, Relatos, Tutorial, LoginSheet } from './pages/Ferramentas.jsx';

const ROUTES = {
  inicio: () => <Inicio />,
  plano: () => <Plano />,
  cronograma: () => <Cronograma />,
  meta: (p) => <MetaView p={p} />,
  revisoes: () => <Revisoes />,
  revisar: (p) => <Revisar p={p} />,
  migrar: () => <Migrar />,
  questoes: () => <Questoes />,
  treino: (p) => <Treino p={p} />,
  erros: () => <Erros />,
  materiais: () => <Materiais />,
  doc: (p) => <Doc p={p} />,
  leis: () => <Leis />,
  lei: (p) => <Lei p={p} />,
  desempenho: () => <Desempenho />,
  registro: () => <Registro />,
  simulados: () => <Simulados />,
  relatorio: () => <Relatorio />,
  conquistas: () => <Conquistas />,
  ranking: () => <Ranking />,
  jogos: () => <Jogos />,
  indique: () => <Indique />,
  cronometro: () => <Cronometro />,
  redacao: () => <Redacao />,
  tema: (p) => <Tema p={p} />,
  tutor: () => <Tutor />,
  ajustes: () => <Ajustes />,
  conta: () => <Conta />,
  admin: () => <Admin />,
  relatos: () => <Relatos />,
  tutorial: () => <Tutorial />,
};

const PARENT = {
  jogo: 'jogos',
  revisar: 'revisoes',
  meta: 'plano',
  cronograma: 'plano',
  migrar: 'plano',
  treino: 'questoes',
  erros: 'questoes',
  doc: 'materiais',
  lei: 'leis',
  tema: 'redacao',
};

const TITLES = {
  inicio: 'Início',
  plano: 'Metas',
  cronograma: 'Cronograma',
  meta: 'Meta',
  revisoes: 'Revisões',
  revisar: 'Revisar agora',
  migrar: 'Continuar de onde parei',
  questoes: 'Questões',
  treino: 'Treino',
  erros: 'Banco de Erros',
  materiais: 'Materiais',
  doc: 'Material',
  leis: 'Legislação',
  lei: 'Lei seca',
  desempenho: 'Desempenho',
  registro: 'Registro externo',
  simulados: 'Simulados',
  relatorio: 'Relatório',
  conquistas: 'Conquistas',
  ranking: 'Ranking',
  jogos: 'Jogos',
  indique: 'Indique e ganhe',
  cronometro: 'Cronômetro',
  redacao: 'Redação',
  tema: 'Proposta de Redação',
  tutor: 'Tutor',
  ajustes: 'Ajustes',
  conta: 'Minha conta',
  admin: 'Painel do professor',
  relatos: 'Meus relatos',
  tutorial: 'Tutorial',
};

const NAV_ITEMS = [
  ['inicio', 'Início', 'home'],
  ['plano', 'Metas', 'cal'],
  ['revisoes', 'Revisões', 'rev'],
  ['questoes', 'Questões', 'quiz'],
  ['erros', 'Banco de Erros', 'alert'],
  ['redacao', 'Redação', 'pen'],
  ['materiais', 'Materiais', 'book'],
  ['leis', 'Legislação', 'law'],
  ['desempenho', 'Desempenho', 'chart'],
  ['registro', 'Registro externo', 'grid'],
  ['simulados', 'Simulados', 'target'],
  ['relatorio', 'Relatório', 'doc'],
  ['conquistas', 'Conquistas', 'medal'],
  ['jogos', 'Jogos', 'game'],
  ['ranking', 'Ranking', 'trophy'],
  ['cronometro', 'Cronômetro', 'clock'],
  ['tutor', 'Tutor', 'spark'],
  ['indique', 'Indique e ganhe', 'users'],
  ['relatos', 'Relatos', 'bug'],
  ['tutorial', 'Tutorial', 'play'],
  ['ajustes', 'Ajustes', 'gear'],
  ['conta', 'Conta', 'user'],
];

export default function App() {
  useStore();
  const hash = useHash();
  const { r, p } = parseHash(ROUTES);
  useTick(S.timer.run);

  // Aplicação do tema e zoom
  useEffect(() => {
    const root = document.documentElement;
    const t = prefs().tema;
    if (t === 'light' || t === 'dark') {
      root.setAttribute('data-theme', t);
    } else {
      root.removeAttribute('data-theme');
    }
    root.style.setProperty('--fz', String(prefs().fz || 1));
  }, [S.prefs.tema, S.prefs.fz]);

  // Contagem regressiva até a data-alvo
  const alvo = prefs().alvo;
  const diasRestantes = alvo && alvo >= TODAY() ? diffDays(alvo, TODAY()) : null;

  const currentNav = PARENT[r] || r;
  const pageTitle = r === 'inicio' ? CURSO.titulo : TITLES[r] || 'Início';

  const openMenuSheet = () => {
    openSheet(() => (
      <div>
        <div className="row between" style={{ marginBottom: 12 }}>
          <h2>Menu</h2>
          <button className="btn ghost sm" onClick={closeSheet} aria-label="Fechar"><Icon n="x" /></button>
        </div>
        <div className="menu-grid">
          {NAV_ITEMS.map(([k, label, icon]) => (
            <a
              key={k}
              href={`#${k}`}
              onClick={closeSheet}
              style={{
                background: currentNav === k ? 'rgba(196, 155, 54, 0.16)' : undefined,
                borderColor: currentNav === k ? 'var(--gold)' : undefined,
              }}
            >
              <Icon n={icon} />
              <span>{label}</span>
            </a>
          ))}
          {S.user && S.user.admin && (
            <a key="admin" href="#admin" onClick={closeSheet}>
              <Icon n="shield" />
              <span>Painel Professor</span>
            </a>
          )}
        </div>
      </div>
    ));
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      go(PARENT[r] || 'inicio');
    }
  };

  return (
    <div className="app">
      {/* Rail de navegação para Desktop */}
      <aside className="rail">
        <div className="brand">
          <b>{CURSO.marca}</b>
          <strong>{CURSO.nome}</strong>
          <span>Plano de estudos guiado</span>
        </div>

        {diasRestantes !== null && (
          <div className="cd">
            <strong>{diasRestantes}</strong>
            <span>dias até a prova ({alvo.slice(8, 10)}/{alvo.slice(5, 7)})</span>
          </div>
        )}

        <nav>
          <div className="grp">Estudo</div>
          <a href="#inicio" className={currentNav === 'inicio' ? 'on' : ''}><Icon n="home" /> Início</a>
          <a href="#plano" className={currentNav === 'plano' ? 'on' : ''}><Icon n="cal" /> Metas</a>
          <a href="#revisoes" className={currentNav === 'revisoes' ? 'on' : ''}><Icon n="rev" /> Revisões</a>
          <a href="#questoes" className={currentNav === 'questoes' ? 'on' : ''}><Icon n="quiz" /> Questões</a>
          <a href="#erros" className={currentNav === 'erros' ? 'on' : ''}><Icon n="alert" /> Banco de Erros</a>
          <a href="#redacao" className={currentNav === 'redacao' ? 'on' : ''}><Icon n="pen" /> Redação</a>

          <div className="grp">Conteúdo</div>
          <a href="#materiais" className={currentNav === 'materiais' ? 'on' : ''}><Icon n="book" /> Materiais</a>
          <a href="#leis" className={currentNav === 'leis' ? 'on' : ''}><Icon n="law" /> Legislação</a>

          <div className="grp">Evolução</div>
          <a href="#desempenho" className={currentNav === 'desempenho' ? 'on' : ''}><Icon n="chart" /> Desempenho</a>
          <a href="#registro" className={currentNav === 'registro' ? 'on' : ''}><Icon n="grid" /> Registro externo</a>
          <a href="#simulados" className={currentNav === 'simulados' ? 'on' : ''}><Icon n="target" /> Simulados</a>
          <a href="#relatorio" className={currentNav === 'relatorio' ? 'on' : ''}><Icon n="doc" /> Relatório</a>
          <a href="#conquistas" className={currentNav === 'conquistas' ? 'on' : ''}><Icon n="medal" /> Conquistas</a>
          <a href="#ranking" className={currentNav === 'ranking' ? 'on' : ''}><Icon n="trophy" /> Ranking</a>
          <a href="#jogos" className={currentNav === 'jogos' ? 'on' : ''}><Icon n="game" /> Jogos</a>

          <div className="grp">Ferramentas</div>
          <a href="#cronometro" className={currentNav === 'cronometro' ? 'on' : ''}><Icon n="clock" /> Cronômetro</a>
          <a href="#tutor" className={currentNav === 'tutor' ? 'on' : ''}><Icon n="spark" /> Tutor</a>
          <a href="#ajustes" className={currentNav === 'ajustes' ? 'on' : ''}><Icon n="gear" /> Ajustes</a>
          <a href="#conta" className={currentNav === 'conta' ? 'on' : ''}><Icon n="user" /> Minha conta</a>

          {S.user && S.user.admin && (
            <a href="#admin" className={`admin ${currentNav === 'admin' ? 'on' : ''}`}><Icon n="shield" /> Painel Professor</a>
          )}
        </nav>

        <div className="foot">
          <div className="row between">
            <span>{S.user ? S.user.email : 'Modo local (demonstração)'}</span>
            <button
              className="btn xs ghost"
              onClick={() => {
                const nextTheme = prefs().tema === 'dark' ? 'light' : 'dark';
                S.prefs.tema = nextTheme;
                save();
              }}
              title="Alternar tema claro/escuro"
            >
              <Icon n={prefs().tema === 'dark' ? 'sun' : 'moon'} />
            </button>
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <div className="mainwrap">
        <header className="top">
          {r !== 'inicio' && (
            <button className="tb-back" onClick={handleBack} aria-label="Voltar">
              <Icon n="left" />
            </button>
          )}

          <div className="tb-title">{pageTitle}</div>

          <div className="tb-actions">
            {/* Cronômetro Rápido no Header */}
            <button
              className={`tb-btn tb-timer ${S.timer.run ? 'run' : ''}`}
              onClick={() => (S.timer.run ? timerStop() : timerStart())}
              title={S.timer.run ? 'Parar cronômetro' : 'Iniciar cronômetro'}
            >
              <Icon n={S.timer.run ? 'check' : 'clock'} />
              <span>{fmtClock(S.timer.run ? Date.now() - S.timer.start : 0)}</span>
            </button>

            {/* Status de Sincronização Local */}
            <span className="sync cloud" title="Dados salvos no seu navegador">
              <i />
              <span className="tx">Local</span>
            </span>

            {/* Botão de Menu para Mobile */}
            <button className="tb-btn tb-menu" onClick={openMenuSheet} aria-label="Abrir menu">
              <Icon n="menu" />
            </button>
          </div>
        </header>

        <main id="main">
          {ROUTES[r] ? ROUTES[r](p) : <Inicio />}
        </main>
      </div>

      {/* Barra de Abas Inferior (Mobile) */}
      <nav className="tabbar">
        <a href="#inicio" className={currentNav === 'inicio' ? 'on' : ''}>
          <Icon n="home" />
          <span>Início</span>
        </a>
        <a href="#plano" className={currentNav === 'plano' ? 'on' : ''}>
          <Icon n="cal" />
          <span>Metas</span>
        </a>
        <a href="#revisoes" className={currentNav === 'revisoes' ? 'on' : ''}>
          <Icon n="rev" />
          <span>Revisões</span>
        </a>
        <a href="#questoes" className={currentNav === 'questoes' ? 'on' : ''}>
          <Icon n="quiz" />
          <span>Questões</span>
        </a>
        <button onClick={openMenuSheet}>
          <Icon n="menu" />
          <span>Menu</span>
        </button>
      </nav>

      {/* Hosts Globais para Toasts e Sheets */}
      <ToastHost />
      <SheetHost />
    </div>
  );
}
