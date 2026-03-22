import Stripe from 'stripe';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

let stripe: Stripe | null = null;

if (stripeSecretKey) {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2025-04-30.basil'
  });
}

export { stripe };

export async function createCheckoutSession({
  priceId
}: {
  priceId: string;
}) {
  redirect('/?error=checkout-not-configured');
}

export async function createCustomerPortalSession() {
  redirect('/?error=portal-not-configured');
}

export async function handleSubscriptionChange() {
  return;
}

export async function getStripePrices() {
  return [];
}

export async function getStripeProducts() {
  return [];
}
