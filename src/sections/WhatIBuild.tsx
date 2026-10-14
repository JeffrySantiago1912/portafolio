import {
  BarChart3,
  Bot,
  Building2,
  Cloud,
  Globe,
  Link2,
  Puzzle,
  Rocket,
  Server,
  ShoppingBag,
  Smartphone,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { usePreferences } from '../hooks/usePreferences.ts'
import { buildIds, type BuildId } from '../types/dictionary.ts'

const icons: Record<BuildId, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  api: Server,
  cloud: Cloud,
  ai: Bot,
  commerce: ShoppingBag,
  enterprise: Building2,
  integrations: Link2,
  data: BarChart3,
  automation: Workflow,
  saas: Rocket,
  custom: Puzzle,
}

export function WhatIBuild() {
  const { t } = usePreferences()

  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow={t.build.eyebrow} title={t.build.title} intro={t.build.intro} />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {buildIds.map((id, index) => {
          const Icon = icons[id]
          const item = t.build.items[id]
          return (
            <Reveal key={id} delay={(index % 3) * 0.04}>
              <article className="h-full rounded-2xl border border-line bg-raised p-5 transition-colors hover:border-accent">
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-base font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
