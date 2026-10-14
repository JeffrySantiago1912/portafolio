export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export const projectIds = [
  'rd-intelligence',
  'barbeross',
  'abbatech',
  'farmacia-la-hoz',
  'farmacia-maireni',
] as const
export type ProjectId = (typeof projectIds)[number]

export const filterIds = ['all', 'fullstack', 'saas', 'business', 'data'] as const
export type ProjectFilter = (typeof filterIds)[number]

export const skillGroupIds = [
  'frontend',
  'backend',
  'databases',
  'cloud',
  'ai',
  'platforms',
  'additional',
] as const
export type SkillGroupId = (typeof skillGroupIds)[number]

export const buildIds = [
  'web',
  'mobile',
  'api',
  'cloud',
  'ai',
  'commerce',
  'enterprise',
  'integrations',
  'data',
  'automation',
  'saas',
  'custom',
] as const
export type BuildId = (typeof buildIds)[number]

export const growingIds = [
  'aiEngineering',
  'llm',
  'agents',
  'cloud',
  'python',
  'java',
  'data',
  'architecture',
] as const
export type GrowingId = (typeof growingIds)[number]

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  summary: string
  points: string[]
}

export interface ProjectCopy {
  name: string
  category: string
  description: string
}

export interface BuildCopy {
  title: string
  description: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
    jobTitle: string
    ogLocale: string
  }
  nav: {
    home: string
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
    openMenu: string
    closeMenu: string
    language: string
    switchToLight: string
    switchToDark: string
    skip: string
    primary: string
    languages: Record<Locale, string>
  }
  hero: {
    greeting: string
    role: string
    description: string
    location: string
    availability: string
    viewWork: string
    contact: string
    downloadCv: string
    photoAlt: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    stackTitle: string
    stack: string[]
    independentTitle: string
    independent: string[]
    close: string
  }
  experience: {
    eyebrow: string
    title: string
    intro: string
    humano: ExperienceItem
    independent: ExperienceItem
    educationLabel: string
    education: {
      degree: string
      school: string
      period: string
      location: string
    }
    languagesLabel: string
    languages: string
  }
  skills: {
    eyebrow: string
    title: string
    intro: string
    coreLabel: string
    coreNote: string
    focusLabel: string
    focusNote: string
    additionalLabel: string
    additionalNote: string
    groups: Record<SkillGroupId, SkillGroup>
  }
  ai: {
    eyebrow: string
    title: string
    paragraphs: string[]
    topics: string[]
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    filters: Record<ProjectFilter, string>
    empty: string
    liveDemo: string
    github: string
    soon: string
    technologies: string
    moreTitle: string
    moreText: string
    moreCta: string
    items: Record<ProjectId, ProjectCopy>
  }
  build: {
    eyebrow: string
    title: string
    intro: string
    items: Record<BuildId, BuildCopy>
  }
  growing: {
    eyebrow: string
    title: string
    intro: string
    items: Record<GrowingId, string>
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    linkedin: string
    email: string
    github: string
  }
  footer: {
    role: string
    location: string
    availability: string
    rights: string
  }
}
