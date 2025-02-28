// components/Hero.tsx (Enhanced)
"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useTheme } from "./ThemeProvider";
import Avatar from "./Avatar";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-sections overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-full w-full z-0 opacity-15">
 
      </div>

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
          <span className="text-accents text-sm">🚀 Available for work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-text to-accents bg-clip-text text-transparent">
          Digital Innovation
          <span className="block mt-4 bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent">
            Perfected
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-secondText max-w-3xl mx-auto leading-relaxed"
        >
          Crafting <span className="text-accents">next-generation</span> web experiences
          with cutting-edge technology and pixel-perfect design
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accents text-background rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-accents/20"
          >
            <span>🚀 View Projects</span>
            <motion.span 
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
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