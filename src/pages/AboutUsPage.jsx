import React from 'react';
import { ShieldCheck, Award, Building2, MapPin, CheckCircle2, Send, Clock, AlertCircle, ChevronRight, Factory } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function AboutUsPage({ onNavigate, onOpenRFQ }) {
  return (
    <div className="about-page">
      {/* Breadcrumb & Hero */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            <button onClick={() => onNavigate('/')} style={{ color: 'var(--text-muted)' }}>Home</button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>About Us</span>
          </nav>

          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-emerald">Canadian Blown Film Manufacturer</span>
            <h1>About Tycho Poly: Advanced Polyethylene Solutions for Every Industry</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              Founded in Canada in 2013 by directors with over 30 years of expertise in the blown film industry, Tycho Poly has built its reputation as a trusted supplier of polyethylene film solutions tailored for diverse industries across North America.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Heritage */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem', marginBottom: '4rem' }}>
            <div>
              <span className="badge badge-lime">Our Story</span>
              <h2>Built on Standards. Driven by Responsibility.</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#E2E8F0', marginTop: '1rem', marginBottom: '1.25rem' }}>
                What began as a single-facility operation in Woodbridge, Ontario, has evolved into one of Canada’s reliable manufacturers of high-performance polyethylene films—driven by innovation, quality, and environmental responsibility.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                With our head office and main production facility in Woodbridge, Ontario, and a newly acquired site in the Concord region, Tycho Poly is expanding its footprint to better serve a growing demand across North America. This expansion not only increases our capacity—it strengthens our mission to lead the industry with advanced, sustainable film solutions.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                We serve a broad range of sectors, including food packaging, healthcare, sanitation, industrial, and retail, offering both standard and custom-engineered products. Our strength lies in our flexible production process, short lead times, and unmatched ability to fulfill complex specifications without compromising quality or compliance.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={onOpenRFQ}>
                  <Send size={16} />
                  Connect With Our Leadership
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/certifications/')}>
                  View Our Certifications
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/facility-operations.jpg"
                alt="Tycho Poly Canadian Manufacturing Operations"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Setting New Standards & Values */}
          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Quality Assurance</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Implementing some of the latest technologies in the blown plastic industry, our focus is on production efficiency and accountability while no sacrifice is made on quality.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Flexible Production</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Our agile production lines allow us unprecedented abilities to produce custom orders as well as industry-standard items at competitive prices with short lead times.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dedicated Team</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                At Tycho Poly, our team is dedicated to continuous improvement and is committed towards providing full technical and logistical support to our distributors and their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-slate">Production Footprint</span>
            <h2>Two Strategic Ontario Locations</h2>
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
                  View Coordinates on Google Maps
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
