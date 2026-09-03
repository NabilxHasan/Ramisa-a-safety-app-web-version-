import { Link } from 'react-router-dom';

export function HardwareTeaser() {
  return (
    <section className="py-24 bg-white text-[#111] border-t border-[#111]/5">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-pink-container px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest text-pink-dark font-bold mb-6">
            Future Hardware
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Your safety button. <br/><span className="text-pink-primary">Beyond your screen.</span></h2>
          <p className="text-lg text-[#111]/70 mb-8 max-w-lg leading-relaxed">
            The RAMISA Keychain is a physical SOS button designed to work alongside the app. Keep it on your keys or bag for instant, screen-free access to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <span className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-gray-100 text-[#111] font-bold border border-[#111]/10">
              Concept / Under Development
            </span>
            <Link to="/hardware" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-pink-primary text-white font-bold hover:bg-pink-dark transition-colors shadow-sm">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-[300px] aspect-square rounded-full bg-pink-container/50 border border-pink-primary/20 shadow-xl flex items-center justify-center">
            {/* Mockup Placeholder */}
            <div className="w-24 h-24 rounded-full bg-pink-primary shadow-[0_0_40px_rgba(233,30,99,0.3)] flex items-center justify-center border-4 border-white">
               <span className="text-white font-bold text-sm tracking-widest">SOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
