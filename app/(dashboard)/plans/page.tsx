'use client';

import Link from 'next/link';
import { Check, Milk, Users, Building, Factory, Package, ArrowLeft } from 'lucide-react';

const products = [
  {
    name: 'Dairy Management Platform',
    icon: <Milk className="h-8 w-8" />,
    description: 'Complete dairy farm management solution',
    plans: [
      { name: 'Starter', price: 500, features: ['Up to 50 users', 'Basic reporting', 'Email support', '1GB storage'] },
      { name: 'Business', price: 2500, features: ['Up to 200 users', 'Advanced analytics', 'Priority support', '50GB storage', 'Custom integrations'] },
      { name: 'Enterprise', price: 5000, features: ['Unlimited users', 'Dedicated account manager', 'Unlimited storage', 'On-premise deployment', 'Custom development'] },
    ],
  },
  {
    name: 'Cooperative Platform',
    icon: <Users className="h-8 w-8" />,
    description: 'Manage your cooperative operations',
    plans: [
      { name: 'Starter', price: 20000, features: ['Up to 50 users', 'Basic reporting', 'Email support', '1GB storage'] },
      { name: 'Business', price: 35000, features: ['Up to 200 users', 'Advanced analytics', 'Priority support', '50GB storage', 'Custom integrations'] },
      { name: 'Enterprise', price: 45000, features: ['Unlimited users', 'Dedicated account manager', 'Unlimited storage', 'On-premise deployment', 'Custom development'] },
    ],
  },
  {
    name: 'ERP',
    icon: <Building className="h-8 w-8" />,
    description: 'Enterprise Resource Planning for East Africa',
    plans: [
      { name: 'Starter', price: 35000, features: ['Up to 50 users', 'Financial management', 'Inventory control', 'Email support', '5GB storage'] },
      { name: 'Business', price: 65000, features: ['Up to 200 users', 'Advanced reporting', 'Priority support', '100GB storage', 'API access', 'Custom integrations'] },
      { name: 'Enterprise', price: 95000, features: ['Unlimited users', 'Dedicated account manager', 'Unlimited storage', 'On-premise deployment', 'Custom development', '24/7 support'] },
    ],
  },
  {
    name: 'MRP',
    icon: <Factory className="h-8 w-8" />,
    description: 'Manufacturing Resource Planning',
    plans: [
      { name: 'Starter', price: 35000, features: ['Up to 50 users', 'Production planning', 'Email support', '5GB storage'] },
      { name: 'Business', price: 65000, features: ['Up to 200 users', 'Quality control', 'Priority support', '100GB storage', 'API access', 'Custom integrations'] },
      { name: 'Enterprise', price: 95000, features: ['Unlimited users', 'Dedicated account manager', 'Unlimited storage', 'On-premise deployment', 'Custom development', '24/7 support'] },
    ],
  },
];

const tierColors: Record<string, string> = {
  Starter: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Business: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Enterprise: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
};

export default function PlansPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <h1 className="text-4xl font-bold mb-4">Plans</h1>
        <p className="text-lg text-muted-foreground">
          Choose the right plan for each product
        </p>
      </div>

      <div className="space-y-16">
        {products.map((product) => (
          <section key={product.name} className="border-b border-border pb-16 last:border-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary">
                {product.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {product.plans.map((plan) => (
                <div
                  key={`${product.name}-${plan.name}`}
                  className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
                >
                  <div className={`px-6 py-2 text-center text-sm font-medium ${tierColors[plan.name]}`}>
                    {plan.name}
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold">
                        KES {plan.price.toLocaleString()}
                        <span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2.5 px-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                      Select {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
