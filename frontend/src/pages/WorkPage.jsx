import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  brandShowcaseLoop,
  invitationVideoItems,
  magazineGalleryItems,
  processShowcaseItems,
  serviceGalleryItems,
} from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'
import { ImageLightbox } from '../components/work/ImageLightbox.jsx'
import { MotionInviteVideoCard } from '../components/work/MotionInviteVideoCard.jsx'

/** O’Mag loop — static poster when user prefers reduced motion. */
function OmagBrandLoopMedia() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  if (reduceMotion) {
    return (
      <img
        src={brandShowcaseLoop.poster}
        alt="O'Mag magazine mockup still"
        className="mx-auto block h-auto w-full max-w-full object-contain"
      />
    )
  }

  return (
    <video
      className="mx-auto block h-auto w-full max-w-full object-contain"
      src={brandShowcaseLoop.src}
      poster={brandShowcaseLoop.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="O'Mag layout showcase video"
    />
  )
}

/** Labels + real magazine / product stills — no white polaroid frame. */
const POLAROIDS = [
  { src: '/work/magazine/open-magazne-o-mag-aashi.jpg', label: 'MAGAZINES', tilt: 'rotate-[2.5deg]' },
  { src: '/work/magazine/cover.jpg', label: "O'MAG", tilt: '-rotate-[3deg]' },
  { src: '/work/magazine/back-cover.jpg', label: 'PRINT', tilt: '-rotate-[2deg]' },
  { src: '/services/e-invites.png', label: 'INVITATIONS', tilt: 'rotate-[3deg]' },
  { src: '/services/6.png', label: 'STATIONERY', tilt: 'rotate-[2deg]' },
  { src: '/services/8.png', label: 'ILLUSTRATION', tilt: '-rotate-[2.5deg]' },
]

