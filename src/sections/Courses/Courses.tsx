import { EmptyState } from '@/components/EmptyState/EmptyState'
import { getEventsByBranch } from '@/data/career'
import styles from './Courses.module.css'

const courseEvents = getEventsByBranch('courses')

/**
 * Formação complementar (branch `courses`). Nenhum curso foi cadastrado
 * ainda no Career Graph do Adventure — a seção mostra um estado vazio
 * honesto em vez de inventar cursos, e passa a listar sozinha assim que
 * `data/career.ts` ganhar eventos com `branch: 'courses'`.
 */
export function Courses() {
  if (courseEvents.length === 0) {
    return (
      <section
        id="courses"
        className={['section', 'container', styles.courses].join(' ')}
        aria-labelledby="courses-heading"
      >
        <span className="overline">TRAJETÓRIA / 05</span>
        <h2 id="courses-heading" className={styles.heading}>
          Formação complementar<span className="accentDot">.</span>
        </h2>
        <EmptyState>Cursos e certificações serão adicionados aqui em breve.</EmptyState>
      </section>
    )
  }

  return (
    <section
      id="courses"
      className={['section', 'container', styles.courses].join(' ')}
      aria-labelledby="courses-heading"
    >
      <h2 id="courses-heading" className={styles.heading}>
        Formação complementar
      </h2>
      <ul className={styles.list}>
        {courseEvents.map((course) => (
          <li key={course.id} className={styles.item}>
            <h3>{course.title}</h3>
            {course.organization && <p className={styles.org}>{course.organization}</p>}
            <p className={styles.period}>{course.period}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
