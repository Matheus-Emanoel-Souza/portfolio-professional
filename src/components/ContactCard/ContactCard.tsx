import type { ReactNode } from 'react'
import styles from './ContactCard.module.css'

interface ContactCardProps {
  icon: ReactNode
  title: string
  action: string
  href: string
  external?: boolean
  ariaLabel: string
  extra?: ReactNode
}

/** Card grande de contato (Email/LinkedIn/WhatsApp) — sem GitHub, que fica ligado a Projetos. */
export function ContactCard({ icon, title, action, href, external, ariaLabel, extra }: ContactCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <a
        href={href}
        className={styles.action}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {action}
      </a>
      {extra && <div className={styles.extra}>{extra}</div>}
    </div>
  )
}
