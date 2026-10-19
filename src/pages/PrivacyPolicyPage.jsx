import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-slate">Legal Compliance</span>
            <h1>Privacy Policy</h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Last Updated: 2026 • Tycho Poly Inc., Woodbridge & Concord, Ontario, Canada
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.7' }}>
            <div>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>1. Overview & Information We Collect</h3>
              <p>
                Tycho Poly Inc. ("Tycho Poly", "we", "our") respects the privacy of our business clients, website visitors, and employment applicants. We collect technical specifications, corporate contact information (such as name, email address, phone number, and company name), and delivery details submitted through our Request for Quote (RFQ) and contact forms.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>2. How We Use Your Information</h3>
              <p>
                Information collected is utilized strictly to provide custom packaging quotations, process purchase orders, coordinate freight delivery, respond to inquiries, evaluate employment applications, and improve our manufacturing services. We do not sell, rent, or trade your personal or corporate data to third parties.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>3. Data Security & Storage</h3>
              <p>
                We employ industry-standard administrative, physical, and technical security safeguards to protect information submitted to Tycho Poly. All data transmission across our website is encrypted via SSL/TLS.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>4. Canadian Privacy Laws (PIPEDA)</h3>
              <p>
                Tycho Poly adheres to the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario privacy legislation. You have the right to access, update, or request the deletion of your personal information held in our records.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>5. Contact Our Privacy Officer</h3>
              <p>
                If you have questions or concerns regarding our privacy practices, please contact us at:<br />
                <strong style={{ color: '#FFFFFF' }}>Tycho Poly Inc.</strong><br />
                Attention: Privacy Officer<br />
                101 Hanlan Rd, Woodbridge, ON L4L 3P5, Canada<br />
                Email: <a href="mailto:info@tychopoly.com" style={{ color: 'var(--emerald-400)' }}>info@tychopoly.com</a><br />
                Phone: (905) 264-3475
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
