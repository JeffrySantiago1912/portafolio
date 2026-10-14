export const RD_INTELLIGENCE_URL = 'https://rdintelligence.netlify.app/'

export const site = {
  name: 'Jeffry Santiago',
  profileImage: '/profile.jpg',
  github: 'https://github.com/JeffrySantiago1912',
  linkedin: 'https://www.linkedin.com/in/jeffry-santiago-montes-de-oca-jimenez-44908522b/',
  email: 'engineer_santiago1912@hotmail.com',
  locationCountry: 'Dominican Republic',
} as const

export const cvByLocale = {
  en: '/JeffrySantiagoCVEnglish.pdf',
  es: '/JeffrySantiagoCVEspanol.pdf',
} as const

export function isLiveUrl(url: string) {
  return url.startsWith('https://') || url.startsWith('http://')
}

export const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'] as const
