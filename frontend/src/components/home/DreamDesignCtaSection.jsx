import { useCallback, useEffect, useRef, useState } from 'react'

/** Served from `public/brand/services-bg.mp4` (copy of `_extracted/Assets/Services.mp4`). */
const SERVICES_VIDEO_SRC = '/brand/services-bg.mp4'

/**
 * “Your dream design…” band — dark texture by default; Services clip reveals on hover/focus within.
 */
export function DreamDesignCtaSection() {
  const [hovered, setHovered] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const showVideo = hovered && !reduceMotion

  useEffect(() => {
    const v = videoRef.current
    if (!v || reduceMotion) return
    if (showVideo) {
      void v.play().catch(() => {})
    } else {
      v.pause()
      try {
        v.currentTime = 0
      } catch {
        /* ignore seek errors */
      }
    }
  }, [showVideo, reduceMotion])

  /** Keep video active while focus is inside the band (keyboard / screen readers). */
  const handleBlur = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setHovered(false)
  }, [])

  return (
    <section
      className="relative isolate min-h-[min(42vh,400px)] overflow-hidden py-20 text-white md:min-h-[min(46vh,460px)] md:py-28"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={handleBlur}
    >
      {/* Background video — fades in when pointer is over the section */}
      <video
        ref={videoRef}
        className={`pointer-events-none absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-700 ease-out motion-reduce:opacity-0 ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
        src={SERVICES_VIDEO_SRC}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      {/* Texture — oversized so rotation never exposes edges; softens when video plays */}
      <div
        className={`absolute -inset-[18%] z-[1] min-h-[140%] min-w-[140%] bg-cover bg-center transition-opacity duration-700 ease-out ${
          showVideo ? 'opacity-35' : 'opacity-95'
        }`}
        style={{
          backgroundImage: 'url(/brand/dark-texture.jpg)',
          transform: 'rotate(-4deg) scale(1.15)',
        }}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-0 z-[2] transition-colors duration-700 ${
          showVideo ? 'bg-[#4A0404]/65' : 'bg-[#4A0404]/86'
        }`}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-35 mix-blend-soft-light">
        <div
          className="h-full w-full bg-cover bg-center opacity-90"
          style={{
            backgroundImage: 'url(/brand/bg-grid.png)',
            transform: 'rotate(6deg) scale(1.2)',
          }}
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="font-nav text-xl font-bold leading-snug tracking-[0.14em] uppercase sm:text-2xl md:text-[1.65rem]">
          YOUR DREAM DESIGN, JUST A CLICK AWAY
        </h2>
        <p className="mt-5 font-serif text-lg text-white/92 md:text-xl">
          Browse through our past creations and place your custom order easily.
        </p>
      </div>
    </section>
  )
}
