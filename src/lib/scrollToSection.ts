/**
 * Rola suavemente até uma seção da Home pelo `id`, sem tocar na URL/rota —
 * importante porque o app usa `HashRouter` (o `#` já pertence às rotas, um
 * `href="#about"` de verdade tentaria navegar pra rota `/about`). Respeita
 * `prefers-reduced-motion`. Use em `onClick`, sempre com `event.preventDefault()`.
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id)
  if (!target) return

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}
