import React, { useEffect, useState, useRef } from 'react'

export default function CountdownTimer({ initial = 60, onFinish }) {
  const [seconds, setSeconds] = useState(initial)
  const prev = useRef(seconds)

  useEffect(() => {
    prev.current = seconds
  }, [seconds])

  // Main ticking effect
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => {
        if (s === 0) return 120   // restart from 2 minutes
        return s - 1
      })
    }, 1000)

    return () => clearInterval(id)
  }, [])

  // Fire callback when reaching zero
  useEffect(() => {
    if (seconds === 0 && onFinish) {
      onFinish()
    }
  }, [seconds, onFinish])

  const mins = Math.floor(seconds / 60)
  const secs = String(seconds % 60).padStart(2, '0')
  const display = `${mins}:${secs}`

  return (
    <div className="timer" role="timer" aria-live="polite" aria-atomic="true">
      <div className={`timer-digits ${prev.current !== seconds ? 'tick' : ''}`}>
        {display}
      </div>
    </div>
  )
}
