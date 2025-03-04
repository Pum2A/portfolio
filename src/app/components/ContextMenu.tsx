"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const floatingLinks = [
  { name: "GitHub", href: "https://github.com/Pum2A", emoji: "🐙" },
  { name: "CV", emoji: "📄", isDropdown: true },
];

const cvLinks = [
  { name: "English CV", href: "/ENCV.pdf", download: "YourName_CV_EN.pdf" },
  { name: "Polish CV", href: "/PLCV.pdf", download: "YourName_CV_PL.pdf" },
];

const ContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cvMenuOpen, setCvMenuOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <motion.div
        className="flex flex-col gap-2 items-end"
        animate={isOpen ? "open" : "closed"}
      >
        <AnimatePresence>
          {isOpen &&
            floatingLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {link.isDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setCvMenuOpen(!cvMenuOpen)}
                      className="px-4 py-2 bg-sections rounded-full shadow-lg flex items-center gap-2 hover:bg-accents/20 transition-colors
                        border border-border text-text focus:outline-none focus:ring-2 focus:ring-accents"
                    >
                      <span>{link.emoji}</span>
                      <span className="text-sm">{link.name}</span>
                    </button>

                    <AnimatePresence>
                      {cvMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 bottom-full mb-2 flex flex-col gap-2 bg-sections rounded-xl p-2 shadow-lg border border-border"
                        >
                          {cvLinks.map((cv, j) => (
                            <motion.a
                              key={cv.name}
                              href={cv.href}
                              download={cv.download}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              className="px-4 py-2 bg-background text-text rounded-lg flex items-center gap-2 
                                hover:bg-accents/10 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accents"
                            >
                              {cv.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    className="px-4 py-2 bg-sections rounded-full shadow-lg flex items-center gap-2 hover:bg-accents/20 transition-colors
                      border border-border text-text focus:outline-none focus:ring-2 focus:ring-accents"
                  >
                    <span>{link.emoji}</span>
                    <span className="text-sm">{link.name}</span>
                  </a>
                )}
              </motion.div>
            ))}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-accents rounded-full shadow-xl flex items-center justify-center text-background text-xl
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accents focus:ring-offset-sections"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "×" : "+"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContextMenu;
