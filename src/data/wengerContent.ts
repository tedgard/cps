export type SourceRef = {
  id: string
  title: string
  url: string
  note: string
}

export type TimelineItem = {
  period: string
  detail: string
  sources: string[]
}

export type Principle = {
  title: string
  detail: string
  sources: string[]
}

export type ProcedureStep = {
  step: string
  action: string
  whyItMatters: string
  sources: string[]
}

export type TechniqueCard = {
  name: string
  category: string
  goal: string
  process: string
  bestFor: string
  sources: string[]
}

export const references: SourceRef[] = [
  {
    id: 'R1',
    title: 'The Win Wenger Archive',
    url: 'https://winwenger.com/',
    note: 'Archive-level overview with method and biography summary.',
  },
  {
    id: 'R2',
    title: 'About Win Wenger',
    url: 'https://winwenger.com/about-win-wenger/',
    note: 'Biographical details, publication count, and research framing.',
  },
  {
    id: 'R3',
    title: 'Project Renaissance',
    url: 'https://winwenger.com/project-renaissance/',
    note: 'Organization history, mission statement, and conference timeline.',
  },
  {
    id: 'R4',
    title: 'Welcome to Image Streaming',
    url: 'https://winwenger.com/resources/cps-techniques/welcome-to-image-streaming/',
    note: 'Long-form primary training text for Image Streaming.',
  },
  {
    id: 'R5',
    title: 'Image Streaming in Brief',
    url: 'https://winwenger.com/resources/cps-techniques/image-streaming-in-brief/',
    note: 'Condensed process version, including feature questioning.',
  },
  {
    id: 'R6',
    title: 'Predictive Imagery',
    url: 'https://winwenger.com/resources/tl-techniques/predictive-imagery/',
    note: 'Primary explanation of pre-study and course-level predictive use.',
  },
  {
    id: 'R7',
    title: 'Over-the-Wall',
    url: 'https://winwenger.com/resources/cps-techniques/over-the-wall/',
    note: 'Question breakthrough method using surprise imagery transitions.',
  },
  {
    id: 'R8',
    title: 'High Thinktank',
    url: 'https://winwenger.com/resources/cps-techniques/high-thinktank/',
    note: 'Advanced method for major questions where bias is hard to avoid.',
  },
  {
    id: 'R9',
    title: 'Gravel Gulch',
    url: 'https://winwenger.com/resources/cps-techniques/gravel-gulch/',
    note: 'Simplified Osborn-Parnes style process for practical CPS sessions.',
  },
  {
    id: 'R10',
    title: 'Borrowed Genius',
    url: 'https://winwenger.com/resources/tl-techniques/borrowed-genius/',
    note: 'Technique for entering and practicing a modeled expert perspective.',
  },
  {
    id: 'R11',
    title: 'CPS Techniques Index',
    url: 'https://winwenger.com/resources/cps-techniques/',
    note: 'Catalog of Wenger methods including Toolbuilder, Beachhead, and DEAM.',
  },
  {
    id: 'R12',
    title: 'A Huge Untapped Resource',
    url: 'https://winwenger.com/resources/cps-techniques/a-huge-untapped-resource/',
    note: 'Compact descriptions of multiple CPS techniques and use contexts.',
  },
  {
    id: 'R13',
    title: 'Double-Entry A-Ha Method (DEAM)',
    url: 'https://winwenger.com/resources/cps-techniques/double-entry-a-ha-method/',
    note: 'Low-friction ideation process and related Toolbuilder framing.',
  },
  {
    id: 'R14',
    title: 'The Einstein Factor',
    url: 'https://winwenger.com/the-einstein-factor/',
    note: 'Flagship popular text associated with Image Streaming.',
  },
  {
    id: 'R15',
    title: 'You Are Brighter Than You Think',
    url: 'https://winwenger.com/books/books-online/you-are-brighter-than-you-think/',
    note: 'Book-length treatment that includes practice cadence and session guidance.',
  },
]

