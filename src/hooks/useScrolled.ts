import { useEffect, useState } from 'react'

/** `true` assim que a página passa de `threshold`px de scroll — usado pelo Header sticky. */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(() => (typeof window === 'undefined' ? false : window.scrollY > threshold))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
