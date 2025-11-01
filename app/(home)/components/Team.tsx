"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "Vibha Gunuganti",
    role: "Co-Founder",
    contact: "vibha.gunuganti@gmail.com",
    phone: "97311 38949"
  },
  {
    name: "Aditi D Rao",
    role: "Co-Founder", 
    contact: "aditidrao08@gmail.com",
    phone: "72047 92740"
  }
];

export default function Team() {
  return (
    <section className="py-20 px-6 bg-white text-rose-900" id="team">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-rose-800">Our Founders</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">{founder.name}</h3>
              <p className="text-rose-600 mb-4">{founder.role}</p>
              {founder.contact && (
                <p className="text-sm text-rose-700 mb-2">{founder.contact}</p>
              )}
              {founder.phone && (
                <p className="text-sm text-rose-700">{founder.phone}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}