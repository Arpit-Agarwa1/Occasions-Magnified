import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { omagSampleCarouselItems } from '../data/workGallery.js'
import { getWhatsAppContactUrl, SITE_LINKS } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'

/** Hero frame — printed wedding cover (`public/work/magazine/omag-hero-cover.png`). */
const HERO_INSTAGRAM_IMG = '/work/magazine/omag-hero-cover.png'

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

/** Mailto for “Download guide” — visitor can send a short request from their mail client. */
const OMAG_GUIDE_MAILTO = `${SITE_LINKS.email}?subject=${encodeURIComponent("O'Mag ordering guide")}&body=${encodeURIComponent("Hi,\n\nI'd like the O'Mag ordering / pricing guide.\n\nThank you.")}`

/** Shop gallery — order = default first slide; paths under `public/work/magazine`. */
const OMAG_SHOP_GALLERY = [
  {
    src: '/work/magazine/omag-hero-cover.png',
    alt: "O'Mag wedding magazine cover — printed keepsake",
  },
  {
    src: '/work/magazine/cover.jpg',
    alt: "O'Mag — classic printed cover",
  },
  {
    src: '/work/magazine/open-magazne-o-mag-aashi.jpg',
    alt: 'Custom wedding magazine open in hand — spreads and photography',
  },
  {
    src: '/work/magazine/mockup-ka-cover.jpg',
    alt: "O'Mag printed cover mockup — initials design",
  },
  {
    src: '/work/magazine/mockup-magazine-chacha-chachi.jpg',
    alt: "Family magazine mockup — printed O'Mag",
  },
  {
    src: '/work/magazine/mockup3.jpg',
    alt: 'Magazine pages and print finish detail',
  },
]

/**
 * WhatsApp link with O'Mag shop selections (pages, type, qty) for quotes / custom orders.
 * Checkout still happens on Etsy; use this for coordination and bulk.
 * @param {{ pages: string, magType: string, qty: number, extraLine?: string }} opts
 * @returns {string}
 */
