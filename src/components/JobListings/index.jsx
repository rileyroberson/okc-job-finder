import { useState, useEffect, useCallback } from 'react'
import JobCard from './JobCard.jsx'
import JobFilters from './JobFilters.jsx'

export default function JobListings({ onApplyFromListing }) {
  const [listings, setListings] = useState([])
  const [employers, setEmployers] = useState([])
  const [lastScraped, setLastScraped] = useState(null)
  const [filters, setFilters] = useState({ employer: '', sort: 'datePosted' })
  const [loading, setLoading] = useState(true)
  const [scraping, setScraping] = useState(false)
  const [error, setError] = useState(null)

  const fetchListings = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      if (filters.employer) params.set('employer', filters.employer)
      if (filters.sort) params.set('sort', filters.sort)
      const res = await fetch(`/api/listings?${params}`)
      if (!res.ok) throw new Error('Failed to fetch listings')
      const data = await res.json()
      setListings(data.listings)
      setEmployers(data.employers)
      setLastScraped(data.lastScraped)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchListings()
  }, [fetchListings])

  async function handleScrape() {
    setScraping(true)
    try {
      await fetch('/api/scrape', { method: 'POST' })
      await fetchListings()
    } catch (err) {
      setError('Scrape failed: ' + err.message)
    } finally {
      setScraping(false)
    }
  }

  const formattedDate = lastScraped
    ? new Date(lastScraped).toLocaleString('en-US', {
        month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
      })
    : null

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Current Openings</h2>
          {formattedDate && (
            <p className="text-xs text-gray-500 mt-0.5">Last updated {formattedDate}</p>
          )}
        </div>
        <button
          onClick={handleScrape}
          disabled={scraping}
          className="flex items-center gap-2 bg-okc-gold text-white text-sm font-medium px-4 py-2 rounded hover:bg-yellow-500 transition-colors disabled:opacity-60"
        >
          {scraping ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Refreshing...
            </>
          ) : 'Refresh Listings'}
        </button>
      </div>

      <JobFilters employers={employers} filters={filters} onChange={setFilters} />

      <div className="mt-4">
        {loading && (
          <div className="text-center py-16 text-gray-500">Loading listings...</div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded p-4 text-sm">{error}</div>
        )}
        {!loading && !error && listings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">No listings found. Click "Refresh Listings" to scrape current openings.</p>
            <button
              onClick={handleScrape}
              disabled={scraping}
              className="bg-okc-blue text-white px-6 py-2 rounded font-medium hover:bg-blue-800 transition-colors disabled:opacity-60"
            >
              {scraping ? 'Searching...' : 'Search for Jobs Now'}
            </button>
          </div>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {listings.map((job) => (
            <JobCard key={job.id} job={job} onApply={onApplyFromListing} />
          ))}
        </div>
        {!loading && listings.length > 0 && (
          <p className="text-center text-xs text-gray-400 mt-4">{listings.length} listings</p>
        )}
      </div>
    </div>
  )
}
