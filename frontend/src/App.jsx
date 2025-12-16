import React, { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiCode, FiGithub, FiLinkedin, FiMail, FiChevronRight } from 'react-icons/fi'
import { SiReact, SiPython, SiFlask, SiTailwindcss, SiJavascript, SiFigma } from 'react-icons/si'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const storedTheme = localStorage.getItem('theme')
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <SiReact className="text-blue-400" /> },
    { name: 'Python', icon: <SiPython className="text-green-400" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
    { name: 'HTML/CSS', icon: <FiCode className="text-orange-500" /> },
    { name: 'REST APIs', icon: <div className="text-purple-400">API</div> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  ]

  const projects = [
    {
      title: 'E-Commerce Store',
      description: 'Full-featured online shopping platform with cart and checkout',
      tags: ['React', 'Flask', 'PostgreSQL'],
      status: 'Completed'
    },
    {
      title: 'Task Manager App',
      description: 'Collaborative project management tool with real-time updates',
      tags: ['React', 'Socket.io', 'MongoDB'],
      status: 'In Progress'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts',
      tags: ['React', 'API', 'Chart.js'],
      status: 'Completed'
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FiCode className="text-2xl text-pink-500" />
              <span className="text-xl font-bold font-heading">Grace Zawadi</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#projects" className="hover:text-pink-500 transition-colors hidden md:block">Projects</a>
              <a href="#skills" className="hover:text-pink-500 transition-colors hidden md:block">Skills</a>
              <a href="#contact" className="hover:text-pink-500 transition-colors hidden md:block">Contact</a>
              
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">
              Grace Zawadi
            </h1>
            <div className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">
              <span className="highlight font-medium">Software Engineer</span>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-2xl md:text-3xl italic mb-8 text-gray-700 dark:text-gray-300">
              "Faith, code, and a spark of imagination."
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-3xl">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-800 dark:text-gray-200">Hi I'm Grace Zawadi</span>, a passionate beginner software engineer who loves creating fun, functional web experiences. I enjoy working with React, Flask, and bringing ideas to life with code. When I'm not coding, I'm exploring design trends, experimenting with animations, and finding creative ways to solve real-life problems.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            <a 
              href="#projects"
              className="group inline-flex items-center px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
              <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="group inline-flex items-center px-8 py-4 border-2 border-pink-500 text-pink-500 dark:text-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
            >
              Let's Connect
              <FiMail className="ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a 
              href="mailto:hello@gracezawadi.dev" 
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <FiMail className="text-xl" />
            </a>
          </div>
        </section>

        <hr className="my-20 border-gray-200 dark:border-gray-800" />

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-20 border-gray-200 dark:border-gray-800" />

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-20 border-gray-200 dark:border-gray-800" />

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent! (This is a demo)');
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Grace Zawadi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="hello@gracezawadi.dev"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Or email me directly at:{' '}
                <a href="mailto:hello@gracezawadi.dev" className="text-pink-500 hover:underline font-medium">
                  hello@gracezawadi.dev
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FiCode className="text-xl text-pink-500" />
              <span className="text-lg font-bold font-heading">Grace Zawadi</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <span>&copy; {new Date().getFullYear()} Made with</span>
              <span className="text-pink-500 animate-pulse">♥</span>
              <span>by Grace</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App