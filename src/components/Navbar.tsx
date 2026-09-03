import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-pink-primary flex items-center justify-center text-white overflow-hidden shrink-0 border border-pink-container shadow-sm">
            <img src="/PHOTO-2026-08-27-00-49-03.jpg" alt="Ramisa Logo" className="w-full h-full object-cover" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
            <Shield className="hidden w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-pink-dark">Ramisa</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/how-it-works" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">How It Works</Link>
          <Link to="/features" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">Features</Link>
          <Link to="/app" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">App</Link>
          <Link to="/hardware" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">Hardware</Link>
          <Link to="/guide" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">Safety Guide</Link>
          <Link to="/about" className="text-sm font-medium text-text-secondary hover:text-pink-primary transition-colors">About Us</Link>
          
          <div className="flex items-center gap-4 ml-2">
            <button className="bg-pink-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-pink-dark transition-all shadow-soft">
              Get Ramisa
            </button>
          </div>
        </div>

        <button className="lg:hidden text-[#111]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#111]/10 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link to="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">How It Works</Link>
          <Link to="/features" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">Features</Link>
          <Link to="/app" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">App</Link>
          <Link to="/hardware" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">Hardware</Link>
          <Link to="/guide" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">Safety Guide</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">Blog</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#111]/70">About Us</Link>
          <button className="bg-pink-primary text-white px-6 py-2.5 rounded-full text-sm font-bold w-full mt-2 shadow-soft">
            Get Ramisa
          </button>
        </div>
      )}
    </motion.nav>
  );
}
