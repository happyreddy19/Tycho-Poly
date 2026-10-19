import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Layers, Sparkles, FileText, ChevronRight } from 'lucide-react';

export default function FlexiblePolyPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Flexible Poly Packaging',
      productType: 'Tubing / Sheeting / Shrink Film',
      thicknessMil: '1.5',
      comments: 'Inquiring about Flexible Poly Packaging (Tubing, Sheeting, Garment Bags, or Shrink Film).'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Flexible Poly Packaging</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Industrial & Retail Extrusion</span>
              <h1>Flexible Poly Packaging Solutions for Modern Applications</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                Versatile, lightweight packaging solutions designed for maximum flexibility, performance, and efficiency across diverse commercial applications. From continuous layflat tubing and single-wound sheeting to high-clarity shrink film and custom protective bags.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request a Custom Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Roll Weight & Yield Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Flexible Poly Packaging Rolls and Tubing"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Types Section (Original Website Structure) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Product Formats</span>
            <h2>Comprehensive Range of Flexible Packaging</h2>
            <p>
              Engineered to meet exact industrial and commercial requirements across diverse applications.
            </p>
          </div>

          <div className="grid-4">
            {/* Newspaper Bags */}
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Newspaper Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Lightweight, weather-resistant bags perfect for newspaper delivery, print collateral, and outdoor moisture protection.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Reliable weather protection
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Cost-effective high-volume run
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Clear or custom tinted options
                </li>
              </ul>
            </div>

            {/* Garment Bags */}
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Garment Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Protective packaging for textiles, dry-cleaning, bedding, and apparel during storage, distribution, or transit.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Breathable perforated options
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Anti-static surface treatment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Tear-resistant shoulder contour
                </li>
              </ul>
            </div>

            {/* Layflat Tubing & Sheeting */}
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Continuous Poly Tubing</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Continuous roll films and layflat tubing allowing custom-length bag creation for variable-length items and protection.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Widths from 4" to 120"
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Centerfold or single-wound
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Heat-sealable LDPE/LLDPE
                </li>
              </ul>
            </div>

            {/* Shrink Film */}
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>Polyethylene Shrink Film</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Crystal-clear presentation and tight collation wrapping for multi-packs, retail bundles, and display packaging.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Non-toxic & odor-free
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Balanced bi-axial shrink
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High clarity optical gloss
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Technical Specifications */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'flex-start' }}>
            <div>
              <span className="badge badge-emerald">Compliance & Use Cases</span>
              <h2>Meeting the Highest Industry Standards</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                Every roll is extruded under strict process controls ensuring gauge consistency, high tensile strength, and food-grade compliance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={22} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#FFFFFF' }}>Food-Safe Certified</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Resins comply with FDA 21 CFR 177.1520 and CFIA guidelines for safe, non-toxic food contact applications.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Sparkles size={22} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#FFFFFF' }}>Anti-Static Formulations</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Specialized topical and internal additives to prevent electrostatic discharge in sensitive electronics and cleanrooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Box */}
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Film Configurations & Specs</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Gauge / Thickness Range:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>0.65 mil to 6.0 mil (16 - 150 µm)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Available Widths:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>4 inches to 120 inches</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Core Sizes:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>3" or 6" Heavy Industrial Cores</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Resin Options:</span>
                  <span style={{ color: 'var(--lime-400)', fontWeight: 500 }}>Virgin LDPE, LLDPE, Metallocene, PCR</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Surface Treatment:</span>
                  <span style={{ color: '#FFFFFF' }}>Corona discharge up to 44 Dyne</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.75rem' }}
                onClick={handleQuoteClick}
              >
                <Send size={16} />
                Request Flexible Packaging Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
