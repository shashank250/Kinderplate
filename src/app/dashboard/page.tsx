export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-header font-bold text-forest-green mb-6">
        Welcome back, Mama! ✨
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200">
          <h3 className="font-header font-bold text-forest-green mb-2">Next Delivery</h3>
          <p className="text-zinc-600 font-body">Coming this Friday, June 30th</p>
          <div className="mt-4 text-sm font-bold text-coral">📦 In transit</div>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200">
          <h3 className="font-header font-bold text-forest-green mb-2">Child's Growth</h3>
          <p className="text-zinc-600 font-body">Optimal nutrient intake this month</p>
          <div className="mt-4 text-sm font-bold text-green-600">📈 On track</div>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200">
          <h3 className="font-header font-bold text-forest-green mb-2">Current Plan</h3>
          <p className="text-zinc-600 font-body">Monthly Nourish</p>
          <div className="mt-4 text-sm font-bold text-forest-green">💎 Active</div>
        </div>
      </div>
    </div>
  );
}
