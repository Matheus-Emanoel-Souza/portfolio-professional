import { useState } from 'react'
import styles from './CopyButton.module.css'

interface CopyButtonProps {
  value: string
  label: string
  copiedLabel: string
  ariaLabel: string
  ariaLabelCopied: string
}

/** Botão "copiar" com feedback textual temporário — usado no card de e-mail do Contato. */
export function CopyButton({ value, label, copiedLabel, ariaLabel, ariaLabelCopied }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard indisponível (permissão negada, contexto não seguro etc.) — falha silenciosa,
      // o valor continua visível/selecionável na tela pro usuário copiar manualmente.
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-label={copied ? ariaLabelCopied : ariaLabel}
    >
      {copied ? copiedLabel : label}
    </button>
  )
}
