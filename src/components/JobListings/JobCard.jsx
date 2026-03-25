export default function JobCard({ job, onApply }) {
  const posted = job.datePosted
    ? new Date(job.datePosted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'Unknown date'

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{job.title}</h3>
          <p className="text-okc-blue font-medium text-sm mt-0.5">{job.employer}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
            {job.location && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </span>
            )}
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Posted {posted}
            </span>
            {job.salary && (
              <span className="flex items-center gap-1 text-green-700 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {job.salary}
              </span>
            )}
          </div>
          {job.description && (
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{job.description}</p>
          )}
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap shrink-0 bg-gray-50 px-2 py-1 rounded">
          {job.source}
        </span>
      </div>

      <div className="mt-3 flex gap-2">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-okc-blue text-white text-sm font-medium py-1.5 rounded hover:bg-blue-800 transition-colors"
        >
          Apply
        </a>
        <button
          onClick={() => onApply(job)}
          className="flex-1 text-center border border-okc-blue text-okc-blue text-sm font-medium py-1.5 rounded hover:bg-blue-50 transition-colors"
        >
          Write Cover Letter
        </button>
      </div>
    </div>
  )
}
