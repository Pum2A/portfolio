// components/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "GraphQL",
    "UX Design",
  ];

  return (
    <section className="relative py-20 bg-sections overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 relative w-64 h-64 rounded-full overflow-hidden border-4 border-accents"
            >
              <Image
                src="/placeholder-avatar.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex-1">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-accents to-accents/70 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-secondText mb-8 leading-relaxed"
              >
                With 5+ years crafting digital experiences, I specialize in
                building scalable web applications that combine cutting-edge
                technology with elegant design. My passion lies in solving
                complex problems through intuitive interfaces.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-background rounded-full text-center border border-accents/20 hover:border-accents/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
