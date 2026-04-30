import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'

/** Below-the-fold routes are lazy so the first JS payload stays small (home stays eager for LCP). */
/** Maps a page module’s named export to `default` for `React.lazy` (our pages use `export function Page`). */
const withDefault = (importFn, name) => lazy(() => importFn().then((m) => ({ default: m[name] })))

const WorkPage = withDefault(() => import('./pages/WorkPage.jsx'), 'WorkPage')
const OmagPage = withDefault(() => import('./pages/OmagPage.jsx'), 'OmagPage')
const AboutPage = withDefault(() => import('./pages/AboutPage.jsx'), 'AboutPage')
const TestimonialsPage = withDefault(() => import('./pages/TestimonialsPage.jsx'), 'TestimonialsPage')
const ContactPage = withDefault(() => import('./pages/ContactPage.jsx'), 'ContactPage')
const NotFoundPage = withDefault(() => import('./pages/NotFoundPage.jsx'), 'NotFoundPage')

/** Application routes under the shared marketing layout. */
export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="omag" element={<OmagPage />} />
          {/* Legacy `/shop` URLs → portfolio (shop hub page removed). */}
          <Route path="shop/*" element={<Navigate to="/work" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
