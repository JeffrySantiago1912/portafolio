import { PortfolioLayout } from './layouts/PortfolioLayout.tsx'
import { About } from './sections/About.tsx'
import { AiAutomation } from './sections/AiAutomation.tsx'
import { Contact } from './sections/Contact.tsx'
import { Experience } from './sections/Experience.tsx'
import { Growing } from './sections/Growing.tsx'
import { Hero } from './sections/Hero.tsx'
import { Projects } from './sections/Projects.tsx'
import { Skills } from './sections/Skills.tsx'
import { WhatIBuild } from './sections/WhatIBuild.tsx'

export default function App() {
  return (
    <PortfolioLayout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <AiAutomation />
      <Projects />
      <WhatIBuild />
      <Growing />
      <Contact />
    </PortfolioLayout>
  )
}
