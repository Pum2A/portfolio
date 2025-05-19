"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const AnimatedCursor = () => {
  // Use motion values for smoother, frame-perfect cursor following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Main cursor spring
  const cursorX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 1 });
  const cursorY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 1 });

  // Aura spring (delayed, smoother)
  const auraX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 1 });
  const auraY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 1 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Use 'mousemove' on window for perfect tracking
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* Aura */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: auraX,
          y: auraY,
        }}
      >
        <div className="w-12 h-12 bg-accents/20 rounded-full blur-2xl opacity-50 transition-all duration-150" />
      </motion.div>

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="w-4 h-6 rounded-[40%] bg-accents shadow-lg border-2 border-white/30" />
      </motion.div>
    </>
  );
};
