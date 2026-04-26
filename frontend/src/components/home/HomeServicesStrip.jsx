import { Link } from 'react-router-dom'
import { SHOP_CATEGORIES } from '../../data/shopCategories.js'
import { MarqueeRibbon } from './MarqueeRibbon.jsx'

/** Visuals for each category card — aligned with `SHOP_CATEGORIES` order. */
const CARD_MEDIA = [
  {
    src: '/services/e-invites.png',
    alt: 'Wedding invitation suite samples',
    objectPosition: 'left center',
  },
  {
    src: '/services/5.png',
    alt: 'Wedding stationery samples',
    objectPosition: 'center',
  },
  {
    src: '/services/7.png',
    alt: 'Celebration suite stationery and print details',
    objectPosition: 'center',
  },
  {
    src: '/work/magazine/open-magazne-o-mag-aashi.jpg',
    alt: "O'Mag open magazine spread",
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
        <ul className="grid items-start gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
          {ITEMS.map((it) => {
            const Card = (
              <div className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/10 transition hover:shadow-lg sm:flex-row sm:items-stretch xl:flex-col xl:items-stretch">
                <div className="relative flex w-full shrink-0 items-center justify-center bg-[#ece7de] px-2 pt-2 pb-1 sm:w-[55%] sm:px-2 sm:py-2 md:w-[62%] md:px-2.5 md:py-2.5 xl:w-full xl:px-3 xl:pt-3 xl:pb-2">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="max-h-[11rem] w-full max-w-full object-contain sm:max-h-[15rem] md:h-full md:max-h-none xl:h-auto xl:max-h-[22rem] 2xl:max-h-[26rem]"
                    loading="lazy"
                    style={{ objectPosition: it.objectPosition ?? 'center' }}
                  />
                </div>
                <div className="flex w-full flex-1 flex-col bg-[#4A0404] px-3 py-2.5 text-cream sm:w-[45%] sm:px-3 sm:py-3 md:w-[38%] md:px-3 md:py-3 lg:px-3.5 lg:py-3.5 xl:w-full xl:px-3.5 xl:py-3">
                  <p className="text-center font-serif text-[12px] font-semibold leading-snug text-cream sm:text-[13px] md:text-sm">
                    {it.title}
                  </p>
                  <p className="mt-2 text-center font-serif text-[11px] leading-snug text-cream/90 sm:text-xs sm:leading-relaxed">
                    {it.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2 sm:pt-3">
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
              <li key={it.id}>
                <Link
                  to={it.homeTo}
                  className="block outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f7f2]"
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
