"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Notre équipe" },
  { href: "#contact", label: "Contact" },
  { href: "#urgences", label: "Urgences" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                scrolled ? "text-[var(--text)]" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Clinique Vétérinaire du Clos
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                  scrolled ? "text-[var(--text-mid)]" : "text-white/90"
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="tel:0493777777"
            className="hidden lg:flex items-center space-x-2 px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300"
            style={{
              backgroundColor: scrolled ? "var(--accent)" : "rgba(122, 158, 135, 0.9)",
              fontFamily: "'Nunito', sans-serif",
            }}
            whileHover={{ scale: 1.05, backgroundColor: "var(--accent-light)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            <span>Prendre rendez-vous</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? "text-[var(--text)]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-base font-medium py-2 transition-colors duration-300"
                  style={{
                    color: "var(--text-mid)",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:0493777777"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white text-sm font-medium mt-4"
                style={{
                  backgroundColor: "var(--accent)",
                  fontFamily: "'Nunito', sans-serif",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Prendre rendez-vous</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}