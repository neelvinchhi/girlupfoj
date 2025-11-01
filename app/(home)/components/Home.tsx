"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-rose-400 mb-6">
            Girl Up: FOJ
          </h1>
        </motion.div>
        
        <motion.p
          className="text-lg text-rose-700 leading-relaxed max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Empowering women and girls through education, advocacy, and community service
        </motion.p>
      </div>
    </section>
  );
}