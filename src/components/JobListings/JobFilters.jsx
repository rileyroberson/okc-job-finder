export default function JobFilters({ employers, filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">District</label>
        <select
          value={filters.employer}
          onChange={(e) => onChange({ ...filters, employer: e.target.value })}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-okc-blue"
        >
          <option value="">All Districts</option>
          {employers.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">Sort by</label>
        <select
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value })}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-okc-blue"
        >
          <option value="datePosted">Date Posted</option>
          <option value="employer">District</option>
          <option value="scrapedAt">Recently Added</option>
        </select>
      </div>
    </div>
  )
}
