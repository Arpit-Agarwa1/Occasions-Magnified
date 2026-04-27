import { NavLink } from 'react-router-dom'
import { getWhatsAppContactUrl } from '../../constants/site.js'
import { SocialIconRow } from './SocialIconRow.jsx'

/** Footer CTA + bar — contact prompt, © year, socials, legal. */
export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto">
      <section
        className="relative overflow-hidden py-16 text-cream md:py-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,4,4,0.92), rgba(74,4,4,0.92)), url(/brand/bg-grid.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img src="/brand/dark-texture.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[2.15rem]">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-cream/90">
            Share your details and we&apos;ll get back to you to start your custom design journey.
          </p>
          <a
            href={getWhatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-cream/90 bg-cream px-10 py-3.5 font-nav text-sm font-bold tracking-wide text-[#4A0404] shadow-sm outline-none transition-colors duration-200 ease-out hover:bg-white focus-visible:ring-2 focus-visible:ring-cream/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#4A0404] md:text-base"
          >
            Contact Us
          </a>
        </div>
      </section>

      <div className="bg-black py-7 text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 text-sm md:grid-cols-3 md:gap-4 md:px-8">
          <p className="text-center font-nav text-cream/80 md:text-left">
            © {currentYear} Occasions Magnified
          </p>
          <div className="flex justify-center">
            <SocialIconRow />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-nav text-cream/75 md:justify-end">
            <NavLink
              to="/contact"
              className="rounded-sm px-1 py-0.5 outline-none transition-colors duration-200 ease-out hover:text-cream focus-visible:ring-2 focus-visible:ring-cream/50"
            >
              Contact
            </NavLink>
            <span aria-hidden className="text-cream/40">
              |
            </span>
            <span className="cursor-default">Terms of Service</span>
            <span aria-hidden className="text-cream/40">
              |
            </span>
            <span className="cursor-default">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
