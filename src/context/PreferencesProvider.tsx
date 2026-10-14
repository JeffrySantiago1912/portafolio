import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries } from '../i18n/index.ts'
import { locales, type Locale } from '../types/dictionary.ts'
import { PreferencesContext, type Theme } from './preferences-context.ts'

const THEME_KEY = 'portfolio-theme'
const LOCALE_KEY = 'portfolio-locale'

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function readLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_KEY)
    if (stored && locales.includes(stored as Locale)) return stored as Locale
  } catch {
    /* ignore storage access errors */
  }
  return 'en'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', theme === 'dark' ? '#101412' : '#f3f0e8')
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readTheme)
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* ignore storage access errors */
    }
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem(LOCALE_KEY, locale)
    } catch {
      /* ignore storage access errors */
    }
  }, [locale])

  const value = useMemo(
    () => ({
      theme,
      locale,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      setLocale: setLocaleState,
      t: dictionaries[locale],
    }),
    [theme, locale],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}
