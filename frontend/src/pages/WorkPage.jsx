import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { magazineGalleryItems, workGalleryTabOptions } from '../data/workGallery.js'
import { ImageLightbox } from '../components/work/ImageLightbox.jsx'
import { publicUrl } from '../utils/publicUrl.js'

/** FAQ — ordering, customization, payment, and delivery (Our Work page). */
const WORK_FAQS = [
  {
    question: 'What can I order from the shop?',
    answer:
      'You can explore wedding invitation suites, stationery, celebration designs, and more — all customizable as per your needs.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Browse a category, select a design you like, and connect with us via WhatsApp or inquiry to get started.',
  },
  {
    question: 'Are all designs customizable?',
    answer:
      'Yes, every design can be personalized with your details, colors, and preferences. We also offer fully custom designs from scratch.',
  },
  {
    question: 'What is the payment process?',
    answer:
      'We take a 50% advance to begin your design. The remaining 50% is paid after you approve the final design, before delivery.',
  },
  {
    question: 'What is the typical timeline?',
    answer:
      'Timelines vary by project, but most designs are completed within a few working days after receiving all details.',
  },
  {
    question: 'Will I get to see a preview before final delivery?',
    answer: 'Yes, a design preview is shared for your approval before final delivery or printing.',
  },
  {
    question: 'Can I request changes after preview?',
    answer: 'Yes, revisions are included to ensure the design matches your expectations.',
  },
  {
    question: 'Do you offer digital and printed designs?',
    answer:
      'Yes, depending on the product, we offer digital files and/or printed designs. We’ll guide you based on your requirement.',
  },
  {
    question: 'Can I request urgent orders?',
    answer:
      'Yes, we accommodate urgent requests whenever possible. Please contact us on WhatsApp to check availability.',
  },
  {
    question: 'How do I contact you for queries or support?',
    answer: 'You can reach us easily via WhatsApp for the fastest response.',
  },
]

