import React from 'react';
import { Factory, Layers, Sparkles, ShieldCheck, MapPin, CheckCircle2, Send, Cpu, Gauge } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function CapabilitiesPage({ onOpenRFQ }) {
  return (
    <div className="capabilities-page">
      {/* Banner */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Extrusion & Converting Infrastructure</span>
              <h1>State-of-the-Art Canadian Manufacturing</h1>
              <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
                Combining multi-layer blown film extrusion towers with dedicated automated converting lines across our Woodbridge and Concord facilities.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <button className="btn btn-primary" onClick={onOpenRFQ}>
                  <Send size={16} />
                  Request Facility Production Schedule
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: '0 16px 36px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/facility-operations.jpg"
                alt="Tycho Poly Manufacturing Facility"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Technical Competencies</span>
            <h2>Integrated Manufacturing Lines</h2>
            <p>
              Every stage of production is controlled under strict quality management to ensure consistent film performance and tight gauge tolerances.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--cyan-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--cyan-400)' }}>
                <Cpu size={24} />
              </div>
              <h3>Blown Film Co-Extrusion</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                State-of-the-art mono and multi-layer blown film extruders with internal bubble cooling (IBC) and capacitive thickness measurement systems that maintain gauge uniformity across the entire web.
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--cyan-400)', fontFamily: 'var(--font-mono)' }}>
                Width: Up to 120" | Mil: 0.65 - 8.0
              </div>
            </div>

            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--emerald-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--emerald-400)' }}>
                <Layers size={24} />
              </div>
              <h3>High-Speed Bag Converting</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                Dedicated converting lines in our Concord plant running automated star-seal coreless can liners, heavy-duty bottom weld Gaylord bags, side-weld wicketed bags, and perforated rolls.
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--emerald-400)', fontFamily: 'var(--font-mono)' }}>
                Multi-lane Coreless & Wicket Lines
              </div>
            </div>

            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--lime-400)' }}>
                <Sparkles size={24} />
              </div>
              <h3>Surface Treating & Inline Printing</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                High-output electronic corona discharge treating to reach exact dyne levels for ink adhesion. Inline flexographic printing from 1 to 6 colors for branding, warning labels, and biohazard markings.
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--lime-400)', fontFamily: 'var(--font-mono)' }}>
                Dyne Levels 38 - 44+ Verified
              </div>
            </div>

            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: '#FFFFFF' }}>
                <Gauge size={24} />
              </div>
              <h3>Resin Compounding & Additives</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                Custom polymer blending including Metallocene LLDPE for high tear resistance, UV inhibitors (UVI) for outdoor pallet storage, slip and anti-block masterbatches, and anti-static compounds.
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: '#CBD5E1', fontFamily: 'var(--font-mono)' }}>
                Custom Formulations On-Demand
              </div>
            </div>

            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--emerald-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--emerald-400)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3>Quality Lab & ASTM Verification</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                In-house testing facility measuring tensile strength (ASTM D882), dart-drop impact resistance (ASTM D1709), tear resistance (ASTM D1922), and seal integrity under FSSC 22000 hygiene standards.
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--emerald-400)', fontFamily: 'var(--font-mono)' }}>
                Certificate of Analysis (COA) per Lot
              </div>
            </div>

            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--cyan-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--cyan-400)' }}>
                <Factory size={24} />
              </div>
              <h3>Warehousing & JIT Logistics</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                Dual plant warehousing in Woodbridge and Concord with dedicated shipping docks, real-time lot traceability, and just-in-time (JIT) replenishment programs for packaging distributors.
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--cyan-400)', fontFamily: 'var(--font-mono)' }}>
                North American Freight Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="section" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-slate">Production Footprint</span>
            <h2>Our Two Ontario Facilities</h2>
            <p>
              Strategically placed in the Greater Toronto Area to ensure reliable supply chain security and flexible production scheduling.
            </p>
          </div>

          <div className="grid-2">
            {companyData.facilities.map((fac) => (
              <div key={fac.id} className="card">
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
                  <MapPin size={18} color="var(--emerald-400)" />
                  <span className="badge badge-emerald">{fac.type}</span>
                </div>
                <h3>{fac.name}</h3>
                <div style={{ fontSize: '0.95rem', color: '#FFFFFF', marginTop: '0.35rem' }}>
                  {fac.address}, {fac.city}, {fac.province} {fac.postalCode}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Operating Hours: {fac.hours} • Phone: {fac.phone}
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Core Equipment & Operations:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem' }}>
                    {fac.operations.map((op, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={14} color="var(--cyan-400)" />
                        <span>{op}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
