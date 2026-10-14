import { Download, MapPin } from 'lucide-react'
import { cvByLocale } from '../data/site.ts'
import { usePreferences } from '../hooks/usePreferences.ts'
import { DominicanFlag } from '../components/ui/DominicanFlag.tsx'
import { ProfilePhoto } from '../components/ui/ProfilePhoto.tsx'

export function Hero() {
  const { t, locale } = usePreferences()

  return (
    <section id="home" className="relative overflow-x-clip px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
      <div className="hero-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[92rem] items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,420px)] lg:gap-16 xl:gap-24">
        <div>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            {t.hero.greeting} <span aria-hidden="true">👋</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-snug font-medium text-accent sm:text-xl">{t.hero.role}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{t.hero.description}</p>
          <ul className="mt-6 space-y-2 text-sm text-ink sm:text-base">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-accent" aria-hidden="true" />
              <span className="inline-flex items-center gap-2">
                <DominicanFlag />
                {t.hero.location}
              </span>
            </li>
            <li className="text-muted">{t.hero.availability}</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
            >
              {t.hero.viewWork}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-raised px-5 py-2.5 text-sm font-medium text-ink"
            >
              {t.hero.contact}
            </a>
            <a
              href={cvByLocale[locale]}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-accent"
            >
              <Download size={16} aria-hidden="true" />
              {t.hero.downloadCv}
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="shadow-soft overflow-hidden rounded-2xl border border-line bg-raised">
            <ProfilePhoto alt={t.hero.photoAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}
