import { motion } from 'motion/react';
import { Shield, Zap, MapPin, Users, PhoneOff, Map, Lock, Wifi, Bus, Ghost, BookOpen, Clock, History, Battery, Gavel, HeartHandshake } from 'lucide-react';

export default function Features() {
  const individualFeatures = [
    { icon: Shield, title: "One-Tap SOS", desc: "SMS & Call to guardians with GPS" },
    { icon: Zap, title: "Shake-to-Trigger", desc: "Hardware trigger, works even screen-locked" },
    { icon: MapPin, title: "Live Location", desc: "Real-time tracking when you need it" },
    { icon: PhoneOff, title: "Fake Call & Siren", desc: "De-escalate or scare off a threat" },
    { icon: Lock, title: "LockScreen SOS", desc: "Instant protection without unlocking" },
    { icon: Map, title: "Danger Map", desc: "Crowdsourced safe and unsafe zones" },
    { icon: Wifi, title: "Mesh Network", desc: "Works without internet or signal" },
    { icon: Bus, title: "Ride Safety", desc: "Live vehicle tracking during commute" },
    { icon: Ghost, title: "Stealth Mode", desc: "Discreet activation when monitored" },
    { icon: BookOpen, title: "Self-Defense", desc: "Guides and first aid protocols" },
  ];

  const guardianFeatures = [
    { icon: Users, title: "Trusted Network", desc: "Multiple guardians notified instantly" },
    { icon: Map, title: "Safe Zones", desc: "Geofenced alerts on exit/entry" },
    { icon: Users, title: "Community Feed", desc: "Nearby alerts & verified guardians" },
    { icon: HeartHandshake, title: "Volunteer Escort", desc: "Request verified peer escorts" },
    { icon: Clock, title: "Safety Timer", desc: "Dead-man's check-in countdown" },
    { icon: History, title: "Emergency History", desc: "Timestamped emergency logs" },
    { icon: Battery, title: "Battery Ping", desc: "Low-battery location broadcast" },
    { icon: Gavel, title: "Legal Aid", desc: "Cyber crime support & resources" },
    { icon: HeartHandshake, title: "Wellness", desc: "Trauma & counseling support" },
  ];

  return (
    <section id="features" className="py-24 bg-surface-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] border-pink-dark/15 bg-pink-container/50 text-pink-dark mb-4">
            <span className="size-1.5 rounded-full bg-pink-dark"></span>The Platform
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mb-6">Complete Safety Arsenal</h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Tools designed for both the protected and the protectors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col rounded-3xl bg-white p-8 md:p-10 border border-pink-container shadow-sm h-full"
          >
            <span className="inline-block self-start rounded-full border-2 border-pink-dark bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-pink-dark font-bold mb-6">
              For Individuals
            </span>
            <h3 className="font-display text-3xl font-black text-text-primary mb-4">Your Personal Shield</h3>
            <p className="text-sm leading-relaxed text-text-secondary mb-8">
              One verified identity. Instant live tracking. Legally binding emergency history. A safety net that follows you everywhere.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {individualFeatures.slice(0, 5).map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-pink-container text-pink-dark flex items-center justify-center shrink-0">
                    <f.icon size={12} />
                  </div>
                  <div>
                    <strong className="block text-sm text-text-primary">{f.title}</strong>
                    <span className="text-sm text-text-secondary">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-pink-primary text-white font-bold hover:bg-pink-dark transition-colors">
                Protect Yourself Now
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col rounded-3xl bg-pink-container p-8 md:p-10 shadow-sm h-full"
          >
            <span className="inline-block self-start rounded-full bg-pink-dark px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-6">
              For Guardians & Parents
            </span>
            <h3 className="font-display text-3xl font-black text-pink-dark mb-4">Protect Your Loved Ones</h3>
            <p className="text-sm leading-relaxed text-pink-dark/80 mb-8">
              Monitor safe zones, receive instant alerts, and stay connected with a community of verified responders.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {guardianFeatures.slice(0, 5).map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white text-pink-primary flex items-center justify-center shrink-0 shadow-sm">
                    <f.icon size={12} />
                  </div>
                  <div>
                    <strong className="block text-sm text-pink-dark">{f.title}</strong>
                    <span className="text-sm text-pink-dark/70">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-pink-dark text-white font-bold hover:opacity-90 transition-opacity">
                Set Up Guardian Network
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
