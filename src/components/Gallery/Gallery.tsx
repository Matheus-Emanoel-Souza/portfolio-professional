import { type MouseEvent, useRef, useState } from 'react'
import { CloseIcon } from '@/components/icons/CloseIcon'
import styles from './Gallery.module.css'

interface GalleryProps {
  images: string[]
  /** Nome do projeto — usado pra montar `alt` de cada screenshot. */
  projectName: string
}

/**
 * Galeria simples com zoom em `<dialog>` nativo (sem lib de carousel/lightbox).
 * Não renderiza nada quando `images` está vazio — hoje é o caso de todos os
 * projetos, então o componente fica pronto mas invisível até alguém colocar
 * screenshots reais em `public/projects/<id>/` e referenciar em `project.screenshots`.
 */
export function Gallery({ images, projectName }: GalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) return null

  function openAt(index: number) {
    setActiveIndex(index)
    dialogRef.current?.showModal()
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close()
    }
  }

  return (
    <div className={styles.gallery}>
      <ul className={styles.grid}>
        {images.map((src, index) => (
          <li key={src}>
            <button type="button" className={styles.thumbButton} onClick={() => openAt(index)}>
              <img
                src={src}
                alt={`Screenshot ${index + 1} de ${projectName}`}
                loading="lazy"
                className={styles.thumb}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className={styles.dialog} onClick={handleBackdropClick}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => dialogRef.current?.close()}
          aria-label="Fechar"
        >
          <CloseIcon />
        </button>
        <img
          src={images[activeIndex]}
          alt={`Screenshot ${activeIndex + 1} de ${projectName}, ampliado`}
          className={styles.expanded}
        />
      </dialog>
    </div>
  )
}
