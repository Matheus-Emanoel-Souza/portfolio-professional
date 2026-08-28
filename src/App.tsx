import { Suspense } from 'react'
import { Footer } from '@/sections/Footer/Footer'
import { Header } from '@/sections/Header/Header'
import { AppRoutes } from './routes'

/**
 * Header e Footer ficam fora das rotas — persistem entre Home e as páginas
 * de case study. `#main-content` é o alvo do skip link (acessibilidade).
 */
export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
