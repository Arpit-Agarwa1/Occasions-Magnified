import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the document to the top on every client-side route change
 * (replaceState / <Link> navigation does not reset scroll by default).
 */
export function ScrollToTop() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    const smooth = !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' })
  }, [pathname, search])

  return null
}
