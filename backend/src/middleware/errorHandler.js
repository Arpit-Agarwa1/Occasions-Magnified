/**
 * Central error handler — keeps error responses consistent.
 * @type {import('express').ErrorRequestHandler}
 */
export function errorHandler(err, _req, res, _next) {
  console.error(err)
  res.status(500).json({ ok: false, error: 'Something went wrong. Please try again later.' })
}
