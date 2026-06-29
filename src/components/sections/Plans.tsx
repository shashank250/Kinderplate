'use client';

import PlanCard from '@/components/plans/PlanCard';

export default function Plans() {
  const plans = [
    {
      id: "TRIAL",
      name: "Trial Kit",
      price: "49",
      period: "one-time",
      features: ["3 balanced meals", "Introductory guide", "Customized to child's age", "Free delivery"],
      cta: "Try KinderPlate",
      highlighted: false,
    },
    {
      id: "MONTHLY",
      name: "Monthly Nourish",
      price: "159",
      period: "month",
      features: ["12 balanced meals/month", "Nutritionist consultation", "Customized dietary needs", "Priority delivery"],
      cta: "Choose Nourish",
      highlighted: true,
    },
    {
      id: "PREMIUM",
      name: "Premium Plate",
      price: "249",
      period: "month",
      features: ["20 balanced meals/month", "Full nutritional tracking", "Direct nutritionist access", "Premium priority delivery"],
      cta: "Go Premium",
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-white text-forest-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-header font-bold mb-6">
            Choose Your Path to Joy
          </h2>
          <p className="text-xl font-body text-forest-green/70">
            Whether you're testing the waters or looking for a full nutritional
            overhaul, we have a plan for every family.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
