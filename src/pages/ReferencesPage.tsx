import PageIntro from '../components/PageIntro'
import Seo from '../components/Seo'
import SourceBadges from '../components/SourceBadges'
import { faithfulnessNotes, references } from '../data/wengerContent'

const groupedReferences = [
  {
    group: 'Archive and biography',
    ids: ['R1', 'R2', 'R3'],
  },
  {
    group: 'Image Streaming and predictive methods',
    ids: ['R4', 'R5', 'R6', 'R14', 'R15'],
  },
  {
    group: 'CPS technique set and derivatives',
    ids: ['R7', 'R8', 'R9', 'R10', 'R11', 'R12', 'R13'],
  },
]

function ReferencesPage() {
  return (
    <article className="page-content">
      <Seo
        title="References"
        description="Open the full primary source index, grouped references, and faithfulness policy used across this CPS archive website."
      />
      <PageIntro
        eyebrow="References"
        title="Primary Source Index and Faithfulness Policy"
        lead="Each page in this website uses source IDs tied to Win Wenger archive material. This index provides direct links and notes for verification."
      />

      <section className="panel">
        <h2>Faithfulness policy</h2>
        <ul className="policy-list">
          {faithfulnessNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <SourceBadges ids={['R1', 'R4', 'R6']} />
      </section>

      <section className="panel-grid two-col">
        {groupedReferences.map((group) => (
          <section className="panel" key={group.group}>
            <h2>{group.group}</h2>
            <SourceBadges ids={group.ids} />
          </section>
        ))}
      </section>

      <section className="panel">
        <h2>Full reference list</h2>
        <div className="reference-grid">
          {references.map((item) => (
            <article className="reference-card" key={item.id}>
              <h3>{item.id}</h3>
              <p>{item.title}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  )
}

export default ReferencesPage
