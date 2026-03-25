const QUESTIONS = [
  {
    category: 'About You & Your Experience',
    items: [
      {
        q: 'Tell me about yourself.',
        a: 'Keep it under 2 minutes. Structure: who you are professionally → relevant experience → why this role. Don\'t recite your resume — highlight 2-3 strengths that apply to classroom support.',
      },
      {
        q: 'Why do you want to work with students in this age group?',
        a: 'Be specific and genuine. Reference a real experience. "I love working with elementary students because..." is stronger than a general statement about loving kids.',
      },
      {
        q: 'What experience do you have supporting students with disabilities or special needs?',
        a: 'If you have it, be specific: disability category, what you did, outcomes. If you don\'t, be honest and frame what transferable skills you have (patience, communication, following instructions from a supervisor).',
      },
      {
        q: 'Have you ever worked with a student who had an IEP? What was your role?',
        a: 'If yes: describe your specific responsibilities. If no: explain your understanding of what an IEP is and express willingness to be trained.',
      },
    ],
  },
  {
    category: 'Scenario & Behavioral Questions',
    items: [
      {
        q: 'Tell me about a time a student was having a really hard day. What did you do?',
        a: 'Use the STAR method: Situation, Task, Action, Result. Focus on your calm response, how you redirected or supported the student, and what the outcome was. Avoid blaming the student.',
      },
      {
        q: 'How would you handle a student who refuses to do their work?',
        a: 'Talk through your approach: first understand why (frustration? hunger? sensory overload?), then use the strategies available (break, preferred activity, reduced task). Show you work with the lead teacher, not independently.',
      },
      {
        q: 'Describe a time you disagreed with a teacher or supervisor. How did you handle it?',
        a: 'They\'re testing whether you\'re professional and collaborative. Pick an example where you raised a concern respectfully, through appropriate channels, and deferred to the decision. Avoid anything that makes you sound insubordinate.',
      },
      {
        q: 'What would you do if a student said something that made you concerned for their safety?',
        a: 'You report it immediately to the lead teacher and/or principal, document it, and follow the district\'s mandated reporter protocol. Emphasize: you don\'t investigate or handle it alone.',
      },
      {
        q: 'How do you manage multiple students who need help at the same time?',
        a: 'Prioritize by urgency, use strategies like giving one student a task to keep them engaged while you help another, and communicate with the lead teacher. Shows you can think on your feet without panicking.',
      },
    ],
  },
  {
    category: 'Collaboration & Teamwork',
    items: [
      {
        q: 'How do you see the relationship between a paraprofessional and a lead teacher?',
        a: 'The lead teacher directs instruction and sets the plan — your role is to support that plan, work with specific students, and communicate observations back. You should show you understand the hierarchy and are comfortable with it.',
      },
      {
        q: 'How do you communicate with a teacher if you notice a student struggling?',
        a: 'Describe a low-disruption method: a quick note, end-of-day check-in, or using the school\'s communication tools. Show you document and report, not guess and handle it yourself.',
      },
      {
        q: 'Have you ever worked in a co-teaching or team environment?',
        a: 'If yes, describe it. If no, describe your ability to adapt to others\' styles and take direction.',
      },
    ],
  },
  {
    category: 'Practical & Logistics Questions',
    items: [
      {
        q: 'Are you comfortable performing personal care tasks (diapering, feeding, mobility assistance)?',
        a: 'Be honest. Many special education para roles require this. If you\'re open to it, say so. If you have experience, mention it matter-of-factly.',
      },
      {
        q: 'Are you CPI or de-escalation trained? Would you be willing to be trained?',
        a: 'If certified, say so and mention when it expires. If not, express genuine willingness. CPI training is typically provided by the district.',
      },
      {
        q: 'Do you have your ParaPro Assessment on file or are you planning to take it?',
        a: 'Oklahoma requires paraprofessionals to hold 48 college hours OR an associate\'s degree OR pass the ParaPro. Know your status before the interview.',
      },
    ],
  },
]

const WHAT_TO_BRING = [
  'Government-issued photo ID',
  'Social Security card (many districts require it at hiring)',
  'Official transcripts or college credit hours documentation',
  'ParaPro Assessment score report (if applicable)',
  'CPR/First Aid certification card',
  'CPI or other behavior management certifications',
  '3 professional references with current contact info (not family)',
  'Voided check or bank account info (for direct deposit setup)',
  'Any prior district or school employment paperwork',
  'A copy of your resume (bring 2-3 printed copies)',
]

const QUESTIONS_TO_ASK = [
  'What does a typical day look like for the paraprofessional in this classroom?',
  'Who will I be working most closely with, and how do they prefer to communicate?',
  'What training do you provide for new paraprofessionals?',
  'How are students\' IEP goals communicated to support staff?',
  'What does success look like in this role after the first 90 days?',
  'Is this position full-time with benefits, or part-time?',
  'What\'s the process for professional development or advancement here?',
]

export default function InterviewPrep() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Interview Prep</h2>
        <p className="text-sm text-gray-600 mt-1">
          Common questions for paraprofessional and teacher assistant interviews, with guidance on how to answer each one.
        </p>
      </div>

      {/* Questions by category */}
      {QUESTIONS.map(({ category, items }) => (
        <section key={category}>
          <h3 className="text-base font-bold text-gray-800 mb-3">{category}</h3>
          <div className="space-y-3">
            {items.map(({ q, a }) => (
              <details key={q} className="bg-white border border-gray-200 rounded-lg shadow-sm group">
                <summary className="flex items-start justify-between gap-3 px-4 py-3 cursor-pointer list-none">
                  <span className="font-medium text-gray-900 text-sm">{q}</span>
                  <span className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform text-lg leading-none">
                    ↓
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                  <p className="text-sm text-gray-700 leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      {/* What to bring */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">What to Bring</h3>
        <p className="text-xs text-gray-500 mb-2">For the interview itself and potentially same-day onboarding paperwork:</p>
        <ul className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
          {WHAT_TO_BRING.map((item) => (
            <li key={item} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700">
              <span className="text-[#003087] shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Questions to ask them */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-2">Questions to Ask Them</h3>
        <p className="text-sm text-gray-500 mb-3">
          Always have 2-3 questions ready. It shows genuine interest and helps you evaluate the role.
        </p>
        <ul className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
          {QUESTIONS_TO_ASK.map((q) => (
            <li key={q} className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700">
              <span className="text-amber-500 shrink-0 mt-0.5">?</span>
              {q}
            </li>
          ))}
        </ul>
      </section>

      {/* Quick tips box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 space-y-1">
        <p className="font-bold">Before the interview:</p>
        <ul className="space-y-1 mt-1">
          <li>• Look up the school on the district website — know the grade levels, programs, and principal\'s name</li>
          <li>• Prepare a 2-minute answer to "Tell me about yourself" and practice it out loud</li>
          <li>• Dress professionally — business casual minimum, business professional is better</li>
          <li>• Arrive 10 minutes early; bring the interviewer\'s contact number in case of delay</li>
          <li>• Send a brief thank-you email within 24 hours of the interview</li>
        </ul>
      </div>
    </div>
  )
}
