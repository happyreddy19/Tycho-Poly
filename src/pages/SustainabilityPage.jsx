import React, { useState } from 'react';
import { Leaf, ShieldCheck, CheckCircle2, AlertCircle, HelpCircle, Send, ArrowRight, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { sustainabilityData } from '../data/sustainabilityData';

export default function SustainabilityPage({ onNavigate, onOpenRFQ }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="sustainability-page">
      {/* Breadcrumb & Hero */}
      <section className="section-tight" style={{ background: 'linear-gradient(180deg, #06111C 0%, #0A1C2C 100%)', borderBottom: '1px solid var(--border-emerald)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            <button onClick={() => onNavigate('/')} style={{ color: 'var(--text-muted)' }}>Home</button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Greenline™ Sustainability</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">
                <Leaf size={14} />
                Committed to Environmental Responsibility
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.15' }}>
                Greenline™: Sustainable Polyethylene & Compostable Packaging
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '1rem', lineHeight: '1.6' }}>
                Greenline is Tycho Poly’s dedicated line of environmentally responsible film products. Developed to support sustainable practices across industries, the Greenline brand reflects our ongoing commitment to reducing environmental impact through smart material choices and responsible manufacturing—all proudly made in Canada.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={onOpenRFQ}>
                  <Send size={16} />
                  Request Sustainable Film Samples
                </button>
                <a href="#comparison" className="btn btn-secondary">
                  Compare Product Options
                </a>
              </div>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-emerald)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img
                src="/images/greenline-film.jpg"
                alt="Greenline Biodegradable and Compostable Film Rolls"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Deep-Dive (Original Content from Home & Greenline) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Three Circular Options</span>
            <h2>Three Practical Sustainable Pathways</h2>
            <p>
              We provide certified compostable films, innovative bio-sustainable polymers, and post-consumer recycled polyethylene.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sustainabilityData.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="card"
                style={{
                  background: 'var(--bg-slate)',
                  border: `1px solid ${pillar.color === 'emerald' ? 'var(--border-emerald)' : 'var(--border-medium)'}`,
                  padding: '2.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <span className="badge badge-emerald">{pillar.badge}</span>
                    <h2 style={{ fontSize: '1.85rem' }}>{pillar.title}</h2>
                    <div style={{ fontSize: '1.05rem', color: 'var(--lime-400)', fontWeight: 500, marginTop: '0.25rem' }}>
                      {pillar.tagline}
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-emerald btn-sm"
                    onClick={onOpenRFQ}
                  >
                    Quote This Grade
                  </button>
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.65', color: '#E2E8F0', marginBottom: '1.75rem' }}>
                  {pillar.overview}
                </p>

                <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ color: 'var(--cyan-400)', marginBottom: '0.75rem' }}>Performance Characteristics:</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                      {pillar.keyFeatures.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={16} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--lime-400)', marginBottom: '0.75rem' }}>Applications & End-of-Life:</h4>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      <strong style={{ color: '#FFFFFF' }}>Target Uses:</strong> {pillar.idealUseCases.join('; ')}.
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid var(--border-light)' }}>
                      <strong style={{ color: 'var(--cyan-400)' }}>End-of-Life Guidance:</strong> {pillar.endOfLife}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-dim)', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <AlertCircle size={15} color="var(--text-dim)" />
                  <span>{pillar.disclaimer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="section" id="comparison" style={{ background: 'var(--bg-slate)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-cyan">Technical Comparison</span>
            <h2>Product Comparison Matrix</h2>
            <p>
              Compare resin chemistry, end-of-life behavior, and testing standards across our three sustainable film technologies.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', background: 'rgba(0,0,0,0.3)' }}>
                  <th style={{ padding: '1.1rem 1.25rem', color: '#FFFFFF' }}>Property / Criterion</th>
                  <th style={{ padding: '1.1rem 1.25rem', color: 'var(--emerald-400)' }}>Greenline BioSustainable™</th>
                  <th style={{ padding: '1.1rem 1.25rem', color: 'var(--lime-400)' }}>Greenline Compostable™</th>
                  <th style={{ padding: '1.1rem 1.25rem', color: 'var(--cyan-400)' }}>Recycled PE (PCR)</th>
                </tr>
              </thead>
              <tbody>
                {sustainabilityData.comparisonTable.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: '#FFFFFF' }}>{row.property}</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>{row.bio}</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>{row.comp}</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>{row.recyc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="section-header text-center">
            <span className="badge badge-lime">Frequently Asked Questions</span>
            <h2>Sustainability Guidance & FAQs</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sustainabilityData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--emerald-400)" /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="btn btn-primary btn-lg" onClick={onOpenRFQ}>
              <Send size={18} />
              Request a Sustainable Packaging Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
