import styles from './ArchitectureDiagram.module.css'

/**
 * Ilustração decorativa — diagrama abstrato de arquitetura de software
 * (núcleo + 4 camadas conectadas), sem dependência de imagem. Puramente
 * estilística: não representa uma arquitetura real de nenhum projeto
 * específico, só reforça a identidade visual do Hero.
 */
export function ArchitectureDiagram() {
  return (
    <div className={styles.card} role="img" aria-label="Ilustração de arquitetura de software: interface, backend, dados e inteligência conectados a um núcleo central">
      <div className={styles.top}>
        <span className={styles.eyebrow}>ME. / ENGINEERING SYSTEM</span>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>

      <div className={styles.core}>
        <div className={styles.orbit} />
        <div className={styles.orbit} />
        <div className={styles.orbit} />

        <svg className={styles.pathways} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <path d="M200 200V36M200 200H36M200 200H364M200 200V364" />
          <circle cx="200" cy="115" r="3" />
          <circle cx="115" cy="200" r="3" />
          <circle cx="285" cy="200" r="3" />
          <circle cx="200" cy="285" r="3" />
        </svg>

        <div className={styles.coreSquare} />
        <div className={styles.coreContent}>
          <strong>&lt;M/&gt;</strong>
          <small>DEVELOPER</small>
        </div>

        <div className={[styles.node, styles.nodeOne].join(' ')}>
          INTERFACE
          <small>Experiência</small>
        </div>
        <div className={[styles.node, styles.nodeTwo].join(' ')}>
          BACKEND
          <small>Arquitetura</small>
        </div>
        <div className={[styles.node, styles.nodeThree].join(' ')}>
          DADOS
          <small>Integridade</small>
        </div>
        <div className={[styles.node, styles.nodeFour].join(' ')}>
          INTELIGÊNCIA
          <small>Inovação</small>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.eyebrow}>DO CONCEITO À IMPLEMENTAÇÃO</span>
        <span className={styles.metric}>SYSTEM READY</span>
      </div>
    </div>
  )
}
