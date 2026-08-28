export type ProjectStatus = 'completed' | 'in-progress' | 'planned'

export interface ProjectLinks {
  demo?: string
  github?: string
}

export interface Project {
  id: string
  name: string
  status: ProjectStatus
  /** Resumo curto pro card na home. */
  description: string
  problem: string
  solution: string
  /** ids de `Skill`, usados pra montar os chips de tecnologia e o cruzamento skill→projeto. */
  skillIds: string[]
  /** Caminhos de imagem (opcional — nada fictício até existirem screenshots reais). */
  screenshots?: string[]
  links: ProjectLinks
  /** Repo público → aparece com link de GitHub. */
  isPublicRepo?: boolean
  /** Aparece na vitrine da Home (FeaturedProjects) e tem página própria em /projects/:id. */
  featured?: boolean
  /**
   * Créditos de autoria quando o projeto é um fork/evolução de outro
   * trabalho — nunca omitir quando existir. Opcional.
   */
  attribution?: string
  /** Contexto adicional sobre a participação do autor (ex.: TCC, fork). Opcional. */
  role?: string
  /** Decisões técnicas / arquitetura, quando há material real o suficiente pra render. Opcional. */
  architecture?: string
}
