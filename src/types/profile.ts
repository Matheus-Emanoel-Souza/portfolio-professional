export interface ProfileStat {
  label: string
  value: string
}

export interface SocialLinks {
  github: string
  linkedin?: string
  email: string
  /** Número de WhatsApp em formato E.164 sem "+" (ex.: 5527995038630). */
  whatsapp?: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  bio: string
  location?: string
  /**
   * Caminho de uma foto profissional, já com o `base` do Vite aplicado.
   * Opcional de propósito — enquanto não existir uma foto real, fica
   * `undefined` e o layout do Hero funciona inteiramente sem ela. Nunca usar
   * avatar genérico/placeholder aqui.
   */
  photoUrl?: string
  stats: ProfileStat[]
  social: SocialLinks
  /**
   * URL do currículo em PDF, já com o `base` do Vite aplicado (funciona em
   * dev e em produção sob `/portfolio-professional/`) — única fonte pro
   * botão de download (Header, Hero e Contato). Ver `RESUME_FILE_NAME` em
   * `data/profile.ts` pra trocar o arquivo.
   */
  resumeUrl: string
}
