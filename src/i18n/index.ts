import { en } from './en.ts'
import { es } from './es.ts'
import { locales, type Dictionary, type Locale } from '../types/dictionary.ts'

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
}

export { locales }
export type { Locale }
