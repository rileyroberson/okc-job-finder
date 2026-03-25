import { useState } from 'react'
import FindJobs from './components/FindJobs/index.jsx'
import ResumeTips from './components/ResumeTips/index.jsx'
import CoverLetter from './components/CoverLetter/index.jsx'
import InterviewPrep from './components/InterviewPrep/index.jsx'
import AppChecklist from './components/AppChecklist/index.jsx'
import CertsAndPay from './components/CertsAndPay/index.jsx'

const TABS = [
  { id: 'jobs',      label: 'Find Jobs' },
  { id: 'resume',    label: 'Resume Tips' },
  { id: 'cover',     label: 'Cover Letter' },
  { id: 'interview', label: 'Interview Prep' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'certs',     label: 'Certs & Pay' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('jobs')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-[#003087] text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <h1 className="text-base sm:text-xl font-bold tracking-tight leading-snug">
            OKC Paraprofessional &amp; Teacher Assistant Jobs
          </h1>
          <p className="text-blue-200 text-xs sm:text-sm mt-0.5">Your job search toolkit — OKC metro area</p>
        </div>
      </header>

      {/* Tab bar — scrollable, hidden scrollbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max px-2 sm:px-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors min-h-[44px] ${
                activeTab === tab.id
                  ? 'border-[#003087] text-[#003087]'
                  : 'border-transparent text-gray-600 active:text-[#003087]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-3 sm:px-4 py-4 sm:py-6">
        {activeTab === 'jobs'      && <FindJobs />}
        {activeTab === 'resume'    && <ResumeTips />}
        {activeTab === 'cover'     && <CoverLetter />}
        {activeTab === 'interview' && <InterviewPrep />}
        {activeTab === 'checklist' && <AppChecklist />}
        {activeTab === 'certs'     && <CertsAndPay />}
      </main>

      <footer className="bg-white border-t border-gray-200 text-center text-xs text-gray-400 py-3 px-4">
        Links open the official employer sites. Verify postings are still active before applying.
      </footer>
    </div>
  )
}
