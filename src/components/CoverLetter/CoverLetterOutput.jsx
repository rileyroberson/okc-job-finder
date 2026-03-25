export default function CoverLetterOutput({ text, loading }) {
  if (!text && !loading) return null

  function handleCopy() {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-gray-900">Your Cover Letter</h3>
        {text && (
          <button onClick={handleCopy} className="text-sm text-okc-blue hover:underline">
            Copy to clipboard
          </button>
        )}
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {loading && !text ? (
          <div className="p-6 text-sm text-gray-400 animate-pulse">Writing your cover letter...</div>
        ) : (
          <textarea
            value={text}
            onChange={() => {}}
            rows={16}
            className="w-full p-5 text-sm leading-relaxed rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-okc-blue"
          />
        )}
      </div>
      {text && (
        <p className="text-xs text-gray-400 mt-2">
          Edit directly above before copying. Personalize any details to match the specific role.
        </p>
      )}
    </div>
  )
}
