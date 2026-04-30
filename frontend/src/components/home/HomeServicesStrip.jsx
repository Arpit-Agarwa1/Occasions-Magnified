import { Link } from 'react-router-dom'
import { SHOP_CATEGORIES } from '../../data/shopCategories.js'
import { MarqueeRibbon } from './MarqueeRibbon.jsx'

/** Visuals for each category card — aligned with `SHOP_CATEGORIES` order (see `public/services/home-categories/`). */
/** `objectPosition` tunes focal point when art aspect ≠ card — cards use cover so tiles read full-bleed. */
const CARD_MEDIA = [
  {
    src: '/services/home-categories/wedding-invitation-suite.png',
    alt: 'Wedding invitation suite samples',
    objectPosition: 'center center',
  },
  {
    src: '/services/home-categories/wedding-stationery.png',
    alt: 'Wedding stationery samples',
    objectPosition: 'center center',
  },
  {
    src: '/services/home-categories/celebration-suite.png',
    alt: 'Celebration suite stationery and print details',
    objectPosition: 'center 42%',
  },
  {
    src: '/services/home-categories/omag-magazine.png',
    alt: "O'Mag magazine cover — custom keepsake",
    objectPosition: 'center 38%',
  },
]

const ITEMS = SHOP_CATEGORIES.map((cat, idx) => ({
  ...cat,
  ...CARD_MEDIA[idx],
  /** Deep-link into Work archive tabs (hash matches `workGalleryTabOptions[].id`). */
  homeTo: `/work#${cat.workArchiveTabId}`,
}))

/** Home — category cards: copy + “View Designs” linking to the Work gallery tab for that category. */
export function HomeServicesStrip() {
  return (
    <section className="bg-[#f9f7f2] py-0">
      <MarqueeRibbon />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 md:px-8 md:py-16">
        <ul className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
          {ITEMS.map((it) => {
            const Card = (
              <div className="group flex h-full min-h-0 flex-col overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/10 transition hover:shadow-lg sm:flex-row sm:items-stretch xl:flex-col">
                {/** Portrait tile uses `object-cover` so artwork fills the frame; contain left empty bands on wide PNGs. */}
                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-[#ece7de] sm:w-[55%] sm:max-w-[55%] xl:w-full xl:max-w-none">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="absolute inset-0 h-full w-full max-h-none max-w-none object-cover"
                    loading="lazy"
                    style={{ objectPosition: it.objectPosition ?? 'center center' }}
                  />
                </div>
                <div className="flex h-full min-h-0 w-full flex-col bg-[#4A0404] px-3 py-3 text-cream sm:w-[45%] sm:shrink-0 sm:px-4 sm:py-4 md:w-[45%] md:px-5 md:py-5 xl:flex-1 xl:w-full">
                  <p className="shrink-0 text-center font-serif text-base font-semibold leading-snug text-cream sm:text-lg md:text-xl lg:text-[1.35rem] lg:leading-tight">
                    {it.title}
                  </p>
                  <p className="mt-2.5 line-clamp-3 min-h-[4.5rem] shrink-0 text-center font-serif text-sm leading-relaxed text-cream/90 sm:min-h-[5rem] sm:text-base md:min-h-[5.5rem] md:text-[1.05rem] md:leading-relaxed">
                    {it.description}
                  </p>
                  <div className="mt-auto flex shrink-0 items-center justify-between border-t border-cream/10 pt-3.5 sm:pt-4">
                    <span className="inline-flex items-center justify-center rounded-sm bg-cream px-3 py-2 font-nav text-[11px] font-semibold tracking-wide text-[#4A0404] sm:px-3.5 sm:text-xs md:text-sm">
                      View Designs
                    </span>
                    <span className="font-nav text-xl leading-none text-cream/90 sm:text-2xl" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </div>
            )

            return (
              <li key={it.id} className="flex h-full min-h-0">
                <Link
                  to={it.homeTo}
                  className="flex h-full min-h-0 w-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f7f2]"
                >
                  {Card}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <MarqueeRibbon />
    </section>
  )
}
