import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Factory, Layers, ChevronRight, Box } from 'lucide-react';

export default function IndustrialPackagingPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Industrial Packaging',
      productType: 'Gaylord Liners / Pallet Covers',
      thicknessMil: '3.0',
      comments: 'Inquiring about Industrial Packaging (Gaylord Liners, Pallet Covers, Pallet Top Sheets, Furniture/Mattress Bags).'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Industrial Packaging</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Heavy-Duty Protection</span>
              <h1>Industrial Packaging: Excellence for Large-Scale Operations</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                From heavy-gauge Gaylord liners to perforated pallet top sheets and weather-resistant pallet covers, our industrial packaging solutions deliver unmatched protection and efficiency for warehouse, freight, and manufacturing operations. Built tough to withstand harsh transport environments.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Industrial Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Roll & Liner Weight Estimator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Heavy Duty Industrial Gaylord Liners and Pallet Covers"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Grid (Original Site Structure) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Industrial Product Lineup</span>
            <h2>Comprehensive Heavy-Duty Warehouse Protection</h2>
            <p>
              Engineered from high-impact LLDPE and Hexene resins to guard against punctures, moisture, and contamination.
            </p>
          </div>

          <div className="grid-3">
            {/* Gaylord Liners */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Gaylord & Tote Bin Liners</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Gaylord and tote bin bags fit inside corrugated boxes, metal bins, fiberglass containers, and plastic bulk totes. Covers the bottom and sides in heavy-duty polyethylene to protect raw materials, bulk chemicals, resin pellets, or food ingredients.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Heavy moisture & dust barrier
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Custom circumferences up to 140"
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High dart-drop puncture strength
                </li>
              </ul>
            </div>

            {/* Poly Gusseted Pallet Covers */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Gusseted Pallet Covers</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Pleated sides expand smoothly to the dimensions of a standard pallet. Available in clear or black opaque finishes with optional UVI (Ultra-Violet Inhibitor) protection for outdoor yard storage. Pre-cut and perforated on roll for fast dispensing.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Light, medium & heavy-duty gauges
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Optional 12-month UVI weatherization
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Black security or clear inspection
                </li>
              </ul>
            </div>

            {/* Pallet Top Sheets */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Pallet Top Sheets</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Perforated on continuous rolls for easy tear-off. Lay across the top of loaded pallets before stretch-wrapping to protect from dirt, rain, and dust, or place on warehouse floors under stacked freight.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Easy-tear precision perforations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Anti-static options available
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Protects top pallet freight layer
                </li>
              </ul>
            </div>

            {/* Furniture Covers */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Furniture Covers</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Clear protective covers offering high clarity and dirt/dust shielding for chairs, sofas, and office decor during transit or storage. Dispenses from rolls on standard 3" plugged cores for assembly line bagging.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High clarity optical film
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Heat-sealable bottom & sides
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Custom chair and sofa widths
                </li>
              </ul>
            </div>

            {/* Mattress Poly Bags */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Mattress Poly Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Made from Low Slip Linear Low Density Poly (LLDPE), produced on easy tear-off rolls. Tailored for mattress manufacturing plants, furniture retailers, and moving companies.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Twin, Double, Queen & King Sizes
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Standard & Pillow-Top Depth
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Optional micro-venting holes
                </li>
              </ul>
            </div>

            {/* Industrial Endless Sheeting */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Heavy Endless Sheeting</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Continuous heavy-gauge single wound and centerfold poly sheeting for construction drop-cloths, moisture barriers, and machinery winterization wraps.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Gauges up to 8.0 mil
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Flame-retardant options
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> 100% Recyclable LDPE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & CTA */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-emerald">Industrial Film Configurations</span>
              <h2>Custom Sizing Built for Your Operations</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.65' }}>
                Our polyethylene and flexible films are available in multiple configurations to meet the diverse needs of rollstock and industrial film manufacturing. Each format is optimized for specific processing, filling, sealing, and printing requirements.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.5rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Thickness Range:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>1.25 mil to 8.0 mil (Extra Heavy Industrial)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Circumference:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>Up to 140 inches</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Puncture Resistance:</span>
                  <span style={{ color: 'var(--lime-400)', fontWeight: 500 }}>High Dart Impact (ASTM D1709)</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Ready for an Industrial Quote?</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Submit your box dimensions, pallet sizes, or continuous footage requirements for immediate volume tier pricing.
              </p>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={handleQuoteClick}>
                <Send size={16} />
                Get Industrial Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
