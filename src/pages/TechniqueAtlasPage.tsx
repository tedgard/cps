import PageIntro from '../components/PageIntro'
import SourceBadges from '../components/SourceBadges'
import { techniqueAtlas } from '../data/wengerContent'

const situationGuide = [
  {
    need: 'Need novel answer to a blocked question',
    primary: 'Over-the-Wall',
    secondary: 'Image Streaming follow-up',
    reason:
      'Over-the-Wall forces an abrupt shift away from expected answer tracks, then Image Streaming can unpack the emergent scene in detail.',
    sources: ['R7', 'R4'],
  },
  {
    need: 'Need robust process for a team challenge',
    primary: 'Gravel Gulch',
    secondary: 'High Thinktank for major uncertainties',
    reason:
      'Gravel Gulch provides a concise full-cycle structure while High Thinktank helps when hidden bias is likely.',
    sources: ['R9', 'R8'],
  },
  {
    need: 'Need skill acquisition acceleration',
    primary: 'Borrowed Genius',
    secondary: 'Predictive Imagery for study sessions',
    reason:
      'Borrowed Genius supports perspective modeling and practice transfer; Predictive Imagery can prepare conceptual intake beforehand.',
    sources: ['R10', 'R6'],
  },
  {
    need: 'Need better internal innovation process',
    primary: 'Toolbuilder',
    secondary: 'DEAM for quick option generation',
    reason:
      'Toolbuilder upgrades method architecture while DEAM gives quick low-friction exploration for candidate process components.',
    sources: ['R11', 'R13'],
  },
]

function TechniqueAtlasPage() {
  return (
    <article className="page-content">
      <PageIntro
        eyebrow="Technique Atlas"
        title="Beyond Two Flagships: Wenger's Wider Method Stack"
        lead="Wenger taught a method ecosystem, not a single exercise. Techniques differ by bottleneck type: idea scarcity, expectation lock, group bias, weak implementation, or missing meta-method discipline."
      />

      <section className="panel">
        <h2>Method cards</h2>
        <div className="technique-grid">
          {techniqueAtlas.map((item) => (
            <article className="technique-card" key={item.name}>
              <p className="mini-kicker">{item.category}</p>
              <h3>{item.name}</h3>
              <p>
                <strong>Goal:</strong> {item.goal}
              </p>
              <p>
                <strong>Process:</strong> {item.process}
              </p>
              <p>
                <strong>Best for:</strong> {item.bestFor}
              </p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Choose-by-situation guide</h2>
        <div className="situation-grid">
          {situationGuide.map((item) => (
            <article className="situation-card" key={item.need}>
              <h3>{item.need}</h3>
              <p>
                <strong>Primary:</strong> {item.primary}
              </p>
              <p>
                <strong>Secondary:</strong> {item.secondary}
              </p>
              <p>{item.reason}</p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel compact-panel">
        <h2>Meta-method takeaway</h2>
        <p>
          A recurring Wenger pattern is combining techniques in sequence. One
          method produces raw novelty, a second method structures evaluation,
          and a third method turns results into action plans.
        </p>
        <SourceBadges ids={['R9', 'R11', 'R13']} />
      </section>
    </article>
  )
}

export default TechniqueAtlasPage
