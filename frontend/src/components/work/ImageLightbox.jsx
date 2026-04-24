import { useCallback, useEffect } from 'react'

/**
 * Full-screen image viewer with keyboard support (Escape, arrows).
 * @param {{ items: { src: string; alt: string }[]; index: number | null; onClose: () => void; onNavigate: (i: number) => void }} props
 */
export function ImageLightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null && index >= 0 && index < items.length
  const item = open ? items[index] : null

  const goPrev = useCallback(() => {
    if (index === null || !items.length) return
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null || !items.length) return
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose, goPrev, goNext])

  if (!open || !item) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/0 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 cursor-default bg-black/92"
        aria-label="Close gallery"
        onClick={onClose}
      />
      <div
        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="presentation"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain shadow-2xl"
        />
        <div className="mt-4 flex w-full max-w-lg items-center justify-between gap-4 text-cream">
          <p className="truncate font-nav text-[11px] font-semibold tracking-wide text-cream/90 uppercase">
            {item.alt}
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              className="rounded-sm border border-white/25 px-3 py-1.5 font-nav text-[10px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              onClick={goPrev}
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-sm border border-white/25 px-3 py-1.5 font-nav text-[10px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              onClick={goNext}
            >
              Next
            </button>
            <button
              type="button"
              className="rounded-sm bg-white px-3 py-1.5 font-nav text-[10px] font-semibold uppercase tracking-wide text-burgundy transition hover:bg-cream"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
