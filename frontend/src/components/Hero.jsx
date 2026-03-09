import React, { useEffect, useState } from 'react'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import heroImg from '../assets/me.jpg'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const fadeUp = (delay) =>
    `transition-all duration-700 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`

  return (
    <section id="about" className="relative py-16 md:py-28 overflow-hidden">

      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Left — Text */}
          <div className="lg:w-1/2 text-center lg:text-left">

            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800/40 text-sm text-pink-600 dark:text-pink-400 font-medium mb-6 ${fadeUp(0)}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              Open to opportunities
              <FiMapPin className="text-xs ml-1" />
              Nairobi, Kenya
            </div>

            {/* Name */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading leading-tight ${fadeUp(1)}`}
              style={{ transitionDelay: '120ms' }}
            >
             
              <span className="text-gradient">Grace Zawadi</span>
            </h1>

            {/* Tagline */}
            <p
              className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6 ${fadeUp(2)}`}
              style={{ transitionDelay: '240ms' }}
            >
              Full-stack developer turning ideas into{' '}
              <span className="highlight">elegant digital experiences</span>
            </p>

            {/* Bio */}
            <p
              className={`text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 ${fadeUp(3)}`}
              style={{ transitionDelay: '360ms' }}
            >
              I build responsive web apps with <strong className="text-gray-800 dark:text-gray-200">React, Flask, and Python</strong>; and I bring a data-aware perspective to everything I create, from working with datasets using Pandas & NumPy to designing intuitive UIs that make complex information feel simple.
            </p>

            <p
              className={`text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 ${fadeUp(3)}`}
              style={{ transitionDelay: '400ms' }}
            >
              Currently levelling up with <span className="text-pink-500 font-medium">TypeScript</span>, <span className="text-pink-500 font-medium">PostgreSQL</span>, and <span className="text-pink-500 font-medium">FastAPI</span>...there's always something new to explore.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${fadeUp(4)}`}
              style={{ transitionDelay: '480ms' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/30 hover:shadow-xl transform hover:-translate-y-1 font-medium"
              >
                View My Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-pink-400 text-pink-500 dark:text-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300 font-medium"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className={`lg:w-1/2 flex justify-center ${fadeUp(5)}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-pink-200 to-purple-300 dark:from-pink-600 dark:via-pink-400 dark:to-purple-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <img
                    src={heroImg}
                    alt="Grace Zawadi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating tech badge — top right */}
              <div className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-lg border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                 React + Flask
              </div>

              {/* Floating data badge — bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-lg border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                 Python + Data
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero