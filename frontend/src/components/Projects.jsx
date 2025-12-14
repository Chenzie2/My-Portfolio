import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment integration.",
    tech: ["React", "Flask", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    tech: ["React", "Socket.io", "MongoDB", "Express"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive charts.",
    tech: ["React", "Chart.js", "Weather API", "Geolocation"],
    github: "#",
    live: "#"
  },
  {
    title: "Blog CMS",
    description: "Content management system for bloggers with rich text editing and SEO optimization.",
    tech: ["Flask", "SQLAlchemy", "Markdown", "Redis"],
    github: "#",
    live: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured <span className="text-pink-500">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="p-6">
              <div className="h-2 w-16 bg-pink-500 rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <FiGithub />
                  <span>Code</span>
                </a>
                <a 
                  href={project.live}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects