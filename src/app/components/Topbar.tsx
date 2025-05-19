"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

// Navigation sections for the SPA
const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const socials = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/Pum2A",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://linkedin.com/in/dominik-gadzina",
    label: "LinkedIn",
  },
];

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  // Track scroll position and determine active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style when scrolled
      setScrolled(window.scrollY > 20);

      // Find active section
      const sections = navSections.map((section) => section.id);
      let currentSection = sections[0];

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        // Consider a section active when its top is near viewport top
        // Adjusted to account for navbar height and section padding
        if (rect.top <= 150 && rect.bottom > 0) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section - fixed for mobile
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    // First close the mobile menu and then scroll with a small delay
    setIsOpen(false);

    // Use setTimeout to ensure the menu animation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to ensure menu closing animation starts
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-sections/95 backdrop-blur-md shadow-lg border-b border-border/50 py-1"
            : "bg-sections/70 backdrop-blur-sm py-2"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2 z-10"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent"
            >
              DG.it
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 mr-6">
              {navSections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className="relative group"
                  >
                    <motion.span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        activeSection === section.id
                          ? "text-accents"
                          : "text-secondText hover:text-text"
                      }`}
                      whileHover={{ y: -1 }}
                    >
                      {section.label}
                    </motion.span>
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accents rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Social Links & Theme Toggle */}
            <div className="flex items-center gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-secondText hover:text-accents transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}

              <motion.button
                onClick={toggleTheme}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-secondText hover:text-accents transition-colors ml-1"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-secondText hover:text-accents"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-secondText hover:text-accents"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="fixed top-16 left-0 right-0 z-40 bg-sections/95 backdrop-blur-lg border-b border-border/80 md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-5">
              <ul className="flex flex-col gap-1 mb-6">
                {navSections.map((section, i) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "bg-accents/10 text-accents font-medium"
                          : "text-secondText hover:bg-background/70"
                      }`}
                    >
                      {section.label}
                      {activeSection === section.id && (
                        <motion.div
                          layoutId="mobileNavIndicator"
                          className="ml-2 h-1 w-1 rounded-full bg-accents"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex justify-center gap-5 pt-3 border-t border-border/30">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 text-secondText hover:text-accents"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Topbar;
