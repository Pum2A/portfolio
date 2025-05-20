"use client";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";

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

export default function Journey() {
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
    // IMPORTANT: Removed the id="journey" from here since it's already in the Home component
    <section className="relative py-20 bg-background overflow-hidden min-h-[500px]">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={bgGradient} />

        {/* Grid pattern for consistency with other sections */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${
            isDark
              ? "from-accents via-accents-dark to-accents"
              : "from-accents-dark via-accents to-accents-dark"
          } bg-clip-text text-transparent drop-shadow-sm`}
        >
          Academic Journey
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={`absolute left-1/2 w-1 h-full ${
              isDark
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full ${
                    isDark ? "bg-accents" : "bg-accents-dark"
                  } flex items-center justify-center z-10 shadow-lg`}
                >
                  <div className="absolute inset-0 animate-ping rounded-full bg-accents/30" />
                </div>

                {/* Content Card - Centered */}
                <div className="relative mx-auto lg:w-[70%]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl border ${
                      isDark
                        ? "border-border bg-sections"
                        : "border-accents/20 bg-sections"
                    } shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`text-lg font-semibold mb-2 ${
                        isDark ? "text-accents" : "text-accents-dark"
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
                            isDark
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
}
