import { Link } from 'react-router-dom'
import { MarqueeRibbon } from './MarqueeRibbon.jsx'
import { SITE_LINKS } from '../../constants/site.js'

/**
 * Home mock — four category tiles: invitations, stationery, celebration, O'Mag.
 * Sandwiched by burgundy “SHOP CUSTOM DESIGNS” marquees.
 */
const CATEGORIES = [
  {
    title: 'WEDDING INVITATION SUITE',
    blurb: 'Save-the-dates, invites, and coordinated digital pieces for every guest list.',
    imageSrc: '/services/e-invites.png',
    imageAlt: 'Wedding invitation suite — elegant print and e-invite design',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    title: 'WEDDING STATIONERY',
    blurb: 'Day-of details — menus, programs, and place settings in one cohesive story.',
    imageSrc: '/services/5.png',
    imageAlt: 'Wedding stationery — menus and print pieces',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    title: 'CELEBRATION SUITE',
    blurb: 'Anniversaries, milestones, and family moments — memorable on paper.',
    imageSrc: '/services/6.png',
    imageAlt: 'Celebration and event stationery',
    href: SITE_LINKS.etsy,
    internal: false,
  },
  {
    title: "O'MAG (MAGAZINE)",
    blurb: 'A bespoke printed magazine — your photos and story, bound as a keepsake.',
    imageSrc: '/work/magazine/cover.jpg',
    imageAlt: "O'Mag — custom printed magazine cover",
    href: '/omag',
    internal: true,
  },
]

/** One service card — image + burgundy footer with Shop CTA. */
function ServiceCard({ title, blurb, imageSrc, imageAlt, href, internal }) {
  const body = (
    <>
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-burgundy/5">
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="bg-[#4A0404] px-4 py-5 text-center text-cream md:px-5 md:py-6">
        <h3 className="font-nav text-[10px] font-bold tracking-[0.14em] md:text-[11px]">{title}</h3>
        <p className="mt-2 font-serif text-sm leading-relaxed text-cream/88 md:text-[0.95rem]">{blurb}</p>
        <span className="mt-4 inline-flex w-full max-w-[14rem] items-center justify-center rounded-sm border-2 border-cream/50 bg-white/10 py-2.5 font-nav text-[9px] font-bold tracking-[0.22em] text-cream uppercase transition hover:border-cream">
          Shop Now!
        </span>
      </div>
    </>
  )

  if (internal) {
    return (
      <Link to={href} className="block outline-none ring-offset-2 transition hover:opacity-[0.98] focus-visible:ring-2 focus-visible:ring-[#4A0404]/40">
        {body}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block outline-none ring-offset-2 transition hover:opacity-[0.98] focus-visible:ring-2 focus-visible:ring-[#4A0404]/40"
    >
      {body}
    </a>
  )
}

export function HomeServiceGrid() {
  return (
    <section className="border-y border-burgundy/10 bg-[#f9f7f2] py-0">
      <MarqueeRibbon />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <ul className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-10">
          {CATEGORIES.map((c) => (
            <li key={c.title} className="flex min-h-0 flex-col overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-black/[0.06]">
              <ServiceCard {...c} />
            </li>
          ))}
        </ul>
      </div>
      <MarqueeRibbon />
    </section>
  )
}
