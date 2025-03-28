"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface MobileMenuProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  refs: {
    aboutRef: React.RefObject<HTMLElement>
    skillsRef: React.RefObject<HTMLElement>
    projectsRef: React.RefObject<HTMLElement>
    technologiesRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
  }
}

export default function MobileMenu({ scrollToSection, refs }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <ChevronDown className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="pt-16">
        <SheetHeader className="mb-4">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <Button variant="ghost" onClick={() => handleNavClick(refs.aboutRef)} className="justify-start">
            À propos
          </Button>
          <Button variant="ghost" onClick={() => handleNavClick(refs.skillsRef)} className="justify-start">
            Compétences
          </Button>
          <Button variant="ghost" onClick={() => handleNavClick(refs.projectsRef)} className="justify-start">
            Projets
          </Button>
          <Button variant="ghost" onClick={() => handleNavClick(refs.technologiesRef)} className="justify-start">
            Technologies
          </Button>
          <Button variant="ghost" onClick={() => handleNavClick(refs.contactRef)} className="justify-start">
            Contact
          </Button>
          <a href="/mon-cv.pdf" download="CV-Developpeur-Web.pdf" className="w-full">
            <Button variant="outline" className="w-full">
              Télécharger CV
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}

