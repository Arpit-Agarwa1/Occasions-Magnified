import { useCallback, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

/** Home mock: HOME · OUR WORK · O’MAG · SHOP · ABOUT US · TESTIMONIAL · CONTACT US */
const links = [
  { to: '/', navText: 'HOME', end: true },
  { to: '/work', navText: 'OUR WORK', end: false },
  { to: '/omag', navText: "O'MAG", end: false },
  { to: '/shop', navText: 'SHOP', end: false },
  { to: '/about', navText: 'ABOUT US', end: false },
  { to: '/testimonials', navText: 'TESTIMONIAL', end: false },
  { to: '/contact', navText: 'CONTACT US', end: false },
]

/**
 * Home: transparent bar over the hero (mock). Other routes: solid #310B0B + inverted logo.
 */
export function SiteHeader() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const isHome = pathname === '/'

  const navClass = ({ isActive }) =>
    [
      'rounded-sm px-2 py-1.5 outline-none ring-offset-2 transition-colors focus-visible:ring-2 lg:px-2.5 lg:py-2',
      isHome
        ? 'drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] focus-visible:ring-[#4A0404] focus-visible:ring-offset-[#F5F5F5]'
        : 'focus-visible:ring-white/90 focus-visible:ring-offset-[#310B0B]',
      'shrink-0 whitespace-nowrap font-nav text-[10px] font-semibold tracking-[0.18em] uppercase md:text-[11px] md:tracking-[0.2em]',
      isHome
        ? isActive
          ? 'text-[#4A0404]'
          : 'text-[#4A0404]/85 hover:text-[#4A0404]'
        : isActive
          ? 'text-white drop-shadow-none'
          : 'text-white/75 hover:text-white drop-shadow-none',
    ].join(' ')

  const shell = isHome
    ? 'absolute inset-x-0 top-0 z-50 w-full bg-transparent'
    : 'sticky top-0 z-50 w-full border-b border-white/10 bg-[#310B0B] shadow-md'

  const burgerBar = isHome ? 'bg-[#4A0404]' : 'bg-white'

  return (
    <header className={shell}>
      {/* Logo left · desktop nav right · burger right on small screens */}
      <div className="flex min-h-[4rem] w-full min-w-0 items-center justify-between gap-4 px-4 sm:min-h-[4.25rem] sm:gap-5 sm:px-6 md:gap-6 md:px-8 lg:px-10 xl:gap-8 xl:px-12">
        <NavLink
          to="/"
          className={`flex shrink-0 items-center rounded-sm outline-none drop-shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isHome
              ? 'focus-visible:ring-[#4A0404]/80 focus-visible:ring-offset-[#F5F5F5]'
              : 'focus-visible:ring-white/90 focus-visible:ring-offset-[#310B0B]'
          }`}
          onClick={close}
          aria-label="Home"
        >
          <img
            src="/brand/logo.png"
            alt="Occasions Magnified"
            className={`h-14 w-auto shrink-0 sm:h-[3.75rem] md:h-16 ${isHome ? '' : 'brightness-0 invert'}`}
            width={280}
            height={84}
            loading="eager"
          />
        </NavLink>

        <nav
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-x-4 gap-y-1 overflow-x-auto pl-4 lg:flex lg:gap-x-5 xl:gap-x-6 2xl:gap-x-7 [&::-webkit-scrollbar]:h-0"
          aria-label="Main"
        >
          {links.map(({ to, navText, end }) => (
            <NavLink key={to} to={to} className={navClass} end={end}>
              {navText}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md outline-none ring-1 ring-inset transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden ${isHome ? 'bg-white/10 ring-[#4A0404]/25 focus-visible:ring-[#4A0404] focus-visible:ring-offset-[#F5F5F5]' : 'bg-white/5 ring-white/20 focus-visible:ring-white/90 focus-visible:ring-offset-[#310B0B]'}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 transition ${burgerBar} ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 transition ${burgerBar} ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 transition ${burgerBar} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`w-full border-t lg:hidden ${isHome ? 'border-[#4A0404]/10 bg-[#F5F5F5]/98' : 'border-white/10 bg-[#310B0B]'} ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'} transition-all duration-300`}
      >
        <nav
          className="flex w-full flex-col gap-2 px-4 py-4 text-left sm:px-6 md:px-8"
          aria-label="Mobile"
        >
          {links.map(({ to, navText, end }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-4 py-3 text-left font-nav text-xs font-semibold tracking-[0.2em] uppercase outline-none ring-offset-2 transition-colors focus-visible:ring-2 ${
                  isHome
                    ? isActive
                      ? 'bg-white text-[#4A0404] focus-visible:ring-[#4A0404]'
                      : 'text-[#4A0404]/90 focus-visible:ring-[#4A0404]/60 focus-visible:ring-offset-[#F5F5F5]'
                    : isActive
                      ? 'bg-white/10 text-white focus-visible:ring-white/80'
                      : 'text-white/85 focus-visible:ring-white/60 focus-visible:ring-offset-[#310B0B]'
                }`
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
