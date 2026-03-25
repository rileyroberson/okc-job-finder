const TIPS = [
  {
    num: 1,
    tip: 'Tailor your resume to each job description',
    detail: 'Mirror the exact keywords from the posting — many districts use ATS software that filters before a human ever reads it.',
  },
  {
    num: 2,
    tip: 'Lead with a strong professional summary',
    detail: 'Two to three sentences focused on your education support experience. Make it specific — "5 years supporting K-5 classrooms" beats "experienced professional."',
  },
  {
    num: 3,
    tip: 'Quantify your impact where possible',
    detail: 'Numbers stand out. "Supported a classroom of 24 students" or "assisted 6 students with IEPs" is more compelling than vague descriptions.',
  },
  {
    num: 4,
    tip: 'List relevant certifications prominently',
    detail: 'CPR, First Aid, paraprofessional certification, ELL/ESL endorsements, CPI (Crisis Prevention Intervention) — put these near the top.',
  },
  {
    num: 5,
    tip: 'Highlight IEP and special education experience',
    detail: 'If you have experience with IEPs, behavior intervention plans, or specific disabilities (autism, Down syndrome, learning disabilities), say so explicitly.',
  },
  {
    num: 6,
    tip: 'Use strong education action verbs',
    detail: 'Facilitated, supported, implemented, monitored, collaborated, scaffolded, reinforced, redirected, documented — these resonate with hiring principals.',
  },
  {
    num: 7,
    tip: 'Keep formatting ATS-friendly',
    detail: 'One font, consistent spacing, no tables, columns, headers/footers, or text boxes. Save as .docx or PDF — never as an image.',
  },
  {
    num: 8,
    tip: 'One page if under 10 years of experience',
    detail: 'Principals review dozens of applications. A clean one-pager signals you can communicate concisely — a valued classroom skill.',
  },
  {
    num: 9,
    tip: 'Include education and college hours even without a degree',
    detail: 'Many para positions require 48 college credit hours or a degree. List your institution, major, and total hours completed. Every bit counts.',
  },
  {
    num: 10,
    tip: 'Proofread — grammar errors are disqualifying',
    detail: 'You are applying to work in an educational setting. A typo or grammar error signals carelessness around the very skill you will reinforce daily.',
  },
]

export default function TipsList() {
  return (
    <div className="space-y-3">
      {TIPS.map(({ num, tip, detail }) => (
        <div key={num} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <span className="shrink-0 w-7 h-7 rounded-full bg-okc-blue text-white text-sm font-bold flex items-center justify-center">
            {num}
          </span>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{tip}</p>
            <p className="text-gray-600 text-sm mt-0.5">{detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
