import { magazineGalleryItems } from '../data/workGallery.js'
import { SITE_LINKS } from '../constants/site.js'
import { ChevronPillLink } from '../components/ui/ChevronPillLink.jsx'

const GRID = magazineGalleryItems.slice(0, 9)

/** Shop magazine grid — 3×3 mock with first-row labels + marble field. */
export function MagazineShopPage() {
  return (
    <div className="om-marble-bg min-h-[70vh] pb-20 pt-8 text-burgundy md:pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h1 className="text-center font-serif text-3xl text-[#310B0B] md:text-4xl">Shop magazine</h1>
        <p className="mx-auto mt-3 max-w-2xl text-center font-serif text-burgundy/80">
          Browse O&apos;Mag cover directions — each piece is bespoke; Etsy checkout handles payment and
          shipping details.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GRID.map((item, idx) => (
            <li key={item.src}>
              <a
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-sm bg-white shadow-md transition hover:shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
                {idx < 3 ? (
                  <p className="bg-[#310B0B] py-2 text-center font-nav text-[10px] font-semibold tracking-wide text-white uppercase">
                    Kids Magazine (12 Pager)
                  </p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <ChevronPillLink href={SITE_LINKS.etsy} external>
            Shop magazine
          </ChevronPillLink>
        </div>
      </div>
    </div>
  )
}
