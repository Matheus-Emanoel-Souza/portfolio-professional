import { Timeline } from '@/components/Timeline/Timeline'
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'
import { getEventsByBranch } from '@/data/career'
import styles from './Experience.module.css'

const experienceEvents = getEventsByBranch('career')
const CAREER_GRAPH_URL = 'https://matheus-emanoel-souza.github.io/portfolio-adventure/#/adventure/career'

/** Timeline profissional tradicional — só a branch `career`, mais recente primeiro. */
export function Experience() {
  return (
    <section
      id="experience"
      className={['section', 'container', styles.experience].join(' ')}
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className={styles.heading}>
        Experiência
      </h2>

      <Timeline events={experienceEvents} />

      <div className={styles.callout}>
        <p>Quer visualizar minha trajetória completa?</p>
        <ExternalLink href={CAREER_GRAPH_URL} className={styles.calloutLink}>
          Explorar Career Graph
        </ExternalLink>
      </div>
    </section>
  )
}
