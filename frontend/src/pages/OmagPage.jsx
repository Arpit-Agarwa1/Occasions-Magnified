import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { omagSampleCarouselItems } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
/** Hero frame — printed O’Mag spread (`public/work/magazine/omag-hero-cover.png`). */
const HERO_INSTAGRAM_IMG = '/work/magazine/omag-hero-cover.png'

/** WhatsApp deep link for “Order Now” — visitor can edit the message before sending. */
const OMAG_ORDER_WHATSAPP_URL = `${SITE_LINKS.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to order O'Mag (custom magazine). Please share pricing, timeline, and next steps. Thank you!",
)}`

const STEPS = [
  {
    n: '01',
    title: 'Choose Your Pages',
    body: 'Select the number of pages based on how detailed you want your story to be.',
    icon: 'pages',
  },
  {
    n: '02',
    title: 'Share Photos & Story',
    body: 'Send us your pictures, content, and memories — we’ll help you organise everything.',
    icon: 'photos',
  },
  {
    n: '03',
    title: 'Review Design Draft',
    body: 'We create your magazine and share a preview for your approval and feedback.',
    icon: 'draft',
  },
  {
    n: '04',
    title: 'Print & Deliver',
    body: 'Once finalised, we print your magazine and deliver it to your doorstep.',
    icon: 'ship',
  },
]

