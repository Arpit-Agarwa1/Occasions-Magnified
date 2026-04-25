import { Link } from 'react-router-dom'
import { SITE_LINKS } from '../../constants/site.js'
import { MarqueeRibbon } from './MarqueeRibbon.jsx'

const ITEMS = [
  {
    title: 'WEDDING\nINVITATIONS\nSUITE',
    src: '/services/e-invites.png',
    alt: 'Wedding invitation suite samples',
    objectPosition: 'left center',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    title: 'WEDDING\nSTATIONERY',
    src: '/services/5.png',
    alt: 'Wedding stationery samples',
    objectPosition: 'center',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    title: 'CELEBRATION\nSUITE',
    src: '/services/7.png',
    alt: 'Celebration suite stationery and print details',
    objectPosition: 'center',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    title: "O'MAG\n(MAGAZINE)",
    src: '/work/magazine/open-magazne-o-mag-aashi.jpg',
    alt: "O'Mag open magazine spread",
    objectPosition: 'center',
    href: '/omag',
    internal: true,
  },
]

const SUBTITLE = 'A quick look at the best moisturizers for sensitive skin'

/** Home mock — service cards match provided reference strip. */
export function HomeServicesStrip() {
  return (
    <section className="bg-[#f9f7f2] py-0">
      <MarqueeRibbon />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <ul className="grid gap-6 md:grid-cols-4 md:gap-8">
          {ITEMS.map((it, idx) => {
            const Card = (
              <div className="group flex h-full min-h-[10.75rem] overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/10 transition hover:shadow-lg md:min-h-[11.5rem]">
                <div className="relative w-[44%] shrink-0 bg-[#ece7de]">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    style={{ objectPosition: it.objectPosition ?? 'center' }}
                  />
                </div>
                <div className="flex w-[56%] flex-col bg-[#4A0404] px-4 py-4 text-cream">
                  <p className="whitespace-pre-line text-center font-nav text-[10px] font-bold tracking-[0.16em] uppercase leading-tight">
                    {it.title}
                  </p>
                  <p className="mt-3 text-center font-serif text-xs leading-relaxed text-cream/90">{SUBTITLE}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="inline-flex items-center justify-center rounded-sm bg-cream px-3 py-1.5 font-nav text-[10px] font-semibold tracking-wide text-[#4A0404]">
                      Shop Now!
                    </span>
                    <span className="font-nav text-xl leading-none text-cream/90" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </div>
            )

            return (
              <li key={`${it.href}#${idx}`}>
                {it.internal ? (
                  <Link to={it.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f7f2]">
                    {Card}
                  </Link>
                ) : (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f7f2]"
                  >
                    {Card}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
      <MarqueeRibbon />
    </section>
  )
}

