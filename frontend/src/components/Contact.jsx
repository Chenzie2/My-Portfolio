import React from 'react'
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'

const contactChannels = [
  {
   
    label: 'Hiring & Opportunities',
    description: 'Open to full-time, freelance, or contract roles.',
    cta: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/grace-zawadi-3988a2301/',
    color: 'blue',
  },
  {
    
    label: 'Collabs & Projects',
    description: "Have an interesting idea? Let's build something together.",
    cta: 'Find me on GitHub',
    href: 'https://github.com/Chenzie2',
    color: 'gray',
  },
  {
   
    label: 'Have a conversation',
    description: "I'm always happy to chat about code, design, or anything in between.",
    cta: 'Send an Email',
    href: 'mailto:gracezawadi24@gmail.com',
    color: 'pink',
  },
]

const colorMap = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700',
  gray: 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500',
  pink: 'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-800/30 hover:border-pink-300 dark:hover:border-pink-700',
}

const ctaColorMap = {
  blue: 'text-blue-600 dark:text-blue-400',
  gray: 'text-gray-700 dark:text-gray-300',
  pink: 'text-pink-500 dark:text-pink-400',
}

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — Personal message */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Let's <span className="text-gradient">Talk</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Whether you're looking to hire, collaborate on something exciting, or just want to connect I'd love to hear from you.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:gracezawadi24@gmail.com"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 mb-10 w-full sm:w-auto"
            >
              <div className="p-2 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <FiMail className="text-pink-500 text-lg" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">Email me at</p>
                <p className="text-gray-800 dark:text-gray-200 font-semibold group-hover:text-pink-500 transition-colors">
                  gracezawadi24@gmail.com
                </p>
              </div>
              <FiArrowUpRight className="text-gray-400 group-hover:text-pink-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
            </a>

            {/* Social row */}
            <div>
              <p className="text-sm text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide mb-4">
                Also find me on
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Chenzie2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-pink-300 hover:text-pink-500 dark:hover:border-pink-700 dark:hover:text-pink-400 transition-all duration-200 shadow-sm"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/grace-zawadi-3988a2301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-pink-300 hover:text-pink-500 dark:hover:border-pink-700 dark:hover:text-pink-400 transition-all duration-200 shadow-sm"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — Channel cards */}
          <div className="lg:w-1/2 flex flex-col gap-4 w-full">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-start gap-5 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${colorMap[channel.color]}`}
              >
                <span className="text-3xl mt-0.5">{channel.icon}</span>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 font-heading">
                    {channel.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {channel.description}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-sm font-semibold ${ctaColorMap[channel.color]}`}>
                    {channel.cta}
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact