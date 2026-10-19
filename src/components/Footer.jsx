import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Leaf, Calculator, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer({ onNavigate, onOpenRFQ }) {
  const handleNav = (route) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="brx-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Facilities */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/images/tychopoly-logo.png" alt="Tycho Poly" style={{ height: '36px' }} />
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '340px' }}>
              Canadian manufacturer of custom blown polyethylene film, high-barrier packaging, and certified sustainable Greenline™ products. Dual facilities in the Greater Toronto Area.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.84rem' }}>
                <MapPin size={17} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF' }}>Woodbridge Head Office & Primary Plant:</strong><br />
                  101 Hanlan Rd, Woodbridge, ON L4L 3P5
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.84rem' }}>
                <MapPin size={17} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF' }}>Concord Converting & Production Facility:</strong><br />
                  9030 Keele St Unit #2, Concord, ON L4K 2N2
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', fontSize: '0.84rem', marginTop: '0.35rem' }}>
                <Phone size={15} color="var(--emerald-400)" />
                <a href="tel:9052643475" style={{ color: '#FFFFFF', fontWeight: 500 }}>
                  (905) 264-3475
                </a>
                <span style={{ color: 'var(--text-dim)' }}>|</span>
                <Mail size={15} color="var(--cyan-400)" />
                <a href="mailto:info@tychopoly.com" style={{ color: '#FFFFFF' }}>
                  info@tychopoly.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Products Directory (Original Footer Structure) */}
          <div>
            <div className="footer-col-title">Products</div>
            <ul className="footer-links-list">
              <li>
                <button className="footer-link" onClick={() => handleNav('/waste-management-janitorial/')}>
                  Waste Management
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/food-service-packaging/')}>
                  Food Service Packaging
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/flexible-poly-packaging/')}>
                  Flexible Poly Packaging
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/industrial-packaging/')}>
                  Industrial Packaging
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/retail-products/')}>
                  Retail Products
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/rollstock/')}>
                  Rollstock Films
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/stand-up-and-zipper-pouches/')}>
                  Stand-Up & Zipper Pouches
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/t-shirt-bags/')}>
                  T-Shirt Bags
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links (Original Footer Structure) */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links-list">
              <li>
                <button className="footer-link" onClick={() => handleNav('/about-us/')}>
                  About Us
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/vacuum-bags/')}>
                  Vacuum bags
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/wicketed-bags/')}>
                  Wicketed bags
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/sustainability/')}>
                  Sustainability (Greenline)
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/certifications/')}>
                  Certifications
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/package-calculator/')} style={{ color: 'var(--cyan-400)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calculator size={14} />
                  Package calculator
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/careers/')}>
                  Careers / View Jobs
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('/contact-us/')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Certifications & Quote CTA */}
          <div>
            <div className="footer-col-title">Quality Assurance</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>FSSC 22000 Food Safety System</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>FDA & CFIA Direct Food Contact</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>EcoLogo (UL 126 Recycled Content)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--emerald-400)"' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>BPI Certified Compostable (ASTM D6400)</span>
              </div>
            </div>

            <button
              className="btn btn-primary btn-sm"
              style={{ width: '100%' }}
              onClick={onOpenRFQ}
            >
              Start Direct RFQ Quote
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Tycho Poly Inc. All Rights Reserved. Proudly Manufactured in Woodbridge & Concord, Ontario.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontSize: '0.82rem', cursor: 'pointer' }}
              onClick={() => handleNav('/privacy-policy/')}
            >
              Privacy Policy
            </button>
            <span style={{ color: 'var(--border-light)' }}>•</span>
            <span style={{ color: 'var(--text-dim)' }}>
              101 Hanlan Rd, Woodbridge, ON L4L 3P5
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
