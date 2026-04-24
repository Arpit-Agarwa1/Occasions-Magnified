import { Link } from 'react-router-dom'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection.jsx'
import { SITE_LINKS } from '../constants/site.js'

/** Handwritten callouts — wording + spelling from the approved home mock. */
const CALLOUTS = [
  { text: 'Personalized Stories', className: 'left-[5%] top-[8%] -rotate-6' },
  { text: 'Memorable Gift', className: 'right-[6%] top-[14%] rotate-3' },
  { text: 'Fully Customizable', className: 'left-[8%] bottom-[42%] -rotate-2' },
  { text: 'Timeless Designs', className: 'right-[8%] bottom-[36%] rotate-5' },
  { text: 'High Quality Print', className: 'left-[12%] bottom-[10%] rotate-2' },
]

const FOUNDER_BIO = `I'm Shristi Jhalani — designer and founder of Occasions Magnified. I love turning life's biggest chapters into tangible art: invitations that feel like the first page of your story, and O'Mag magazines you can hold again and again.`

/**
 * Home — matches the supplied mock: hero + transparent nav, O’MAG lockup + polaroid + callouts, ribbons, dream grid, founder + overlapping signature, testimonial split, imagery from brand pack.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — studio still: easel welcome piece, magazines, vase (brand/hero-banner.jpg) */}
      <section className="relative overflow-hidden bg-[#F5F5F5] pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-8">
          <div className="order-2 md:order-1">
            <img
              src="/brand/hero-banner.jpg"
              alt="Welcome sign on easel, magazines, envelopes, and white blossom branches — Occasions Magnified"
              className="h-auto w-full rounded-sm object-cover shadow-[0_20px_50px_-24px_rgba(74,4,4,0.35)]"
              width={960}
              height={720}
              loading="eager"
            />
          </div>
          <div className="order-1 text-center md:order-2 md:pr-2 md:text-left">
            <h1 className="font-serif text-[2.05rem] font-semibold leading-[1.12] text-[#4A0404] sm:text-4xl md:text-[2.75rem] lg:text-[2.95rem]">
              Crafting Memories through Elegant Designs
            </h1>
            <Link
              to="/work"
              className="mt-10 inline-flex items-center justify-center border border-[#4A0404] bg-transparent px-8 py-2.5 font-nav text-xs font-semibold tracking-[0.18em] text-[#4A0404] uppercase transition hover:bg-[#4A0404] hover:text-white"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* O’MAG — deep maroon; lockup + copy; polaroid frame + couple cover + handwritten notes */}
      <section className="bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="font-serif text-[3rem] leading-none tracking-tight md:text-[3.6rem]">O&apos;MAG</p>
            <p className="mt-2 font-serif text-sm font-medium tracking-[0.28em] text-[#F5F5F5]/95 md:text-base">
              OCCASIONS{' '}
              <span className="font-semibold tracking-[0.12em] text-white">MAGNIFIED</span>
            </p>
            <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-[#F5F5F5]/95">
              Turn your memories into a <strong className="font-semibold text-white">keepsake</strong> with our
              custom magazines, designed to celebrate every special moment!
            </p>
            <a
              href={SITE_LINKS.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 font-nav text-xs font-bold tracking-[0.22em] text-black uppercase shadow-sm transition hover:bg-[#f2f2f2]"
            >
              ORDER NOW!
            </a>
          </div>

          <Link
            to="/omag"
            className="group mx-auto block w-full max-w-md"
            aria-label="View O'Mag details"
          >
            <div className="relative rounded-sm bg-white p-4 pb-6 shadow-2xl ring-1 ring-black/5 transition group-hover:ring-2 group-hover:ring-white/60">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100">
                {/* Looping clip — muted for autoplay; poster keeps layout sharp before first frame */}
                <video
                  className="absolute inset-0 h-full w-full scale-[1.02] object-cover pointer-events-none transition duration-300 group-hover:scale-[1.04]"
                  src="/brand/omag-section-loop.mp4"
                  poster="/work/magazine/mockup-magazine.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"
                  aria-hidden
                />
                {CALLOUTS.map((c) => (
                  <span
                    key={c.text}
                    className={`pointer-events-none absolute z-10 max-w-[55%] font-hand text-2xl leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-[1.65rem] md:text-3xl ${c.className}`}
                  >
                    {c.text}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      <MarqueeRibbon />

      <PortfolioPreviewSection />

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-95"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            transform: 'rotate(-4deg) scale(1.15)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#4A0404]/86" />
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
          <h2 className="font-nav text-xl font-bold leading-snug tracking-[0.14em] uppercase sm:text-2xl md:text-[1.65rem]">
            YOUR DREAM DESIGN, JUST A CLICK AWAY
          </h2>
          <p className="mt-5 font-serif text-lg text-white/92 md:text-xl">
            Browse through our past creations and place your custom order easily.
          </p>
        </div>
      </section>

      <MarqueeRibbon />

      {/* Meet the founder — gold script overlaps bottom of portrait (mock) */}
      <section className="relative overflow-hidden bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="relative mx-auto flex w-full max-w-md flex-col items-center md:mx-0">
            <img
              src="/brand/founder-shristi.png"
              alt="Illustration of founder Shristi Jhalani"
              className="relative z-0 w-full max-w-[380px] object-contain drop-shadow-xl"
              width={420}
              height={520}
              loading="lazy"
            />
            <p className="font-signature pointer-events-none absolute bottom-2 left-1/2 z-10 w-[90%] -translate-x-1/2 translate-y-1/3 text-center text-[2.35rem] leading-none text-[#e8c87a] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:text-5xl md:bottom-4 md:text-[2.75rem]">
              Shristi Jhalani
            </p>
          </div>
          <div>
            <h2 className="font-nav text-xs font-semibold tracking-[0.38em] text-[#F5F5F5]/90 uppercase">
              MEET THE FOUNDER
            </h2>
            <p className="mt-6 font-serif text-[1.12rem] leading-relaxed text-[#F5F5F5]/95 md:text-xl">{FOUNDER_BIO}</p>
            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-serif text-lg text-[#F5F5F5] underline decoration-[#F5F5F5]/45 underline-offset-[10px] hover:decoration-white"
            >
              [Connect with Me]
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials — title on maroon; wide cream card (mock) */}
      <section className="relative bg-[#4A0404] pb-0 pt-14 md:pt-16">
        <h2 className="relative z-10 px-4 text-center font-serif text-3xl text-white md:text-[2.35rem]">
          What Our Clients Say....
        </h2>
        <div className="relative z-10 mx-auto mt-10 max-w-5xl rounded-t-[1.75rem] bg-[#F5F5F0] px-6 py-12 text-[#4A0404] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:px-14 md:py-14">
          <blockquote className="text-center font-serif text-xl italic leading-relaxed md:text-2xl">
            &ldquo;The invite video brought tears to our families&apos; eyes! Every detail was spot on.&rdquo;
          </blockquote>
          <p className="mt-8 text-center font-nav text-xs font-semibold tracking-[0.22em] text-[#4A0404]/70 uppercase">
            — Aanya &amp; Karan, Mumbai
          </p>
        </div>
      </section>

      {/* Design reference asset (full mock) available at /brand/home-design-reference.png for stakeholders */}
    </>
  )
}
