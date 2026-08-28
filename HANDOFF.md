# Handoff — Portfolio Professional

Estado do projeto em 2026-08-28 (criação inicial). Pra quem (ou o "eu"
futuro) continuar sem reler todo o histórico do chat.

## O que é

Segundo portfólio de Matheus Emanoel Souza, independente do
[Portfolio Adventure](https://matheus-emanoel-souza.github.io/portfolio-adventure/).
Identidade oposta de propósito: clean, minimalista, sem tema de jogo —
pensado pra recrutadores/entrevistas, funciona sozinho como apresentação
profissional principal mesmo que a pessoa nunca visite o Adventure.

## Arquitetura (resumo)

```
src/
  main.tsx, App.tsx, routes/     # HashRouter + lazy pages por rota
  pages/Home, ProjectCaseStudy, NotFound
  sections/                      # uma seção da Home cada (Header..Footer)
  components/                    # ProjectCard, Timeline, ContactCard,
                                  # CopyButton, ThemeToggle, ResumeButton,
                                  # ExternalLink, EmptyState, Gallery, icons/
  data/                          # profile/projects/career/skills — única
                                  # fonte de conteúdo, tipada
  types/, hooks/, lib/, styles/  # tokens (cor/tipo/espaço), useTheme, etc.
```

Decisões que importam pra manutenção:

- **HashRouter, não BrowserRouter** — mesma razão do Adventure: GitHub Pages
  não faz rewrite de SPA, sem hash um refresh em `/projects/learndeck` dá
  404.
- **Nav da Home não usa `href="#id"` de verdade.** Como o HashRouter já usa
  `#` pras rotas, os links do Header/Hero pras seções fazem
  `event.preventDefault()` + `scrollToSection(id)` (`lib/scrollToSection.ts`,
  `scrollIntoView`), sem tocar na URL. Navegação vinda de outra rota (ex.:
  de `/projects/x` clicar em "Projetos") passa o alvo via
  `navigate('/', { state: { scrollTo: id } })`; a Home lê isso num
  `useEffect` e rola depois de montar (`pages/Home/Home.tsx`).
- **`vite.config.ts` tem `base: '/portfolio-professional/'`** — hardcoded
  pro nome deste repo. Se o repo for renomeado, atualizar aqui também.
- **CI usa `npm install`, não `npm ci`** — mesmo motivo do Adventure
  (`package-lock.json` gerado no Windows puxa o binário nativo errado do
  Rollup num runner Linux).
- **Sem i18n.** Diferente do Adventure (PT/EN de interface), este projeto é
  só PT-BR — nenhuma das instruções originais pediu troca de idioma como
  requisito, e todo o conteúdo real já é em português. Ver "Próximos
  passos".
- **Tema claro/escuro via CSS custom properties** (`styles/tokens.css`) +
  `useTheme` (`hooks/useTheme.ts`) — 3 estados: escolha explícita
  (persistida em `localStorage`), ou segue `prefers-color-scheme` enquanto
  não houver escolha. Sem lib externa.
- **Ícones são SVG de linha desenhados do zero** (`components/icons/`), não
  os pixel icons do Adventure e não os logos de marca exatos das empresas —
  decisão deliberada pra não copiar identidade visual de terceiros.

## Conteúdo real (fonte: portfolio-adventure)

- `data/profile.ts`: nome, role, tagline, bio, GitHub, LinkedIn, e-mail,
  WhatsApp — espelhado de `portfolio-adventure/src/data/profile.ts`, sem o
  campo `handle` (identidade de jogador não cabe aqui). `location` e
  `photoUrl` ficam `undefined` — nenhum dos dois existe na fonte.
- `data/career.ts`: os mesmos 5 eventos reais do Adventure (TechnipFMC,
  FIBRASA, OGMO-ES, Oncovit em `career`; UCL e SENAI CIVIT-ES em
  `education`), em formato simplificado pra timeline tradicional (sem
  `commitType`/`startSortDate`, que só fazem sentido pro Career Graph).
  Branch `courses` continua vazia — `Courses` mostra `EmptyState`.
- `data/projects.ts`: os 4 projetos reais do Adventure (Smart Taskbar,
  FaturamentoAnalytics — com a atribuição do fork de @lucasmarx10
  preservada, LearnDeck, RadarTorres) **mais** o próprio
  `portfolio-adventure` como 5º projeto, descrito só com fatos do
  README/HANDOFF dele (Career Graph, HashRouter, i18n caseiro, achievements
  determinísticos, decisão do `npm install`).
- `data/skills.ts`: mesma lista do Adventure. Categoria `devops` continua
  vazia — `Skills` pula categorias sem nenhuma entrada.

## Pendente (TODO explícito no código/docs)

- **Currículo em PDF**: `public/resume/` só tem um `.gitkeep` — arquivo
  ainda não existe (mesma pendência do Adventure). Botão 404 até alguém
  subir `Matheus-Emanoel-Curriculo.pdf`.
- **Foto profissional**: `profile.photoUrl` fica `undefined` — Hero
  funciona inteiramente sem foto por enquanto.
- **Screenshots de projeto**: nenhum projeto tem `screenshots` preenchido —
  `Gallery` existe e funciona, mas não renderiza nada até algum array deixar
  de estar vazio.
- **Cursos**: branch `courses` sem eventos — seção mostra `EmptyState`.
- **Imagem OG**: `public/og-image.svg` foi criado do zero pra este projeto
  (não existia antes). É SVG — alguns crawlers (LinkedIn, X/Twitter) têm
  suporte inconsistente a `og:image` em SVG; considerar exportar uma versão
  PNG/JPG 1200×630 se a prévia não aparecer bem ao compartilhar o link.
- **"O que aprendi"** nos case studies: fica como `EmptyState` ("Em breve.")
  em todos os projetos — é reflexão pessoal, ninguém além do Matheus pode
  escrever isso de verdade.

## GitHub Pages / deploy

- Sem `gh` CLI disponível no ambiente onde este projeto foi criado — o repo
  remoto **ainda não existe no GitHub**. Só há um repositório Git local
  (`git init` + commit inicial).
- Passos pra publicar: criar `Matheus-Emanoel-Souza/portfolio-professional`
  no GitHub, `git remote add origin <url> && git push -u origin main`, e em
  Settings → Pages → Source = **GitHub Actions**. O workflow
  (`.github/workflows/deploy.yml`) já está pronto, idêntico em estrutura ao
  do Adventure (lint → test → build → deploy).
- URL final esperada:
  https://matheus-emanoel-souza.github.io/portfolio-professional/

## Testes

`src/App.test.tsx` — Hero, projetos em destaque (incluindo Portfolio
Adventure com link de demo), link de GitHub no fim de Projetos, timeline de
Experiência com as 4 empresas reais, botão de currículo (href/download),
Contato (mailto, LinkedIn, WhatsApp, copiar e-mail com feedback), link
cruzado pro Adventure no footer, case study do Faturamento Analytics
(incluindo a atribuição do fork), 404 pra rota e pra projeto inexistentes.
`src/lib/whatsapp.test.ts` e `src/lib/skillUsage.test.ts` — lógica pura.

## Próximos passos sugeridos (ordem)

1. Currículo em PDF real em `public/resume/` — maior pendência visível.
2. Screenshots reais dos projetos (principalmente Portfolio Adventure,
   FaturamentoAnalytics e LearnDeck, que têm demo pública).
3. Criar o repositório no GitHub e publicar (ver seção acima).
4. Imagem OG em PNG, se a prévia em SVG não renderizar bem no LinkedIn/X.
5. i18n (PT/EN), só se realmente for útil pro público-alvo — não é
   pré-requisito, e o Adventure já cobre esse caso de uso.
6. Se a duplicação de `data/`/`types/` entre os dois portfólios começar a
   doer de verdade, avaliar o pacote `@matheus-emanoel/portfolio-content`
   (ver "Compartilhamento de conteúdo" no README).
