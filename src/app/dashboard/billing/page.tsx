import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function BillingPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/login');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { subscription: true },
  });

  const sub = user?.subscription;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-header font-bold text-forest-green mb-6">
        Billing & Plan 💳
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-zinc-500 font-body text-sm uppercase tracking-wider">Current Plan</p>
            <h2 className="text-2xl font-header font-bold text-forest-green">
              {sub?.planType || 'No active plan'}
            </h2>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            sub?.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-zinc-100 text-zinc-600'
          }`}>
            {sub?.status || 'INACTIVE'}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-6 border-t border-zinc-100">
          <div>
            <p className="text-zinc-500 text-xs font-body">Next Billing Date</p>
            <p className="font-medium text-forest-green">
              {sub?.currentPeriodEnd ? new Date(sub.currentPeriodEnd).toLocaleDateString() : 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-body">Payment Method</p>
            <p className="font-medium text-forest-green">Visa ending in ****</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="flex-1 py-3 rounded-full bg-forest-green text-white font-bold hover:bg-coral transition-all">
            Upgrade Plan
          </button>
          <button className="flex-1 py-3 rounded-full border border-zinc-300 text-zinc-600 font-bold hover:bg-zinc-50 transition-all">
            Manage Billing
          </button>
        </div>
      </div>

      <div className="p-6 bg-coral/10 rounded-3xl border border-coral/20 text-coral text-center font-body">
        Need help with your subscription? <a href="#" className="underline font-bold">Contact Support</a>
      </div>
    </div>
  );
}
