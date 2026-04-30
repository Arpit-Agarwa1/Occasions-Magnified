import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SiteLogo } from './SiteLogo.jsx'

/** Main nav (home is the logo only — no separate HOME label) */
const links = [
  { to: '/work', navText: 'OUR WORK' },
  { to: '/omag', navText: "O'MAG" },
  { to: '/about', navText: 'ABOUT US' },
  { to: '/testimonials', navText: 'TESTIMONIAL' },
  { to: '/contact', navText: 'CONTACT US' },
]

/**
 * Sticky top bar — `om-header` + cream/white type (matches @theme and burgundy sections sitewide).
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  const navClass = ({ isActive }) =>
    [
      'rounded-sm px-2 py-0.5 outline-none ring-offset-2 transition-colors duration-200 ease-out focus-visible:ring-2 lg:px-2.5 lg:py-1',
      'focus-visible:ring-cream/90 focus-visible:ring-offset-om-header',
      'shrink-0 whitespace-nowrap font-nav text-[10px] font-semibold tracking-[0.18em] uppercase md:text-[11px] md:tracking-[0.2em]',
      isActive ? 'text-om-gold drop-shadow-none' : 'text-cream/75 hover:text-cream',
    ].join(' ')

  const shell =
    'sticky top-0 z-50 w-full border-b border-om-gold/25 bg-om-header shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] transition-[box-shadow,border-color,background-color] duration-300 ease-out'

  const burgerBar = 'bg-cream'

  return (
    <header className={shell}>
      {/* Logo left · desktop nav right · burger right on small screens */}
      {/* py-0: row height follows the logo (tallest item); links + burger stay visually centered */}
      {/*
        Asymmetric horizontal padding below lg: burger sits at the trailing edge of the header (body edge);
        logo keeps start padding. From lg, symmetric padding again for desktop nav.
      */}
      <div className="flex w-full min-w-0 items-center justify-between gap-3 overflow-visible py-0 ps-4 pe-0 sm:gap-4 sm:ps-5 md:gap-5 md:ps-6 lg:gap-6 lg:px-8 xl:px-10 2xl:px-12">
        <NavLink
          to="/"
          className="flex shrink-0 items-center overflow-visible rounded-sm outline-none shadow-sm transition-shadow duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80 focus-visible:ring-offset-2 focus-visible:ring-offset-om-header"
          onClick={close}
          aria-label="Home"
        >
          <SiteLogo variant="inverted" />
        </NavLink>

        <nav
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-x-4 gap-y-1 overflow-x-auto pl-4 lg:flex lg:gap-x-5 xl:gap-x-6 2xl:gap-x-7 [&::-webkit-scrollbar]:h-0"
          aria-label="Main"
        >
          {links.map(({ to, navText }) => (
            <NavLink key={to} to={to} className={navClass}>
              {navText}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 min-w-11 shrink-0 items-center justify-end rounded-md border-0 bg-transparent pe-2 ps-0 font-nav outline-none ring-0 transition-opacity duration-200 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-cream/90 focus-visible:ring-offset-2 focus-visible:ring-offset-om-header sm:h-12 sm:min-w-12 sm:pe-3 md:h-14 md:min-w-14 md:pe-4 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 transition-transform duration-300 ease-out ${burgerBar} ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 transition-opacity duration-300 ease-out ${burgerBar} ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 transition-transform duration-300 ease-out ${burgerBar} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`w-full border-t border-white/10 bg-om-header lg:hidden ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'} transition-[max-height,opacity] duration-300 ease-out`}
      >
        <nav
          className="flex w-full flex-col gap-2 px-4 py-4 text-left sm:px-6 md:px-8"
          aria-label="Mobile"
        >
          {links.map(({ to, navText }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-4 py-3 text-left font-nav text-xs font-semibold tracking-[0.2em] uppercase outline-none ring-offset-2 transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-cream/80 focus-visible:ring-offset-om-header ${
                  isActive
                    ? 'bg-cream/10 text-om-gold'
                    : 'text-cream/80 hover:bg-white/5 hover:text-cream'
                }`
              }
              onClick={close}
            >
              {navText}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
