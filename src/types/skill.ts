export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'architecture'

export const SKILL_CATEGORIES: SkillCategory[] = [
  'frontend',
  'backend',
  'database',
  'devops',
  'tools',
  'architecture',
]

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: 'Front-end',
  backend: 'Back-end',
  database: 'Database',
  devops: 'DevOps',
  tools: 'Tools',
  architecture: 'Arquitetura',
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  /** Frase curta de contexto — nunca um percentual arbitrário. */
  summary?: string
}
