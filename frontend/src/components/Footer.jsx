import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-10 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left — Branding */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center shadow-sm group-hover:shadow-pink-200 dark:group-hover:shadow-pink-900/40 transition-shadow">
              <span className="text-white font-bold text-xs font-heading">GZ</span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">
              Grace Zawadi
            </span>
          </button>

          {/* Center — Copyright */}
          <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
            © {currentYear} · Made with
            <FiHeart className="text-pink-400 animate-pulse" />
            by Grace
          </p>

          {/* Right — Socials */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:gracezawadi24@gmail.com"
              className="p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200"
              aria-label="Email"
            >
              <FiMail className="text-lg" />
            </a>
            <a
              href="https://github.com/Chenzie2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/grace-zawadi-3988a2301/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer