"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

export const Hero = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-sections" />

        {/* Animated gradients */}
        <motion.div
          className="absolute top-1/4 -left-32 w-[35rem] h-[35rem] rounded-full blur-3xl opacity-30"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(46,144,255,0.3) 0%, rgba(50,50,100,0.1) 70%)"
                : "radial-gradient(circle, rgba(46,144,255,0.2) 0%, rgba(200,220,255,0.1) 70%)",
          }}
          animate={{
            y: [20, -20, 20],
            x: [-10, 20, -10],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-30"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(130,87,230,0.3) 0%, rgba(80,30,190,0.1) 70%)"
                : "radial-gradient(circle, rgba(130,87,230,0.2) 0%, rgba(210,200,255,0.1) 70%)",
          }}
          animate={{
            y: [-30, 30, -30],
            x: [10, -10, 10],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] pointer-events-none" />

      <motion.div
        className="relative z-10 container mx-auto text-center px-6 md:px-8"
        style={{ y, opacity }}
      >
        {/* Status badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block"
        >
          <div className="inline-block bg-gradient-to-r from-accents/20 to-accents-dark/20 backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 border border-accents/20 shadow-lg shadow-accents/5">
            <span className="text-accents font-medium text-sm flex items-center">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accents opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accents"></span>
              </span>
              Open to work & collaboration
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="space-y-1 md:space-y-2 mb-8">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="block mb-4 bg-gradient-to-br from-text to-text/70 bg-clip-text text-transparent drop-shadow-sm">
              Building Digital Futures
            </span>
            <span className="bg-gradient-to-r from-accents via-accents-dark to-accents bg-clip-text text-transparent drop-shadow-sm">
              One Pixel at a Time
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-xl md:text-2xl text-secondText max-w-3xl mx-auto leading-relaxed font-medium"
        >
          I create{" "}
          <span className="text-accents font-semibold">modern, performant</span>{" "}
          web experiences using cutting-edge tools and clean design principles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 font-medium rounded-full bg-gradient-to-r from-accents to-accents-dark text-white shadow-lg shadow-accents/30 hover:shadow-xl transition duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 font-medium rounded-full border border-accents/30 text-accents shadow-lg shadow-transparent hover:shadow-accents/10 hover:bg-accents/5 transition duration-300"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Improved scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-secondText text-sm font-medium mb-2">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-accents/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="w-1.5 h-3 bg-accents rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
