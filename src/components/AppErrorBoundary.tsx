import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Seo from './Seo'

type BoundaryProps = {
  children: ReactNode
  resetKey: string
}

type BoundaryState = {
  hasError: boolean
}

class InternalErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled UI error:', error, errorInfo)
  }

  componentDidUpdate(previousProps: BoundaryProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <article className="page-content">
        <Seo
          title="Application Error"
          description="An unexpected client error occurred in the CPS application."
          noIndex
        />
        <section className="panel compact-panel">
          <p className="eyebrow">Application Error</p>
          <h1>Something went wrong</h1>
          <p className="error-message">
            An unexpected error interrupted this view. You can reload the app
            or return to the overview page.
          </p>
          <div className="error-actions">
            <button className="button-link button-link-alt" onClick={() => window.location.reload()} type="button">
              Reload app
            </button>
            <Link className="button-link" to="/">
              Return to overview
            </Link>
          </div>
        </section>
      </article>
    )
  }
}

type AppErrorBoundaryProps = {
  children: ReactNode
}

function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  const { pathname } = useLocation()

  return <InternalErrorBoundary resetKey={pathname}>{children}</InternalErrorBoundary>
}

export default AppErrorBoundary
