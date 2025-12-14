import React from 'react'
import { FiStar } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="about" className="py-12 md:py-20 animate-fade-in">
      <div className="text-center">
        <div className="inline-block mb-4 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-full">
          <FiStar className="text-4xl text-pink-500 animate-bounce-slow" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-pink-500">Grace Zawadi</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
          "Faith, code, and a spark of imagination."
        </p>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            A passionate full-stack developer with a love for creating beautiful, 
            functional web applications. I combine technical expertise with 
            creative problem-solving to build digital experiences that make a difference.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 dark:text-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero