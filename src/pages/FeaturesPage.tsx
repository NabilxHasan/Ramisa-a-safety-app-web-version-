import { ArrowLeft, LifeBuoy, Map, Settings2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const groups = [
  {
    group: 'Emergency',
    icon: ShieldAlert,
    features: [
      ['SOS and emergency contacts', 'Review and send an SMS to contacts you choose. Location is included when available, and the app tracks send and delivery status separately.'],
      ['Lock screen and hardware triggers', 'Review the available shortcuts and enable them on supported devices. Try the practice controls before relying on a shortcut.'],
      ['Fake call', 'Start or schedule a simulated incoming call on your own device.'],
      ['Siren and strobe', 'Use sound and the camera torch where the device supports it.'],
      ['Safety timer and incident history', 'Set a timer to check in and review previous alert activity on this device.'],
    ],
  },
  {
    group: 'Getting around',
    icon: Map,
    features: [
      ['Safe Journey', 'Set a destination and expected arrival, check in during a trip, and choose whether to send an arrival SMS.'],
      ['Ride Safety', 'Enter vehicle and trip details yourself, then review and share them through Android.'],
      ['Safety Map and Safe Places', 'Browse the street map, view example or device-local incident pins, and look up places that may offer help.'],
      ['Offline maps', 'Download selected map regions while connected, then view those regions offline.'],
    ],
  },
  {
    group: 'Support and information',
    icon: LifeBuoy,
    features: [
      ['Safety Guide & Rights', 'Read practical guidance on personal safety and rights.'],
      ['Legal aid and GD drafts', 'Find legal support information and prepare a General Diary draft to use outside the app.'],
      ['Digital safety', 'Read guidance on online harassment and preserving useful records.'],
      ['First aid, wellness, and self-defense', 'Open the in-app reference guides and support resources.'],
      ['Community and volunteer tools', 'Community posts and help requests require a configured service and an authorized account. Volunteer matching is a preview.'],
    ],
  },
  {
    group: 'On the device',
    icon: Settings2,
    features: [
      ['Threat Guard', 'Run on-device audio classification when enabled. Check suggested results yourself.'],
      ['Low-battery tools', 'Review battery status and try the local practice flow.'],
      ['Stealth calculator', 'Open the calculator interface with the app’s discreet access controls.'],
      ['Offline mesh', 'Explore the relay workflow in preview mode.'],
      ['Language and preferences', 'Use English or Bangla and manage settings on the phone.'],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <section className="landing-wrap landing-directory" aria-labelledby="tools-title">
      <Link className="landing-text-link" to="/"><ArrowLeft size={17} aria-hidden="true" /> Home</Link>
      <div className="landing-section-heading">
        <h1 id="tools-title">Explore the safety tools</h1>
        <p>What each tool does in the Android build, including flows you can try in preview.</p>
      </div>
      <div className="landing-screen-grid">
        <figure>
          <img src="/app-screens/ramisa-tools.png" width="720" height="1280"
            alt="RAMISA safety tools with categorized filters and a details button next to each tool" loading="lazy" />
          <figcaption>
            <strong>Find a tool quickly</strong>
            <span>Search by name and open Details to see how each tool works.</span>
          </figcaption>
        </figure>
        <figure>
          <img src="/app-screens/ramisa-sos.png" width="720" height="1280"
            alt="RAMISA SOS review with SMS status, location, and trusted contact setup" loading="lazy" />
          <figcaption>
            <strong>Review an alert before sending</strong>
            <span>See recipients, location availability, and SMS status.</span>
          </figcaption>
        </figure>
      </div>
      <div className="landing-directory-grid">
        {groups.map(({ group, icon: Icon, features }) => (
          <article key={group} className="landing-feature-card">
            <div className="landing-feature-icon"><Icon size={23} aria-hidden="true" /></div>
            <h2>{group}</h2>
            <dl>
              {features.map(([title, description]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
