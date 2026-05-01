/**
 * Resolve a path served from `public/` for the current Vite `base` (defaults to `/`).
 * Use for `<img src>` etc. so assets work when the app is hosted under a subpath.
 * @param {string} pathFromRoot e.g. `/work/gallery/wedding-invitations/x.jpg`
 * @returns {string}
 */
export function publicUrl(pathFromRoot) {
  const trimmed = pathFromRoot.startsWith('/') ? pathFromRoot.slice(1) : pathFromRoot
  const base = import.meta.env.BASE_URL || '/'
  if (base === '/') return `/${trimmed}`
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}${trimmed}`
}
