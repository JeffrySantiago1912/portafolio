import { BarChart3, Bot, Brain, Cloud, Code, Coffee, Layers, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { usePreferences } from '../hooks/usePreferences.ts'
import { growingIds, type GrowingId } from '../types/dictionary.ts'

const icons: Record<GrowingId, LucideIcon> = {
  aiEngineering: Bot,
  llm: Brain,
  agents: Zap,
  cloud: Cloud,
  python: Code,
  java: Coffee,
  data: BarChart3,
  architecture: Layers,
}

export function Growing() {
  const { t } = usePreferences()

  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow={t.growing.eyebrow} title={t.growing.title} intro={t.growing.intro} />
      </Reveal>
      <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
        {growingIds.map((id) => {
          const Icon = icons[id]
          return (
            <li key={id} className="flex items-center gap-3 border-t border-line py-4 text-ink">
              <Icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
              <span>{t.growing.items[id]}</span>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
