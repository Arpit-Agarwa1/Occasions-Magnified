import { SITE_LINKS } from '../constants/site.js'

/** O'Mag product story and process imagery from brand assets. */
export function OmagPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-4xl text-burgundy md:text-5xl">O&apos;Mag</h1>
        <p className="mt-4 font-serif text-lg text-burgundy/80">
          Custom magazines for gifts and milestones — editorial layout, personal narratives, and
          print-ready finesse.
        </p>
        <a
          href={SITE_LINKS.etsy}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-burgundy px-8 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-deep"
        >
          Shop on Etsy
        </a>
      </header>

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-start">
        <figure className="overflow-hidden rounded-sm shadow-lg">
          <img
            src="/how-it-works/how-it-works.png"
            alt="How O'Mag works — overview graphic"
            className="h-auto w-full"
            width={900}
            height={700}
            loading="lazy"
          />
        </figure>
        <figure className="overflow-hidden rounded-sm shadow-lg">
          <img
            src="/how-it-works/working-omag.jpg"
            alt="Behind the scenes of creating an O'Mag issue"
            className="h-auto w-full object-cover"
            width={900}
            height={700}
            loading="lazy"
          />
        </figure>
      </div>

      <section className="mt-16 rounded-sm bg-cream/60 p-8 md:p-12">
        <h2 className="font-serif text-2xl text-burgundy">How it comes together</h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-burgundy/85">
          <li>We gather your stories, photos, and the tone you want to keep forever.</li>
          <li>Layouts and typography are crafted to read like a magazine — not a photo book.</li>
          <li>You review proofs; we refine until it feels unmistakably yours.</li>
        </ol>
      </section>
    </div>
  )
}
