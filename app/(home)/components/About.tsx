"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white text-rose-900" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-rose-800">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 font-light">
              Girl Up: FOJ is a student-led organization dedicated to empowering women and girls through education, advocacy, and community service. As part of the global Girl Up movement, we focus on promoting gender equality, raising awareness about the challenges faced by girls, and providing resources to support their development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}