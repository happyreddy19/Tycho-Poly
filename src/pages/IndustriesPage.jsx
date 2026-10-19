import React from 'react';
import { Utensils, Activity, Trash2, Factory, ShoppingBag, ShieldCheck, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { productsData } from '../data/productsData';

export default function IndustriesPage({ onNavigate, onSelectProduct, onOpenRFQ }) {
  const iconMap = {
    Utensils: <Utensils size={26} color="var(--emerald-400)" />,
    Activity: <Activity size={26} color="var(--cyan-400)" />,
    Trash2: <Trash2 size={26} color="var(--lime-400)" />,
    Factory: <Factory size={26} color="var(--emerald-400)" />,
    ShoppingBag: <ShoppingBag size={26} color="var(--cyan-400)" />
  };

  return (
    <div className="industries-page">
      {/* Banner */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-emerald">Sector Tailored Engineering</span>
            <h1>Industry-Specific Flexible Packaging Solutions</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              We engineer custom blown-film and bag converting configurations to solve the distinct barrier, compliance, and automated line-speed demands of modern enterprise sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="card"
                style={{ background: 'var(--bg-slate)', border: '1px solid var(--border-medium)', padding: '2.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                      {iconMap[ind.icon] || <Factory size={26} color="var(--emerald-400)" />}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '1.85rem' }}>{ind.title}</h2>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {ind.subtitle}
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary btn-sm" onClick={onOpenRFQ}>
                    <Send size={14} />
                    Quote This Industry
                  </button>
                </div>

                <div className="grid-2" style={{ marginBottom: '2rem' }}>
                  <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <h4 style={{ color: '#EF4444', marginBottom: '0.75rem' }}>Operational Challenges Addressed:</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                      {ind.challenges.map((ch, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: '#EF4444' }}>✕</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <h4 style={{ color: 'var(--emerald-400)', marginBottom: '0.75rem' }}>Tycho Poly Engineered Solutions:</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                      {ind.solutions.map((sol, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#FFFFFF' }}>
                          <CheckCircle2 size={15} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended Products Strip */}
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
                    Recommended Product Lines:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {ind.recommendedProducts.map((prodId) => {
                      const prod = productsData.find((p) => p.id === prodId || p.slug === prodId);
                      if (!prod) return null;
                      return (
                        <button
                          key={prodId}
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '0.82rem' }}
                          onClick={() => {
                            if (onSelectProduct) onSelectProduct(prod);
                          }}
                        >
                          {prod.name}
                          <ArrowRight size={13} color="var(--emerald-400)" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
