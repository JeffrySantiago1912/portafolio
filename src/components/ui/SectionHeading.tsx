interface SectionHeadingProps {
  eyebrow: string
  title: string
  intro?: string
}

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-[0.75rem] font-medium tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-[2rem] leading-tight text-balance text-ink sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
    </div>
  )
}
