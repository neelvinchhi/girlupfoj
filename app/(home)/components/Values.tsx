"use client";

import { motion } from "framer-motion";
import { Star, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Empowerment",
    description: "Empowering women and girls through education and advocacy"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Inclusivity",
    description: "Promoting inclusivity and celebrating individuality"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Support",
    description: "Supporting the elderly and those in need"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Social Responsibility",
    description: "Fostering a sense of community and social responsibility"
  }
];

const goals = [
  "Educate and raise awareness about gender equality and women's empowerment",
  "Provide resources and support to girls and women in need",
  "Promote community service and social responsibility",
  "Celebrate the individuality of people with disabilities"
];

export default function Values() {
  return (
    <section className="py-20 px-6 bg-white text-rose-900" id="values">
      <div className="max-w-6xl mx-auto">
        {/* Values */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-rose-800">Our Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-rose-600 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">{value.title}</h3>
              <p className="text-rose-700 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Goals */}
        <motion.div
          className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Our Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white/90">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
