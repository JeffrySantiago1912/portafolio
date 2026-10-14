import { useEffect } from 'react'
import { site } from '../data/site.ts'
import { usePreferences } from '../hooks/usePreferences.ts'

function setMeta(selector: string, attribute: 'content' | 'name', value: string) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export function Seo() {
  const { t } = usePreferences()

  useEffect(() => {
    document.title = t.meta.title
    setMeta('meta[name="description"]', 'content', t.meta.description)
    setMeta('meta[property="og:title"]', 'content', t.meta.title)
    setMeta('meta[property="og:description"]', 'content', t.meta.description)
    setMeta('meta[property="og:locale"]', 'content', t.meta.ogLocale)
    setMeta('meta[name="twitter:title"]', 'content', t.meta.title)
    setMeta('meta[name="twitter:description"]', 'content', t.meta.description)

    const existing = document.getElementById('person-jsonld')
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      jobTitle: t.meta.jobTitle,
      description: t.meta.description,
      email: `mailto:${site.email}`,
      url: window.location.origin,
      image: new URL(site.profileImage, window.location.origin).toString(),
      address: {
        '@type': 'Country',
        name: site.locationCountry,
      },
      sameAs: [site.linkedin, site.github],
    }
    const script = existing ?? document.createElement('script')
    script.id = 'person-jsonld'
    script.setAttribute('type', 'application/ld+json')
    script.textContent = JSON.stringify(data)
    if (!existing) document.head.appendChild(script)
  }, [t])

  return null
}
