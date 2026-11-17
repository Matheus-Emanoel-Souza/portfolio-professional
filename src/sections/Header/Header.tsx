import type { MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ResumeButton } from '@/components/ResumeButton/ResumeButton'
import { profile } from '@/data/profile'
import { useScrolled } from '@/hooks/useScrolled'
import { scrollToSection } from '@/lib/scrollToSection'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { id: 'about', label: 'Sobre' },
  { id: 'projects', label: 'Projetos' },
  { id: 'experience', label: 'Experiência' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contato' },
]

/**
 * Header sticky, minimalista. Ganha fundo/borda a partir de `useScrolled`.
 * Nav por scroll (não por rota — ver `scrollToSection`); fora da Home,
 * navega pra `/` passando o alvo via `location.state`, que a Home lê num
 * `useEffect` pra rolar até lá depois de montar.
 */
export function Header() {
  const scrolled = useScrolled()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault()
    if (isHome) {
      scrollToSection(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <div className={[styles.inner, 'container'].join(' ')}>
        <Link to="/" className={styles.brand} aria-label={`${profile.name}, início do portfólio`}>
          <span className={styles.brandMark} aria-hidden="true">
            M.
          </span>
          <span className={styles.brandName}>
            {profile.name}
            <small>{profile.role}</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={(event) => handleNavClick(event, item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ResumeButton variant="compact" />
        </div>
      </div>
    </header>
  )
}
