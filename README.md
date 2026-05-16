# Fugoku

**Managed Cloud Services Expert Marketplace**

Fugoku is a full-stack SaaS platform that connects businesses with managed cloud services and expert consultants. It enables companies to discover, compare, and engage cloud infrastructure services — including hosting, database deployment, server management, and cloud consulting — through a modern, high-performance web application.

---

## What It Does

Fugoku serves as both a cloud service provider and a discovery marketplace. Businesses can:

- Browse and purchase **managed cloud hosting** plans with scalable tiers
- Book **cloud consulting** sessions for migration, strategy, and optimization
- Deploy and manage **databases** with built-in monitoring
- Access **SEO and server management** services from vetted experts
- Authenticate via **email/password or OAuth** (Google, LinkedIn, GitHub)
- Get real-time support via integrated **Chatwoot live chat**

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — animated hero with particle effects and service overview |
| `/pricing` | Pricing plans: Starter ($24), Company ($32), Advanced ($48) per month |
| `/services` | Services: database deployment, server management, SEO, freelance |
| `/hosting` | Managed shared cloud hosting with three service tiers |
| `/consultancy` | Cloud consulting contact form |
| `/docs` | Documentation hub — articles, videos, case studies |
| `/signIn` | Sign in with email/password or OAuth |
| `/signUp` | Create an account with full profile form |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router), TypeScript 5
- **Styling:** Tailwind CSS 3, shadcn/ui, Radix UI primitives
- **Animation:** Framer Motion, custom HTML5 Canvas particles, Lottie
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/rapier (physics)
- **Icons:** Lucide React, Heroicons, Radix Icons
- **Theme:** Dark / light mode via next-themes
- **Support:** Chatwoot live chat widget
- **Deployment:** Docker + Docker Compose, Vercel-compatible

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

See [run_instruction.md](./run_instruction.md) for full setup, build, and Docker deployment instructions.

---

## Contact

- Email: support@fugoku.com
- Phone: +234 8169391259
- Location: Victoria Island, Lagos, Nigeria
