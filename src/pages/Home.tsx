import { ArrowRight, AudioLines, MapPinned, Route, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const highlights = [
  {
    icon: ShieldAlert,
    title: 'Emergency SOS',
    text: 'Open SOS to review your recipients and location, then send an SMS to your saved contacts. You can also open the dialer.',
  },
  {
    icon: Route,
    title: 'Journey check-ins',
    text: 'Set a destination and expected arrival time. Check in along the way and choose whether to message your contacts on arrival.',
  },
  {
    icon: MapPinned,
    title: 'Safety Map',
    text: 'Browse streets and nearby places. Download selected regions in advance for offline viewing and save incident reports on your phone.',
  },
  {
    icon: AudioLines,
    title: 'On-device sound analysis',
    text: 'Threat Guard uses the YAMNet model to classify short audio samples when you turn it on. Review suggestions before acting.',
  },
];

const questions = [
  {
    question: 'Can I use RAMISA without an account?',
    answer: 'Yes. Continue as a guest to use the on-device safety tools. Email signup is limited while public confirmation email is configured.',
  },
  {
    question: 'Can SOS work without internet?',
    answer: 'SMS uses cellular service and can work without mobile data. Add an SMS-enabled contact, grant Android permission, and check your signal. The app tracks send status and delivery receipts separately.',
  },
  {
    question: 'What do the Safety Map pins mean?',
    answer: 'Example pins illustrate how reports look. Reports you add stay on your device. For an active emergency, use trusted contacts or emergency services.',
  },
  {
    question: 'What is still in preview?',
    answer: 'Bluetooth mesh and volunteer matching are preview flows. Pairing the RAMISA keychain is a hardware concept.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="landing-section landing-wrap" id="how-it-works" aria-labelledby="setup-title">
        <div className="landing-section-heading">
          <h2 id="setup-title">Set up for the moments that matter</h2>
          <p>Start in guest mode and get the essentials ready before you need them.</p>
        </div>
        <ol className="landing-steps">
          <li><strong>Add trusted contacts</strong><span>Choose who can receive an emergency SMS and check their number.</span></li>
          <li><strong>Check device permissions</strong><span>Allow SMS when you use the alert flow. Allow location if you want it included.</span></li>
          <li><strong>Open SOS to review</strong><span>Check the recipients and message. Send only when you are ready to alert them.</span></li>
        </ol>
      </section>
      <section className="landing-section landing-feature-section" aria-labelledby="highlight-title">
        <div className="landing-wrap">
          <div className="landing-section-heading">
            <h2 id="highlight-title">One app for everyday safety</h2>
            <p>Tools for asking for help, planning a journey, and finding support.</p>
          </div>
          <div className="landing-feature-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="landing-feature-card" key={title}>
                <div className="landing-feature-icon"><Icon size={23} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Link className="landing-text-link" to="/features">Explore all safety tools <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="landing-section landing-wrap landing-faq" aria-labelledby="faq-title">
        <div className="landing-section-heading">
          <h2 id="faq-title">Know what to expect</h2>
          <p>How guest mode, SMS, and the map work in the Android build.</p>
        </div>
        <div>
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <aside className="landing-wrap landing-emergency-wrap" aria-label="Emergency services">
        <div className="landing-emergency">
          <ShieldAlert size={23} aria-hidden="true" />
          <p>In an emergency in Bangladesh, call national emergency services at <a href="tel:999">999</a>.</p>
        </div>
      </aside>
    </>
  );
}
