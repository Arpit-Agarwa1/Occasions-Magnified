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
      <div
        className="relative border-b border-white/10 py-14 md:py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(69,2,1,0.55), rgba(69,2,1,0.55)), url(/brand/dark-texture.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="font-nav text-[11px] font-semibold tracking-[0.35em] text-cream/60 uppercase">
            Portfolio
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white md:text-[2.75rem]">
            Explore our work
          </h1>
          <p className="mt-4 font-serif text-base italic leading-relaxed text-cream/85 md:text-lg">
            Magazines, motion invitations, and stationery — each piece composed with editorial care and
            print-ready precision.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3 lg:gap-10 lg:px-8">
          {POLAROIDS.map((p) => (
            <div key={p.label} className={`flex flex-col items-center ${p.tilt}`}>
              <span className="font-hand text-3xl text-white drop-shadow md:text-4xl">{p.label}</span>
              <div className="mt-3 w-[min(88vw,300px)] overflow-hidden rounded-xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/15">
                <img src={p.src} alt={p.label} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex flex-wrap justify-center gap-4 px-4">
          <ChevronPillLink href={SITE_LINKS.etsy} external>
            Shop custom designs
          </ChevronPillLink>
          <Link
            to="/omag"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 font-nav text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm transition hover:bg-white/20"
          >
            O&apos;Mag details <span aria-hidden>›</span>
          </Link>
        </div>
      </div>

      {/* Motion invitations — full-width showcase */}
      <section
        id="films"
        className="scroll-mt-[5.5rem] border-b border-white/10 bg-gradient-to-b from-[#1f0505] via-[#2a0a0a] to-[#1a0404] py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-nav text-[11px] font-semibold tracking-[0.32em] text-white/45 uppercase">
              Motion
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white md:text-[2.5rem]">Custom motion invitations</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-cream/80">
              Save-the-date and invitation films — typography, pacing, and colour graded for every screen.
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {invitationVideoItems.map((item) => (
              <MotionInviteVideoCard
                key={item.src}
                src={item.src}
                title={item.title}
                poster={item.poster}
                tagline={item.tagline}
                tone="dark"
              />
            ))}
          </div>
          <p className="mt-10 text-center font-nav text-[10px] font-medium tracking-wide text-cream/50">
            Tip: use full-screen on the video player for the best detail.
          </p>
        </div>
      </section>

      {/* O’Mag brand loop */}
      <section className="border-b border-white/10 bg-[#F5F5F0] py-16 text-burgundy md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="font-nav text-[11px] font-semibold tracking-[0.3em] text-burgundy/50 uppercase">
              O&apos;Mag in motion
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-[2.35rem]">
              Keepsake magazines, brought to life
            </h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-burgundy/80">
              A looping look at layout, texture, and print presence — the same craft we carry into every
              custom issue.
            </p>
            <Link
              to="/omag"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-burgundy px-8 py-3 font-nav text-xs font-bold tracking-[0.2em] text-cream uppercase shadow-md transition hover:bg-burgundy-deep"
            >
              Explore O&apos;Mag
            </Link>
          </div>
          <div className="flex min-h-[14rem] items-center justify-center overflow-hidden rounded-lg border border-burgundy/10 bg-black shadow-2xl ring-1 ring-black/5 md:min-h-[16rem]">
            <OmagBrandLoopMedia />
          </div>
        </div>
      </section>

      {/* Archive + masonry + lightbox */}
      <div id="archive" className="scroll-mt-[5.5rem] bg-om-page py-16 text-burgundy md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center font-serif text-3xl md:text-4xl">Print &amp; layout archive</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-lg text-burgundy/80">
            Magazine spreads, covers, and mockups — click any frame to enlarge. Ready to start something
            similar?{' '}
            <a href={SITE_LINKS.etsy} className="font-semibold underline decoration-burgundy/30 underline-offset-4 hover:decoration-burgundy">
              Commission on Etsy
            </a>
            .
          </p>

          <div className="mt-12 overflow-hidden rounded-lg border border-burgundy/10 shadow-xl">
            <img
              src="/layout/explore-work.jpg"
              alt="Collage of Occasions Magnified design work"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="columns-1 gap-5 pt-14 sm:columns-2 lg:columns-3">
            {magazineGalleryItems.map((item, idx) => (
              <button
                key={item.src}
                type="button"
                className="group mb-5 w-full break-inside-avoid overflow-hidden rounded-md border border-burgundy/10 bg-white text-left shadow-md ring-1 ring-black/[0.03] transition hover:shadow-lg"
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
          <h2 className="text-center font-serif text-3xl text-burgundy md:text-4xl">Behind the craft</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-burgundy/80">
            Planning, layout, and finishing — every project moves through a clear studio workflow.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {processShowcaseItems.map((block) => (
              <figure
                key={block.src}
                className="overflow-hidden rounded-lg border border-burgundy/10 bg-om-page shadow-md"
              >
                <img src={block.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <figcaption className="border-t border-burgundy/10 px-5 py-4">
                  <p className="font-serif text-xl font-semibold text-burgundy">{block.title}</p>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-burgundy/75">{block.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <h3 className="mt-20 text-center font-serif text-2xl text-burgundy md:text-3xl">What we design</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center font-serif text-burgundy/75">
            A cross-section of deliverables — from digital motion to printed day-of pieces.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGalleryItems.map((s) => (
              <li
                key={s.src}
                className="flex flex-col overflow-hidden rounded-lg border border-burgundy/10 bg-[#faf7f2] shadow-sm"
              >
                <img src={s.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className="font-nav text-[11px] font-semibold tracking-[0.2em] text-burgundy/60 uppercase">
                    {s.label}
                  </p>
                  <p className="mt-2 flex-1 font-serif text-sm leading-relaxed text-burgundy/80">{s.description}</p>
                  <a
                    href={SITE_LINKS.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex font-nav text-[10px] font-bold tracking-wide text-burgundy underline decoration-burgundy/30 underline-offset-4 hover:decoration-burgundy"
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
          className="mx-auto max-h-[min(40vh,280px)] w-full object-cover object-center opacity-95"
          loading="lazy"
        />
      </section>

      <div className="bg-burgundy py-12 text-center">
        <ChevronPillLink href={SITE_LINKS.etsy} external>
          Start your commission
        </ChevronPillLink>
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
