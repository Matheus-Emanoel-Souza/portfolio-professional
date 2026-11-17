import { ProjectCard } from '@/components/ProjectCard/ProjectCard'
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'
import { getFeaturedProjects } from '@/data/projects'
import { profile } from '@/data/profile'
import styles from './FeaturedProjects.module.css'

const featuredProjects = getFeaturedProjects()

/** Vitrine de projetos — a seção mais importante da Home, apresentada como mini case studies. */
export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className={['section', 'container', styles.projects].join(' ')}
      aria-labelledby="projects-heading"
    >
      <div className={styles.head}>
        <div>
          <span className="overline">PORTFÓLIO / 02</span>
          <h2 id="projects-heading" className={styles.heading}>
            Projetos em destaque<span className="accentDot">.</span>
          </h2>
        </div>
        <p className={styles.subtitle}>
          Projetos que exploram engenharia de software, dados e soluções para problemas reais — da concepção à
          evolução contínua.
        </p>
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <p className={styles.footer}>
        Para ver mais projetos, verifique em <ExternalLink href={profile.social.github}>GitHub</ExternalLink>.
      </p>
    </section>
  )
}
