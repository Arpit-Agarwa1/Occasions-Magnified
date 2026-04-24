/**
 * Pill CTA with circular chevron (matches “SHOP MAGAZINE” / “SHOP CUSTOM DESIGNS” mock buttons).
 * @param {{ href: string; children: unknown; external?: boolean; className?: string }} props
 */
export function ChevronPillLink({ href, children, external = false, className = '' }) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full border-2 border-[#310B0B] bg-white px-8 py-3 font-sans text-xs font-bold tracking-[0.18em] text-[#310B0B] uppercase shadow-sm transition hover:bg-[#310B0B] hover:text-white ${className}`}
      {...ext}
    >
      <span>{children}</span>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#310B0B] text-lg leading-none text-white transition group-hover:bg-white group-hover:text-[#310B0B] group-hover:ring-1 group-hover:ring-white/40"
        aria-hidden
      >
        ›
      </span>
    </a>
  )
}
