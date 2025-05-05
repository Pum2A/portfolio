"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "./ThemeProvider";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category?: "Frontend" | "Backend" | "Design" | "DevOps";
}

const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10" />,
    category: "Frontend",
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs className="w-10 h-10" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10" />,
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="w-10 h-10" />,
    category: "Design",
  },
  {
    name: "SCSS",
    icon: <SiSass className="w-10 h-10" />,
    category: "Design",
  },
  {
    name: "SQL",
    icon: <SiMysql className="w-10 h-10" />,
    category: "Backend",
  },
];

export const SkillsCloud: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-20 bg-sections">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              className={`relative overflow-hidden rounded-xl p-5 border ${
                isDark
                  ? "border-border bg-background/40 hover:bg-background/80"
                  : "border-border bg-background hover:bg-white"
              } transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`mb-4 ${
                    isDark ? "text-accents" : "text-accents-dark"
                  }`}
                >
                  {skill.icon}
                </div>

                <h3 className="text-lg font-bold text-text mb-2">
                  {skill.name}
                </h3>

                {skill.category && (
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isDark
                        ? "bg-accents/10 text-accents"
                        : "bg-accents-dark/10 text-accents-dark"
                    }`}
                  >
                    {skill.category}
                  </span>
                )}
              </div>

              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-accents/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Stale rozwijam swoje umiejętności w nowych technologiach
          </p>
        </motion.div>
      </div>
    </section>
  );
};
