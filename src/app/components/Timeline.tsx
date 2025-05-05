// components/Timeline.tsx
"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const experiences = [
  {
    year: "2024-Present",
    title: "Computer Science Student",
    company: "WSEI Kraków",
    description:
      "Studying modern web development with a strong foundation in software engineering and UI/UX principles.",
    tech: ["C#", "React", "JavaScript", "HTML/CSS", ".NET", "SQL"],
  },
];

export const TimeLine = () => {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent"
        >
          Academic Journey
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={`absolute left-1/2 w-1 h-full ${
              theme === "dark"
                ? "bg-gradient-to-b from-accents/50 via-accents/30 to-accents/50"
                : "bg-gradient-to-b from-accents/30 via-accents/10 to-accents/30"
            } transform -translate-x-1/2`}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full ${
                    theme === "dark" ? "bg-accents" : "bg-accents-dark"
                  } flex items-center justify-center z-10 shadow-lg`}
                >
                  <div className="absolute inset-0 animate-ping rounded-full bg-accents/30" />
                </div>

                {/* Content Card - Centered */}
                <div className="relative mx-auto lg:w-[70%]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl border ${
                      theme === "dark"
                        ? "border-border bg-sections"
                        : "border-accents/20 bg-sections"
                    } shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`text-lg font-semibold mb-2 ${
                        theme === "dark" ? "text-accents" : "text-accents-dark"
                      }`}
                    >
                      {exp.year}
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-secondText mb-4 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-secondText text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ y: -2 }}
                          className={`px-3 py-1 text-sm rounded-full ${
                            theme === "dark"
                              ? "bg-accents/10 text-accents"
                              : "bg-accents-dark/10 text-accents-dark"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
