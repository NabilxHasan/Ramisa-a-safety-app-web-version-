import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-pink-primary flex items-center justify-center text-white overflow-hidden shrink-0 border border-pink-container shadow-sm">
            <img src="/PHOTO-2026-08-27-00-49-03.jpg" alt="Ramisa Logo" className="w-full h-full object-cover" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
            <Shield className="hidden w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-pink-dark">Ramisa</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">Features</a>
          <a href="#community" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">Community</a>
          
          <div className="flex items-center gap-4 ml-4">
            <button className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-pink-primary">
              <Globe size={16} /> EN
            </button>
            <button className="bg-gradient-to-r from-[#F06292] to-pink-dark text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all">
              Download Ramisa
            </button>
          </div>
        </div>

        <button className="md:hidden text-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-pink-container shadow-lg py-4 px-6 flex flex-col gap-4">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-text-secondary">How It Works</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-text-secondary">Features</a>
          <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-text-secondary">Community</a>
          <button className="bg-gradient-to-r from-[#F06292] to-pink-dark text-white px-6 py-2.5 rounded-full text-sm font-bold w-full mt-2">
            Download Ramisa
          </button>
        </div>
      )}
    </motion.nav>
  );
}
