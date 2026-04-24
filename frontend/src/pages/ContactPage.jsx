import { SITE_EMAIL, SITE_LINKS, SITE_PHONE_DISPLAY } from '../constants/site.js'

/** Direct contact channels from the brand brief. */
export function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
      <h1 className="text-center font-serif text-4xl text-burgundy md:text-5xl">Contact us</h1>
      <p className="mt-4 text-center font-serif text-lg text-burgundy/80">
        Tell us about your occasion — we will respond as soon as we can.
      </p>

      <dl className="mt-12 space-y-6 rounded-sm border border-burgundy/10 bg-white p-8 shadow-sm md:p-10">
        <div>
          <dt className="font-sans text-xs font-semibold tracking-widest text-burgundy/60 uppercase">
            Email
          </dt>
          <dd className="mt-1">
            <a className="text-lg text-burgundy underline-offset-4 hover:underline" href={SITE_LINKS.email}>
              {SITE_EMAIL}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-sans text-xs font-semibold tracking-widest text-burgundy/60 uppercase">
            Phone
          </dt>
          <dd className="mt-1">
            <a className="text-lg text-burgundy underline-offset-4 hover:underline" href={SITE_LINKS.phone}>
              {SITE_PHONE_DISPLAY}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-sans text-xs font-semibold tracking-widest text-burgundy/60 uppercase">
            Instagram
          </dt>
          <dd className="mt-1">
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-burgundy underline-offset-4 hover:underline"
            >
              @occasions.magnified
            </a>
            <span className="ml-2 text-sm text-burgundy/60">(Invites &amp; stationery)</span>
          </dd>
        </div>
        <div>
          <dt className="font-sans text-xs font-semibold tracking-widest text-burgundy/60 uppercase">
            YouTube
          </dt>
          <dd className="mt-1">
            <a
              href={SITE_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-burgundy underline-offset-4 hover:underline"
            >
              @OccasionsMagnified
            </a>
          </dd>
        </div>
      </dl>
    </div>
  )
}
