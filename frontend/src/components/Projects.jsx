import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Course Management System",
    description:
      "A comprehensive platform for educators and students to manage courses, assignments, and grades.",
    image: "/projects/course-management.png",
    tech: ["React", "Python", "Flask", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance app with expense categorization, budget tracking, and visual analytics.",
    image: "/projects/expense-tracker.png",
    tech: ["React", "JavaScript", "REST API", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Event Ticket Management App",
    description:
      "Ticketing platform for discovering events and purchasing tickets in real time.",
    image: "/projects/event-ticket.png",
    tech: ["React", "Flask", "REST API", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Vacation Planner",
    description:
      "Travel planning app for itinerary creation, destination discovery, and collaboration.",
    image: "/projects/vacation-planner.png",
    tech: ["React", "JavaScript", "REST API", "Express", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects showcasing my growth as a software engineer
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.live}
                    className="px-5 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 font-heading">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
