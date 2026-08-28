import { careerEvents } from '@/data/career'
import { profile } from '@/data/profile'
import styles from './About.module.css'

const careerStartYear = Math.min(
  ...careerEvents.filter((event) => event.branch === 'career').map((event) => Number(event.sortDate.slice(0, 4))),
)

const currentEducation = careerEvents.find((event) => event.branch === 'education' && event.current)

const facts = [
  { label: 'Experiência', value: `${careerStartYear} — atual` },
  ...(currentEducation
    ? [{ label: 'Formação', value: `${currentEducation.title} — ${currentEducation.organization}` }]
    : []),
  ...profile.stats.filter((stat) => stat.label !== 'Formação'),
  ...(profile.location ? [{ label: 'Localização', value: profile.location }] : []),
]

/** Resumo curto — bio real do `profile.ts` usada literalmente, mais uma lista de fatos verificáveis. */
export function About() {
  return (
    <section id="about" className={['section', 'container', styles.about].join(' ')} aria-labelledby="about-heading">
      <h2 id="about-heading" className={styles.heading}>
        Sobre
      </h2>

      <div className={styles.grid}>
        <p className={styles.bio}>{profile.bio}</p>

        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
