import { Link } from 'react-router-dom'
import { invitationVideoItems } from '../../data/workGallery.js'
import { SITE_LINKS } from '../../constants/site.js'

/**
 * Home teaser — motion invites + link into full portfolio.
 */
export function PortfolioPreviewSection() {
  return (
    <section className="border-y border-burgundy/10 bg-[#faf7f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-nav text-[11px] font-semibold tracking-[0.32em] text-burgundy/55 uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-burgundy md:text-[2.35rem]">
            Motion invitations &amp; print magic
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-burgundy/80">
            A few of our cinematic invite reels — each crafted to match the couple&apos;s story, palette, and
            celebration.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {invitationVideoItems.map((item, i) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-lg border border-burgundy/12 bg-white shadow-md ring-1 ring-black/[0.03]"
            >
              <div className="relative aspect-video bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={item.src}
                  poster={item.poster}
                  controls
                  playsInline
                  preload="metadata"
                  muted={i > 0}
                  aria-label={`Preview — ${item.title}`}
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="font-serif text-lg font-semibold text-burgundy">{item.title}</h3>
                <p className="mt-1 font-serif text-sm text-burgundy/70">{item.tagline}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/work"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy bg-burgundy px-10 py-3.5 font-nav text-xs font-bold tracking-[0.2em] text-cream uppercase shadow-sm transition hover:bg-burgundy-deep"
          >
            View full portfolio
          </Link>
          <a
            href={SITE_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy/30 bg-transparent px-8 py-3.5 font-nav text-xs font-bold tracking-[0.18em] text-burgundy uppercase transition hover:border-burgundy hover:bg-white"
          >
            YouTube channel
          </a>
        </div>
      </div>
    </section>
  )
}
