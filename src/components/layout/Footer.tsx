export default function Footer() {
  return (
    <footer className="bg-forest-green text-cream-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-header font-bold">
            Kinder<span className="text-coral">Plate</span>
          </span>
          <p className="text-sm text-cream-white/60 font-body">
            © 2026 KinderPlate. Joyful Nourishment for Little Ones.
          </p>
        </div>
        <div className="flex gap-8 text-sm font-body">
          <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-coral transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-coral transition-colors">Contact Us</a>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-all cursor-pointer">
            📸
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-all cursor-pointer">
            🐦
          </div>
        </div>
      </div>
    </footer>
  );
}
