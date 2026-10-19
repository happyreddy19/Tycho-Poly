import React from 'react';
import { ShieldCheck, Award, Building2, MapPin, CheckCircle2, Send, Clock, AlertCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function AboutPage({ onOpenRFQ }) {
  return (
    <div className="about-page">
      {/* Banner */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-emerald">Canadian Blown Film Manufacturer</span>
            <h1>Engineering Excellence in Flexible Polyethylene Packaging</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              Founded in Canada in {companyData.foundedYear} by industry leaders with over {companyData.experienceYears} of expertise in blown-film extrusion, Tycho Poly Inc. is committed to quality, rapid fulfillment, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge badge-lime">Our Heritage</span>
              <h2 style={{ marginBottom: '1.25rem' }}>Founded on Quality. Driven by Responsibility.</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#E2E8F0', marginBottom: '1.25rem' }}>
                What began as a single-facility extrusion operation in Woodbridge, Ontario, has evolved into one of Canada's trusted manufacturers of high-performance polyethylene and sustainable films.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                With our primary extrusion plant in Woodbridge and a newly acquired, high-speed converting facility in Concord, Tycho Poly has expanded its footprint to better serve distributors, converters, and commercial manufacturers across Canada and the United States.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--emerald-400)" />
                  <span style={{ color: '#FFFFFF', fontWeight: 500 }}>30+ Years Industry Extrusion Leadership</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--emerald-400)" />
                  <span style={{ color: '#FFFFFF', fontWeight: 500 }}>FSSC 22000 Certified Food Safety System</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--emerald-400)" />
                  <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Proudly Canadian Owned & Operated</span>
                </div>
              </div>

              <button className="btn btn-primary" onClick={onOpenRFQ}>
                <Send size={16} />
                Connect With Our Team
              </button>
            </div>

            <div style={{ background: 'var(--bg-slate)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>Core Manufacturing Values</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ color: 'var(--cyan-400)', marginBottom: '0.35rem' }}>1. Uncompromising Quality</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Implementing modern blown extrusion controls and accountability at every stage so that no sacrifice is made on tensile, puncture, or optical properties.
                  </p>
                </div>

                <div>
                  <h4 style={{ color: 'var(--emerald-400)', marginBottom: '0.35rem' }}>2. Flexible Production & Short Lead Times</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Our production lines are engineered for agile changeovers, enabling us to fulfill both high-volume runs and specialized custom dimensions rapidly.
                  </p>
                </div>

                <div>
                  <h4 style={{ color: 'var(--lime-400)', marginBottom: '0.35rem' }}>3. Environmental Responsibility</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Pioneering practical circular packaging with our Greenline™ family of BPI-certified compostable films, patent-pending BioSustainable bags, and recycled PE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Certifications Section */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-emerald">Verified Standards</span>
            <h2>Quality Certifications & Compliance Framework</h2>
            <p>
              Our production facilities and resin materials operate under strict, verified international regulatory and hygiene frameworks.
            </p>
          </div>

          <div className="grid-3">
            {companyData.certifications.map((cert, idx) => (
              <div key={idx} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-emerald">{cert.category}</span>
                  <span style={{ fontSize: '0.75rem', color: cert.status.includes('Transition') ? 'var(--lime-400)' : 'var(--emerald-400)', fontWeight: 600 }}>
                    {cert.status}
                  </span>
                </div>
                <h3>{cert.name}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--cyan-400)', marginTop: '0.2rem', marginBottom: '0.75rem' }}>
                  Issued by: {cert.issuer}
                </div>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Assurance Transparency Note */}
          <div style={{ marginTop: '2.5rem', background: 'rgba(255,255,255,0.04)', padding: '1.25rem 1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <AlertCircle size={24} color="var(--cyan-400)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: '#FFFFFF' }}>Certification Transparency:</strong> Tycho Poly prioritizes verifiable compliance. All FSSC 22000, FDA, CFIA, BPI, and EcoLogo credentials are fully documented. Historical ISO 9001 standards are undergoing formal audit and transition to current frameworks.
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Addresses */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-slate">Facility Footprint</span>
            <h2>Canadian Manufacturing Headquarters</h2>
          </div>

          <div className="grid-2">
            {companyData.facilities.map((fac) => (
              <div key={fac.id} className="card">
                <span className="badge badge-emerald">{fac.type}</span>
                <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{fac.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                  <MapPin size={16} color="var(--emerald-400)" />
                  {fac.address}, {fac.city}, {fac.province} {fac.postalCode}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  Direct: {fac.phone} • {fac.email}
                </div>
                <a
                  href={fac.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  View Facility On Map
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
