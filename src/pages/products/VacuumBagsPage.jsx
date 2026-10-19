import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Sparkles, ChevronRight, Snowflake } from 'lucide-react';

export default function VacuumBagsPage({ onNavigate, onOpenRFQ }) {
  const handleQuoteClick = () => {
    onOpenRFQ({
      productCategory: 'Vacuum Bags',
      productType: 'Multi-Layer Vacuum Barrier Pouches',
      thicknessMil: '3.0',
      comments: 'Inquiring about Vacuum Bags for Meat, Seafood, Perishables, or Sous-Vide processing.'
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
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Vacuum Bags</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Perishables & High-Barrier Protection</span>
              <h1>Vacuum Bags: Superior Protection for Perishable Products</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.65' }}>
                Multi-layer co-extruded vacuum barrier bags engineered with exceptional oxygen and moisture barriers to lock in flavor, prevent freezer burn, and extend shelf life for fresh proteins, seafood, cheeses, and processed foods.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={handleQuoteClick}>
                  <Send size={16} />
                  Request Vacuum Bag Quote
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/package-calculator/')}>
                  Pouch Yield Calculator
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="High Barrier Food Vacuum Pouches"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases (Original Site Section) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Use Cases</span>
            <h2>Proven Barrier Performance for Food Processors</h2>
            <p>
              Engineered with advanced barrier technology and multi-layer construction for superior protection of perishable foods.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥛</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Perishable Foods & Dairy</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Comprehensive protection for fresh cheeses, portioned dairy, pasta, and prepared commissary meals requiring extended shelf life without preservatives.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Extended shelf freshness
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Crystal-clear optical clarity
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Aroma and moisture sealing
                </li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🥩</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Protein & Meat Packaging</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Specialized vacuum pouches for beef, pork, poultry, and processed deli meats. Seals through fat and blood contamination with high dart-drop puncture resistance.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Prevents freezer burn
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Seals through marinades & oils
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Bone-guard heavy gauge options
                </li>
              </ul>
            </div>

            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🍣</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Seafood Applications</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Marine-grade barrier vacuum pouches for fresh and smoked fish, frozen shellfish, and retail portioned fillets. Preserves firm texture and natural appearance.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Freshness retention & presentation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> Sous-vide culinary cooking safe
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} color="var(--emerald-400)" /> -40°C blast freezer stability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section (Original Site Structure) */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan">Multi-Layer Film Construction</span>
              <h2>Multi-Layer Co-Extrusion Architecture</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.65' }}>
                Combining Polyamide (Nylon) for mechanical toughness and gas barrier with Polyethylene (PE) sealant layers for broad temperature sealing and leak resistance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: 'var(--cyan-400)', marginBottom: '0.25rem' }}>Excellent Oxygen Barrier (OTR)</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    OTR &lt; 35 cc/m²/24hr (ASTM D3985) prevents oxidation, off-flavors, and discoloration of red meats and cheeses.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ color: 'var(--lime-400)', marginBottom: '0.25rem' }}>Moisture Barrier Excellence (MVTR)</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    MVTR &lt; 4.5 g/m²/24hr (ASTM F1249) keeps moisture locked inside while completely preventing freezer burn during extended frozen storage.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <ShieldCheck size={22} color="var(--emerald-400)" />
                <h3 style={{ margin: 0 }}>Vacuum Bag Specs</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Standard Gauges:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>3.0 mil, 4.0 mil, 5.0 mil</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Material Construction:</span>
                  <span style={{ color: '#FFFFFF' }}>PA / PE Co-Extrusion (Multi-Layer)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Temperature Window:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF' }}>-40°C to +100°C (Boilable)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Compliance:</span>
                  <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>CFIA & FDA Food-Safe Assured</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.75rem' }}
                onClick={handleQuoteClick}
              >
                <Send size={16} />
                Get Vacuum Pouch Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
