import { SITE_LINKS } from '../../constants/site.js'

/** Brand marks without ring borders — soft fill + hover for a clean bar */
const iconClass =
  'h-9 w-9 rounded-full bg-cream/10 p-2 text-cream outline-none transition-colors duration-200 ease-out hover:bg-cream/15 focus-visible:ring-2 focus-visible:ring-cream/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f0707]'

/** Compact social icons for the footer bar (reference layout). */
export function SocialIconRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={SITE_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5A4.5 4.5 0 1 1 8 10a4.5 4.5 0 0 1 4-4.5zm0 2A2.5 2.5 0 1 0 14 10 2.5 2.5 0 0 0 12 7.5zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
        </svg>
      </a>
      <a
        href={SITE_LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden>
          <path d="M21.8 8.001a2.75 2.75 0 0 0-1.945-1.95C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.855.55A2.75 2.75 0 0 0 2.2 8.001 28.3 28.3 0 0 0 1.75 12a28.3 28.3 0 0 0 .45 3.999 2.75 2.75 0 0 0 1.945 1.951C5.8 18.5 12 18.5 12 18.5s6.2 0 7.855-.55a2.75 2.75 0 0 0 1.945-1.951c.3-1.31.45-2.65.45-3.999s-.15-2.689-.45-3.999zM10 15.25v-6.5L15.2 12 10 15.25z" />
        </svg>
      </a>
      <a
        href={SITE_LINKS.etsy}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Etsy"
      >
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden>
          <path d="M8.56 4.5h6.88c2.9 0 4.56 1.66 4.56 4.56 0 1.98-.9 3.42-2.46 4.02l2.58 6.42h-3.06l-2.28-5.7h-3.9v5.7H6.5V4.5h2.06zm.94 2.4v4.5h4.5c1.38 0 2.16-.78 2.16-2.22 0-1.44-.78-2.28-2.16-2.28h-4.5z" />
        </svg>
      </a>
      <a
        href={SITE_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52V23H.24V8zm7.56 0h4.34v2.05h.06c.6-1.14 2.08-2.35 4.28-2.35 4.58 0 5.42 3.01 5.42 6.92V23h-4.52v-6.84c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.6V23H7.8V8z" />
        </svg>
      </a>
    </div>
  )
}
