// Create components/ScrollProgress.tsx
"use client";
import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accents/10 z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};