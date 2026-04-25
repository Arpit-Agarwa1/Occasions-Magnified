import { Link } from 'react-router-dom'
import { SITE_LINKS } from '../../constants/site.js'

const ITEMS = [
  {
    label: 'WEDDING INVITATION\nARTS',
    src: '/services/e-invites.png',
    alt: 'Wedding invitation art samples',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    label: 'WEDDING\nSTATIONERY',
    src: '/services/5.png',
    alt: 'Wedding stationery samples',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    label: 'CELEBRATION\nSUITE',
    src: '/services/6.png',
    alt: 'Celebration suite stationery',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    label: "O'MAG\n(MAGAZINE)",
    src: '/work/magazine/cover.jpg',
    alt: "O'Mag magazine cover",
    href: '/omag',
    internal: true,
  },
  {
    label: 'PRINT\nSTATIONERY',
    src: '/services/7.png',
    alt: 'Print stationery samples',
    href: SITE_LINKS.etsy,
    internal: false,
  },
]

/** Home mock — small black tiles row under the dream-design band. */
export function HomeServicesStrip() {
  return (
    <section className="bg-[#4A0404] py-10 text-cream md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-center font-nav text-[10px] font-semibold tracking-[0.34em] text-cream/80 uppercase">
          Our Services
        </p>
        <ul className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
          {ITEMS.map((it) => {
            const CardBody = (
              <div className="group flex h-full min-h-[9.75rem] flex-col overflow-hidden rounded-sm bg-black/55 ring-1 ring-white/10 transition hover:bg-black/60 hover:ring-white/20">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/25">
                  <img src={it.src} alt={it.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 items-center justify-center px-3 py-3 text-center">
                  <p className="whitespace-pre-line font-nav text-[9px] font-bold tracking-[0.18em] text-cream/95 uppercase leading-tight">
                    {it.label}
                  </p>
                </div>
              </div>
            )

            return (
              <li key={it.label}>
                {it.internal ? (
                  <Link to={it.href} className="block outline-none focus-visible:ring-2 focus-visible:ring-cream/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A0404]">
                    {CardBody}
                  </Link>
                ) : (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block outline-none focus-visible:ring-2 focus-visible:ring-cream/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A0404]"
                  >
                    {CardBody}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

