import type { Profile } from '@/types'

/**
 * Conteúdo espelhado de `portfolio-adventure/src/data/profile.ts` (mesma
 * fonte real, sem o campo `handle` — identidade de jogador não faz sentido
 * aqui). Ver "Compartilhamento de conteúdo" no HANDOFF.md pra estratégia
 * futura de não duplicar isso entre os dois repositórios.
 *
 * Pra trocar o currículo, substitua o arquivo em `public/resume/` mantendo
 * este nome, ou mude a constante abaixo (única alteração necessária).
 */
export const RESUME_FILE_NAME = 'Matheus-Emanoel-Curriculo.pdf'

/**
 * Dados reais confirmados: nome, headline, bio, GitHub, LinkedIn, e-mail e
 * WhatsApp. Localização e foto seguem em aberto — nunca inventar aqui.
 */
export const profile: Profile = {
  name: 'Matheus Emanoel Souza',
  role: 'Desenvolvedor de Software',
  tagline: 'Da mecânica industrial pro código — hoje construindo a ponte entre os dois.',
  bio: 'Comecei no chão de fábrica, mexendo com mecânica industrial — entender como as coisas funcionam por dentro sempre me atraiu. Migrei pra Engenharia da Computação buscando essa mesma lógica, só que aplicada a software, e hoje é isso que mais me empolga: pegar um problema real (às vezes um problema que já vi de perto na indústria) e resolver com código. Meu foco agora é unir as duas bagagens — mecânica e tecnologia — em projetos que conectem automação, dados e sistemas.',
  // TODO: cidade/país, se quiser exibir.
  location: undefined,
  // TODO: foto profissional — enquanto ausente, o Hero funciona sem ela.
  photoUrl: undefined,
  stats: [
    { label: 'Formação', value: 'Mecânica Industrial → Engenharia da Computação' },
    { label: 'Foco atual', value: 'Desenvolvimento de software' },
    { label: 'Diferencial', value: 'Ponte entre indústria e tecnologia' },
  ],
  social: {
    github: 'https://github.com/Matheus-Emanoel-Souza',
    linkedin: 'https://www.linkedin.com/in/matheus-emanoel-821241184',
    email: 'matheusemanoelgomessouza@gmail.com',
    whatsapp: '5527995038630',
  },
  // import.meta.env.BASE_URL = base do vite.config.ts ('/portfolio-professional/'
  // em produção, '/' em dev) — nunca prefixo fixo, senão quebra no GitHub
  // Pages (Project Page, servida num subcaminho).
  resumeUrl: `${import.meta.env.BASE_URL}resume/${RESUME_FILE_NAME}`,
}
