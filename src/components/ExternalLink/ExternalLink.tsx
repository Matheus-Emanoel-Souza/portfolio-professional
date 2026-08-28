import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRightIcon } from '@/components/icons/ArrowUpRightIcon'
import styles from './ExternalLink.module.css'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  /** Esconde a setinha — usar só quando o ícone externo já vem de outro lugar (ex.: dentro de um ícone social). */
  hideIcon?: boolean
}

/** Link externo identificável — abre em nova aba, seta visual e aviso pra leitor de tela. */
export function ExternalLink({ href, children, hideIcon, className, ...rest }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[styles.link, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
      {!hideIcon && <ArrowUpRightIcon className={styles.icon} />}
      <span className="visually-hidden"> (abre em nova aba)</span>
    </a>
  )
}
