import { useCallback, useEffect, useRef } from 'react'

/**
 * Full-screen image viewer for the work archive grid.
 * @param {{ items: { src: string; alt: string }[]; index: number | null; onClose: () => void; onNavigate: (i: number) => void }} props
 */
export function ImageLightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null && index >= 0 && index < items.length
  const panelRef = useRef(null)

  const goPrev = useCallback(() => {
    if (index === null || !items.length) return
    onNavigate(index === 0 ? items.length - 1 : index - 1)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null || !items.length) return
    onNavigate(index === items.length - 1 ? 0 : index + 1)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose, goPrev, goNext])

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus()
    }
  }, [open, index])

  if (!open) return null

  const item = items[index]

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default border-0 bg-transparent"
        aria-label="Close gallery"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-[1] flex max-h-[min(92vh,920px)] max-w-[min(96vw,1200px)] flex-col outline-none"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/15 bg-burgundy/90 px-3 py-2.5 text-cream backdrop-blur-md sm:px-4">
          <p className="min-w-0 truncate font-serif text-sm text-cream/95 sm:text-base">{item.alt}</p>
          <button
            type="button"
            className="shrink-0 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-nav text-[10px] font-semibold tracking-wide text-white uppercase transition hover:bg-white/20"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#0f0202] p-2 sm:p-4">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[min(78vh,800px)] max-w-full object-contain"
          />
          {items.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-1 top-1/2 z-[2] -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-2.5 py-3 text-lg text-white backdrop-blur-sm transition hover:bg-black/75 sm:left-3 sm:px-3"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-1 top-1/2 z-[2] -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-2.5 py-3 text-lg text-white backdrop-blur-sm transition hover:bg-black/75 sm:right-3 sm:px-3"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
              >
                ›
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
