import { Link } from 'react-router-dom'
import { HomeServicesStrip } from '../components/home/HomeServicesStrip.jsx'
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection.jsx'
import { SITE_LINKS } from '../constants/site.js'

const FOUNDER_HEADING = 'Meet the Designer'
const FOUNDER_BODY = [
  'Hi, I\u2019m Shristi \u2014 the creative mind behind Occasions Magnified.',
  'I believe that every special moment deserves more than just a design \u2014 it deserves a story. Through my work, I aim to turn emotions, memories, and milestones into something you can see, feel, and hold onto forever.',
  'From wedding invitations that feel like the first page of your journey, to O\u2019Mag magazines that preserve your most cherished memories \u2014 every creation is designed with intention, detail, and heart.',
].join('\n\n')

/** Faint motion texture behind the “dream design” band (reduces weight vs full-bleed video on every load). */
const SERVICES_BG_VIDEO_SRC = '/brand/services-bg.mp4'

/**
 * Home — dream band → category strip → O’Mag → highlights → founder → testimonials.
 * Contact CTA lives in `SiteFooter`.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — dream design + CTA; background video fills the band (cover), subject stays centered. */}
      <section className="relative flex min-h-[min(52vh,560px)] flex-col overflow-hidden text-white supports-[height:100dvh]:min-h-[min(52dvh,560px)] md:min-h-[min(54vh,620px)] md:supports-[height:100dvh]:min-h-[min(54dvh,620px)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#1a0505]">
          <video
            aria-hidden
            autoPlay
            className="absolute inset-0 max-h-none max-w-none h-full w-full min-h-full min-w-full object-cover object-center opacity-95 [@media(prefers-reduced-motion:reduce)]:hidden"
            loop
            muted
            playsInline
            preload="none"
            src={SERVICES_BG_VIDEO_SRC}
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden bg-cover bg-center opacity-95 [@media(prefers-reduced-motion:reduce)]:block"
            style={{
              backgroundImage: 'url(/brand/dark-texture.jpg)',
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
            <h2 className="max-w-2xl text-center font-nav text-base font-semibold uppercase leading-snug tracking-[0.14em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)] sm:text-lg sm:tracking-[0.16em] md:text-xl md:tracking-[0.18em]">
              <span className="block">Your Dream Design,</span>
              <span className="mt-1 block sm:mt-1.5">Just a Click Away</span>
            </h2>
            <p className="mt-6 max-w-xl text-center font-serif text-base leading-relaxed text-cream/85 text-balance sm:mt-8 sm:text-lg md:max-w-2xl md:text-xl md:leading-relaxed">
              Explore our past designs and find something that feels just right for your special moment.
            </p>
            <div className="mt-9 flex justify-center sm:mt-10">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-sm border-2 border-om-gold/55 bg-cream px-8 py-2.5 font-nav text-sm font-semibold tracking-wide text-burgundy shadow-[0_6px_24px_-6px_rgba(0,0,0,0.35)] transition hover:border-om-gold hover:bg-white hover:shadow-[0_10px_36px_-8px_rgba(201,162,77,0.28)] md:px-10 md:py-3 md:text-base"
              >
                Explore Our Designs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeServicesStrip />

      {/* O’Mag — editorial split: texture, readable measure, image with depth (no light “card” frame). */}
      <section className="relative overflow-hidden bg-[#4A0404] py-14 text-[#F5F5F5] md:py-18 lg:py-22">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'url(/brand/bg-grid.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] md:gap-x-9 md:gap-y-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-x-10">
            <div className="max-w-md md:max-w-none lg:max-w-xl">
              <h2 className="m-0 max-w-[min(100%,17rem)] sm:max-w-[min(100%,19rem)] md:max-w-[min(100%,21rem)] lg:max-w-[min(100%,23rem)]">
                <img
                  src="/brand/logo-occasions-magnified.svg"
                  alt="O&apos;Mag — Occasions Magnified"
                  className="block h-auto w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                  width={1080}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                />
              </h2>
              <p className="mt-2 font-nav text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/75 md:text-[11px] md:tracking-[0.34em]">
                Customised Magazine
              </p>
              <div className="mt-4 h-px w-10 bg-cream/35" aria-hidden />
              <p className="mt-4 font-serif text-[0.95rem] leading-[1.6] text-cream/95 md:text-base md:leading-[1.65]">
                Turn your memories into a keepsake with our custom-designed magazines — thoughtfully curated layouts,
                meaningful storytelling, and premium print quality that you can revisit for years.
              </p>
              <Link
                to="/omag"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-cream px-7 py-2.5 font-nav text-[13px] font-semibold tracking-wide text-[#4A0404] shadow-md transition hover:bg-white hover:shadow-lg md:mt-7 md:px-8 md:py-3 md:text-sm"
              >
                Create Your O&apos;Mag
              </Link>
            </div>

            <div className="flex justify-center md:justify-end">
              <Link
                to="/omag"
                className="block w-full max-w-[22rem] outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-cream/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A0404] sm:max-w-[24rem] md:max-w-none md:w-full"
              >
                {/** Natural image size — no aspect box or fill colour, so only the photo shows (rounded corners on the asset). */}
                <img
                  src="/work/magazine/omag-home-spread.png"
                  alt="O'Mag open spread — custom wedding magazine in hand"
                  className="block h-auto w-full rounded-2xl"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PortfolioPreviewSection />

      {/* Meet the designer */}
      <section className="relative overflow-x-hidden bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: 'url(/brand/dark-texture.jpg)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-2 md:items-start md:gap-16 md:px-8">
          <div className="mx-auto w-full max-w-[380px] md:mx-0 md:max-w-[420px]">
            <img
              src="/brand/founder-shristi.png"
              alt="Shristi — designer behind Occasions Magnified"
              className="block w-full -translate-y-5 object-contain drop-shadow-xl motion-reduce:translate-y-0 sm:-translate-y-7 md:-translate-y-8"
              width={420}
              height={520}
              loading="lazy"
            />
          </div>
          <div className="flex min-h-0 flex-col md:justify-start">
            <h2 className="font-nav text-xs font-semibold tracking-[0.32em] text-[#F5F5F5]/90 uppercase">
              {FOUNDER_HEADING}
            </h2>
            <p className="mt-6 whitespace-pre-line font-serif text-[1.05rem] leading-relaxed text-[#F5F5F5]/95 md:text-lg">
              {FOUNDER_BODY}
            </p>
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-serif text-lg text-[#F5F5F5] underline decoration-[#F5F5F5]/45 underline-offset-[10px] transition hover:decoration-white"
            >
              Connect with Me
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
