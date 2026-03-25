import { useState, useRef } from 'react'

export default function ResumeFormatter() {
  const [draft, setDraft] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const outputRef = useRef(null)

  async function handleFormat() {
    if (!draft.trim()) return
    setLoading(true)
    setOutput('')
    setError(null)

    try {
      const res = await fetch('/api/resume/format', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText: draft }),
      })

      if (!res.ok) throw new Error('Server error')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        for (const line of chunk.split('\n')) {
          if (line.startsWith('data: ')) {
            const payload = line.slice(6)
            if (payload === '[DONE]') break
            try {
              const { text } = JSON.parse(payload)
              setOutput((prev) => prev + text)
              // scroll output into view
              if (outputRef.current) {
                outputRef.current.scrollTop = outputRef.current.scrollHeight
              }
            } catch {}
          }
        }
      }
    } catch (err) {
      setError('Failed to format resume: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(output)
  }

  return (
    <div className="mt-8">
      <h3 className="text-base font-bold text-gray-900 mb-1">Resume Formatter</h3>
      <p className="text-sm text-gray-600 mb-3">
        Paste your current resume draft below and Claude will reformat it for education support roles —
        ATS-friendly, strong action verbs, and paraprofessional-specific highlights.
      </p>

      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Paste your resume here..."
        rows={10}
        className="w-full border border-gray-300 rounded-lg p-3 text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-okc-blue"
      />

      <button
        onClick={handleFormat}
        disabled={loading || !draft.trim()}
        className="mt-2 bg-okc-blue text-white px-6 py-2 rounded font-medium text-sm hover:bg-blue-800 transition-colors disabled:opacity-60"
      >
        {loading ? 'Formatting...' : 'Format Resume'}
      </button>

      {error && (
        <div className="mt-3 bg-red-50 border border-red-200 text-red-700 rounded p-3 text-sm">{error}</div>
      )}

      {output && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900 text-sm">Formatted Resume</h4>
            <button
              onClick={handleCopy}
              className="text-xs text-okc-blue hover:underline"
            >
              Copy to clipboard
            </button>
          </div>
          <textarea
            ref={outputRef}
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            rows={14}
            className="w-full border border-gray-200 rounded-lg p-3 text-sm font-mono bg-gray-50 resize-y focus:outline-none focus:ring-2 focus:ring-okc-blue"
          />
        </div>
      )}
    </div>
  )
}
