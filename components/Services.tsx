"use client";

import { motion } from "framer-motion";
import { Stethoscope, Activity, ScanLine, Microscope, HeartPulse, Pill } from "lucide-react";

const services = [
  {
    title: "Médecine interne",
    icon: Stethoscope,
    description: "Consultations, vaccinations, bilans de santé pour chiens, chats et NAC",
  },
  {
    title: "Chirurgie générale",
    icon: Activity,
    description: "Stérilisations, chirurgie abdominale et orthopédique dans un bloc moderne",
  },
  {
    title: "Imagerie médicale",
    icon: ScanLine,
    description: "Radiographie numérique et échographie pour un diagnostic précis",
  },
  {
    title: "Analyses et dentisterie",
    icon: Microscope,
    description: "Analyses sanguines sur place et soins dentaires complets",
  },
  {
    title: "Nutrition vétérinaire",
    icon: HeartPulse,
    description: "Conseils personnalisés et alimentation spécialisée adaptée à votre animal",
  },
  {
    title: "Pharmacie vétérinaire",
    icon: Pill,
    description: "Médicaments et produits de santé disponibles directement à la clinique",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "var(--accent-light)",
              color: "white",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Nos services
          </motion.span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "var(--text)",
            }}
          >
            Une clinique complète
            <br />
            pour votre animal
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "var(--text-mid)",
              fontWeight: 300,
            }}
          >
            Des soins vétérinaires de qualité avec un équipement moderne et une équipe passionnée
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(122, 158, 135, 0.15)",
                }}
                className="group p-8 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--bg-alt)",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ backgroundColor: "var(--bg-alt)" }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: "var(--accent)" }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "var(--text)",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "var(--text-mid)",
                    fontSize: "0.95rem",
                  }}
                >
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <motion.div
                  className="mt-6 flex items-center space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "var(--accent)",
                    }}
                  >
                    En savoir plus
                  </span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "var(--accent)" }}
                  >
                    <path
                      d="M1 8h14M8 1l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="tel:0493777777"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full text-white text-base font-medium shadow-lg"
            style={{
              backgroundColor: "var(--accent)",
              fontFamily: "'Nunito', sans-serif",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--accent-light)",
              boxShadow: "0 20px 40px rgba(122, 158, 135, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Prendre rendez-vous</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M4 10h12M10 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}