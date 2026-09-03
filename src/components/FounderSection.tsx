import { motion } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-24 bg-white text-[#111] border-t border-[#111]/5 px-6">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-pink-container/30 border border-pink-container p-8 md:p-14 shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 bg-pink-primary/10">
            <img 
              src="/PHOTO-2026-09-03-21-44-32.jpg" 
              alt="Abdullah Al Rafi Mahmud" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-pink-primary text-white">
              <Shield size={64} />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] border-pink-primary/30 bg-white text-pink-dark mb-4 shadow-sm">
              <Sparkles size={12} className="text-pink-primary" /> Visionary Leadership
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-[#111] mb-2 font-serif-heading">
              Abdullah Al Rafi Mahmud
            </h3>
            <p className="text-pink-dark font-bold text-base md:text-lg mb-6">
              Founder, Ramisa — A Safety App
            </p>
            <blockquote className="text-[#111]/80 text-base md:text-lg leading-relaxed italic font-medium max-w-2xl">
              "Safety should never be out of reach. We built Ramisa to ensure that every individual, woman, and child has an unbreakable shield and a trusted community behind them, no matter where they are."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
