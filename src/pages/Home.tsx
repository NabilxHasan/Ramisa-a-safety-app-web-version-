import Hero from '../components/Hero';
import { EcosystemLayers } from '../components/EcosystemLayers';
import { HardwareTeaser } from '../components/HardwareTeaser';
import { DisclaimerSection } from '../components/DisclaimerSection';
import {
  ProblemSection,
  HowItWorks,
  Comparison,
  CommunitySection,
  FinalCTA
} from '../components/Sections';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ProblemSection />
      <EcosystemLayers />
      <HowItWorks />
      <Comparison />
      <HardwareTeaser />
      <CommunitySection />
      <FinalCTA />
      <DisclaimerSection />
    </div>
  );
}
