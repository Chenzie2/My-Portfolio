import React from 'react'
import { FiSun, FiMoon, FiCode } from 'react-icons/fi'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FiCode className="text-2xl text-pink-500" />
            <span className="text-xl font-bold">Grace Zawadi</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-pink-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-pink-500 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-pink-500 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-pink-500 transition-colors"
            >
              Contact
            </button>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-500" />
              ) : (
                <FiMoon className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar