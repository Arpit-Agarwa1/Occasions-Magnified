import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { magazineGalleryItems } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'

const STEPS = [
  {
    n: '01',
    title: 'CHOOSE PAGES',
    body: 'Pick the page count and magazine type that fits your story.',
  },
  {
    n: '02',
    title: 'SHARE PHOTOS + STORY',
    body: 'Send us your photos, milestones, and notes — via link or email.',
  },
  {
    n: '03',
    title: 'REVIEW DESIGN DRAFT',
    body: 'We refine layouts until every spread feels unmistakably yours.',
  },
  {
    n: '04',
    title: 'WE PRINT & DELIVER',
    body: 'Premium print, careful packaging, and doorstep delivery.',
  },
]

const WHY_BULLETS = [
  'Editorial layouts that read like a real magazine — hierarchy, pacing, and typography.',
  'A guided process: you share photos & stories; we shape the narrative and design.',
  'Premium print and finishing — made to gift, display, and revisit for years.',
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

/** O’Mag marketing + process + FAQ (matches O’Mag home mock). */
export function OmagPage() {
  const slides = useMemo(() => magazineGalleryItems.slice(0, 6), [])
  const [i, setI] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length)
  const next = () => setI((v) => (v + 1) % slides.length)

  const a = slides[(i + slides.length - 1) % slides.length]
  const b = slides[i]
  const c = slides[(i + 1) % slides.length]

  return (
    <div className="om-marble-bg text-burgundy">
      <section className="mx-auto max-w-7xl px-4 py-14 md:flex md:items-center md:gap-12 md:px-8 md:py-20">
        <div className="md:w-1/2">
          <p className="font-serif text-4xl text-[#5d0e0e] md:text-5xl">O&apos;MAG</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-[0.08em] text-[#5d0e0e] md:text-[2.35rem]">
            CUSTOMISED MAGAZINES
          </h1>
          <p className="mt-4 max-w-md font-serif text-lg leading-relaxed text-burgundy/85">
            Keepsake magazines crafted like editorial features — personal stories, elevated typography,
            and print you&apos;ll want on your coffee table.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={SITE_LINKS.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5d0e0e] px-8 py-3 font-nav text-xs font-bold tracking-[0.2em] text-white uppercase shadow-sm transition hover:bg-burgundy"
            >
              SHOP MAGAZINE <span aria-hidden>›</span>
            </a>
            <Link
              to="/shop/magazine"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#5d0e0e] bg-white/80 px-8 py-3 font-nav text-xs font-bold tracking-[0.2em] text-[#5d0e0e] uppercase transition hover:bg-white"
            >
              VIEW SAMPLES <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <div className="mx-auto max-w-md rounded-[28px] border border-black/10 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-black/5 pb-3 font-nav text-[10px] font-semibold tracking-wide text-black/50">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2">omag</span>
            </div>
            <img
              src="/work/magazine/mockup3.jpg"
              alt="O'Mag cover mockup"
              className="mt-3 w-full rounded-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-[#4f0f0f] to-[#5d0e0e] px-4 py-16 text-cream md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="font-nav text-[11px] font-semibold tracking-[0.35em] text-white/55 uppercase">
                O&apos;Mag
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-[1.15] tracking-tight text-white md:text-[2.35rem]">
                Why Choose O&apos;Mag?
              </h2>
              <p className="mt-4 font-serif text-lg leading-relaxed text-white/88">
                It&apos;s the difference between a photo dump and a story — spreads that breathe, chapters
                that flow, and a finished piece that feels unmistakably yours.
              </p>
              <ul className="mt-6 space-y-3 font-serif text-base leading-snug text-white/90">
                {WHY_BULLETS.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 font-nav text-white/70" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SITE_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-nav text-[11px] font-bold tracking-[0.2em] text-[#5d0e0e] uppercase shadow-md transition hover:bg-cream"
                >
                  Watch on YouTube
                </a>
                <Link
                  to="/shop/magazine"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-nav text-[11px] font-bold tracking-[0.2em] text-white uppercase transition hover:bg-white/10"
                >
                  Browse samples
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <figure className="group relative overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl ring-1 ring-black/40">
                <span className="absolute left-4 top-4 z-20 rounded-full bg-black/55 px-3 py-1 font-nav text-[10px] font-semibold tracking-widest text-white/90 uppercase backdrop-blur-sm">
                  How it works
                </span>
                <a
                  href={SITE_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 top-4 z-20 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 font-nav text-[10px] font-bold tracking-wide text-[#5d0e0e] shadow-md transition hover:bg-white"
                >
                  Full tour <span aria-hidden>→</span>
                </a>

                <div className="relative aspect-video w-full bg-[#1a0505]">
                  {reduceMotion ? (
                    <img
                      src="/how-it-works/how-it-works.png"
                      alt="Illustrated overview of the O'Mag design process"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      className="h-full w-full object-cover"
                      src="/brand/omag-section-loop.mp4"
                      poster="/how-it-works/how-it-works.png"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Animated preview showing how O'Mag layouts and print come together"
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                    aria-hidden
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 z-10 px-5 pb-4 pt-10 text-left">
                  <p className="font-serif text-lg text-white drop-shadow md:text-xl">How O&apos;Mag works</p>
                  <p className="mt-1 max-w-prose font-serif text-sm text-white/80 drop-shadow md:text-base">
                    A looping look at layout, pacing, and print-ready finishing — open YouTube for the
                    full walkthrough with narration.
                  </p>
                </figcaption>
              </figure>
              <p className="mt-3 text-center font-nav text-[11px] tracking-wide text-white/55 lg:text-right">
                Preview loops automatically · Muted for a calm first impression
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5d0e0e] px-4 pb-16 pt-6 text-cream md:px-8">
        <h2 className="text-center font-serif text-3xl tracking-[0.12em] text-cream md:text-4xl">SAMPLES</h2>
        <div className="mx-auto mt-8 flex max-w-5xl items-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white transition hover:bg-white/20 md:inline-flex"
            aria-label="Previous sample"
          >
            ‹
          </button>
          <div className="grid flex-1 grid-cols-3 gap-3 md:gap-5">
            {[a, b, c].map((s) => (
              <a
                key={`${s.src}-${s.title}`}
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-sm border border-white/10 bg-black/20 shadow-lg"
              >
                <img src={s.src} alt={s.title} className="aspect-[3/4] w-full object-cover" loading="lazy" />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white transition hover:bg-white/20 md:inline-flex"
            aria-label="Next sample"
          >
            ›
          </button>
        </div>
        <div className="mx-auto mt-6 flex justify-center gap-6 md:hidden">
          <button type="button" onClick={prev} className="text-white underline" aria-label="Previous">
            Prev
          </button>
          <button type="button" onClick={next} className="text-white underline" aria-label="Next">
            Next
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <h2 className="text-center font-serif text-3xl text-[#5d0e0e] md:text-4xl">How it Works?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center font-serif text-burgundy/80">
          From order to doorstep — a simple, guided flow.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-nav text-xs font-bold tracking-[0.25em] text-[#5d0e0e]/70">{s.n}</p>
              <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-md bg-[#5d0e0e] text-cream shadow-md">
                <span className="font-serif text-2xl">✦</span>
              </div>
              <h3 className="mt-4 font-nav text-xs font-bold tracking-[0.14em] text-[#5d0e0e]">{s.title}</h3>
              <p className="mt-2 font-serif text-sm leading-relaxed text-burgundy/80">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-burgundy/10 bg-white/70 px-4 py-16 md:px-8">
        <h2 className="text-center font-serif text-3xl text-[#5d0e0e]">What our client&apos;s say...</h2>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative rounded-md border-2 border-dashed border-white bg-[#5d0e0e] px-8 py-10 text-center text-cream shadow-lg">
            <blockquote className="font-serif text-lg italic leading-relaxed md:text-xl">
              &ldquo;Shristi beautifully captured our love story in the O&apos;Mag. It brought tears to my
              wife&apos;s eyes on our anniversary! The design, quality, and service were top-notch.&rdquo;
            </blockquote>
            <p className="mt-6 font-nav text-xs font-semibold tracking-[0.2em] text-cream/80 uppercase">
              — Amit &amp; Jyoti
            </p>
            <img
              src="/brand/founder-shristi.png"
              alt=""
              className="absolute -bottom-6 right-6 h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-20">
        <h2 className="text-center font-serif text-3xl text-[#5d0e0e]">FAQ&apos;s - Everything You Need to Know</h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-serif text-burgundy/80">
          Quick answers to common questions about timelines, revisions, and customization.
        </p>
        <div className="mt-8 space-y-3">
          {FAQS.map((q, idx) => (
            <details
              key={q}
              className="group rounded-sm border border-burgundy/15 bg-white/80 px-4 py-3 shadow-sm open:bg-white"
            >
              <summary className="cursor-pointer list-none font-serif text-lg text-burgundy marker:content-none">
                <span className="font-nav text-xs font-bold text-burgundy/50">{String(idx + 1).padStart(2, '0')}</span>{' '}
                {q}
              </summary>
              <p className="mt-2 border-t border-burgundy/10 pt-2 font-serif text-sm text-burgundy/75">
                Reach us on{' '}
                <a className="underline" href={SITE_LINKS.email}>
                  email
                </a>{' '}
                or{' '}
                <a className="underline" href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>{' '}
                — we&apos;ll share the detailed answer for this topic.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-burgundy/10 bg-white/80 px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-[#5d0e0e]">Custom Magazine</h2>
            <p className="mt-2 font-serif text-3xl text-burgundy">₹ 11,000.00</p>
            <p className="mt-1 text-amber-500" aria-label="5 star rating">
              ★★★★★
            </p>
            <p className="mt-4 font-nav text-xs font-semibold tracking-wide text-burgundy/70">
              EASY UPLOAD · PROFESSIONAL EDITING · HIGH QUALITY PAPER · FAST DELIVERY
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <label className="font-nav text-[10px] font-bold tracking-wide text-burgundy/60 uppercase">
                Pages
                <select className="mt-1 w-full rounded border border-burgundy/20 bg-white px-2 py-2 font-sans text-sm text-burgundy">
                  <option>12 pages</option>
                  <option>16 pages</option>
                  <option>20 pages</option>
                  <option>24 pages</option>
                </select>
              </label>
              <label className="font-nav text-[10px] font-bold tracking-wide text-burgundy/60 uppercase">
                Type
                <select className="mt-1 w-full rounded border border-burgundy/20 bg-white px-2 py-2 font-sans text-sm text-burgundy">
                  <option>Wedding</option>
                  <option>Anniversary</option>
                  <option>Gift</option>
                </select>
              </label>
            </div>
            <p className="mt-4 font-serif text-sm text-burgundy/75">A4 size (21.0 × 29.7 cm)</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-sm bg-[#5d0e0e] px-4 py-3 font-nav text-[10px] font-bold tracking-[0.2em] text-white uppercase"
              >
                Add to cart
              </a>
              <a
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-sm bg-om-gold px-4 py-3 font-nav text-[10px] font-bold tracking-[0.2em] text-[#310B0B] uppercase"
              >
                Buy now
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 font-nav text-[10px] font-bold tracking-[0.18em] text-white uppercase"
              >
                Personalize
              </Link>
              <a
                href={SITE_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-sm bg-emerald-600 px-4 py-2.5 font-nav text-[10px] font-bold tracking-[0.18em] text-white uppercase"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-burgundy/10 shadow-lg">
            <img
              src="/work/magazine/cover.jpg"
              alt="Custom magazine product"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-burgundy/10 pt-10 text-center">
          <p className="font-serif text-xl text-[#5d0e0e]">Peek Inside O&apos;Mag</p>
          <p className="mx-auto mt-3 max-w-2xl font-serif text-burgundy/80">
            Every flip is meant to feel like a story unfolding — emotional, intentional, and beautifully
            printed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center md:px-8">
        <ChevronPillLink href={SITE_LINKS.etsy} external>
          Shop magazine
        </ChevronPillLink>
      </section>
    </div>
  )
}
