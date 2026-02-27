import React, { useState } from 'react'
import { Mail, MapPin, Linkedin, Send } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-navy dark:bg-navy-dark relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(#00C9A7 1px, transparent 1px), linear-gradient(90deg, #00C9A7 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
        }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                Let's <span className="text-teal">Connect</span>
              </h2>
              <p className="text-gray-400 font-inter text-lg max-w-md">
                Interested in discussing quality engineering, lean
                methodologies, or potential opportunities? I'm always open to
                connecting.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'poojani.dissanayake@email.com',
                  href: 'mailto:poojani.dissanayake@email.com',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Sri Lanka',
                  href: '#',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'Connect professionally',
                  href: '#',
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center p-4 rounded-xl bg-navy-light/50 border border-gray-800 hover:border-teal/50 hover:bg-teal/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-navy border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-teal group-hover:border-teal transition-colors mr-6">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-poppins font-medium group-hover:text-teal transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="glass-card bg-navy-light/80 border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {isSuccess && (
                <div className="absolute inset-0 bg-navy/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center animate-fade-in">
                  <div className="relative w-24 h-24 mb-6">
                    <svg
                      className="absolute inset-0 w-full h-full text-teal"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="animate-draw-circle"
                        strokeDasharray="251"
                        strokeDashoffset="251"
                      />
                      <path
                        d="M30 50 L45 65 L70 35"
                        className="animate-draw-check"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 font-inter text-center">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 pt-6 pb-2 bg-navy border-b-2 border-gray-700 text-white focus:outline-none focus:border-teal transition-colors peer rounded-t-md"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-teal"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 pt-6 pb-2 bg-navy border-b-2 border-gray-700 text-white focus:outline-none focus:border-teal transition-colors peer rounded-t-md"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-teal"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 pt-6 pb-2 bg-navy border-b-2 border-gray-700 text-white focus:outline-none focus:border-teal transition-colors peer rounded-t-md"
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-teal"
                  >
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="block w-full px-4 pt-6 pb-2 bg-navy border-b-2 border-gray-700 text-white focus:outline-none focus:border-teal transition-colors peer rounded-t-md resize-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-teal"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-teal hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal focus:ring-offset-navy transition-colors overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-active:scale-100 group-active:opacity-0 transition-all duration-500 rounded-full origin-center" />

                  <span className="relative flex items-center text-lg font-poppins">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
