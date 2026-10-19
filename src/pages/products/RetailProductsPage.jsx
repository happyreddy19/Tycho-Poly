import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, ShoppingBag, Box, ChevronRight } from 'lucide-react';

export default function RetailProductsPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Retail Products',
      productType: 'Contractor / Outdoor / Kitchen Bags',
      thicknessMil: '2.5',
      comments: 'Inquiring about Retail Products (Contractor Bags, Outdoor Lawn & Leaf, Kitchen Bags, Display-ready packaging).'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Retail Products</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Retail & Consumer Products</span>
              <h1>Retail Poly Bags: Superior Protection for Consumer & Contractor Applications</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                A full retail lineup of Outdoor, Kitchen, Clean-Up, and Heavy-Duty Contractor Bags available in Twist Tie, EZ Flap Tie, and Drawstring formats. Delivering superior performance using less plastic with shelf-ready packaging for hardware stores, grocers, and commercial suppliers.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Retail Program Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Packaging Yield Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Retail Contractor Bags and Kitchen Trash Packaging"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Line Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Retail Product Lineup</span>
            <h2>Consumer & Contractor Bag Options</h2>
            <p>
              Engineered with advanced high-tensile resins to deliver puncture resistance and leakproof strength while optimizing film yield.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Contractor Clean-Up Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Heavy-duty 2.0 to 4.0 mil puncture-resistant contractor bags designed for rough jobsite debris, drywall, lumber, and metal scraps. Available in dispenser cartons.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Heavy gauge 2.0 - 4.0 mil
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> 42 to 55 gallon capacities
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Twist tie or flap tie closure
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Outdoor Lawn & Leaf Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Durable outdoor bags designed for yard waste, grass clippings, and garden cleanup. Also available in Greenline Compostable certified versions for municipal green programs.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Wet leaf tear resistance
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Compostable or PCR Recycled options
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Full retail branded packaging
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>Kitchen Trash Bags</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Convenient 13-gallon kitchen can liners available with drawstrings, EZ flap-ties, or twist-ties. Engineered with odor and moisture barrier seals.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Easy-cinch drawstrings
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Leakproof star-seal bottom
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> White, black, or translucent
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Display Ready Packaging */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan">Shelf-Ready Retail Packaging</span>
              <h2>Display-Ready Packaging Options</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.65' }}>
                Tycho Poly offers complete private-label packaging capabilities. We convert and package your custom poly bags directly into branded retail cartons, shelf display trays, or club-store half pallets.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.5rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} color="var(--emerald-400)" />
                  <span>Custom private-label box artwork and barcode labeling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} color="var(--emerald-400)" />
                  <span>Count configurations: 20, 32, 50, and 100 count dispenser packs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} color="var(--emerald-400)" />
                  <span>Club-store corrugated floor displays and wrapped pallets</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Launch Your Retail Bag Program</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Talk with our retail packaging team about custom box minimums, pallet counts, and lead times.
              </p>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={handleQuoteClick}>
                <Send size={16} />
                Get Retail Quotation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
