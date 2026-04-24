import { Link } from 'react-router-dom'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection.jsx'
import { brandShowcaseLoop } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'

const FOUNDER_BIO = `I'm Shristi Jhalani — designer and founder of Occasions Magnified. I love turning life's biggest chapters into tangible art: invitations that feel like the first page of your story, and O'Mag magazines you can hold again and again.`

/**
 * Home — extended hero cover, O’Mag video without polaroid frame or overlay copy, marquees, portfolio, founder.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — wide cover image (extends toward edges on small screens) + headline */}
      <section className="relative overflow-hidden bg-[#F5F5F5] pb-14 pt-32 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 md:min-h-[min(86vh,900px)] md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] md:gap-12 md:px-8 lg:gap-16">
          <div className="-mx-4 min-h-[min(50vh,520px)] sm:-mx-6 md:mx-0 md:min-h-0">
            <img
              src="/brand/hero-banner.jpg"
              alt="Welcome sign on easel, magazines, envelopes, and white blossom branches — Occasions Magnified"
              className="h-full min-h-[min(50vh,520px)] w-full object-cover shadow-[0_24px_60px_-30px_rgba(74,4,4,0.28)] md:min-h-[min(82vh,880px)] md:rounded-sm"
              width={960}
              height={720}
              loading="eager"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-10 text-center md:px-0 md:py-12 md:text-left">
            <h1 className="font-serif text-[2.05rem] font-semibold leading-[1.12] text-[#4A0404] sm:text-4xl md:text-[2.75rem] lg:text-[2.95rem]">
              Crafting Memories through Elegant Designs
            </h1>
            <Link
              to="/work"
              className="mt-10 inline-flex items-center justify-center rounded-sm bg-[#4A0404] px-8 py-3 font-nav text-xs font-semibold tracking-[0.18em] text-[#F5F5F0] uppercase shadow-md transition hover:bg-[#3a0303] md:max-w-xs"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* O’MAG — video only: no white frame, no handwritten overlay text */}
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
            className="group mx-auto block w-full max-w-md md:max-w-lg"
            aria-label="View O'Mag details"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl ring-1 ring-black/20 transition duration-300 group-hover:ring-2 group-hover:ring-white/40">
              <video
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:aspect-[4/5]"
                src={brandShowcaseLoop.src}
                poster={brandShowcaseLoop.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="O'Mag layout preview video"
              />
            </div>
          </Link>
        </div>
      </section>

      <MarqueeRibbon withStudioVideo />

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

      {/* Meet the founder — name only in copy, not overlaid on portrait */}
      <section className="relative overflow-hidden bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="mx-auto flex w-full max-w-md justify-center md:mx-0 md:justify-start">
            <img
              src="/brand/founder-shristi.png"
              alt="Illustration of founder Shristi Jhalani"
              className="w-full max-w-[380px] object-contain drop-shadow-xl"
              width={420}
              height={520}
              loading="lazy"
            />
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
    </>
  )
}