export const legacyTimeline: TimelineItem[] = [
  {
    period: '1938-2021',
    detail:
      'The archive frames Win Wenger as a creativity researcher, educator, and method designer who worked across cognition, learning, and invention.',
    sources: ['R1', 'R2'],
  },
  {
    period: '1970',
    detail:
      'Project Renaissance begins. Wenger later describes this as the practical home for both accelerated learning and creative problem-solving methods.',
    sources: ['R3'],
  },
  {
    period: '1977',
    detail:
      'Project Renaissance is formed as an organizational division, creating a stable base for method training and publishing.',
    sources: ['R3'],
  },
  {
    period: '1995',
    detail:
      'Project Renaissance becomes the official organization name, consolidating Wenger\'s technique ecosystem under one banner.',
    sources: ['R3'],
  },
  {
    period: '1990s onward',
    detail:
      'The annual Double Festival of Learning and Creativity runs for more than 20 years and ends in 2014.',
    sources: ['R3'],
  },
  {
    period: 'Published legacy',
    detail:
      'Archive biography notes 55 books authored or co-authored, with major titles including The Einstein Factor and Beyond Teaching and Learning.',
    sources: ['R2', 'R14'],
  },
]

export const corePrinciples: Principle[] = [
  {
    title: 'Creative skill is trainable',
    detail:
      'Wenger\'s system treats creative output as process-dependent, not talent-limited. Repeated structured practice is expected to improve idea quality and transfer to action.',
    sources: ['R1', 'R3'],
  },
  {
    title: 'Externalized imagery beats silent rumination',
    detail:
      'Across Image Streaming materials, describing imagery aloud to a listener or recorder is central. Externalization is not optional decoration; it is the engine of the method.',
    sources: ['R4', 'R5'],
  },
  {
    title: 'Surprise content has high diagnostic value',
    detail:
      'Methods such as Over-the-Wall and High Thinktank are designed to bypass expected answers and expose unplanned imagery, then decode it through feature analysis.',
    sources: ['R7', 'R8'],
  },
  {
    title: 'Question quality controls answer quality',
    detail:
      'Most workflows begin with framing a real question. Wenger repeatedly pushes users away from vague prompts and toward practical, implementation-bound inquiry.',
    sources: ['R4', 'R9'],
  },
  {
    title: 'Method should build method',
    detail:
      'Toolbuilder and related texts present a meta-principle: apply your strongest process to invent a stronger process. This creates continuous reinvestment in capability.',
    sources: ['R11', 'R13', 'R15'],
  },
  {
    title: 'Insight must become implementation',
    detail:
      'In Wenger\'s applied CPS framing, idea generation without conversion to plan and action is incomplete work.',
    sources: ['R9', 'R12'],
  },
]

export const imageStreamingProtocol: ProcedureStep[] = [
  {
    step: '1. Frame the target question',
    action:
      'Pick one meaningful problem, challenge, or topic that you genuinely need to resolve.',
    whyItMatters:
      'A concrete question gives imagery a direction while preserving room for unexpected information.',
    sources: ['R4', 'R7'],
  },
  {
    step: '2. Set up external attention',
    action:
      'Use a live listener when possible, or a recorder when alone. Commit to speaking continuously during imagery.',
    whyItMatters:
      'Wenger emphasizes that speaking to an external target helps reduce self-editing and increases flow density.',
    sources: ['R4', 'R5'],
  },
  {
    step: '3. Describe raw sensory detail',
    action:
      'Report shapes, textures, motion, color, temperature, sound, and emotional tone as they appear.',
    whyItMatters:
      'Sensory-rich description increases data volume and keeps conscious interpretation from shutting down novel imagery too early.',
    sources: ['R4', 'R5'],
  },
  {
    step: '4. Protect novelty',
    action:
      'When imagery seems odd, continue describing instead of correcting it to match expectations.',
    whyItMatters:
      'Unexpected imagery is treated as high-value signal because it often differs from stock answers.',
    sources: ['R4', 'R7'],
  },
  {
    step: '5. Run feature questioning',
    action:
      'Select one salient element and ask why that element appears. Follow with another short streaming pass.',
    whyItMatters:
      'Feature questions convert symbolic imagery into usable meaning and reveal links to the original target question.',
    sources: ['R5', 'R7', 'R8'],
  },
  {
    step: '6. Triangulate and infer',
    action:
      'Repeat with more than one pass and look for recurring motifs across sessions.',
    whyItMatters:
      'Cross-pass overlap functions as a reliability filter before translating imagery into decisions.',
    sources: ['R5', 'R8'],
  },
  {
    step: '7. Convert into next actions',
    action:
      'Write implementation candidates immediately: what to test, what to design, what to ask, and what to change.',
    whyItMatters:
      'Wenger\'s CPS methods are action-seeking. Value appears when symbolic insight becomes operational behavior.',
    sources: ['R9', 'R12'],
  },
]

