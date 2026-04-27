import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the document to the top on every client-side route change
 * (replaceState / <Link> navigation does not reset scroll by default).
 */
export function ScrollToTop() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    // Instant scroll keeps route changes snappy; in-page anchors still use html { scroll-behavior: smooth }.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, search])

  return null
}
