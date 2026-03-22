import { Button } from '@/components/ui/button';
import { ArrowRight, Milk, Users, Building2, Factory, CheckCircle, Smartphone, Brain, Database, Truck, DollarSign, Leaf } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Enterprise Software for
                <span className="block text-primary">East Africa</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Transform your dairy, cooperative, and manufacturing operations with comprehensive 
                management platforms designed for the unique needs of East African businesses.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex gap-4 flex-wrap">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#products">View Products</a>
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary rounded-3xl transform rotate-3"></div>
                <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">4+</div>
                    <div className="text-muted-foreground font-medium">Enterprise Products</div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-xl p-4 text-center">
                        <Milk className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">SmartDairy</div>
                      </div>
                      <div className="bg-muted rounded-xl p-4 text-center">
                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">Co-ops</div>
                      </div>
                      <div className="bg-muted rounded-xl p-4 text-center">
                        <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">ERP</div>
                      </div>
                      <div className="bg-muted rounded-xl p-4 text-center">
                        <Factory className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">MRP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-card w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete solutions tailored for East African enterprises, from dairy farms to manufacturing plants.
            </p>
          </div>

          <div className="space-y-16">
            <ProductSection
              icon={<Milk className="h-10 w-10" />}
              title="SmartDairy - Dairy Management Platform"
              tagline="Digitize and optimize your dairy farming operations"
              description="A comprehensive dairy farm management SaaS platform designed to digitize and optimize dairy farming operations. Built for Kenyan dairy farmers, it provides real-time visibility into every aspect of farm operations—from herd health to milk production, feed management, and financial performance."
              features={[
                { icon: <Database className="h-5 w-5" />, label: "Animal Registry", desc: "Complete profiles with ear tags, breeds, photos, and lifecycle tracking" },
                { icon: <Truck className="h-5 w-5" />, label: "Milk Production Logging", desc: "Multi-session tracking: morning, afternoon, evening yields per animal" },
                { icon: <Brain className="h-5 w-5" />, label: "AI Vet Assistant", desc: "Gemini-powered health diagnosis and breeding recommendations" },
                { icon: <DollarSign className="h-5 w-5" />, label: "Financial Ledger", desc: "Profit/loss analysis, expense tracking, and revenue reporting" },
                { icon: <Leaf className="h-5 w-5" />, label: "Feed & Silage Management", desc: "Inventory tracking with low-stock alerts and longevity predictions" },
                { icon: <Users className="h-5 w-5" />, label: "Buyer Management", desc: "Track buyers, sales, and outstanding payments" },
              ]}
              targetAudience={["Smallholder Farmers (1-10 cows)", "Large-Scale Commercial Farmers (100+ cows)"]}
            />

            <ProductSection
              icon={<Users className="h-10 w-10" />}
              title="Cooperative Societies Digital Platform"
              tagline="End-to-end cooperative management system"
              description="A comprehensive cooperative management system built for agricultural cooperatives and savings groups. The platform provides end-to-end management of member services, financial transactions, and accounting operations with automatic general ledger posting."
              features={[
                { icon: <Users className="h-5 w-5" />, label: "Member Management", desc: "Complete profiles, status tracking, and unique member numbering" },
                { icon: <DollarSign className="h-5 w-5" />, label: "Shares & Savings", desc: "Purchase, redemption, transfers, and dividend distribution" },
                { icon: <Truck className="h-5 w-5" />, label: "Loans Processing", desc: "Application, disbursement, repayment with principal/interest tracking" },
                { icon: <Database className="h-5 w-5" />, label: "Produce Collections", desc: "Track member deliveries with monthly summaries and GL posting" },
                { icon: <Building2 className="h-5 w-5" />, label: "Supply Chain Management", desc: "Warehouses, purchase orders, and fixed asset depreciation" },
                { icon: <CheckCircle className="h-5 w-5" />, label: "General Ledger", desc: "Double-entry bookkeeping with automated posting from all modules" },
              ]}
              targetAudience={["Agricultural Cooperatives", "Savings Groups", "SACCOs"]}
            />

            <ProductSection
              icon={<Building2 className="h-10 w-10" />}
              title="ERP for East Africa"
              tagline="Comprehensive enterprise resource planning"
              description="A comprehensive Enterprise Resource Planning system designed for East African businesses. Includes accounting, HR, inventory, supply chain management, and business intelligence with multi-currency support."
              features={[
                { icon: <DollarSign className="h-5 w-5" />, label: "Financial Management", desc: "Full accounting suite with multi-currency and tax handling" },
                { icon: <Users className="h-5 w-5" />, label: "Human Resources", desc: "Employee management, payroll, and attendance tracking" },
                { icon: <Truck className="h-5 w-5" />, label: "Supply Chain", desc: "Procurement, inventory, and distribution management" },
                { icon: <Brain className="h-5 w-5" />, label: "Business Analytics", desc: "Real-time dashboards, KPIs, and custom reporting" },
                { icon: <Building2 className="h-5 w-5" />, label: "Multi-Branch", desc: "Manage multiple locations from a single platform" },
                { icon: <CheckCircle className="h-5 w-5" />, label: "Role-Based Access", desc: "Granular permissions for different user roles" },
              ]}
              targetAudience={["Medium to Large Enterprises", "Manufacturing Companies", "Trading Businesses"]}
            />

            <ProductSection
              icon={<Factory className="h-10 w-10" />}
              title="MRP for Manufacturing"
              tagline="Optimize your production operations"
              description="Material Requirements Planning system for manufacturing operations. Optimize production planning, material procurement, quality control, and cost analysis for East African manufacturers."
              features={[
                { icon: <Database className="h-5 w-5" />, label: "Production Planning", desc: "Scheduling, work orders, and capacity planning" },
                { icon: <Truck className="h-5 w-5" />, label: "Material Requirements", desc: "BOM management, procurement suggestions, and inventory sync" },
                { icon: <CheckCircle className="h-5 w-5" />, label: "Quality Control", desc: "Inspection workflows, defect tracking, and compliance" },
                { icon: <DollarSign className="h-5 w-5" />, label: "Cost Analysis", desc: "Actual vs standard costing, variance analysis" },
                { icon: <Building2 className="h-5 w-5" />, label: "Machine Tracking", desc: "Equipment status, maintenance schedules, and utilization" },
                { icon: <Brain className="h-5 w-5" />, label: "Demand Forecasting", desc: "AI-powered demand prediction based on historical data" },
              ]}
              targetAudience={["Food & Beverage Manufacturers", "Agro-processing", "Consumer Goods"]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mt-3 max-w-3xl text-lg opacity-90">
                Join hundreds of East African businesses already using SoyInnovate solutions 
                to improve efficiency and grow their operations.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end gap-4 flex-wrap">
              <Button asChild size="lg" variant="outline" className="rounded-full border-current text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#products">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              For organizations that demand maximum control and unbeatable performance, our solutions offer a premium on‑premise installation that puts the full power of our platforms directly into your hands. Enjoy enterprise‑grade speed, enhanced data security, and complete independence from internet connectivity—backed by our expert team who handles installation, setup, customization, and training end‑to‑end. With on‑premise deployment, you get all the advanced features of our solutions to your unique environment, ensuring faster operations, guaranteed uptime, and the confidence of owning your entire data ecosystem. Upgrade your business with a solution built for serious growth and long‑term success.
            </p>
            <p className="mt-6 text-lg font-medium">
              <a href="mailto:sales@soyinnosolutions.com" className="text-primary hover:text-primary/80">
                Contact us for more details.
              </a>
            </p>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why Choose SoyInnovate?
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <FeatureCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile-First Design"
              description="Offline-capable mobile apps for field work. Works in areas with unreliable connectivity."
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI-Powered Insights"
              description="Gemini AI integration for expert-level advice, health diagnosis, and trend prediction."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Local Expertise"
              description="Built specifically for East African business practices, compliance, and currency systems."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductSection({
  icon,
  title,
  tagline,
  description,
  features,
  targetAudience,
}: {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: { icon: React.ReactNode; label: string; desc: string }[];
  targetAudience: string[];
}) {
  return (
    <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
      <div className="p-8 lg:p-12">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-primary font-medium mt-1">{tagline}</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{description}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">{feature.label}</h4>
                <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Target:</span>
            {targetAudience.map((aud, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                {aud}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
