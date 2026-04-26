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
                {/** Fixed image frame so every card shares the same media height; art stays fully visible (`object-contain`). */}
                <div className="relative flex aspect-[4/5] w-full shrink-0 items-center justify-center bg-[#ece7de] p-2 sm:aspect-auto sm:min-h-[16rem] sm:w-[55%] sm:max-w-[55%] md:min-h-[17rem] md:w-[55%] md:max-w-[55%] xl:aspect-[4/5] xl:min-h-0 xl:w-full xl:max-w-none">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="max-h-full w-full max-w-full object-contain"
                    loading="lazy"
                    style={{ objectPosition: it.objectPosition ?? 'center' }}
                  />
                </div>
                <div className="flex h-full min-h-0 w-full flex-col bg-[#4A0404] px-3 py-3 text-cream sm:w-[45%] sm:shrink-0 sm:px-3 sm:py-3 md:w-[45%] md:px-3.5 md:py-3.5 xl:flex-1 xl:w-full">
                  <p className="shrink-0 text-center font-serif text-[12px] font-semibold leading-snug text-cream sm:text-[13px] md:text-sm">
                    {it.title}
                  </p>
                  <p className="mt-2 line-clamp-3 min-h-[3.5rem] shrink-0 text-center font-serif text-[11px] leading-snug text-cream/90 sm:min-h-[3.75rem] sm:text-xs sm:leading-relaxed">
                    {it.description}
                  </p>
                  <div className="mt-auto flex shrink-0 items-center justify-between border-t border-cream/10 pt-3">
                    <span className="inline-flex items-center justify-center rounded-sm bg-cream px-2.5 py-1.5 font-nav text-[9px] font-semibold tracking-wide text-[#4A0404] sm:px-3 sm:text-[10px]">
                      Shop Designs
                    </span>
                    <span className="font-nav text-lg leading-none text-cream/90 sm:text-xl" aria-hidden>
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
