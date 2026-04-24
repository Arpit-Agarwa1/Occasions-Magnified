import { useCallback, useState } from 'react'
import { apiUrl } from '../../utils/apiUrl.js'

/**
 * Footer “Have any Questions?” — joined field + SUBMIT (mock).
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
        const res = await fetch(apiUrl('/api/newsletter'), {
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
        className="flex overflow-hidden rounded-sm shadow-md"
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
          placeholder="Enter your E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="min-h-12 flex-1 rounded-none border-0 bg-white px-4 text-[#4A0404] placeholder:text-[#4A0404]/45 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4A0404]/25 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-12 shrink-0 rounded-none bg-[#4A0404] px-8 font-nav text-xs font-semibold tracking-[0.35em] text-white uppercase transition hover:bg-[#310B0B] disabled:opacity-60"
        >
          {status === 'loading' ? '…' : 'SUBMIT'}
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
