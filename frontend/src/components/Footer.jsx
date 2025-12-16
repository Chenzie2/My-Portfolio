import React from 'react'
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiHeart } from 'react-icons/fi'
import { SiReact, SiFlask, SiTailwindcss } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Brand & Bio */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                <div className="text-white font-bold text-xl">GZ</div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading">Grace Zawadi</h2>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Passionate beginner software engineer creating fun, functional web experiences with React, Flask, and creative problem-solving. Always learning and growing!
            </p>
            
            <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-6">
              "Faith, code, and a spark of imagination."
            </p>
            
            <div className="flex space-x-4">
              <SiReact className="text-2xl text-blue-400" />
              <SiFlask className="text-2xl text-gray-400" />
              <SiTailwindcss className="text-2xl text-teal-400" />
            </div>
          </div>

          {/* Middle Column - Quick Links & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 font-heading">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Always excited to collaborate on interesting projects or just have a chat about code!
              </p>
              
              <div className="flex space-x-4">
                <a href="https://github.com/Chenzie2" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FiGithub className="text-lg" />
                </a>
                <a href="https://www.linkedin.com/in/grace-zawadi-3988a2301/" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FiLinkedin className="text-lg" />
                </a>
                <a href="https://www.instagram.com/g_zawie/" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FiInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Talk to Us</h3>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent! (This is a demo)');
              }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl">💬</div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Enquiry?</label>
                  <input
                    type="text"
                    placeholder="Your message here..."
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <FiMail className="text-xl text-pink-500" />
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-800/30">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Typically replies within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-800"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Grace Zawadi. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Made with
            </span>
            <FiHeart className="text-pink-500 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              by Grace
            </span>
            <span className="mx-2">•</span>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer