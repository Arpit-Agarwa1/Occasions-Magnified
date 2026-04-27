import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'

/** Below-the-fold routes are lazy so the first JS payload stays small (home stays eager for LCP). */
const WorkPage = lazy(() => import('./pages/WorkPage.jsx'))
const OmagPage = lazy(() => import('./pages/OmagPage.jsx'))
const ShopPage = lazy(() => import('./pages/ShopPage.jsx'))
const MagazineShopPage = lazy(() => import('./pages/MagazineShopPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

/** Application routes under the shared marketing layout. */
export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="omag" element={<OmagPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/magazine" element={<MagazineShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
