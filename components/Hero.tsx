"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, rgba(30, 42, 37, 0.85) 0%, rgba(45, 58, 53, 0.75) 50%, rgba(122, 158, 135, 0.6) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white/90 border border-white/30 backdrop-blur-sm"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Roquefort-les-Pins
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Votre vétérinaire
          <br />
          <span style={{ color: "var(--accent-light)" }}>à Roquefort-les-Pins</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}
        >
          Médecine et chirurgie pour chiens, chats et NAC dans une clinique moderne et équipée
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="tel:0493777777"
            className="group flex items-center space-x-3 px-8 py-4 rounded-full text-white text-base font-medium shadow-2xl w-full sm:w-auto justify-center"
            style={{
              backgroundColor: "var(--accent)",
              fontFamily: "'Nunito', sans-serif",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--accent-light)",
              boxShadow: "0 20px 40px rgba(122, 158, 135, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Prendre rendez-vous</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#services"
            className="group flex items-center space-x-3 px-8 py-4 rounded-full text-white text-base font-medium border-2 border-white/40 backdrop-blur-sm hover:bg-white/10 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Découvrir nos services</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Urgences 7j/7", value: "04 93 77 77 77" },
            { label: "Horaires", value: "Lun-Sam 9h-19h" },
            { label: "Équipée", value: "Imagerie & Bloc" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md border border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <div
                className="text-sm font-medium text-white/70 mb-2"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {item.label}
              </div>
              <div
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}