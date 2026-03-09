import React, { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiGithub } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll for nav shadow + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = NAV_LINKS.map(link => document.getElementById(link.id))
      const scrollPos = window.scrollY + 100

      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
        : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo — GZ monogram */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center shadow-sm group-hover:shadow-pink-200 dark:group-hover:shadow-pink-900/40 transition-shadow duration-300">
              <span className="text-white font-bold text-sm font-heading tracking-wide">GZ</span>
            </div>
            <span className="text-lg font-bold font-heading hidden sm:block">Grace Zawadi</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === id
                    ? 'text-pink-500 bg-pink-50 dark:bg-pink-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500" />
                )}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">

            {/* Download CV */}
            <a
              href="/grace-zawadi-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <FiDownload className="text-sm" />
              Resume
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile: dark mode + hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />}
            </button>
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="text-gray-700 dark:text-gray-300" /> : <FiMenu className="text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-1 pb-4 border-t border-gray-100 dark:border-gray-800 pt-4">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === id
                    ? 'text-pink-500 bg-pink-50 dark:bg-pink-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-pink-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </button>
            ))}

            <div className="flex items-center gap-3 px-4 pt-3 border-t border-gray-100 dark:border-gray-800 mt-2">
              <a
                href="https://github.com/Chenzie2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-pink-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href="/grace-zawadi-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all"
              >
                <FiDownload className="text-sm" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar