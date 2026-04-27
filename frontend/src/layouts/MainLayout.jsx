import { Outlet, useLocation } from 'react-router-dom'
import { ScrollToTop } from '../components/layout/ScrollToTop.jsx'
import { SiteFooter } from '../components/layout/SiteFooter.jsx'
import { SiteHeader } from '../components/layout/SiteHeader.jsx'

/** Shared chrome: header, main outlet, footer — fills viewport so content can use the full body. */
export function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-dvh w-full flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded-md bg-cream px-4 py-2.5 font-nav text-xs font-semibold uppercase tracking-wide text-burgundy opacity-0 shadow-lg transition-all duration-300 ease-out focus-visible:pointer-events-auto focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="min-h-0 w-full flex-1 scroll-mt-4 outline-none" tabIndex={-1}>
        {/** Re-mount on route change replays `om-page-enter` in index.css (skipped when reduced motion). */}
        <div key={pathname} className="om-page-enter min-h-0 w-full">
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
