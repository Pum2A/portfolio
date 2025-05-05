"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../components/ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 bg-sections overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent"
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
              {/* Email Button */}
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-xl font-medium flex items-center gap-3 
                  ${
                    theme === "dark"
                      ? "bg-accents text-background hover:bg-accents/90"
                      : "bg-accents-dark text-background hover:bg-accents-dark/90"
                  }
                  transition-all shadow-lg hover:shadow-accents/20`}
              >
                <FaPaperPlane className="animate-float" />
                <span>Send Message</span>
              </motion.a>

              {/* Social Links */}
              <div className="flex flex-col items-center gap-4">
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-secondText" : "text-accents-dark"
                  }`}
                >
                  Or find me on
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, href: "https://github.com/Pum2A" },
                    {
                      icon: <FaLinkedin />,
                      href: "https://linkedin.com/in/dominik-gadzina",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl flex items-center justify-center
                        ${
                          theme === "dark"
                            ? "bg-background text-secondText hover:text-accents border border-border"
                            : "bg-sections text-accents-dark hover:text-accents-dark/80 border border-accents/20"
                        }
                        transition-colors shadow-sm`}
                      aria-label={
                        i === 0 ? "GitHub profile" : "LinkedIn profile"
                      }
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div
          className={`absolute top-20 left-1/4 w-48 h-48 ${
            theme === "dark" ? "bg-accents/10" : "bg-accents-dark/10"
          } blur-3xl -z-10`}
        />
        <div
          className={`absolute bottom-10 right-1/4 w-32 h-32 ${
            theme === "dark" ? "bg-accents/10" : "bg-accents-dark/10"
          } blur-3xl -z-10`}
        />
      </div>
    </section>
  );
};

export default Contact;
