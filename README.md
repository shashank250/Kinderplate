# 🥕 KinderPlate — Joyful Nourishment for Kids

KinderPlate is a production-ready, full-stack meal kit service designed for "Stressed Super-Moms." It bridges the gap between pediatric nutrition science and kid-approved taste to end the "picky eater" battle.

## ✨ Key Features

- **3D UI/UX Experience**: A modern, depth-first design using Glassmorphism, physics-based animations (Framer Motion), and custom 3D depth shadows.
- **Full-Stack Auth**: Secure authentication via Google and GitHub using NextAuth.js and a PostgreSQL database.
- **Subscription Engine**: Complete Stripe integration including Checkout sessions and real-time webhook synchronization for plan management.
- **Personalized Nutrition**: A customization engine that captures child-specific allergies and dietary restrictions.
- **Nutrition Tracker**: A data-driven dashboard visualizing nutrient intake and providing professional nutritionist feedback.

## 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Animations**: Framer Motion
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js
- **Payments**: Stripe API

## 🚀 Deployment

This project is configured for seamless deployment on Vercel.

1. **Push to GitHub**: Create a repository and push this code.
2. **Import to Vercel**: Connect your GitHub account and select the repository.
3. **Environment Variables**: Configure the required keys as detailed in [DEPLOYMENT.md](DEPLOYMENT.md).
4. **Sync Database**: Run `npx prisma db push` to initialize your database schema.

## 🎨 Brand Guidelines

- **Essence**: Joyful Nourishment
- **Palette**: Forest Green (#2D5A27), Coral (#FF7F50), Cream White (#FDFBF7)
- **Typography**: Cambria (Headers), Calibri (Body)

---
🤖 *Built with Claude Code*
