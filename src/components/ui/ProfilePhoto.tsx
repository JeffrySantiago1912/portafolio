import { useEffect, useState } from 'react'
import { site } from '../../data/site.ts'

interface ProfilePhotoProps {
  alt: string
}

export function ProfilePhoto({ alt }: ProfilePhotoProps) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(site.profileImage)
      .then(async (response) => {
        const type = response.headers.get('content-type') ?? ''
        if (!cancelled && response.ok && type.startsWith('image/')) setSrc(site.profileImage)
      })
      .catch(() => {
        /* The portrait is optional until public/profile.jpg is added. */
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (!src) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-soft" aria-hidden="true">
        <span className="font-serif text-6xl tracking-tight text-accent">JS</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={640}
      height={800}
      decoding="async"
      fetchPriority="high"
      className="aspect-[4/5] w-full object-cover object-center"
      onError={() => setSrc(null)}
    />
  )
}
