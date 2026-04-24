import { SITE_LINKS } from '../../constants/site.js'

const SEGMENT = 'SHOP CUSTOM DESIGNS'

/**
 * Thin ribbon with “SHOP CUSTOM DESIGNS | …” — links to Etsy (mock strip).
 */
export function MarqueeRibbon() {
  const items = Array.from({ length: 20 }, (_, i) => (
    <span key={i} className="mx-6 inline-flex items-center gap-6 whitespace-nowrap">
      <span>{SEGMENT}</span>
      <span className="opacity-80" aria-hidden>
        |
      </span>
    </span>
  ))

  return (
    <a
      href={SITE_LINKS.etsy}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-20 -my-px flex min-h-[3.25rem] w-full items-stretch bg-[#4A0404] font-nav text-white no-underline shadow-[0_1px_0_rgba(0,0,0,0.2),0_-1px_0_rgba(0,0,0,0.15)] transition-colors hover:bg-[#5c0c0c] focus-visible:z-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:min-h-[3.75rem]"
      aria-label="Shop custom designs on Etsy"
    >
      <div className="relative flex min-h-[inherit] w-full flex-1 items-center overflow-hidden py-2.5 md:py-3.5">
        <div className="om-marquee-track pointer-events-none w-full text-[10px] font-semibold tracking-[0.38em] uppercase">
          {items}
          {items}
        </div>
      </div>
    </a>
  )
}
