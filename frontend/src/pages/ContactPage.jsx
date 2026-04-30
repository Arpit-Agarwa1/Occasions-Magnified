import { SvgBrandEtsy, SvgBrandInstagram, SvgBrandLinkedIn, SvgBrandYoutube } from '../components/icons/SocialBrandIcons.jsx'
import { getWhatsAppContactUrl, SITE_EMAIL, SITE_INSTAGRAM_HANDLE, SITE_LINKS, SITE_PHONE_DISPLAY } from '../constants/site.js'

/** Minimal stroke icons — inline so we avoid extra bundle weight. */
function IconMail({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm2 2 8 5 8-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPhone({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 4h2l1.5 5-2 1a12 12 0 005 5l1-2 5 1.5v2a3 3 0 01-3 3 18 18 0 01-11-18 3 3 0 013-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWhatsApp({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/**
 * Contact — hero + reply note, WhatsApp & email CTAs, Get in Touch channels, social & shop links.
 * Matches studio typography (font-nav labels, serif body) and om-page cream shell.
 */
export function ContactPage() {
  const waUrl = getWhatsAppContactUrl()

  return (
    <div className="bg-om-page text-burgundy">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-burgundy/10 px-4 pb-14 pt-14 md:px-8 md:pb-20 md:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(69,2,1,0.06)_0%,transparent_42%,rgba(201,162,77,0.06)_100%)]"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-[clamp(1.85rem,5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-burgundy">
            Tell Us About Your Occasion
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-serif text-lg leading-relaxed text-burgundy/82 md:text-xl md:leading-relaxed">
            Whether it&apos;s a wedding, a gift, or a special celebration — share your idea with us and we&apos;ll help
            bring it to life through thoughtful design.
          </p>
          <p className="mx-auto mt-3 max-w-md font-serif text-sm italic text-burgundy/55 md:text-[0.95rem]">
            We usually reply within 24–48 hours on WhatsApp and email.
          </p>
        </div>

        {/* Primary actions */}
        <div className="relative mx-auto mt-12 flex max-w-lg flex-col gap-3 sm:mx-auto sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#128C7E] px-8 py-3.5 font-nav text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(18,140,126,0.65)] transition hover:bg-[#0f7a6e] hover:shadow-[0_14px_36px_-12px_rgba(18,140,126,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2 focus-visible:ring-offset-om-page"
          >
            <IconWhatsApp className="h-5 w-5 shrink-0 text-white/95" />
            Chat on WhatsApp
          </a>
          <a
            href={SITE_LINKS.email}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-burgundy/35 bg-white px-8 py-3.5 font-nav text-sm font-semibold tracking-wide text-burgundy shadow-sm transition hover:border-burgundy/55 hover:bg-cream/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-om-page"
          >
            <IconMail className="h-5 w-5 shrink-0 text-burgundy/80" />
            Email us
          </a>
        </div>
      </section>

      {/* Channel grid */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-16">
        <div className="text-center">
          <p className="font-nav text-xs font-semibold tracking-[0.28em] text-burgundy/50 uppercase">
            All ways to reach us
          </p>
          <div
            className="mx-auto mt-3 flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2 font-nav text-xs font-semibold tracking-[0.22em] text-burgundy/45 uppercase"
            role="group"
            aria-label="Section: Get in Touch"
          >
            <span className="hidden h-px min-w-[2.5rem] flex-1 bg-burgundy/20 sm:block sm:max-w-[4.5rem]" aria-hidden />
            <span className="tracking-[0.35em] text-burgundy/35" aria-hidden>
              ———
            </span>
            <span className="text-burgundy/55">Get in Touch</span>
            <span className="tracking-[0.35em] text-burgundy/35" aria-hidden>
              ———
            </span>
            <span className="hidden h-px min-w-[2.5rem] flex-1 bg-burgundy/20 sm:block sm:max-w-[4.5rem]" aria-hidden />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col rounded-2xl border border-burgundy/12 bg-white p-6 shadow-[0_18px_48px_-28px_rgba(45,2,1,0.18)] ring-1 ring-black/[0.03] transition hover:border-burgundy/22 hover:shadow-[0_22px_52px_-26px_rgba(45,2,1,0.22)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-burgundy text-cream shadow-inner">
              <IconMail className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-nav text-[11px] font-semibold tracking-[0.2em] text-burgundy/55 uppercase">Mail</h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-burgundy/75">
              Share your requirements and we&apos;ll get back to you within 24–48 hours.
            </p>
            <a
              href={SITE_LINKS.email}
              className="mt-3 break-all font-serif text-lg font-medium text-burgundy underline-offset-[6px] transition hover:underline"
            >
              {SITE_EMAIL}
            </a>
          </article>

          <article className="flex flex-col rounded-2xl border border-burgundy/12 bg-white p-6 shadow-[0_18px_48px_-28px_rgba(45,2,1,0.18)] ring-1 ring-black/[0.03] transition hover:border-burgundy/22 hover:shadow-[0_22px_52px_-26px_rgba(45,2,1,0.22)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-burgundy text-cream shadow-inner">
              <IconPhone className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-nav text-[11px] font-semibold tracking-[0.2em] text-burgundy/55 uppercase">Call</h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-burgundy/75">
              Available for calls &amp; messages (India).
            </p>
            <a
              href={SITE_LINKS.phone}
              className="mt-3 font-serif text-lg font-medium tabular-nums text-burgundy underline-offset-[6px] transition hover:underline"
            >
              +91 {SITE_PHONE_DISPLAY}
            </a>
          </article>

          <article className="flex flex-col rounded-2xl border border-burgundy/12 bg-white p-6 shadow-[0_18px_48px_-28px_rgba(45,2,1,0.18)] ring-1 ring-black/[0.03] transition hover:border-burgundy/22 hover:shadow-[0_22px_52px_-26px_rgba(45,2,1,0.22)] sm:col-span-2 lg:col-span-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#128C7E] text-white shadow-inner">
              <IconWhatsApp className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-nav text-[11px] font-semibold tracking-[0.2em] text-burgundy/55 uppercase">Text</h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-burgundy/75">
              Start a quick chat with us for faster responses and easy coordination.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 font-nav text-sm font-semibold text-[#128C7E] underline-offset-4 transition hover:underline"
            >
              Start a chat
              <span aria-hidden>→</span>
            </a>
          </article>
        </div>

        {/* Social & shops */}
        <div className="mt-10 rounded-2xl border border-burgundy/10 bg-white/80 p-6 backdrop-blur-[2px] md:p-8">
          <div className="text-center">
            <p className="font-nav text-[11px] font-semibold tracking-[0.22em] text-burgundy/50 uppercase">
              Social &amp; Shop
            </p>
            <div
              className="mx-auto mt-3 flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2 font-nav text-[11px] font-semibold tracking-[0.2em] text-burgundy/45 uppercase"
              role="group"
              aria-label="Section: Connect and Explore"
            >
              <span className="hidden h-px min-w-[2.5rem] flex-1 bg-burgundy/20 sm:block sm:max-w-[4.5rem]" aria-hidden />
              <span className="tracking-[0.35em] text-burgundy/35" aria-hidden>
                ———
              </span>
              <span className="text-burgundy/55">Connect &amp; Explore</span>
              <span className="tracking-[0.35em] text-burgundy/35" aria-hidden>
                ———
              </span>
              <span className="hidden h-px min-w-[2.5rem] flex-1 bg-burgundy/20 sm:block sm:max-w-[4.5rem]" aria-hidden />
            </div>
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            <li>
              <a
                href={SITE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-burgundy/10 bg-om-page/90 px-4 py-3.5 transition hover:border-om-gold/35 hover:bg-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm">
                  <SvgBrandInstagram className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-nav text-[10px] font-semibold tracking-[0.18em] text-burgundy/50 uppercase">
                    Insta
                  </span>
                  <span className="block truncate font-serif text-base font-medium text-burgundy">{SITE_INSTAGRAM_HANDLE}</span>
                  <span className="block font-serif text-xs text-burgundy/55">
                    Explore our latest designs, reels &amp; creative work
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-burgundy/10 bg-om-page/90 px-4 py-3.5 transition hover:border-burgundy/25 hover:bg-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF0000] text-white shadow-sm">
                  <SvgBrandYoutube className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-nav text-[10px] font-semibold tracking-[0.18em] text-burgundy/50 uppercase">
                    Youtube
                  </span>
                  <span className="block font-serif text-base font-medium text-burgundy">@OccasionsMagnified</span>
                  <span className="block font-serif text-xs text-burgundy/55">
                    Watch motion invites, stories &amp; behind-the-scenes
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-burgundy/10 bg-om-page/90 px-4 py-3.5 transition hover:border-om-gold/35 hover:bg-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy text-cream shadow-sm">
                  <SvgBrandEtsy className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-nav text-[10px] font-semibold tracking-[0.18em] text-burgundy/50 uppercase">
                    Etsy
                  </span>
                  <span className="block font-serif text-base font-medium text-burgundy">Occasions Magnified</span>
                  <span className="block font-serif text-xs text-burgundy/55">
                    Browse ready-to-use designs &amp; place orders easily
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-burgundy/10 bg-om-page/90 px-4 py-3.5 transition hover:border-[#0A66C2]/35 hover:bg-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-sm">
                  <SvgBrandLinkedIn className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-nav text-[10px] font-semibold tracking-[0.18em] text-burgundy/50 uppercase">
                    LinkedIn
                  </span>
                  <span className="block font-serif text-base font-medium text-burgundy">Shristi Jhalani</span>
                  <span className="block font-serif text-xs text-burgundy/55">
                    Founder journey, updates &amp; professional insights
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
