import type { ReactNode } from 'react'
import { Footer } from '../components/Footer.tsx'
import { Navbar } from '../components/Navbar.tsx'
import { Seo } from '../components/Seo.tsx'
import { usePreferences } from '../hooks/usePreferences.ts'

export function PortfolioLayout({ children }: { children: ReactNode }) {
  const { t } = usePreferences()

  return (
    <>
      <Seo />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-on-accent"
      >
        {t.nav.skip}
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
