'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Image from 'next/image';

const contactData = {
  phone: "04 93 77 53 50",
  hours: "Lun-Ven : 9h-12h et 15h-19h | Samedi : 9h-12h",
  address: "41 Chemin du Clos Durand, Cidex 95 Bis, 06330 Roquefort-Les-Pins",
  cta_text: "Contactez-nous pour votre animal",
  email: null
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80&fit=crop"
          alt="Clinique Vétérinaire du Clos"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'var(--bg-dark)', opacity: 0.92 }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            {contactData.cta_text}
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'var(--accent-light)' }}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="p-3 rounded-lg flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent-light)' }}>
                  Téléphone
                </h3>
                <a 
                  href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                  className="text-lg text-white hover:opacity-80 transition-opacity"
                >
                  {contactData.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="p-3 rounded-lg flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent-light)' }}>
                  Horaires
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  {contactData.hours}
                </p>
                <p className="text-sm mt-2 text-white/70">
                  De préférence sur rendez-vous
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="p-3 rounded-lg flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent-light)' }}>
                  Adresse
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  {contactData.address}
                </p>
                <p className="text-sm mt-2 text-white/70">
                  Parking gratuit devant la clinique
                </p>
              </div>
            </motion.div>

            {contactData.email && (
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div className="p-3 rounded-lg flex-shrink-0" style={{ background: 'var(--accent)' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent-light)' }}>
                    Email
                  </h3>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-lg text-white hover:opacity-80 transition-opacity"
                  >
                    {contactData.email}
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4!2d7.0526!3d43.6676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0a8e8b8b8b8%3A0x1234567890!2s41%20Chemin%20du%20Clos%20Durand%2C%2006330%20Roquefort-les-Pins!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de la Clinique Vétérinaire du Clos"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 p-6 rounded-xl backdrop-blur-sm text-center"
          style={{ background: 'rgba(122, 158, 135, 0.15)' }}
        >
          <p className="text-white/90 text-lg">
            <strong>Conseil :</strong> Pour la sécurité de nos petits compagnons, nous vous conseillons de tenir vos chiens en laisse et d'amener vos chats dans une caisse de transport adaptée.
          </p>
        </motion.div>
      </div>
    </section>
  );
}