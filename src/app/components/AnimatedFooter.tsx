// components/AnimatedFooter.tsx
"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const footerLinks = [
  { icon: <FaGithub />, href: "https://github.com" },
  { icon: <FaLinkedin />, href: "https://linkedin.com" },
  { icon: <FaRegEnvelope />, href: "mailto:contact@example.com" },
];

const AnimatedFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-sections border-t border-background"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-accents to-accents/70 bg-clip-text text-transparent"
          >
            DG.it
          </motion.div>

          <div className="flex gap-6">
            {footerLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-2xl text-secondText hover:text-text transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-secondText text-center md:text-right">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default AnimatedFooter;
