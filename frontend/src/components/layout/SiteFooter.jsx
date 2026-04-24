import { NavLink } from 'react-router-dom'
import { NewsletterForm } from '../forms/NewsletterForm.jsx'
import { SocialIconRow } from './SocialIconRow.jsx'

/** Footer CTA + bar (mock: questions band, © 2024, icons, Terms | Privacy). */
export function SiteFooter() {
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
          <h2 className="font-serif text-3xl font-medium text-white md:text-[2.35rem]">Have any Questions?</h2>
          <p className="mt-3 font-serif text-lg text-cream/90">
            Enter your email and we&apos;ll get back to you about invitations, O&apos;Mag, or custom
            projects.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <div className="bg-[#1f0707] py-7 text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 text-sm md:grid-cols-3 md:gap-4 md:px-8">
          <p className="text-center font-nav text-cream/80 md:text-left">© 2024 Occasions Magnified</p>
          <div className="flex justify-center">
            <SocialIconRow />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-nav text-cream/75 md:justify-end">
            <NavLink to="/contact" className="rounded-sm px-1 py-0.5 outline-none transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-cream/50">
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
