"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-sections overflow-hidden">
      {/* Tło usunięte z Canvas dla lepszego LCP */}

      <motion.div
        className="relative z-10 text-center space-y-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block bg-accents/10 px-6 py-2 rounded-full mb-4"
        >
          <span className="text-accents text-sm">🚀 Open to work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-text to-accents bg-clip-text text-transparent">
          Building Digital Futures
          <span className="block mt-4 bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent">
            One Pixel at a Time
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-secondText max-w-3xl mx-auto leading-relaxed"
        >
          I create <span className="text-accents">modern, performant</span> web
          experiences using cutting-edge tools and clean design principles.
        </motion.p>

        {/* Możesz dodać CTA tutaj */}
      </motion.div>

      {/* Scroll Indicator (ok, ale możesz też usunąć dla LCP testu) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-4 border-accents rounded-full" />
      </motion.div>
    </section>
  );
};