/** Work — hero, categorized print archive with lightbox. */
export function WorkPage() {
  const { hash, pathname } = useLocation()
  const navigate = useNavigate()
  const [lightboxIndex, setLightboxIndex] = useState(/** @type {number | null} */ (null))
  /** Avoid repeated `scrollIntoView` when the same hash effect runs more than once. */
  const lastArchiveScrollHashRef = useRef('')

  /** Active filter — derived from URL hash so deep links and tab clicks stay in sync without effect setState. */
  const activeTabId = useMemo(() => {
    const raw = hash.replace(/^#/, '')
    if (!raw) return 'all'
    return workGalleryTabOptions.some((t) => t.id === raw) ? raw : 'all'
  }, [hash])

  /** Strip invalid `#fragment` from the URL (keep valid tab ids only). */
  useEffect(() => {
    const raw = hash.replace(/^#/, '')
    if (!raw) return
    if (!workGalleryTabOptions.some((t) => t.id === raw)) {
      navigate('/work', { replace: true })
    }
  }, [hash, navigate])

  /** Scroll to the masonry grid once per distinct hash (deep links + in-page tab changes). */
  useEffect(() => {
    if (pathname !== '/work') {
      lastArchiveScrollHashRef.current = ''
      return
    }
    if (!hash) {
      lastArchiveScrollHashRef.current = ''
      return
    }
    if (lastArchiveScrollHashRef.current === hash) return
    lastArchiveScrollHashRef.current = hash
    const el = document.getElementById('archive')
    if (!el) return
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  const selectTab = useCallback(
    /** @param {string} tabId */
    (tabId) => {
      navigate(tabId === 'all' ? '/work' : `/work#${tabId}`, { replace: true })
    },
    [navigate],
  )

  const filteredItems = useMemo(() => {
    if (activeTabId === 'all') return magazineGalleryItems
    return magazineGalleryItems.filter((item) => item.category === activeTabId)
  }, [activeTabId])

  const lightboxItems = useMemo(
    () => filteredItems.map((item) => ({ src: publicUrl(item.src), alt: item.title })),
    [filteredItems],
  )

  /** Close lightbox when the visible grid changes (defer avoids cascading-render lint). */
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setLightboxIndex(null))
    return () => window.cancelAnimationFrame(id)
  }, [activeTabId])

  return (
    <div className="bg-burgundy text-cream">
      <div
        id="work-hero"
        className="relative border-b border-om-gold/25 bg-[linear-gradient(rgba(69,2,1,0.58),rgba(69,2,1,0.58)),url(/brand/dark-texture.jpg)] bg-cover bg-center py-16 md:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-om-gold/35 to-transparent" aria-hidden />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h1 className="font-serif text-[2.1rem] font-semibold leading-tight text-white sm:text-4xl md:text-[2.85rem]">
            Explore Our Work
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-base leading-relaxed text-cream/88 md:text-lg md:leading-relaxed">
            A collection of designs we&apos;ve created - each one crafted with emotion, detail, and purpose.
          </p>
        </div>
      </div>

      <div id="archive" className="scroll-mt-24 bg-om-page py-16 text-burgundy md:scroll-mt-28 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div
            className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3"
            role="tablist"
            aria-label="Filter portfolio by category"
          >
            {workGalleryTabOptions.map((tab) => {
              const selected = activeTabId === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`rounded-full border px-4 py-2 font-nav text-[10px] font-semibold tracking-[0.14em] uppercase transition md:px-5 md:text-[11px] ${
                    selected
                      ? 'border-burgundy bg-burgundy text-cream shadow-md'
                      : 'border-burgundy/25 bg-white text-burgundy/85 hover:border-burgundy/45 hover:bg-cream/30'
                  }`}
                  onClick={() => selectTab(tab.id)}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {filteredItems.length === 0 ? (
            <p className="text-center font-serif text-burgundy/70 md:text-lg" role="status">
              Nothing in this category yet — try &ldquo;All&rdquo; to see the full collection.
            </p>
          ) : (
            <div
              className="columns-1 gap-5 sm:columns-2 lg:columns-3"
              role="tabpanel"
              aria-label={`Gallery — ${workGalleryTabOptions.find((t) => t.id === activeTabId)?.label ?? 'All'}`}
            >
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className="group mb-5 w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-xl border border-burgundy/10 bg-white text-left shadow-md ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                  aria-label={`View large — ${item.title}`}
                  onClick={() => setLightboxIndex(idx)}
                >
                  <span className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2efe8]">
                    <img
                      src={publicUrl(item.src)}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
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
          )}
        </div>
      </div>

      {/* FAQ — ordering, timelines, previews */}
      <section id="faq" className="scroll-mt-24 border-t border-burgundy/10 bg-om-page py-14 text-burgundy md:scroll-mt-28 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center font-serif text-xl tracking-tight text-balance sm:text-2xl md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-[0.95rem] leading-relaxed text-burgundy/78 text-pretty sm:text-base">
            Common questions about ordering, customization, timelines, and how we work with you.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center font-serif text-sm text-burgundy/65 text-pretty">
            Tap a question to expand. For anything else, reach us on WhatsApp.
          </p>
          <div className="mx-auto mt-10 max-w-3xl space-y-2">
            {WORK_FAQS.map((item, idx) => (
              <details
                key={`work-faq-${idx}-${item.question.slice(0, 24)}`}
                className="group rounded-sm border border-burgundy/12 bg-white/90 px-4 py-3 shadow-sm open:bg-white md:px-5"
              >
                <summary className="flex cursor-pointer list-none items-start gap-2 font-serif text-[0.95rem] marker:content-none sm:gap-3 sm:text-base md:text-lg">
                  <span className="mt-0.5 shrink-0 font-serif text-base tabular-nums text-burgundy/35 sm:text-lg md:text-xl">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="min-w-0 flex-1 text-left leading-snug">{item.question}</span>
                </summary>
                <p className="mt-3 border-t border-burgundy/10 pt-3 pl-9 font-serif text-sm leading-relaxed text-burgundy/78 text-pretty sm:pl-[2.85rem] md:pl-[3.1rem] md:text-[0.95rem]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}
