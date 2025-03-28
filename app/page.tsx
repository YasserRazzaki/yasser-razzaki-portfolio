"use client"

import type React from "react"

import { useRef } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TechCarousel from "@/components/tech-carousel"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import MobileMenu from "@/components/mobile-menu"

export default function Portfolio() {
  // Références pour le défilement fluide
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const technologiesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Fonction pour le défilement fluide
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Ajustement pour le header
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Yasser</span> Razzaki
          </Link>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection(technologiesRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          <a href="/mon-cv.pdf" download="CV-Developpeur-Web.pdf" className="hidden md:flex">
            <Button variant="outline" size="sm">
              Télécharger CV
            </Button>
          </a>
          <MobileMenu
            scrollToSection={scrollToSection}
            refs={{ aboutRef, skillsRef, projectsRef, technologiesRef, contactRef }}
          />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 sm:py-32 space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Développeur Web <span className="text-primary">Full Stack</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Je crée des expériences web & logiciels modernes et interactives avec les dernières technologies.              </p>
              <div className="flex gap-4 pt-4">
                <a href="mailto:razayasser@hotmail.fr">
                  <Button>
                    Contactez-moi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button variant="outline" onClick={() => scrollToSection(projectsRef)}>
                  Voir mes projets
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/YasserRazzaki" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/yasserrazzaki" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:razayasser@hotmail.fr">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/yr.jpg?height=400&width=400"
                  alt="Portrait de Yasser Razzaki développeur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="bg-muted py-16 sm:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">À propos de moi</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  Passionné par le développement web depuis plus de 4 ans, je me spécialise dans la création
                  d'applications web et logiciels modernes, performantes et accessibles.
                </p>
                <p className="text-lg">
                  Mon parcours m'a permis d'acquérir une solide expertise en développement front-end et back-end, avec
                  une attention particulière pour l'expérience utilisateur et les bonnes pratiques de développement.
                </p>
                <p className="text-lg">
                  Je suis constamment à la recherche de nouveaux défis et j'aime explorer les dernières technologies
                  pour créer des solutions innovantes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">4+</h3>
                  <p className="text-muted-foreground">Années d'expérience</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">30+</h3>
                  <p className="text-muted-foreground">Projets réalisés</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">20+</h3>
                  <p className="text-muted-foreground">Technologies utilisées</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">10000+</h3>
                  <p className="text-muted-foreground">Lignes de code optimisées</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-16 sm:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Mes compétences</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Un aperçu des compétences techniques que j'ai développées au cours de ma carrière
            </p>
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="bg-muted py-16 sm:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Mes projets</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Une sélection de projets sur lesquels j'ai travaillé récemment
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="QT Robot"
                description="Réalisation d'un robot qui fait les opérations mathématiques à deux termes pour des enfants de 6 à 10 ans."
                tags={["Next.js", "Typescript", "Tailwind CSS"]}
                imageUrl="/qt.png?height=300&width=500"
                codeUrl="https://github.com/YasserRazzaki/qt-robot-math"
                demoUrl="https://v0-qt-robot-project.vercel.app/"
              />
              <ProjectCard
                title="Adventurix"
                description="Conception de l'identité graphique et visuelle d'un jeu fictif, puis création d'un site web vitrine et d'une boutique avec les produits dérivés sur Wordpress."
                tags={["Wordpress", "Adobe Photoshop", "Adobe Illustrator"]}
                imageUrl="/adventurix.png?height=300&width=500"
                demoUrl="https://web-mmi2.iutbeziers.fr/~yasser.razzaki/SAE202/wordpress/"
              />
              <ProjectCard
                title="Le Karabs"
                description="Création d'une application web hybride et responsive pour une association. Cette application est conçue pour les étudiants montpelliérains et rassemble les meilleurs endroits dans la ville pour faire plusieurs activités. "
                tags={["Ionic", "Angular", "Symfony"]}
                imageUrl="/karabs.png?height=300&width=500"
                codeUrl="https://github.com/YasserRazzaki/karabs-front"
              />
            </div>
            <div className="flex justify-center pt-8">
              <Button variant="outline" onClick={() => window.open("https://github.com/YasserRazzaki", "_blank")}>
                Voir tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section ref={technologiesRef} id="technologies" className="py-16 sm:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Technologies</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Les technologies avec lesquelles je travaille au quotidien
            </p>
            <TechCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="bg-muted py-16 sm:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Contactez-moi</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">Yasser</span> Razzaki
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex gap-4">
            <Link href="https://github.com/YasserRazzaki" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yasserrazzaki" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:razayasser@hotmail.fr">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

