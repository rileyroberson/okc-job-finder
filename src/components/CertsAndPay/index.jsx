const OK_REQUIREMENTS = [
  {
    title: 'Oklahoma Paraprofessional Eligibility (Federal Requirement)',
    body: 'To work in a Title I school (most OKC-area public schools qualify), you must meet ONE of these:',
    list: [
      '48 semester credit hours at an accredited college or university',
      'Associate\'s degree or higher',
      'Passing score on the ParaPro Assessment (score of 457 or higher)',
    ],
    note: 'Even for non-Title I schools, most OKC districts use the same standard. Confirm with the specific district\'s HR.',
  },
  {
    title: 'ParaPro Assessment',
    body: 'A standardized test administered by ETS (Educational Testing Service). Tests reading, writing, and math skills plus classroom application.',
    list: [
      'Passing score: 457 out of 480',
      'Registration fee: ~$65 (check ETS for current pricing)',
      'Offered at Pearson VUE testing centers — there are locations in OKC',
      'Study guide available free at ets.org/parapro',
    ],
    link: { label: 'ETS ParaPro Info & Registration', url: 'https://www.ets.org/parapro.html' },
  },
  {
    title: 'Oklahoma State Teaching Credential (for Teaching Assistants)',
    body: 'Some TA roles (especially substitute teaching or lead roles in pre-K programs) may require or benefit from an Emergency or Alternative certification through OSDE.',
    list: [
      'Not required for standard paraprofessional roles',
      'Can be a differentiator if you\'re also pursuing a teaching career',
    ],
    link: { label: 'OSDE Certification Info', url: 'https://sde.ok.gov/educator-certification' },
  },
]

const HELPFUL_CERTS = [
  {
    cert: 'CPR / First Aid',
    why: 'Required by most districts. Demonstrates basic safety preparedness.',
    where: 'American Red Cross, American Heart Association, or local fire departments',
    cost: '$40-80',
    link: 'https://www.redcross.org/take-a-class/cpr',
  },
  {
    cert: 'CPI — Crisis Prevention Intervention',
    why: 'Gold standard for de-escalation in special education. Many districts require it for SpEd para roles. Usually provided by district, but having it pre-hire sets you apart.',
    where: 'Crisis Prevention Institute (crisisprevention.com)',
    cost: 'Free if district-provided. ~$150-300 if self-funded.',
    link: 'https://www.crisisprevention.com',
  },
  {
    cert: 'Registered Behavior Technician (RBT)',
    why: 'Highly valued for ABA therapy roles and autism support paraprofessionals. Requires 40 hours of training + a competency assessment.',
    where: 'BACB-supervised providers — several in OKC',
    cost: '$50 application fee + training costs',
    link: 'https://www.bacb.com/rbt/',
  },
  {
    cert: 'Google Classroom / Microsoft Educator Certification',
    why: 'Most OKC-area schools use Google Workspace or Microsoft 365. A cert demonstrates digital literacy.',
    where: 'Google: edu.google.com/teacher-center | Microsoft: education.microsoft.com',
    cost: 'Free',
    link: 'https://edu.google.com/teacher-center/certifications/',
  },
  {
    cert: 'Special Olympics Unified Champion Schools Training',
    why: 'Demonstrates commitment to inclusion — valued by districts with strong special education programs.',
    where: 'Online at Special Olympics Oklahoma',
    cost: 'Free',
    link: 'https://www.specialolympicsok.org',
  },
  {
    cert: 'Medication Administration Training (MAT)',
    why: 'Some para roles require administering medication to students. OSDE offers this training.',
    where: 'Oklahoma State Dept. of Education — Health Services',
    cost: 'Usually free through district',
    link: 'https://sde.ok.gov/health-services',
  },
]

