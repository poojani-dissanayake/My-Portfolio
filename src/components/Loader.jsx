import React, { useEffect, useState } from 'react'

export function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setProgress(Math.min((currentStep / steps) * 100, 100))
      if (currentStep >= steps) {
        clearInterval(timer)
        setIsFading(true)
        setTimeout(onComplete, 500)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy transition-opacity duration-500 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full text-teal animate-pulse-glow"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon
            points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
            strokeDasharray="300"
            strokeDashoffset={300 - (progress / 100) * 300}
            className="transition-all duration-75 ease-linear"
          />
        </svg>

        <div className="text-4xl font-poppins font-bold text-white tracking-wider animate-fade-in">
          PD
        </div>
      </div>

      <div className="w-64 h-1 bg-navy-light rounded-full overflow-hidden">
        <div
          className="h-full bg-teal transition-all duration-75 ease-linear"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="mt-4 text-teal font-inter text-sm tracking-widest uppercase">
        Initializing Precision
      </div>
    </div>
  )
}
