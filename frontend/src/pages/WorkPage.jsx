import { useEffect, useMemo, useState } from 'react'
import { magazineGalleryItems, workGalleryTabOptions } from '../data/workGallery.js'
import { getWhatsAppCustomDesignUrl } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'
import { ImageLightbox } from '../components/work/ImageLightbox.jsx'

/** Work — hero, categorized print archive with lightbox, WhatsApp CTA. */
export function WorkPage() {
  const [activeTabId, setActiveTabId] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeTabId === 'all') return magazineGalleryItems
    return magazineGalleryItems.filter((item) => item.category === activeTabId)
  }, [activeTabId])

  const lightboxItems = useMemo(
    () => filteredItems.map((item) => ({ src: item.src, alt: item.title })),
    [filteredItems],
  )

  useEffect(() => {
    setLightboxIndex(null)
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
                  onClick={() => setActiveTabId(tab.id)}
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
                  <span className="relative block">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full object-contain transition duration-300 group-hover:scale-[1.02] md:object-cover"
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
          )}
        </div>
      </div>

      <div className="border-t border-om-gold/20 bg-gradient-to-b from-burgundy to-burgundy-deep py-14 text-center md:py-16">
        <h2 className="font-serif text-xl font-semibold text-white md:text-2xl">Loved what you see?</h2>
        <div className="mt-8 flex justify-center px-4">
          <ChevronPillLink href={getWhatsAppCustomDesignUrl()} external>
            Start Your Custom Design
          </ChevronPillLink>
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
