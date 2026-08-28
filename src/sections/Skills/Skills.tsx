import { skills } from '@/data/skills'
import { getSkillUsage } from '@/lib/skillUsage'
import { SKILL_CATEGORIES, SKILL_CATEGORY_LABELS } from '@/types'
import styles from './Skills.module.css'

/** Skills agrupadas por categoria, sem porcentagens — categorias sem nenhuma skill real ficam de fora. */
export function Skills() {
  return (
    <section
      id="skills"
      className={['section', 'container', styles.skills].join(' ')}
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className={styles.heading}>
        Skills
      </h2>

      <div className={styles.groups}>
        {SKILL_CATEGORIES.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category)
          if (categorySkills.length === 0) return null

          return (
            <div key={category} className={styles.group}>
              <h3 className={styles.groupTitle}>{SKILL_CATEGORY_LABELS[category]}</h3>
              <ul className={styles.skillList}>
                {categorySkills.map((skill) => {
                  const usage = getSkillUsage(skill.id)
                  return (
                    <li key={skill.id} className={styles.skill}>
                      <span className={styles.skillName}>{skill.name}</span>
                      {usage.length > 0 && (
                        <span className={styles.usage}>Usado em: {usage.join(', ')}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
