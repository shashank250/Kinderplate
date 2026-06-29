'use client';

import { motion } from 'framer-motion';

export default function Pain() {
  const painPoints = [
    {
      title: "The Picky Eater Puzzle",
      description: "The anxiety of not knowing if your child is getting the nutrients they need to grow, while fighting the 'I don't like green things' battle.",
      icon: "🧩",
    },
    {
      title: "The Professional's Time Crunch",
      description: "You're crushing it at work, but the evening rush feels like a second shift of high-stakes negotiation over broccoli.",
      icon: "⏰",
    },
    {
      title: "The Infinite Mental Load",
      description: "The constant cycle of researching recipes, shopping for fresh produce, and prepping meals—only for them to be rejected.",
      icon: "🧠",
    },
  ];

  return (
    <section className="py-20 bg-white text-forest-green">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-header font-bold mb-6">
            Mealtime shouldn't feel like a battle.
          </h2>
          <p className="text-xl font-body text-forest-green/70">
            We know the struggle. You want the best for your child, but between a
            demanding career and a picky eater, dinner can become the most stressful
            part of your day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="p-8 rounded-3xl border-2 border-forest-green/10 shadow-3d hover:shadow-3d-hover hover:border-coral transition-all group cursor-default bg-white"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-300">{point.icon}</div>
              <h3 className="text-2xl font-header font-bold mb-3 group-hover:text-coral transition-colors">
                {point.title}
              </h3>
              <p className="font-body text-forest-green/80 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
