'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const footerData = {
  tagline: "Prendre soin de vos compagnons depuis 2000",
  links: [
    { href: "/", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "Notre équipe" },
    { href: "#contact", label: "Contact" },
    { href: "#urgences", label: "Urgences" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Clinique Vétérinaire du Clos
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {footerData.tagline}
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 fill-current" style={{ color: 'var(--accent-light)' }} />
              <span>à Roquefort-les-Pins</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h4>
            <nav className="space-y-2">
              {footerData.links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Coordonnées
            </h4>
            <div className="space-y-3 text-white/70">
              <p>
                41 Chemin du Clos Durand<br />
                Cidex 95 Bis<br />
                06330 Roquefort-Les-Pins
              </p>
              <p>
                <a 
                  href="tel:0493775350"
                  className="hover:text-white transition-colors duration-200"
                >
                  Tél : 04 93 77 53 50
                </a>
              </p>
              <p className="text-sm">
                Lun-Ven : 9h-12h et 15h-19h<br />
                Samedi : 9h-12h
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 border-t text-center text-white/60 text-sm"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p>
            &copy; {currentYear} Clinique Vétérinaire du Clos. Tous droits réservés.
          </p>
          <p className="mt-2">
            Docteurs Fleur DESCAT, Anne-Marie GARNIER-MADDENS, Audrey MARTIN, Federico CELI, Elen SIMONOT
          </p>
        </motion.div>
      </div>
    </footer>
  );
}