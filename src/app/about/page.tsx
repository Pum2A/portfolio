"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { useTheme } from "../components/ThemeProvider";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // For parallax scrolling effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  // Services with icons
  const services = [
    {
      title: "Fullstack Development",
      description: "End-to-end solutions with modern tech stacks",
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      title: "Frontend Expertise",
      description: "Creating responsive, accessible interfaces",
      icon: <FaLaptopCode className="w-6 h-6" />,
    },
    {
      title: "Mobile-First Design",
      description: "Optimized experiences across all devices",
      icon: <FaMobileAlt className="w-6 h-6" />,
    },
    {
      title: "Backend Solutions",
      description: "Robust APIs and scalable architecture",
      icon: <FaServer className="w-6 h-6" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Background gradient similar to Projects component for consistency
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
      ref={ref}
      className="relative py-24 md:py-32 bg-sections overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={bgGradient} />

        <div
          className={`absolute top-1/4 -left-20 w-64 h-64 rounded-full blur-3xl opacity-30 ${
            isDark ? "bg-accents/20" : "bg-accents-dark/10"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30 ${
            isDark ? "bg-accents-dark/20" : "bg-accents/10"
          }`}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Content column - now full width without image */}
        <motion.div
          className="space-y-8"
          style={{ y, opacity }} // Parallax effect
        >
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-accents/20 to-accents-dark/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-accents/20 shadow-sm"
            >
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-accents" : "text-accents-dark"
                }`}
              >
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${
                isDark
                  ? "from-accents via-accents-dark to-accents"
                  : "from-accents-dark via-accents to-accents-dark"
              } bg-clip-text text-transparent drop-shadow-sm`}
            >
              Crafting Digital Excellence
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl text-secondText leading-relaxed">
                I'm a{" "}
                <span
                  className={
                    isDark
                      ? "text-accents font-medium"
                      : "text-accents-dark font-medium"
                  }
                >
                  Fullstack Developer
                </span>{" "}
                with passion for transforming ideas into immersive digital
                experiences.
              </p>

              <p className="text-lg text-secondText leading-relaxed">
                With my technical expertise and eye for design, I create
                solutions that not only work flawlessly but also provide
                exceptional user experiences. I believe in clean code,
                performance optimization, and accessibility.
              </p>
            </motion.div>
          </div>

          {/* Services/Specialties Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`flex gap-4 p-5 rounded-xl ${
                    isDark
                      ? "bg-background/60 hover:bg-background/90"
                      : "bg-background hover:bg-white"
                  } border border-border/80 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm`}
                >
                  <div
                    className={`mt-0.5 p-3 rounded-lg ${
                      isDark
                        ? "bg-accents/10 text-accents"
                        : "bg-accents-dark/10 text-accents-dark"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-1">
                      {service.title}
                    </h3>
                    <p className="text-secondText">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to action - FULLY FIXED FOR LIGHT MODE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-6 text-center"
          >
            {isDark ? (
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium shadow-lg bg-gradient-to-r from-accents to-accents-dark hover:shadow-accents/20 transition-all duration-300"
              >
                <span className="text-white font-medium">View My Projects</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            ) : (
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium shadow-lg bg-text text-background hover:shadow-text/20 border border-border transition-all duration-300"
              >
                <span className="text-background font-medium">
                  View My Projects
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-background"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
