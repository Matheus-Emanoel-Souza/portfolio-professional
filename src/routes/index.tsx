import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy por rota — o Rollup separa vendor de app code automaticamente a partir daqui.
const Home = lazy(() => import('@/pages/Home/Home'))
const ProjectCaseStudy = lazy(() => import('@/pages/ProjectCaseStudy/ProjectCaseStudy'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
