'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PlanCardProps {
  plan: {
    name: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    highlighted: boolean;
    id: string; // TRIAL, MONTHLY, PREMIUM
  };
}

export default function PlanCard({ plan }: PlanCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: plan.id }),
      });

      if (!res.ok) throw new Error('Checkout failed');

      const { url } = await res.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please try again or login first.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-8 rounded-3xl border-2 transition-all flex flex-col ${
        plan.highlighted
          ? "border-coral shadow-2xl scale-105 bg-coral/5"
          : "border-forest-green/10 hover:border-coral shadow-3d"
      }`}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-header font-bold mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-forest-green/60 font-body">/{plan.period}</span>
        </div>
      </div>
      <ul className="flex-1 space-y-4 mb-8 font-body">
        {plan.features.map((feature, fIndex) => (
          <li key={fIndex} className="flex gap-3 items-start">
            <span className="text-coral">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className={`w-full py-4 rounded-full text-center font-bold transition-all ${
          plan.highlighted
            ? "bg-coral text-cream-white hover:bg-forest-green"
            : "bg-forest-green text-cream-white hover:bg-coral"
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Processing...' : plan.cta}
      </button>
    </motion.div>
  );
}
