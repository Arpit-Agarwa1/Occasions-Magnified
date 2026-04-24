import { NavLink } from 'react-router-dom'
import { NewsletterForm } from '../forms/NewsletterForm.jsx'
import { SocialIconRow } from './SocialIconRow.jsx'

/** Footer CTA over grid texture, then bar with copyright, icons, and legal links (reference layout). */
export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <section
        className="relative overflow-hidden py-16 text-cream md:py-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(69,2,1,0.88), rgba(69,2,1,0.88)), url(/brand/bg-grid.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img src="/brand/dark-texture.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl font-medium md:text-[2.35rem]">Have any Questions?</h2>
          <p className="mt-3 font-serif text-lg text-cream/90">
            Leave your email and we&apos;ll get back to you about invitations, O&apos;Mag, or custom
            projects.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <div className="bg-burgundy-deep py-7 text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-sm md:flex-row md:justify-between md:px-8">
          <p className="order-2 font-sans text-cream/80 md:order-1">
            © {new Date().getFullYear()} Occasions Magnified
          </p>
          <div className="order-1 md:order-2">
            <SocialIconRow />
          </div>
          <div className="order-3 flex flex-wrap items-center justify-center gap-2 font-sans text-cream/75">
            <NavLink to="/contact" className="hover:text-cream">
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
