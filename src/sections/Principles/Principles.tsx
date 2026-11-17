import styles from './Principles.module.css'

const PRINCIPLES = [
  { title: 'Arquitetura consistente', text: 'Estruturas que fazem sentido' },
  { title: 'Experiência intuitiva', text: 'Simplicidade no uso diário' },
  { title: 'Evolução contínua', text: 'Melhoria orientada por resultados' },
]

/** Faixa curta de princípios de trabalho — declaração de estilo, não um fato sobre um projeto específico. */
export function Principles() {
  return (
    <div className={styles.strip} aria-label="Princípios de desenvolvimento">
      <div className={['container', styles.grid].join(' ')}>
        {PRINCIPLES.map((principle, index) => (
          <div key={principle.title} className={styles.item}>
            <span className={styles.index}>{String(index + 1).padStart(2, '0')} /</span>
            <div>
              <div className={styles.title}>{principle.title}</div>
              <div className={styles.text}>{principle.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
