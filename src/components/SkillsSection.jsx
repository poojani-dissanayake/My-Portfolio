import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('quality')
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <section
      id="skills"
      className="py-24 bg-navy dark:bg-navy-dark relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div
          className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white inline-block relative">
            Technical Arsenal
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-navy-light rounded-lg p-1">
            {[
              { id: 'quality', label: 'Quality Management' },
              { id: 'tools', label: 'Analytics & Tools' },
              { id: 'soft', label: 'Soft Skills' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-teal text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-navy-light/50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          {/* Quality Management Tab */}
          <div
            className={`transition-all duration-500 ${activeTab === 'quality' ? 'opacity-100 translate-x-0' : 'opacity-0 absolute -translate-x-10 pointer-events-none'}`}
          >
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { name: 'Value Stream Mapping', value: 85 },
                { name: 'Root Cause Analysis', value: 80 },
                { name: 'ISO 9001 Awareness', value: 75 },
                { name: 'Lean Concepts', value: 90 },
                { name: 'Six Sigma Foundations', value: 70 },
              ].map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-white">
                    <span>{skill.name}</span>
                    <span className="text-teal">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-navy-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal to-cyan rounded-full transition-all duration-1500 ease-out"
                      style={{
                        width:
                          isVisible && activeTab === 'quality'
                            ? `${skill.value}%`
                            : '0%',
                        transitionDuration: '1500ms',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics & Tools Tab */}
          <div
            className={`transition-all duration-500 ${activeTab === 'tools' ? 'opacity-100 translate-x-0' : 'opacity-0 absolute translate-x-10 pointer-events-none'}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Power BI', level: 'Advanced', icon: '📊' },
                { name: 'Excel', level: 'Advanced', icon: '📈' },
                { name: 'SQL', level: 'Intermediate', icon: '💾' },
                { name: 'Python', level: 'Intermediate', icon: '🐍' },
                { name: 'HTML/CSS', level: 'Familiar', icon: '🌐' },
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="group bg-navy-light border border-gray-800 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-teal/50 hover:shadow-[0_0_20px_rgba(0,201,167,0.2)] transition-all duration-300"
                  style={{ perspective: '1000px' }}
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-white font-poppins font-medium mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-teal uppercase tracking-wider">
                    {tool.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Tab */}
          <div
            className={`transition-all duration-500 ${activeTab === 'soft' ? 'opacity-100 translate-x-0' : 'opacity-0 absolute translate-x-10 pointer-events-none'}`}
          >
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full border border-dashed border-gray-700 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[450px] h-[450px] rounded-full border border-gray-800 animate-[spin_60s_linear_infinite_reverse]" />

              <div className="w-24 h-24 rounded-full bg-teal/20 border-2 border-teal flex items-center justify-center z-10 shadow-[0_0_30px_rgba(0,201,167,0.3)]">
                <span className="text-white font-poppins font-bold text-center leading-tight">
                  Soft
                  <br />
                  Skills
                </span>
              </div>

              {[
                'Leadership',
                'Communication',
                'Time Management',
                'Teamwork',
                'Attention to Detail',
              ].map((skill, i, arr) => {
                const angle = (i * 360) / arr.length - 90
                const radius = 180
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                return (
                  <div
                    key={i}
                    className="absolute px-4 py-2 bg-navy-light border border-gray-700 rounded-full text-white text-sm font-medium whitespace-nowrap shadow-lg hover:border-teal hover:text-teal transition-colors cursor-default"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: 'translate(-50%, -50%)',
                      animation: `float ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