/** FAQ accordion — question + answer pairs for O’Mag page. */
const FAQS = [
  {
    question: 'What happens after I place the order?',
    answer:
      'Once you place your order, we connect with you via WhatsApp or email to understand your story, preferences, and details. You share your photos and content, and we begin designing your magazine with regular previews.',
  },
  {
    question: 'What content do I need to provide?',
    answer:
      "You can share photos, messages, quotes, or memories you'd like to include. We'll guide you on what works best and help structure everything beautifully.",
  },
  {
    question: "Is O'Mag fully customizable?",
    answer:
      "Yes, every O'Mag is designed from scratch. From theme and colors to layout and storytelling style, everything is tailored to your occasion.",
  },
  {
    question: 'What is the process from start to delivery?',
    answer:
      'You share your details → we design → you receive a preview → revisions are made → final print and delivery. We guide you at every step to keep the process smooth and stress-free.',
  },
  {
    question: 'How long does it take?',
    answer:
      'It usually takes 5–10 working days, depending on the number of pages and revisions. Urgent requests can be accommodated when possible.',
  },
  {
    question: 'Can I request changes after seeing the design?',
    answer:
      "Yes, revisions are included to make sure you're completely happy with the final outcome.",
  },
  {
    question: 'Is it a printed magazine or digital?',
    answer:
      "O'Mag is offered as a printed magazine, designed to be a keepsake you can hold and cherish. A digital version can also be provided on request.",
  },
  {
    question: 'What about payment, delivery, and gifting?',
    answer:
      'We take a 50% advance to begin the design, and the remaining 50% after final approval before delivery. Your magazine is printed and delivered to your address — and we can also send it directly as a gift. Your photos and content are handled with complete privacy.',
  },
  {
    question: 'Do you collaborate with photographers or studios?',
    answer:
      "Yes, we love collaborating with photographers and studios. If you'd like to offer O'Mag to your clients, feel free to connect with us to discuss how we can work together.",
  },
  {
    question: 'Do you offer bulk or partnership pricing?',
    answer:
      'Yes, we offer special pricing and flexible options for bulk orders and ongoing collaborations. Please reach out to us to share your requirements.',
  },
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

/** Right column — IG-style frame; hero photo is 3:2 — full bleed inside slot so the whole magazine stays visible. */
function OmagHeroDeviceFrame({ src, alt }) {
  return (
    <div className="mx-auto w-full max-w-[min(100%,420px)] min-w-0 rounded-[1.25rem] bg-white p-2 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/10 sm:max-w-[min(100%,480px)] sm:rounded-[1.75rem] sm:p-2.5 md:max-w-xl">
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
        <img
          src={src}
          alt={alt}
          className="aspect-[1024/682] w-full object-contain object-center"
          width={1024}
          height={682}
          loading="eager"
        />
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
      const gap = 24
      const step = first instanceof HTMLElement ? first.offsetWidth + gap : Math.min(el.clientWidth * 0.76, 320)
      el.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' })
    },
    [reduceMotion],
  )

  return (
    <div className="bg-[#f5f2ec] text-[#4A0404]">
      {/* Hero — primary title Customised Magazines; O’MAG lockup as eyebrow; CTAs → shop + samples */}
      <section className="om-omag-skin border-b border-[#4A0404]/15">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-10 px-3 py-12 sm:gap-12 sm:px-4 sm:py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-24 lg:gap-20 lg:px-10 lg:py-28">
          <div className="min-w-0 max-w-xl md:max-w-none">
            {/** Borderless on `om-omag-skin`; filter maps cream SVG to heading burgundy so it stays legible on paper. */}
            <div className="m-0 w-fit max-w-[min(100%,11.5rem)] sm:max-w-[min(100%,12.5rem)] md:max-w-[min(100%,13.5rem)]">
              <img
                src="/brand/logo-occasions-magnified.svg"
                alt="O'Mag — Occasions Magnified"
                className="block h-auto w-full max-w-full"
                width={1080}
                height={1080}
                loading="lazy"
                decoding="async"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(11%) sepia(26%) saturate(2000%) hue-rotate(318deg) brightness(0.76) contrast(1.06)',
                }}
              />
            </div>
            <h1 className="mt-6 font-serif text-[clamp(1.85rem,calc(0.65rem+4.2vw),3.45rem)] font-semibold leading-[1.08] tracking-tight text-[#4A0404] text-balance md:mt-8">
              Customised Magazines
            </h1>
            <p className="mt-6 max-w-lg font-serif text-[1.05rem] leading-relaxed text-[#4A0404]/88 text-pretty md:text-lg md:leading-relaxed">
              Turn your memories into a beautifully crafted magazine - designed to celebrate your story in the most
              meaningful way.
            </p>
            <div className="mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={OMAG_ORDER_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full min-w-0 items-center justify-center gap-3 rounded-full border-2 border-[#4A0404] bg-[#4A0404] px-6 py-3 font-nav text-[11px] font-bold tracking-[0.18em] text-cream uppercase shadow-sm transition hover:border-[#3d0303] hover:bg-[#3d0303] sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.2em]"
              >
                <span>Order Now</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-lg leading-none text-[#4A0404] transition group-hover:bg-white group-hover:ring-1 group-hover:ring-cream/50"
                  aria-hidden
                >
                  ›
                </span>
              </a>
              <a
                href="#omag-samples"
                className="group inline-flex w-full min-w-0 items-center justify-center gap-3 rounded-full border-2 border-[#4A0404] bg-white px-6 py-3 font-nav text-[11px] font-bold tracking-[0.18em] text-[#4A0404] uppercase shadow-sm transition hover:bg-[#4A0404]/05 sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.2em]"
              >
                <span>View Samples</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A0404] text-lg leading-none text-cream transition group-hover:bg-cream group-hover:text-[#4A0404] group-hover:ring-1 group-hover:ring-[#4A0404]/30"
                  aria-hidden
                >
                  ›
                </span>
              </a>
            </div>
          </div>
          <div className="flex min-w-0 justify-center md:justify-end">
            <OmagHeroDeviceFrame
              src={HERO_INSTAGRAM_IMG}
              alt="O'Mag open magazine — personalized love story spread on a printed keepsake"
            />
          </div>
        </div>
      </section>

      {/* Why — full-bleed burgundy band + video on paper (mock layout) */}
      <section className="scroll-mt-24 border-b border-[#4A0404]/10">
        <div className="bg-[#4A0404] px-4 py-6 text-center md:py-8">
          <h2 className="font-serif text-[1.75rem] font-semibold tracking-[0.06em] text-cream md:text-[2.35rem] md:tracking-[0.1em]">
            Why Choose O&apos;Mag?
          </h2>
        </div>
        <div className="om-omag-skin px-3 py-12 sm:px-4 sm:py-14 md:px-10 md:py-20">
          <div className="mx-auto min-w-0 max-w-4xl">
            <p className="mx-auto mb-8 max-w-2xl px-1 text-center font-serif text-base leading-relaxed text-[#4A0404]/88 text-pretty sm:mb-10 sm:text-lg md:mb-12 md:text-xl md:leading-relaxed">
              Not just a magazine - it&apos;s your story, thoughtfully designed and turned into a timeless keepsake you
              can hold forever.
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-[#4A0404]/15 bg-[#1a0505] shadow-lg">
              {reduceMotion ? (
                <img
                  src="/how-it-works/how-it-works.png"
                  alt="How O'Mag works — still overview"
                  className="absolute inset-0 m-auto h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full object-contain"
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
            <p className="mt-4 text-center font-serif text-sm text-[#4A0404]/65 md:text-base">
              Use the video controls when sound is available.
            </p>
          </div>
        </div>
      </section>

      {/* Samples — editorial carousel: fixed portrait stage + mat padding so every cover reads full-frame */}
      <section
        id="omag-samples"
        className="scroll-mt-24 border-b border-black/20 bg-[#3d0303] px-4 py-14 text-cream md:px-8 md:py-20"
      >
        <h2 className="text-center font-serif text-2xl font-semibold tracking-tight text-cream text-balance sm:text-3xl md:text-4xl">
          Explore Our Creations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl px-1 text-center font-serif text-sm leading-relaxed text-cream/80 text-pretty md:text-base md:leading-relaxed">
          Take a look at some of the magazines we&apos;ve designed - each one unique, personal, and crafted with care.
        </p>

        <div className="mx-auto mt-10 flex min-w-0 max-w-6xl items-center gap-1.5 sm:mt-12 sm:gap-3 md:gap-6">
          <button
            type="button"
            onClick={() => scrollSamples(-1)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-cream/[0.07] text-lg text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-cream/35 hover:bg-cream/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 sm:h-11 sm:w-11 md:h-12 md:w-12"
            aria-label="Scroll samples left"
          >
            ‹
          </button>

          <div
            ref={scrollerRef}
            className="flex min-h-0 min-w-0 flex-1 touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth py-2 pl-0.5 pr-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:px-2 md:gap-6 [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingInline: '12px' }}
          >
            {slides.map((s, idx) => (
              <a
                key={`${s.href ?? s.src}#${idx}`}
                data-omag-sample-card
                href={s.href ?? SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-[min(82vw,17.5rem)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-cream/15 bg-transparent shadow-[0_20px_48px_-24px_rgba(0,0,0,0.35)] ring-1 ring-cream/10 transition-[transform,box-shadow,border-color] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-cream/30 motion-safe:hover:bg-white/[0.04] motion-safe:hover:shadow-[0_28px_56px_-22px_rgba(0,0,0,0.4)] sm:w-[min(72vw,18rem)] md:w-[18.25rem]"
              >
                <div className="relative w-full bg-transparent p-3 sm:p-3.5">
                  <div
                    className="relative flex aspect-[4/5] w-full min-h-0 items-center justify-center overflow-hidden rounded-xl bg-transparent ring-1 ring-cream/15"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(255,245,230,0.08)',
                    }}
                  >
                    <img
                      src={s.src}
                      alt={s.title}
                      className="max-h-full max-w-full object-contain object-center transition duration-300 motion-safe:group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 border-t border-cream/10 bg-white/[0.06] px-3.5 py-3 backdrop-blur-[6px] sm:px-4 sm:py-3.5">
                  <p className="line-clamp-2 text-left font-serif text-[0.8125rem] font-medium leading-snug tracking-tight text-cream/95 sm:text-sm">
                    {s.title}
                  </p>
                  <div className="flex items-center gap-2 pt-0.5">
                    {s.badge ? (
                      <span className="min-w-0 font-nav text-[9px] font-semibold tracking-[0.22em] text-om-gold/95 uppercase">
                        {s.badge}
                      </span>
                    ) : null}
                    <span className="ml-auto shrink-0 font-nav text-[9px] font-semibold tracking-[0.18em] text-cream/40 transition group-hover:text-cream/70 uppercase">
                      Open ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollSamples(1)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-cream/[0.07] text-lg text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-cream/35 hover:bg-cream/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 sm:h-11 sm:w-11 md:h-12 md:w-12"
            aria-label="Scroll samples right"
          >
            ›
          </button>
        </div>
      </section>

      {/* How it works — numbered ribbons + icon tiles */}
      <section className="om-omag-skin border-b border-[#4A0404]/10 px-3 py-14 sm:px-4 sm:py-16 md:px-8 md:py-20 lg:py-24">
        <h2 className="text-center font-serif text-2xl font-semibold text-[#4A0404] text-balance sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl px-1 text-center font-serif text-base text-[#4A0404]/78 text-pretty sm:text-lg">
          Four simple steps from your content to a printed magazine at your door.
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
              <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-sm bg-[#4A0404] text-cream shadow-md">
                <StepGlyph name={s.icon} />
              </div>
              <h3 className="mt-4 font-nav text-[11px] font-bold tracking-[0.08em] text-[#4A0404]">{s.title}</h3>
              <p className="mt-2 max-w-xs font-serif text-sm leading-relaxed text-[#4A0404]/78">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="om-omag-skin px-3 py-14 sm:px-4 sm:py-16 md:px-8 md:py-20">
        <p className="text-center font-nav text-[10px] font-semibold uppercase tracking-[0.26em] text-[#4A0404]/55 sm:tracking-[0.28em] md:text-[11px] md:tracking-[0.32em]">
          Real stories. Real emotions. Real experiences.
        </p>
        <h2 className="mt-4 text-center font-serif text-2xl text-[#4A0404] text-balance sm:text-3xl md:text-[2.1rem]">
          What Our Clients Say
        </h2>
        <div className="mx-auto mt-8 flex min-w-0 max-w-4xl items-stretch gap-3 sm:mt-10 sm:gap-4 md:gap-6">
          <button
            type="button"
            className="hidden shrink-0 self-center rounded-full border border-[#4A0404]/20 bg-white/80 px-2 py-8 text-2xl text-[#4A0404]/50 transition hover:bg-white md:block"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <div className="relative flex-1 rounded-sm border-2 border-dashed border-white bg-[#4A0404] px-4 pb-20 pt-9 text-center text-cream shadow-xl sm:px-6 sm:pb-16 sm:pt-10 md:px-12 md:py-12">
            <blockquote className="font-serif text-base italic leading-relaxed text-pretty sm:text-lg md:text-xl">
              &ldquo;Shristi beautifully captured our love story in the O&apos;Mag. It brought tears to my
              wife&apos;s eyes on our anniversary! The design, quality, and service were top-notch.&rdquo;
            </blockquote>
            <p className="mt-8 font-nav text-xs font-semibold tracking-[0.22em] text-cream/85 uppercase">
              — Amit &amp; Jyoti
            </p>
            <img
              src="/brand/founder-shristi.png"
              alt="Shristi — designer"
              className="absolute bottom-3 right-4 h-16 w-16 -translate-y-3 rounded-full border-4 border-white object-cover shadow-lg motion-reduce:translate-y-0 md:bottom-4 md:right-8 md:h-20 md:w-20 md:-translate-y-4"
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
      <section id="faq" className="om-omag-skin border-t border-[#4A0404]/10 px-3 py-14 sm:px-4 sm:py-16 md:px-8 md:py-20">
        <h2 className="text-center font-serif text-xl tracking-tight text-[#4A0404] text-balance sm:text-2xl md:text-3xl">
          FAQs – Everything You Need to Know
        </h2>
        <p className="mx-auto mt-4 max-w-xl px-1 text-center font-serif text-[0.95rem] leading-relaxed text-[#4A0404]/78 text-pretty sm:text-base">
          Got questions? Here are answers to help you understand the process and make your O&apos;Mag experience smooth
          and easy.
        </p>
        <p className="mx-auto mt-3 max-w-xl px-1 text-center font-serif text-sm text-[#4A0404]/65 text-pretty">
          Tap a question to expand. For details, reach us on email or WhatsApp.
        </p>
        <div className="mx-auto mt-10 max-w-3xl space-y-2">
          {FAQS.map((item, idx) => (
            <details
              key={`faq-${idx}-${item.question.slice(0, 24)}`}
              className="group rounded-sm border border-[#4A0404]/12 bg-white/90 px-4 py-3 shadow-sm open:bg-white md:px-5"
            >
              <summary className="flex cursor-pointer list-none items-start gap-2 font-serif text-[0.95rem] text-[#4A0404] marker:content-none sm:gap-3 sm:text-base md:text-lg">
                <span className="mt-0.5 shrink-0 font-serif text-base tabular-nums text-[#4A0404]/35 sm:text-lg md:text-xl">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="min-w-0 flex-1 text-left leading-snug">{item.question}</span>
              </summary>
              <p className="mt-3 border-t border-[#4A0404]/10 pt-3 pl-9 font-serif text-sm leading-relaxed text-[#4A0404]/78 text-pretty sm:pl-[2.85rem] md:pl-[3.1rem] md:text-[0.95rem]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
