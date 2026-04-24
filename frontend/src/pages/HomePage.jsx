import { Link } from 'react-router-dom'
import { DreamDesignCtaSection } from '../components/home/DreamDesignCtaSection.jsx'
import { MarqueeRibbon } from '../components/home/MarqueeRibbon.jsx'
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection.jsx'
import { brandShowcaseLoop } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'

const FOUNDER_BIO = `I'm Shristi Jhalani — designer and founder of Occasions Magnified. I love turning life's biggest chapters into tangible art: invitations that feel like the first page of your story, and O'Mag magazines you can hold again and again.`

/** Client banner asset — `public/brand/hero-banner.jpg` (copied from `_extracted/Assets/Banner.jpg`). */
const HERO_BANNER_SRC = '/brand/hero-banner.jpg'

/**
 * Home — hero matches client mock: banner + right-aligned headline + ghost CTA.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — reference layout: full banner, copy + ghost CTA right-aligned */}
      {/* Pull up by ~header height so the banner still meets the viewport top under sticky nav */}
      <section className="relative w-full -mt-[5.75rem] sm:-mt-[6.5rem] md:-mt-[7.25rem] lg:-mt-[8rem] xl:-mt-[8.75rem] 2xl:-mt-[9.5rem]">
        <div className="relative isolate min-h-[min(58vh,620px)] w-full overflow-hidden shadow-[0_20px_50px_-28px_rgba(74,4,4,0.22)] md:min-h-[min(78vh,920px)]">
          <img
            src={HERO_BANNER_SRC}
            alt="Occasions Magnified — hero banner"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
            width={1890}
            height={1200}
            sizes="100vw"
            loading="eager"
          />
          {/* Feather top edge so the photo meets the frosted nav without a hard seam */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-20 bg-gradient-to-b from-[#FAF7F2]/30 to-transparent md:h-28"
            aria-hidden
          />
          {/* Soft cream wash from the right so burgundy type reads on the still life */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-full max-w-[min(100%,420px)] bg-gradient-to-l from-[#F5F5F0]/92 via-[#F5F5F0]/55 to-transparent sm:max-w-[min(100%,480px)] md:max-w-[min(100%,540px)] lg:max-w-[580px]"
            aria-hidden
          />
          {/* Copy anchored lower-right (editorial) — centered on very small viewports */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl min-h-[min(58vh,620px)] flex-col justify-end px-5 pb-14 pt-20 sm:px-7 md:min-h-[min(78vh,920px)] md:px-10 md:pb-20 md:pt-24 lg:px-12 lg:pb-24 xl:px-16 xl:pb-28">
            <div className="mx-auto w-full max-w-[20rem] text-center sm:mx-0 sm:ml-auto sm:max-w-xs sm:text-right md:max-w-md lg:max-w-lg xl:max-w-xl">
              <h1 className="font-serif text-[#4A0404]">
                <span className="block text-[0.9rem] font-medium leading-snug tracking-[0.04em] text-[#4A0404]/88 sm:text-[1.02rem] md:text-lg lg:text-xl">
                  Crafting Memories through
                </span>
                <span className="mt-2.5 block text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.025em] sm:mt-3 sm:text-5xl md:mt-4 md:text-6xl lg:text-7xl xl:text-[4.35rem]">
                  Elegant Designs
                </span>
              </h1>
              <div className="mt-9 flex justify-center sm:mt-10 sm:justify-end md:mt-12">
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-[#4A0404] bg-[#FAF7F2]/25 px-8 py-2.5 font-nav text-[11px] font-semibold tracking-[0.22em] text-[#4A0404] uppercase shadow-sm backdrop-blur-sm transition hover:border-[#4A0404] hover:bg-[#4A0404]/12 md:px-10 md:py-3 md:text-xs"
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

      <DreamDesignCtaSection />

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
