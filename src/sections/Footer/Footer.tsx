import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { profile } from '@/data/profile'
import styles from './Footer.module.css'

const ADVENTURE_URL = 'https://matheus-emanoel-souza.github.io/portfolio-adventure/'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={[styles.inner, 'container'].join(' ')}>
        <div className={styles.main}>
          <div>
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.role}>{profile.role}</p>
          </div>

          <div className={styles.social}>
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
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre em nova aba)"
            >
              <GithubIcon />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} {profile.name}</p>
          <a href={ADVENTURE_URL} target="_blank" rel="noopener noreferrer" className={styles.adventureLink}>
            Quer conhecer uma versão diferente deste portfólio? Explore o Portfolio Adventure →
          </a>
        </div>
      </div>
    </footer>
  )
}
