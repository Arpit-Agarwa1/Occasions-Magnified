import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getWhatsAppContactUrl, SITE_LINKS } from '../../constants/site.js'
import { invitationVideoItems } from '../../data/workGallery.js'

/**
 * @param {{ src: string; poster: string; title: string; tagline: string; reduceMotion: boolean }} props
 */
const HighlightVideoCard = memo(function HighlightVideoCard({ src, poster, title, tagline, reduceMotion }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    setMuted(true)

    // Try to play; some browsers may still block, so we update state from events too.
    el.play().catch(() => {})
  }, [src])

  const toggleMuted = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    const next = !el.muted
    el.muted = next
    setMuted(next)
  }, [])

  const togglePlay = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [])

  const onPlay = useCallback(() => setPaused(false), [])
  const onPause = useCallback(() => setPaused(true), [])
  const onVolumeChange = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    setMuted(el.muted)
  }, [])

  return (
    <article className="w-full max-w-[min(100%,300px)] overflow-hidden rounded-lg border border-burgundy/12 bg-white shadow-md ring-1 ring-black/[0.03] md:max-w-[min(100%,232px)] lg:max-w-[min(100%,248px)] xl:max-w-[min(100%,268px)]">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
        {reduceMotion ? (
          <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        ) : (
          <>
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onPlay={onPlay}
              onPause={onPause}
              onVolumeChange={onVolumeChange}
              aria-label={`Highlight preview — ${title}`}
            />
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white/95 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label={paused ? 'Play video' : 'Pause video'}
              >
                <span className="font-nav text-xs font-semibold">{paused ? '▶' : '❚❚'}</span>
              </button>
              <button
                type="button"
                onClick={toggleMuted}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white/95 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label={muted ? 'Unmute video' : 'Mute video'}
              >
                <span className="font-nav text-xs font-semibold">{muted ? '🔇' : '🔊'}</span>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="px-4 py-3">
        <h3 className="font-serif text-lg font-semibold text-burgundy">{title}</h3>
        <p className="mt-1 font-serif text-sm text-burgundy/70">{tagline}</p>
      </div>
    </article>
  )
})

/**
 * Home — custom motion invitations as muted autoplay highlight loops (like story highlights).
 */
export function PortfolioPreviewSection() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const items = useMemo(() => invitationVideoItems, [])

  return (
    <section className="border-y border-burgundy/10 bg-[#faf7f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-burgundy md:text-[2.35rem]">
            Timeless design for your celebration
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-burgundy/80">
            Magazine keepsakes, save-the-dates, and welcome boards—each crafted to reflect your story with elegance and
            care.
          </p>
        </div>

        <div className="mt-12 grid justify-items-center gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {items.map((item) => (
            <HighlightVideoCard
              key={item.src}
              src={item.src}
              poster={item.poster}
              title={item.title}
              tagline={item.tagline}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={getWhatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy bg-burgundy px-10 py-3.5 font-nav text-sm font-bold tracking-wide text-cream shadow-sm transition hover:bg-burgundy-deep md:text-base"
          >
            Start Your Custom Design
          </a>
          <a
            href={SITE_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-burgundy/30 bg-white px-8 py-3.5 font-nav text-sm font-bold tracking-wide text-burgundy transition hover:border-burgundy md:text-base"
          >
            Visit Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
