/**
 * Builds an absolute API URL in production (`VITE_API_URL`) or a same-origin path in dev (Vite proxy).
 * @param {string} path - Must start with `/`, e.g. `/api/newsletter`
 * @returns {string}
 */
export function apiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const base = String(import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
  if (!base) return normalizedPath
  return `${base}${normalizedPath}`
}
