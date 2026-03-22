# SoyInnovate Solutions - Enterprise Software for East Africa

A comprehensive SaaS platform providing enterprise software solutions for businesses in Kenya and the East African Community.

## Products

### 1. SmartDairy - Dairy Management Platform
Complete dairy farm management SaaS for Kenyan farmers:
- **Herd Management**: Animal registry, health records, breeding management
- **AI Muzzle Identification**: Photo-based animal identification using Gemini AI
- **Milk Production**: Multi-session yield tracking per animal
- **Feed & Silage Management**: Inventory with low-stock alerts
- **Financial Ledger**: Profit/loss analysis, expense tracking
- **AI Vet Assistant**: Gemini-powered health diagnosis and recommendations
- **Offline-First**: PWA with IndexedDB for field use

### 2. Cooperative Societies Platform
End-to-end cooperative management for agricultural cooperatives:
- **Member Management**: Registration, status tracking, unique numbering
- **Shares & Savings**: Purchase, redemption, transfers, dividends
- **Loans Processing**: Full lifecycle from application to repayment
- **Produce Collections**: Track member deliveries with GL posting
- **Inventory & Fixed Assets**: Warehouses, purchase orders, depreciation
- **General Ledger**: Double-entry bookkeeping with automated posting

### 3. ERP for East Africa
Comprehensive enterprise resource planning:
- Financial management with multi-currency support
- Human resources and payroll
- Supply chain and inventory
- Business intelligence and reporting

### 4. MRP for Manufacturing
Material Requirements Planning for manufacturers:
- Production planning and scheduling
- BOM management and procurement
- Quality control workflows
- Cost analysis and forecasting

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Payments**: [Stripe](https://stripe.com/)
- **AI**: [Google Gemini](https://ai.google.dev/)
- **UI**: [Tailwind CSS](https://tailwindcss.com/) + shadcn/ui

## Getting Started

```bash
git clone https://github.com/your-repo/saas-starter
cd saas-starter
pnpm install
```

## Running Locally

Install and log in to Stripe CLI:
```bash
stripe login
```

Use the setup script to create your `.env` file:
```bash
pnpm db:setup
```

Run database migrations and seed:
```bash
pnpm db:migrate
pnpm db:seed
```

Start development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Test credentials:
- Email: `test@test.com`
- Password: `admin123`

## Features

- Marketing landing page with product showcase
- Pricing page with Stripe Checkout integration
- Dashboard with user/team management
- Role-based access control (Owner/Member)
- Subscription management via Stripe Customer Portal
- Email/password authentication with JWT cookies
- Activity logging for all user events
- AI-powered features with Gemini integration

## Deploy to Vercel

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com/)
3. Add environment variables:
   - `POSTGRES_URL`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `BASE_URL`
   - `AUTH_SECRET`
   - `GEMINI_API_KEY` (for AI features)

## License

MIT License
