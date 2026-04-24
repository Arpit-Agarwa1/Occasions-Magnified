import { Link } from 'react-router-dom'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection.jsx'
import { brandShowcaseLoop } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
import { SITE_LOGO_NAV_PULL_CLASSES } from '../components/layout/SiteLogo.jsx'

const FOUNDER_BIO = `I'm Shristi Jhalani — designer and founder of Occasions Magnified. I love turning life's biggest chapters into tangible art: invitations that feel like the first page of your story, and O'Mag magazines you can hold again and again.`

/** Client banner asset — `public/brand/hero-banner.jpg` (copied from `_extracted/Assets/Banner.jpg`). */
const HERO_BANNER_SRC = '/brand/hero-banner.jpg'

/** Services reel behind “Your dream design…” — `public/brand/services-bg.mp4` (from `_extracted/Assets/Services.mp4`). */
const SERVICES_BG_VIDEO_SRC = '/brand/services-bg.mp4'

/**
 * Home — hero matches client mock: banner + right-aligned headline + ghost CTA.
 */
export function HomePage() {
  return (
    <>
      {/* Hero under sticky nav — overlap uses SITE_LOGO_NAV_PULL_CLASSES (sync with SiteLogo) */}
      <section className={`relative w-full ${SITE_LOGO_NAV_PULL_CLASSES}`}>
        {/* Full-bleed banner + copy overlay — mobile: bottom-right + narrow wash so art stays visible; md+: top-right */}
        <div className="relative isolate min-h-[min(64svh,480px)] w-full overflow-hidden bg-[#2a0808] shadow-[0_20px_50px_-28px_rgba(74,4,4,0.22)] min-[480px]:min-h-[min(70svh,560px)] md:min-h-[min(92vh,1000px)] lg:min-h-[min(94vh,1080px)]">
          <img
            src={HERO_BANNER_SRC}
            alt="Occasions Magnified — hero banner"
            className="absolute inset-0 h-full w-full object-cover object-[36%_center] sm:object-left"
            width={1890}
            height={1200}
            sizes="100vw"
            loading="eager"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-[#faf8f4]/35 to-transparent min-[480px]:h-20 md:h-24"
            aria-hidden
          />
          {/* Readability wash — narrow on phones so banner stays visible; wider from sm up */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(100%,17.5rem)] bg-gradient-to-l from-[#FAF7F2]/90 via-[#FAF7F2]/55 to-transparent min-[400px]:w-[min(100%,20rem)] sm:w-full sm:max-w-[min(100%,420px)] md:max-w-[min(100%,480px)] lg:max-w-[520px] xl:max-w-[560px]"
            aria-hidden
          />
          {/* Bottom sheet wash on very small screens (under copy) */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-[#FAF7F2]/88 via-[#FAF7F2]/35 to-transparent max-sm:block sm:hidden"
            aria-hidden
          />
          {/* Overlay copy: bottom-right + safe-area on mobile; top-right from sm */}
          <div className="pointer-events-none absolute inset-0 z-10 flex justify-end px-[max(1rem,env(safe-area-inset-left))] pb-[max(1rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))] pt-12 max-sm:items-end max-sm:pt-8 sm:items-start sm:px-[max(1.25rem,env(safe-area-inset-left))] sm:pb-0 sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-20 md:px-10 md:pt-24 lg:px-12 lg:pt-24 xl:px-16 xl:pt-28">
            <div className="pointer-events-auto w-full max-w-[min(100%,17.5rem)] text-right min-[400px]:max-w-[19rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              <h1 className="font-serif text-[#4A0404] drop-shadow-[0_1px_12px_rgba(250,247,242,0.65)]">
                <span className="block text-[0.85rem] font-medium leading-snug tracking-[0.03em] text-[#4A0404]/92 min-[400px]:text-[0.9rem] sm:text-[1.02rem] md:text-lg lg:text-xl">
                  Crafting Memories through
                </span>
                <span className="mt-1.5 block text-[1.85rem] font-semibold leading-[0.98] tracking-[-0.025em] min-[400px]:mt-2 min-[400px]:text-[2.1rem] sm:mt-2.5 sm:text-5xl md:mt-3 md:text-6xl lg:text-7xl xl:text-[4rem]">
                  Elegant Designs
                </span>
              </h1>
              <div className="mt-6 flex justify-end max-sm:mt-5 sm:mt-9 md:mt-10">
                <Link
                  to="/work"
                  className="inline-flex w-full max-w-none items-center justify-center rounded-sm border-2 border-[#4A0404] bg-[#FAF7F2]/45 px-6 py-2.5 font-nav text-[10px] font-semibold tracking-[0.2em] text-[#4A0404] uppercase shadow-sm backdrop-blur-sm transition hover:border-[#4A0404] hover:bg-[#4A0404]/12 min-[400px]:text-[11px] sm:w-auto sm:px-8 sm:tracking-[0.22em] md:px-10 md:py-3 md:text-xs"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
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
            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-black/20 transition duration-300 group-hover:ring-2 group-hover:ring-white/40 md:min-h-[300px]">
              {/* object-contain = full frame visible (letterboxing if aspect differs from container) */}
              <video
                className="mx-auto block h-auto w-full max-w-full object-contain transition duration-500 group-hover:scale-[1.01]"
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

      <MarqueeRibbon />

      <PortfolioPreviewSection />

      {/* Etsy marquees top + bottom; services video + scrims behind full block */}
      <section className="relative flex min-h-[min(52vh,580px)] flex-col overflow-hidden text-white md:min-h-[min(58vh,700px)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            aria-hidden
            autoPlay
            className="absolute inset-0 h-full w-full object-cover opacity-95 [@media(prefers-reduced-motion:reduce)]:hidden"
            loop
            muted
            playsInline
            preload="metadata"
            src={SERVICES_BG_VIDEO_SRC}
            style={{ transform: 'rotate(-4deg) scale(1.15)' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden scale-110 bg-cover bg-center opacity-95 [@media(prefers-reduced-motion:reduce)]:block"
            style={{
              backgroundImage: 'url(/brand/dark-texture.jpg)',
              transform: 'rotate(-4deg) scale(1.15)',
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#4A0404]/78" />
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-20 mix-blend-soft-light">
          <div
            className="h-full w-full bg-cover bg-center opacity-90"
            style={{
              backgroundImage: 'url(/brand/bg-grid.png)',
              transform: 'rotate(6deg) scale(1.2)',
            }}
          />
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <MarqueeRibbon className="relative z-20 shrink-0 shadow-[0_1px_0_rgba(0,0,0,0.2)]" />
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-nav text-xl font-bold leading-snug tracking-[0.14em] uppercase sm:text-2xl md:text-[1.65rem]">
                YOUR DREAM DESIGN, JUST A CLICK AWAY
              </h2>
              <p className="mt-5 font-serif text-lg text-white/92 md:text-xl">
                Browse through our past creations and place your custom order easily.
              </p>
            </div>
          </div>
          <MarqueeRibbon className="relative z-20 shrink-0 shadow-[0_-1px_0_rgba(0,0,0,0.2)]" />
        </div>
      </section>

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
