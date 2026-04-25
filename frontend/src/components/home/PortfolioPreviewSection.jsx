import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  const reels = [
    {
      href: 'https://www.instagram.com/reel/C9pnJDOi5Pl/',
      embedSrc: 'https://www.instagram.com/reel/C9pnJDOi5Pl/embed/',
      title: 'Instagram highlight reel',
      tagline: 'Tap to open on Instagram.',
    },
    {
      href: 'https://www.instagram.com/reel/DJovXjFTAtH/',
      embedSrc: 'https://www.instagram.com/reel/DJovXjFTAtH/embed/',
      title: 'Instagram highlight reel',
      tagline: 'Tap to open on Instagram.',
    },
    {
      href: 'https://www.instagram.com/reel/DQlpyPsjQYm/',
      embedSrc: 'https://www.instagram.com/reel/DQlpyPsjQYm/embed/',
      title: 'Instagram highlight reel',
      tagline: 'Tap to open on Instagram.',
    },
  ]

  return (
    <section className="border-y border-burgundy/10 bg-[#faf7f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-nav text-[11px] font-semibold tracking-[0.32em] text-burgundy/55 uppercase">Our work</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-burgundy md:text-[2.35rem]">
            Celebrate Memorable Occasions
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-burgundy/80">
            Cinematic highlight reels and motion stories — each crafted for the couple, their palette, and their day.
          </p>
          <p className="mt-2 font-nav text-[10px] font-medium tracking-wide text-burgundy/50">
            Highlights autoplay muted · Open the portfolio for full films with sound
          </p>
        </div>

        {/* Reels only — no extra card chrome */}
        <div className="mt-12 grid justify-items-center gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {reels.map((item, idx) => (
            <div
              key={`${item.href}#${idx}`}
              className="w-full max-w-[min(100%,320px)] overflow-hidden rounded-lg bg-black shadow-[0_18px_55px_-35px_rgba(0,0,0,0.55)] md:max-w-[min(100%,232px)] lg:max-w-[min(100%,248px)] xl:max-w-[min(100%,268px)]"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                {reduceMotion ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 grid place-items-center bg-black/60 px-6 text-center"
                  >
                    <span className="rounded-sm bg-white/10 px-4 py-2 font-nav text-[10px] font-semibold tracking-[0.22em] text-cream uppercase ring-1 ring-white/15">
                      Open Reel
                    </span>
                  </a>
                ) : (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={item.embedSrc}
                    title={item.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE_LINKS.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy bg-burgundy px-10 py-3.5 font-nav text-xs font-bold tracking-[0.2em] text-cream uppercase shadow-sm transition hover:bg-burgundy-deep"
          >
            Order Now
          </a>
          <a
            href={SITE_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy/30 bg-white px-8 py-3.5 font-nav text-xs font-bold tracking-[0.18em] text-burgundy uppercase transition hover:border-burgundy"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
