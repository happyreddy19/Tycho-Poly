import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Sparkles, ChevronRight, PackageCheck } from 'lucide-react';

export default function StandUpPouchesPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Stand-Up & Zipper Pouches',
      productType: 'Stand-Up Pouch / 3-Side Seal',
      thicknessMil: '3.5',
      comments: 'Inquiring about Stand-Up and Zipper Pouches for Food, Pharma, Pet Care, or Consumer Goods.'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Stand-Up & Zipper Pouches</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Shelf-Ready Resealable Formats</span>
              <h1>Stand-Up & Zipper Pouches: Versatile Packaging Excellence</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                Premium stand-up pouches and zipper solutions designed for food, pharmaceutical, pet care, cosmetics, and household applications. Engineered with advanced barrier films, bottom gussets, airtight press-to-close zippers, and high-definition custom flexo printing.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Pouch Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Pouch Yield & Weight Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Stand Up and Zipper Barrier Pouches"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formats Offered (Original Site Section) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Pouch Architecture</span>
            <h2>Comprehensive Range of Pouch Formats</h2>
            <p>
              Designed to maximize shelf presentation while preserving food aroma, freshness, and barrier integrity.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Zipper Three-Side Seal</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Convenient resealable flat pouches featuring reliable interlocking zipper closure mechanisms, easy-open tear notches, and airtight edge seals.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Press-to-close interlocking zipper
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Tamper-evident tear notches
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Leakproof perimeter sealing
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Stand-Up Bottom Gusset</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Self-supporting pouches that maximize billboard presence on retail shelves. Round bottom (Doyen), K-seal, or plow bottom styles provide superior stability.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Upright shelf stability
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> 2 oz to 10 lbs capacity options
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High gloss or soft matte tactile finish
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>High-Barrier Film Options</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Multi-layer co-extruded barrier laminates for products requiring extended shelf life, moisture vapor protection, and oxygen blocking.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Oxygen Transmission Rate &lt; 35 cc/m²
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Moisture and aroma preservation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Recyclable PE/PE mono-material options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries (Original Site Section) */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-emerald">Target Industries</span>
            <h2>Engineered for Demanding Commercial Applications</h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🌯</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Food & Snack Industry</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Snack chips, confectionery, dried fruit, nuts, spices, and whole-bean coffee (with one-way degassing valves). Keeps contents fresh and crisp.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>💊</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Pharmaceutical & Health</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Nutraceuticals, powdered sports nutrition, supplements, medical supplies, and cleanroom-packaged wellness products requiring tight moisture seals.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🐱</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Pet Care Products</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Gourmet pet treats, dried dog chews, cat kibble, and specialty animal formulations with heavy puncture resistance and reclosable fresh-lock zippers.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="btn btn-primary btn-lg" onClick={handleQuoteClick}>
              <Send size={16} />
              Request Custom Stand-Up Pouch Samples & Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
