/**
 * Model: newsletter / question capture (in-memory demo; swap for DB or ESP later).
 */

const subscriptions = []

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const NewsletterSubscription = {
  /**
   * @param {unknown} email
   * @returns {{ ok: true, message: string } | { ok: false, error: string }}
   */
  create(email) {
    const trimmed = typeof email === 'string' ? email.trim() : ''

    if (!trimmed) {
      return { ok: false, error: 'Email is required.' }
    }

    if (!EMAIL_RE.test(trimmed)) {
      return { ok: false, error: 'Please enter a valid email address.' }
    }

    subscriptions.push({ email: trimmed, createdAt: new Date().toISOString() })
    // Demo logging; replace with email provider / CRM.
    console.info('[newsletter]', new Date().toISOString(), trimmed)

    return { ok: true, message: 'Thank you — we will be in touch soon.' }
  },

  /** @returns {number} */
  count() {
    return subscriptions.length
  },
}
