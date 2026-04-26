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
 * Home — dream band → category strip → O’Mag → highlights → founder → contact CTA → testimonials.
 * Newsletter + footer live in `SiteFooter`.
 */
export function HomePage() {
  return (
    <>
      {/* Hero — dream design + CTA to portfolio overview */}
      <section className="relative flex min-h-[min(48vh,520px)] flex-col overflow-hidden text-white md:min-h-[min(50vh,600px)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            aria-hidden
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-center opacity-95 [@media(prefers-reduced-motion:reduce)]:hidden"
            loop
            muted
            playsInline
            preload="metadata"
            src={SERVICES_BG_VIDEO_SRC}
            style={{ transform: 'scale(1.05)' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden bg-cover bg-center opacity-95 [@media(prefers-reduced-motion:reduce)]:block"
            style={{
              backgroundImage: 'url(/brand/dark-texture.jpg)',
              transform: 'scale(1.05)',
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
            <h2 className="max-w-4xl text-center font-serif text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-[2.15rem]">
              Your Dream Design, Just a Click Away
            </h2>
            <p className="mt-5 max-w-2xl text-center font-serif text-base leading-relaxed text-white/90 md:text-lg">
              Explore our past designs and find something that feels just right for your special moment.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-sm border-2 border-cream/80 bg-cream px-8 py-2.5 font-nav text-sm font-semibold tracking-wide text-[#4A0404] shadow-sm transition hover:bg-white md:px-10 md:py-3 md:text-base"
              >
                Explore Our Designs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeServicesStrip />

      {/* O’Mag — headline, customised magazine, CTA */}
      <section className="bg-[#4A0404] py-16 text-[#F5F5F5] md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <h2 className="font-serif text-[2.75rem] leading-none tracking-tight md:text-[3.5rem]">O&apos;Mag</h2>
            <p className="mt-2 font-nav text-xs font-medium tracking-[0.28em] text-[#F5F5F5]/90 md:text-sm">Customised Magazine</p>
            <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-[#F5F5F5]/95 md:text-xl">
              Turn your memories into a keepsake with our custom-designed magazines — thoughtfully curated layouts,
              meaningful storytelling, and premium print quality that you can revisit for years.
            </p>
            <Link
              to="/omag"
              className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-cream/90 bg-cream px-10 py-3.5 font-nav text-sm font-bold tracking-wide text-[#4A0404] shadow-sm transition hover:bg-white md:text-base"
            >
              Create Your O&apos;Mag
            </Link>
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

      {/* Meet the designer */}
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
              alt="Shristi — designer behind Occasions Magnified"
              className="w-full max-w-[380px] object-contain drop-shadow-xl"
              width={420}
              height={520}
              loading="lazy"
            />
          </div>
          <div>
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

      {/* Contact CTA — leads to full contact page */}
      <section className="border-y border-burgundy/10 bg-[#faf7f2] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl font-semibold text-burgundy md:text-[2.15rem]">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-burgundy/80">
            Share your details and we&apos;ll get back to you to start your custom design journey.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-burgundy bg-burgundy px-10 py-3.5 font-nav text-sm font-bold tracking-wide text-cream shadow-sm transition hover:bg-burgundy-deep md:text-base"
          >
            Contact Us
          </Link>
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
