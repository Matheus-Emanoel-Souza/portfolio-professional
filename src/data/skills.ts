import type { Skill } from '@/types'

/**
 * Espelhado de `portfolio-adventure/src/data/skills.ts` — tecnologias com
 * uso real e verificável (usadas neste projeto, no Adventure, ou
 * confirmadas pelo Matheus). Categoria `devops` fica vazia de propósito —
 * a Skills section pula categorias sem nenhuma entrada em vez de inventar.
 */
export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', summary: 'Base dos dois portfólios.' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', summary: 'Tipagem em todo o projeto.' },
  { id: 'vite', name: 'Vite', category: 'frontend', summary: 'Build e dev server.' },
  { id: 'css', name: 'CSS', category: 'frontend', summary: 'Estilização sem framework extra.' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', summary: 'Linguagem base da web.' },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    summary: 'Transições e microinterações.',
  },
  { id: 'electron', name: 'Electron', category: 'frontend', summary: 'Usado no LearnDeck.' },
  { id: 'java', name: 'Java', category: 'backend', summary: 'Linguagem de programação.' },
  { id: 'spring-boot', name: 'Spring Boot', category: 'backend', summary: 'Framework Java pra backend.' },
  { id: 'node', name: 'Node.js', category: 'backend', summary: 'Runtime JavaScript no servidor.' },
  { id: 'dotnet', name: '.NET', category: 'backend', summary: 'Usado no Smart Taskbar (WPF) e no JobTrail (ASP.NET Core).' },
  { id: 'csharp', name: 'C#', category: 'backend', summary: 'Linguagem de programação.' },
  { id: 'aspnet-core', name: 'ASP.NET Core', category: 'backend', summary: 'Web API e Identity no JobTrail.' },
  { id: 'blazor', name: 'Blazor', category: 'frontend', summary: 'Blazor Web App (Interactive Server) + MudBlazor no JobTrail.' },
  { id: 'ef-core', name: 'Entity Framework Core', category: 'backend', summary: 'Mapeamento database-first sobre schema existente no JobTrail.' },
  { id: 'cpp', name: 'C++', category: 'backend', summary: 'Linguagem de programação.' },
  { id: 'c', name: 'C', category: 'backend', summary: 'Linguagem de programação.' },
  { id: 'arduino', name: 'Arduino', category: 'backend', summary: 'Comunicação serial com sensores (TCC).' },
  { id: 'databases', name: 'Banco de Dados', category: 'database', summary: 'Modelagem e consultas.' },
  { id: 'sql-server', name: 'SQL Server', category: 'database', summary: 'Schema, triggers, procedures e rotina diária no JobTrail.' },
  {
    id: 'software-engineering',
    name: 'Engenharia de Software',
    category: 'architecture',
    summary: 'Princípios e processo de desenvolvimento.',
  },
  { id: 'git', name: 'Git', category: 'tools', summary: 'Controle de versão.' },
  { id: 'github', name: 'GitHub', category: 'tools', summary: 'Colaboração e hospedagem de código.' },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'tools',
    summary: 'CI/CD dos dois portfólios.',
  },
  { id: 'kanban', name: 'Kanban', category: 'tools', summary: 'Gestão ágil de tarefas e fluxo de trabalho.' },
  {
    id: 'documentation',
    name: 'Documentação',
    category: 'tools',
    summary: 'Registro e organização de processos.',
  },
  {
    id: 'proposal-writing',
    name: 'Redação de Propostas',
    category: 'tools',
    summary: 'Comunicação técnica escrita.',
  },
]

export function getSkillById(id: string): Skill | undefined {
  return skills.find((skill) => skill.id === id)
}

export function getSkillsByIds(ids: string[]): Skill[] {
  return ids.map(getSkillById).filter((skill): skill is Skill => Boolean(skill))
}
