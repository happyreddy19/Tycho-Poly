import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Zap, ShoppingCart, Factory, ChevronRight } from 'lucide-react';

export default function WicketedBagsPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Wicketed Bags',
      productType: 'Wicketed Automated Packaging Bags',
      thicknessMil: '1.25',
      comments: 'Inquiring about Wicketed Bags for Automated Packaging Lines (Bakery, Bread, Ice, Apparel, Produce).'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Wicketed Bags</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">High-Speed Automated Packaging</span>
              <h1>Wicketed Bags: Premium Films for Professional Packaging</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                Engineered for seamless integration with automated blow-open loaders and high-speed packaging machinery. Delivering consistent tear-off resistance, jam-resistant feeding, and crystal-clear presentation for commercial bakeries, packaged ice plants, and textile manufacturers.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Wicketed Bag Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Bag Yield & Weight Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Wicketed Packaging Bags for Automated Packaging"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served (Original Site Section) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Industries Served</span>
            <h2>Powering High-Speed Packaging Efficiency</h2>
            <p>
              Engineered with specialized high-slip formulations to pop open instantly under air blowers without sticking or static cling.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>⚡️</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Automated Food Processing</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Commercial bakeries, sliced bread packaging, bagel bagging, poultry packing, and snack facilities requiring high-speed automated loading with zero bag tears.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 500 }}>
                ✓ Compatible with Formost, AMF, UBE
              </div>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🛒</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Consumer Goods & Apparel</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                High-volume packaging lines for folded t-shirts, socks, paper towels, diapers, household disposables, and retail kits.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 500 }}>
                ✓ Crystal Clear Optical Sheen
              </div>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🏭</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Industrial Manufacturing</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Manufacturing facilities requiring rapid, automated bagging for fasteners, injection molded parts, hardware, and mass-market consumer kits.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 500 }}>
                ✓ Heavy Gauge Wicket Wire Mounts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Automation Features (Original Site Section) */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan">Engineered for Packaging Equipment</span>
              <h2>Purpose-Built for High-Speed Automation</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.65' }}>
                Every wicketed bag stack is produced with precision hole punches, clean serrated tear-off perforations, and controlled anti-static levels to eliminate machine jamming.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: '#FFFFFF', marginBottom: '0.25rem' }}>Precise Perforation Spacing</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Consistent tear strength ensures bags break cleanly away from the wicket wire without leaving jagged plastic tags or stalling packaging machines.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: 'var(--lime-400)', marginBottom: '0.25rem' }}>Machinery Compatibility Guarantee</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Industry standard wicket hole spacing (2.75", 3", 4" or custom centerlines) compatible with leading North American and European automated baggers.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <ShieldCheck size={22} color="var(--emerald-400)" />
                <h3 style={{ margin: 0 }}>Wicketed Bag Specifications</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Wicket Stacks:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>250 to 500 bags per wire</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Lip Dimensions:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>1.25" to 2.50" with serrations</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Resin Formulation:</span>
                  <span style={{ color: 'var(--lime-400)', fontWeight: 500 }}>High-Clarity, High-Slip Virgin LDPE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Compliance:</span>
                  <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>CFIA & FDA Food-Grade Approved</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.75rem' }}
                onClick={handleQuoteClick}
              >
                <Send size={16} />
                Request Wicketed Bag Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
