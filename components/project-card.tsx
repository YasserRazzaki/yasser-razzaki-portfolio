"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  codeUrl?: string // URL du code (GitHub, GitLab, etc.)
  demoUrl?: string // URL de la démo (optionnel)
}

export default function ProjectCard({ title, description, tags, imageUrl, codeUrl, demoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group rounded-lg overflow-hidden bg-background shadow-sm border"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="secondary" className="rounded-full">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

