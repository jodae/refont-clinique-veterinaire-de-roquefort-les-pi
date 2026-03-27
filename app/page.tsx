import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const heroData = {
    headline: "Votre vétérinaire à Roquefort-les-Pins",
    subheadline: "Médecine et chirurgie pour chiens, chats et NAC dans une clinique moderne et équipée",
    ctaText: "Prendre rendez-vous",
    backgroundHint: "Vétérinaire examinant un chien ou un chat dans une clinique moderne et lumineuse"
  }

  const servicesData = {
    items: [
      {
        title: "Médecine interne",
        iconHint: "stethoscope",
        description: "Consultations, vaccinations, bilans de santé pour chiens, chats et NAC"
      },
      {
        title: "Chirurgie générale",
        iconHint: "activity",
        description: "Stérilisations, chirurgie abdominale et orthopédique dans un bloc moderne"
      },
      {
        title: "Imagerie médicale",
        iconHint: "scan",
        description: "Radiographie numérique et échographie pour un diagnostic précis"
      },
      {
        title: "Analyses et dentisterie",
        iconHint: "microscope",
        description: "Analyses sanguines sur place et soins dentaires complets"
      },
      {
        title: "Nutrition vétérinaire",
        iconHint: "heart-pulse",
        description: "Conseils personnalisés et alimentation spécialisée adaptée à votre animal"
      },
      {
        title: "Pharmacie vétérinaire",
        iconHint: "pill",
        description: "Médicaments et produits de santé disponibles directement à la clinique"
      }
    ]
  }

  const aboutData = {
    title: "Une équipe dédiée à vos animaux",
    body: "La Clinique Vétérinaire du Clos réunit 5 docteurs vétérinaires et 3 auxiliaires spécialisées dans un espace rénové et agrandi. Depuis notre installation à Roquefort-les-Pins, nous accompagnons propriétaires et animaux avec des soins de qualité, un équipement moderne et une approche humaine. Parking gratuit devant la clinique.",
    highlights: [
      "5 vétérinaires diplômés",
      "Clinique rénovée et équipée",
      "Parking gratuit sur place"
    ]
  }

  const contactData = {
    ctaText: "Contactez-nous pour votre animal",
    phone: "04 93 77 53 50",
    email: null,
    address: "41 Chemin du Clos Durand, Cidex 95 Bis, 06330 Roquefort-Les-Pins",
    hours: "Lun-Ven : 9h-12h et 15h-19h | Samedi : 9h-12h"
  }

  const footerData = {
    tagline: "Prendre soin de vos compagnons depuis 2000",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Notre équipe", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Urgences", href: "#urgences" }
    ]
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero {...heroData} />
      <Services items={servicesData.items} />
      <About {...aboutData} />
      <Contact {...contactData} />
      <Footer {...footerData} />
    </main>
  )
}