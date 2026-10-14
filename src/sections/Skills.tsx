import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { skillTiers } from '../data/skills.ts'
import { usePreferences } from '../hooks/usePreferences.ts'
import type { SkillGroupId } from '../types/dictionary.ts'

function SkillCard({ id }: { id: SkillGroupId }) {
  const { t } = usePreferences()
  const group = t.skills.groups[id]

  return (
    <article className="rounded-2xl border border-line bg-raised p-5">
      <h3 className="text-base font-medium text-ink">{group.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Skills() {
  const { t } = usePreferences()

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} intro={t.skills.intro} />
      </Reveal>

      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="font-serif text-2xl text-ink">{t.skills.coreLabel}</p>
          <p className="max-w-md text-sm text-muted">{t.skills.coreNote}</p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {skillTiers.core.map((id, index) => (
            <Reveal key={id} delay={index * 0.04}>
              <SkillCard id={id} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="font-serif text-2xl text-ink">{t.skills.focusLabel}</p>
          <p className="max-w-md text-sm text-muted">{t.skills.focusNote}</p>
        </div>
        <div className="mt-5 max-w-3xl">
          <Reveal>
            <SkillCard id="ai" />
          </Reveal>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="font-serif text-2xl text-ink">{t.skills.additionalLabel}</p>
          <p className="max-w-md text-sm text-muted">{t.skills.additionalNote}</p>
        </div>
        <div className="mt-5 grid max-w-3xl gap-4">
          {skillTiers.additional.map((id) => (
            <Reveal key={id}>
              <SkillCard id={id} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
