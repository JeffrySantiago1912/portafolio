import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ProjectCover } from '../components/ProjectCover.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { Section } from '../components/ui/Section.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import { projects } from '../data/projects.ts'
import { isLiveUrl, site } from '../data/site.ts'
import { usePreferences } from '../hooks/usePreferences.ts'
import { filterIds, type ProjectFilter } from '../types/dictionary.ts'

export function Projects() {
  const { t } = usePreferences()
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.filters.includes(filter))),
    [filter],
  )

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t.projects.title}>
        {filterIds.map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={`rounded-full px-3 py-1.5 text-sm ${
              filter === id ? 'bg-accent text-on-accent' : 'border border-line text-muted hover:text-ink'
            }`}
          >
            {t.projects.filters[id]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="mt-8 space-y-6"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          {visible.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-line px-5 py-10 text-center text-muted">
              {t.projects.empty}
            </p>
          ) : (
            visible.map((project) => {
              const copy = t.projects.items[project.id]
              const live = isLiveUrl(project.live)
              return (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-3xl border border-line bg-raised lg:grid lg:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.15fr)]"
                >
                  <ProjectCover id={project.id} name={copy.name} />
                  <div className="flex flex-col p-5 sm:p-7">
                    <p className="text-xs font-medium tracking-[0.14em] text-accent uppercase">{copy.category}</p>
                    <h3 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">{copy.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{copy.description}</p>
                    {project.tech.length > 0 ? (
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.projects.technologies}>
                        {project.tech.map((tech) => (
                          <li key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent"
                        >
                          {t.projects.liveDemo}
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted">
                          {t.projects.liveDemo}
                          <span className="text-xs">· {t.projects.soon}</span>
                        </span>
                      )}
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink"
                        >
                          {t.projects.github}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              )
            })
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-line px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-serif text-2xl text-ink">{t.projects.moreTitle}</h3>
          <p className="mt-1 text-sm text-muted">{t.projects.moreText}</p>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink"
        >
          {t.projects.moreCta}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}
