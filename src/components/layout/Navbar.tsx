'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="glass flex items-center justify-between px-6 py-3 max-w-7xl w-full rounded-full shadow-3d border border-white/40">
        <div className="flex items-center gap-2">
          <span className="text-xl font-header font-bold text-forest-green">
            Kinder<span className="text-coral">Plate</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-forest-green">
          <Link href="#how-it-works" className="text-sm hover:text-coral transition-colors">How it Works</Link>
          <Link href="#plans" className="text-sm hover:text-coral transition-colors">Plans</Link>
          <Link href="#nutrition" className="text-sm hover:text-coral transition-colors">Nutrition</Link>
          <Link
            href="/login"
            className="bg-forest-green text-cream-white px-5 py-2 rounded-full text-sm hover:bg-coral transition-all shadow-sm"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
