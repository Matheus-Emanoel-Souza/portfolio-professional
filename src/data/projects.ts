import type { Project } from '@/types'

/**
 * Projetos em destaque. Os 4 primeiros são espelhados de
 * `portfolio-adventure/src/data/projects.ts` (mesma fonte real — descrição,
 * problema/solução vêm do README de cada repo, nada inventado aqui). O
 * `portfolio-adventure` entra como projeto próprio, descrito só com fatos do
 * README/HANDOFF dele mesmo (arquitetura, decisões técnicas, stack).
 *
 * Pendente: invaders-engine — ainda privado/não encontrado como repositório
 * público, igual no Adventure. Entra assim que existir/for confirmado.
 */
export const projects: Project[] = [
  {
    id: 'portfolio-adventure',
    name: 'Portfolio Adventure',
    status: 'completed',
    featured: true,
    description:
      'Portfólio gamificado — trajetória e projetos navegáveis como uma "aventura" em pixel art, com uma versão tradicional (Quick Mode) para quem só quer as informações direto.',
    problem:
      'Um portfólio genérico dificilmente mostra quem a pessoa é além de uma lista de bullets. Eu queria algo que refletisse minha identidade e meu interesse por frontend/UX — sem abrir mão de uma versão rápida e direta para recrutadores com pouco tempo.',
    solution:
      'Duas experiências sobre a mesma base de dados: o Adventure Mode (RPG/pixel art, navegação livre) com um Career Graph que representa a trajetória como histórico Git — branches "career", "education" e "courses" compartilhando o mesmo eixo temporal — mais Skill Tree e Achievements determinísticos (nunca aleatórios); e o Quick Mode, versão tradicional sem tema de jogo, pensada pra leitura rápida.',
    architecture:
      'Vite + React 19 + TypeScript, HashRouter (GitHub Pages não faz rewrite de SPA — sem hash, refresh numa rota interna dá 404), CSS Modules puro, Framer Motion, i18n caseiro (PT/EN, só interface — conteúdo fica em uma língua só por decisão explícita), Vitest + Testing Library, oxlint, deploy automatizado via GitHub Actions. CI usa `npm install` em vez de `npm ci` porque o `package-lock.json`, gerado no Windows, fazia o npm instalar o binário nativo errado do Rollup no runner Linux.',
    skillIds: ['react', 'typescript', 'vite', 'css', 'framer-motion', 'git', 'github', 'github-actions'],
    links: {
      demo: 'https://matheus-emanoel-souza.github.io/portfolio-adventure/',
      github: 'https://github.com/Matheus-Emanoel-Souza/portfolio-adventure',
    },
    isPublicRepo: true,
  },
  {
    id: 'smart-taskbar',
    name: 'Smart Taskbar',
    status: 'in-progress',
    featured: true,
    description:
      'Barra de tarefas inteligente pra Windows: agrupa janelas por contexto de uso (Trabalho, Desenvolvimento, Internet...), não só por aplicativo.',
    problem:
      'A barra de tarefas nativa do Windows agrupa por processo. Com dezenas de janelas abertas — várias abas do Chrome com propósitos diferentes, múltiplas instâncias do VS Code, terminais — fica difícil achar a janela certa rápido.',
    solution:
      'App portátil (sem instalador, sem privilégios de admin) que deixa o usuário definir contextos e regras, classificando cada janela por processo e por título. Arquitetura em camadas: um Core sem dependência de Windows/WPF, testável isoladamente, e eventos nativos do Win32 em vez de polling.',
    skillIds: ['csharp', 'dotnet'],
    links: { github: 'https://github.com/Matheus-Emanoel-Souza/Smart-Taskbar' },
    isPublicRepo: true,
  },
  {
    id: 'faturamento-analytics',
    name: 'FaturamentoAnalytics',
    status: 'in-progress',
    featured: true,
    description:
      'Controle financeiro pessoal que roda no navegador e instala como app no celular — sem cadastro, sem servidor, sem backend.',
    problem:
      'Fork de um app de finanças pessoais que já usava no dia a dia — sentia falta de categorização, análise de gastos e importação/exportação mais robusta.',
    solution:
      'Evolução pontual do projeto original, preservando a filosofia (HTML/CSS/JS puro, sem dependências, dados em localStorage): categorias e flags nos lançamentos, dashboard com gráficos de gastos, backup versionado e import/export em CSV com pré-visualização antes de gravar.',
    attribution: 'Fork de um projeto original de @lucasmarx10 — evolução pontual, não trabalho do zero.',
    skillIds: ['javascript', 'css'],
    links: {
      demo: 'https://matheus-emanoel-souza.github.io/FaturamentoAnalyticsWebApp/',
      github: 'https://github.com/Matheus-Emanoel-Souza/FaturamentoAnalyticsWebApp',
    },
    isPublicRepo: true,
  },
  {
    id: 'learndeck',
    name: 'LearnDeck',
    status: 'completed',
    featured: true,
    description:
      'App desktop (e também PWA) pra gerenciar estudos com cards, Kanban customizável, Pomodoro e dashboard de progresso.',
    problem:
      'Organizar estudos por assunto, acompanhar quanto tempo é investido em cada um e visualizar a evolução com métricas — tudo local, sem depender de servidor.',
    solution:
      'Quadro Kanban com grupos hierárquicos (ex.: Faculdade > Cálculo > Integrais), colunas customizáveis, cronômetro e Pomodoro configurável, cards relacionáveis entre si (pré-requisitos), anexos, prazos e subtarefas — dados salvos localmente (SQLite).',
    skillIds: ['typescript', 'react', 'electron', 'databases'],
    links: {
      demo: 'https://matheus-emanoel-souza.github.io/LearnDeck/',
      github: 'https://github.com/Matheus-Emanoel-Souza/LearnDeck',
    },
    isPublicRepo: true,
  },
  {
    id: 'radar-torres',
    name: 'RadarTorres',
    status: 'completed',
    featured: true,
    description:
      'Sistema de detecção e seleção de torres — TCC em Engenharia da Computação. App desktop em C#/WPF que recebe leituras de sensores via Arduino (serial) e localiza alvos em um radar gráfico.',
    problem:
      'O TCC precisava demonstrar, de ponta a ponta, a localização de alvos ao redor de uma base e a seleção automática da torre demonstrativa mais adequada pra cada um — inclusive sem hardware conectado, pra viabilizar desenvolvimento contínuo e as apresentações.',
    solution:
      'App desktop em C#/WPF que recebe leituras (ângulo + distância) de um Arduino via serial, converte pra posição cartesiana num radar circular de quatro quadrantes, seleciona automaticamente a torre mais próxima/adequada e aciona um indicador demonstrativo (laser de baixa potência, LED ou simulação — nunca armamento real). Tem modo de simulação embutido, funcionando mesmo sem Arduino conectado.',
    role: 'Trabalho de Conclusão de Curso (TCC) em Engenharia da Computação.',
    skillIds: ['csharp', 'dotnet', 'cpp', 'arduino'],
    links: {
      demo: 'https://github.com/Matheus-Emanoel-Souza/Sistema_Rastreamento_Alvos_Arduino/releases/latest',
      github: 'https://github.com/Matheus-Emanoel-Souza/Sistema_Rastreamento_Alvos_Arduino',
    },
    isPublicRepo: true,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsBySkillId(skillId: string): Project[] {
  return projects.filter((project) => project.skillIds.includes(skillId))
}
