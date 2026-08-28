import { useEffect } from 'react'

const SITE_TITLE = 'Matheus Emanoel — Desenvolvedor de Software'

/** Atualiza `document.title`, restaurando o título base ao desmontar. */
export function useDocumentTitle(pageTitle?: string): void {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · ${SITE_TITLE}` : SITE_TITLE
    return () => {
      document.title = SITE_TITLE
    }
  }, [pageTitle])
}
