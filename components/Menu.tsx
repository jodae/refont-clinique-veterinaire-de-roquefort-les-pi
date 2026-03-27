'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Scissors, Microscope, Syringe, Heart, AlertCircle } from 'lucide-react';

const services = [
  {
    category: "Médecine interne",
    icon: Stethoscope,
    items: [
      "Médecine canine et féline",
      "Médecine générale des nouveaux Animaux de Compagnie",
      "Dentisterie des chiens, chats, lapins et rongeurs",
      "Évaluation comportementale"
    ]
  },
  {
    category: "Chirurgie",
    icon: Scissors,
    items: [
      "Chirurgie des tissus mous",
      "Chirurgie orthopédique",
      "Stérilisation et castration",
      "Interventions d'urgence"
    ]
  },
  {
    category: "Examens complémentaires",
    icon: Microscope,
    items: [
      "Analyses laboratoire",
      "Radiologie numérique",
      "Échographie",
      "Examens sanguins"
    ]
  },
  {
    category: "Prévention",
    icon: Syringe,
    items: [
      "Vaccinations chiens et chats",
      "Vermifugation",
      "Antiparasitaires",
      "Bilans de santé"
    ]
  },
  {
    category: "Soins spécialisés",
    icon: Heart,
    items: [
      "Suivi des animaux âgés",
      "Nutrition et diététique",
      "Conseils personnalisés",
      "Identification et passeports"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Menu() {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10 blur-3xl rounded-full" style={{ background: 'var(--accent)' }}></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10 blur-3xl rounded-full" style={{ background: 'var(--accent-light)' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            Nos Services
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'var(--accent)' }}></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-mid)' }}>
            Une gamme complète de soins vétérinaires pour le bien-être de vos compagnons
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ background: 'var(--accent)' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold flex-1" style={{ color: 'var(--text)' }}>
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--accent)' }}></span>
                      <span className="text-base" style={{ color: 'var(--text-mid)' }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 p-8 rounded-2xl shadow-lg text-center"
          style={{ background: 'var(--accent)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-white" />
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Consultations sur rendez-vous
            </h3>
          </div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6">
            Nous recevons de préférence sur rendez-vous pour vous garantir un accueil optimal et un temps de consultation adapté à votre animal.
          </p>
          <motion.a
            href="tel:0493775350"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ background: 'var(--bg)', color: 'var(--accent)' }}
          >
            Appeler : 04 93 77 53 50
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 p-6 rounded-xl text-center"
          style={{ background: 'var(--bg)', border: `2px solid var(--accent-light)` }}
        >
          <p className="text-base" style={{ color: 'var(--text-mid)' }}>
            <strong>Bon à savoir :</strong> L'espace d'accueil est à votre disposition pour la prise de rendez-vous ou pour des conseils personnalisés sur la santé ou le bien-être de vos compagnons.
          </p>
        </motion.div>
      </div>
    </section>
  );
}