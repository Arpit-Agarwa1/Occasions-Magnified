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
      className="block bg-[#4A0404] py-2.5 font-nav text-white no-underline transition-colors hover:bg-[#5c0c0c] focus-visible:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Shop custom designs on Etsy"
    >
      <div className="relative overflow-hidden">
        <div className="om-marquee-track pointer-events-none text-[10px] font-semibold tracking-[0.38em] uppercase">
          {items}
          {items}
        </div>
      </div>
    </a>
  )
}
