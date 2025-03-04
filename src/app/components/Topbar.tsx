// components/Topbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

// Removed navigation links
const socials = [
  { icon: <FaGithub />, href: "https://github.com/Pum2A" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/dominik-gadzina" },
];

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-sections/80 backdrop-blur-sm z-50 border-b border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-accents to-accents/70 bg-clip-text text-transparent"
            >
              DG.it
            </motion.span>
          </Link>

          {/* Removed desktop navigation */}

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -2 }}
                  className="p-2 text-secondText hover:text-text transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 text-secondText hover:text-text transition-colors"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-secondText hover:text-text"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Simplified mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 w-full md:hidden bg-sections/95 backdrop-blur-lg z-40 border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 pt-4 justify-center">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="p-2 text-2xl text-secondText hover:text-text"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Topbar;
