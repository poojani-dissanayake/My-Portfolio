import React, { useState, createElement } from 'react'
import {
  Search,
  GitBranch,
  Settings,
  BarChart3,
  ChevronRight,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    id: 1,
    title: 'Identify Waste',
    icon: Search,
    description:
      'Using Gemba walks, process observation, and data collection to identify non-value-adding activities and the 8 wastes of lean.',
  },
  {
    id: 2,
    title: 'Analyze Root Cause',
    icon: GitBranch,
    description:
      'Applying fishbone diagrams, 5 Whys, and Pareto analysis to drill down to the true root cause of quality issues.',
  },
  {
    id: 3,
    title: 'Optimize Process',
    icon: Settings,
    description:
      'Implementing kaizen events, standardized work, and poka-yoke solutions to eliminate waste and improve flow.',
  },
  {
    id: 4,
    title: 'Measure & Control',
    icon: BarChart3,
    description:
      'Establishing control charts, KPIs, and feedback loops to sustain improvements and drive continuous enhancement.',
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section
      id="process"
      className="py-24 bg-navy dark:bg-navy-dark relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent hidden lg:block" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white inline-block relative">
            How I Think
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
          <p className="mt-4 text-gray-400 font-inter max-w-2xl mx-auto">
            A structured, data-driven approach to continuous improvement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="w-full lg:w-1/2 relative">
            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-[10px]">
              <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-800 -translate-y-1/2 z-0">
                <div
                  className="h-full bg-teal transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeStep - 1) / 3) * 100}%`,
                  }}
                />
              </div>

              <div className="lg:hidden absolute left-8 top-10 bottom-10 w-0.5 bg-gray-800 z-0">
                <div
                  className="w-full bg-teal transition-all duration-500 ease-out"
                  style={{
                    height: `${((activeStep - 1) / 3) * 100}%`,
                  }}
                />
              </div>

              {steps.map((step, idx) => {
                const isActive = activeStep === step.id
                const isPast = activeStep > step.id
                return (
                  <div
                    key={step.id}
                    className={`relative z-10 flex flex-row lg:flex-col items-center gap-6 lg:gap-4 cursor-pointer group transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{
                      transitionDelay: `${idx * 150}ms`,
                    }}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'bg-teal border-teal text-white shadow-[0_0_20px_rgba(0,201,167,0.4)] scale-110' : isPast ? 'bg-navy-light border-teal text-teal' : 'bg-navy-light border-gray-700 text-gray-500 group-hover:border-gray-500'}`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>

                    <div className="lg:text-center">
                      <div
                        className={`text-xs font-bold tracking-wider uppercase mb-1 ${isActive || isPast ? 'text-teal' : 'text-gray-600'}`}
                      >
                        Step {step.id}
                      </div>
                      <div
                        className={`font-poppins font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="glass-card bg-navy-light/50 border border-gray-800 rounded-2xl p-8 lg:p-12 min-h-[250px] relative overflow-hidden">
              <div className="absolute -right-4 -bottom-10 text-[150px] font-poppins font-bold text-white/5 select-none pointer-events-none leading-none">
                {activeStep}
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal mr-4">
                    {createElement(steps[activeStep - 1].icon, {
                      className: 'w-5 h-5',
                    })}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-white">
                    {steps[activeStep - 1].title}
                  </h3>
                </div>

                <p
                  className="text-lg text-gray-300 font-inter leading-relaxed animate-fade-in"
                  key={activeStep}
                >
                  {steps[activeStep - 1].description}
                </p>

                <div
                  className="mt-8 flex items-center text-teal text-sm font-medium uppercase tracking-wider cursor-pointer hover:text-cyan transition-colors"
                  onClick={() =>
                    setActiveStep((prev) => (prev < 4 ? prev + 1 : 1))
                  }
                >
                  {activeStep < 4 ? 'Next Step' : 'Restart Process'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
