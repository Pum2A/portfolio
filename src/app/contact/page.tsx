"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../components/ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Background gradient similar to other sections for consistency
  const bgGradient = [
    "absolute",
    "inset-0",
    "-z-10",
    "opacity-80",
    "pointer-events-none",
    "bg-gradient-to-br",
    "from-accents/10",
    "via-background/80",
    "to-accents-dark/20",
    "blur-2xl",
    "rounded-3xl",
  ].join(" ");

  return (
    <section
      id="contact"
      className="relative py-20 bg-sections overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={bgGradient} />

        {/* Grid pattern for consistency with other sections */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${
              isDark
                ? "from-accents via-accents-dark to-accents"
                : "from-accents-dark via-accents to-accents-dark"
            } bg-clip-text text-transparent drop-shadow-sm`}
          >
            Let's Collaborate
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-secondText mb-12 max-w-prose mx-auto leading-relaxed"
            >
              Whether you have a project in mind or just want to connect, I'm
              always open to discussing new opportunities and creative ideas.
            </motion.p>

            <div className="flex flex-col items-center gap-8">
              {/* Email Button - Fixed for both modes */}
              {isDark ? (
                <motion.a
                  href="mailto:gadzina.dominik@gmail.com"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl font-medium flex items-center gap-3 bg-accents text-white hover:bg-accents/90 transition-all shadow-lg hover:shadow-accents/20"
                >
                  <FaPaperPlane className="animate-bounce" />
                  <span>Send Message</span>
                </motion.a>
              ) : (
                <motion.a
                  href="mailto:gadzina.dominik@gmail.com"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl font-medium flex items-center gap-3 bg-text text-background hover:bg-text/90 transition-all shadow-lg hover:shadow-text/20 border border-border"
                >
                  <FaPaperPlane className="animate-bounce" />
                  <span>Send Message</span>
                </motion.a>
              )}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <p
                  className={`text-sm ${
                    isDark ? "text-secondText" : "text-secondText"
                  }`}
                >
                  Or find me on
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <FaGithub size={20} />,
                      href: "https://github.com/Pum2A",
                      label: "GitHub",
                    },
                    {
                      icon: <FaLinkedin size={20} />,
                      href: "https://linkedin.com/in/dominik-gadzina",
                      label: "LinkedIn",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl flex items-center justify-center ${
                        isDark
                          ? "bg-background/60 text-secondText hover:text-accents border border-border/80"
                          : "bg-background text-secondText hover:text-accents-dark border border-border"
                      } transition-all duration-300 shadow-sm hover:shadow-md`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div
          className={`absolute top-20 left-1/4 w-48 h-48 ${
            isDark ? "bg-accents/10" : "bg-accents-dark/10"
          } blur-3xl -z-10`}
        />
        <div
          className={`absolute bottom-10 right-1/4 w-32 h-32 ${
            isDark ? "bg-accents/10" : "bg-accents-dark/10"
          } blur-3xl -z-10`}
        />
      </div>
    </section>
  );
};

export default Contact;
