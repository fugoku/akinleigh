# Fugoku — Run Instructions

Fugoku is a Managed Cloud Services Expert Marketplace built with Next.js 14 and TypeScript. This document covers how to install, run, build, and deploy the application.

---

## Prerequisites

- **Node.js** v18.17 or higher
- **npm** v9+ or **pnpm** v8+ (pnpm recommended)
- **Git**
- **Docker** and **Docker Compose** (optional, for containerized deployment)

---

## 1. Clone the Repository

```bash
git clone https://github.com/fugoku/akinleigh.git
cd akinleigh
```

---

## 2. Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Using npm:

```bash
npm install
```

---

## 3. Run in Development Mode

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app supports hot-reloading — changes to files under `src/` are reflected immediately.

---

## 4. Build for Production

```bash
pnpm build
# or
npm run build
```

This compiles and optimizes the Next.js application for production. Output is placed in `.next/`.

---

## 5. Run the Production Build

```bash
pnpm start
# or
npm run start
```

Serves the production build at [http://localhost:3000](http://localhost:3000).

---

## 6. Lint

```bash
pnpm lint
# or
npm run lint
```

---

## 7. Docker Deployment

The repository includes a `Dockerfile` and two Docker Compose configurations.

### Build and run with Docker Compose (standard):

```bash
docker compose -f docker-compose.yaml up --build
```

### Build and run with Docker Compose (build-only config):

```bash
docker compose -f docker-compose-build.yaml up --build
```

### Build and run the Docker image manually:

```bash
docker build -t fugoku .
docker run -p 3000:3000 fugoku
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 8. Project Structure

```
akinleigh/
├── src/
│   ├── app/                  # Next.js App Router — pages and layouts
│   │   ├── page.tsx          # Home page
│   │   ├── pricing/          # Pricing tiers page
│   │   ├── services/         # Services listing page
│   │   ├── hosting/          # Managed hosting page
│   │   ├── consultancy/      # Cloud consulting contact page
│   │   ├── docs/             # Documentation page
│   │   ├── signIn/           # Authentication — sign in
│   │   └── signUp/           # Authentication — sign up
│   ├── components/
│   │   ├── atoms/            # Base layout components (Header, Footer, Dock)
│   │   ├── ui/               # Radix-based shadcn/ui primitives
│   │   ├── magicui/          # Animation components (particles, text reveal, dock)
│   │   └── example/          # Experimental / legacy components
│   ├── data/                 # Static JSON data files
│   └── lib/
│       └── utils.ts          # Shared utility functions
├── public/                   # Static assets (images, icons)
├── Dockerfile
├── docker-compose.yaml
├── docker-compose-build.yaml
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 9. Key Pages

| Route | Description |
|---|---|
| `/` | Home — hero section with animated particles |
| `/pricing` | Pricing plans (Starter $24, Company $32, Advanced $48/mo) |
| `/services` | Additional services: database deployment, server management, SEO |
| `/hosting` | Managed shared cloud hosting tiers |
| `/consultancy` | Cloud consulting contact form |
| `/docs` | Documentation: articles, videos, case studies |
| `/signIn` | Sign in with email/password or OAuth |
| `/signUp` | Create an account |

---

## 10. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3, shadcn/ui, Radix UI |
| Animation | Framer Motion, custom canvas particles |
| 3D Graphics | Three.js, @react-three/fiber, @react-three/rapier |
| Icons | Lucide React, Heroicons, Radix Icons |
| Theme | next-themes (dark/light mode) |
| Support | Chatwoot live chat widget |
| Deployment | Docker, Vercel-compatible |
| Package Manager | pnpm (npm also supported) |
