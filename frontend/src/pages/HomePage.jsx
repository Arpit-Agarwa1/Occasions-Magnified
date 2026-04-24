import { Link } from 'react-router-dom'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { SITE_LINKS } from '../constants/site.js'

const FOUNDER_COPY = `Occasions Magnified is a creative design studio founded by Shristi, specializing in thoughtfully crafted, personalized designs that turn special moments into lasting memories. From elegant wedding invitations to unique customized magazines (O'Mag), the brand focuses on storytelling through design — where every detail reflects emotion, personality, and purpose.`

/**
 * Home page sections aligned to the provided mock: hero, O'Mag, shop ribbons + CTA, founder, testimonial.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — headline + CTA beside product photography */}
      <section className="relative overflow-hidden bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
          <div className="order-2 md:order-1">
            <img
              src="/brand/hero-banner.jpg"
              alt="Wedding stationery and magazines on display"
              className="h-auto w-full rounded-sm object-cover shadow-[0_20px_50px_-20px_rgba(69,2,1,0.35)]"
              width={960}
              height={720}
              loading="eager"
            />
          </div>
          <div className="order-1 text-center md:order-2 md:pr-4 md:text-left">
            <h1 className="font-serif text-[2.1rem] leading-[1.15] text-burgundy sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem]">
              Crafting Memories through Elegant Designs
            </h1>
            <Link
              to="/work"
              className="mt-10 inline-block font-sans text-sm font-semibold tracking-wide text-burgundy underline decoration-burgundy/35 decoration-2 underline-offset-[10px] hover:decoration-burgundy"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* O'Mag block */}
      <section className="bg-burgundy py-16 text-cream md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="font-serif text-[3.25rem] leading-none md:text-[4.25rem]">O&apos;MAG</p>
            <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-cream/92">
              Customized magazines (O&apos;Mag) for gifts and memories — editorial storytelling with
              print you can keep forever.
            </p>
            <a
              href={SITE_LINKS.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-cream px-10 py-3.5 font-sans text-xs font-semibold tracking-[0.2em] text-burgundy uppercase transition hover:bg-white"
            >
              ORDER NOW!
            </a>
          </div>
          <div>
            <img
              src="/how-it-works/working-omag.jpg"
              alt="O'Mag spreads and production samples"
              className="w-full rounded-sm object-cover shadow-2xl shadow-black/25"
              width={880}
              height={640}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <MarqueeRibbon />

      {/* Shop / portfolio CTA — dark tilted collage feel */}
      <section className="relative overflow-hidden py-20 text-cream md:py-28">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            transform: 'rotate(-4deg) scale(1.15)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-burgundy-deep/80" />
        <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light">
          <div
            className="h-full w-full bg-cover bg-center opacity-90"
            style={{
              backgroundImage: 'url(/brand/bg-grid.png)',
              transform: 'rotate(6deg) scale(1.2)',
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-sans text-xl font-bold leading-snug tracking-[0.12em] uppercase sm:text-2xl md:text-[1.65rem]">
            YOUR DREAM DESIGN, JUST A CLICK AWAY
          </h2>
          <p className="mt-5 font-serif text-lg text-cream/88 md:text-xl">
            Browse past creations and find inspiration for your perfect suite — then connect for
            something made only for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="rounded-full border-2 border-cream px-9 py-3 font-sans text-xs font-semibold tracking-[0.18em] uppercase text-cream transition hover:bg-cream hover:text-burgundy"
            >
              Shop
            </Link>
            <Link
              to="/work"
              className="rounded-full bg-cream px-9 py-3 font-sans text-xs font-semibold tracking-[0.18em] text-burgundy uppercase transition hover:bg-white"
            >
              Explore our work
            </Link>
          </div>
        </div>
      </section>

      <MarqueeRibbon />

      {/* Meet the founder */}
      <section className="relative bg-burgundy py-16 text-cream md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/brand/founder-shristi.png"
              alt="Illustration of founder Shristi Jhalani"
              className="max-h-[min(440px,70vh)] w-auto object-contain drop-shadow-lg"
              width={420}
              height={520}
              loading="lazy"
            />
            <p className="mt-5 font-serif text-2xl italic text-cream/95">Shristi Jhalani</p>
          </div>
          <div>
            <h2 className="font-sans text-xs font-semibold tracking-[0.35em] text-cream/90 uppercase">
              MEET THE FOUNDER
            </h2>
            <p className="mt-6 font-serif text-[1.15rem] leading-relaxed text-cream/95 md:text-xl">
              {FOUNDER_COPY}
            </p>
            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-serif text-lg text-cream underline decoration-cream/45 underline-offset-[10px] hover:decoration-cream"
            >
              [Connect with Me]
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#efe8dc] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-burgundy md:text-[2.35rem]">
            What Our Clients Say....
          </h2>
          <blockquote className="mt-10 font-serif text-xl italic leading-relaxed text-burgundy/90 md:text-2xl">
            &ldquo;The attention to detail and warmth in every page made our invitation feel like the
            beginning of our story — not just a card.&rdquo;
          </blockquote>
          <p className="mt-8 font-sans text-xs font-semibold tracking-[0.2em] text-burgundy/65 uppercase">
            — A. &amp; R., Mumbai
          </p>
          <Link
            to="/testimonials"
            className="mt-10 inline-block font-sans text-xs font-semibold tracking-[0.18em] text-burgundy underline underline-offset-8"
          >
            READ MORE
          </Link>
        </div>
      </section>
    </>
  )
}
