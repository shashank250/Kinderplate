# 🚀 Deploying KinderPlate to Vercel

This project is optimized for one-click deployment on Vercel.

## 🛠️ Required Environment Variables

To make the site functional, you need to add the following variables in your Vercel project settings:

### 🔑 Authentication (NextAuth)
- `NEXTAUTH_SECRET`: A random string for session encryption.
- `GOOGLE_CLIENT_ID`: From Google Cloud Console.
- `GOOGLE_CLIENT_SECRET`: From Google Cloud Console.
- `GITHUB_CLIENT_ID`: From GitHub Developer Settings.
- `GITHUB_CLIENT_SECRET`: From GitHub Developer Settings.

### 💳 Billing (Stripe)
- `STRIPE_SECRET_KEY`: Your Stripe secret key.
- `STRIPE_WEBHOOK_SECRET`: Generated in the Stripe Dashboard for the `/api/stripe/webhook` endpoint.
- `STRIPE_PRICE_TRIAL`: Price ID for the Trial kit.
- `STRIPE_PRICE_MONTHLY`: Price ID for the Monthly plan.
- `STRIPE_PRICE_PREMIUM`: Price ID for the Premium plan.

### 🗄️ Database (PostgreSQL)
- `DATABASE_URL`: Connection string for your PostgreSQL database (e.g., Neon.tech or Supabase).

### 🌐 Application
- `NEXT_PUBLIC_APP_URL`: The final URL of your site (e.g., `https://kinderplate.vercel.app`).

## 🚀 Deployment Steps
1. Push this code to a **GitHub Repository**.
2. Import the repository into **Vercel**.
3. Add the environment variables listed above.
4. Run `npx prisma db push` (or set up a build command) to sync the database schema.
5. Click **Deploy**!
