import { getProjectsBySkillId } from '@/data/projects'

/**
 * Skills usadas pra construir os dois portfólios (fato verdadeiro por
 * construção — os dois usam essa mesma stack). `portfolio-adventure` já
 * aparece em `data/projects.ts` com esses `skillIds`; aqui só acrescentamos
 * "Portfolio Professional" à lista, já que ele mesmo não entra como um
 * `Project` (seria autorreferência sem sentido no showcase).
 */
const META_SKILL_IDS = [
  'react',
  'typescript',
  'vite',
  'css',
  'framer-motion',
  'git',
  'github',
  'github-actions',
]

/** Nomes dos projetos/portfólios onde uma skill é comprovadamente usada — nunca inventado. */
export function getSkillUsage(skillId: string): string[] {
  const names = getProjectsBySkillId(skillId).map((project) => project.name)
  if (META_SKILL_IDS.includes(skillId) && !names.includes('Portfolio Professional')) {
    names.push('Portfolio Professional')
  }
  return names
}
