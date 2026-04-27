/**
 * Invitation film — poster frame, native controls, editorial caption block.
 * @param {{ src: string; title: string; poster: string; tagline: string; tone?: 'light' | 'dark'; className?: string }} props
 */
export function MotionInviteVideoCard({ src, title, poster, tagline, tone = 'light', className = '' }) {
  const isDark = tone === 'dark'
  const footer = isDark
    ? 'border-white/10 bg-black/55 text-cream backdrop-blur-md'
    : 'border-burgundy/10 bg-gradient-to-b from-white to-[#faf7f4] text-burgundy'
  const titleCls = isDark ? 'text-white' : 'text-burgundy'
  const bodyCls = isDark ? 'text-cream/80' : 'text-burgundy/75'

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-black/10 shadow-[0_24px_55px_-30px_rgba(0,0,0,0.45)] ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_60px_-28px_rgba(0,0,0,0.55)] ${className}`.trim()}
    >
      <div
        className={`relative aspect-[9/16] w-full overflow-hidden ${isDark ? 'bg-black' : 'bg-[#1a0505]'}`}
      >
        <video
          className="absolute inset-0 h-full w-full object-contain md:object-cover"
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={`Motion invitation — ${title}`}
        />
      </div>
      <div className={`border-t px-4 py-4 md:px-5 md:py-5 ${footer}`}>
        <h3 className={`font-serif text-xl font-semibold md:text-2xl ${titleCls}`}>{title}</h3>
        <p className={`mt-1 font-serif text-sm leading-relaxed md:text-base ${bodyCls}`}>{tagline}</p>
      </div>
    </article>
  )
}
