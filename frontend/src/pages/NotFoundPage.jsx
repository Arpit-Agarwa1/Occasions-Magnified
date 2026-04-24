import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center md:px-8">
      <p className="font-sans text-sm font-semibold tracking-[0.3em] text-burgundy/60 uppercase">
        404
      </p>
      <h1 className="mt-2 font-serif text-4xl text-burgundy">Page not found</h1>
      <p className="mt-4 text-burgundy/75">The page you are looking for does not exist or moved.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-burgundy px-8 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-deep"
      >
        Back home
      </Link>
    </div>
  )
}
