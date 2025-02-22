// components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-20 bg-sections">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-accents to-accents/70 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <p className="text-xl text-secondText mb-12">
              Have an exciting project in mind? Let's turn your ideas into
              reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ y: -3 }}
                className="px-8 py-4 bg-accents text-background rounded-lg font-medium flex items-center gap-2 hover:bg-accents/90 transition-colors"
              >
                <FaPaperPlane />
                Send Email
              </motion.a>

              <div className="flex gap-4 justify-center">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className="p-4 bg-background text-secondText rounded-lg hover:text-text transition-colors"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className="p-4 bg-background text-secondText rounded-lg hover:text-text transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
