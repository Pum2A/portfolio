// components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../components/ThemeProvider";

const projects = [
  {
    title: "DSA",
    tech: ["Next.js", "TasilwindCSS", ".NET", "shadcn"],
    description:
      "Full-stack application with .NET where you can learn Data Structures and Algorithms",
    image: "/dsa.PNG",
    link: "https://dsa-frontend-nextjs-pkh4.vercel.app/",
    github: "https://github.com/Pum2A/DSA",
  },
  {
    title: "Booking Application",
    tech: ["Next.js", "TailwindCSS", "Prisma", "shadcn"],
    description: "Full-stack real-time booking platform",
    image: "/bookingapp.PNG",
    link: "https://bookingfullstack.vercel.app",
    github: "https://github.com/Pum2A/bookingappfront",
  },
  {
    title: "Foodify",
    tech: ["Next.js", "TailwindCSS", "Firebase", "TypeScript"],
    description: "AI-powered recipe generator",
    image: "/foodify.PNG",
    link: "https://my-recipe-app-eta.vercel.app",
    github: "https://github.com/Pum2A/Foodify",
  },
  {
    title: "React Crypto",
    tech: ["React", "JavaScript", "CSS", "Cryptocurrency"],
    description: "Web application focused on cryptocurrency tracking",
    image: "/crypto.PNG",
    link: "https://pum2a.github.io/react-crypto/",
    github: "https://github.com/Pum2A/react-crypto",
  },
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-sections hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-text">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 text-secondText hover:text-accents transition-colors"
                      aria-label={`Visit ${project.title} live demo`}
                    >
                      ↗
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 text-secondText hover:text-accents transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0C5.373 0 0 5.373 0 12c0 5.303 
                          3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.73.082-.73 
                          1.205.085 1.84 1.237 1.84 1.237 
                          1.07 1.835 2.807 1.305 3.495.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 
                          0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 
                          0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405 
                          c1.02.005 2.045.138 3 .405 2.29-1.553 3.295-1.23 3.295-1.23.653 1.653.24 2.873.12 3.176 
                          .77.84 1.235 1.91 1.235 3.22 
                          0 4.61-2.805 5.625-5.475 5.92.432.372.816 1.102.816 2.222 
                          0 1.606-.015 2.898-.015 3.293 
                          0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12 
                          c0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>

                <p className="text-secondText min-h-[60px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
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
              </div>

              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-accents/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
