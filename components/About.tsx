'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const aboutData = {
  title: "Une équipe dédiée à vos animaux",
  body: "La Clinique Vétérinaire du Clos réunit 5 docteurs vétérinaires et 3 auxiliaires spécialisées dans un espace rénové et agrandi. Depuis notre installation à Roquefort-les-Pins, nous accompagnons propriétaires et animaux avec des soins de qualité, un équipement moderne et une approche humaine. Parking gratuit devant la clinique.",
  highlights: [
    "5 vétérinaires diplômés",
    "Clinique rénovée et équipée",
    "Parking gratuit sur place"
  ]
};

const teamMembers = [
  {
    name: "Dr Audrey Martin",
    role: "Docteur vétérinaire",
    credentials: "Inscrite à l'ordre vétérinaire n°23499 - Diplômée de la Faculté de Médecine Vétérinaire de Turin"
  },
  {
    name: "Dr Anne Marie Garnier-Maddens",
    role: "Docteur vétérinaire",
    credentials: "Inscrite à l'ordre vétérinaire n°126254 - Diplômée de l'École Vétérinaire de Toulouse"
  },
  {
    name: "Dr Fleur Descat",
    role: "Docteur vétérinaire",
    credentials: "Inscrite à l'ordre vétérinaire n°17013 - Diplômée de l'École Vétérinaire de Toulouse"
  },
  {
    name: "Dr Federico Celi",
    role: "Docteur vétérinaire",
    credentials: "Inscrit à l'ordre vétérinaire n°34732 - Diplômé de l'École Vétérinaire de Milan"
  },
  {
    name: "Dr Elen Simonot",
    role: "Docteur vétérinaire",
    credentials: "Inscrite à l'ordre vétérinaire n°34881 - Diplômée de l'École Vétérinaire de Lyon"
  }
];

const auxiliaires = [
  {
    name: "Juliette Lafon",
    role: "ASV diplômée du Gipsa d'Antibes"
  },
  {
    name: "Melissa Daubinet",
    role: "ASV diplômée du Gipsa d'Antibes"
  },
  {
    name: "Lisa Aguilera",
    role: "ASV diplômée du Gipsa de Gardanne"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="paw-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M30,20 Q35,15 40,20 Q45,25 40,30 Q35,35 30,30 Q25,25 30,20 M20,35 Q22,32 25,35 Q27,38 25,40 Q22,42 20,40 Q18,38 20,35 M40,35 Q42,32 45,35 Q47,38 45,40 Q42,42 40,40 Q38,38 40,35 M25,48 Q27,45 30,48 Q32,51 30,53 Q27,55 25,53 Q23,51 25,48 M35,48 Q37,45 40,48 Q42,51 40,53 Q37,55 35,53 Q33,51 35,48" fill="currentColor" style={{ color: 'var(--accent)' }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#paw-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'var(--accent)' }}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=80&fit=crop"
                alt="Équipe vétérinaire de la Clinique du Clos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 px-8 py-6 rounded-xl shadow-xl"
              style={{ background: 'var(--accent)' }}
            >
              <p className="text-white text-4xl font-bold">20+</p>
              <p className="text-white/90 text-sm">Années d'expérience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              {aboutData.body}
            </p>

            <div className="space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  <span className="text-lg" style={{ color: 'var(--text)' }}>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl mb-8 text-center" style={{ color: 'var(--text)' }}>
            Nos Docteurs Vétérinaires
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
                style={{ background: 'var(--bg-alt)' }}
              >
                <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                  {member.name}
                </h4>
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--text)' }}>
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  {member.credentials}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl md:text-4xl mb-8 text-center" style={{ color: 'var(--text)' }}>
            Nos Auxiliaires Spécialisées Vétérinaires
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {auxiliaires.map((auxiliaire, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl shadow-lg text-center transition-shadow duration-300 hover:shadow-xl"
                style={{ background: 'var(--bg-alt)' }}
              >
                <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                  {auxiliaire.name}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-mid)' }}>
                  {auxiliaire.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}