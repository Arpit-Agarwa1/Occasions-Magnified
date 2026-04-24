import { SITE_LINKS } from '../../constants/site.js'
import { brandShowcaseLoop } from '../../data/workGallery.js'

const SEGMENT = 'SHOP CUSTOM DESIGNS'

/**
 * Thin ribbon with “SHOP CUSTOM DESIGNS | …” — optional studio loop clip (muted) beside text.
 * @param {{ withStudioVideo?: boolean }} props
 */
export function MarqueeRibbon({ withStudioVideo = false }) {
  const items = Array.from({ length: 20 }, (_, i) => (
    <span key={i} className="mx-6 inline-flex items-center gap-6 whitespace-nowrap">
      <span>{SEGMENT}</span>
      <span className="opacity-80" aria-hidden>
        |
      </span>
    </span>
  ))

  const track = (
    <div className="relative overflow-hidden">
      <div className="om-marquee-track pointer-events-none text-[10px] font-semibold tracking-[0.38em] uppercase">
        {items}
        {items}
      </div>
    </div>
  )

  if (!withStudioVideo) {
    return (
      <a
        href={SITE_LINKS.etsy}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#4A0404] py-2.5 font-nav text-white no-underline transition-colors hover:bg-[#5c0c0c] focus-visible:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Shop custom designs on Etsy"
      >
        {track}
      </a>
    )
  }

  return (
    <div className="flex min-h-[52px] w-full flex-col bg-[#4A0404] sm:flex-row sm:items-stretch">
      <div className="relative h-36 w-full shrink-0 border-b border-white/10 sm:h-auto sm:w-48 sm:border-b-0 sm:border-r md:w-56 lg:w-64">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={brandShowcaseLoop.src}
          poster={brandShowcaseLoop.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      </div>
      <a
        href={SITE_LINKS.etsy}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] flex-1 items-center bg-[#4A0404] py-2.5 font-nav text-white no-underline transition-colors hover:bg-[#5c0c0c] focus-visible:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Shop custom designs on Etsy"
      >
        {track}
      </a>
    </div>
  )
}
