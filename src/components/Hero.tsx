import { motion } from 'motion/react';
import { ShieldAlert, MapPin, PhoneOff, Map, Users, Wifi } from 'lucide-react';

export default function Hero() {
  const chips = [
    { icon: ShieldAlert, label: 'SOS' },
    { icon: MapPin, label: 'Live Location' },
    { icon: PhoneOff, label: 'Fake Call' },
    { icon: Map, label: 'Safe Zones' },
    { icon: Users, label: 'Community' },
    { icon: Wifi, label: 'Offline SOS' },
  ];

  return (
    <section className="pt-32 pb-16 px-6 max-w-[1240px] mx-auto flex flex-col items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] border-[#111]/15 bg-[#111]/5 text-[#111] mb-8">
          <span className="size-1.5 rounded-full bg-[#111]"></span> A New Era of Safety
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#111] leading-[1.05] tracking-tight mb-8 max-w-4xl text-balance">
          Safety should never be <span className="text-pink-primary">out of reach.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#111]/70 mb-10 leading-relaxed max-w-2xl text-balance">
          RAMISA is a personal safety ecosystem designed to help women and children stay connected to trusted people when it matters most.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md">
          <button className="w-full sm:w-auto bg-pink-primary text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-pink-dark transition-colors flex items-center justify-center gap-2 shadow-soft">
            Get Ramisa
          </button>
          <button className="w-full sm:w-auto bg-white text-[#111] border border-[#111]/20 px-8 py-4 rounded-full text-[15px] font-bold hover:bg-gray-50 transition-colors">
            How Ramisa Works
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col items-center relative"
      >
        <div className="relative w-full max-w-[300px] md:max-w-[340px] aspect-[1/2] rounded-[3rem] bg-gray-900 border-[8px] border-gray-900 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
          <img 
            src="/PHOTO-2026-09-03-21-44-32.jpg" 
            alt="Ramisa SOS Screen" 
            className="w-full h-full object-cover" 
            onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} 
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-pink-primary to-pink-dark flex-col items-center justify-center text-white p-6 text-center">
              <ShieldAlert size={64} className="mb-6" />
              <p className="font-black text-3xl mb-2">SOS</p>
              <p className="text-sm font-bold opacity-90">SMS & CALL GUARDIANS</p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl">
          {chips.map((chip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.05 }}
              className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-[#111]/10 text-xs font-bold text-[#111]"
            >
              <chip.icon size={16} className="text-pink-primary" />
              {chip.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
