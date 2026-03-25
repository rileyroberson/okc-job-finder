export default function CoverLetterForm({ values, onChange, onSubmit, loading }) {
  function field(name, label, placeholder, required = true, multiline = false) {
    const props = {
      id: name,
      value: values[name] || '',
      onChange: (e) => onChange({ ...values, [name]: e.target.value }),
      placeholder,
      required,
      className:
        'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-okc-blue',
    }
    return (
      <div key={name}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {multiline ? (
          <textarea {...props} rows={3} className={props.className + ' resize-y'} />
        ) : (
          <input type="text" {...props} />
        )}
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit() }}
      className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {field('applicantName', 'Your Name', 'Jane Smith')}
        {field('jobTitle', 'Job Title', 'Paraprofessional / Teacher Assistant')}
        {field('employer', 'School District / Employer', 'Oklahoma City Public Schools')}
      </div>

      {field(
        'experience',
        'Your Relevant Experience (2-3 sentences)',
        'e.g., "I have 3 years supporting K-3 classrooms, including daily one-on-one work with students on IEPs..."',
        true,
        true
      )}

      {field(
        'whyDistrict',
        'Why This District? (optional)',
        'e.g., "OKCPS\'s commitment to inclusive education aligns with my experience..."',
        false,
        true
      )}

      <button
        type="submit"
        disabled={loading || !values.applicantName || !values.jobTitle || !values.employer || !values.experience}
        className="w-full bg-okc-blue text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-60"
      >
        {loading ? 'Writing...' : 'Generate Cover Letter'}
      </button>
    </form>
  )
}
