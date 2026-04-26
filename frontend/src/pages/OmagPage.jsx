import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { omagSampleCarouselItems } from '../data/workGallery.js'
import { getWhatsAppContactUrl, SITE_LINKS } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'

/** Hero frame — printed cover (`public/work/magazine/cover.jpg`). */
const HERO_INSTAGRAM_IMG = '/work/magazine/cover.jpg'

const STEPS = [
  {
    n: '01',
    title: 'CHOOSE PAGES',
    body: 'Pick the page count and magazine type that fits your story.',
    icon: 'pages',
  },
  {
    n: '02',
    title: 'SHARE PHOTOS + STORY',
    body: 'Send us your photos, milestones, and notes — via link or email.',
    icon: 'photos',
  },
  {
    n: '03',
    title: 'REVIEW DESIGN DRAFT',
    body: 'We refine layouts until every spread feels unmistakably yours.',
    icon: 'draft',
  },
  {
    n: '04',
    title: 'WE PRINT & DELIVER',
    body: 'Premium print, careful packaging, and doorstep delivery.',
    icon: 'ship',
  },
]

const FAQS = [
  'What happens after I place the order?',
  'How many photos do I need to send?',
  'Can I include text, quotes, or personal stories?',
  'What is the complete process?',
  'How long does the entire process take?',
  'Can I request revisions after seeing the design?',
  'Is it fully customizable? Can I choose the theme or style?',
  'What about payment, shipping, and delivery?',
]

/**
 * @param {{ name: 'pages' | 'photos' | 'draft' | 'ship' }} props
 */
function StepGlyph({ name }) {
  const stroke = 'currentColor'
  const common = 'h-7 w-7'
  if (name === 'pages') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 6h16v12H4V6zm3 3h10M7 12h10M7 15h6"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (name === 'photos') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke={stroke} strokeWidth="1.5" />
        <path d="M8 14l3-3 4 4 3-5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'draft') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7 4h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path d="M14 4v4h4M9 13h6M9 17h4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 10h3l2-4 3 12 2-6h3l2 4H21"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18" r="2" stroke={stroke} strokeWidth="1.5" />
      <circle cx="17" cy="18" r="2" stroke={stroke} strokeWidth="1.5" />
    </svg>
  )
}

