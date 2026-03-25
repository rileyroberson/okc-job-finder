import { useState } from 'react'

const PHASES = [
  {
    phase: 'Before You Apply',
    color: 'blue',
    items: [
      { id: 'para-cert', text: 'Confirm your Oklahoma paraprofessional eligibility: 48 college credit hours, associate\'s degree, OR passing ParaPro Assessment score' },
      { id: 'transcripts', text: 'Order official transcripts from every college attended (many districts require official copies — not screenshots)' },
      { id: 'resume', text: 'Update and tailor your resume to the specific posting — use keywords from the job description' },
      { id: 'references', text: 'Line up 3 professional references (past supervisors, teachers, coaches — not family or friends). Ask them first.' },
      { id: 'ref-info', text: 'Collect each reference\'s: full name, title, employer, phone, email, and your relationship to them' },
      { id: 'frontline', text: 'Create a Frontline Education (AppliTrack) account at applitrack.com — used by most OKC-area districts' },
      { id: 'certs-ready', text: 'Locate physical copies of certifications: CPR/First Aid, CPI, ParaPro score report' },
      { id: 'cbcheck', text: 'Be prepared for a background check — know your history, don\'t be caught off guard' },
    ],
  },
  {
    phase: 'The Application',
    color: 'green',
    items: [
      { id: 'read-jd', text: 'Read the entire job description — note the required vs. preferred qualifications' },
      { id: 'tailor-resume', text: 'Adjust your resume summary and keywords to match this specific posting' },
      { id: 'cover-letter', text: 'Write a tailored cover letter — name the school/district, principal if known, and specific role' },
      { id: 'all-fields', text: 'Fill in every field in the online application — blank fields suggest carelessness' },
      { id: 'check-docs', text: 'Attach resume, cover letter, transcripts, and any required certifications in the correct format (PDF preferred)' },
      { id: 'review', text: 'Read the entire application before submitting — typos in an education application are disqualifying' },
      { id: 'submit-confirm', text: 'Note the confirmation number or screenshot the confirmation page' },
      { id: 'calendar', text: 'Add the application deadline and expected decision date to your calendar' },
    ],
  },
  {
    phase: 'After You Apply',
    color: 'amber',
    items: [
      { id: 'follow-up', text: 'If you haven\'t heard back in 2 weeks, call the school or HR office to confirm receipt and express continued interest' },
      { id: 'notify-refs', text: 'Email your references to let them know they may be contacted and for what role' },
      { id: 'email-check', text: 'Check your email (including spam/junk) daily — district HR often moves quickly' },
      { id: 'phone-ready', text: 'Keep your phone on and check voicemail — some HR offices only call once' },
      { id: 'keep-applying', text: 'Keep applying to other openings — don\'t wait on one application' },
      { id: 'track', text: 'Track where you\'ve applied (spreadsheet, notes app, etc.) — districts, dates, contacts, and status' },
    ],
  },
  {
    phase: 'Interview Offered — Before You Go',
    color: 'purple',
    items: [
      { id: 'research', text: 'Research the school: grade levels, programs, demographics, principal\'s name, recent news' },
      { id: 'prep-answers', text: 'Prepare STAR-method answers for at least 5 behavioral questions (see Interview Prep tab)' },
      { id: 'print-resume', text: 'Print 2-3 copies of your resume on clean paper' },
      { id: 'gather-docs', text: 'Gather all physical documents you may need (ID, transcripts, certifications, references list)' },
      { id: 'confirm-time', text: 'Confirm interview time, location, and who you\'re meeting with — get a contact number' },
      { id: 'clothes', text: 'Lay out professional clothes the night before — business casual minimum' },
      { id: 'route', text: 'Map the route and plan to arrive 10-15 minutes early' },
      { id: 'questions', text: 'Prepare 2-3 thoughtful questions to ask the interviewer' },
    ],
  },
  {
    phase: 'After the Interview',
    color: 'red',
    items: [
      { id: 'thank-you', text: 'Send a thank-you email within 24 hours — brief, professional, specific to the conversation' },
      { id: 'notes', text: 'Write down questions they asked and how you answered — use this to improve for the next one' },
      { id: 'follow-up2', text: 'If they gave you a decision timeline, follow up one business day after that date if you haven\'t heard' },
      { id: 'offer-review', text: 'If offered: review the full offer letter before signing — confirm start date, pay, hours, and benefits' },
    ],
  },
]

const COLOR_MAP = {
  blue:   { dot: 'bg-[#003087]', check: 'text-[#003087]', header: 'bg-blue-50 border-blue-200 text-blue-900' },
  green:  { dot: 'bg-green-600', check: 'text-green-600', header: 'bg-green-50 border-green-200 text-green-900' },
  amber:  { dot: 'bg-amber-500', check: 'text-amber-500', header: 'bg-amber-50 border-amber-200 text-amber-900' },
  purple: { dot: 'bg-purple-600', check: 'text-purple-600', header: 'bg-purple-50 border-purple-200 text-purple-900' },
  red:    { dot: 'bg-red-500',   check: 'text-red-500',   header: 'bg-red-50 border-red-200 text-red-900' },
}

export default function AppChecklist() {
  const allIds = PHASES.flatMap(p => p.items.map(i => i.id))
  const [checked, setChecked] = useState({})

  function toggle(id) {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function resetAll() {
    setChecked({})
  }

  const totalDone = Object.values(checked).filter(Boolean).length
  const total = allIds.length
  const pct = Math.round((totalDone / total) * 100)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Application Checklist</h2>
        <p className="text-sm text-gray-600 mt-1">
          Every step from before you apply to after the interview. Check off as you go.
        </p>
      </div>

      {/* Progress bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{totalDone} of {total} completed</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#003087]">{pct}%</span>
            <button onClick={resetAll} className="text-xs text-gray-400 hover:text-gray-600 underline">
              Reset
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#003087] h-2 rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {PHASES.map(({ phase, color, items }) => {
        const c = COLOR_MAP[color]
        const phaseDone = items.filter(i => checked[i.id]).length
        return (
          <section key={phase}>
            <div className={`flex items-center justify-between px-4 py-2 rounded-t-lg border ${c.header}`}>
              <h3 className="font-bold text-sm flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${c.dot} inline-block`} />
                {phase}
              </h3>
              <span className="text-xs font-medium opacity-75">{phaseDone}/{items.length}</span>
            </div>
            <ul className="bg-white border border-t-0 border-gray-200 rounded-b-lg shadow-sm divide-y divide-gray-100">
              {items.map(({ id, text }) => (
                <li key={id}>
                  <label className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={!!checked[id]}
                      onChange={() => toggle(id)}
                      className="mt-0.5 shrink-0 accent-[#003087]"
                    />
                    <span className={`text-sm transition-colors ${checked[id] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        )
      })}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <strong>Track your applications separately.</strong> Use a simple spreadsheet with columns for: District, School, Job Title, Date Applied, Contact, Status, and Notes. It takes 5 minutes to set up and will save you a lot of confusion if you\'re applying to multiple openings.
      </div>
    </div>
  )
}
