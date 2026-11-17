import { ContactCard } from '@/components/ContactCard/ContactCard'
import { CopyButton } from '@/components/CopyButton/CopyButton'
import { EmailIcon } from '@/components/icons/EmailIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { ResumeButton } from '@/components/ResumeButton/ResumeButton'
import { profile } from '@/data/profile'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import styles from './Contact.module.css'

/** CTA final — Email/LinkedIn/WhatsApp. Sem GitHub aqui (fica ligado a Projetos). */
export function Contact() {
  return (
    <section
      id="contact"
      className={['section', 'container', styles.contact].join(' ')}
      aria-labelledby="contact-heading"
    >
      <span className={['overline', styles.overline].join(' ')}>CONTATO / 07</span>
      <h2 id="contact-heading" className={styles.heading}>
        Vamos conversar<span className={styles.accentMint}>?</span>
      </h2>
      <p className={styles.intro}>Tem uma oportunidade, projeto ou quer trocar uma ideia?</p>

      <div className={styles.grid}>
        <ContactCard
          icon={<EmailIcon />}
          title="Email"
          action="Enviar email"
          href={`mailto:${profile.social.email}`}
          ariaLabel={`Enviar email para ${profile.social.email}`}
          extra={
            <CopyButton
              value={profile.social.email}
              label="Copiar email"
              copiedLabel="Copiado!"
              ariaLabel={`Copiar endereço de email ${profile.social.email}`}
              ariaLabelCopied="Email copiado"
            />
          }
        />

        {profile.social.linkedin && (
          <ContactCard
            icon={<LinkedInIcon />}
            title="LinkedIn"
            action="Vamos nos conectar →"
            href={profile.social.linkedin}
            external
            ariaLabel="Abrir perfil no LinkedIn (abre em nova aba)"
          />
        )}

        {profile.social.whatsapp && (
          <ContactCard
            icon={<WhatsAppIcon />}
            title="WhatsApp"
            action="Conversar →"
            href={buildWhatsAppLink(profile.social.whatsapp)}
            external
            ariaLabel="Conversar no WhatsApp (abre em nova aba)"
          />
        )}
      </div>

      <div className={styles.resumeCallout}>
        <ResumeButton />
      </div>
    </section>
  )
}
