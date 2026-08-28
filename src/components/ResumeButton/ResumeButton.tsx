import { profile, RESUME_FILE_NAME } from '@/data/profile'
import { DownloadIcon } from '@/components/icons/DownloadIcon'
import styles from './ResumeButton.module.css'

interface ResumeButtonProps {
  /** 'primary' = CTA grande (Hero/Contato); 'compact' = versão pro Header sticky. */
  variant?: 'primary' | 'compact'
  className?: string
}

/**
 * Único ponto de download do currículo — Header, Hero e Contato lêem daqui,
 * que por sua vez lê `profile.resumeUrl` (fonte única, `src/data/profile.ts`).
 */
export function ResumeButton({ variant = 'primary', className }: ResumeButtonProps) {
  return (
    <a
      href={profile.resumeUrl}
      download={RESUME_FILE_NAME}
      className={[styles.button, styles[variant], className].filter(Boolean).join(' ')}
    >
      <DownloadIcon className={styles.icon} />
      Baixar currículo
    </a>
  )
}
