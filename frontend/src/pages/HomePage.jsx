import { Link } from 'react-router-dom'
import { HomeServiceGrid } from '../components/home/HomeServiceGrid.jsx'
import { HomeThemeSection } from '../components/home/HomeThemeSection.jsx'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { brandShowcaseLoop } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
import { SITE_LOGO_NAV_PULL_CLASSES } from '../components/layout/SiteLogo.jsx'

const FOUNDER_BIO = `I'm Shristi Jhalani — designer and founder of Occasions Magnified. I love turning life's biggest chapters into tangible art: invitations that feel like the first page of your story, and O'Mag magazines you can hold again and again.`

/** Hero lifestyle visual — `public/brand/hero-banner.jpg` */
const HERO_BANNER_SRC = '/brand/hero-banner.jpg'

/** Faint motion texture behind the “dream design” band (reduces weight vs full-bleed video on every load). */
const SERVICES_BG_VIDEO_SRC = '/brand/services-bg.mp4'

/**
 * Home — layout matches client mock: two-column hero → dream-design band → four service tiles →
 * O’Mag feature → choose your theme → founder → testimonial. Newsletter + legal live in `SiteFooter`.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — cream field, art left + headline right (desktop) */}
      <section className={`bg-[#f9f7f2] ${SITE_LOGO_NAV_PULL_CLASSES}`}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-4 md:grid-cols-2 md:gap-12 md:px-8 md:pb-20 md:pt-2 lg:gap-16">
          <div className="order-1 min-w-0 md:order-none">
            <div className="overflow-hidden rounded-sm shadow-[0_20px_50px_-24px_rgba(74,4,4,0.35)] ring-1 ring-[#4A0404]/10">
              <img
                src={HERO_BANNER_SRC}
                alt="Wedding poster, stationery, and O'Mag spread on a bright surface"
                className="h-full w-full object-cover object-left"
                width={1890}
                height={1200}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <div className="order-2 text-center md:order-none md:text-left">
            <h1 className="font-serif text-[#4A0404]">
              <span className="block text-base font-medium leading-snug tracking-[0.12em] md:text-lg">Crafting Memories through</span>
              <span className="mt-2 block text-[2.1rem] font-semibold leading-[0.98] tracking-[-0.02em] sm:text-5xl md:mt-3 md:text-6xl lg:text-7xl">
                Elegant Designs
              </span>
            </h1>
            <div className="mt-8 flex justify-center md:mt-10 md:justify-start">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-sm border-2 border-[#4A0404] bg-white px-8 py-2.5 font-nav text-[10px] font-semibold tracking-[0.2em] text-[#4A0404] uppercase shadow-sm transition hover:bg-[#4A0404] hover:text-cream md:px-10 md:py-3 md:text-xs"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* “Your dream design…” — burgundy + marquees + soft stationery motion */}
      <section className="relative flex min-h-[min(48vh,520px)] flex-col overflow-hidden text-white md:min-h-[min(50vh,600px)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            aria-hidden
            autoPlay
            className="absolute inset-0 h-full w-full object-cover opacity-90 [@media(prefers-reduced-motion:reduce)]:hidden"
            loop
            muted
            playsInline
            preload="metadata"
            src={SERVICES_BG_VIDEO_SRC}
            style={{ transform: 'rotate(-4deg) scale(1.12)' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden scale-110 bg-cover bg-center opacity-90 [@media(prefers-reduced-motion:reduce)]:block"
            style={{
              backgroundImage: 'url(/brand/dark-texture.jpg)',
              transform: 'rotate(-4deg) scale(1.12)',
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#4A0404]/80" />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: 'url(/brand/bg-grid.png)' }}
        />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <MarqueeRibbon className="relative z-20 shrink-0" />
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 md:px-8 md:py-16">
            <h2 className="max-w-4xl text-center font-nav text-lg font-bold leading-snug tracking-[0.18em] sm:text-xl md:text-2xl">
              YOUR DREAM DESIGN, JUST A CLICK AWAY
            </h2>
            <p className="mt-4 max-w-2xl text-center font-serif text-base text-white/90 md:text-lg">
              Browse through our past creations and place your custom order easily.
            </p>
          </div>
          <MarqueeRibbon className="relative z-20 shrink-0" />
        </div>
      </section>

      <HomeServiceGrid />

      {/* O’Mag — text left, magazine on white plinth + callouts (mock) */}
      <section className="bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="font-serif text-[2.75rem] leading-none tracking-tight md:text-[3.5rem]">O&apos;MAG</p>
            <p className="mt-1 font-nav text-xs font-medium tracking-[0.28em] text-[#F5F5F5]/90 md:text-sm">Occasions Magazine</p>
            <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-[#F5F5F5]/95 md:text-xl">
              Turn your memories into a <strong className="font-semibold text-white">keepsake</strong> with our custom
              magazines — fully tailored layouts and premium print you can return to for years.
            </p>
            <a
              href={SITE_LINKS.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-cream/90 bg-cream px-10 py-3.5 font-nav text-xs font-bold tracking-[0.22em] text-[#4A0404] uppercase shadow-sm transition hover:bg-white"
            >
              SHOP NOW
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div
              className="relative overflow-visible rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 md:p-8"
              style={{ minHeight: 'min(28rem, 70vw)' }}
            >
              <Link to="/omag" className="group block" aria-label="View O'Mag product page">
                <div className="relative flex items-center justify-center [perspective:800px]">
                  <div className="rotate-[-5deg] transition-transform duration-500 group-hover:rotate-[-3deg]">
                    <div className="overflow-hidden rounded-md shadow-2xl ring-1 ring-black/10">
                      <video
                        className="w-full max-w-[20rem] object-contain sm:max-w-[22rem]"
                        src={brandShowcaseLoop.src}
                        poster={brandShowcaseLoop.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label="O'Mag layout preview on screen"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              {/* Callout labels — design-language hints (mock annotations) */}
              <p className="pointer-events-none absolute right-1 top-6 max-w-[7rem] rounded-sm border border-dashed border-[#4A0404]/25 bg-cream/95 px-1.5 py-1 text-[9px] font-nav font-semibold leading-tight text-[#4A0404] shadow-sm md:top-10 md:max-w-[8rem] md:text-[10px]">
                Fully customisable
                <span className="absolute -left-2 top-full block h-6 w-6 rotate-12 border-b border-dashed border-[#4A0404]/30" aria-hidden />
              </p>
              <p className="pointer-events-none absolute bottom-8 left-0 max-w-[7rem] rounded-sm border border-dashed border-[#4A0404]/25 bg-cream/95 px-1.5 py-1 text-[9px] font-nav font-semibold leading-tight text-[#4A0404] shadow-sm md:bottom-12 md:max-w-[8rem] md:text-[10px]">
                High-quality print
                <span className="absolute -right-1 bottom-full block h-6 w-6 -rotate-6 border-b border-dashed border-[#4A0404]/30" aria-hidden />
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeThemeSection />

      {/* Meet our founder — portrait + copy */}
      <section className="relative overflow-hidden bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center md:mx-0 md:items-start">
            <img
              src="/brand/founder-shristi.png"
              alt="Shristi Jhalani, founder of Occasions Magnified"
              className="w-full max-w-[380px] object-contain drop-shadow-xl"
              width={420}
              height={520}
              loading="lazy"
            />
            <p className="mt-3 font-[family-name:var(--font-signature)] text-2xl text-cream/95 md:text-3xl">Shristi Jhalani</p>
          </div>
          <div>
            <h2 className="font-nav text-xs font-semibold tracking-[0.32em] text-[#F5F5F5]/90 uppercase">MEET OUR FOUNDER</h2>
            <p className="mt-6 font-serif text-[1.1rem] leading-relaxed text-[#F5F5F5]/95 md:text-xl">{FOUNDER_BIO}</p>
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

      {/* What our clients say — cream card overlapping burgundy (mock) */}
      <section className="relative bg-[#4A0404] pb-0 pt-14 md:pt-16">
        <h2 className="relative z-10 px-4 text-center font-serif text-3xl text-white md:text-[2.35rem]">What Our Clients Say…</h2>
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
