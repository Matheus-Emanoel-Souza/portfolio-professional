import type { ReactNode } from 'react'
import styles from './EmptyState.module.css'

interface EmptyStateProps {
  children: ReactNode
}

/**
 * Estado vazio honesto — usado sempre que um dado real ainda não existe
 * (cursos, screenshots, "o que aprendi" de um case study) em vez de
 * preencher com conteúdo inventado.
 */
export function EmptyState({ children }: EmptyStateProps) {
  return <p className={styles.empty}>{children}</p>
}
