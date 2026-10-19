import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Trash2, Leaf, ChevronRight, Droplets } from 'lucide-react';

export default function WasteManagementPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Waste Management & Janitorial',
      productType: 'Star-Seal Can Liners / Biohazard / Water-Soluble',
      thicknessMil: '1.5',
      comments: 'Inquiring about Waste Management & Janitorial Bags (Star-Seal Coreless, EcoLogo Recycled, Compostable, Biohazard or Water-Soluble).'
    });
  };

  return (
    <div className="product-page">
      {/* Breadcrumb & Hero */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            <button onClick={() => onNavigate('/')} style={{ color: 'var(--text-muted)' }}>Home</button>
            <ChevronRight size={14} />
            <button onClick={() => onNavigate('/products/')} style={{ color: 'var(--text-muted)' }}>Our Products</button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Waste Management / Janitorial</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Institutional & Municipal Grade</span>
              <h1>Sustainable Strength: Garbage Bags Built for Every Need</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                From EcoLogo-certified recycled materials and municipal compostable bags to specialized water-soluble laundry liners and medical biohazard bags, our comprehensive range delivers leakproof reliability while advancing your environmental goals.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Janitorial Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Bag Yield & Weight Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Commercial Garbage Bags and Can Liners"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Range Section (Original Site Structure) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Complete Solution Suite</span>
            <h2>Comprehensive Range of Refuse & Containment Solutions</h2>
            <p>
              From corporate office waste to specialized hospital infection control and municipal organics diversion.
            </p>
          </div>

          <div className="grid-3">
            {/* Green Line Recycled */}
            <div className="card">
              <span className="tag-badge tag-badge-green" style={{ marginBottom: '0.65rem' }}>EcoLogo Certified</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Greenline Recycled Can Liners</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Manufactured from certified post-consumer recycled polyethylene, maintaining heavy puncture strength while reducing virgin resin extraction.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> UL 126 EcoLogo certified
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> 100% Recyclable LDPE #4
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Reduced carbon footprint
                </li>
              </ul>
            </div>

            {/* Compostable Bags */}
            <div className="card">
              <span className="tag-badge tag-badge-green" style={{ marginBottom: '0.65rem' }}>BPI Certified • ASTM D6400</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Greenline Compostable Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Certified plant-based compostable bags designed for municipal green bin collections, commercial kitchen food prep, and organic diversion.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Breaks down ≤ 90 days in municipal plants
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Municipal organics approved
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Superior wet food tear resistance
                </li>
              </ul>
            </div>

            {/* Star-Sealed Coreless */}
            <div className="card">
              <span className="tag-badge" style={{ marginBottom: '0.65rem' }}>Zero Bottom Leaks</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Star-Sealed Coreless Rolls</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Patented star-seal bottom design folds the film 8 times, completely eliminating bottom seam failures and dispersing liquid load evenly across the bag.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Coreless rolls save 30% storage space
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Fits round and square trash receptacles
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Convenient easy-tear roll perforations
                </li>
              </ul>
            </div>

            {/* Soiled Linen Bags */}
            <div className="card">
              <span className="tag-badge" style={{ marginBottom: '0.65rem' }}>Healthcare Infection Control</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Soiled Linen Liners</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Heavy-duty hospital bags for collecting and transporting contaminated textiles. Available in color-coded tints with printed caution markings.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Color-coded (Blue, Yellow, Clear)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Tear-resistant heavy gauge
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Drawstring or flat-tie closure
                </li>
              </ul>
            </div>

            {/* Water-Soluble Laundry Bags */}
            <div className="card">
              <span className="tag-badge" style={{ marginBottom: '0.65rem' }}>Zero Staff Exposure</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Water-Soluble Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Specialized PVOH liners that dissolve completely inside industrial washing machines (available in cold-water and hot-water dissolution formulations).
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> 100% biodegradable dissolution
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Eliminates worker handling of soiled items
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Safe for commercial laundry drains
                </li>
              </ul>
            </div>

            {/* Biohazard Bags */}
            <div className="card">
              <span className="tag-badge" style={{ marginBottom: '0.65rem', color: '#EF4444', borderColor: 'rgba(239,68,68,0.3)' }}>OSHA 1910.1030</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Infectious Biohazard Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Red and yellow infectious waste bags pre-printed with bold universal biohazard warnings for clinic, surgical, and laboratory hazardous waste.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Certified high dart impact ratings
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Meets federal healthcare standards
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High-visibility red & yellow tints
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section (Original Site Section) */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-cyan">Why Choose Our Bags</span>
            <h2>Superior Reliability for Demanding Waste Operations</h2>
          </div>

          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
              <h4>Superior Leak Resistance</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                Star-seal construction distributes heavy liquid loads across 8 layers of film, eliminating seam blowouts in office buildings and restaurants.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌱</div>
              <h4>Certified Sustainability</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                Certified under UL 126 EcoLogo for verified recycled plastic and BPI ASTM D6400 for 90-day municipal composting diversion.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏢</div>
              <h4>Versatile Applications</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                From small 5-gallon washroom cans to 60-gallon heavy industrial roll-out carts and demolition contractor cleanup.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={handleQuoteClick}>
              <Send size={16} />
              Request Janitorial & Waste Bag Catalog Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
