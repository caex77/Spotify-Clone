import React, { useRef, useState, useEffect } from 'react'

const ScrollingText = ({ text, className = '', textClassName = '' }) => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const [shouldScroll, setShouldScroll] = useState(false)
  const [duration, setDuration] = useState(6)

  useEffect(() => {
  const measure = () => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const textWidth = textRef.current.scrollWidth
      setShouldScroll(textWidth > containerWidth)

      const speed = 50
      setDuration(textWidth / speed)
    }
  }
  measure()
  window.addEventListener('resize', measure)
  return () => window.removeEventListener('resize', measure)
  }, [text])

  return (
    <div ref={containerRef} className={`group overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${shouldScroll ? 'group-hover:animate-marquee' : ''}`}
      style={{ animationDuration: `${duration}s` }}
      >
        <p ref={textRef} className={`inline-block pr-8 ${textClassName}`}>
          {text}
        </p>
        {shouldScroll && (
          <p className={`inline-block pr-8 ${textClassName}`} aria-hidden="true">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default ScrollingText