import PageIntro from '../components/PageIntro'
import SourceBadges from '../components/SourceBadges'
import {
  imageStreamingProtocol,
  imageStreamingTroubleshooting,
} from '../data/wengerContent'

const listenerGuidelines = [
  {
    title: 'Maintain a neutral listening stance',
    detail:
      'If another person serves as listener, Wenger-style practice keeps the listener non-directive during streaming so imagery generation is not steered too early.',
    sources: ['R4', 'R5'],
  },
  {
    title: 'Prompt for sensory elaboration, not interpretation',
    detail:
      'Helpful prompts include requests for color, movement, texture, and spatial relation. Interpretation prompts wait until after capture.',
    sources: ['R4', 'R5'],
  },
  {
    title: 'Capture exact language when possible',
    detail:
      'Recording preserves raw sequence and avoids memory cleanup effects that can erase unusual but useful details.',
    sources: ['R4', 'R15'],
  },
]

const sessionTemplate = [
  {
    block: '00:00-02:00',
    purpose: 'Define the target question and setup recording/listener.',
    sources: ['R4'],
  },
  {
    block: '02:00-10:00',
    purpose: 'Run uninterrupted descriptive stream with strong sensory specificity.',
    sources: ['R4', 'R5'],
  },
  {
    block: '10:00-14:00',
    purpose: 'Select one or two strong features and run feature-question probes.',
    sources: ['R5', 'R7'],
  },
  {
    block: '14:00-18:00',
    purpose: 'Run a second stream pass and look for recurrent motifs.',
    sources: ['R5', 'R8'],
  },
  {
    block: '18:00-20:00',
    purpose: 'Translate motifs into immediate tests, actions, and next experiment.',
    sources: ['R9'],
  },
]

function ImageStreamingPage() {
  return (
    <article className="page-content">
      <PageIntro
        eyebrow="Image Streaming"
        title="Primary Discovery Method: Detailed Working Procedure"
        lead="In Wenger's framework, Image Streaming is the foundational protocol for generating non-obvious insight. The method is descriptive first, interpretive second, and implementation-oriented at the end of every cycle."
      />

      <section className="panel">
        <h2>Protocol sequence</h2>
        <div className="checklist-grid">
          {imageStreamingProtocol.map((item) => (
            <article className="check-item" key={item.step}>
              <h3>{item.step}</h3>
              <p>
                <strong>Action:</strong> {item.action}
              </p>
              <p>
                <strong>Why it matters:</strong> {item.whyItMatters}
              </p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel-grid two-col">
        <section className="panel">
          <h2>Listener and recorder guidance</h2>
          <div className="stack-list">
            {listenerGuidelines.map((item) => (
              <article className="stack-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <SourceBadges ids={item.sources} />
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Common failure patterns and fixes</h2>
          <div className="stack-list">
            {imageStreamingTroubleshooting.map((item) => (
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
        <h2>Sample 20-minute session structure</h2>
        <div className="timeline-grid">
          {sessionTemplate.map((item) => (
            <article className="timeline-card" key={item.block}>
              <h3>{item.block}</h3>
              <p>{item.purpose}</p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel compact-panel">
        <h2>Faithfulness note</h2>
        <p>
          This page keeps to Wenger's published sequence logic: question,
          externalized imagery, feature questioning, triangulation, then action.
          Claims about outcomes are presented as archive claims rather than
          independent peer-reviewed effects.
        </p>
        <SourceBadges ids={['R4', 'R5', 'R15']} />
      </section>
    </article>
  )
}

export default ImageStreamingPage
