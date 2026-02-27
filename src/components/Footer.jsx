import React from 'react'
import { Linkedin, Mail, Github } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark border-t border-teal/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div
            className="text-center cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            <span className="text-3xl font-poppins font-bold text-white tracking-wider">
              PD<span className="text-teal">.</span>
            </span>
            <p className="mt-2 text-gray-400 font-inter text-sm uppercase tracking-widest">
              Precision in Motion
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-teal transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:poojani.dissanayake@email.com"
              className="text-gray-400 hover:text-teal transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center border-t border-gray-800 w-full pt-8">
            <p className="text-gray-500 font-inter text-sm">
              Designed with precision by Poojani Dissanayake
            </p>
            <p className="text-gray-600 font-inter text-xs mt-2">
              &copy; {currentYear} Poojani Dissanayake. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
