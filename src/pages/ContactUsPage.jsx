import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactUsPage({ onNavigate, onOpenRFQ }) {
  const [inquiryType, setInquiryType] = useState('Product Information');
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    facilityChoice: 'Woodbridge (Head Office)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="contact-page">
      {/* Breadcrumb & Hero */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            <button onClick={() => onNavigate('/')} style={{ color: 'var(--text-muted)' }}>Home</button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Contact Us</span>
          </nav>

          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-emerald">Direct Factory Access</span>
            <h1>Let's Start a Conversation</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              Our team of extrusion experts is ready to answer your technical questions, schedule facility visits, and provide custom volume packaging quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Strip (Original Site Content) */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ marginBottom: '4rem' }}>
            {companyData.facilities.map((fac) => (
              <div key={fac.id} className="card" style={{ background: 'var(--bg-slate)', border: '1px solid var(--border-medium)', padding: '2rem' }}>
                <span className="badge badge-emerald">{fac.type}</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{fac.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <MapPin size={18} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#FFFFFF' }}>{fac.address}, {fac.city}, {fac.province} {fac.postalCode}, Canada</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="var(--cyan-400)" />
                    <a href={`tel:${fac.phone.replace(/[^0-9]/g, '')}`} style={{ color: 'var(--cyan-400)', fontWeight: 500 }}>
                      {fac.phone}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Mail size={16} color="var(--lime-400)" />
                    <a href={`mailto:${fac.email}`} style={{ color: '#FFFFFF' }}>
                      {fac.email}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                    <Clock size={15} />
                    <span>{fac.hours}</span>
                  </div>
                </div>

                <a
                  href={fac.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  View Facility on Google Maps
                </a>
              </div>
            ))}
          </div>

          {/* Form & RFQ Pathway */}
          <div className="grid-2" style={{ gap: '3.5rem' }}>
            <div>
              <span className="badge badge-cyan">Direct Factory Inquiry</span>
              <h2>Send Our Engineering Team a Message</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.75rem' }}>
                Located in the heart of Woodbridge's industrial district, our state-of-the-art facility houses manufacturing, research, and business operations. To meet growing demand, our expanded Concord plant is fully equipped for high-volume blown film and custom converting.
              </p>

              {!formSent ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Contact Purpose</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {['Product Information', 'Pricing & Quotes', 'Facility Tour', 'Distributor Opportunities'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`filter-chip ${inquiryType === t ? 'active' : ''}`}
                          onClick={() => setInquiryType(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.smith@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="National Packaging Supply"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(905) 264-3475"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Your Message or Packaging Requirements</label>
                    <textarea
                      rows={4}
                      required
                      className="form-textarea"
                      placeholder="Please include details such as film dimensions, gauge, resin type, or estimated monthly usage..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={16} />
                    Send Message to Factory
                  </button>
                </form>
              ) : (
                <div style={{ background: 'var(--bg-slate)', padding: '2rem', borderRadius: '10px', border: '1px solid var(--border-emerald)', textAlign: 'center' }}>
                  <CheckCircle2 size={36} color="var(--emerald-400)" style={{ margin: '0 auto 1rem auto' }} />
                  <h3>Message Dispatched, {formData.name}!</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                    Your inquiry has been routed to our Woodbridge engineering and sales desk. A team member will respond within one business day.
                  </p>
                  <button className="btn btn-secondary btn-sm" onClick={() => setFormSent(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Direct RFQ Callout Panel */}
            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '14px', border: '1px solid var(--border-medium)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-lime">Direct Factory RFQ</span>
                <h3 style={{ fontSize: '1.65rem', marginBottom: '1rem' }}>
                  Ready to Elevate Your Packaging Solutions?
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Whether you need standard products or custom solutions, our team is ready to assist you. Contact us today to discuss how Tycho Poly Inc. can meet your specific requirements.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#FFFFFF' }}>
                    <ShieldCheck size={16} color="var(--emerald-400)" />
                    <span>Product Information & Technical TDS Sheets</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#FFFFFF' }}>
                    <ShieldCheck size={16} color="var(--emerald-400)" />
                    <span>Distributor Volume Tier Pricing & Quotes</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#FFFFFF' }}>
                    <ShieldCheck size={16} color="var(--emerald-400)" />
                    <span>Short Lead Times & GTA Fast Freight</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                  onClick={onOpenRFQ}
                >
                  <Send size={18} />
                  Launch Multi-Step RFQ Configurator
                </button>
                <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.84rem', color: 'var(--text-dim)' }}>
                  Call direct: <a href="tel:9052643475" style={{ color: 'var(--cyan-400)', fontWeight: 600 }}>(905) 264-3475</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
