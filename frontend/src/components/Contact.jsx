import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

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
    description: "Always happy to chat about code, design, or anything in between.",
    cta: 'gracezawadi24@gmail.com',
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
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Whether you want to hire, collaborate, or just have a chat pick the best way to reach me.
          </p>
        </div>

        {/* Channel Cards */}
        <div className="flex flex-col gap-4 mb-10">
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

        {/* Social icon row */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          <div className="flex gap-3">
            <a href="mailto:gracezawadi24@gmail.com" aria-label="Email"
              className="p-2.5 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200">
              <FiMail className="text-lg" />
            </a>
            <a href="https://github.com/Chenzie2" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="p-2.5 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200">
              <FiGithub className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/grace-zawadi-3988a2301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="p-2.5 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200">
              <FiLinkedin className="text-lg" />
            </a>
          </div>
          <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
        </div>

      </div>
    </section>
  )
}

export default Contact