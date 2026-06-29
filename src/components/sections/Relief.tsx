'use client';

import { motion } from 'framer-motion';

export default function Relief() {
  return (
    <section className="py-20 bg-forest-green text-cream-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-block bg-coral text-cream-white px-4 py-1 rounded-full text-sm font-bold w-fit shadow-3d">
              The KinderPlate Difference
            </div>
            <h2 className="text-4xl lg:text-6xl font-header font-bold leading-tight">
              Welcome to <br />
              <span className="text-coral">Joyful Nourishment.</span>
            </h2>
            <p className="text-xl font-body text-cream-white/80 leading-relaxed">
              We've bridged the gap between "healthy" and "tasty." By combining
              pediatric nutrition science with kid-centric culinary design, we
              turn mealtime from a battleground into a bonding experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Nutritionist-Designed", desc: "Balanced macros for ages 3-10.", icon: "🥗" },
                { title: "Kid-Approved Taste", desc: "Tested by a panel of 100+ children.", icon: "😋" },
                { title: "Mom-Simplified", desc: "Pre-portioned and ready in 15 mins.", icon: "⏱️" },
                { title: "Eco-Conscious", desc: "Biodegradable, plastic-free packaging.", icon: "🌿" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-3d"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <strong className="block font-header font-bold text-sm">{item.title}</strong>
                    <span className="text-cream-white/70 font-body text-xs">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative perspective-1000">
            <motion.div
              animate={{
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square rounded-[4rem] bg-coral/20 flex items-center justify-center border-8 border-coral/30 shadow-2xl"
            >
              <div className="text-coral text-9xl font-header font-bold select-none filter drop-shadow-2xl">
                ✨
              </div>

              {/* 3D Floating Badges */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white text-forest-green p-6 rounded-3xl shadow-3d font-body font-bold text-center"
              >
                <span className="block text-coral text-xl mb-1">⭐</span>
                "Finally, he eats broccoli!"
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white text-forest-green p-6 rounded-3xl shadow-3d font-body font-bold text-center"
              >
                <span className="block text-coral text-xl mb-1">❤️</span>
                "Stress-free evenings."
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-coral/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
