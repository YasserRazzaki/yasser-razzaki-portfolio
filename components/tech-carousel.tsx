"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const technologies = [
  { name: "Angular", icon: "https://www.neosoft.fr/wp-content/uploads/2023/02/angular.png" },
  { name: "Next.js", icon: "https://teamraft.com/wp-content/uploads/nextjs.jpg" },
  { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png?height=80&width=80" },
  { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png?height=80&width=80" },
  { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s?height=80&width=80" },
  { name: "MongoDB", icon: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png?height=80&width=80" },
  { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png?height=80&width=80" },
  { name: "MySQL", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_4bkOdrJ38q7ryKEojTe7aTr5M88cLaEgQ&s?height=80&width=80" },
  { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png?height=80&width=80" },
  { name: "Symfony", icon: "https://cdn.worldvectorlogo.com/logos/symfony.svg?height=80&width=80" },
  { name: "Javascript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png?height=80&width=80" },
  { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg?height=80&width=80" },
]

export default function TechCarousel() {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clone the items for infinite scrolling effect
    const cloneItems = () => {
      const items = container.querySelectorAll(".tech-item")
      items.forEach((item) => {
        const clone = item.cloneNode(true)
        container.appendChild(clone)
      })
    }

    cloneItems()

    // Set animation
    container.style.animationPlayState = "running"

    return () => {
      container.style.animationPlayState = "paused"
    }
  }, [])

  return (
    <div
      className="w-full overflow-hidden py-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={containerRef}
        className={cn("flex gap-8 tech-carousel", isHovering ? "animation-paused" : "animation-running")}
        style={{
          animation: "scroll 30s linear infinite",
          width: "fit-content",
        }}
      >
        {technologies.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="tech-item flex flex-col items-center gap-2 w-24">
            <div className="relative w-16 h-16 bg-background rounded-lg p-2 flex items-center justify-center shadow-sm">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animation-running {
          animation-play-state: running;
        }
        
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

