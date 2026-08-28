import { Link, useParams } from 'react-router-dom'
import { EmptyState } from '@/components/EmptyState/EmptyState'
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'
import { Gallery } from '@/components/Gallery/Gallery'
import { getProjectById } from '@/data/projects'
import { getSkillsByIds } from '@/data/skills'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './ProjectCaseStudy.module.css'

const STATUS_LABEL = {
  completed: 'Concluído',
  'in-progress': 'Em desenvolvimento',
  planned: 'Planejado',
} as const

/**
 * Página própria de case study (`/projects/:id`). Estrutura fixa (Overview,
 * Problema, Solução, Tecnologias, Galeria...) — subseções condicionais
 * (Minha participação, Arquitetura) só aparecem quando o projeto tem esse
 * dado real. "O que aprendi" fica como estado vazio honesto em todos, porque
 * é reflexão pessoal que ninguém além do Matheus pode escrever de verdade.
 */
export default function ProjectCaseStudy() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  useDocumentTitle(project?.name ?? 'Projeto não encontrado')

  if (!project) {
    return (
      <section className={['container', styles.notFound].join(' ')}>
        <h1>Projeto não encontrado</h1>
        <p>Esse case study não existe ou foi removido.</p>
        <Link to="/" state={{ scrollTo: 'projects' }} className={styles.backLink}>
          ← Voltar para projetos
        </Link>
      </section>
    )
  }

  const skills = getSkillsByIds(project.skillIds)

  return (
    <article className={['container', styles.page].join(' ')}>
      <Link to="/" state={{ scrollTo: 'projects' }} className={styles.backLink}>
        ← Voltar para projetos
      </Link>

      <header className={styles.header}>
        <span className={styles.eyebrow}>Case study</span>
        <h1 className={styles.title}>{project.name}</h1>
        <span className={styles.status}>{STATUS_LABEL[project.status]}</span>
        <p className={styles.overview}>{project.description}</p>
      </header>

      <div className={styles.body}>
        <section aria-labelledby="cs-problem">
          <h2 id="cs-problem" className={styles.sectionTitle}>
            Problema
          </h2>
          <p>{project.problem}</p>
        </section>

        <section aria-labelledby="cs-solution">
          <h2 id="cs-solution" className={styles.sectionTitle}>
            Solução
          </h2>
          <p>{project.solution}</p>
        </section>

        {(project.role || project.attribution) && (
          <section aria-labelledby="cs-role">
            <h2 id="cs-role" className={styles.sectionTitle}>
              Minha participação
            </h2>
            {project.role && <p>{project.role}</p>}
            {project.attribution && <p>{project.attribution}</p>}
          </section>
        )}

        {project.architecture && (
          <section aria-labelledby="cs-architecture">
            <h2 id="cs-architecture" className={styles.sectionTitle}>
              Arquitetura e decisões técnicas
            </h2>
            <p>{project.architecture}</p>
          </section>
        )}

        <section aria-labelledby="cs-tech">
          <h2 id="cs-tech" className={styles.sectionTitle}>
            Tecnologias
          </h2>
          <ul className={styles.chips}>
            {skills.map((skill) => (
              <li key={skill.id} className={styles.chip}>
                {skill.name}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cs-gallery">
          <h2 id="cs-gallery" className={styles.sectionTitle}>
            Screenshots
          </h2>
          {project.screenshots && project.screenshots.length > 0 ? (
            <Gallery images={project.screenshots} projectName={project.name} />
          ) : (
            <EmptyState>Screenshots deste projeto ainda serão adicionadas aqui.</EmptyState>
          )}
        </section>

        <section aria-labelledby="cs-learned">
          <h2 id="cs-learned" className={styles.sectionTitle}>
            O que aprendi
          </h2>
          <EmptyState>Em breve.</EmptyState>
        </section>
      </div>

      <div className={styles.links}>
        {project.links.demo && <ExternalLink href={project.links.demo}>Demo</ExternalLink>}
        {project.links.github && <ExternalLink href={project.links.github}>GitHub</ExternalLink>}
      </div>
    </article>
  )
}
