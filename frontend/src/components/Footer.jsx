import React from 'react'
import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-lg font-bold">Grace Zawadi</span>
            <div className="h-1 w-1 bg-pink-500 rounded-full"></div>
            <span className="text-gray-500">Full-Stack Developer</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Made with
            </span>
            <FiHeart className="text-pink-500 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400">
              by Grace
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer