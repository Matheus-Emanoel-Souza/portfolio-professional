import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { About } from '@/sections/About/About'
import { Contact } from '@/sections/Contact/Contact'
import { Courses } from '@/sections/Courses/Courses'
import { Education } from '@/sections/Education/Education'
import { Experience } from '@/sections/Experience/Experience'
import { FeaturedProjects } from '@/sections/FeaturedProjects/FeaturedProjects'
import { Hero } from '@/sections/Hero/Hero'
import { Skills } from '@/sections/Skills/Skills'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { scrollToSection } from '@/lib/scrollToSection'

interface HomeNavigationState {
  scrollTo?: string
}

/**
 * Home de página única — todas as seções na ordem do brief. Se o Header
 * navegou pra cá vindo de outra rota com um alvo de scroll
 * (`location.state.scrollTo`, ver `sections/Header`), rola até a seção
 * certa depois de montar e limpa o state do histórico.
 */
export default function Home() {
  useDocumentTitle()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const state = location.state as HomeNavigationState | null
    if (state?.scrollTo) {
      scrollToSection(state.scrollTo)
      navigate('/', { replace: true, state: null })
    }
  }, [location.state, navigate])

  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Courses />
      <Skills />
      <Contact />
    </>
  )
}
