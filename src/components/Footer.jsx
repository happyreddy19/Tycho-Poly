import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Leaf, Calculator, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import { productsData } from '../data/productsData';

export default function Footer({ onNavigate, onOpenRFQ }) {
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
              Canadian manufacturer of custom blown polyethylene film, high-barrier packaging, and certified sustainable Greenline™ products. Dual facilities serving North America.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.84rem' }}>
                <MapPin size={17} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF' }}>Woodbridge Primary Plant & HQ:</strong><br />
                  101 Hanlan Rd, Woodbridge, ON L4L 3P5
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.84rem' }}>
                <MapPin size={17} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF' }}>Concord Converting Facility:</strong><br />
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

          {/* Col 2: Product Catalogue */}
          <div>
            <div className="footer-col-title">Product Catalog</div>
            <ul className="footer-links-list">
              {productsData.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <button
                    className="footer-link"
                    style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
                    onClick={() => {
                      onNavigate('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="footer-link"
                  style={{ color: 'var(--emerald-400)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  onClick={() => {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  View All 10 Categories <ArrowUpRight size={14} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Tools */}
          <div>
            <div className="footer-col-title">Technical Tools</div>
            <ul className="footer-links-list">
              <li>
                <button
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--cyan-400)' }}
                  onClick={() => onNavigate('calculator')}
                >
                  <Calculator size={14} />
                  Roll Weight Estimator
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--cyan-400)' }}
                  onClick={() => onNavigate('calculator')}
                >
                  <Calculator size={14} />
                  Bag Yield Calculator
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--emerald-400)' }}
                  onClick={() => onNavigate('greenline')}
                >
                  <Leaf size={14} />
                  Greenline™ Sustainability
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => onNavigate('capabilities')}>
                  Manufacturing Lines
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => onNavigate('industries')}>
                  Industry Applications
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => onNavigate('about')}>
                  About Tycho Poly
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => onNavigate('careers')}>
                  Careers & Job Openings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & RFQ Action */}
          <div>
            <div className="footer-col-title">Verified Certifications</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>FSSC 22000 Food Safety System</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>FDA 21 CFR & CFIA Direct Food Contact</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>EcoLogo Certified (UL 126 Recycled PE)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--emerald-400)" />
                <span>BPI Certified Compostable (ASTM D6400)</span>
              </div>
            </div>

            <button
              className="btn btn-primary btn-sm"
              style={{ width: '100%' }}
              onClick={onOpenRFQ}
            >
              Start an RFQ Spec Sheet
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Tycho Poly Inc. All Rights Reserved. Proudly Manufactured in Ontario, Canada.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontSize: '0.82rem', cursor: 'pointer' }}
              onClick={() => onNavigate('privacy-policy')}
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
