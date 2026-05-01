import { useId, useState } from 'react'
import { CLIENT_TESTIMONIALS } from '../../data/testimonials.js'

const navBtnClass =
  'flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-[#4A0404]/20 bg-white/90 text-xl leading-none text-[#4A0404]/55 shadow-sm transition hover:border-[#4A0404]/35 hover:bg-white hover:text-[#4A0404] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A0404]/40 sm:h-11 sm:w-11 md:h-12 md:w-12'

/**
 * Home “What Our Clients Say” — cycles through every quote in {@link CLIENT_TESTIMONIALS}.
 */
export function HomeTestimonialsCarousel() {
  const carouselId = useId()
  const labelId = `${carouselId}-label`
  const [index, setIndex] = useState(0)
  const total = CLIENT_TESTIMONIALS.length
  const active = CLIENT_TESTIMONIALS[index]

  const goPrev = () => {
    setIndex((i) => (i - 1 + total) % total)
  }

  const goNext = () => {
    setIndex((i) => (i + 1) % total)
  }

  return (
    <div
      className="relative z-10 mx-auto mt-8 max-w-5xl rounded-t-[1.25rem] bg-[#F5F5F0] px-4 py-10 text-[#4A0404] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] sm:mt-10 sm:rounded-t-[1.75rem] sm:px-6 sm:py-12 md:px-10 md:py-14"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="sr-only">
        Client testimonials carousel. Use previous and next buttons or dots to change slides.
      </p>
      <div className="flex min-w-0 items-stretch gap-2 sm:gap-3 md:gap-5">
        <button type="button" className={navBtnClass} aria-label="Previous testimonial" onClick={goPrev}>
          ‹
        </button>
        <div className="min-w-0 flex-1 px-0 sm:px-1 md:px-4">
          <blockquote
            key={active.id}
            className="text-center font-serif text-lg italic leading-relaxed text-pretty sm:text-xl md:text-2xl"
          >
            &ldquo;{active.body}&rdquo;
          </blockquote>
          <p className="mt-8 text-center font-nav text-xs font-semibold tracking-[0.22em] text-[#4A0404]/70 uppercase">
            — {active.name}, {active.place}
          </p>
          <p className="sr-only" aria-live="polite">
            Slide {index + 1} of {total}
          </p>
        </div>
        <button type="button" className={navBtnClass} aria-label="Next testimonial" onClick={goNext}>
          ›
        </button>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9" aria-label="Testimonial slides">
        {CLIENT_TESTIMONIALS.map((q, i) => (
          <button
            key={q.id}
            type="button"
            aria-label={`Testimonial ${i + 1} of ${total}`}
            aria-current={i === index ? 'true' : undefined}
            className={`h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3 ${
              i === index ? 'scale-110 bg-[#4A0404]' : 'bg-[#4A0404]/25 hover:bg-[#4A0404]/45'
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
