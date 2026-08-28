import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './NotFound.module.css'

export default function NotFound() {
  useDocumentTitle('Página não encontrada')

  return (
    <section className={['container', styles.notFound].join(' ')}>
      <p className={styles.code}>404</p>
      <h1>Essa página não existe.</h1>
      <Link to="/" className={styles.link}>
        ← Voltar para a home
      </Link>
    </section>
  )
}
