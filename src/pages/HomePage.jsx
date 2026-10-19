import React from 'react';
import { ArrowRight, Send, Leaf, Calculator, ShieldCheck, Factory, CheckCircle2, ChevronRight, Sparkles, Building2, Layers } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';
import { industriesData } from '../data/industriesData';
import { sustainabilityData } from '../data/sustainabilityData';
import { companyData } from '../data/companyData';

export default function HomePage({ onNavigate, onOpenRFQ, onSelectProduct, onQuickRFQ }) {
  return (
    <div className="homepage">
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="hero-section">
        <div className="hero-bg-wrapper">
          <img
            src="/images/hero-extrusion.jpg"
            alt="Tycho Poly Blown Film Extrusion Lines"
            className="hero-bg-img"
          />
          <div className="hero-overlay-gradient" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content">
            <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="badge badge-emerald">
                <span className="brand-dot" />
                Proudly Made in Canada • GTA Production
              </span>
              <span className="badge badge-slate">Dual Extrusion & Converting Facilities</span>
            </div>

            <h1 className="hero-title">
              Engineered Packaging.<br />
              <span className="text-gradient">Built Around Your Needs.</span>
            </h1>

            <p className="hero-subtitle">
              Tycho Poly Inc. manufactures high-performance blown polyethylene film, custom industrial liners, and certified Greenline™ compostable and bio-sustainable packaging. Supplying enterprise distributors, converters, and food processors across North America.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => onNavigate('products')}
              >
                Explore Product Catalog
                <ArrowRight size={18} />
              </button>

              <button
                className="btn btn-secondary btn-lg"
                onClick={onOpenRFQ}
              >
                <Send size={18} />
                Request a Custom Quote
              </button>

              <button
                className="btn btn-outline-emerald btn-lg"
                onClick={() => onNavigate('calculator')}
                style={{ borderColor: 'rgba(56, 189, 248, 0.4)', color: 'var(--cyan-400)' }}
              >
                <Calculator size={18} />
                Packaging Calculator
              </button>
            </div>

            {/* Live Stats Strip */}
            <div className="hero-stats-strip">
              {companyData.stats.map((st, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-item-number font-mono">{st.value}</div>
                  <div className="stat-item-label">{st.label}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{st.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FACILITY CAPABILITIES & TECHNICAL CREDIBILITY
         ========================================================================= */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Extrusion Excellence</span>
            <h2>Integrated Dual-Plant Manufacturing Network</h2>
            <p>
              Combining advanced blown-film co-extrusion technology with high-speed converting lines across our Woodbridge and Concord facilities to fulfill complex custom orders with short lead times.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--cyan-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--cyan-400)' }}>
                <Factory size={22} />
              </div>
              <h3 style={{ marginBottom: '0.65rem' }}>Multi-Layer Blown Extrusion</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Precision gauge profiling from 0.65 mil to 8.0 mil. Advanced mono and multi-layer co-extrusion towers capable of web widths up to 120" with automated bubble stability control.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--emerald-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--emerald-400)' }}>
                <Layers size={22} />
              </div>
              <h3 style={{ marginBottom: '0.65rem' }}>High-Speed Converting Lines</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Expanded Concord converting facility dedicated to multi-lane star-sealed coreless rewinding, wicketed bakery stacking, heavy Gaylord bottom welding, and micro-perforations.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--lime-400)' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ marginBottom: '0.65rem' }}>FSSC 22000 & Lab Testing</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Rigorous testing adhering to ASTM standards for tensile strength, dart-drop puncture, tear resistance, and seal integrity. FDA & CFIA letters of non-objection for direct food contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT CATEGORY EXPLORER
         ========================================================================= */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="badge badge-emerald">Comprehensive Portfolio</span>
              <h2>Engineered Packaging Solutions</h2>
              <p style={{ maxWidth: '640px', marginTop: '0.45rem' }}>
                From lightweight agricultural sheeting to heavy-duty industrial Gaylord liners and retail barrier pouches.
              </p>
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => onNavigate('products')}
            >
              View Full Product Catalog ({productsData.length})
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3">
            {productsData.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onSelectProduct}
                onQuickRFQ={onQuickRFQ}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              className="btn btn-outline-emerald"
              onClick={() => onNavigate('products')}
            >
              Browse All 10 Packaging Lines
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GREENLINE™ SUSTAINABILITY SPOTLIGHT
         ========================================================================= */}
      <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-slate) 0%, #08111B 100%)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge badge-lime">Flagship Sustainability Brand</span>
              <h2 style={{ marginBottom: '1.25rem' }}>
                Greenline™: Environmental Responsibility Backed by Science
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.5rem', color: '#CBD5E1' }}>
                Greenline is Tycho Poly’s dedicated line of certified compostable films, innovative bio-sustainable polymers, and post-consumer recycled polyethylene—proudly manufactured in Canada.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--emerald-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={16} color="var(--emerald-400)" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Greenline BioSustainable™:</strong>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Canadian patent-pending additive triggers safe microbial degradation in landfills without releasing persistent microplastics.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={16} color="var(--lime-400)" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Greenline Compostable™:</strong>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      BPI-certified under ASTM D6400 to break down into organic compost within 90 days in municipal composting facilities.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--cyan-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={16} color="var(--cyan-400)" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>EcoLogo Certified Recycled Polyethylene:</strong>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      UL 126 certified recycled polyethylene blends that conserve fossil resources while retaining high dart-drop puncture strength.
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => onNavigate('greenline')}
                >
                  <Leaf size={16} />
                  Explore Greenline™ Hub
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={onOpenRFQ}
                >
                  Request Sustainable Film Samples
                </button>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-emerald)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                <img
                  src="/images/greenline-film.jpg"
                  alt="Greenline Biodegradable and Compostable Film Rolls"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', background: 'var(--bg-card)', padding: '1rem 1.5rem', borderRadius: '10px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Verified Standard</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--lime-400)' }}>BPI Certified • ASTM D6400</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRY SOLUTIONS MATRIX
         ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-slate">Sectors Served</span>
            <h2>Engineered for North American Industry Leaders</h2>
            <p>
              Targeted flexible film configurations aligned with the operational requirements of food processors, healthcare providers, sanitation distributors, and heavy manufacturers.
            </p>
          </div>

          <div className="grid-3">
            {industriesData.map((ind) => (
              <div key={ind.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{ind.title}</h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {ind.subtitle}
                  </p>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Compliance & Standards:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {ind.verifiedStandards.map((std, idx) => (
                        <span key={idx} className="tag-badge font-mono">{std}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1rem', width: '100%' }}
                  onClick={() => onNavigate('industries')}
                >
                  Explore Industry Solutions
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CUSTOM EXTRUSION 5-STAGE PROCESS
         ========================================================================= */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-emerald">Quality Management</span>
            <h2>Our Custom Manufacturing Process</h2>
            <p>
              From custom polymer chemistry formulation to high-volume extrusion and rigorous QC testing in our Ontario laboratories.
            </p>
          </div>

          <div className="grid-4" style={{ position: 'relative' }}>
            <div className="card" style={{ background: 'rgba(21, 31, 51, 0.7)' }}>
              <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--emerald-400)', marginBottom: '0.75rem' }}>01</div>
              <h4>Resin Formulation</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Engineered polymer blending (LDPE, LLDPE, Metallocene, PCR, or Bio-polymers) customized for puncture resistance, clarity, and slip.
              </p>
            </div>

            <div className="card" style={{ background: 'rgba(21, 31, 51, 0.7)' }}>
              <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--cyan-400)', marginBottom: '0.75rem' }}>02</div>
              <h4>Blown Extrusion</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                High-output multi-layer towers with inline optical thickness sensors guaranteeing cross-web gauge uniformity within ±3%.
              </p>
            </div>

            <div className="card" style={{ background: 'rgba(21, 31, 51, 0.7)' }}>
              <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--lime-400)', marginBottom: '0.75rem' }}>03</div>
              <h4>Treating & Converting</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Corona discharge surface treatment, precision inline slit-sealing, star-seal bottom fabrication, and coreless rewinding.
              </p>
            </div>

            <div className="card" style={{ background: 'rgba(21, 31, 51, 0.7)' }}>
              <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>04</div>
              <h4>Lab Verification & JIT</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Dart-drop impact, tear, and seal testing under FSSC 22000 protocols followed by palletization and dispatch across North America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CALCULATOR TEASER
         ========================================================================= */}
      <section className="section" style={{ background: 'linear-gradient(145deg, #0A111E 0%, #111D30 100%)', borderTop: '1px solid var(--border-medium)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-cyan" style={{ background: 'var(--cyan-subtle)', color: 'var(--cyan-400)', border: '1px solid rgba(56,189,248,0.3)' }}>
                Integrated Technical Suite
              </span>
              <h2 style={{ marginBottom: '1rem' }}>
                Engineered Packaging Calculator
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Eliminate guesswork. Our built-in calculation engine allows packaging engineers and procurement buyers to calculate roll footage, roll weight, and bag yield per 1,000 count based on precise polymer densities.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => onNavigate('calculator')}
                >
                  <Calculator size={16} />
                  Launch Full Calculator
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={onOpenRFQ}
                >
                  Submit Calculated Specs
                </button>
              </div>
            </div>

            <div style={{ background: 'var(--bg-slate)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-light)' }}>
                <span className="font-mono" style={{ color: 'var(--cyan-400)', fontWeight: 600 }}>QUICK REFERENCE BENCHMARK</span>
                <span className="tag-badge">ASTM Standards</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>1.0 Mil LDPE Film Yield:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>~30,000 sq in / lb</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Gauge to Micron Conversion:</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 600 }}>100 Gauge = 25.4 µm</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Standard Extrusion Densities:</span>
                  <span className="font-mono" style={{ color: 'var(--lime-400)', fontWeight: 600 }}>0.920 – 0.950 g/cm³</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', textAlign: 'right' }}>
                <button
                  className="btn btn-outline-emerald btn-sm"
                  onClick={() => onNavigate('calculator')}
                >
                  Open Roll & Bag Tools <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DUAL FACILITY SHOWCASE
         ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-slate">Canadian Infrastructure</span>
            <h2>Two Strategic Ontario Manufacturing Facilities</h2>
            <p>
              Located in the Greater Toronto Area industrial corridor to streamline supply chains and enable rapid fulfillment across Canada and the United States.
            </p>
          </div>

          <div className="grid-2">
            {companyData.facilities.map((fac) => (
              <div key={fac.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span className="badge badge-emerald">{fac.type}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>GTA Hub</span>
                  </div>

                  <h3 style={{ marginBottom: '0.65rem' }}>{fac.name}</h3>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 500, marginBottom: '0.5rem' }}>
                    {fac.address}, {fac.city}, {fac.province} {fac.postalCode}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    Direct: {fac.phone} • {fac.hours}
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Plant Operations:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                      {fac.operations.map((op, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)' }}>
                          <CheckCircle2 size={14} color="var(--cyan-400)" />
                          <span>{op}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <a
                    href={fac.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flexGrow: 1 }}
                  >
                    View Map Coordinates
                  </a>
                  <a
                    href={`tel:${fac.phone.replace(/[^0-9]/g, '')}`}
                    className="btn btn-primary btn-sm"
                  >
                    Call Facility
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL RFQ CONVERSION BANNER
         ========================================================================= */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="badge badge-emerald">Direct Factory Engagement</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Ready to Elevate Your Packaging Performance?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#CBD5E1' }}>
            Whether you require high-volume blown rollstock, custom food packaging, or certified Greenline™ compostable solutions, Tycho Poly is ready to assist.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={onOpenRFQ}
            >
              <Send size={18} />
              Start an Engineering RFQ
            </button>
            <a
              href="tel:9052643475"
              className="btn btn-secondary btn-lg"
            >
              Call Our Team: (905) 264-3475
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
