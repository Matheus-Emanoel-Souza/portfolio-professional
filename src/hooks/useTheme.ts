import { useCallback, useEffect, useState } from 'react'

export type ThemePreference = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function getStoredPreference(): ThemePreference | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

function getSystemPreference(): ThemePreference {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Tema claro/escuro com 3 estados possíveis: preferência explícita do
 * usuário (persistida em localStorage), ou o sistema (`prefers-color-scheme`)
 * enquanto ele nunca escolheu manualmente. `theme` é sempre 'light' | 'dark'
 * pra uso em UI (ex.: ícone do toggle); o atributo `data-theme` só é escrito
 * no `<html>` quando existe escolha explícita — sem escolha, o CSS resolve
 * sozinho via `@media (prefers-color-scheme)` em `styles/tokens.css`.
 */
export function useTheme(): { theme: ThemePreference; toggleTheme: () => void } {
  const [explicit, setExplicit] = useState<ThemePreference | null>(getStoredPreference)
  const [systemTheme, setSystemTheme] = useState<ThemePreference>(getSystemPreference)

  useEffect(() => {
    if (!window.matchMedia) return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (event: MediaQueryListEvent) => setSystemTheme(event.matches ? 'dark' : 'light')
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (explicit) {
      root.setAttribute('data-theme', explicit)
    } else {
      root.removeAttribute('data-theme')
    }
  }, [explicit])

  const theme = explicit ?? systemTheme

  const toggleTheme = useCallback(() => {
    setExplicit((current) => {
      const next: ThemePreference = (current ?? systemTheme) === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [systemTheme])

  return { theme, toggleTheme }
}
