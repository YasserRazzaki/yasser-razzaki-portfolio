"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

// Remplacez ces valeurs par celles de votre compte EmailJS
const SERVICE_ID = "service_2idixhc" // À remplacer par votre ID de service
const TEMPLATE_ID = "template_rcm2anh" // À remplacer par votre ID de template
const PUBLIC_KEY = "xSIGA-Ehk1wIAd7ot" // À remplacer par votre clé publique

export default function ContactForm() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)

    try {
      // Envoi de l'email via EmailJS
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)

      if (result.text === "OK") {
        // Réinitialiser le formulaire
        formRef.current.reset()

        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        })
      } else {
        throw new Error("Échec de l'envoi")
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-background p-8 rounded-lg shadow-sm">
      <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nom complet
            </label>
            <Input id="name" name="name" placeholder="John Doe" disabled={isSubmitting} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              disabled={isSubmitting}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Décrivez votre projet..."
            className="min-h-[120px]"
            disabled={isSubmitting}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </form>
    </div>
  )
}