const TIPS = [
  {
    num: 1,
    title: 'Tailor to every job description',
    body: 'Copy keywords directly from the posting. "Instructional aide," "paraprofessional," "educational technician" — districts use different titles. Use theirs.',
  },
  {
    num: 2,
    title: 'Open with a targeted summary',
    body: 'Two to three sentences. Be specific: "Four years supporting K-3 classrooms with a focus on literacy intervention and behavior management" beats "experienced education professional."',
  },
  {
    num: 3,
    title: 'Quantify everything you can',
    body: '"Supported 6 students on IEPs" or "assisted in a classroom of 24" gives hiring principals a real picture of your experience. Numbers always outperform adjectives.',
  },
  {
    num: 4,
    title: 'Lead with certifications',
    body: 'CPR/First Aid, the ParaPro Assessment, ELL/ESL endorsements, CPI (Crisis Prevention Intervention), and behavior technician credentials belong near the top — not buried at the bottom.',
  },
  {
    num: 5,
    title: 'Call out IEP and special education experience',
    body: 'If you\'ve worked with IEPs, behavior intervention plans, AAC devices, or specific diagnoses (autism spectrum, Down syndrome, dyslexia), name them. Many postings require it.',
  },
  {
    num: 6,
    title: 'Use education-sector action verbs',
    body: 'Facilitated, reinforced, scaffolded, modeled, monitored, redirected, implemented, collaborated, documented. These read naturally to principals and HR staff.',
  },
  {
    num: 7,
    title: 'Keep it ATS-friendly',
    body: 'No tables, columns, text boxes, or headers/footers. One font, consistent spacing. Save as .docx or PDF. Fancy formatting often breaks the software that reads your resume before a human does.',
  },
  {
    num: 8,
    title: 'One page if under 10 years of experience',
    body: 'A hiring principal may review 50 applications. A focused one-pager that respects their time also demonstrates that you communicate efficiently — a classroom skill.',
  },
  {
    num: 9,
    title: 'List college hours even without a degree',
    body: 'Oklahoma requires paraprofessionals to have 48 college credit hours OR an associate\'s degree OR pass the ParaPro Assessment. Even 30 hours shows progress. Include them.',
  },
  {
    num: 10,
    title: 'Proofread like a teacher will read it',
    body: 'You\'re applying to reinforce literacy and language in students. A typo or grammar error signals the exact opposite. Read it aloud. Then have someone else read it.',
  },
]

const SECTIONS = {
  title: 'What to include in each section',
  items: [
    {
      section: 'Contact Info',
      guidance: 'Name, city/state (no full address needed), phone, professional email, LinkedIn (optional). Use a gmail — not a decade-old AOL or Yahoo address.',
    },
    {
      section: 'Professional Summary',
      guidance: '2-3 sentences. Years of experience + grade levels + one or two strengths. Rewrite this for each application.',
    },
    {
      section: 'Skills',
      guidance: 'Behavior management, IEP implementation, data collection, AAC support, Google Classroom, progress monitoring, de-escalation, small group instruction, CPR/First Aid.',
    },
    {
      section: 'Experience',
      guidance: 'Job title, employer, dates (Month/Year). 3-5 bullet points per role. Start with action verbs. Quantify where possible. Focus on student outcomes, not just tasks.',
    },
    {
      section: 'Certifications & Training',
      guidance: 'ParaPro Assessment score (if passed), CPR/First Aid with expiration, CPI, CLEET (if applicable), any district-specific training.',
    },
    {
      section: 'Education',
      guidance: 'School name, degree or "X credit hours completed," expected graduation if in progress. Include relevant coursework (Child Development, Special Education, Psychology).',
    },
  ],
}

const MISTAKES = [
  'Using "References available upon request" — just omit it, it\'s assumed',
  'Listing every job you\'ve ever had — keep it relevant to education and working with people',
  'Generic objectives like "Seeking a position where I can grow" — use a summary instead',
  'Inconsistent date formats (e.g., "Jan 2020" vs "01/2020")',
  'Using first person ("I helped...") — drop pronouns entirely',
  'Submitting the exact same resume to every district with no changes',
]

export default function ResumeTips() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Resume Tips</h2>
        <p className="text-sm text-gray-600 mt-1">
          Best practices specifically for paraprofessional and teacher assistant applications in Oklahoma.
        </p>
      </div>

      {/* Top 10 */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Top 10 Rules</h3>
        <div className="space-y-2">
          {TIPS.map(({ num, title, body }) => (
            <div key={num} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <span className="shrink-0 w-7 h-7 rounded-full bg-[#003087] text-white text-sm font-bold flex items-center justify-center">
                {num}
              </span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{title}</p>
                <p className="text-gray-600 text-sm mt-0.5">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section guide */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">What to Put in Each Section</h3>
        <div className="space-y-2">
          {SECTIONS.items.map(({ section, guidance }) => (
            <div key={section} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-[#003087] text-sm">{section}</p>
              <p className="text-gray-600 text-sm mt-0.5">{guidance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Common Mistakes to Avoid</h3>
        <ul className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
          {MISTAKES.map((m) => (
            <li key={m} className="flex items-start gap-3 px-4 py-3">
              <span className="text-red-500 mt-0.5 shrink-0">✕</span>
              <span className="text-sm text-gray-700">{m}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Free Resume Tools</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: 'Canva Resume Builder', note: 'Free ATS-friendly templates — use the simple layouts, not the fancy ones', url: 'https://www.canva.com/resumes/' },
            { name: 'Resume.io', note: 'Guided builder with education-specific templates', url: 'https://resume.io' },
            { name: 'Jobscan ATS Checker', note: 'Paste your resume + a job description to see your keyword match score', url: 'https://www.jobscan.co' },
            { name: 'Hemingway Editor', note: 'Paste your resume text — flags hard-to-read sentences and passive voice', url: 'https://hemingwayapp.com' },
          ].map(({ name, note, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-[#003087] text-sm">{name} →</p>
              <p className="text-gray-500 text-xs mt-0.5">{note}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
