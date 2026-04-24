import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/layout/SiteFooter.jsx'
import { SiteHeader } from '../components/layout/SiteHeader.jsx'

/** Shared chrome: header, main outlet, footer. */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
