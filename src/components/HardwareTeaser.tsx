import { Link } from 'react-router-dom';

export function HardwareTeaser() {
  return (
    <section className="py-24 bg-[#111] text-white">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-6">
            Future Hardware
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Your safety button. <br/><span className="text-pink-primary">Beyond your screen.</span></h2>
          <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
            The RAMISA Keychain is a physical SOS button designed to work alongside the app. Keep it on your keys or bag for instant, screen-free access to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <span className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white/10 text-white font-bold border border-white/20">
              Concept / Under Development
            </span>
            <Link to="/hardware" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-pink-primary text-white font-bold hover:bg-pink-dark transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-[300px] aspect-square rounded-full bg-gradient-to-tr from-[#222] to-[#333] border border-white/10 shadow-2xl flex items-center justify-center">
            {/* Mockup Placeholder */}
            <div className="w-24 h-24 rounded-full bg-pink-primary shadow-[0_0_40px_rgba(240,98,146,0.3)] flex items-center justify-center border-4 border-[#111]">
               <span className="text-white font-bold text-sm tracking-widest">SOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
