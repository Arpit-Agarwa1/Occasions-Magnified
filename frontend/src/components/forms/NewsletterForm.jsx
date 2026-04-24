import { useCallback, useState } from 'react'

/**
 * Footer “Have any Questions?” form — posts to Node API (`/api/newsletter`) via Vite proxy in dev.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setStatus('loading')
      setMessage('')

      try {
        const res = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
        const data = await res.json()

        if (!res.ok || !data.ok) {
          setStatus('error')
          setMessage(data.error ?? 'Could not submit. Please try again.')
          return
        }

        setStatus('success')
        setMessage(data.message ?? 'Thank you!')
        setEmail('')
      } catch {
        setStatus('error')
        setMessage('Network error. Please check your connection and try again.')
      }
    },
    [email],
  )

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="min-h-12 flex-1 rounded-sm border border-white/35 bg-white px-4 text-burgundy placeholder:text-burgundy/40 focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/35 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-12 shrink-0 rounded-sm bg-burgundy-deep px-10 text-xs font-semibold tracking-[0.35em] text-cream uppercase shadow-sm transition hover:bg-black/80 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'SUBMIT'}
        </button>
      </form>
      {message ? (
        <p
          className={`mt-3 text-center text-sm ${status === 'success' ? 'text-cream' : 'text-red-200'}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}
