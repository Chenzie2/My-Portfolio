import React from 'react'
import { FiLayout, FiDatabase, FiCode, FiPenTool } from 'react-icons/fi'

const skills = [
  {
    category: "Frontend",
    icon: <FiLayout />,
    skills: ["JavaScript", "React", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <FiDatabase />,
    skills: ["Python", "Flask", "REST APIs", "Node.js"]
  },
  {
    category: "Tools",
    icon: <FiCode />,
    skills: ["Git", "VS Code", "Postman", "Command Line"]
  },
  {
    category: "Design",
    icon: <FiPenTool />,
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-20 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills & <span className="text-pink-500">Expertise</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, index) => (
          <div 
            key={category.category}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl text-pink-500 mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center">
                  <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills