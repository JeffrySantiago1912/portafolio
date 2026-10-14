import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className = '', labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[92rem]">{children}</div>
    </section>
  )
}
