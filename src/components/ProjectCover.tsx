import type { ProjectId } from '../types/dictionary.ts'

const marks: Record<ProjectId, { kicker: string; glyph: string }> = {
  'rd-intelligence': { kicker: 'DO · DATA', glyph: 'RD' },
  barbeross: { kicker: 'OPS · SAAS', glyph: 'BO' },
  abbatech: { kicker: 'STUDIO', glyph: 'AT' },
  'farmacia-la-hoz': { kicker: 'CARE', glyph: 'LH' },
  'farmacia-maireni': { kicker: 'CARE', glyph: 'FM' },
}

export function ProjectCover({ id, name }: { id: ProjectId; name: string }) {
  const mark = marks[id]

  return (
    <div className="relative h-full min-h-52 overflow-hidden bg-[#14221f] text-[#f4f0e6]" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="360" fill="#14221f" />
        {id === 'rd-intelligence' ? (
          <>
            <circle cx="470" cy="150" r="92" fill="none" stroke="#8fd0c4" strokeOpacity="0.45" />
            <circle cx="470" cy="150" r="48" fill="none" stroke="#e0c392" strokeOpacity="0.7" />
            <path d="M80 250 C180 180 240 280 340 210" fill="none" stroke="#f4f0e6" strokeOpacity="0.25" />
          </>
        ) : null}
        {id === 'barbeross' ? (
          <>
            <rect x="390" y="58" width="150" height="190" rx="12" fill="none" stroke="#8fd0c4" strokeOpacity="0.5" />
            <path d="M414 108 H516 M414 148 H516 M414 188 H470" stroke="#e0c392" strokeOpacity="0.8" />
          </>
        ) : null}
        {id === 'abbatech' ? (
          <>
            <rect x="400" y="70" width="150" height="150" fill="none" stroke="#8fd0c4" strokeOpacity="0.45" />
            <rect x="430" y="100" width="90" height="90" fill="#1b4f47" />
          </>
        ) : null}
        {id === 'farmacia-la-hoz' ? (
          <path d="M470 70 V230 M390 150 H550" stroke="#8fd0c4" strokeWidth="10" strokeLinecap="square" />
        ) : null}
        {id === 'farmacia-maireni' ? (
          <>
            <circle cx="470" cy="160" r="70" fill="none" stroke="#e0c392" strokeOpacity="0.8" />
            <path d="M470 110 V210 M420 160 H520" stroke="#8fd0c4" strokeWidth="8" />
          </>
        ) : null}
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[0.68rem] tracking-[0.18em] text-[#e0c392] uppercase">{mark.kicker}</p>
          <p className="mt-1 font-serif text-2xl text-[#f4f0e6]">{name}</p>
        </div>
        <p className="font-serif text-3xl text-[#8fd0c4]">{mark.glyph}</p>
      </div>
    </div>
  )
}
