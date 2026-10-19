import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Sparkles, ChevronRight, Utensils } from 'lucide-react';

export default function FoodServicePage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Food Service Packaging',
      productType: 'Bakery / Deli / Produce Bags',
      thicknessMil: '1.25',
      comments: 'Inquiring about Food Service Poly Bags (Bakery, Deli, Produce, Gusseted or Flat bags).'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Food Service Packaging</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">CFIA & FDA Food-Safe Approved</span>
              <h1>Food Service Packaging: Clear Protection for Bakery, Deli & Produce</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                Keep your food fresh, clean, and beautifully packed with our crystal-clear poly bags. Grease- and moisture-resistant, they’re engineered for storing baked goods, deli items, fruits, and prepared meals. Manufactured in our FSSC 22000 certified environment using 100% food-grade virgin resins.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Food Bag Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Bag Yield & Weight Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Food Service Poly Bags and Bakery Bags"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets (Original Site Section) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Target Markets</span>
            <h2>Specialized Food Safety & Presentation</h2>
            <p>
              Versatile poly bag solutions serving diverse markets with specialized requirements for hygiene, clarity, and protection.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥖</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Commercial Bakery</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Food-safe poly bags perfect for fresh sliced bread, artisan loaves, buns, and confectionery products with optional micro-perforations to release steam while keeping crusts crisp.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 500 }}>
                ✓ Wicketed & Dispenser Pack Formats
              </div>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥩</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Deli & Prepared Foods</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                High-clarity bags ideal for sliced meats, cheeses, portioned proteins, and commissary meal prep. High grease and moisture barrier maintains product integrity.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 500 }}>
                ✓ Grease-Proof & Leak-Resistant
              </div>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥬</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Produce & Agriculture</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Ventilated, high-strength poly bags designed to preserve farm-fresh vegetables, herbs, and fruits during transit, cold storage, and grocery retail display.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 500 }}>
                ✓ Ventilated & Moisture Controlled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Configurations & Types */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan">Types & Configurations</span>
              <h2>Flat, Gusseted & Dispenser Box Packs</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                Our food service packaging lines are engineered for fast, hygienic loading at busy grocery checkouts, commercial bakeries, and packing lines.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: '#FFFFFF', marginBottom: '0.35rem' }}>Classic Flat Poly Bags</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Standard flat two-wall construction ideal for general portioning, candy, deli counters, and lightweight food items.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: 'var(--lime-400)', marginBottom: '0.35rem' }}>Side & Bottom Gusseted Bags</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Pleated side and bottom gussets that expand to accommodate bulky bakery loaves and irregular produce with superior shelf stability.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: 'var(--cyan-400)', marginBottom: '0.35rem' }}>Food-Grade LB Dispenser Packs</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Convenient sanitary dispenser master cartons that allow fast single-bag dispensing without exposing remaining inventory to contamination.
                  </p>
                </div>
              </div>
            </div>

            {/* Specifications Box */}
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <ShieldCheck size={22} color="var(--emerald-400)" />
                <h3 style={{ margin: 0 }}>Food Compliance Guarantee</h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Manufactured strictly from certified prime virgin polyethylene resins with zero toxic plasticizers or phthalates.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Thickness Range:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>0.75 mil to 4.0 mil</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Temperature Rating:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>-30°C to +85°C</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Regulatory Approvals:</span>
                  <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>CFIA & FDA 21 CFR 177.1520</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Printing:</span>
                  <span style={{ color: '#FFFFFF' }}>Custom Flexographic 1-6 colors</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.75rem' }}
                onClick={handleQuoteClick}
              >
                <Send size={16} />
                Request Food Service Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
