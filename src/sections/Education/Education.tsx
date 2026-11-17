import { Timeline } from '@/components/Timeline/Timeline'
import { getEventsByBranch } from '@/data/career'
import styles from './Education.module.css'

const educationEvents = getEventsByBranch('education')

/** Formação acadêmica formal e longa — branch `education`. */
export function Education() {
  return (
    <section
      id="education"
      className={['section', 'container', styles.education].join(' ')}
      aria-labelledby="education-heading"
    >
      <span className="overline">TRAJETÓRIA / 04</span>
      <h2 id="education-heading" className={styles.heading}>
        Formação<span className="accentDot">.</span>
      </h2>

      <Timeline events={educationEvents} />
    </section>
  )
}
