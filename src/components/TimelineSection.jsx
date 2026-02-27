import React from 'react'
import { Award, GraduationCap, BookOpen, Building2 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const milestones = [
  {
    year: '2020',
    title: 'ICT & English Diploma',
    icon: Award,
    description:
      'Built foundational skills in information technology and professional communication.',
    align: 'left',
  },
  {
    year: '2022',
    title: 'A/L Completed',
    icon: GraduationCap,
    description:
      'Successfully completed Advanced Level examinations with a focus on analytical subjects.',
    align: 'right',
  },
  {
    year: '2023',
    title: 'British Council Certification',
    icon: BookOpen,
    description:
      'Achieved advanced proficiency in English language and communication.',
    align: 'left',
  },
  {
    year: '2025–2028',
    title: 'BSc (Hons) Industrial & Service Quality Management',
    icon: Building2,
    description:
      'General Sir John Kotelawala Defence University. Focusing on Lean, Six Sigma, and Data Analytics.',
    align: 'right',
    highlight: true,
  },
]

export function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  return (
    <section
      id="timeline"
      className="py-24 bg-soft-white dark:bg-navy relative"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div
          className={`text-center mb-20 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy dark:text-white inline-block relative">
            Academic Journey
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal/20 via-teal to-cyan/20 -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const isLeft = milestone.align === 'left'
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''} transition-all duration-700 transform`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transitionDelay: `${idx * 200}ms`,
                  }}
                >
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <div
                      className={`glass-card p-6 rounded-2xl border ${milestone.highlight ? 'border-teal/50 shadow-[0_0_15px_rgba(0,201,167,0.15)]' : 'border-gray-200 dark:border-navy-light'} hover:-translate-y-1 transition-transform duration-300`}
                    >
                      <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-sm font-bold rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-poppins font-bold text-navy dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-inter text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-navy border-4 border-teal flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,201,167,0.3)]">
                    <milestone.icon className="w-5 h-5 text-teal" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
