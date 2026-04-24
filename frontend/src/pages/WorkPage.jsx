const gallery = [
  { src: '/services/e-invites.png', alt: 'E-invites for every occasion' },
  { src: '/services/5.png', alt: 'Invitation design sample' },
  { src: '/services/6.png', alt: 'Stationery design sample' },
  { src: '/services/7.png', alt: 'Celebration design sample' },
  { src: '/services/8.png', alt: 'Custom print design sample' },
]

/** Portfolio grid using exported service artwork. */
export function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="font-sans text-xs font-semibold tracking-[0.35em] text-burgundy/70 uppercase md:text-sm">
          Our work
        </h1>
        <p className="mt-3 font-serif text-4xl text-burgundy md:text-5xl">OUR WORK</p>
        <p className="mt-4 font-serif text-lg text-burgundy/80">
          A glimpse of invitation suites, celebration pieces, and bespoke layouts — each project
          shaped around your story.
        </p>
      </header>

      <div className="mt-12 overflow-hidden rounded-sm shadow-lg">
        <img
          src="/layout/explore-work.jpg"
          alt="Collage of Occasions Magnified design work"
          className="h-auto w-full object-cover"
          width={1200}
          height={640}
          loading="lazy"
        />
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map(({ src, alt }) => (
          <li
            key={src}
            className="overflow-hidden rounded-sm border border-burgundy/10 bg-white shadow-sm transition hover:shadow-md"
          >
            <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  )
}
