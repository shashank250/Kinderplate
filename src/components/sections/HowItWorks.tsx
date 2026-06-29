export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Customize Your Kit",
      description: "Tell us about your child's age, dietary preferences, and any allergies. We'll tailor the menu specifically for them.",
      icon: "📋",
    },
    {
      number: "02",
      title: "Expertly Prepared",
      description: "Our nutritionists and chefs prepare fresh, balanced meals using organic ingredients and kid-friendly flavor profiles.",
      icon: "👨‍🍳",
    },
    {
      number: "03",
      title: "Doorstep Delivery",
      description: "Get your weekly box of joy delivered in eco-friendly packaging. Just heat, serve, and watch them enjoy!",
      icon: "🚚",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cream-white text-forest-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-header font-bold mb-6">
            Simple. Fresh. Joyful.
          </h2>
          <p className="text-xl font-body text-forest-green/70">
            We handle the science and the prep, so you can focus on the moments
            that matter.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg mb-6 group-hover:scale-110 transition-transform border-4 border-coral">
                {step.icon}
              </div>
              <div className="absolute -top-4 -left-4 text-6xl font-header font-bold text-forest-green/10 group-hover:text-coral/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-2xl font-header font-bold mb-3">
                {step.title}
              </h3>
              <p className="font-body text-forest-green/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
