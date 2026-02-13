type PageIntroProps = {
  eyebrow: string
  title: string
  lead: string
}

function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
    </header>
  )
}

export default PageIntro
