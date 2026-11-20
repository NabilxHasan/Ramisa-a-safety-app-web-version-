import { ArrowUpRight, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-wrap landing-footer-inner">
        <div>
          <Link className="landing-brand" to="/" aria-label="RAMISA home">
            <span className="landing-brand-icon"><ShieldPlus size={19} aria-hidden="true" /></span>
            RAMISA
          </Link>
          <p>Personal safety tools for Android.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/features">Features</Link>
          <Link to="/guide">Safety Guide</Link>
          <Link to="/support">Support</Link>
          <a href="https://github.com/black-hathacker-gg/Ramisa">
            Android source <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
