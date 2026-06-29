import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Pain from '@/components/sections/Pain';
import Relief from '@/components/sections/Relief';
import HowItWorks from '@/components/sections/HowItWorks';
import Plans from '@/components/sections/Plans';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-white">
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Relief />
        <HowItWorks />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}
