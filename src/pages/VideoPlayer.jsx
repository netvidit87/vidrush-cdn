import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getVideoUrl } from '../config'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function VideoPlayer() {
  const { id: paramId } = useParams()
  const [searchParams] = useSearchParams()
  const id = paramId || searchParams.get('id') || searchParams.get('v') || ''
  const videoSrc = getVideoUrl(id)

  const videoRef = useRef(null)
  const [copied, setCopied] = useState(false)

  // Popunder
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://ahuramazda.org/1/d4b3da13003ae6d27d4378a79cb4332d'
    s.setAttribute('data-cfasync', 'false')
    s.async = true
    document.body.appendChild(s)
    return () => {
      if (s.parentNode) s.parentNode.removeChild(s)
    }
  }, [])

  useEffect(() => {
    document.title = id ? `VidRush - ${id}` : 'VidRush'
  }, [id])

  useEffect(() => {
    const v = videoRef.current
    if (!v || !videoSrc) return
    v.play()?.catch(() => {})
  }, [videoSrc])

  const handleShare = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: 'VidRush', url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {}
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="w-full max-w-[720px] mx-auto flex-grow px-0 md:px-4 md:mt-3">
        <div className="w-full flex justify-center">
          {videoSrc ? (
            <video
              ref={videoRef}
              key={videoSrc}
              className="w-full md:rounded-[8px]"
              style={{ maxHeight: '520px' }}
              controls
              autoPlay
              playsInline
              src={videoSrc}
            />
          ) : (
            <div className="w-full aspect-video bg-black md:rounded-[8px] flex items-center justify-center text-white text-sm">
              Video not found
            </div>
          )}
        </div>

        <div className="w-full flex flex-col items-center mt-4 mb-6">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none shadow-sm h-9 py-2 rounded-full px-6 gap-2 bg-gray-100 hover:bg-gray-200 font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            {copied ? 'Copied!' : 'Share video'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
