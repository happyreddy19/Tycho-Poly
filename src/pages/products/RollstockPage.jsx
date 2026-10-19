import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Layers, Sparkles, ChevronRight, Gauge } from 'lucide-react';

export default function RollstockPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Rollstock Barrier Films',
      productType: 'Rollstock Film Webbing',
      thicknessMil: '2.5',
      comments: 'Inquiring about Rollstock Films for Meat, Cheese, Poultry or automated Form-Fill-Seal lines.'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Rollstock Films</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">High-Speed Automated Packaging</span>
              <h1>Rollstock Solutions: Premium Barrier Films for Professional Packaging</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                High-barrier rollstock films engineered for high-speed Horizontal (HFFS) and Vertical (VFFS) Form-Fill-Seal packaging machinery. Delivering exceptional seal integrity through fat and protein contamination, extended shelf life, and crystal-clear presentation for fresh meat, cheese, and poultry.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Rollstock Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Roll Weight & Footage Estimator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="High Barrier Packaging Rollstock Films"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications (Original Site Section) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Applications</span>
            <h2>Protective Barrier Films for Perishables & Proteins</h2>
            <p>
              Engineered multi-layer co-extrusion delivering controlled oxygen transmission (OTR) and moisture vapor (MVTR) protection.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥩</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Meat Packaging</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Food-safe materials engineered for fresh, frozen, and processed meat packing. Delivers puncture resistance around bone-in cuts and maintains vacuum seal integrity.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Seals through grease & liquids
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Low seal initiation temperature
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Deep freeze puncture resistance
                </li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🧀</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Cheese Packaging</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Barrier protection against oxygen and moisture to prevent mold growth, preserve natural flavor profiles, and support Modified Atmosphere Packaging (MAP).
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Gas flush barrier properties
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Prevents moisture dehydration
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High clarity retail shelf view
                </li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🍗</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Poultry Packaging</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Food-safe barrier films engineered for automated poultry processing and retail packing. Guarantees cold storage stability and resistance to bone punctures.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Blast-freeze rated to -40°C
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Tight optical shrinkage
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> CFIA & FDA food-contact assured
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan">Automated Machinery Runnability</span>
              <h2>Engineered for High-Speed Packaging Lines</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.65' }}>
                Our rollstock films are extruded with controlled Coefficient of Friction (COF) to feed smoothly through high-speed automated bagging, pouch-forming, and overwrapping machinery without jamming or excessive web stretch.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.5rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Slit Width Range:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>6" to 65" precision slit (±1mm tolerance)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Gauge Range:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>1.0 mil to 5.5 mil</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Core Specifications:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>3" or 6" Heavy Industrial Fiberboard</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Request Rollstock Specifications & Quote</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Let our technical engineers evaluate your form-fill-seal equipment and recommend the optimal film gauge and sealant layer.
              </p>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={handleQuoteClick}>
                <Send size={16} />
                Get Rollstock Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
