import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  switch (event.type) {
    case 'checkout.session.completed': {
      const userId = session.metadata?.userId;
      const planType = session.metadata?.planType;
      const subscriptionId = session.subscription as string;

      if (userId && planType) {
        await prisma.subscription.upsert({
          where: { userId },
          update: {
            planType: planType as any,
            status: 'ACTIVE',
            stripeSubscriptionId: subscriptionId,
          },
          create: {
            userId,
            planType: planType as any,
            status: 'ACTIVE',
            stripeSubscriptionId: subscriptionId,
          },
        });
      }
      break;
    }
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      await prisma.subscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          status: subscription.status === 'active' ? 'ACTIVE' : 'PAST_DUE',
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        },
      });
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      await prisma.subscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: { status: 'CANCELED' },
      });
      break;
    }
  }

  return NextResponse.json({ received: true });
}
