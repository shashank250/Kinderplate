import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        <aside className="hidden md:block w-64 shrink-0">
          <nav className="flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg font-body font-medium hover:bg-white hover:shadow-sm transition-all text-forest-green"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/customize"
              className="px-4 py-2 rounded-lg font-body font-medium hover:bg-white hover:shadow-sm transition-all text-forest-green"
            >
              Meal Customization
            </Link>
            <Link
              href="/dashboard/nutrition"
              className="px-4 py-2 rounded-lg font-body font-medium hover:bg-white hover:shadow-sm transition-all text-forest-green"
            >
              Nutrition Tracker
            </Link>
            <Link
              href="/dashboard/billing"
              className="px-4 py-2 rounded-lg font-body font-medium hover:bg-white hover:shadow-sm transition-all text-forest-green"
            >
              Billing & Plan
            </Link>
          </nav>
        </aside>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
