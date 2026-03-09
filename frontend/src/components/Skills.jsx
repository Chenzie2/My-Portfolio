import React, { useState } from 'react'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiPython,
  SiFlask, SiTailwindcss, SiPandas, SiNumpy,
  SiTypescript, SiPostgresql, SiFastapi,
  SiGit, SiGithub, SiFigma
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'

const categories = [
  {
    label: 'Frontend',
    color: 'pink',
    skills: [
      { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    label: 'Backend & APIs',
    color: 'purple',
    skills: [
      { name: 'Python', icon: <SiPython className="text-blue-400" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-500 dark:text-gray-300" /> },
      { name: 'REST APIs', icon: <TbApi className="text-purple-500" /> },
    ],
  },
  {
    label: 'Data & Analytics',
    color: 'rose',
    skills: [
      { name: 'Pandas', icon: <SiPandas className="text-indigo-500" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-blue-500" /> },
    ],
  },
  {
    label: 'Tools & Workflow',
    color: 'gray',
    skills: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'GitHub', icon: <SiGithub className="text-gray-700 dark:text-gray-300" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'VS Code', icon: <VscCode className="text-blue-500" /> },
    ],
  },
]

const learning = [
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-600" /> },
  { name: 'FastAPI', icon: <SiFastapi className="text-emerald-500" /> },
]

const colorMap = {
  pink:   'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-800/30 text-pink-600 dark:text-pink-400',
  purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30 text-purple-600 dark:text-purple-400',
  rose:   'bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800/30 text-rose-600 dark:text-rose-400',
  gray:   'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400',
}

const SkillPill = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
  </div>
)

const LearningPill = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border-2 border-dashed border-pink-200 dark:border-pink-800/50 rounded-xl hover:border-pink-400 dark:hover:border-pink-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{name}</span>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A full picture of what I work with and what I'm currently building on.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10 mb-14">
          {categories.map(({ label, emoji, color, skills }) => (
            <div key={label}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border ${colorMap[color]}`}>
                  {emoji} {label}
                </span>
                <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillPill key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 border border-pink-100 dark:border-pink-800/20 p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-white dark:bg-gray-800 border border-pink-200 dark:border-pink-700 text-pink-500">
               Currently Learning
            </span>
            <div className="flex-1 h-px bg-pink-100 dark:bg-pink-800/30" />
          </div>

          <div className="flex flex-wrap gap-3">
            {learning.map((skill) => (
              <LearningPill key={skill.name} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills