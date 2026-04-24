import { Link } from 'react-router-dom'
import { SITE_LINKS } from '../constants/site.js'

const CATEGORIES = [
  { label: 'WEDDING INVITATIONS SUITE', href: SITE_LINKS.etsy },
  { label: 'WEDDING STATIONERY', href: SITE_LINKS.etsy },
  { label: "O'MAG (MAGAZINE)", href: SITE_LINKS.etsy },
  { label: 'CELEBRATION SUITE', href: SITE_LINKS.etsy },
]

/** Shop custom designs hub — marble field, categories, carousel placeholders, testimonial (mock). */
export function ShopPage() {
  return (
    <div className="om-marble-bg pb-24 pt-8 text-burgundy md:pt-10">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h1 className="text-center font-serif text-3xl italic text-[#310B0B] md:text-4xl">SHOP CUSTOM DESIGNS</h1>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[4.5rem] items-center justify-center rounded-sm bg-[#310B0B] px-4 py-4 text-center font-nav text-[11px] font-semibold leading-snug tracking-[0.12em] text-white shadow-md transition hover:bg-[#451212] sm:text-xs"
            >
              {c.label}
            </a>
          ))}
        </div>

        <h2 className="mt-16 text-center font-serif text-2xl text-[#310B0B] md:text-3xl">
          What We Create / Why Choose Us
        </h2>
        <div className="mx-auto mt-6 max-w-4xl rounded-lg bg-[#310B0B] px-6 py-24 text-center text-cream/80 shadow-inner">
          <span className="font-serif text-sm italic">Featured film or hero visual</span>
        </div>

        <h2 className="mt-16 text-center font-serif text-2xl text-[#310B0B] md:text-3xl">
          Trending Designs Carousel (Instagram Embed)
        </h2>
        <div className="mx-auto mt-6 flex max-w-5xl gap-3 overflow-x-auto pb-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-52 w-32 shrink-0 rounded-sm bg-[#8b6b63]/35 shadow-inner ring-1 ring-black/5"
              aria-hidden
            />
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <Link
            to="/work"
            className="flex w-full items-center justify-center rounded-sm bg-[#310B0B] px-6 py-4 text-center font-nav text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#451212]"
          >
            MORE SAMPLES (REDIRECTED TO OUR WORK PAGE)
          </Link>
        </div>

        <h2 className="mt-16 text-center font-serif text-2xl text-[#310B0B] md:text-3xl">
          Reviews &amp; Testimonials (Text + Video)
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <div className="relative rounded-md border-2 border-dashed border-[#310B0B] bg-[#310B0B] px-8 py-10 text-center text-cream shadow-lg">
            <blockquote className="font-serif text-lg italic leading-relaxed md:text-xl">
              &ldquo;Shristi beautifully captured our love story in the O&apos;Mag. It brought tears to my
              wife&apos;s eyes on our anniversary! The design, quality, and service were top-notch.&rdquo;
            </blockquote>
            <p className="mt-6 font-nav text-xs font-semibold tracking-[0.2em] text-cream/80 uppercase">
              — Amit &amp; Jyoti
            </p>
            <img
              src="/brand/founder-shristi.png"
              alt=""
              className="absolute -bottom-6 right-6 h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#310B0B]">Not Sure Where to Begin?</h2>
          <p className="mt-4 font-serif text-lg text-burgundy/85">
            Whether you&apos;re planning a wedding, celebrating a milestone, or looking for a heartwarming
            gift — we&apos;re here to help you start just right.
          </p>
          <p className="mt-2 font-serif text-burgundy/75">
            Browse our ready-to-shop designs or create something truly personal from scratch.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={SITE_LINKS.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-sm bg-[#310B0B] px-6 py-3 font-nav text-[11px] font-semibold tracking-[0.16em] text-white uppercase sm:max-w-xs"
            >
              SEE WHAT&apos;S IN STORE
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-sm border-2 border-[#310B0B] bg-white/80 px-6 py-3 font-nav text-[11px] font-semibold tracking-[0.16em] text-[#310B0B] uppercase sm:max-w-xs"
            >
              GET CUSTOM DESIGN
            </Link>
          </div>
          <Link
            to="/omag#faq"
            className="mt-10 inline-block font-serif text-lg text-[#310B0B] underline underline-offset-4"
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  )
}
