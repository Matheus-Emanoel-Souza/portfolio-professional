import type { CareerEvent } from '@/types'

/**
 * Trajetória real, espelhada de `portfolio-adventure/src/data/career.ts`
 * (mesmos eventos, formato simplificado pra uma timeline tradicional — sem
 * os campos específicos do Career Graph como `commitType`/`startSortDate`).
 * `branch` separa experiência profissional (`career`), formação acadêmica
 * formal e longa (`education`) e cursos/certificações menores (`courses`).
 * `sortDate` ("YYYY-MM") é só pra ordenar — o texto exibido é sempre
 * `period`. Nunca inventar entradas aqui.
 *
 * Nenhum evento de `courses` foi cadastrado ainda — a Courses section mostra
 * um estado vazio honesto em vez de inventar cursos.
 */
export const careerEvents: CareerEvent[] = [
  {
    id: 'ucl',
    branch: 'education',
    title: 'Engenharia da Computação',
    organization: 'UCL',
    sortDate: '2026-01',
    period: '2021 — atual · 9º período em 2026',
    current: true,
    description: 'Graduação em andamento.',
  },
  {
    id: 'oncovit',
    branch: 'career',
    title: 'Estagiário de Desenvolvimento',
    organization: 'Oncovit',
    sortDate: '2025-07',
    period: 'Julho de 2025 — atual',
    current: true,
    description:
      'Desenvolvimento de melhorias e implementações para o ERP Sankhya, voltado ao ramo de medicamentos.',
  },
  {
    id: 'ogmo-es',
    branch: 'career',
    title: 'Estagiário de TI',
    organization: 'OGMO-ES',
    sortDate: '2023-11',
    period: 'Novembro de 2023 — Novembro de 2024',
    description:
      'Manutenção preventiva e corretiva de hardware, instalação e configuração de software, suporte técnico via Service Desk e apoio no desenvolvimento e manutenção de sistemas internos.',
  },
  {
    id: 'fibrasa',
    branch: 'career',
    title: 'Estagiário de Engenharia de Processos',
    organization: 'FIBRASA S.A.',
    sortDate: '2022-06',
    period: 'Junho de 2022 — Junho de 2023',
    description:
      'Procedimentos operacionais, monitoramento de indicadores de desempenho e apoio em auditorias de conformidade (ISO 22000, TPM) na área industrial.',
  },
  {
    id: 'technipfmc',
    branch: 'career',
    title: 'Jovem Aprendiz em Mecânica Industrial',
    organization: 'TechnipFMC',
    sortDate: '2019-02',
    period: 'Fevereiro de 2019 — Dezembro de 2023',
    description:
      'Formação técnica em Mecânica Industrial, com base em hidráulica, desenho técnico e manutenção industrial — o ponto de partida da minha trajetória profissional.',
  },
  {
    id: 'senai-civit',
    branch: 'education',
    title: 'Curso Técnico em Mecânica Industrial',
    organization: 'SENAI CIVIT-ES',
    sortDate: '2021-01',
    period: '2019 — 2021',
    description: 'Formação técnica em Mecânica Industrial — base pra tudo que veio depois.',
  },
]

export function getEventsByBranch(branch: CareerEvent['branch']): CareerEvent[] {
  return careerEvents
    .filter((event) => event.branch === branch)
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
}
