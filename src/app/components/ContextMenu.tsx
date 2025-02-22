// components/ContextMenu.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const floatingLinks = [
  { name: "Blog", href: "/blog", emoji: "📝" },
  { name: "GitHub", href: "https://github.com", emoji: "🐙" },
  { name: "CV", href: "/cv", emoji: "📄" },
];

const ContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <motion.div
        className="flex flex-col gap-2 items-end"
        animate={isOpen ? "open" : "closed"}
      >
        {floatingLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: 50 },
            }}
            transition={{ delay: i * 0.1 }}
            className="px-4 py-2 bg-sections rounded-full shadow-lg flex items-center gap-2 hover:bg-accents/10 transition-colors"
          >
            <span>{link.emoji}</span>
            <span className="text-sm">{link.name}</span>
          </motion.a>
        ))}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-accents rounded-full shadow-xl flex items-center justify-center text-background text-xl"
        >
          {isOpen ? "×" : "+"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContextMenu;
