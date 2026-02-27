import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ProcessSection } from './components/ProcessSection'
import { TimelineSection } from './components/TimelineSection'
import { ExtracurricularSection } from './components/ExtracurricularSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number(scroll) * 100)
      setShowScrollTop(totalScroll > 500)
      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'process',
        'timeline',
        'contact',
      ]
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && totalScroll >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-soft-white dark:bg-navy transition-colors duration-300 font-inter`}
    >
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          className="h-full bg-teal transition-all duration-100 ease-out"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {!isLoading && (
        <>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            activeSection={activeSection}
          />

          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ProcessSection />
            <TimelineSection />
            <ExtracurricularSection />
            <TestimonialsSection />
            <ContactSection />
          </main>

          <Footer />

          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full bg-teal text-white shadow-lg shadow-teal/30 transition-all duration-500 z-40 hover:-translate-y-2 hover:shadow-teal/50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  )
}
