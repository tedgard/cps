import PageIntro from '../components/PageIntro'
import Seo from '../components/Seo'
import SourceBadges from '../components/SourceBadges'
import {
  predictiveImageryNotes,
  predictiveImageryWorkflow,
} from '../data/wengerContent'

const studyModes = [
  {
    title: 'Mode A: Immediate pre-lesson use',
    detail:
      'Run one brief prompt immediately before a lecture, chapter, or article. Capture the image first, then study while keeping the image available as an orienting frame.',
    sources: ['R6'],
  },
  {
    title: 'Mode B: Course-level concept map',
    detail:
      'Generate a concept list from the syllabus, then run one predictive image per concept over the term. Review each image when that concept appears in class.',
    sources: ['R6'],
  },
]

const journalTemplate = [
  {
    item: 'Target concept or lecture',
    detail: 'What exactly are you about to study?',
  },
  {
    item: 'Prompt used',
    detail: 'Example: "Give me an image that will help this topic make sense."',
  },
  {
    item: 'Raw image description',
    detail: 'Describe scene, motion, texture, mood, and standout features.',
  },
  {
    item: 'Initial interpretation (optional)',
    detail: 'Write tentative meaning, clearly marked as hypothesis.',
  },
  {
    item: 'Post-study alignment notes',
    detail: 'Which parts aligned with major concepts? Which did not?',
  },
  {
    item: 'Action for next session',
    detail: 'Adjust prompt or method for the next predictive run.',
  },
]

const cautionPoints = [
  {
    title: 'Do not treat output as certainty',
    detail:
      'Predictive Imagery is an organizing and discovery tool. Wenger presents it as cognitive activation and inference, not guaranteed foresight.',
    sources: ['R6'],
  },
  {
    title: 'Capture before exposure',
    detail:
      'If journaling happens after reading, the value of prediction tracking drops sharply due to hindsight contamination.',
    sources: ['R6'],
  },
  {
    title: 'Focus on usefulness, not symbolism alone',
    detail:
      "Wenger's practice orientation suggests asking: did this improve comprehension speed, retention, or conceptual integration?",
    sources: ['R6', 'R3'],
  },
]

function PredictiveImageryPage() {
  return (
    <article className="page-content">
      <Seo
        title="Predictive Imagery"
        description="Use Wenger's Predictive Imagery workflow for pre-study priming, journaling, and concept-level learning acceleration with interpretation guardrails."
      />
      <PageIntro
        eyebrow="Predictive Imagery"
        title="Pre-Study Priming for Faster Concept Integration"
        lead="Wenger's Predictive Imagery method is a disciplined pre-learning practice. It aims to activate latent knowledge and pattern recognition before content intake, then verify usefulness through recorded comparison."
      />

      <section className="panel-grid two-col">
        {studyModes.map((mode) => (
          <section className="panel" key={mode.title}>
            <h2>{mode.title}</h2>
            <p>{mode.detail}</p>
            <SourceBadges ids={mode.sources} />
          </section>
        ))}
      </section>

      <section className="panel">
        <h2>Detailed workflow</h2>
        <div className="checklist-grid">
          {predictiveImageryWorkflow.map((item) => (
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
          <h2>Journal template for consistent tracking</h2>
          <div className="stack-list">
            {journalTemplate.map((item) => (
              <article className="stack-item" key={item.item}>
                <h3>{item.item}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <SourceBadges ids={['R6']} />
        </section>

        <section className="panel">
          <h2>Operational cautions</h2>
          <div className="stack-list">
            {cautionPoints.map((item) => (
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
        <h2>Key interpretation notes from source text</h2>
        <div className="stack-list">
          {predictiveImageryNotes.map((item) => (
            <article className="stack-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <SourceBadges ids={item.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel compact-panel">
        <h2>Interpretation boundary</h2>
        <p>
          This site uses Wenger's own explanation that Predictive Imagery draws
          from existing but not-yet-conscious knowledge structures. Reported
          performance effects are shown as Wenger's claims in archive material.
        </p>
        <SourceBadges ids={['R6']} />
      </section>
    </article>
  )
}

export default PredictiveImageryPage
