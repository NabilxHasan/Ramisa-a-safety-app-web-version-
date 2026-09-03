import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, Shield, HeartHandshake, AlertCircle, Clock, Crown, Quote } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-20 bg-transparent text-[#111]">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#111] mb-6 tracking-tight">
            Every Day Without Protection, <br/><span className="text-red-alert">Someone Gets Hurt.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="flex flex-col rounded-3xl bg-white p-8 md:p-10 border border-[#111]/10 shadow-sm h-full">
            <h3 className="text-2xl font-black text-[#111] mb-6">If you're walking home alone</h3>
            <ul className="space-y-4">
              {[
                "No one knows exactly where you are.",
                "Calling for help takes too long in a panic.",
                "Your phone becomes useless the moment you're scared.",
                "If something happens, there's no record, no witness, no help."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-alert shrink-0 mt-0.5" size={20} />
                  <span className="text-[#111]/80 text-sm leading-relaxed font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col rounded-3xl bg-pink-container p-8 md:p-10 shadow-sm h-full">
            <h3 className="text-2xl font-black text-pink-dark mb-6">If you're a parent</h3>
            <ul className="space-y-4">
              {[
                "You can't watch your child every single second.",
                "You don't know if they're safe on the way to school.",
                "There's no way to reach them fast in an emergency.",
                "You have no visibility once they leave your sight."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-alert shrink-0 mt-0.5" size={20} />
                  <span className="text-pink-dark/80 text-sm leading-relaxed font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#FFF8FA] p-6 md:p-8 border border-pink-container">
          <Quote className="size-7 text-pink-primary mb-3" />
          <blockquote className="font-display text-2xl font-semibold leading-snug text-[#111] md:text-3xl text-balance">
            "This isn't a small inconvenience. This is a gap that costs lives — and it's time to close it."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { title: "Set Up Your Shield", desc: "Create your profile and add trusted guardians in minutes." },
    { title: "Activate Live Protection", desc: "Shield goes active; your location and status are always ready to share." },
    { title: "One-Tap or Shake for SOS", desc: "Shake your device 3x or tap SOS to instantly alert guardians with your fused GPS location via SMS & call." },
    { title: "Access Every Safety Tool Instantly", desc: "Fake call, siren, lock screen, safe zones, offline mesh SOS — all from one hub." },
    { title: "Stay Connected to Your Community", desc: "Verified guardians, nearby responders, and safety alerts keep you protected even offline." }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-surface-bg px-6 border-y border-[#111]/5">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-[#111] mb-16 tracking-tight">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col bg-white p-8 rounded-3xl border border-[#111]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-pink-primary text-white flex items-center justify-center font-black text-lg shadow-sm mb-6">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3">{step.title}</h3>
              <p className="text-[#111]/70 text-sm leading-relaxed font-medium">{step.desc}</p>
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
    <section className="py-20 bg-white px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-[#111] mb-6 tracking-tight text-balance">Why Ramisa Is Different</h2>
          <p className="text-lg md:text-xl text-[#111]/70 font-medium text-balance">
            Generic personal-safety apps stop at a single SOS button. <span className="text-pink-primary font-bold">Ramisa starts there.</span>
          </p>
        </div>

        <div className="rounded-[2rem] border-2 border-[#111]/10 overflow-hidden shadow-sm bg-gray-50/50">
          {rows.map((row, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center border-b border-[#111]/10 last:border-0 ${i % 2 === 0 ? 'bg-white' : ''}`}>
              <div className="flex-1 w-full p-6 md:p-8 flex items-center gap-4 text-[#111]/50 line-through">
                <XCircle className="text-red-alert/50 shrink-0" size={24} />
                <span className="font-medium text-base md:text-lg">{row.bad}</span>
              </div>
              <div className="hidden md:flex items-center justify-center bg-pink-container w-10 h-10 rounded-full z-10 -mx-5 shadow-sm shrink-0">
                <ArrowRight className="text-pink-dark" size={18} />
              </div>
              <div className="flex-1 w-full p-6 md:p-8 flex items-center gap-4 bg-pink-container/20">
                <CheckCircle2 className="text-green-safe shrink-0" size={24} />
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
    <section id="community" className="py-20 bg-surface-bg px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="rounded-[2rem] border-2 border-[#111] bg-[#111] p-8 md:p-12 text-white shadow-xl">
           <div className="flex items-center gap-3 mb-6">
             <div className="flex size-10 items-center justify-center rounded-xl bg-white text-[#111]">
               <Crown size={20} />
             </div>
             <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">The Network</span>
           </div>
           
           <h3 className="font-black text-4xl md:text-5xl leading-[1.1] mb-6 text-balance tracking-tight">
             Become the Guardian of Your Area.
           </h3>
           <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/75 mb-10 text-balance">
             Your neighborhood needs a protector. Someone trusted. Someone who builds a safe community. Verified guardians get real-time SOS alerts with exact locations, empowering you to respond when it matters most.
           </p>
           
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Receive real-time SOS alerts with exact location",
                "Respond to nearby community crises",
                "Create a private, trusted circle—not public broadcasting",
                "Become the backbone of a trusted local ecosystem"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/85 font-medium">
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
  return null; // Merged with above sections for a cleaner flow
}

export function FinalCTA() {
  return (
    <section className="py-20 bg-white text-[#111] border-t border-[#111]/5">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-4 items-start text-left">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] border-[#111]/15 bg-[#111]/5 text-[#111]">
            <span className="size-1.5 rounded-full bg-[#111]"></span>
            Final call.
          </span>
          <h2 className="text-5xl md:text-[5.5rem] font-black max-w-4xl text-balance leading-[1.05] tracking-tight">
            Stop Feeling Unsafe. Start Living Protected.
          </h2>
          <p className="max-w-2xl text-balance text-lg md:text-xl text-[#111]/65 font-medium mt-2">
            Every day without Ramisa is another day of vulnerability, delayed responses, and zero records. The shield you needed has finally arrived.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="flex flex-col rounded-3xl bg-white p-8 md:p-10 border-2 border-[#111]/10 shadow-sm h-full">
            <span className="inline-block self-start rounded-full border-2 border-[#111] bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#111] font-bold mb-6">
              For Individuals
            </span>
            <h3 className="font-display text-3xl font-black text-[#111] mb-4">Get Your Safety ID</h3>
            <p className="text-sm leading-relaxed text-[#111]/70 font-medium mb-10">
              One verified identity. Live location tracking. Instant SOS. A safety record that protects you everywhere.
            </p>
            <div className="mt-auto">
              <button className="flex items-center justify-center gap-2 w-full h-14 rounded-full bg-pink-primary text-white font-bold text-[15px] hover:bg-pink-dark transition-colors shadow-soft">
                It's Free to Start <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-pink-container p-8 md:p-10 shadow-sm h-full">
            <span className="inline-block self-start rounded-full bg-[#111] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-6">
              For Guardians
            </span>
            <h3 className="font-display text-3xl font-black text-pink-dark mb-4">Protect Your Network</h3>
            <p className="text-sm leading-relaxed text-pink-dark/80 font-medium mb-10">
              Monitor safe zones, receive immediate alerts, and collaborate with verified responders in your area.
            </p>
            <div className="mt-auto">
              <button className="flex items-center justify-center gap-2 w-full h-14 rounded-full bg-[#111] text-white font-bold text-[15px] hover:bg-black transition-colors shadow-soft">
                Register as Guardian <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6 border-t border-[#111]/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-pink-primary flex items-center justify-center text-white overflow-hidden shrink-0">
               <img src="/PHOTO-2026-08-27-00-49-03.jpg" alt="Ramisa Logo" className="w-full h-full object-cover" onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }} />
               <Shield className="hidden w-4 h-4" />
            </div>
            <span className="text-xl font-black text-[#111]">Ramisa</span>
          </div>
          <p className="text-[#111]/60 text-sm font-medium">Your Safety, Our Priority.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#111] mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-[#111]/60 font-medium">
            <li><a href="#how-it-works" className="hover:text-pink-primary transition-colors">How It Works</a></li>
            <li><a href="#features" className="hover:text-pink-primary transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-pink-primary transition-colors">Download App</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#111] mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-[#111]/60 font-medium">
            <li><a href="#" className="hover:text-pink-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-pink-primary transition-colors">Mission</a></li>
            <li><a href="#" className="hover:text-pink-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#111] mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-[#111]/60 font-medium">
            <li><a href="#" className="hover:text-pink-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-pink-primary transition-colors">Data Policy</a></li>
            <li><a href="#" className="hover:text-pink-primary transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1240px] mx-auto pt-8 border-t border-[#111]/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#111]/60 font-medium">© 2026 Ramisa. All rights reserved.</p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-200 hover:bg-pink-container text-gray-500 hover:text-pink-primary transition-colors cursor-pointer flex items-center justify-center text-xs font-bold">FB</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 hover:bg-pink-container text-gray-500 hover:text-pink-primary transition-colors cursor-pointer flex items-center justify-center text-xs font-bold">X</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 hover:bg-pink-container text-gray-500 hover:text-pink-primary transition-colors cursor-pointer flex items-center justify-center text-xs font-bold">IG</div>
        </div>
      </div>
    </footer>
  );
}
