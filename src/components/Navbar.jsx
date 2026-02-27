import React, { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export function Navbar({ isDarkMode, toggleDarkMode, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-navy/80 backdrop-blur-md border-b border-gray-200 dark:border-navy-light shadow-sm py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            <span className="text-2xl font-poppins font-bold text-navy dark:text-white tracking-wider">
              Poojani Dissanayake<span className="text-teal">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-teal ${activeSection === link.name.toLowerCase() ? 'text-teal border-b-2 border-teal pb-1' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-navy" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-navy" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-teal focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-navy border-b border-gray-200 dark:border-navy-light shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-navy-light ${activeSection === link.name.toLowerCase() ? 'text-teal' : 'text-gray-600 dark:text-gray-300 hover:text-teal hover:bg-gray-50 dark:hover:bg-navy-light'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
