import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiFlask,
  SiTailwindcss
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const Skills = () => {
  const skills = [
    {
      name: 'HTML / CSS',
      icon: (
        <div className="flex items-center">
          <SiHtml5 className="text-orange-500" />
          <SiCss3 className="text-blue-500 ml-1" />
        </div>
      ),
      proficiency: 85
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-yellow-400" />,
      proficiency: 80
    },
    {
      name: 'REST APIs',
      icon: <TbApi className="text-purple-500" />,
      proficiency: 75
    },
    {
      name: 'React',
      icon: <SiReact className="text-blue-400" />,
      proficiency: 75
    },
    {
      name: 'Flask',
      icon: <SiFlask className="text-gray-400" />,
      proficiency: 70
    },
    {
      name: 'Python',
      icon: <SiPython className="text-green-400" />,
      proficiency: 80
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-teal-400" />,
      proficiency: 85
    }
  ]

  return (
    <section id="skills" className="py-12 md:py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            My <span className="text-pink-500">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-lg font-semibold text-pink-500">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2"
                aria-label={`${skill.name} proficiency`}
              >
                <div
                  className="bg-gradient-to-r from-pink-400 to-pink-500 h-3 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Beginner</span>
                <span>Proficient</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Banner */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl border border-pink-100 dark:border-pink-800/30">
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                Always learning & growing
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Continuously expanding my skill set with new technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