const PAY_RANGES = [
  { district: 'Oklahoma City Public Schools', range: '$14.00 – $17.50/hr', note: 'Varies by assignment and years of experience. Benefits eligible at 30+ hours/week.' },
  { district: 'Edmond Public Schools', range: '$14.50 – $18.00/hr', note: 'Competitive pay with full benefits for full-time positions.' },
  { district: 'Moore Public Schools', range: '$13.50 – $17.00/hr', note: 'Salary schedule available on district HR site.' },
  { district: 'Putnam City Schools', range: '$13.50 – $17.00/hr', note: 'Check current salary schedule — updated annually.' },
  { district: 'Midwest City–Del City', range: '$13.00 – $16.50/hr', note: 'Rates for instructional aide and educational technician roles.' },
  { district: 'Mustang / Yukon / Deer Creek', range: '$13.00 – $17.00/hr', note: 'Smaller districts; benefits packages vary. Ask HR directly.' },
  { district: 'Private & Nonprofit Orgs', range: '$12.00 – $16.00/hr', note: 'Typically lower than public schools, but can offer flexible schedules.' },
]

const BENEFITS_TO_ASK = [
  'Health, dental, and vision insurance — and at what cost to you',
  'Whether part-time positions qualify for benefits (often 30+ hrs/week threshold)',
  'Oklahoma Teachers\' Retirement System (TRS) eligibility — paraprofessionals can sometimes participate',
  'Paid leave: sick days, personal days, and how they accrue',
  'School calendar holidays and summer schedule — most para positions follow the school calendar (may be unpaid over summer)',
  'Professional development stipends or tuition assistance',
  'Whether the district will fund your ParaPro Assessment or CPI training',
]

export default function CertsAndPay() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Certifications & Pay</h2>
        <p className="text-sm text-gray-600 mt-1">
          Oklahoma eligibility requirements, credentials that set you apart, and what to expect for pay in OKC-area districts.
        </p>
      </div>

      {/* Requirements */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Oklahoma Requirements</h3>
        <div className="space-y-4">
          {OK_REQUIREMENTS.map(({ title, body, list, note, link }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <p className="font-bold text-[#003087] text-sm">{title}</p>
              <p className="text-gray-700 text-sm mt-1">{body}</p>
              <ul className="mt-2 space-y-1">
                {list.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-[#003087] shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              {note && <p className="mt-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded">{note}</p>}
              {link && (
                <a href={link.url} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#003087] border border-[#003087] px-3 py-1.5 rounded hover:bg-blue-50 transition-colors">
                  {link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Helpful certifications */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Credentials That Set You Apart</h3>
        <div className="space-y-3">
          {HELPFUL_CERTS.map(({ cert, why, where, cost, link }) => (
            <div key={cert} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-gray-900 text-sm">{cert}</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded shrink-0">{cost}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{why}</p>
              <p className="text-xs text-gray-500 mt-1"><span className="font-medium">Where:</span> {where}</p>
              <a href={link} target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-[#003087] hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pay ranges */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-2">Typical Pay — OKC Area</h3>
        <p className="text-xs text-gray-500 mb-3">
          Ranges are estimates based on publicly available salary schedules. Verify current rates directly with district HR.
        </p>
        {/* Mobile: cards. Desktop: table */}
        <div className="sm:hidden space-y-2">
          {PAY_RANGES.map(({ district, range, note }) => (
            <div key={district} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-gray-900 text-sm">{district}</p>
                <span className="font-bold text-green-700 text-sm shrink-0">{range}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{note}</p>
            </div>
          ))}
        </div>
        <div className="hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-2 text-xs font-bold text-gray-600 uppercase tracking-wide">District</th>
                <th className="text-left px-4 py-2 text-xs font-bold text-gray-600 uppercase tracking-wide">Est. Hourly Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {PAY_RANGES.map(({ district, range, note }) => (
                <tr key={district} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">{district}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{note}</p>
                  </td>
                  <td className="px-4 py-3 font-semibold text-green-700 whitespace-nowrap">{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3">Benefits to Ask About</h3>
        <ul className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
          {BENEFITS_TO_ASK.map((b) => (
            <li key={b} className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700">
              <span className="text-amber-500 shrink-0 mt-0.5">→</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <strong>Oklahoma Teachers' Retirement System (TRS):</strong> Some paraprofessional roles are TRS-eligible, meaning your employer and you both contribute to a pension. This is a significant benefit worth asking about. Visit{' '}
        <a href="https://www.ok.gov/TRS" target="_blank" rel="noopener noreferrer" className="underline">ok.gov/TRS</a>
        {' '}for details.
      </div>
    </div>
  )
}
