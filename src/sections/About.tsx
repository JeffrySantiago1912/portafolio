import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { usePreferences } from '../hooks/usePreferences.ts'

export function About() {
  const { t } = usePreferences()

  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-ink">{t.about.close}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium tracking-wide text-ink">{t.about.stackTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{t.about.stack.join(' · ')}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-wide text-ink">{t.about.independentTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {t.about.independent.map((item) => (
                  <li key={item} className="border-t border-line pt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
