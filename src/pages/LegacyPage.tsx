import PageIntro from '../components/PageIntro'
import Seo from '../components/Seo'
import SourceBadges from '../components/SourceBadges'
import { legacyTimeline } from '../data/wengerContent'

const legacyNarrative = [
  {
    title: 'Project Renaissance as a method laboratory',
    detail:
      'The archive describes Project Renaissance as both an educational movement and a practical lab for creative method development. Wenger positioned the organization around "helping people think better on purpose" through repeatable technique training.',
    sources: ['R3'],
  },
  {
    title: 'From teaching content to teaching cognition',
    detail:
      'Wenger repeatedly emphasized that conventional instruction often transfers information but not thinking process. His framework shifts attention to cognitive operations learners can practice and improve.',
    sources: ['R3', 'R15'],
  },
  {
    title: 'Conference and practitioner culture',
    detail:
      'The Double Festival era provided a long-running venue where methods were taught, tested, and adapted by practitioners, which helped spread the technique family beyond a single book audience.',
    sources: ['R3'],
  },
  {
    title: 'Publication strategy',
    detail:
      'Wenger used books, newsletters, online resources, and training workshops as parallel channels. The archive biography points to a broad publication footprint rather than one flagship text only.',
    sources: ['R2', 'R14'],
  },
]

const continuityPoints = [
  {
    title: 'CPS and accelerated learning were integrated',
    detail:
      'Archive material treats creative problem-solving and teaching-learning techniques as one ecosystem, not separate disciplines.',
    sources: ['R1', 'R3'],
  },
  {
    title: 'Methods were designed to be teachable',
    detail:
      'Most techniques are written as explicit step sequences with setup, process, and debrief phases, making them trainable by non-specialists.',
    sources: ['R4', 'R6', 'R9'],
  },
  {
    title: 'Meta-method was explicit',
    detail:
      'Toolbuilder and related writings show Wenger trying to improve not just answers, but answer-finding machinery itself.',
    sources: ['R11', 'R13'],
  },
]

function LegacyPage() {
  return (
    <article className="page-content">
      <Seo
        title="Legacy"
        description="Review the historical timeline and intent behind Win Wenger's Creative Problem Solving methods, Project Renaissance, and long-term training model."
      />
      <PageIntro
        eyebrow="Legacy"
        title="Historical Context and Method Intent"
        lead="This page focuses on what Wenger built over time: an applied cognitive toolkit, an organization for training it, and a publication body meant to keep methods publicly usable."
      />

      <section className="panel">
        <h2>Timeline highlights</h2>
        <div className="timeline-grid">
          {legacyTimeline.map((item) => (
            <article className="timeline-card" key={item.period}>
              <h3>{item.period}</h3>
              <p>{item.detail}</p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel-grid two-col">
        <section className="panel">
          <h2>What the organization was trying to do</h2>
          <div className="stack-list">
            {legacyNarrative.map((item) => (
              <article className="stack-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <SourceBadges ids={item.sources} />
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Continuity points across decades</h2>
          <div className="stack-list">
            {continuityPoints.map((item) => (
              <article className="stack-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <SourceBadges ids={item.sources} />
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="panel compact-panel">
        <h2>Interpretation guardrail</h2>
        <p>
          This site presents Wenger's method intent in his own archive framing.
          It does not reinterpret his system into unrelated cognitive models.
          Where language has been condensed, source IDs are attached for direct
          verification.
        </p>
        <SourceBadges ids={['R1', 'R2', 'R3']} />
      </section>
    </article>
  )
}

export default LegacyPage
