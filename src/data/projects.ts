import { RD_INTELLIGENCE_URL } from './site.ts'
import type { ProjectFilter, ProjectId } from '../types/dictionary.ts'

export interface ProjectEntry {
  id: ProjectId
  filters: Exclude<ProjectFilter, 'all'>[]
  live: string
  repo: string
  tech: string[]
}

export const projects: ProjectEntry[] = [
  {
    id: 'rd-intelligence',
    filters: ['data'],
    live: RD_INTELLIGENCE_URL,
    repo: '',
    tech: ['React', 'Open-Meteo', 'NASA EONET', 'USGS', 'OpenStreetMap', 'World Bank'],
  },
  {
    id: 'barbeross',
    filters: ['saas', 'fullstack'],
    live: 'https://barbeross.netlify.app/',
    repo: '',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 'abbatech',
    filters: ['business'],
    live: 'https://abbatechcompany.netlify.app',
    repo: '',
    tech: [],
  },
  {
    id: 'farmacia-la-hoz',
    filters: ['business'],
    live: 'https://farmacialahoz.netlify.app',
    repo: '',
    tech: [],
  },
  {
    id: 'farmacia-maireni',
    filters: ['business'],
    live: 'https://farmaciamairenisrl.netlify.app',
    repo: '',
    tech: [],
  },
]
