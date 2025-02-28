// components/GradientCard.tsx (Nowy komponent!)
"use client";
import { motion } from "framer-motion";

const GradientCard = ({ title, description }: any) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-2xl p-8 bg-sections border border-border group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accents/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <h3 className="text-2xl font-bold mb-4 text-text">{title}</h3>
      <p className="text-secondText">{description}</p>
      
      <div className="mt-6 flex items-center gap-2 text-accents">
        <span className="animate-pulse">↗</span>
        <span className="font-medium">Learn more</span>
      </div>
    </motion.div>
  );
};