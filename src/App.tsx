import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  ProblemSection,
  HowItWorks,
  Comparison,
  CommunitySection,
  FinalCTA,
  Footer
} from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-bg text-text-primary font-sans overflow-x-hidden selection:bg-pink-light selection:text-pink-dark">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Comparison />
      <CommunitySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
