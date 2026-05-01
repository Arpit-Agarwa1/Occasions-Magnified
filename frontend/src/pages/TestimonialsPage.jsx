/** Verified client quotes — name + city for attribution. */
const quotes = [
  {
    id: 'nishant-pune',
    body: "My wife loved the magazine! It was perfect. It is now a beautiful memory for us and those who look at it. It was very well made, especially in the short time we had. Keep up the good work!",
    name: 'Nishant Pathak',
    place: 'Pune',
  },
  {
    id: 'divya-jaipur',
    body: 'Our wedding invite turned out exactly how we wanted — simple, classy, and very personal. We got so many compliments!',
    name: 'Divya',
    place: 'Jaipur',
  },
  {
    id: 'megha-hyderabad',
    body: "I wasn't sure how it would turn out initially, but the final result completely exceeded my expectations.",
    name: 'Megha',
    place: 'Hyderabad',
  },
  {
    id: 'kunal-studio-ramayan',
    body: 'Photo magazine bahut hi sundar bani hai. Design aur presentation dono hi laajawab hain. Bahut bahut dhanyavaad 😊',
    name: 'Kunal',
    place: 'Studio Ramayan',
  },
  {
    id: 'kiran-jaipur',
    body: "I got my magazine and wedding invitation designed by Occasions Magnified, and I absolutely loved their work. The designs were elegant, creative, and exactly how I imagined.",
    name: 'Kiran',
    place: 'Jaipur',
  },
]

/** Client quotes — masonry-style list with serif blockquotes. */
export function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
      <h1 className="text-center font-serif text-4xl text-burgundy md:text-5xl">Testimonials</h1>
      <p className="mt-4 text-center font-serif text-lg text-burgundy/75">
        Words from clients who trusted us with their milestones.
      </p>
      <ul className="mt-12 space-y-12">
        {quotes.map((q) => (
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
