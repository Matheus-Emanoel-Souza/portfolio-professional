# Portfolio Professional

Portfólio profissional de Matheus Emanoel Souza — versão clean, minimalista e
direta ao ponto, pensada pra recrutadores, entrevistas e apresentação de
projetos. Complementa (não substitui) o
[Portfolio Adventure](https://matheus-emanoel-souza.github.io/portfolio-adventure/),
que é a versão criativa/gamificada. Os dois são projetos independentes.

## Objetivo

Ser a apresentação profissional principal — funciona sozinha como referência
pra quem nunca visitou o Portfolio Adventure. Prioriza legibilidade, projetos
bem explicados (como case studies) e experiência profissional clara, sem
tema de jogo, pixel art ou gamificação.

## Stack

Vite + React 19 + TypeScript, React Router (`HashRouter`), Framer Motion, CSS
Modules puro (sem framework de UI), Vitest + Testing Library, oxlint, GitHub
Actions → GitHub Pages. Mesma stack do Portfolio Adventure, por decisão
explícita — nada foi adicionado só por ser popular.

## Estrutura do projeto

```
src/
  main.tsx, App.tsx, routes/     # HashRouter + lazy pages por rota
  pages/Home, ProjectCaseStudy, NotFound
  sections/                      # Header, Hero, Principles, About, FeaturedProjects,
                                  # Experience, Education, Courses, Skills,
                                  # Contact, Footer — uma seção da Home cada
  components/                    # ProjectCard, Timeline, ContactCard,
                                  # CopyButton, ArchitectureDiagram, ResumeButton,
                                  # ExternalLink, EmptyState, Gallery, icons/
  data/                          # profile/projects/career/skills — única
                                  # fonte de conteúdo, tipada
  types/, hooks/, lib/, styles/  # tokens de design (cor/tipo/espaço)
```

## Como executar

```bash
npm install
npm run dev                 # http://localhost:5173
npm run lint                # oxlint
npm run test -- --run
npm run build && npm run preview
```

## Como editar conteúdo

Todo o conteúdo real fica em `src/data/*.ts`, tipado por `src/types/*.ts`.
Nunca inventar dado ali — se faltar informação, deixe o campo `undefined`/
array vazio; a UI mostra um estado vazio honesto (`EmptyState`) em vez de
preencher com algo fictício.

- **Perfil / bio / redes**: `data/profile.ts`.
- **Experiência e formação**: `data/career.ts` — `branch: 'career'` vira a
  seção Experiência, `branch: 'education'` vira Formação, `branch: 'courses'`
  vira Formação Complementar (hoje vazia).
- **Skills**: `data/skills.ts`, agrupadas por `category`. "Usado em" é
  calculado automaticamente (`lib/skillUsage.ts`) a partir do `skillIds` de
  cada projeto — não precisa editar manualmente.

## Como adicionar um projeto

1. Adicione uma entrada em `projects` (`src/data/projects.ts`) com `id`
   único, `problem`/`solution` reais (nunca inventados), `skillIds` que já
   existam em `data/skills.ts`, e `links.demo`/`links.github` quando
   existirem.
2. `featured: true` faz o projeto aparecer na vitrine da Home
   (`FeaturedProjects`) — mantenha entre 3 e 5 projetos featured pra não
   diluir a seção.
3. A página própria (`/projects/<id>`) é gerada automaticamente a partir do
   mesmo dado — nada a fazer além do passo 1. Campos opcionais (`role`,
   `attribution`, `architecture`) só aparecem no case study quando
   preenchidos.

## Como adicionar screenshots

1. Coloque as imagens em `public/projects/<id>/...` (crie a pasta).
2. Preencha `screenshots: ['projects/<id>/nome.jpg', ...]` no projeto
   correspondente em `data/projects.ts` (caminho relativo ao `public/`, sem
   `/` inicial — some com o `base` do Vite automaticamente via `<img src>`
   relativo... na prática, use `${import.meta.env.BASE_URL}projects/<id>/nome.jpg`
   se quiser que funcione tanto em dev quanto sob `/portfolio-professional/`
   no GitHub Pages).
3. O card na Home mostra a primeira imagem como capa; a página do projeto
   mostra todas numa galeria com zoom (`components/Gallery`) — o componente
   já existe e só passa a renderizar algo quando o array deixa de estar
   vazio.

## Como atualizar o currículo

Coloque o PDF em `public/resume/`, com o nome exato de `RESUME_FILE_NAME`
(`src/data/profile.ts`, hoje `Matheus-Emanoel-Curriculo.pdf`). Todo `public/`
é copiado como está pro build — nada mais a mudar. Pra outro nome de
arquivo, só troque a constante; os três botões (Header, Hero, Contato)
acompanham automaticamente, porque todos leem `profile.resumeUrl`.

⚠️ **O PDF ainda não está neste repositório** — mesma pendência do Portfolio
Adventure. O botão já existe e resolve a URL certa, mas até o arquivo ser
adicionado, o download dá 404 em produção.

## Compartilhamento de conteúdo com o Portfolio Adventure

`data/*.ts` e `types/*.ts` aqui espelham 1:1 o shape usado no Adventure,
com conteúdo copiado no momento da criação deste projeto — os dois repos
ficam independentes, sem submodule/monorepo. Na escala atual (5 projetos, 5
eventos de carreira, ~20 skills) o custo de manter os dois sincronizados
manualmente é baixo.

Se cadastrar uma empresa/curso/projeto novo virar "editar em dois lugares"
com frequência, a recomendação é extrair `data/` + `types/` num pacote
pequeno (`@matheus-emanoel/portfolio-content`) publicado no **GitHub
Packages**, consumido como dependência normal pelos dois repositórios —
mantém os dois independentes, com versionamento limpo. Alternativas
descartadas: git submodule (fricção de manutenção solo), script de cópia
manual (fácil de esquecer/drift), monorepo (os dois projetos devem
continuar publicáveis/deployáveis de forma independente).

## Deploy (GitHub Pages)

Settings → Pages → Source = **GitHub Actions**. Push em `main` dispara
`.github/workflows/deploy.yml`: lint → test → build → deploy. `vite.config.ts`
tem `base: '/portfolio-professional/'` hardcoded pro nome deste repo — se o
repo for renomeado, atualizar aqui também. CI usa `npm install`, não
`npm ci` (mesma razão do Adventure: `package-lock.json` gerado no Windows
pode puxar o binário nativo errado do Rollup num runner Linux).

URL esperada: https://matheus-emanoel-souza.github.io/portfolio-professional/

## Testes

`src/App.test.tsx` — smoke tests: Hero, projetos em destaque (incluindo
Portfolio Adventure), link de GitHub, timeline de experiência, botão de
currículo, contato (mailto, LinkedIn, WhatsApp, copiar e-mail), link cruzado
pro Adventure no footer, case study de um projeto, 404. `src/lib/*.test.ts`
— lógica pura (`buildWhatsAppLink`, `getSkillUsage`). Rodar com
`npm run test -- --run`.

`src/test/setup.ts` mocka `matchMedia`, `clipboard` e `HTMLDialogElement`
(`showModal`/`close`) — jsdom não implementa nenhum dos três.

## Acessibilidade

HTML semântico, skip link (`Pular para o conteúdo`), foco visível
(`:focus-visible`), `prefers-reduced-motion` respeitado (CSS + Framer
Motion), links externos identificados visualmente e por texto pra leitor de
tela, headings em ordem.
