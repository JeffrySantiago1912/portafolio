import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons.tsx'
import { DominicanFlag } from './ui/DominicanFlag.tsx'
import { site } from '../data/site.ts'
import { usePreferences } from '../hooks/usePreferences.ts'

export function Footer() {
  const { t } = usePreferences()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <p className="font-serif text-xl text-ink">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t.footer.role}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink">
            <DominicanFlag />
            {t.footer.location}
          </p>
          <p className="mt-1 text-sm text-muted">{t.footer.availability}</p>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <a className="inline-flex items-center gap-2 text-ink hover:text-accent" href={site.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              GitHub
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2 text-ink hover:text-accent" href={site.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              LinkedIn
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2 text-ink hover:text-accent" href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" />
              {t.contact.email}
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-[92rem] text-sm text-muted">
        © {year} {site.name}. {t.footer.rights}
      </p>
    </footer>
  )
}
