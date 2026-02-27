import React from 'react'
import { Quote, Linkedin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    quote:
      'A dedicated student who demonstrates exceptional analytical thinking and a genuine passion for quality improvement methodologies. Poojani consistently applies theoretical concepts to practical scenarios with impressive clarity.',
    name: 'Dr. Sanjaya Jayasooriya',
    title: 'Dean – Faculty of Industrial Studies',
    institution: 'General Sir John Kotelawala Defence University',
    linkedin: '#',
  },
  {
    quote:
      'Shows remarkable attention to detail and a strong foundation in scientific methodology that translates well into quality management practices. Her ability to synthesize complex data into actionable insights is commendable.',
    name: 'Ms. Nishadi Rajapakshe',
    title: 'Senior Lecturer',
    institution: 'Institute of Chemistry Ceylon',
    linkedin: '#',
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <section className="py-24 bg-soft-white dark:bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[50px] text-navy dark:text-navy-dark"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12"
        ref={ref}
      >
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy dark:text-white inline-block relative">
            Professional References
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-teal rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card relative p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-navy-light hover:border-teal/30 dark:hover:border-teal/30 transition-all duration-500 transform group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${idx * 200}ms`,
              }}
            >
              <Quote className="absolute top-6 right-6 w-24 h-24 text-gray-100 dark:text-navy-light opacity-50 -z-10 group-hover:text-teal/10 transition-colors duration-500" />

              <div className="relative z-10">
                <p className="text-lg text-gray-700 dark:text-gray-300 font-inter italic leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 dark:border-navy-light pt-6 mt-auto">
                  <div>
                    <h4 className="font-poppins font-bold text-navy dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-teal font-medium mb-1">
                      {testimonial.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {testimonial.institution}
                    </p>
                  </div>

                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-50 dark:bg-navy-light text-gray-400 hover:text-teal hover:bg-teal/10 transition-colors duration-300"
                    aria-label={`LinkedIn profile of ${testimonial.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
