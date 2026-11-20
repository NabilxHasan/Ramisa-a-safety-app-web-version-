import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="landing-hero" aria-labelledby="landing-title">
      <div className="landing-wrap landing-hero-grid">
        <div className="landing-hero-copy">
          <p className="landing-context">Personal safety · Android · Bangladesh</p>
          <h1 id="landing-title">Keep trusted people <em>within reach.</em></h1>
          <p className="landing-intro">
            RAMISA helps women, children, and families prepare for emergencies, check in during a trip,
            and reach trusted contacts when they need help.
          </p>
          <div className="landing-actions">
            <a className="landing-button landing-button-primary" href="#app-preview">
              See the Android app <ArrowDown size={17} aria-hidden="true" />
            </a>
            <Link className="landing-text-link" to="/features">
              Browse safety tools <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="landing-app-preview" id="app-preview" aria-label="RAMISA on Android">
          <div className="landing-device landing-device-map">
            <img src="/app-screens/ramisa-map.png" width="720" height="1280"
              alt="RAMISA Safety Map on Android showing OpenStreetMap streets in Dhaka and example incident pins" />
          </div>
          <div className="landing-device landing-device-home">
            <img src="/app-screens/ramisa-home.png" width="720" height="1280" fetchPriority="high"
              alt="RAMISA Home on Android with the SOS review button and quick safety actions" />
          </div>
          <figcaption>Home and Safety Map · Android build</figcaption>
        </figure>
      </div>
    </section>
  );
}
