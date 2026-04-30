import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { magazineGalleryItems } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'
import { ImageLightbox } from '../components/work/ImageLightbox.jsx'

/** Work — hero, print archive with lightbox, commission CTA. */
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
          <h1 className="font-serif text-[2.1rem] font-semibold leading-tight text-white sm:text-4xl md:text-[2.85rem]">
            Explore our work
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-base leading-relaxed text-cream/88 md:text-lg md:leading-relaxed">
            Magazines, motion invitations, and stationery — each piece composed with editorial care and
            print-ready precision.
          </p>
        </div>
      </div>

      {/* Archive + masonry + lightbox */}
      <div id="archive" className="scroll-mt-24 bg-om-page py-16 text-burgundy md:scroll-mt-28 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
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
        </div>
      </div>

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
