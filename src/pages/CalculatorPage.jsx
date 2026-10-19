import React from 'react';
import { Calculator as CalcIcon, Send, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function CalculatorPage({ onApplyToRFQ, onOpenRFQ }) {
  return (
    <div className="calculator-page">
      {/* Banner */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-cyan" style={{ background: 'var(--cyan-subtle)', color: 'var(--cyan-400)', border: '1px solid rgba(56,189,248,0.3)' }}>
              <CalcIcon size={14} />
              Integrated Technical Suite
            </span>
            <h1>Engineered Packaging Calculator</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              Designed for packaging converters, procurement directors, and extrusion engineers. Calculate roll weights, continuous footage, bag yield per 1,000 count, and convert thicknesses across Mil, Gauge, and Micron standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="section">
        <div className="container">
          <Calculator onApplyToRFQ={onApplyToRFQ} />

          {/* Formula Documentation & Methodology */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-slate)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
            <h3 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle size={20} color="var(--cyan-400)" />
              Extrusion Formula Methodology & Assumptions
            </h3>

            <div className="grid-3" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              <div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.45rem' }}>1. Roll Weight & Footage</h4>
                <p>
                  Calculated based on film volume multiplied by polymer specific density. Standard polyethylene uses nominal density: LDPE (0.920 g/cm³), LLDPE (0.925 g/cm³), HDPE (0.950 g/cm³).
                </p>
                <div className="font-mono" style={{ marginTop: '0.5rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--cyan-400)' }}>
                  Weight (lbs) = W(in) × L(ft) × Thk(mil) × 0.0004335 × (Density / 0.92) + Core
                </div>
              </div>

              <div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.45rem' }}>2. Bag Weight & Yield</h4>
                <p>
                  Poly bags consist of 2 walls (front + back). Gusseted bags expand the effective web width by (W + Gusset). Resulting weight per 1,000 bags (lbs/M) determines material utilization.
                </p>
                <div className="font-mono" style={{ marginTop: '0.5rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--lime-400)' }}>
                  lbs/M = 2 × (W + G) × L × (Thk / 1000) × Density(lbs/cu.in) × 1,000
                </div>
              </div>

              <div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.45rem' }}>3. Gauge & Mil Conversion</h4>
                <p>
                  1 mil is defined as 0.001 inches. 100 gauge equals 1.0 mil. In metric units, 1 mil equals precisely 25.4 microns (µm).
                </p>
                <div className="font-mono" style={{ marginTop: '0.5rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: '#FFFFFF' }}>
                  1 Mil = 100 Gauge = 25.4 µm
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                * Ready to verify production feasibility and request volume pricing based on your calculations?
              </div>
              <button className="btn btn-primary btn-sm" onClick={onOpenRFQ}>
                <Send size={15} />
                Transfer to Direct Engineering Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
