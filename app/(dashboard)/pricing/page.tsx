import Link from 'next/link';
import { checkoutAction } from '@/lib/payments/actions';
import { Check, Milk, Users, Building2, Factory, ArrowLeft } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';

export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small operations',
      icon: <Milk className="h-6 w-6" />,
      price: prices.find((p) => p.productId === products.find((pr) => pr.name === 'Base')?.id),
      basePrice: 4900,
      features: [
        'Dairy Management Platform OR Cooperative Platform',
        'Up to 50 users',
        'Basic reporting',
        'Email support',
        '1GB storage',
      ],
    },
    {
      name: 'Business',
      description: 'For growing businesses',
      icon: <Building2 className="h-6 w-6" />,
      price: prices.find((p) => p.productId === products.find((pr) => pr.name === 'Plus')?.id),
      basePrice: 9900,
      features: [
        'All platforms included',
        'Up to 200 users',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Full ERP & MRP suite',
      icon: <Factory className="h-6 w-6" />,
      price: null,
      basePrice: 24900,
      features: [
        'Everything in Business',
        'Unlimited users',
        'ERP + MRP included',
        'Dedicated account manager',
        'Unlimited storage',
        'On-premise deployment option',
        'Custom development',
      ],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Link>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your business. All prices in USD per month, 
          billed annually. Get started with a 14-day free trial.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          Need a custom solution for your organization?
        </p>
        <a
          href="mailto:sales@soyinnosolutions.com"
          className="text-primary hover:text-primary/80 font-medium"
        >
          Contact our sales team for enterprise pricing
        </a>
      </div>
    </main>
  );
}

function PricingCard({ plan }: { plan: any }) {
  return (
    <div className="pt-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mx-auto mb-4">
        {plan.icon}
      </div>
      <h2 className="text-2xl font-bold text-center mb-2">
        {plan.name}
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-4">{plan.description}</p>
      <p className="text-4xl font-bold text-center mb-1">
        ${plan.basePrice / 100}
        <span className="text-lg font-normal text-muted-foreground">/mo</span>
      </p>
      <p className="text-sm text-muted-foreground/60 text-center mb-6">billed annually</p>
      <ul className="space-y-3 px-6 mb-8">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="px-6 pb-6">
        <form action={checkoutAction}>
          <input type="hidden" name="priceId" value={plan.price?.id || ''} />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
