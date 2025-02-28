// Create components/ContactForm.tsx
"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // Add your submission logic
    console.log(data);
  };

  return (
    <section className="py-20 bg-sections">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full p-4 bg-background rounded-lg border border-border"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-background rounded-lg border border-border"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Message"
              className="w-full p-4 bg-background rounded-lg border border-border"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 bg-accents text-background rounded-lg font-medium"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};