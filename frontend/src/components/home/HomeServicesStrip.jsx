import { Link } from 'react-router-dom'
import { SHOP_CATEGORIES } from '../../data/shopCategories.js'
import { MarqueeRibbon } from './MarqueeRibbon.jsx'

/** Visuals for each category card — aligned with `SHOP_CATEGORIES` order (see `public/services/home-categories/`). */
const CARD_MEDIA = [
  {
    src: '/services/home-categories/wedding-invitation-suite.png',
    alt: 'Wedding invitation suite samples',
    objectPosition: 'center',
  },
  {
    src: '/services/home-categories/wedding-stationery.png',
    alt: 'Wedding stationery samples',
    objectPosition: 'center',
  },
  {
    src: '/services/home-categories/celebration-suite.png',
    alt: 'Celebration suite stationery and print details',
    objectPosition: 'center',
  },
  {
    src: '/services/home-categories/omag-magazine.png',
    alt: "O'Mag magazine cover — custom keepsake",
    objectPosition: 'center',
  },
]

const ITEMS = SHOP_CATEGORIES.map((cat, idx) => ({
  ...cat,
  ...CARD_MEDIA[idx],
  /** Home strip: O’Mag opens the dedicated page; other categories open Shop at the right section. */
  homeTo: cat.id === 'omag' ? '/omag' : `/shop#${cat.id}`,
}))

/** Home — category cards: copy + “Shop Designs” deep-linking into Shop or O’Mag. */
export function HomeServicesStrip() {
  return (
    <section className="bg-[#f9f7f2] py-0">
      <MarqueeRibbon />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 md:px-8 md:py-16">
        <ul className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
          {ITEMS.map((it) => {
            const Card = (
              <div className="group flex h-full min-h-0 flex-col overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/10 transition hover:shadow-lg sm:flex-row sm:items-stretch xl:flex-col">
                {/** Same aspect box; `object-contain` on small screens avoids harsh crops, `cover` from md up. */}
                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-[#ece7de] sm:w-[55%] sm:max-w-[55%] xl:w-full xl:max-w-none">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="absolute inset-0 h-full w-full object-contain md:object-cover"
                    loading="lazy"
                    style={{ objectPosition: it.objectPosition ?? 'center' }}
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
                      Shop Designs
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
