import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Overview', end: true },
  { to: '/legacy', label: 'Legacy' },
  { to: '/image-streaming', label: 'Image Streaming' },
  { to: '/predictive-imagery', label: 'Predictive Imagery' },
  { to: '/technique-atlas', label: 'Technique Atlas' },
  { to: '/references', label: 'References' },
]

function SiteLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="ambient ambient-top" aria-hidden />
      <div className="ambient ambient-bottom" aria-hidden />

      <header className="site-header">
        <div className="brand-block">
          <p className="brand-tag">CPS</p>
          <div>
            <h2>Creative Problem Solving</h2>
            <p>Win Wenger methods archive site</p>
          </div>
        </div>
        <nav className="site-nav" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end={item.end}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-shell" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Win Wenger tribute project for Creative Problem Solving practice.</p>
        <a href="https://winwenger.com/" target="_blank" rel="noopener noreferrer">
          Visit archive
        </a>
      </footer>
    </div>
  )
}

export default SiteLayout
