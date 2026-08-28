import { describe, expect, it } from 'vitest'
import { getSkillUsage } from './skillUsage'

describe('getSkillUsage', () => {
  it('cruza uma skill de meta-stack com os dois portfólios', () => {
    const usage = getSkillUsage('react')
    expect(usage).toContain('Portfolio Adventure')
    expect(usage).toContain('Portfolio Professional')
  })

  it('cruza uma skill específica só com o projeto real que a usa', () => {
    const usage = getSkillUsage('arduino')
    expect(usage).toEqual(['RadarTorres'])
  })

  it('retorna lista vazia pra uma skill sem nenhum projeto vinculado', () => {
    expect(getSkillUsage('kanban')).toEqual([])
  })
})
