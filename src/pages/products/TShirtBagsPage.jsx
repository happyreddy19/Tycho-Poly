import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, ShoppingBag, Leaf, ChevronRight } from 'lucide-react';

export default function TShirtBagsPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'T-Shirt Bags',
      productType: 'T-Shirt Carrier Bags',
      thicknessMil: '1.25',
      comments: 'Inquiring about T-Shirt Bags (Grocery, Convenience, Biodegradable or Custom Printed Carrier Bags).'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>T-Shirt Bags</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Retail Checkout Workhorse</span>
              <h1>T-Shirt Bags: Versatile Retail Solutions for Every Business</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                Serving supermarkets, convenience chains, and restaurant take-out operations with reliable, cost-effective carrier bag solutions. Engineered from tough high-molecular HDPE or Greenline™ compostable biopolymers to deliver high tensile strength, leakproof bottom seams, and comfortable handling.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request T-Shirt Bag Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Bag Yield & Weight Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Retail T-Shirt Carrier Bags"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bag Details (Original Site Section) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Key Features</span>
            <h2>Engineered for Retail Performance & Sustainability</h2>
            <p>
              Combining durable polymer construction, custom flexographic branding, and eco-friendly material alternatives.
            </p>
          </div>

          <div className="grid-3">
            {/* Water Resistant */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Water-Resistant & Leakproof</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Advanced polymer construction provides complete moisture protection for condensation-heavy frozen items, chilled beverages, and wet groceries.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Continuous heat-sealed bottom
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Reinforced die-cut handles
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> All-weather durability
                </li>
              </ul>
            </div>

            {/* Customizable Print */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Custom Flexo Printing</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                High-definition flexographic printing options to showcase your retail branding, environmental messages, barcodes, or return policies.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> 1 to 4 spot colors or process print
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> High dyne ink adhesion
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Edge-to-edge custom graphics
                </li>
              </ul>
            </div>

            {/* Biodegradable & Compostable */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Biodegradable & Compostable</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Environmentally conscious alternatives that maintain load strength while meeting local municipal single-use plastic reduction mandates.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Greenline Compostable™ (BPI Certified)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Post-consumer recycled (PCR) options
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Municipal bylaw compliant gauges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets (Original Site Section) */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-cyan">Target Markets</span>
            <h2>Proven Reliability for High-Volume Checkouts</h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥖</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Grocery Supermarkets</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                High-capacity 1/6 BBL bags designed for rapid loading on standard checkout bag racks with easy-open tabs that eliminate cashier frustration.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🏪</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Convenience Stores</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Durable 1/8 BBL and custom carrier bags ideal for snacks, canned drinks, grab-and-go deli purchases, and newsstand magazines.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🛍️</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Retail & Restaurants</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Custom printed take-out carrier bags with flat-bottom gussets to keep catering platters, food containers, and merchandise upright.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="btn btn-primary btn-lg" onClick={handleQuoteClick}>
              <Send size={16} />
              Request Custom Branded T-Shirt Bag Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
