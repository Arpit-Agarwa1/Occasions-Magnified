/**
 * Layout footprint for the wordmark (sets nav row height with header `py-0`).
 * Visual size is boosted with `scale` on the `<img>` so the mark reads larger without growing the bar.
 */
export const SITE_LOGO_IMG_CLASSES =
  'h-11 w-auto shrink-0 origin-left sm:h-12 md:h-14 lg:h-16 xl:h-[4.25rem] 2xl:h-20'

/** CSS scale on the img — larger mark without changing the layout box (`h-*` above). */
const SITE_LOGO_VISUAL_SCALE_CLASSES =
  'scale-[1.62] motion-reduce:scale-100 sm:scale-[1.58] md:scale-[1.72] lg:scale-[1.84] xl:scale-[1.92] 2xl:scale-[2]'

/**
 * Hero overlap on home — negative margin must mirror each breakpoint in `SITE_LOGO_IMG_CLASSES`.
 * Header uses `py-0` so bar height equals the logo.
 */
export const SITE_LOGO_NAV_PULL_CLASSES =
  '-mt-11 sm:-mt-12 md:-mt-14 lg:-mt-16 xl:-mt-[4.25rem] 2xl:-mt-20'

/**
 * Occasions Magnified wordmark — isolated so size/invert can be tuned in one place.
 * @param {{ variant?: 'default' | 'inverted'; className?: string; imgClassName?: string }} props
 * - `variant` — `inverted` for dark header bar (white mark).
 * - `className` — optional wrapper span classes.
 * - `imgClassName` — optional extra classes on the image (e.g. max-width caps).
 */
export function SiteLogo({ variant = 'default', className = '', imgClassName = '' }) {
  const inverted = variant === 'inverted'

  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      <img
        src="/brand/logo.png"
        alt="Occasions Magnified"
        className={`${SITE_LOGO_IMG_CLASSES} ${SITE_LOGO_VISUAL_SCALE_CLASSES} ${inverted ? 'brightness-0 invert' : ''} ${imgClassName}`.trim()}
        width={360}
        height={108}
        decoding="async"
        loading="eager"
      />
    </span>
  )
}
