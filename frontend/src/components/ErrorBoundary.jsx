import { Component } from 'react'

/**
 * Catches render errors in the subtree and shows a friendly fallback instead of a blank screen.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <p className="font-serif text-2xl text-burgundy">Something went wrong.</p>
          <p className="max-w-md text-burgundy/80">
            Please refresh the page. If the problem continues, email us at{' '}
            <a className="underline" href="mailto:occasionsmagnified@gmail.com">
              occasionsmagnified@gmail.com
            </a>
            .
          </p>
          <button
            type="button"
            className="rounded-full bg-burgundy px-6 py-2 text-sm font-medium tracking-wide text-cream uppercase"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
