import React, { useState, useEffect, useRef } from 'react'
import { MessageCircleMore } from 'lucide-react'
import { cn } from '@/lib/utils'

const Chatbot = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const { type, value } = e.data as { type: string; value: string }
      if (type === 'toggle-fullscreen') setIsFullScreen(value === 'true')
      if (type === 'close-window') {
        setIsFullScreen(false)
        setIsOpen(false)
      }

      console.log('Parent received:', e.data)
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  const handleIframeLoad = () => {
    const iframe = iframeRef.current
    iframe?.contentWindow?.postMessage({ action: 'assistant:init', key: 'CBF596538C1CA23542732DA6F7C2E' }, '*')
  }
  const URL = 'https://chatbot-widget-bice.vercel.app/'

  return (
    <div className='flex items-center justify-center h-16 w-16 bg-accent cursor-pointer relative z-100 col-start-5'>
      <MessageCircleMore className='text-white' strokeWidth={1.25} size={36} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className={cn('z-[200] absolute bottom-16 right-0 h-[600px] w-[400px] bg-white border border-gray-300 shadow-lg', isFullScreen && 'w-5xl')}>
          <iframe ref={iframeRef} onLoad={handleIframeLoad} className='w-full h-full border-0' src={URL} allow='clipboard-read; clipboard-write; microphone' />
        </div>
      )}
    </div>
  )
}

export default Chatbot
