import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { X, ExternalLink } from 'lucide-react'

const projectsData = [
  {
    id: 'sales-analytics',
    title: 'Global Sales Performance Analytics',
    problem:
      'Analyzing global sales trends across regions to identify growth opportunities',
    tools: ['Power BI', 'Excel', 'SQL'],
    impact: 'Identified 23% revenue optimization opportunity',
    details: {
      methodology:
        'Extracted 3 years of historical sales data, cleaned anomalies, and built interactive dashboards to visualize regional performance vs targets.',
      insights: [
        'Q3 consistently underperformed in APAC region',
        'Top 5% of products generated 40% of total revenue',
        'Discounting strategies in EMEA negatively impacted margins by 12%',
      ],
      lessons:
        'Learned the importance of data normalization before visualization and how to effectively communicate complex data stories to stakeholders.',
    },
  },
  {
    id: 'superstore',
    title: 'Global Superstore Analysis',
    problem:
      'Deep-dive into superstore dataset to uncover operational inefficiencies',
    tools: ['Python', 'Excel', 'Data Visualization'],
    impact: 'Mapped 15+ KPIs across 4 market segments',
    details: {
      methodology:
        'Utilized Python (Pandas/Matplotlib) to perform exploratory data analysis, identifying shipping bottlenecks and unprofitable product categories.',
      insights: [
        'Standard class shipping delays correlated with 15% drop in repeat customers',
        'Furniture category in Southern region operated at a net loss',
        'Seasonal demand spikes were not adequately forecasted',
      ],
      lessons:
        'Gained proficiency in Python for data manipulation and understood how operational metrics directly tie to financial outcomes.',
    },
  },
  {
    id: 'university-service',
    title: 'University Service Quality Improvement',
    problem:
      'Evaluating and improving service delivery quality in university operations',
    tools: ['SERVQUAL', 'Statistical Analysis', 'Survey Design'],
    impact: 'Proposed 5 actionable improvement strategies',
    details: {
      methodology:
        'Designed and distributed a SERVQUAL questionnaire to 500+ students. Analyzed gaps between expected and perceived service quality.',
      insights: [
        'Largest gap identified in "Responsiveness" dimension',
        'Library facilities met expectations, but IT support fell short',
        'Communication channels were fragmented, causing student frustration',
      ],
      lessons:
        'Mastered the SERVQUAL framework and learned how to quantify qualitative feedback into actionable operational changes.',
    },
  },
  {
    id: 'toyota-vsm',
    title: 'Toyota Value Stream Mapping Study',
    problem:
      "Applying lean principles to map and optimize Toyota's production value stream",
    tools: ['VSM', 'Lean Tools', 'Process Mapping'],
    impact: 'Identified 30% waste reduction potential',
    details: {
      methodology:
        'Created current state and future state value stream maps for a simulated production line, identifying bottlenecks and non-value-added activities.',
      insights: [
        'Inventory buildup between stations 2 and 3 caused 40% of lead time',
        'Changeover times were excessive compared to industry benchmarks',
        'Implementing a pull system could reduce WIP by 50%',
      ],
      lessons:
        'Deepened understanding of Lean manufacturing principles and the practical application of Value Stream Mapping to visualize flow.',
    },
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
  })
  const [selectedProject, setSelectedProject] = useState(null)

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <section
      id="projects"
      className="py-24 bg-soft-white dark:bg-navy relative"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy dark:text-white inline-block relative">
            Featured Case Studies
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 font-inter max-w-2xl mx-auto">
            Practical applications of quality management, lean thinking, and
            data analytics to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-8 transition-all duration-700 transform cursor-pointer border border-gray-200 dark:border-navy-light hover:border-teal/50 dark:hover:border-teal/50 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${idx * 150}ms`,
                transitionProperty:
                  'opacity, transform, border-color, box-shadow',
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-poppins font-bold text-navy dark:text-white group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
                <div className="p-2 bg-teal/10 rounded-full text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 font-inter mb-6 line-clamp-2">
                {project.problem}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-navy-light text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-navy-light flex items-center justify-between">
                <div>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Impact
                  </span>
                  <span className="font-poppins font-semibold text-teal">
                    {project.impact}
                  </span>
                </div>
                <button className="text-sm font-medium text-navy dark:text-white group-hover:text-teal transition-colors flex items-center">
                  View Case Study
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-white dark:bg-navy rounded-2xl shadow-2xl animate-slide-up">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-navy-light text-gray-500 hover:text-navy dark:hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 sm:p-12">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy dark:text-white mb-4 pr-12">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm font-medium bg-teal/10 text-teal rounded-full border border-teal/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="flex items-center text-lg font-poppins font-semibold text-navy dark:text-white mb-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal text-white text-xs mr-3">
                        1
                      </span>
                      The Problem
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="flex items-center text-lg font-poppins font-semibold text-navy dark:text-white mb-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal text-white text-xs mr-3">
                        2
                      </span>
                      Methodology
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                      {selectedProject.details.methodology}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-navy-light rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h4 className="flex items-center text-lg font-poppins font-semibold text-navy dark:text-white mb-6">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal text-white text-xs mr-3">
                      3
                    </span>
                    Data Analysis
                  </h4>

                  <div className="h-64 flex items-end justify-between gap-2 px-4">
                    {[40, 65, 30, 85, 55, 90, 45].map((height, i) => (
                      <div key={i} className="w-full relative group">
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-navy text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          Data Point {i + 1}
                        </div>
                        <div
                          className="w-full bg-gradient-to-t from-teal/50 to-cyan rounded-t-sm transition-all duration-1000 ease-out hover:from-teal hover:to-cyan-light"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-gray-500 font-medium uppercase tracking-wider border-t border-gray-200 dark:border-gray-700 pt-4">
                    <span>Baseline</span>
                    <span>Optimization Phase</span>
                    <span>Target Reached</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="flex items-center text-lg font-poppins font-semibold text-navy dark:text-white mb-4">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal text-white text-xs mr-3">
                        4
                      </span>
                      Key Insights
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.details.insights.map((insight, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 font-inter">
                            {insight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-teal/5 dark:bg-teal/10 rounded-xl p-6 border border-teal/20">
                    <h4 className="flex items-center text-lg font-poppins font-semibold text-navy dark:text-white mb-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal text-white text-xs mr-3">
                        5
                      </span>
                      Business Impact
                    </h4>
                    <div className="text-3xl font-poppins font-bold text-teal my-4">
                      {selectedProject.impact}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                      Measurable outcome achieved through applied methodologies.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-navy-light pt-8">
                  <h4 className="flex items-center text-lg font-poppins font-semibold text-navy dark:text-white mb-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal text-white text-xs mr-3">
                      6
                    </span>
                    Lessons Learned
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-inter italic border-l-4 border-teal pl-4 py-2 bg-gray-50 dark:bg-navy-light/50 rounded-r-lg">
                    "{selectedProject.details.lessons}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
