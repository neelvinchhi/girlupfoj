"use client";

import { motion } from "framer-motion";
import { Target, Book, Heart, Users } from "lucide-react";

const missions = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Education & Awareness",
    description: "Address feminism and gender inequality by dismantling misconceptions through educational sessions"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Resource Provision",
    description: "Inform women about available resources and essential life skills"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community Support",
    description: "Foster appreciation for girls' education and conduct donation drives"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Social Responsibility",
    description: "Contribute to community through projects like visiting animal shelters"
  }
];

export default function Mission() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-rose-100 to-pink-100 text-rose-900" id="mission">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-rose-800">Our Mission</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-rose-200 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-rose-600 mb-4 flex justify-center">{mission.icon}</div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">{mission.title}</h3>
              <p className="text-rose-700 leading-relaxed text-sm">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}