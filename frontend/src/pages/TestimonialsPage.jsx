import { CLIENT_TESTIMONIALS } from '../data/testimonials.js'

/** Client quotes — masonry-style list with serif blockquotes (same source as home carousel). */
export function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
      <h1 className="text-center font-serif text-4xl text-burgundy md:text-5xl">Testimonials</h1>
      <p className="mt-4 text-center font-serif text-lg text-burgundy/75">
        Words from clients who trusted us with their milestones.
      </p>
      <ul className="mt-12 space-y-12">
        {CLIENT_TESTIMONIALS.map((q) => (
          <li key={q.id} className="rounded-sm border border-burgundy/10 bg-cream/40 p-8 shadow-sm">
            <blockquote className="font-serif text-xl italic leading-relaxed text-burgundy/95">
              &ldquo;{q.body}&rdquo;
            </blockquote>
            <p className="mt-4 font-sans text-xs font-semibold tracking-[0.2em] text-burgundy/70 uppercase">
              — {q.name}, {q.place}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
