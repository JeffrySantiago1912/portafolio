import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { usePreferences } from '../hooks/usePreferences.ts'
import type { ExperienceItem } from '../types/dictionary.ts'

function ExperienceBlock({ item }: { item: ExperienceItem }) {
  return (
    <article className="relative pl-8">
      <span className="absolute top-1.5 left-0 size-3 rounded-full border-2 border-accent bg-paper" aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-2xl text-ink">{item.company}</h3>
        <p className="text-sm text-accent">{item.period}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-ink">{item.role}</p>
      <p className="text-sm text-muted">{item.location}</p>
      <p className="mt-4 max-w-3xl text-muted">{item.summary}</p>
      <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {item.points.map((point) => (
          <li key={point} className="border-t border-line pt-2 text-sm leading-relaxed text-muted">
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Experience() {
  const { t } = usePreferences()

  return (
    <Section id="experience" className="bg-raised/70">
      <Reveal>
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} intro={t.experience.intro} />
      </Reveal>
      <div className="relative mt-12 space-y-12 border-l border-line">
        <Reveal>
          <ExperienceBlock item={t.experience.humano} />
        </Reveal>
        <Reveal delay={0.06}>
          <ExperienceBlock item={t.experience.independent} />
        </Reveal>
      </div>
      <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium tracking-[0.14em] text-accent uppercase">{t.experience.educationLabel}</h3>
          <p className="mt-3 font-serif text-2xl text-ink">{t.experience.education.degree}</p>
          <p className="mt-1 text-sm font-medium text-ink">{t.experience.education.school}</p>
          <p className="text-sm text-muted">
            {t.experience.education.period} · {t.experience.education.location}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium tracking-[0.14em] text-accent uppercase">{t.experience.languagesLabel}</h3>
          <p className="mt-3 text-base text-ink">{t.experience.languages}</p>
        </div>
      </div>
    </Section>
  )
}
