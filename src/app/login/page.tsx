'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cream-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border-2 border-forest-green/10 text-center">
        <h1 className="text-3xl font-header font-bold text-forest-green mb-2">
          Welcome Back
        </h1>
        <p className="text-forest-green/60 font-body mb-8">
          Log in to manage your child's nourishment.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-full border border-gray-300 hover:bg-gray-50 transition-all font-body font-medium text-gray-700"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button
            onClick={() => signIn('github')}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all font-body font-medium"
          >
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5 invert" />
            Continue with GitHub
          </button>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/" className="text-coral font-body font-bold hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
