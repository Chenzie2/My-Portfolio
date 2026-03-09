import React from 'react'
import { FiGithub, FiExternalLink, FiUsers } from 'react-icons/fi'
import { SiGooglecolab } from 'react-icons/si'
import coursifyImg from '../assets/coursify.png'
import ticksyImg from '../assets/ticksy.png'
import trackerImg from '../assets/tracker.png'
import vacationImg from '../assets/vacation.png'

const webProjects = [
  {
    title: 'Coursify',
    tagline: 'A full-stack learning platform with role-based access control',
    story:
      'Students and instructors needed a single platform to manage courses, enrollments, and progress without the clutter. Coursify solves this with a clean role-based system: instructors create and manage content, students browse and enroll, and protected routes ensure each role only sees what they need.',
    image: coursifyImg,
    tech: ['React', 'Flask', 'JWT Auth', 'Formik', 'Tailwind CSS'],
    github: 'https://github.com/Chenzie2/Coursify-frontend',
    live: 'https://coursify-frontend-psi.vercel.app/',
    solo: true,
  },
  {
    title: 'Ticksy',
    tagline: 'Plan It. Book It. Live It.',
    story:
      'Most ticketing platforms are cluttered and ignore local payment realities. Ticksy was built to change that; a clean, mobile-first event platform with MPESA STK Push integration, real-time ticket availability, and role-based dashboards for attendees, organizers, and admins.',
    image: ticksyImg,
    tech: ['React', 'Redux Toolkit', 'Flask', 'PostgreSQL', 'MPESA API'],
    github: 'https://github.com/Chenzie2/Ticksy-Frontend',
    live: 'https://ticksy-frontend.vercel.app/',
    solo: false,
    collaborators: 'Built with a team of 6',
  },
  {
    title: 'Vacation Planner',
    tagline: 'Discover, save, and plan your next adventure',
    story:
      "Planning a trip shouldn't mean juggling ten browser tabs. This app lets users browse destinations, filter by category, search by name, and save favourites to a personal trip list that persists across sessions all backed by a local REST API.",
    image: vacationImg,
    tech: ['React', 'React Router', 'json-server', 'Tailwind CSS'],
    github: 'https://github.com/Chenzie2/vacation-planner',
    live: 'https://vacation-planner-eta.vercel.app/',
    solo: true,
  },
  {
    title: 'Expense Tracker',
    tagline: 'Personal finance made simple',
    story:
      'A lightweight personal finance tool for tracking daily expenses in KES. Features instant search, smart sorting, category filtering, and automatic currency formatting.',
    image: trackerImg,
    tech: ['React', 'Vite', 'UUID', 'CSS'],
    github: 'https://github.com/Chenzie2/expense-tracker',
    live: 'https://expense-tracker-eight-gray.vercel.app/',
    solo: true,
  },
]

const dataProjects = [
  {
    title: 'Password Strength & Vulnerability Analysis',
    tagline: 'What makes a password weak — and how many people get it wrong?',
    story:
      'Using a Kaggle dataset of real passwords, this analysis digs into the structural patterns behind weak credentials. Through feature engineering (length, character composition, digit ratios), the findings show that most passwords peak at 6–8 characters and rely on a single character type which is a significant security risk. Closes with actionable recommendations for enforcing stronger password policies.',
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Google Colab'],
    github: 'https://github.com/Chenzie2/Password-Strength-and-Vulnerability-Analysis',
    colab: null,
    highlight: true,
  },
  {
    title: "Kenya's Fiscal Landscape (2000–2021)",
    tagline: "How much does Kenya's debt actually cost and is it sustainable?",
    story:
      'By integrating datasets on public debt stock, interest payments, and GDP, this project engineers two key metrics: the Effective Interest Rate on domestic vs foreign debt, and the Debt-to-GDP ratio tracked against the EAC 60% sustainability benchmark. Reveals accelerating domestic debt servicing costs and a rising trajectory worth close attention.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Google Colab'],
    github: 'https://github.com/Chenzie2/Kenya-Fiscal-Landscape-Analysis',
    colab: null,
    highlight: false,
  },
  {
    title: 'Superstore Sales Performance Analysis',
    tagline: 'Which categories drive revenue and where are the gaps?',
    story:
      'An exploratory analysis of ~10,000 orders from a global retail dataset, identifying top-performing product categories, year-over-year sales trends, and regional performance gaps particularly in Technology sales across the West region.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Google Colab'],
    github: 'https://github.com/Chenzie2/superstore-sales-analysis',
    colab: null,
    highlight: false,
  },
]

const TechPill = ({ tech }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-800/30">
    {tech}
  </span>
)

const WebProjectCard = ({ project, index }) => (
  <div className={`group flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700`}>

    {/* Image */}
    <div className="md:w-2/5 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>

    {/* Content */}
    <div className="md:w-3/5 p-7 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-pink-500 font-medium mt-0.5">{project.tagline}</p>
          </div>
          {!project.solo && (
            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full ml-3 shrink-0">
              <FiUsers className="text-xs" /> Team project
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3 mb-5">
          {project.story}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => <TechPill key={t} tech={t} />)}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-pink-400 hover:text-pink-500 transition-all duration-200"
        >
          <FiGithub /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </div>
  </div>
)

const DataProjectCard = ({ project }) => (
  <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-7 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
    project.highlight
      ? 'border-pink-200 dark:border-pink-800/50 shadow-sm'
      : 'border-gray-100 dark:border-gray-700'
  }`}>
    {project.highlight && (
      <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold bg-pink-500 text-white rounded-full shadow-sm">
        ⭐ Featured
      </span>
    )}

    <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white mb-1">
      {project.title}
    </h3>
    <p className="text-sm text-pink-500 font-medium mb-3">{project.tagline}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
      {project.story}
    </p>

    <div className="flex flex-wrap gap-2 mb-5">
      {project.tech.map(t => <TechPill key={t} tech={t} />)}
    </div>

    <div className="flex gap-3 flex-wrap">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-pink-400 hover:text-pink-500 transition-all duration-200"
      >
        <FiGithub /> GitHub
      </a>
      {project.colab && (
        <a
          href={project.colab}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all duration-200"
        >
          <SiGooglecolab /> Open in Colab
        </a>
      )}
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From full-stack web apps to real-world data analysis — a look at what I've built and the problems I've solved.
          </p>
        </div>

        {/* Web Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800/30 text-pink-600 dark:text-pink-400">
               Web Projects
            </span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          </div>

          <div className="flex flex-col gap-8">
            {webProjects.map((project, index) => (
              <WebProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Data Projects */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 text-purple-600 dark:text-purple-400">
               Data & Analytics
            </span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
            Alongside web development, I explore real-world datasets — finding patterns, engineering features, and drawing actionable insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataProjects.map(project => (
              <DataProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects