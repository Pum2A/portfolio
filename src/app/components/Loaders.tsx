// components/Loaders.tsx (Nowy komponent!)
"use client";
import { motion } from "framer-motion";

export const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="h-20 bg-sections rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
};

export const GlowingLoader = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="w-12 h-12 border-4 border-accents border-t-transparent rounded-full"
      />
    </div>
  );
};