export const imageStreamingTroubleshooting: Principle[] = [
  {
    title: '"I see nothing" start state',
    detail:
      'Wenger\'s guidance is to begin by describing even faint impressions and continue. Fluency grows with repetition, not by waiting for vivid imagery first.',
    sources: ['R4', 'R15'],
  },
  {
    title: 'Over-interpretation too early',
    detail:
      'Delay interpretation until enough descriptive material exists. Premature decoding can collapse imagery before useful patterns emerge.',
    sources: ['R5', 'R8'],
  },
  {
    title: 'Predictable, recycled content',
    detail:
      'Switch question framing or run methods that force surprise transitions, such as Over-the-Wall.',
    sources: ['R7', 'R12'],
  },
  {
    title: 'No implementation follow-through',
    detail:
      'End each session with specific tests and deadlines. Wenger\'s process philosophy treats execution as part of method, not a separate phase.',
    sources: ['R9'],
  },
]

export const predictiveImageryWorkflow: ProcedureStep[] = [
  {
    step: '1. Pre-lesson prompt',
    action:
      'Before reading or attending class, ask for an image that will help the material make sense.',
    whyItMatters:
      'This primes prior knowledge and organizes attention before detail arrives.',
    sources: ['R6'],
  },
  {
    step: '2. Capture and label the image',
    action:
      'Document the image in words and optional sketch form. Include title, features, and initial hypotheses.',
    whyItMatters:
      'A stable record makes later comparison possible and reduces hindsight distortion.',
    sources: ['R6'],
  },
  {
    step: '3. Study with image in background',
    action:
      'Proceed with lecture or reading while mentally retaining the image as an orienting frame.',
    whyItMatters:
      'The archive describes this as a practical mechanism for faster coherence-building, not mystical prediction.',
    sources: ['R6'],
  },
  {
    step: '4. Compare and refine',
    action:
      'After study, revisit the record and mark which parts aligned with key concepts and where interpretation changed.',
    whyItMatters:
      'Reflection turns a single exercise into a trainable learning routine.',
    sources: ['R6'],
  },
  {
    step: '5. Scale to course level',
    action:
      'For full courses, generate a question list from major concepts and run one predictive image per concept over time.',
    whyItMatters:
      'Wenger\'s published protocol treats repeated concept-level runs as a serious learning accelerator.',
    sources: ['R6'],
  },
]

export const predictiveImageryNotes: Principle[] = [
  {
    title: 'Not paranormal framing',
    detail:
      'Wenger explicitly says Predictive Imagery is about drawing from what the learner already knows and can infer, including latent pattern memory.',
    sources: ['R6'],
  },
  {
    title: 'Two operating modes',
    detail:
      'The source distinguishes quick pre-lecture usage from a larger course-level project with many concept prompts.',
    sources: ['R6'],
  },
  {
    title: 'Journal discipline matters',
    detail:
      'Process credibility improves when each image is recorded before content exposure and reviewed afterward.',
    sources: ['R6'],
  },
  {
    title: 'Claims should be interpreted as Wenger claims',
    detail:
      'When high performance outcomes are discussed, this site presents them as Wenger\'s own reported framing from archive materials.',
    sources: ['R6', 'R4'],
  },
]

