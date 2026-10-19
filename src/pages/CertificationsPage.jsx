import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Send, AlertCircle, ChevronRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function CertificationsPage({ onNavigate, onOpenRFQ }) {
  return (
    <div className="certifications-page">
      {/* Breadcrumb & Hero */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            <button onClick={() => onNavigate('/')} style={{ color: 'var(--text-muted)' }}>Home</button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Certifications & Quality Assurance</span>
          </nav>

          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-emerald">Verified Compliance & Quality</span>
            <h1>Our Quality Certifications & Standards</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              Tycho Poly’s commitment to safety, hygiene, and manufacturing reliability is backed by rigorous third-party international standards, covering food-contact packaging, sustainable biopolymers, and recycled resin accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Verified Accreditations</span>
            <h2>International Standards & Safety Frameworks</h2>
            <p>
              Every production lot extruded in our Woodbridge and Concord facilities is monitored under stringent quality assurance protocols.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            {companyData.certifications.map((cert, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge badge-emerald">{cert.category}</span>
                    <span style={{ fontSize: '0.78rem', color: cert.status.includes('Transition') ? 'var(--lime-400)' : 'var(--emerald-400)', fontWeight: 600 }}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{cert.name}</h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--cyan-400)', marginBottom: '1rem' }}>
                    Issuing Authority: {cert.issuer}
                  </div>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                    {cert.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={15} color="var(--emerald-400)" />
                  <span>Audited & Documented Compliance</span>
                </div>
              </div>
            ))}
          </div>

          {/* Laboratory Testing Capabilities */}
          <div style={{ background: 'var(--bg-slate)', padding: '2.5rem', borderRadius: '14px', border: '1px solid var(--border-medium)', marginBottom: '3.5rem' }}>
            <h3 style={{ marginBottom: '1.25rem' }}>In-House ASTM Laboratory Testing Protocols</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              We conduct routine quality control tests on every extrusion run to provide Certificate of Analysis (COA) documentation for your quality audits:
            </p>

            <div className="grid-4" style={{ fontSize: '0.88rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--cyan-400)' }}>ASTM D882</strong>
                <div style={{ color: '#FFFFFF', marginTop: '0.25rem', fontWeight: 500 }}>Tensile & Elongation</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Machine & transverse direction tensile limit tests</div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--emerald-400)' }}>ASTM D1709</strong>
                <div style={{ color: '#FFFFFF', marginTop: '0.25rem', fontWeight: 500 }}>Dart-Drop Impact</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Puncture resistance testing for heavy bag drop integrity</div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--lime-400)' }}>ASTM D1922</strong>
                <div style={{ color: '#FFFFFF', marginTop: '0.25rem', fontWeight: 500 }}>Elmendorf Tear Strength</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Tear propagation resistance across web edges</div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: '8px' }}>
                <strong style={{ color: '#FFFFFF' }}>ASTM F88</strong>
                <div style={{ color: '#FFFFFF', marginTop: '0.25rem', fontWeight: 500 }}>Heat Seal Strength</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Hermetic bottom weld and side seal burst testing</div>
              </div>
            </div>
          </div>

          {/* ISO Transparency Notice */}
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1.5rem 2rem', borderRadius: '10px', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <AlertCircle size={28} color="var(--cyan-400)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: '#FFFFFF' }}>Audit & Transition Disclosure:</strong> Tycho Poly Inc. maintains strict procedural quality management. All FSSC 22000, FDA 21 CFR, CFIA, EcoLogo (UL 126), and BPI (ASTM D6400) certifications are actively maintained and documented. Historical ISO 9001 certifications are undergoing active transition review to current frameworks.
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="btn btn-primary btn-lg" onClick={onOpenRFQ}>
              <Send size={16} />
              Request Certification Documents & Product Spec Sheets
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
