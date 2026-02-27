import React from 'react'
import { Music, Medal, Leaf, Users, Smile, Mic } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const activities = [
  {
    title: 'Visharad in North Indian Vocal Music',
    icon: Music,
    description:
      'Completed advanced certification in Hindustani classical vocals, demonstrating long-term dedication and discipline.',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    title: 'All Island Karate Championship',
    icon: Medal,
    description:
      'Competed at national level demonstrating physical discipline, strategic thinking, and focus under pressure.',
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Nature Club Member',
    icon: Leaf,
    description:
      'Active participant in environmental conservation initiatives and sustainability awareness campaigns.',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-500',
  },
  {
    title: 'Rotaract Member',
    icon: Users,
    description:
      'Engaged in community service, project management, and leadership development activities.',
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Dancing Club',
    icon: Smile,
    description:
      'Creative expression through traditional and contemporary dance, fostering teamwork and cultural appreciation.',
    color: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-500',
  },
  {
    title: 'Unimedia Club',
    icon: Mic,
    description:
      'Developed media production, event coordination, and public communication skills.',
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-500',
  },
]

export function ExtracurricularSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-navy dark:bg-navy-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white inline-block relative">
            Beyond Academics
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
          <p className="mt-4 text-gray-400 font-inter max-w-2xl mx-auto">
            A well-rounded approach to personal development and community
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="group relative h-64 rounded-2xl overflow-hidden transition-all duration-700 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-navy-light border border-gray-800 rounded-2xl transition-colors group-hover:border-gray-700" />

              <div
                className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-full">
                <div
                  className={`w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4 ${activity.iconColor} shadow-lg`}
                >
                  <activity.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-poppins font-bold text-white">
                  {activity.title}
                </h3>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-white font-inter text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
