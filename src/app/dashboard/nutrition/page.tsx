export default function NutritionPage() {
  const nutrients = [
    { name: "Omega-3", value: 85, status: "Optimal", color: "bg-blue-500" },
    { name: "Iron", value: 60, status: "Needs Boost", color: "bg-coral" },
    { name: "Vitamin D", value: 95, status: "Optimal", color: "bg-green-500" },
    { name: "Calcium", value: 70, status: "Good", color: "bg-yellow-500" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-header font-bold text-forest-green mb-6">
        Nutrition Tracker 📊
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-3d border border-zinc-200">
          <h2 className="text-xl font-header font-bold text-forest-green mb-6">Weekly Nutrient Balance</h2>
          <div className="space-y-6">
            {nutrients.map((n, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-body">
                  <span className="font-bold text-forest-green">{n.name}</span>
                  <span className={n.status === 'Optimal' ? 'text-green-600' : 'text-coral'}>{n.status}</span>
                </div>
                <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${n.color} transition-all duration-1000`}
                    style={{ width: `${n.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-forest-green text-cream-white p-8 rounded-3xl shadow-3d flex flex-col justify-center text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-2xl font-header font-bold mb-2">Nourishment Score</h3>
          <div className="text-6xl font-bold text-coral mb-4">88/100</div>
          <p className="text-sm font-body text-cream-white/70">
            Your child's diet is in the top 15% of their age group.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-3d border border-zinc-200">
        <h2 className="text-xl font-header font-bold text-forest-green mb-6">Nutritionist's Note</h2>
        <div className="p-6 bg-cream-white rounded-2xl border-l-4 border-coral italic text-forest-green/80 font-body">
          "Leo is doing great with his Vitamin D intake! For next week, we've added more spinach-infused pasta and iron-rich berries to help boost his Iron levels. Keep it up, Mama!"
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-200" />
          <div>
            <p className="font-bold text-forest-green">Dr. Sarah Jenkins</p>
            <p className="text-xs text-zinc-500">Pediatric Nutritionist, KinderPlate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
