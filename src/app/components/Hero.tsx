// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-sections overflow-hidden px-4">
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[120vw] h-[120vh] bg-accents/10 -top-[10%] -left-[10%] rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Crafting Digital{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accents to-accents/70">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-secondText max-w-2xl mx-auto mb-8"
        >
          Full-stack developer specializing in modern web applications. Let's
          build something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accents text-background rounded-full font-medium hover:bg-accents/90 transition-colors"
          >
            Start a Project
          </motion.a>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accents text-accents rounded-full hover:bg-accents/10 transition-colors"
          >
            View Work
          </motion.a>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-10 border-4 border-accents rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
