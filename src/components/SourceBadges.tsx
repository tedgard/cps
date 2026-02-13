type SourceBadgesProps = {
  ids: string[]
}

function SourceBadges({ ids }: SourceBadgesProps) {
  return (
    <div className="source-badges" aria-label="Source references">
      {ids.map((id) => (
        <span className="source-badge" key={id}>
          {id}
        </span>
      ))}
    </div>
  )
}

export default SourceBadges