function getOmagShopWhatsAppUrl({ pages, magType, qty, extraLine }) {
  const lines = [
    'Hi! Thank you for reaching out to Occasions Magnified.',
    '',
    "I'm interested in O'Mag from your shop page:",
    `• Pages: ${pages}`,
    `• Magazine type: ${magType}`,
    `• Quantity: ${qty}`,
  ]
  if (extraLine) lines.push('', extraLine)
  lines.push('', 'Please share pricing, timeline, and next steps. Thank you!')
  return `${SITE_LINKS.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}

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

/** Product block — layout aligned to studio product mock (gallery + panel + qty / promos). */
function OmagShopSection() {
  const [pages, setPages] = useState('20')
  const [magType, setMagType] = useState('Wedding')
  const [qty, setQty] = useState(1)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const galleryLen = OMAG_SHOP_GALLERY.length
  const activeSlide = OMAG_SHOP_GALLERY[galleryIndex] ?? OMAG_SHOP_GALLERY[0]

  const goPrev = useCallback(() => {
    setGalleryIndex((i) => (i - 1 + galleryLen) % galleryLen)
  }, [galleryLen])

  const goNext = useCallback(() => {
    setGalleryIndex((i) => (i + 1) % galleryLen)
  }, [galleryLen])

  const waShop = useMemo(
    () => getOmagShopWhatsAppUrl({ pages, magType, qty }),
    [pages, magType, qty],
  )
  const waBulk = useMemo(
    () =>
      getOmagShopWhatsAppUrl({
        pages,
        magType,
        qty,
        extraLine: "I'd like a bulk / custom quote (multiple copies or special requirements).",
      }),
    [pages, magType, qty],
  )

  return (
    <section
      id="omag-shop"
      className="scroll-mt-24 border-b border-[#4A0404]/15 om-marble-bg px-4 py-16 text-[#1a0505] md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,24rem)] lg:items-start lg:gap-14">
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-sm border border-[#4A0404]/12 bg-white shadow-[0_24px_60px_-32px_rgba(45,2,1,0.22)]">
              <img
                key={activeSlide.src}
                src={activeSlide.src}
                alt={activeSlide.alt}
                className="aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
                loading="lazy"
              />
              <span className="absolute right-3 top-3 rounded-sm bg-[#b4232c] px-2.5 py-1 font-nav text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                Sale
              </span>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-[1] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-lg text-[#4A0404] shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/40"
                aria-label="Previous product image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-[1] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-lg text-[#4A0404] shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/40"
                aria-label="Next product image"
              >
                ›
              </button>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {OMAG_SHOP_GALLERY.map((item, thumbIdx) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setGalleryIndex(thumbIdx)}
                  aria-current={thumbIdx === galleryIndex ? true : undefined}
                  aria-label={`Show product image ${thumbIdx + 1} of ${galleryLen}`}
                  className={`h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-sm border bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0404]/35 sm:h-20 sm:w-20 ${
                    thumbIdx === galleryIndex
                      ? 'border-[#4A0404] ring-2 ring-[#4A0404]/30'
                      : 'border-[#4A0404]/18'
                  }`}
                >
                  <img src={item.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-[#4A0404]/12 bg-white p-6 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.12)] md:p-8">
            <h2 className="font-serif text-[1.35rem] font-semibold tracking-tight text-black md:text-2xl">
              Custom Magazine
            </h2>
            <p className="mt-3 font-serif text-base leading-relaxed text-[#4A0404]/85">
              A custom magazine that tells your story — through photos, memories, and emotions.{' '}
              <em className="text-[#4A0404]/75">For more than 20 pages, please contact us on WhatsApp.</em>
            </p>
            <p className="mt-4 font-serif text-lg text-[#4A0404]">
              From: <span className="font-semibold">₹1,200.00</span>
            </p>
            <p className="mt-2 font-nav text-xs text-[#b8860b]" aria-label="Rated 5 out of 5, 8 reviews">
              ★★★★★ <span className="text-[#4A0404]/55">(8 customer reviews)</span>
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 border-y border-[#4A0404]/10 py-5 font-nav text-[11px] font-semibold leading-snug text-[#4A0404]/85 sm:grid-cols-4 sm:text-[10px]">
              <li className="text-center">Fully customized</li>
              <li className="text-center">Perfect for gifting</li>
              <li className="text-center">100+ happy clients</li>
              <li className="text-center">Free shipping*</li>
            </ul>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block font-nav text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A0404]/55">
                Pages
                <select
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-[#4A0404]/20 bg-[#faf8f4] px-3 py-2.5 font-serif text-sm text-[#4A0404]"
                >
                  <option value="12">12</option>
                  <option value="16">16</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                </select>
              </label>
              <label className="block font-nav text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A0404]/55">
                Type
                <select
                  value={magType}
                  onChange={(e) => setMagType(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-[#4A0404]/20 bg-[#faf8f4] px-3 py-2.5 font-serif text-sm text-[#4A0404]"
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Family">Family</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap items-baseline gap-2">
              <span className="font-serif text-sm text-[#4A0404]/45 line-through">₹3,600.00</span>
              <span className="font-serif text-xl font-semibold text-[#6b3a2a]">₹2,400.00</span>
            </div>
            <p className="mt-1 font-nav text-xs font-semibold text-emerald-700">✓ In stock</p>

            <div className="mt-6 flex items-center justify-center gap-0 border border-[#4A0404]/25 font-nav text-sm">
              <button
                type="button"
                className="px-4 py-2.5 text-[#4A0404] transition hover:bg-[#4A0404]/05"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="min-w-[2.5rem] border-x border-[#4A0404]/25 py-2.5 text-center tabular-nums font-semibold text-[#4A0404]">
                {qty}
              </span>
              <button
                type="button"
                className="px-4 py-2.5 text-[#4A0404] transition hover:bg-[#4A0404]/05"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-sm border-2 border-[#1a0505] bg-transparent px-5 py-3.5 font-nav text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a0505] transition hover:bg-black/[0.03]"
              >
                Add to cart
              </a>
              <a
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-sm bg-[#3d2419] px-5 py-3.5 font-nav text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-md transition hover:bg-[#2e1b14]"
              >
                Buy now
              </a>
            </div>

            <p className="mt-5 text-center font-nav text-[11px] font-semibold tracking-wide text-[#4A0404]/80">
              Extra ₹200 off — use code: <span className="font-bold text-[#4A0404]">WELCOME200</span>
            </p>
            <p className="mt-2 text-center font-serif text-sm text-[#5c3d9e]">
              Estimated delivery: <span className="font-semibold">2–3 weeks</span> after design approval
            </p>
            <a
              href={waBulk}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm border-2 border-dashed border-[#4A0404]/35 px-4 py-3 font-nav text-[11px] font-semibold uppercase tracking-wide text-[#4A0404] transition hover:border-[#4A0404]/55 hover:bg-[#4A0404]/05"
            >
              Request for bulk order
            </a>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a
                href={SITE_LINKS.phone}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-4 py-2.5 font-nav text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8]"
              >
                Book via call
              </a>
              <a
                href={waShop}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#128C7E] px-4 py-2.5 font-nav text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#0f766e]"
              >
                Book via WhatsApp
              </a>
            </div>
            <p className="mt-4 text-center font-nav text-[10px] font-semibold tracking-wide text-[#4A0404]/50">
              *Add to cart / Buy now go to Etsy for checkout. Custom quotes, bulk, and page counts over 20 — use
              WhatsApp; we&apos;ll confirm price and shipping there.
            </p>
          </div>
        </div>
      </div>
    </section>
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
        <img
          src={src}
          alt={alt}
          className="aspect-[4/5] w-full object-contain md:object-cover"
          width={800}
          height={1000}
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
      {/* Hero — paper field + two columns (matches landing mock: O’MAG + CTAs | IG frame) */}
      <section className="om-omag-skin border-b border-[#4A0404]/15">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-24 lg:py-28">
          <div className="max-w-xl md:max-w-none">
            <p className="font-serif text-[2.75rem] leading-[0.95] tracking-tight text-[#4A0404] md:text-[3.35rem] lg:text-[3.5rem]">
              O&apos;MAG
            </p>
            <p className="mt-2 font-nav text-[10px] font-semibold tracking-[0.32em] text-[#4A0404]/50 uppercase">
              Occasions Magnified
            </p>
            <h1 className="mt-8 font-serif text-xl font-semibold tracking-[0.2em] text-[#4A0404] md:text-2xl md:tracking-[0.24em]">
              CUSTOMISED MAGAZINES
            </h1>
            <p className="mt-6 max-w-md font-serif text-[1.05rem] leading-relaxed text-[#4A0404]/88 md:text-lg md:leading-relaxed">
              Turn your memories into a <strong className="font-semibold">keepsake</strong> with our custom magazines,
              designed to celebrate every special moment!
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ChevronPillLink href={SITE_LINKS.etsy} external className="border-[#4A0404] text-[#4A0404] [&>span:last-child]:bg-[#4A0404] hover:bg-[#4A0404] hover:text-cream [&:hover>span:last-child]:bg-cream [&:hover>span:last-child]:text-[#4A0404]">
                Shop magazines
              </ChevronPillLink>
              <a
                href={OMAG_GUIDE_MAILTO}
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#4A0404] bg-white px-8 py-3 font-nav text-xs font-bold tracking-[0.2em] text-[#4A0404] uppercase shadow-sm transition hover:bg-white"
              >
                <span>Download guide</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A0404] text-lg leading-none text-cream transition group-hover:bg-cream group-hover:text-[#4A0404] group-hover:ring-1 group-hover:ring-[#4A0404]/30"
                  aria-hidden
                >
                  ›
                </span>
              </a>
            </div>
          </div>
          <OmagHeroDeviceFrame
            src={HERO_INSTAGRAM_IMG}
            alt="O'Mag wedding magazine cover — Embarking on Forever, printed keepsake"
          />
        </div>
      </section>

      {/* Why — full-bleed burgundy band + video on paper (mock layout) */}
      <section className="scroll-mt-24 border-b border-[#4A0404]/10">
        <div className="bg-[#4A0404] px-4 py-6 text-center md:py-8">
          <h2 className="font-serif text-[1.75rem] font-semibold tracking-[0.06em] text-cream md:text-[2.35rem] md:tracking-[0.1em]">
            Why Choose O&apos;Mag?
          </h2>
        </div>
        <div className="om-omag-skin px-4 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl">
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
            <p className="mt-4 text-center font-serif text-sm text-[#4A0404]/72 md:text-base">
              A short tour of spreads, texture, and print — use controls when sound is available.
            </p>
          </div>
        </div>
      </section>

      {/* Samples — editorial carousel: fixed portrait stage + mat padding so every cover reads full-frame */}
      <section
        id="omag-samples"
        className="scroll-mt-24 border-b border-black/20 bg-[#3d0303] px-4 py-14 text-cream md:px-8 md:py-20"
      >
        <h2 className="text-center font-serif text-3xl font-semibold tracking-[0.18em] text-cream md:text-4xl md:tracking-[0.22em]">
          SAMPLES
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center font-serif text-sm leading-relaxed text-cream/75 md:text-base md:leading-relaxed">
          Swipe or use the arrows. Each card opens the real Heyzine issue in a new tab — same spreads we print.
        </p>

        <div className="mx-auto mt-12 flex max-w-6xl items-center gap-2 sm:gap-4 md:gap-6">
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
            className="flex min-h-0 flex-1 snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth py-2 pl-1 pr-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:px-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingInline: '12px' }}
          >
            {slides.map((s, idx) => (
              <a
                key={`${s.href ?? s.src}#${idx}`}
                data-omag-sample-card
                href={s.href ?? SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-[min(76vw,17.5rem)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-cream/[0.12] bg-[#0c0505] shadow-[0_28px_60px_-28px_rgba(0,0,0,0.75)] ring-1 ring-black/40 transition-[transform,box-shadow,border-color] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-cream/25 motion-safe:hover:shadow-[0_36px_70px_-28px_rgba(0,0,0,0.85)] sm:w-[min(72vw,18rem)] md:w-[18.25rem]"
              >
                <div className="relative w-full bg-gradient-to-b from-[#1f1212] via-[#140a0a] to-[#0a0606] p-3 sm:p-3.5">
                  <div
                    className="relative flex aspect-[4/5] w-full min-h-0 items-center justify-center overflow-hidden rounded-xl bg-[#050303] ring-1 ring-white/[0.06]"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(255,245,230,0.04), inset 0 18px 40px -28px rgba(0,0,0,0.65)',
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
                <div className="flex flex-col gap-1 border-t border-cream/[0.08] bg-black/55 px-3.5 py-3 sm:px-4 sm:py-3.5">
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

      <OmagShopSection />

      {/* How it works — numbered ribbons + icon tiles */}
      <section className="om-omag-skin border-b border-[#4A0404]/10 px-4 py-16 md:px-8 md:py-20 lg:py-24">
        <h2 className="text-center font-serif text-3xl font-semibold text-[#4A0404] md:text-4xl">How It Works?</h2>
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
              <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-sm bg-[#4A0404] text-cream shadow-md">
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
        <h2 className="text-center font-serif text-3xl text-[#4A0404] md:text-[2.1rem]">What our clients say...</h2>
        <div className="mx-auto mt-10 flex max-w-4xl items-stretch gap-4 md:gap-6">
          <button
            type="button"
            className="hidden shrink-0 self-center rounded-full border border-[#4A0404]/20 bg-white/80 px-2 py-8 text-2xl text-[#4A0404]/50 transition hover:bg-white md:block"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <div className="relative flex-1 rounded-sm border-2 border-dashed border-white bg-[#4A0404] px-6 py-10 text-center text-cream shadow-xl md:px-12 md:py-12">
            <blockquote className="font-serif text-lg italic leading-relaxed md:text-xl">
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
      <section id="faq" className="om-omag-skin border-t border-[#4A0404]/10 px-4 py-16 md:px-8 md:py-20">
        <h2 className="text-center font-serif text-2xl tracking-tight text-[#4A0404] md:text-3xl">
          FAQ&apos;s — Everything You Need to Know
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-[#4A0404]/75">
          Quick answers — tap a question to expand, or reach us directly.
        </p>
        <div className="mx-auto mt-10 max-w-3xl space-y-2">
          {FAQS.map((q, idx) => (
            <details
              key={q}
              className="group rounded-sm border border-[#4A0404]/12 bg-white/90 px-4 py-3 shadow-sm open:bg-white md:px-5"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 font-serif text-base text-[#4A0404] marker:content-none md:text-lg">
                <span className="mt-0.5 shrink-0 font-serif text-lg tabular-nums text-[#4A0404]/35 md:text-xl">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="min-w-0 flex-1 text-left leading-snug">{q}</span>
              </summary>
              <p className="mt-3 border-t border-[#4A0404]/10 pt-3 pl-[2.85rem] font-serif text-sm text-[#4A0404]/75 md:pl-[3.1rem]">
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
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 rounded-full border-2 border-cream/80 bg-cream px-8 py-3 font-nav text-xs font-bold tracking-[0.18em] text-[#4A0404] uppercase shadow-sm transition hover:bg-white"
        >
          <span>Contact us</span>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A0404] text-lg leading-none text-cream transition group-hover:bg-cream group-hover:text-[#4A0404] group-hover:ring-1 group-hover:ring-[#4A0404]/30"
            aria-hidden
          >
            ›
          </span>
        </Link>
      </section>
    </div>
  )
}
