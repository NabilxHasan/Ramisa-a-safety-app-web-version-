import { ShieldAlert, Navigation, UserCheck, Users, WifiOff, MessageSquare, Baby, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';

const layers = [
  { icon: ShieldAlert, title: 'SOS', desc: 'Instantly initiate the emergency workflow.' },
  { icon: Navigation, title: 'Safe Journey', desc: 'Tell RAMISA where you are going and when you expect to arrive.' },
  { icon: UserCheck, title: 'Safety Check', desc: 'RAMISA will occasionally ask: "Are you safe?"' },
  { icon: Users, title: 'Emergency Contacts', desc: 'Alert your trusted network automatically.' },
  { icon: WifiOff, title: 'Offline-First', desc: 'Critical safety features work without internet.' },
  { icon: MessageSquare, title: 'SMS Fallback', desc: 'Uses cellular SMS if internet is disconnected.' },
  { icon: Baby, title: 'Child Mode', desc: 'Simplified interface with guardian controls.' },
  { icon: HardDrive, title: 'Future Hardware', desc: 'Physical SOS keychain (Coming Soon).' },
];

export function EcosystemLayers() {
  return (
    <section className="py-24 bg-white border-t border-[#111]/5">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-6">One ecosystem. <span className="text-pink-primary">Multiple layers of protection.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <div key={i} className="bg-white rounded-3xl p-8 border border-[#111]/10 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                <div className="w-12 h-12 bg-pink-container rounded-2xl flex items-center justify-center text-pink-dark mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#111] mb-3">{layer.title}</h3>
                <p className="text-sm font-medium text-[#111]/70 leading-relaxed mb-6 flex-grow">{layer.desc}</p>
                <Link to="/features" className="text-sm font-bold text-pink-primary hover:text-pink-dark inline-flex items-center gap-1 mt-auto">
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
