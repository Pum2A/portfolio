// components/AiAssistant.tsx
"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-accents rounded-full flex items-center justify-center shadow-xl"
      >
        <span className="text-2xl">🤖</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-20 right-0 w-96 bg-sections rounded-xl border p-4 shadow-xl"
          >
            {/* Add AI chat interface here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}