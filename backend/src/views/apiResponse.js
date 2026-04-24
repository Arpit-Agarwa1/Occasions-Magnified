/**
 * View layer: shapes JSON responses for the API (MVC “view” for REST).
 */

/** Standard success envelope including optional message payload. */
export function successBody(payload = {}) {
  return { ok: true, ...payload }
}

/** Standard client error envelope. */
export function errorBody(message) {
  return { ok: false, error: message }
}