/** Portfolio — polaroids, motion films, O’Mag loop, masonry archive, process, services. */
export function WorkPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const lightboxItems = useMemo(
    () => magazineGalleryItems.map((item) => ({ src: item.src, alt: item.title })),
    [],
  )

  return (
    <div className="bg-burgundy text-cream">
      {/* Hero — texture + gold accent; quick anchor for deep links */}
      <div
        id="work-hero"
        className="relative border-b border-om-gold/25 bg-[linear-gradient(rgba(69,2,1,0.58),rgba(69,2,1,0.58)),url(/brand/dark-texture.jpg)] bg-cover bg-center py-16 md:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-om-gold/35 to-transparent" aria-hidden />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="font-nav text-[11px] font-semibold tracking-[0.35em] text-om-gold/90 uppercase">
            Portfolio
          </p>
          <h1 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight text-white sm:text-4xl md:text-[2.85rem]">
            Explore our work
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-base leading-relaxed text-cream/88 md:text-lg md:leading-relaxed">
            Magazines, motion invitations, and stationery — each piece composed with editorial care and
            print-ready precision.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 lg:px-8">
          {POLAROIDS.map((p) => (
            <div
              key={p.label}
              className={`group flex flex-col items-center transition duration-500 will-change-transform hover:-translate-y-1 ${p.tilt}`}
            >
              <span className="font-hand text-3xl text-cream/95 drop-shadow-md transition group-hover:text-white md:text-4xl">
                {p.label}
              </span>
              <div className="mt-3 w-[min(88vw,300px)] overflow-hidden rounded-2xl shadow-[0_20px_56px_-14px_rgba(0,0,0,0.5)] ring-1 ring-white/20 transition duration-500 group-hover:ring-om-gold/40">
                <img
                  src={p.src}
                  alt={p.label}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex flex-wrap justify-center gap-4 px-4 pt-2 md:mt-20">
          <ChevronPillLink href={SITE_LINKS.etsy} external>
            Shop custom designs
          </ChevronPillLink>
          <Link
            to="/omag"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-nav text-[11px] font-semibold tracking-[0.2em] text-white uppercase shadow-sm backdrop-blur-sm transition hover:border-om-gold/50 hover:bg-white/18"
          >
            O&apos;Mag details <span aria-hidden>›</span>
          </Link>
        </div>
      </div>

      {/* Motion invitations — full-width showcase */}
      <section
        id="films"
        className="scroll-mt-24 border-b border-white/10 bg-gradient-to-b from-[#1a0404] via-[#2a0a0a] to-[#140303] py-20 md:scroll-mt-28 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-nav text-[11px] font-semibold tracking-[0.32em] text-om-gold/85 uppercase">
              Motion
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white md:text-[2.55rem]">Magazines, motion &amp; welcome boards</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-cream/82 md:text-xl md:leading-relaxed">
              Customised magazine, save the date invite, and welcome board design — motion, type, and finishing tuned
              for your celebration.
            </p>
          </div>
          <div className="mt-14 grid justify-items-center gap-10 sm:gap-12 lg:grid-cols-3 lg:justify-items-stretch lg:gap-8">
            {invitationVideoItems.map((item) => (
              <MotionInviteVideoCard
                key={item.src}
                className="w-full max-w-[min(100%,300px)] lg:max-w-none"
                src={item.src}
                title={item.title}
                poster={item.poster}
                tagline={item.tagline}
                tone="dark"
              />
            ))}
          </div>
          <p className="mt-12 text-center font-nav text-[10px] font-medium tracking-wide text-cream/45">
            Tip: use full-screen on the video player for the best detail.
          </p>
        </div>
      </section>

      {/* O’Mag brand loop */}
      <section className="border-b border-burgundy/10 bg-om-page py-16 text-burgundy md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="font-nav text-[11px] font-semibold tracking-[0.3em] text-burgundy/55 uppercase">
              O&apos;Mag in motion
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-[2.4rem]">
              Keepsake magazines, brought to life
            </h2>
            <p className="mt-5 font-serif text-lg leading-relaxed text-burgundy/80 md:text-xl">
              A looping look at layout, texture, and print presence — the same craft we carry into every
              custom issue.
            </p>
            <Link
              to="/omag"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-burgundy px-9 py-3.5 font-nav text-xs font-bold tracking-[0.2em] text-cream uppercase shadow-md transition hover:bg-burgundy-deep hover:shadow-lg"
            >
              Explore O&apos;Mag
            </Link>
          </div>
          <div className="flex min-h-[16rem] items-center justify-center overflow-hidden rounded-2xl border border-burgundy/15 bg-black shadow-[0_28px_80px_-32px_rgba(45,2,2,0.35)] ring-1 ring-black/10 md:min-h-[18rem] lg:min-h-[20rem]">
            <OmagBrandLoopMedia />
          </div>
        </div>
      </section>

      {/* Archive + masonry + lightbox */}
      <div id="archive" className="scroll-mt-24 bg-om-page py-16 text-burgundy md:scroll-mt-28 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-center font-nav text-[11px] font-semibold tracking-[0.32em] text-burgundy/50 uppercase">
            Archive
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-semibold md:text-4xl">Print &amp; layout archive</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-serif text-lg leading-relaxed text-burgundy/80 md:text-xl">
            Magazine spreads, covers, and mockups — click any frame to enlarge. Ready to start something
            similar?{' '}
            <a
              href={SITE_LINKS.etsy}
              className="font-semibold text-burgundy underline decoration-om-gold/50 underline-offset-[6px] transition hover:decoration-burgundy"
            >
              Commission on Etsy
            </a>
            .
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-burgundy/10 shadow-xl ring-1 ring-burgundy/[0.04]">
            <img
              src="/layout/explore-work.jpg"
              alt="Collage of Occasions Magnified design work"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="columns-1 gap-5 pt-16 sm:columns-2 lg:columns-3">
            {magazineGalleryItems.map((item, idx) => (
              <button
                key={item.src}
                type="button"
                className="group mb-5 w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-xl border border-burgundy/10 bg-white text-left shadow-md ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                aria-label={`View large — ${item.title}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <span className="relative block">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 font-nav text-[10px] font-bold tracking-wide text-burgundy uppercase opacity-0 shadow-md transition group-hover:opacity-100">
                      View large
                    </span>
                  </span>
                </span>
                <span className="flex items-center justify-between gap-2 border-t border-burgundy/10 px-3 py-2">
                  <span className="font-nav text-[10px] font-semibold tracking-wide text-burgundy/80 uppercase">
                    {item.title}
                  </span>
                  <span
                    className="shrink-0 font-nav text-[10px] font-semibold text-burgundy/50 uppercase"
                    aria-hidden
                  >
                    ↗
                  </span>
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Process + services */}
      <section className="border-t border-burgundy/10 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-center font-nav text-[11px] font-semibold tracking-[0.3em] text-burgundy/50 uppercase">
            Studio
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-semibold text-burgundy md:text-4xl">
            Behind the craft
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-serif text-lg leading-relaxed text-burgundy/80">
            Planning, layout, and finishing — every project moves through a clear studio workflow.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
            {processShowcaseItems.map((block) => (
              <figure
                key={block.src}
                className="overflow-hidden rounded-2xl border border-burgundy/10 bg-om-page shadow-md ring-1 ring-burgundy/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={block.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <figcaption className="border-t border-burgundy/10 px-5 py-5 md:px-6 md:py-5">
                  <p className="font-serif text-xl font-semibold text-burgundy md:text-2xl">{block.title}</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-burgundy/75 md:text-base">
                    {block.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <h3 className="mt-20 text-center font-serif text-2xl font-semibold text-burgundy md:mt-24 md:text-3xl">
            What we design
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-base text-burgundy/75 md:text-lg">
            A cross-section of deliverables — from digital motion to printed day-of pieces.
          </p>
          <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGalleryItems.map((s) => (
              <li
                key={s.src}
                className="flex flex-col overflow-hidden rounded-xl border border-burgundy/10 bg-[#faf7f2] shadow-sm ring-1 ring-black/[0.02] transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <img src={s.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-5">
                  <p className="font-nav text-[11px] font-semibold tracking-[0.2em] text-burgundy/60 uppercase">
                    {s.label}
                  </p>
                  <p className="mt-2 flex-1 font-serif text-sm leading-relaxed text-burgundy/80 md:text-[0.95rem]">
                    {s.description}
                  </p>
                  <a
                    href={SITE_LINKS.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex font-nav text-[10px] font-bold tracking-wide text-burgundy underline decoration-om-gold/45 underline-offset-4 transition hover:decoration-burgundy"
                  >
                    Discuss on Etsy →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-burgundy/15 bg-[#2c0808]" aria-label="Design reference strip">
        <img
          src="/brand/reference-home-strip.jpg"
          alt="Occasions Magnified colour and layout reference strip"
          className="mx-auto max-h-[min(44vh,320px)] w-full object-cover object-center opacity-[0.97]"
          loading="lazy"
        />
      </section>

      <div className="border-t border-om-gold/20 bg-gradient-to-b from-burgundy to-burgundy-deep py-14 text-center md:py-16">
        <p className="mx-auto max-w-lg px-4 font-serif text-sm text-cream/80 md:text-base">
          Tell us your date, palette, and story — we&apos;ll guide the rest.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 px-4">
          <ChevronPillLink href={SITE_LINKS.etsy} external>
            Start your commission
          </ChevronPillLink>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-cream/40 bg-transparent px-7 py-3 font-nav text-[11px] font-semibold tracking-[0.18em] text-cream uppercase transition hover:border-cream hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </div>

      <ImageLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}
