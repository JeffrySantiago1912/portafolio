import { createContext } from 'react'
import type { Dictionary, Locale } from '../types/dictionary.ts'

export type Theme = 'light' | 'dark'

export interface PreferencesValue {
  theme: Theme
  locale: Locale
  toggleTheme: () => void
  setLocale: (locale: Locale) => void
  t: Dictionary
}

export const PreferencesContext = createContext<PreferencesValue | null>(null)
