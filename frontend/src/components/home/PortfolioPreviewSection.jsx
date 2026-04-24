import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { invitationVideoItems } from '../../data/workGallery.js'
import { SITE_LINKS } from '../../constants/site.js'

/**
 * Home — custom motion invitations as muted autoplay highlight loops (like story highlights).
 */
export function PortfolioPreviewSection() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section className="border-y border-burgundy/10 bg-[#faf7f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-nav text-[11px] font-semibold tracking-[0.32em] text-burgundy/55 uppercase">
            Motion
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-burgundy md:text-[2.35rem]">
            Custom motion invitations
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-burgundy/80">
            Cinematic reels crafted for each couple — colour, typography, and pacing tuned to your story.
          </p>
          <p className="mt-2 font-nav text-[10px] font-medium tracking-wide text-burgundy/50">
            Highlights autoplay muted · Full reels with sound on the portfolio page
          </p>
        </div>

        {/* Narrower max width on md+ so 9:16 frames stay phone-like, not skyscraper-tall in 3 columns */}
        <div className="mt-12 grid justify-items-center gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {invitationVideoItems.map((item) => (
            <article
              key={item.src}
              className="w-full max-w-[min(100%,300px)] overflow-hidden rounded-lg border border-burgundy/12 bg-white shadow-md ring-1 ring-black/[0.03] md:max-w-[min(100%,232px)] lg:max-w-[min(100%,248px)] xl:max-w-[min(100%,268px)]"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                {reduceMotion ? (
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={`Highlight preview — ${item.title}`}
                  />
                )}
                {!reduceMotion && (
                  <span className="pointer-events-none absolute right-2 top-2 rounded bg-black/55 px-2 py-0.5 font-nav text-[9px] font-semibold tracking-wide text-white/90 uppercase backdrop-blur-sm">
                    Highlight
                  </span>
                )}
              </div>
              <div className="px-4 py-3">
                <h3 className="font-serif text-lg font-semibold text-burgundy">{item.title}</h3>
                <p className="mt-1 font-serif text-sm text-burgundy/70">{item.tagline}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/work"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy bg-burgundy px-10 py-3.5 font-nav text-xs font-bold tracking-[0.2em] text-cream uppercase shadow-sm transition hover:bg-burgundy-deep"
          >
            View full portfolio
          </Link>
          <a
            href={SITE_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy/30 bg-transparent px-8 py-3.5 font-nav text-xs font-bold tracking-[0.18em] text-burgundy uppercase transition hover:border-burgundy hover:bg-white"
          >
            YouTube channel
          </a>
        </div>
      </div>
    </section>
  )
}
