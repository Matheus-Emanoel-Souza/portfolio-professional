import { Link } from 'react-router-dom'
import { getSkillsByIds } from '@/data/skills'
import type { Project } from '@/types'
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  index: number
}

const STATUS_LABEL: Record<Project['status'], string> = {
  completed: 'Concluído',
  'in-progress': 'Em desenvolvimento',
  planned: 'Planejado',
}

/** Mini case study numerado — usado na vitrine de projetos da Home. */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const skills = getSkillsByIds(project.skillIds)
  const cover = project.screenshots?.[0]

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3 className={styles.name}>{project.name}</h3>
          <span className={styles.status}>{STATUS_LABEL[project.status]}</span>
        </div>
      </div>

      {cover && (
        <img
          src={cover}
          alt={`Screenshot principal de ${project.name}`}
          loading="lazy"
          className={styles.cover}
        />
      )}

      <p className={styles.description}>{project.description}</p>

      <div className={styles.caseStudy}>
        <div>
          <span className={styles.label}>Problema</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span className={styles.label}>Solução</span>
          <p>{project.solution}</p>
        </div>
      </div>

      {skills.length > 0 && (
        <ul className={styles.chips}>
          {skills.map((skill) => (
            <li key={skill.id} className={styles.chip}>
              {skill.name}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.actions}>
        <Link to={`/projects/${project.id}`} className={styles.caseStudyLink}>
          Ver case study →
        </Link>
        {project.links.demo && <ExternalLink href={project.links.demo}>Demo</ExternalLink>}
        {project.links.github && <ExternalLink href={project.links.github}>GitHub</ExternalLink>}
      </div>
    </article>
  )
}
