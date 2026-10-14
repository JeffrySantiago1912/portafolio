import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { usePreferences } from '../hooks/usePreferences.ts'

export function AiAutomation() {
  const { t } = usePreferences()

  return (
    <Section className="bg-soft">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow={t.ai.eyebrow} title={t.ai.title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {t.ai.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {t.ai.topics.map((topic) => (
              <li key={topic} className="rounded-2xl border border-line bg-raised px-4 py-3 text-sm text-ink">
                {topic}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
