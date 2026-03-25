import TipsList from './TipsList.jsx'
import ResumeFormatter from './ResumeFormatter.jsx'

export default function ResumeHelper() {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-1">Resume Helper</h2>
      <p className="text-sm text-gray-600 mb-5">
        Best practices for paraprofessional and teacher assistant applications in Oklahoma City-area schools.
      </p>

      <h3 className="text-base font-bold text-gray-900 mb-3">Top 10 Resume Tips</h3>
      <TipsList />

      <hr className="my-8 border-gray-200" />

      <ResumeFormatter />
    </div>
  )
}
