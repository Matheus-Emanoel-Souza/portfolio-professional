import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '@/App'
import { profile, RESUME_FILE_NAME } from '@/data/profile'
import { getProjectById } from '@/data/projects'

/**
 * As páginas são carregadas via `React.lazy` (`src/routes/index.tsx`) — o
 * import dinâmico é assíncrono mesmo em teste, então esperamos o `<main>`
 * ganhar conteúdo antes de fazer qualquer asserção (o fallback do Suspense é
 * `null`, então `<main>` fica vazio enquanto a rota ainda está carregando).
 */
async function renderApp(initialEntries: string[] = ['/']) {
  const utils = render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>,
  )
  await waitFor(
    () => {
      expect(document.getElementById('main-content')?.childElementCount).toBeGreaterThan(0)
    },
    { timeout: 5000 },
  )
  return utils
}

describe('Home', () => {
  it('renderiza o Hero com nome e role', async () => {
    await renderApp()
    const hero = screen.getByRole('region', { name: /apresentação/i })
    expect(within(hero).getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(within(hero).getByText(profile.role)).toBeInTheDocument()
  })

  it('renderiza os projetos em destaque, incluindo o Portfolio Adventure com o link de demo correto', async () => {
    await renderApp()
    const adventure = getProjectById('portfolio-adventure')!
    const heading = screen.getByRole('heading', { level: 3, name: 'Portfolio Adventure' })
    expect(heading).toBeInTheDocument()

    const card = heading.closest('article')!
    const demoLink = within(card).getByRole('link', { name: /demo/i })
    expect(demoLink).toHaveAttribute('href', adventure.links.demo)
  })

  it('linka o GitHub do perfil ao final da seção de projetos', async () => {
    await renderApp()
    const footerParagraph = screen.getByText(/para ver mais projetos/i)
    const githubLink = within(footerParagraph).getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', profile.social.github)
  })

  it('renderiza a timeline de experiência com as empresas reais', async () => {
    await renderApp()
    const experienceSection = document.getElementById('experience')!
    const withinExperience = within(experienceSection as HTMLElement)
    expect(withinExperience.getByText('Oncovit')).toBeInTheDocument()
    expect(withinExperience.getByText('OGMO-ES')).toBeInTheDocument()
    expect(withinExperience.getByText('FIBRASA S.A.')).toBeInTheDocument()
    expect(withinExperience.getByText('TechnipFMC')).toBeInTheDocument()
  })

  it('o botão de currículo tem href e download corretos', async () => {
    await renderApp()
    const resumeButtons = screen.getAllByRole('link', { name: /baixar currículo/i })
    expect(resumeButtons.length).toBeGreaterThan(0)
    for (const button of resumeButtons) {
      expect(button).toHaveAttribute('href', profile.resumeUrl)
      expect(button).toHaveAttribute('download', RESUME_FILE_NAME)
    }
  })

  it('contato: mailto correto, LinkedIn/WhatsApp corretos, e copiar email funciona', async () => {
    const user = userEvent.setup()
    await renderApp()

    const emailLink = screen.getByRole('link', { name: new RegExp(`enviar email para ${profile.social.email}`, 'i') })
    expect(emailLink).toHaveAttribute('href', `mailto:${profile.social.email}`)

    const linkedinLink = screen.getByRole('link', { name: /abrir perfil no linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', profile.social.linkedin)

    const whatsappLink = screen.getByRole('link', { name: /conversar no whatsapp/i })
    expect(whatsappLink.getAttribute('href')).toContain('https://wa.me/5527995038630')

    const copyButton = screen.getByRole('button', { name: /copiar endereço de email/i })
    await user.click(copyButton)
    expect(await screen.findByRole('button', { name: /email copiado/i })).toBeInTheDocument()
  })

  it('o footer contém o link cruzado pro Portfolio Adventure', async () => {
    await renderApp()
    const adventureLink = screen.getByRole('link', {
      name: /explore o portfolio adventure/i,
    })
    expect(adventureLink).toHaveAttribute('href', 'https://matheus-emanoel-souza.github.io/portfolio-adventure/')
  })
})

describe('ProjectCaseStudy', () => {
  it('renderiza problema, solução e atribuição do Faturamento Analytics', async () => {
    await renderApp(['/projects/faturamento-analytics'])
    const project = getProjectById('faturamento-analytics')!

    expect(screen.getByRole('heading', { level: 1, name: project.name })).toBeInTheDocument()
    expect(screen.getByText(project.problem)).toBeInTheDocument()
    expect(screen.getByText(project.solution)).toBeInTheDocument()
    expect(screen.getByText(/lucasmarx10/)).toBeInTheDocument()
  })

  it('mostra "projeto não encontrado" pra um id inexistente', async () => {
    await renderApp(['/projects/nao-existe'])
    expect(screen.getByRole('heading', { name: /projeto não encontrado/i })).toBeInTheDocument()
  })
})

describe('Rota desconhecida', () => {
  it('renderiza NotFound com link pra home', async () => {
    await renderApp(['/rota-que-nao-existe'])
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voltar para a home/i })).toHaveAttribute('href', '/')
  })
})
