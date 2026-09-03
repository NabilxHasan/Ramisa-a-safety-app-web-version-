import { 
  Zap, 
  MapPin, 
  Users, 
  PhoneCall, 
  Scale, 
  HeartPulse, 
  HeartHandshake, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Bike, 
  WifiOff, 
  Radio, 
  Lock, 
  History, 
  BatteryWarning 
} from 'lucide-react';
import { motion } from 'motion/react';

const allFeatures = [
  {
    num: "01",
    icon: Zap,
    title: "৩ বার ফোন ঝাঁকালেই SOS Alert",
    desc: "ফোন আনলক করা ছাড়াই তাৎক্ষণিকভাবে ৩ বার ঝাঁকিয়ে বা শেক করে সরাসরি এসওএস এলার্ট ট্রিগার করুন।"
  },
  {
    num: "02",
    icon: MapPin,
    title: "Live Location, Battery & Info",
    desc: "আপনার লাইভ জিপিএস লোকেশন, ব্যাটারি পার্সেন্টেজ এবং জরুরি তথ্য তাৎক্ষণিকভাবে ক্লোজ কন্টাক্টদের কাছে পাঠিয়ে দেয়।"
  },
  {
    num: "03",
    icon: Users,
    title: "Ramisa Community Alert",
    desc: "আশেপাশের ভেরিফাইড ব্যবহারকারী ও গার্ডিয়ানদের কাছে জরুরী এলার্ট ব্রডকাস্ট করে দ্রুত কমিউনিটি রেসপন্স নিশ্চিত করে।"
  },
  {
    num: "04",
    icon: PhoneCall,
    title: "999 & Emergency Call",
    desc: "জরুরি মুহূর্তে এক ক্লিকেই জাতীয় জরুরি সেবা ৯৯৯ এবং আপনার প্রি-সেট করা ইমার্জেন্সি নম্বরে কল কানেক্ট করুন।"
  },
  {
    num: "05",
    icon: Scale,
    title: "Legal Guide & GD Draft",
    desc: "আইনি অধিকার, ফ্রি লিগ্যাল এইড এবং তাৎক্ষণিক জিডি (General Diary) ড্রাফট তৈরির সুবিধা।"
  },
  {
    num: "06",
    icon: HeartPulse,
    title: "First Aid & Medical Guide",
    desc: "প্রাথমিক চিকিৎসা এবং ইন্টারনেট ছাড়াই অফলাইন মেডিকেল ইমার্জেন্সি গাইডলাইন।"
  },
  {
    num: "07",
    icon: HeartHandshake,
    title: "Wellness & Counseling Support",
    desc: "মানসিক স্বাস্থ্য সহায়তা, ট্রমা কেয়ার এবং প্রফেশনাল কাউন্সেলিং সাপোর্ট কানেক্টিভিটি।"
  },
  {
    num: "08",
    icon: Clock,
    title: "Safety Timer & Auto Check-in",
    desc: "নিরাপদ যাত্রার জন্য সেফটি টাইমার সেট করুন। নির্দিষ্ট সময়ে চেক-ইন না করলে স্বয়ংক্রিয়ভাবে এলার্ট বেজে উঠবে।"
  },
  {
    num: "09",
    icon: ShieldCheck,
    title: "Safe Places & Safe Hub",
    desc: "কাছাকাছি নিরাপদ স্থান, পুলিশ স্টেশন, হাসপাতাল এবং ভেরিফাইড সেফ হাবগুলোর লাইভ ম্যাপ ও রাডার।"
  },
  {
    num: "10",
    icon: Sparkles,
    title: "AI Threat Guard & Acoustic AI",
    desc: "এআই থ্রেট গার্ড এবং একাউস্টিক ভয়েস ডিটেকশন সিস্টেম অস্বাভাবিক বিপদ বা চিৎকার শনাক্ত করে।"
  },
  {
    num: "11",
    icon: Bike,
    title: "Rickshaw/Ride & Plate Guard",
    desc: "রিকশা বা রাইড শেয়ারিংয়ের সময় ভেহিকেল প্লেট নম্বর স্ক্যান ও রুট ট্র্যাকিংয়ের মাধ্যমে নিরাপদ থাকুন।"
  },
  {
    num: "12",
    icon: WifiOff,
    title: "Offline Mesh Network SOS",
    desc: "ইন্টারনেট বা মোবাইল নেটওয়ার্ক না থাকলেও অফলাইন মেশ নেটওয়ার্কের মাধ্যমে এসওএস রিলে হয়ে পৌঁছে যায়।"
  },
  {
    num: "13",
    icon: Radio,
    title: "Hardware Device / Band SOS",
    desc: "রিমোট হার্ডওয়্যার ডিভাইস বা ব্লুটুথ ব্যান্ডের মাধ্যমে ফোন স্পর্শ না করেই এসওএস ট্রিগার করুন।"
  },
  {
    num: "14",
    icon: Lock,
    title: "Encrypted Safety Vault",
    desc: "প্রয়োজনীয় অডিও এভিডেন্স ও ছবি নিরাপদে সংরক্ষণের জন্য এনক্রিপ্টেড সেফটি ভল্ট।"
  },
  {
    num: "15",
    icon: History,
    title: "Timestamped Incident History",
    desc: "প্রতিটি ঘটনার নিখুঁত টাইমস্ট্যাম্প ও হিস্ট্রি লগ সংরক্ষণ যা পরবর্তীতে প্রমাণ হিসেবে কাজে লাগে।"
  },
  {
    num: "16",
    icon: BatteryWarning,
    title: "Low Battery Auto-Ping",
    desc: "ফোন বন্ধ হওয়ার আগে বা ব্যাটারি একদম কম থাকলেও শেষ লোকেশন অটো-পিং ও ব্রডকাস্ট করে দেয়।"
  }
];

export default function FeaturesPage() {
  return (
    <div className="pt-36 pb-24 px-6 max-w-[1240px] mx-auto min-h-screen bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] border-pink-primary/30 bg-pink-container/50 text-pink-dark mb-6">
          <span className="size-1.5 rounded-full bg-pink-primary animate-pulse"></span> Complete Safety Ecosystem
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-[#111] tracking-tight mb-6">
          Ramisa-এর শক্তিশালী <span className="text-pink-primary">মূল ফিচারসমূহ</span>
        </h1>
        <p className="text-lg md:text-xl text-[#111]/70 font-medium leading-relaxed">
          আপনার এবং আপনার পরিবারের পূর্ণ নিরাপত্তার জন্য রামিসায় রয়েছে ১৬টি সর্বাধুনিক ও নির্ভরযোগ্য ফিচার।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-[#111]/10 shadow-sm hover:shadow-md hover:border-pink-primary/30 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 font-mono text-xs font-bold text-pink-primary/40 group-hover:text-pink-primary transition-colors">
                {f.num}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-pink-container flex items-center justify-center text-pink-dark mb-6 group-hover:scale-110 transition-transform">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3">{f.title}</h3>
              <p className="text-sm font-medium text-[#111]/70 leading-relaxed mt-auto">
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