export const techniqueAtlas: TechniqueCard[] = [
  {
    name: 'Over-the-Wall',
    category: 'Breakthrough questioning',
    goal: 'Bypass expectation lock and access non-obvious answer fragments.',
    process:
      'Build a vivid garden scene, approach a wall, leap into unknown answer-space, and report the first sensory impression before conscious editing.',
    bestFor: 'Problems where analysis is stuck in repeated loops.',
    sources: ['R7'],
  },
  {
    name: 'High Thinktank',
    category: 'High-stakes decision support',
    goal: 'Reduce bias while exploring major questions with high consequence.',
    process:
      'Conceal parts of the question cue, gather immediate imagery, compare common features, then reveal and interpret against the full question.',
    bestFor: 'Situations where participants carry strong prior commitments.',
    sources: ['R8'],
  },
  {
    name: 'Gravel Gulch',
    category: 'Structured CPS flow',
    goal: 'Move quickly from problem definition to actionable implementation.',
    process:
      'Follow a simplified Osborn-Parnes style sequence with explicit divergent and convergent phases.',
    bestFor: 'Teams that need structure without process bloat.',
    sources: ['R9'],
  },
  {
    name: 'Borrowed Genius',
    category: 'Learning transfer',
    goal: 'Internalize expert patterning by entering a modeled perspective.',
    process:
      'Image stream into a selected exemplar perspective, then alternate role-based rehearsal with real-world practice loops.',
    bestFor: 'Skill growth where tacit pattern recognition matters.',
    sources: ['R10'],
  },
  {
    name: 'Beachhead',
    category: 'Invention and design',
    goal: 'Pull concrete cues from a simulated future where the problem is solved.',
    process:
      'Visit an imagined successful future scenario, capture details, and reverse engineer practical present-day steps.',
    bestFor: 'Novel product, service, or system exploration.',
    sources: ['R11', 'R12'],
  },
  {
    name: 'Toolbuilder',
    category: 'Meta-method development',
    goal: 'Design better techniques using existing strong techniques.',
    process:
      'Apply one method to the question of which method architecture would outperform it for your challenge class.',
    bestFor: 'Teams building repeatable innovation capability, not one-off fixes.',
    sources: ['R11', 'R13', 'R15'],
  },
  {
    name: 'DEAM (Double-Entry A-Ha Method)',
    category: 'Rapid ideation',
    goal: 'Produce many candidate ideas with low setup friction.',
    process:
      'Use paired-entry association structures to create high-volume jumps and practical idea leads.',
    bestFor: 'Early-stage exploration when speed and quantity are critical.',
    sources: ['R13'],
  },
  {
    name: 'Socratic Draw-Forth',
    category: 'Cognitive de-layering',
    goal: 'Move past stock answers into deeper perception and stronger questions.',
    process:
      'Use sustained questioning plus descriptive imagery articulation until cached responses lose control.',
    bestFor: 'Conceptual stuckness and shallow framing.',
    sources: ['R3', 'R6'],
  },
]

export const implementationChecklist: Principle[] = [
  {
    title: 'Define one operational question',
    detail: 'Write the question so a concrete decision can be made within days or weeks.',
    sources: ['R7', 'R9'],
  },
  {
    title: 'Choose one main method and one backup',
    detail:
      'Example pairing: Image Streaming for discovery plus Gravel Gulch for solution structuring.',
    sources: ['R4', 'R9'],
  },
  {
    title: 'Capture raw output before interpretation',
    detail: 'Record first; decode second. This preserves novelty and reduces selective memory.',
    sources: ['R5', 'R8'],
  },
  {
    title: 'Extract recurring motifs',
    detail: 'Repeated features across passes are your strongest candidates for meaning and action.',
    sources: ['R5', 'R8'],
  },
  {
    title: 'Translate to tests and deadlines',
    detail: 'Every session ends with immediate next actions and review timing.',
    sources: ['R9', 'R12'],
  },
]

export const faithfulnessNotes: string[] = [
  'This site uses Win Wenger archive pages as primary references and keeps interpretation close to source language and sequence.',
  'Large performance claims are described as Wenger\'s own claims or framing, not independent clinical validation statements.',
  'Technique summaries are condensed for readability, but preserve the intended order of operations and use context.',
  'For exact procedure execution, the linked source pages remain the canonical instructions.',
]
