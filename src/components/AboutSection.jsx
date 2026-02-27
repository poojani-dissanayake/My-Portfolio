import React from 'react'
import { Search, Settings, BarChart3 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      className="py-24 relative bg-soft-white dark:bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={sectionRef}
      >
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy dark:text-white inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2">
                <div className="absolute inset-0 rounded-full border-2 border-teal animate-[spin_10s_linear_infinite] border-t-transparent" />
                <div className="absolute inset-2 rounded-full border-2 border-cyan/50 animate-[spin_15s_linear_infinite_reverse] border-b-transparent" />

                <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-light to-teal flex items-center justify-center overflow-hidden shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Poojani Dissanayake"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-inter leading-relaxed">
                A detail-oriented Quality Management undergraduate passionate
                about transforming inefficiencies into streamlined, data-backed
                processes. Combining analytical thinking with lean methodologies
                to drive measurable improvements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {[
                  {
                    icon: Search,
                    title: 'Analytical Thinking',
                    color: 'text-insight-purple',
                  },
                  {
                    icon: Settings,
                    title: 'Process Optimization',
                    color: 'text-teal',
                  },
                  {
                    icon: BarChart3,
                    title: 'Data-Driven Strategy',
                    color: 'text-cyan',
                  },
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-4 flex items-center space-x-4 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-navy-light ${pillar.color}`}
                    >
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <span className="font-poppins font-medium text-sm text-navy dark:text-white">
                      {pillar.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200 dark:border-navy-light">
            <StatItem
              value={4}
              suffix="+"
              label="Major Projects"
              isVisible={isVisible}
              delay={300}
            />
            <StatItem
              value={5}
              suffix="+"
              label="Quality Tools Applied"
              isVisible={isVisible}
              delay={400}
            />
            <StatItem
              value={50}
              suffix="k+"
              label="Data Points Analyzed"
              isVisible={isVisible}
              delay={500}
            />
            <StatItem
              value={3}
              suffix=""
              label="Process Improvement Studies"
              isVisible={isVisible}
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, suffix, label, isVisible, delay }) {
  const count = useCountUp(value, 2000, isVisible)
  return (
    <div
      className="text-center transition-all duration-700 transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-4xl md:text-5xl font-poppins font-bold text-teal mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 font-inter uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
