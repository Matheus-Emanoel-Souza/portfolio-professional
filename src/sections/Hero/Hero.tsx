import { motion, type Variants } from 'framer-motion'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { ResumeButton } from '@/components/ResumeButton/ResumeButton'
import { profile } from '@/data/profile'
import { scrollToSection } from '@/lib/scrollToSection'
import styles from './Hero.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

/** Primeira impressão do site — texto primeiro, sem foto (arquitetura pronta pra quando existir uma). */
export function Hero() {
  return (
    <section className={[styles.hero, 'container'].join(' ')} aria-label="Apresentação">
      <motion.p className={styles.greeting} initial="hidden" animate="visible" custom={0} variants={fadeUp}>
        Olá, eu sou
      </motion.p>

      <motion.h1 className={styles.name} initial="hidden" animate="visible" custom={0.08} variants={fadeUp}>
        {profile.name}
      </motion.h1>

      <motion.p className={styles.role} initial="hidden" animate="visible" custom={0.16} variants={fadeUp}>
        {profile.role}
      </motion.p>

      <motion.p className={styles.tagline} initial="hidden" animate="visible" custom={0.24} variants={fadeUp}>
        {profile.tagline}
      </motion.p>

      <motion.div className={styles.actions} initial="hidden" animate="visible" custom={0.32} variants={fadeUp}>
        <a
          href="#projects"
          className={styles.primaryCta}
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('projects')
          }}
        >
          Ver projetos
        </a>
        <ResumeButton />
      </motion.div>

      <motion.div className={styles.social} initial="hidden" animate="visible" custom={0.4} variants={fadeUp}>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (abre em nova aba)"
        >
          <GithubIcon />
        </a>
        {profile.social.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (abre em nova aba)"
          >
            <LinkedInIcon />
          </a>
        )}
      </motion.div>
    </section>
  )
}
