const STRUCTURE = [
  {
    part: 'Opening Paragraph',
    goal: 'Hook them immediately — do NOT open with "I am writing to express my interest."',
    tips: [
      'Name the specific role and school/district in your first sentence.',
      'Lead with a compelling fact about your experience: "After three years supporting students with IEPs in K-2 classrooms, I know what it takes to..."',
      'Or connect your passion to their mission: "Edmond Public Schools\' commitment to inclusive classrooms is exactly why I\'m applying."',
    ],
    example: '"My three years working one-on-one with students on autism spectrum disorder at [School] have shown me that the right support at the right moment can change a child\'s trajectory — and it\'s what brings me to apply for the Paraprofessional position at [District]."',
  },
  {
    part: 'Middle Paragraph',
    goal: 'Make the case. Connect your specific experience to what they need.',
    tips: [
      'Pick 2-3 of your strongest, most relevant qualifications and go deep — don\'t list everything.',
      'Mention IEP experience, behavior management, small group instruction, or de-escalation if applicable.',
      'Quantify: "supported a classroom of 22 students" or "tracked data for 5 students on individual behavior plans."',
      'Reference the job description — if they list "experience with Google Classroom" and you have it, say so.',
    ],
    example: '"In my current role, I support a third-grade classroom of 24 students alongside the lead teacher, with daily one-on-one time with four students on IEPs. I manage behavior data collection, assist with small group phonics instruction, and collaborate with the special education coordinator on weekly progress reviews. I\'m CPI certified and have experience implementing de-escalation strategies in a classroom setting."',
  },
  {
    part: 'Closing Paragraph',
    goal: 'Show genuine interest in this district specifically, and ask for the interview.',
    tips: [
      'Say something specific about why this district — their programs, reputation, or location.',
      'Don\'t just say "I am a fast learner" or "I am a team player" — too generic.',
      'End with a direct, confident ask: "I would welcome the opportunity to speak with you about how I can contribute to [School/District]."',
      'Thank them for their time.',
    ],
    example: '"[District]\'s focus on early intervention and its partnership with the University of Oklahoma\'s special education program is exactly the environment where I want to grow. I would love the opportunity to bring my experience to your team and contribute to the outcomes you\'re building. Thank you for your time and consideration — I look forward to hearing from you."',
  },
]

const DOS_DONTS = [
  { do: 'Address it to a specific person if you can find the principal\'s name', dont: '"To Whom It May Concern" when you could just look it up' },
  { do: 'Keep it to one page — 3 paragraphs, ~250-300 words', dont: 'Rambling for 500+ words or stuffing in every credential' },
  { do: 'Use "I" sparingly — focus on what you bring to students, not yourself', dont: 'Starting every sentence with "I"' },
  { do: 'Mention the specific school or district by name at least twice', dont: 'Generic letters that could apply to any job' },
  { do: 'Match the tone of the district — look at their website language', dont: 'Overly formal language that sounds robotic' },
  { do: 'Proofread out loud — you\'ll catch errors your eyes skip over', dont: 'Submitting without proofreading (automatic disqualifier in education)' },
]

const PHRASES_TO_AVOID = [
  '"I am writing to express my interest in..."',
  '"I am a hard worker and fast learner."',
  '"I have always had a passion for working with children."',
  '"I would be an asset to your team."',
  '"Please find my resume attached."',
  '"I look forward to hearing from you at your earliest convenience."',
]

const TEMPLATE = `[Your Name]
[City, State] | [Phone] | [Email]

[Date]

[Principal or Hiring Manager Name, if known]
[School Name]
[District Name]

Dear [Name / Hiring Team],

[OPENING — hook with a specific experience or connection to this role]

[MIDDLE — 2-3 specific qualifications tied to what they're looking for; quantify where you can]

[CLOSING — why this district specifically + direct ask for interview + thank you]

Sincerely,
[Your Name]`

export default function CoverLetter() {
  function copyTemplate() {
    navigator.clipboard.writeText(TEMPLATE)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Cover Letter Guide</h2>
        <p className="text-sm text-gray-600 mt-1">
          How to write a cover letter that actually gets read — with structure, examples, and a starter template.
        </p>
      </div>

      {/* Structure breakdown */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">The 3-Paragraph Structure</h3>
        <div className="space-y-4">
          {STRUCTURE.map(({ part, goal, tips, example }) => (
            <div key={part} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <p className="font-bold text-[#003087] text-sm">{part}</p>
              <p className="text-gray-700 text-sm font-medium mt-1">{goal}</p>
              <ul className="mt-2 space-y-1">
                {tips.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-3 bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700 italic">
                {example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dos and don'ts */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Do's and Don'ts</h3>
        {/* Two-column on sm+, stacked on mobile */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="hidden sm:grid grid-cols-2 bg-gray-50 border-b border-gray-200">
            <div className="px-4 py-2 text-xs font-bold text-green-700 uppercase tracking-wide">Do</div>
            <div className="px-4 py-2 text-xs font-bold text-red-600 uppercase tracking-wide border-l border-gray-200">Don't</div>
          </div>
          {DOS_DONTS.map(({ do: d, dont }) => (
            <div key={d} className="border-b border-gray-100 last:border-0">
              {/* Mobile: stacked */}
              <div className="sm:hidden px-4 py-3 space-y-2">
                <div className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-500 shrink-0">✓</span>{d}
                </div>
                <div className="flex gap-2 text-sm text-gray-500">
                  <span className="text-red-400 shrink-0">✕</span>{dont}
                </div>
              </div>
              {/* Desktop: side by side */}
              <div className="hidden sm:grid grid-cols-2">
                <div className="px-4 py-3 text-sm text-gray-700 flex gap-2">
                  <span className="text-green-500 shrink-0">✓</span>{d}
                </div>
                <div className="px-4 py-3 text-sm text-gray-700 border-l border-gray-100 flex gap-2">
                  <span className="text-red-400 shrink-0">✕</span>{dont}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phrases to avoid */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Phrases to Avoid</h3>
        <p className="text-sm text-gray-500 mb-2">These phrases appear in thousands of cover letters and signal a generic, low-effort application:</p>
        <ul className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
          {PHRASES_TO_AVOID.map((p) => (
            <li key={p} className="flex items-center gap-3 px-4 py-3">
              <span className="text-red-400 shrink-0">✕</span>
              <span className="text-sm text-gray-700 italic">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Template */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-gray-800">Starter Template</h3>
          <button
            onClick={copyTemplate}
            className="text-xs text-[#003087] border border-[#003087] px-3 py-1 rounded hover:bg-blue-50 transition-colors"
          >
            Copy Template
          </button>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs sm:text-sm text-gray-700 whitespace-pre-wrap font-mono overflow-x-auto">
          {TEMPLATE}
        </pre>
      </section>
    </div>
  )
}
