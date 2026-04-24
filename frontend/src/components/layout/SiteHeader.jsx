import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', navText: 'HOME', end: true },
  { to: '/work', navText: 'OUR WORK', end: false },
  { to: '/omag', navText: "O'MAG...", end: false },
  { to: '/shop', navText: 'SHOP', end: false },
  { to: '/about', navText: 'ABOUT US', end: false },
  { to: '/testimonials', navText: 'TESTIMONIAL', end: false },
  { to: '/contact', navText: 'CONTACT US', end: false },
]

const navClass = ({ isActive }) =>
  [
    'text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors',
    isActive ? 'text-burgundy' : 'text-burgundy/70 hover:text-burgundy',
  ].join(' ')

/** Top navigation: white bar, logo left, uppercase links (matches supplied layout). */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <header className="sticky top-0 z-50 border-b border-burgundy/10 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <NavLink to="/" className="flex shrink-0 items-center gap-2" onClick={close} aria-label="Home">
          <img
            src="/brand/logo.png"
            alt="Occasions Magnified"
            className="h-11 w-auto md:h-[52px]"
            width={180}
            height={56}
            loading="eager"
          />
        </NavLink>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-6 xl:gap-8" aria-label="Main">
          {links.map(({ to, navText, end }) => (
            <NavLink key={to} to={to} className={navClass} end={end}>
              {navText}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-burgundy/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-burgundy transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-burgundy transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-burgundy transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-burgundy/10 bg-white lg:hidden ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'} transition-all duration-300`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {links.map(({ to, navText, end }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase ${isActive ? 'bg-cream text-burgundy' : 'text-burgundy/80'}`
              }
              end={end}
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
