import { SITE_LINKS } from '../../constants/site.js'
import { SvgBrandEtsy, SvgBrandInstagram, SvgBrandLinkedIn, SvgBrandYoutube } from '../icons/SocialBrandIcons.jsx'

/** Brand marks without ring borders — soft fill + hover for a clean bar */
const iconClass =
  'h-9 w-9 rounded-full bg-cream/10 p-2 text-cream outline-none transition-colors duration-200 ease-out hover:bg-cream/15 focus-visible:ring-2 focus-visible:ring-cream/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f0707]'

/** Compact social icons for the footer bar — official-style marks (see `SocialBrandIcons.jsx`). */
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
        <SvgBrandInstagram className="h-full w-full" />
      </a>
      <a
        href={SITE_LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="YouTube"
      >
        <SvgBrandYoutube className="h-full w-full" />
      </a>
      <a
        href={SITE_LINKS.etsy}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Etsy"
      >
        {/* Wordmark reads large at full bleed — scale down inside the same hit target */}
        <SvgBrandEtsy className="h-full w-full origin-center scale-[0.72]" />
      </a>
      <a
        href={SITE_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="LinkedIn"
      >
        <SvgBrandLinkedIn className="h-full w-full" />
      </a>
    </div>
  )
}
