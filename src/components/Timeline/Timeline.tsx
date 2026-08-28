import type { CareerEvent } from '@/types'
import styles from './Timeline.module.css'

interface TimelineProps {
  events: CareerEvent[]
}

/** Timeline vertical tradicional — mais recente primeiro. Usada por Experience e Education. */
export function Timeline({ events }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {events.map((event) => (
        <li key={event.id} className={styles.item}>
          <div className={styles.marker} aria-hidden="true">
            <span className={event.current ? styles.dotCurrent : styles.dot} />
            <span className={styles.line} />
          </div>

          <div className={styles.content}>
            <p className={styles.period}>
              {event.period}
              {event.current && <span className={styles.badge}>Atual</span>}
            </p>
            <h3 className={styles.title}>{event.title}</h3>
            {event.organization && <p className={styles.org}>{event.organization}</p>}
            <p className={styles.description}>{event.description}</p>

            {event.items && event.items.length > 0 && (
              <ul className={styles.subItems}>
                {event.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {event.technologies && event.technologies.length > 0 && (
              <ul className={styles.chips}>
                {event.technologies.map((tech) => (
                  <li key={tech} className={styles.chip}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
