export function DominicanFlag({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 12"
      className={`inline-block h-3 w-[1.15rem] shrink-0 rounded-[2px] shadow-sm ${className}`}
      aria-hidden="true"
    >
      <rect width="8" height="5.2" fill="#002D62" />
      <rect x="10" width="8" height="5.2" fill="#CE1126" />
      <rect y="6.8" width="8" height="5.2" fill="#CE1126" />
      <rect x="10" y="6.8" width="8" height="5.2" fill="#002D62" />
      <rect x="8" width="2" height="12" fill="#fff" />
      <rect y="5" width="18" height="2" fill="#fff" />
    </svg>
  )
}
