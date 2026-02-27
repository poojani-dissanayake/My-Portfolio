import React, { useEffect, useState, Fragment } from 'react'
import { ArrowRight, Download } from 'lucide-react'

const phrases = [
  'Process Optimizer',
  'Quality Enthusiast',
  'Data Explorer',
  'Continuous Improvement Thinker',
]

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 10 + 10}s`,
  animationDelay: `${Math.random() * 5}s`,
}))

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000
    const timer = setTimeout(() => {
      const fullText = phrases[textIndex]
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
      if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % phrases.length)
        return
      }
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1),
      )
    }, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, textIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern dark:bg-navy bg-soft-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-navy-light/10 to-teal/5 dark:via-navy-light/50 dark:to-teal/10 pointer-events-none" />

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-teal/30 dark:bg-cyan/40 animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
              Quality Engineer in the Making
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-navy dark:text-white leading-tight">
                Transforming <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-cyan">
                  Processes
                </span>{' '}
                <br />
                Into Performance
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-lg">
                Industrial & Service Quality Management Undergraduate <br />
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                  Lean | Six Sigma | Data Analytics
                </span>
              </p>
            </div>

            <div className="h-8 flex items-center text-xl sm:text-2xl font-poppins font-medium text-navy dark:text-white">
              <span className="mr-2">I am a</span>
              <span className="text-teal">{currentText}</span>
              <span className="w-0.5 h-6 bg-teal ml-1 animate-pulse" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="group relative px-8 py-4 bg-teal text-white rounded-lg font-medium overflow-hidden shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 rounded-lg font-medium border-2 border-gray-200 dark:border-navy-light text-navy dark:text-white hover:border-teal dark:hover:border-teal hover:text-teal dark:hover:text-teal transition-colors duration-300 flex items-center justify-center glass-card">
                Download CV
                <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          <div
            className="hidden lg:flex justify-center items-center h-[500px] relative animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative w-full h-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-teal/20 border-2 border-teal flex items-center justify-center animate-pulse-glow z-20">
                <div className="w-16 h-16 rounded-full bg-teal/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-teal" />
                </div>
              </div>

              {[0, 72, 144, 216, 288].map((angle, i) => {
                const radius = 140
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                return (
                  <Fragment key={i}>
                    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="currentColor"
                        className="text-teal/30 dark:text-teal/20"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    <div
                      className="absolute w-12 h-12 rounded-full bg-white dark:bg-navy-light border border-gray-200 dark:border-navy-light shadow-lg flex items-center justify-center z-20 transition-transform duration-500 hover:scale-110 hover:border-cyan"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `float ${4 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-cyan' : 'bg-teal'}`}
                      />
                    </div>
                  </Fragment>
                )
              })}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-gray-300 dark:border-navy-light animate-[spin_20s_linear_infinite] z-0 opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gray-200 dark:border-navy-light/50 animate-[spin_30s_linear_infinite_reverse] z-0 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
