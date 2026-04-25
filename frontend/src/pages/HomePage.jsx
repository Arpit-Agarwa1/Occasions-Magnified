import { Link } from 'react-router-dom'
import { HomeServicesStrip } from '../components/home/HomeServicesStrip.jsx'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection.jsx'
import { SITE_LINKS } from '../constants/site.js'
import { SITE_LOGO_NAV_PULL_CLASSES } from '../components/layout/SiteLogo.jsx'

const FOUNDER_BIO = `I'm Shristi Jhalani — designer and founder of Occasions Magnified. I love turning life's biggest chapters into tangible art: invitations that feel like the first page of your story, and O'Mag magazines you can hold again and again.`

/** Hero lifestyle visual — `public/brand/hero-banner.jpg` */
const HERO_BANNER_SRC = '/brand/hero-banner.jpg'

/** Faint motion texture behind the “dream design” band (reduces weight vs full-bleed video on every load). */
const SERVICES_BG_VIDEO_SRC = '/brand/services-bg.mp4'

/**
 * Home — sequence matches client layout: hero → dream-design band → service strip → O’Mag →
 * our work (highlights) → founder → testimonial. Newsletter + footer live in `SiteFooter`.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — full-bleed lifestyle visual with right overlay copy (matches reference). */}
      <section className={`relative w-full ${SITE_LOGO_NAV_PULL_CLASSES}`}>
        <div className="relative isolate h-[100vh] min-h-[100vh] w-full overflow-hidden bg-[#2a0808] shadow-[0_20px_50px_-28px_rgba(74,4,4,0.22)]">
          <img
            src={HERO_BANNER_SRC}
            alt="Wedding poster, stationery, and O'Mag spreads on a bright surface"
            className="absolute inset-0 h-full w-full object-cover object-[38%_center] sm:object-left"
            width={1890}
            height={1200}
            sizes="100vw"
            loading="eager"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(100%,24rem)] bg-gradient-to-l from-[#FAF7F2]/92 via-[#FAF7F2]/55 to-transparent sm:max-w-[420px] md:max-w-[520px]" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-[#faf8f4]/40 to-transparent md:h-20" aria-hidden />

          <div className="absolute inset-0 z-10 flex items-start justify-end px-4 pt-16 sm:px-6 sm:pt-20 md:px-10 md:pt-24 lg:px-12">
            <div className="w-full max-w-[min(100%,22rem)] text-right md:max-w-md">
              <h1 className="font-serif text-[#4A0404] drop-shadow-[0_1px_12px_rgba(250,247,242,0.6)]">
                <span className="block text-[0.95rem] font-medium leading-snug tracking-[0.02em] text-[#4A0404]/92 md:text-lg">
                  Crafting Memories through
                </span>
                <span className="mt-2 block text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.02em] sm:text-5xl md:mt-3 md:text-6xl">
                  Elegant Designs
                </span>
              </h1>
              <div className="mt-6 flex flex-col items-end justify-end gap-3 md:mt-8 sm:flex-row sm:flex-wrap sm:justify-end">
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-[#4A0404] bg-[#FAF7F2]/55 px-8 py-2.5 font-nav text-[10px] font-semibold tracking-[0.2em] text-[#4A0404] uppercase shadow-sm backdrop-blur-sm transition hover:bg-[#4A0404]/12 md:px-10 md:py-3 md:text-xs"
                >
                  Explore Our Work
                </Link>
                <a
                  href={SITE_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-[#4A0404] bg-[#4A0404] px-8 py-2.5 font-nav text-[10px] font-semibold tracking-[0.2em] text-cream uppercase shadow-sm transition hover:bg-[#310B0B] md:px-10 md:py-3 md:text-xs"
                >
                  Request Custom Order
                </a>
              </div>
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
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 md:px-8 md:py-16">
            <h2 className="max-w-4xl text-center font-nav text-lg font-bold leading-snug tracking-[0.18em] sm:text-xl md:text-2xl">
              YOUR DREAM DESIGN, JUST A CLICK AWAY
            </h2>
            <p className="mt-4 max-w-2xl text-center font-serif text-base text-white/90 md:text-lg">
              Browse through our past creations and place your custom order easily.
            </p>
          </div>
        </div>
      </section>

      <HomeServicesStrip />

      {/* O’Mag — burgundy band with white image card (matches reference). */}
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

          <Link to="/omag" className="mx-auto block w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 md:p-8">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-xl bg-[#f6f2ea] shadow-inner ring-1 ring-black/5">
              <img
                src="/work/magazine/mockup3.jpg"
                alt="O'Mag magazine mockup — printed keepsake in hand"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
      </section>

      <PortfolioPreviewSection />

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
