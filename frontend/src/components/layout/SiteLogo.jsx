/**
 * Default height scale for the brand mark (Tailwind classes on the `<img>`).
 * Edit this one string to resize the logo everywhere `SiteLogo` is used.
 */
export const SITE_LOGO_IMG_CLASSES =
  'h-[4.5rem] w-auto shrink-0 sm:h-20 md:h-[5.5rem] lg:h-24 xl:h-[6.75rem] 2xl:h-[7.25rem]'

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
        className={`${SITE_LOGO_IMG_CLASSES} ${inverted ? 'brightness-0 invert' : ''} ${imgClassName}`.trim()}
        width={360}
        height={108}
        decoding="async"
        loading="eager"
      />
    </span>
  )
}
