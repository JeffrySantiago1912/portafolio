import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { site } from '../data/site.ts'
import { usePreferences } from '../hooks/usePreferences.ts'

export function Contact() {
  const { t } = usePreferences()

  return (
    <Section id="contact">
      <Reveal>
        <div className="rounded-[1.75rem] bg-accent px-6 py-12 text-on-accent sm:px-10 sm:py-16">
          <p className="text-[0.75rem] font-medium tracking-[0.16em] uppercase opacity-80">{t.contact.eyebrow}</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-balance sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">{t.contact.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-on-accent px-4 py-2.5 text-sm font-medium text-accent"
            >
              <LinkedinIcon />
              {t.contact.linkedin}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-on-accent/30 px-4 py-2.5 text-sm font-medium"
            >
              <Mail size={16} aria-hidden="true" />
              {t.contact.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-on-accent/30 px-4 py-2.5 text-sm font-medium"
            >
              <GithubIcon />
              {t.contact.github}
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
