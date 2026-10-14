import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { sectionIds, site } from '../data/site.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { usePreferences } from '../hooks/usePreferences.ts'
import { locales } from '../types/dictionary.ts'

const links = [
  ['home', 'home'],
  ['about', 'about'],
  ['experience', 'experience'],
  ['skills', 'skills'],
  ['projects', 'projects'],
  ['contact', 'contact'],
] as const

export function Navbar() {
  const { t, locale, setLocale, theme, toggleTheme } = usePreferences()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const labels = {
    home: t.nav.home,
    about: t.nav.about,
    experience: t.nav.experience,
    skills: t.nav.skills,
    projects: t.nav.projects,
    contact: t.nav.contact,
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[92rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-serif text-lg tracking-tight text-ink">
          {site.name}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav.primary}>
          {links.map(([id, key]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === id ? 'bg-soft text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {labels[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex" role="group" aria-label={t.nav.language}>
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                aria-label={t.nav.languages[code]}
                className={`rounded-full px-2 py-1 text-xs font-medium tracking-wide ${
                  locale === code ? 'bg-soft text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.switchToLight : t.nav.switchToDark}
            className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink"
          >
            {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-[92rem] flex-col px-4 py-4 sm:px-6 lg:px-8" aria-label={t.nav.primary}>
            {links.map(([id, key]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base text-ink last:border-b-0"
              >
                {labels[key]}
              </a>
            ))}
            <div className="flex gap-2 pt-4" role="group" aria-label={t.nav.language}>
              {locales.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={locale === code}
                  aria-label={t.nav.languages[code]}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                    locale === code ? 'bg-soft text-accent' : 'text-muted'
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
