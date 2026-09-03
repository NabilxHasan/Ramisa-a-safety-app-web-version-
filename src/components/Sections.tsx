import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, Shield, Crown, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProblemSection() {
  return (
    <section className="py-24 bg-white text-[#111] border-t border-[#111]/5">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#111] mb-6 tracking-tight">
            Safety doesn't always come with <br/><span className="text-red-600">an internet connection.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="flex flex-col rounded-3xl bg-white p-8 md:p-10 border border-[#111]/10 shadow-sm h-full">
            <h3 className="text-2xl font-black text-[#111] mb-6">When every second counts</h3>
            <ul className="space-y-4">
              {[
                "Internet is unavailable or unstable",
                "You cannot comfortably make a phone call",
                "You cannot type a long message",
                "You are travelling somewhere unfamiliar",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-[#111]/80 text-sm leading-relaxed font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col rounded-3xl bg-pink-container/40 p-8 md:p-10 border border-pink-container shadow-sm h-full">
            <h3 className="text-2xl font-black text-pink-dark mb-6">When families are disconnected</h3>
            <ul className="space-y-4">
              {[
                "Family members don't know where you are",
                "Children need a simple way to request help",
                "Battery and connectivity become limitations"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-[#111]/80 text-sm leading-relaxed font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-pink-container/25 p-6 md:p-8 border border-pink-container">
          <Quote className="size-7 text-pink-primary mb-3" />
          <blockquote className="font-display text-2xl font-semibold leading-snug text-[#111] md:text-3xl text-balance">
            "RAMISA is designed to help users quickly alert trusted contacts when they feel unsafe."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { title: "Set up your trusted contacts.", desc: "Choose the friends, family, or guardians you trust to receive emergency alerts." },
    { title: "Start a Safe Journey or keep RAMISA ready.", desc: "Tell RAMISA where you are going, or just let the app run quietly in the background." },
    { title: "Activate SOS or respond to a Safety Check.", desc: "If something feels wrong, press SOS. Or let RAMISA check in on you if your journey looks unusual." },
    { title: "RAMISA notifies trusted contacts.", desc: "RAMISA uses cloud (if internet is available), SMS fallback, or local retries to send your alerts." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white px-6 border-t border-[#111]/5">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-[#111] mb-16 tracking-tight">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col bg-white p-8 rounded-3xl border border-[#111]/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 text-[100px] font-black text-[#111]/5 leading-none transition-transform group-hover:scale-110">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-pink-primary text-white flex items-center justify-center font-black text-lg shadow-sm mb-6 relative z-10">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3 relative z-10">{step.title}</h3>
              <p className="text-[#111]/70 text-sm leading-relaxed font-medium relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  const rows = [
    { bad: "Calling for help takes precious seconds", good: "One shake, instant SOS with GPS" },
    { bad: "No help if you have no signal", good: "Offline mesh network keeps SOS working" },
    { bad: "You're on your own after the alert", good: "Guardians, volunteers, and community respond" },
    { bad: "No record of what happened", good: "Full emergency history log, timestamped" },
    { bad: "One tool for one moment", good: "A full toolkit: legal aid, counseling, self-defense, first aid" }
  ];

  return (
    <section className="py-24 bg-white px-6 border-t border-[#111]/5">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-[#111] mb-6 tracking-tight text-balance">Why Ramisa Is Different</h2>
          <p className="text-lg md:text-xl text-[#111]/70 font-medium text-balance">
            Generic personal-safety apps stop at a single SOS button. <span className="text-pink-primary font-bold">Ramisa starts there.</span>
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#111]/10 overflow-hidden shadow-sm bg-gray-50">
          {rows.map((row, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center border-b border-[#111]/10 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
              <div className="flex-1 w-full p-6 md:p-8 flex items-center gap-4 text-[#111]/40 line-through">
                <XCircle className="text-red-400 shrink-0" size={24} />
                <span className="font-medium text-base md:text-lg">{row.bad}</span>
              </div>
              <div className="hidden md:flex items-center justify-center bg-pink-container w-10 h-10 rounded-full z-10 -mx-5 shadow-sm shrink-0">
                <ArrowRight className="text-pink-dark" size={18} />
              </div>
              <div className="flex-1 w-full p-6 md:p-8 flex items-center gap-4 bg-pink-container/30">
                <CheckCircle2 className="text-emerald-600 shrink-0" size={24} />
                <span className="font-bold text-base md:text-lg text-pink-dark">{row.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-white px-6 border-t border-[#111]/5">
      <div className="max-w-[1240px] mx-auto">
        <div className="rounded-[2.5rem] border border-[#111]/10 bg-pink-container/20 p-8 md:p-14 text-[#111] shadow-sm">
           <div className="flex items-center gap-3 mb-6">
             <div className="flex size-10 items-center justify-center rounded-xl bg-pink-primary text-white">
               <Crown size={20} />
             </div>
             <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-dark">The Network</span>
           </div>
           
           <h3 className="font-black text-4xl md:text-5xl leading-[1.1] mb-6 text-balance tracking-tight">
             Become the Guardian of Your Area.
           </h3>
           <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#111]/70 mb-10 text-balance">
             Your neighborhood needs a protector. Someone trusted. Someone who builds a safe community. Verified guardians get real-time SOS alerts with exact locations, empowering you to respond when it matters most.
           </p>
           
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Receive real-time SOS alerts with exact location",
                "Respond to nearby community crises",
                "Create a private, trusted circle—not public broadcasting",
                "Become the backbone of a trusted local ecosystem"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#111]/85 font-medium">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pink-primary" />
                  {text}
                </li>
              ))}
           </ul>
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  return null;
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-white text-[#111] border-t border-[#111]/5">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="rounded-[2.5rem] bg-pink-container/40 border border-pink-container p-10 md:p-16 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] border-pink-primary/30 bg-white text-pink-dark mb-6 shadow-sm">
            <span className="size-1.5 rounded-full bg-pink-primary animate-pulse"></span>
            Final call.
          </span>
          <h2 className="text-4xl md:text-6xl font-black max-w-3xl text-balance leading-[1.1] tracking-tight mb-6">
            Stop Feeling Unsafe. Start Living Protected.
          </h2>
          <p className="max-w-xl text-balance text-base md:text-lg text-[#111]/70 font-medium mb-10">
            Every day without Ramisa is another day of vulnerability, delayed responses, and zero records. The shield you needed has finally arrived.
          </p>
          <button className="flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-pink-primary text-white font-bold text-base hover:bg-pink-dark transition-colors shadow-md">
            Get Ramisa Now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6 border-t border-[#111]/5 text-[#111]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-pink-primary flex items-center justify-center text-white overflow-hidden shrink-0">
               <img src="/PHOTO-2026-08-27-00-49-03.jpg" alt="Ramisa Logo" className="w-full h-full object-cover" onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }} />
               <Shield className="hidden w-4 h-4" />
            </div>
            <span className="text-xl font-black text-[#111]">Ramisa</span>
          </Link>
          <p className="text-[#111]/60 text-sm font-medium">Safety should never be out of reach.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#111] mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-[#111]/60 font-medium">
            <li><Link to="/features" className="hover:text-pink-primary transition-colors">Features</Link></li>
            <li><Link to="/app" className="hover:text-pink-primary transition-colors">App</Link></li>
            <li><Link to="/hardware" className="hover:text-pink-primary transition-colors">Hardware</Link></li>
            <li><Link to="/guide" className="hover:text-pink-primary transition-colors">Safety Guide</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#111] mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-[#111]/60 font-medium">
            <li><Link to="/about" className="hover:text-pink-primary transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-pink-primary transition-colors">Blog</Link></li>
            <li><Link to="/support" className="hover:text-pink-primary transition-colors">Support</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#111] mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-[#111]/60 font-medium">
            <li><Link to="/privacy" className="hover:text-pink-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-pink-primary transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookie" className="hover:text-pink-primary transition-colors">Cookie Policy</Link></li>
            <li><Link to="/security" className="hover:text-pink-primary transition-colors">Security</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1240px] mx-auto pt-8 border-t border-[#111]/10 text-center md:text-center">
        <p className="text-sm text-[#111]/60 font-medium">© 2026 Ramisa. All rights reserved.</p>
      </div>
    </footer>
  );
}
