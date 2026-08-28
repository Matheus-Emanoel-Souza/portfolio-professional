/** Branch da trajetória. Union fechada — estender aqui pra adicionar uma nova categoria. */
export type CareerBranch = 'career' | 'education' | 'courses'

export interface CareerEvent {
  id: string
  branch: CareerBranch
  title: string
  organization?: string
  /** "YYYY-MM" — usado só pra ordenar no eixo temporal, nunca exibido cru. */
  sortDate: string
  /** Texto livre exatamente como deve aparecer, ex. "Julho de 2025 — atual". */
  period: string
  /** Marca o evento em andamento (estágio atual, graduação em curso). */
  current?: boolean
  description: string
  /** Nunca inventar aqui — só tecnologias/conhecimentos confirmados. */
  technologies?: string[]
  /**
   * Trilha agrupada (opcional): quando um evento representa vários cursos
   * pequenos relacionados, liste-os aqui em vez de criar um `CareerEvent`
   * pra cada um. Usado sobretudo na branch `courses`.
   */
  items?: string[]
}
