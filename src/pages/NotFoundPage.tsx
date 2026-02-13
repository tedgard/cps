import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFoundPage() {
  return (
    <article className="page-content">
      <Seo
        title="Page Not Found"
        description="The requested CPS route was not found. Return to the overview to continue browsing the Win Wenger methods archive."
        noIndex
      />
      <section className="panel compact-panel">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          The requested route does not exist in this CPS website. Use the main
          navigation to continue browsing the Wenger archive content.
        </p>
        <Link className="button-link" to="/">
          Return to overview
        </Link>
      </section>
    </article>
  )
}

export default NotFoundPage
