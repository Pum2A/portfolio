// components/About.tsx
"use client";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";

const About = () => {
  const { theme } = useTheme();
  const skills = [
    { name: "NextJS", category: "Fullstack" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "TailwindCSS", category: "Design" },
    { name: "SCSS", category: "Design" },
    { name: "Figma", category: "Design" },
  ];

  return (
    <section className="relative py-20 bg-sections overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h2
                  className={`text-5xl font-bold bg-gradient-to-r ${
                    theme === "dark"
                      ? "from-accents to-accents-dark"
                      : "from-accents-dark to-accents"
                  } bg-clip-text text-transparent`}
                >
                  Crafting Digital Excellence
                </h2>

                <div className="space-y-6">
                  <p className="text-xl text-secondText leading-relaxed">
                    With{" "}
                    <span
                      className={`${
                        theme === "dark" ? "text-accents" : "text-accents-dark"
                      }`}
                    >
                      passionate
                    </span>{" "}
                    of transforming ideas into immersive digital experiences, I
                    specialize in building:
                  </p>

                  <ul className="grid gap-4 md:grid-cols-2">
                    {[
                      "Scalable web applications",
                      "Interactive dashboards",
                      "Cloud-native solutions",
                      "Design systems",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border hover:border-accents/30 transition-colors"
                      >
                        <div
                          className={`h-2 w-2 rounded-full ${
                            theme === "dark" ? "bg-accents" : "bg-accents-dark"
                          }`}
                        />
                        <span className="text-text">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3 }}
                    className="p-4 bg-background rounded-xl border border-border hover:border-accents/30 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-text">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-accents/10 text-accents"
                            : "bg-accents-dark/10 text-accents-dark"
                        }`}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <div className="h-1 bg-accents/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-accents to-accents-dark"
                            : "bg-gradient-to-r from-accents-dark to-accents"
                        }`}
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div
          className={`absolute top-20 left-0 w-48 h-48 ${
            theme === "dark" ? "bg-accents/10" : "bg-accents-dark/10"
          } blur-3xl -z-10`}
        />
        <div
          className={`absolute bottom-10 right-0 w-32 h-32 ${
            theme === "dark" ? "bg-accents/10" : "bg-accents-dark/10"
          } blur-3xl -z-10`}
        />
      </div>
    </section>
  );
};

export default About;
