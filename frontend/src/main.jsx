import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary.jsx'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found')
}

/** Fade out and remove the static #site-loader from index.html after React’s first paint. */
function dismissSiteLoader() {
  const el = document.getElementById('site-loader')
  if (!el || el.dataset.dismissed === '1') return
  el.dataset.dismissed = '1'
  el.setAttribute('aria-busy', 'false')

  const remove = () => {
    el.removeEventListener('transitionend', onTransitionEnd)
    el.remove()
  }

  const onTransitionEnd = (e) => {
    if (e.propertyName === 'opacity') remove()
  }

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reduceMotion) {
    el.remove()
    return
  }

  el.addEventListener('transitionend', onTransitionEnd)
  el.classList.add('om-site-loader--exit')
  window.setTimeout(remove, 700)
}

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)

// Double rAF: wait until after the first committed frame so the app has painted beneath the loader.
requestAnimationFrame(() => {
  requestAnimationFrame(dismissSiteLoader)
})
