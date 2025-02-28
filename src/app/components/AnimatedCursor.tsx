// components/AnimatedCursor.tsx (Nowy komponent!)
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 border-2 border-accents rounded-full pointer-events-none z-50"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        transition: { type: "spring", mass: 0.1 }
      }}
    >
      <div className="absolute inset-0 animate-ping rounded-full bg-accents/20" />
    </motion.div>
  );
};