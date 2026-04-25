import { Link } from 'react-router-dom'
import { SITE_LINKS } from '../../constants/site.js'

/** Theme pick cards — editorial spreads that read as “choose a direction”. */
const THEMES = [
  {
    src: '/work/magazine/1.png',
    alt: 'Invitation theme — soft blue editorial spread',
  },
  {
    src: '/work/magazine/4.png',
    alt: 'Invitation theme — warm illustrated celebration',
  },
  {
    src: '/work/magazine/15.png',
    alt: 'Invitation theme — evening palette with botanical detail',
  },
]

/**
 * “Choose your theme” gallery — three tall cards and dual CTAs (mock home layout).
 */
export function HomeThemeSection() {
  return (
    <section className="bg-[#f9f7f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center font-serif text-3xl font-light tracking-wide text-burgundy md:text-[2.2rem]">
          CHOOSE YOUR THEME
        </h2>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5 md:gap-8">
          {THEMES.map((t) => (
            <div
              key={t.src}
              className="mx-auto w-full max-w-[min(100%,240px)] overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/5 sm:max-w-none"
            >
              <div className="relative aspect-[9/16] w-full">
                <img src={t.src} alt={t.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            to="/shop"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-full border-2 border-[#4A0404] bg-[#4A0404] px-10 py-3.5 font-nav text-xs font-bold tracking-[0.2em] text-cream uppercase shadow-sm transition hover:bg-[#310B0B]"
          >
            SHOP ALL THEMES
          </Link>
          <a
            href={SITE_LINKS.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-full border-2 border-[#4A0404]/30 bg-white px-8 py-3.5 font-nav text-xs font-bold tracking-[0.18em] text-[#4A0404] uppercase transition hover:border-[#4A0404] hover:bg-cream/30"
          >
            FILTER BY BRAND
          </a>
        </div>
      </div>
    </section>
  )
}
