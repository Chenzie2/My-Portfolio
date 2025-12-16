import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import heroImg from '../assets/me.jpg'

const Hero = () => {
  return (
    <section id="about" className="py-12 md:py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-left font-heading">
              Grace Zawadi
            </h1>
            
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-2">
                <span className="highlight relative">
                  Software Engineer
                </span>
              </p>
              <p className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-400 mb-8">
                "Faith, code, and a spark of imagination."
              </p>
            </div>
            
            <div className="text-left mb-10">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-gray-900 dark:text-white">Hi I'm Grace Zawadi</span>, a passionate beginner software engineer who loves creating fun, functional web experiences. I enjoy working with React, Flask, and bringing ideas to life with code. When I'm not coding, I'm exploring design trends, experimenting with animations, and finding creative ways to solve real-life problems.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-pink-500 text-pink-500 dark:text-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
          
          {/* Right Column - Image */}
<div className="lg:w-1/2">
  <div className="relative">
    {/* Gradient Background Container */}
    <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden shadow-2xl flex items-center justify-center p-4">
      
      {/* Circular Photo - now bigger */}
      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900">
        <img 
          src={heroImg} 
          alt="Grace Zawadi" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-pink-200 dark:bg-pink-800/30 blur-xl"></div>
    <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-purple-200 dark:bg-purple-800/30 blur-xl"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default Hero