/** Right column — IG-style frame around printed cover (mock layout). */
function OmagHeroDeviceFrame({ src, alt }) {
  return (
    <div className="mx-auto w-full max-w-[min(100%,340px)] rounded-[1.75rem] bg-white p-2.5 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/10 md:max-w-md">
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-2 pb-2.5 pt-1">
        <div
          className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#4A0404] to-[#2a0808] ring-2 ring-white shadow"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-nav text-[11px] font-semibold text-black/80">occasionsmagnified</p>
          <p className="font-nav text-[9px] text-black/45">O&apos;Mag · printed</p>
        </div>
        <span className="font-nav text-lg text-black/35" aria-hidden>
          ⋯
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl bg-[#2c1818]">
        <img src={src} alt={alt} className="aspect-[4/5] w-full object-cover" width={800} height={1000} loading="eager" />
      </div>
      <div className="flex items-center justify-between px-1.5 py-2 text-black/45">
        <span className="flex gap-3 font-nav text-base" aria-hidden>
          ♡ 💬
        </span>
        <span className="font-nav text-base" aria-hidden>
          🔖
        </span>
      </div>
    </div>
  )
}

/** O’Mag page — theme #4A0404, paper + watercolor skin, assets from `public/work/magazine` & `public/brand`. */
export function OmagPage() {
  const slides = useMemo(() => omagSampleCarouselItems, [])
  const scrollerRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  /** Scroll the samples strip by roughly one card; respects reduced motion. */
  const scrollSamples = useCallback(
    (dir) => {
      const el = scrollerRef.current
      if (!el) return
      const first = el.querySelector('[data-omag-sample-card]')
      const gap = 16
      const step = first instanceof HTMLElement ? first.offsetWidth + gap : Math.min(el.clientWidth * 0.88, 380)
      el.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' })
    },
    [reduceMotion],
  )

  return (
    <div className="text-[#4A0404]">
      {/* Hero — paper skin + two columns (copy + framed cover) */}
      <section className="om-omag-skin border-b border-[#4A0404]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-20 lg:py-24">
          <div>
            <p className="font-serif text-[2.75rem] leading-none tracking-tight text-[#4A0404] md:text-[3.25rem]">
              O&apos;MAG
            </p>
            <p className="mt-1 font-nav text-[10px] font-semibold tracking-[0.28em] text-[#4A0404]/55 uppercase">
              Occasions Magnified
            </p>
            <h1 className="mt-6 font-serif text-2xl font-semibold tracking-[0.14em] text-[#4A0404] md:text-3xl">
              CUSTOMISED MAGAZINES
            </h1>
            <p className="mt-5 max-w-md font-serif text-lg leading-relaxed text-[#4A0404]/88 md:text-xl">
              Turn your memories into a <strong className="font-semibold">keepsake</strong> with our custom magazines,
              designed to celebrate every special moment!
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ChevronPillLink href={SITE_LINKS.etsy} external className="border-[#4A0404] text-[#4A0404] [&>span:last-child]:bg-[#4A0404] hover:bg-[#4A0404] hover:text-cream [&:hover>span:last-child]:bg-cream [&:hover>span:last-child]:text-[#4A0404]">
                Shop magazine
              </ChevronPillLink>
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#4A0404] bg-white/90 px-8 py-3 font-nav text-xs font-bold tracking-[0.18em] text-[#4A0404] uppercase shadow-sm transition hover:bg-white"
              >
                <span>View samples</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A0404] text-lg leading-none text-cream transition group-hover:bg-cream group-hover:text-[#4A0404] group-hover:ring-1 group-hover:ring-[#4A0404]/30"
                  aria-hidden
                >
                  ›
                </span>
              </Link>
            </div>
          </div>
          <OmagHeroDeviceFrame src={HERO_INSTAGRAM_IMG} alt="O'Mag printed cover in a social-style preview frame" />
        </div>
      </section>

      {/* Why — burgundy title band + dotted video on paper */}
      <section className="scroll-mt-24 border-b border-[#4A0404]/10">
        <div className="bg-[#4A0404] py-5 text-center md:py-6">
          <h2 className="font-serif text-[1.65rem] font-semibold tracking-wide text-cream md:text-4xl md:tracking-[0.08em]">
            Why Choose O&apos;Mag?
          </h2>
        </div>
        <div className="om-omag-skin px-4 py-12 md:px-8 md:py-16">
          <figure className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-[#4A0404]/55 bg-white/50 p-2 shadow-inner backdrop-blur-[2px] md:p-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#1a0505]">
              {reduceMotion ? (
                <img
                  src="/how-it-works/how-it-works.png"
                  alt="How O'Mag works — still overview"
                  className="absolute inset-0 m-auto h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/brand/omag-section-loop.mp4"
                  poster="/how-it-works/how-it-works.png"
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  aria-label="O'Mag layouts and print preview"
                />
              )}
            </div>
            <figcaption className="mt-3 text-center font-serif text-sm text-[#4A0404]/75 md:text-base">
              A short tour of spreads, texture, and print presence — use controls for sound when available.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Samples — burgundy rail + horizontal smooth scroll (multi-page issue thumbs) */}
      <section
        id="omag-samples"
        className="scroll-mt-24 border-b border-[#4A0404]/15 bg-[#4A0404] px-4 py-12 text-cream md:px-8 md:py-16"
      >
        <h2 className="text-center font-serif text-3xl tracking-[0.18em] text-cream md:text-4xl">SAMPLES</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-sm text-cream/80 md:text-base">
          Real page counts we print — drag the row or use arrows. Tap a card to open the flipbook in a new tab.
        </p>
        <div className="mx-auto mt-10 flex max-w-6xl items-stretch gap-3 md:gap-5">
          <button
            type="button"
            onClick={() => scrollSamples(-1)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-cream/35 bg-cream/10 text-xl text-cream transition-colors duration-200 hover:bg-cream/20 md:h-12 md:w-12"
            aria-label="Scroll samples left"
          >
            ‹
          </button>
          <div
            ref={scrollerRef}
            className="flex min-h-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((s, idx) => (
              <a
                key={`${s.href ?? s.src}#${idx}`}
                data-omag-sample-card
                href={s.href ?? SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[min(88vw,22rem)] shrink-0 snap-center overflow-hidden rounded-md border border-cream/15 bg-black/25 shadow-lg ring-1 ring-black/20 transition-[transform,box-shadow,opacity] duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:ring-cream/35"
              >
                <img src={s.src} alt={s.title} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                {s.badge ? (
                  <p className="border-t border-cream/10 bg-black/40 px-3 py-2 text-center font-nav text-[10px] font-semibold tracking-[0.2em] text-cream/95 uppercase">
                    {s.badge}
                  </p>
                ) : null}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollSamples(1)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-cream/35 bg-cream/10 text-xl text-cream transition-colors duration-200 hover:bg-cream/20 md:h-12 md:w-12"
            aria-label="Scroll samples right"
          >
            ›
          </button>
        </div>
      </section>

      {/* How it works — numbered ribbons + icon tiles */}
      <section className="om-omag-skin border-b border-[#4A0404]/10 px-4 py-16 md:px-8 md:py-20 lg:py-24">
        <h2 className="text-center font-serif text-3xl font-semibold text-[#4A0404] md:text-4xl">How it Works?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-lg text-[#4A0404]/78">
          From order to doorstep — a simple, guided flow.
        </p>
        <div className="mx-auto mt-14 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <div
                className="relative w-full max-w-[11rem] bg-[#dccfc0] px-4 pb-3 pt-3 text-center font-nav text-xs font-bold tracking-[0.22em] text-[#4A0404] shadow-sm"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), 50% 100%, 0 calc(100% - 10px))' }}
              >
                {s.n}
              </div>
              <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#4A0404] text-cream shadow-md">
                <StepGlyph name={s.icon} />
              </div>
              <h3 className="mt-4 font-nav text-[11px] font-bold tracking-[0.14em] text-[#4A0404]">{s.title}</h3>
              <p className="mt-2 max-w-xs font-serif text-sm leading-relaxed text-[#4A0404]/78">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="om-omag-skin px-4 py-16 md:px-8 md:py-20">
        <h2 className="text-center font-serif text-3xl text-[#4A0404] md:text-[2.1rem]">What our client&apos;s say...</h2>
        <div className="mx-auto mt-10 flex max-w-4xl items-stretch gap-4 md:gap-6">
          <button
            type="button"
            className="hidden shrink-0 self-center rounded-full border border-[#4A0404]/20 bg-white/80 px-2 py-8 text-2xl text-[#4A0404]/50 transition hover:bg-white md:block"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <div className="relative flex-1 rounded-lg border-2 border-dashed border-white bg-[#4A0404] px-6 py-10 text-center text-cream shadow-xl md:px-12 md:py-12">
            <blockquote className="font-serif text-lg italic leading-relaxed md:text-xl">
              &ldquo;Shristi beautifully captured our love story in the O&apos;Mag. It brought tears to my
              wife&apos;s eyes on our anniversary! The design, quality, and service were top-notch.&rdquo;
            </blockquote>
            <p className="mt-8 font-nav text-xs font-semibold tracking-[0.22em] text-cream/85 uppercase">
              — Amit &amp; Jyoti
            </p>
            <img
              src="/brand/founder-shristi.png"
              alt=""
              className="absolute -bottom-5 right-4 h-16 w-16 rounded-full border-4 border-white object-cover shadow-lg md:-bottom-6 md:right-8 md:h-20 md:w-20"
              loading="lazy"
            />
          </div>
          <button
            type="button"
            className="hidden shrink-0 self-center rounded-full border border-[#4A0404]/20 bg-white/80 px-2 py-8 text-2xl text-[#4A0404]/50 transition hover:bg-white md:block"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="om-omag-skin border-t border-[#4A0404]/10 px-4 py-16 md:px-8 md:py-20">
        <h2 className="text-center font-serif text-2xl text-[#4A0404] md:text-3xl">
          FAQ&apos;s - Everything You Need to Know
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-[#4A0404]/75">
          Quick answers to common questions — open a topic or reach us directly.
        </p>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((q, idx) => (
            <details
              key={q}
              className="group rounded-md border border-[#4A0404]/15 bg-white/85 px-4 py-3 shadow-sm open:bg-white"
            >
              <summary className="cursor-pointer list-none font-serif text-base text-[#4A0404] marker:content-none md:text-lg">
                <span className="mr-2 inline-block w-8 font-nav text-xs font-bold text-[#4A0404]/45">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {q}
              </summary>
              <p className="mt-3 border-t border-[#4A0404]/10 pt-3 font-serif text-sm text-[#4A0404]/75">
                Reach us on{' '}
                <a className="font-semibold underline decoration-[#4A0404]/30 underline-offset-2" href={SITE_LINKS.email}>
                  email
                </a>{' '}
                or{' '}
                <a
                  className="font-semibold underline decoration-[#4A0404]/30 underline-offset-2"
                  href={getWhatsAppContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>{' '}
                for the full answer for this topic.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-[#4A0404]/10 bg-[#4A0404] px-4 py-14 text-center md:py-16">
        <ChevronPillLink href={SITE_LINKS.etsy} external className="border-cream/80 bg-cream text-[#4A0404] [&>span:last-child]:bg-[#4A0404] [&>span:last-child]:text-cream hover:bg-white hover:text-[#4A0404]">
          Shop magazine
        </ChevronPillLink>
      </section>
    </div>
  )
}
