import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SourceBadges from '../components/SourceBadges'
import {
  corePrinciples,
  implementationChecklist,
  legacyTimeline,
  references,
} from '../data/wengerContent'

function HomePage() {
  return (
    <article className="page-content">
      <PageIntro
        eyebrow="CPS Overview"
        title="Win Wenger's Creative Problem Solving Architecture"
        lead="This website documents Wenger's method stack as a practical system: ask better questions, elicit raw imagery, decode recurring structure, and convert insight into implemented change."
      />

      <section className="hero-panel">
        <div>
          <h2>Two flagship engines</h2>
          <p>
            Image Streaming and Predictive Imagery are central because they
            convert hidden pattern recognition into explicit, trainable output.
            Wenger pairs them with structured CPS methods so discovery is linked
            to execution instead of ending at inspiration.
          </p>
          <SourceBadges ids={['R4', 'R5', 'R6', 'R9']} />
        </div>
        <div className="hero-actions">
          <Link className="button-link" to="/image-streaming">
            Explore Image Streaming
          </Link>
          <Link className="button-link button-link-alt" to="/predictive-imagery">
            Explore Predictive Imagery
          </Link>
        </div>
      </section>

      <section className="panel-grid two-col">
        <section className="panel">
          <h2>Legacy timeline</h2>
          <div className="stack-list">
            {legacyTimeline.map((item) => (
              <article className="stack-item" key={item.period}>
                <h3>{item.period}</h3>
                <p>{item.detail}</p>
                <SourceBadges ids={item.sources} />
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Core operating principles</h2>
          <div className="stack-list">
            {corePrinciples.map((item) => (
              <article className="stack-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <SourceBadges ids={item.sources} />
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="panel">
        <h2>Implementation pattern used across the site</h2>
        <div className="checklist-grid">
          {implementationChecklist.map((item) => (
            <article className="check-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel compact-panel">
        <h2>Source depth</h2>
        <p>
          This site references {references.length} primary archive pages and
          keeps source IDs attached to each major claim so readers can verify
          steps directly in Wenger's own material.
        </p>
        <Link className="text-link" to="/references">
          Open full reference index
        </Link>
      </section>
    </article>
  )
}

export default HomePage
