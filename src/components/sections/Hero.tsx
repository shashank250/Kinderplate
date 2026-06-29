'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-white pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-header font-bold text-forest-green leading-tight">
            Less mealtime stress. <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-coral inline-block"
            >
              More happy plates.
            </motion.span>
          </h1>
          <p className="text-xl font-body text-forest-green/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Nutritionist-designed meal kits that kids actually love. Expertly balanced,
            delivered to your door, and designed to end the "picky eater" battle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#plans"
              className="bg-coral text-cream-white px-8 py-4 rounded-full text-lg font-bold shadow-3d hover:shadow-3d-hover transition-all text-center"
            >
              Start Your Joyful Journey
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#how-it-works"
              className="border-2 border-forest-green text-forest-green px-8 py-4 rounded-full text-lg font-bold hover:bg-forest-green hover:text-cream-white transition-all text-center"
            >
              See How it Works
            </motion.a>
          </div>
        </motion.div>

        <div className="relative perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square rounded-[3rem] bg-forest-green/10 flex items-center justify-center overflow-hidden shadow-3d border-4 border-white"
          >
            <div className="text-forest-green/20 font-header text-9xl font-bold select-none">
              🥕🥦🍎
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/10 to-transparent" />
          </motion.div>

          {/* Floating 3D Elements */}
          <FloatingElement icon="🥕" delay={0} x={-20} y={-20} />
          <FloatingElement icon="🥦" delay={0.5} x={120} y={40} />
          <FloatingElement icon="🍎" delay={1} x={40} y={140} />
          <FloatingElement icon="🍓" delay={1.5} x={-100} y={80} />
        </div>
      </div>
    </section>
  );
}

function FloatingElement({ icon, delay, x, y }: { icon: string, delay: number, x: number, y: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className="absolute text-4xl z-20 filter drop-shadow-lg"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      {icon}
    </motion.div>
  );
}
