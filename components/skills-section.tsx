"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, Database, Layout, Server, Smartphone, Workflow } from "lucide-react"

const skills = [
  {
    category: "Front-end",
    icon: <Layout className="h-6 w-6" />,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Tailwind CSS | Bootstrap", level: 80 },
    ],
  },
  {
    category: "Back-end",
    icon: <Server className="h-6 w-6" />,
    items: [
      { name: "PHP", level: 80 },
      { name: "Laravel | Symfony", level: 75 },
      { name: "Java", level: 70 },
      { name: "Node.js", level: 60 },
    ],
  },
  {
    category: "Base de données",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    category: "Autres",
    icon: <Code className="h-6 w-6" />,
    items: [
      { name: "Wordpress", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Montage video", level: 70 },
      { name: "Mobile avec Java & XML", level: 70 },
      { name: "SEO", level: 70 },
      { name: "UI/UX", level: 70 },
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)

  const activeSkills = skills.find((skill) => skill.category === activeCategory)?.items || []

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 space-y-4">
        <div className="space-y-2">
          {skills.map((skill) => (
            <button
              key={skill.category}
              onClick={() => setActiveCategory(skill.category)}
              className={cn(
                "flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors",
                activeCategory === skill.category ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {skill.icon}
              <span className="font-medium">{skill.category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-background p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          {skills.find((skill) => skill.category === activeCategory)?.icon}
          {activeCategory}
        </h3>

        <div className="space-y-6">
          {activeSkills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

