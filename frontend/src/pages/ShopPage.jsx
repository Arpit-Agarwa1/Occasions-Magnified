import { SITE_LINKS } from '../constants/site.js'

/** Shop entry point — primary storefront is Etsy. */
export function ShopPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center md:px-8 md:py-20">
      <div className="rounded-sm border border-burgundy/15 bg-white p-10 shadow-sm md:p-14">
        <h1 className="font-serif text-4xl text-burgundy md:text-5xl">Shop</h1>
        <p className="mt-4 font-serif text-lg text-burgundy/80">
          Invitations, O&apos;Mag issues, and celebration designs are available through our Etsy
          storefront — secure checkout and worldwide shipping where offered.
        </p>
        <a
          href={SITE_LINKS.etsy}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-burgundy px-10 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-deep"
        >
          Open Etsy shop
        </a>
      </div>
    </div>
  )
}
