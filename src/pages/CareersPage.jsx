import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight, Send, X, FileText, Upload } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '1-3 years',
    resumeFileName: '',
    coverNote: ''
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplying(true);
    setApplicationSubmitted(false);
  };

  const handleFakeFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setApplicantData({ ...applicantData, resumeFileName: e.target.files[0].name });
    }
  };

  const handleAppSubmit = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="careers-page">
      {/* Banner */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-emerald">Grow Your Career</span>
            <h1>Join North America's Advanced Extrusion Team</h1>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
              At Tycho Poly, we combine modern manufacturing machinery with a culture founded on safety, accountability, and continuous technical growth.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Values */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-lime">Why Work at Tycho Poly</span>
            <h2>A Safe, Rewarding Manufacturing Environment</h2>
            <p>
              We invest in our technicians and line operators with hands-on machinery training, competitive compensation, and long-term career pathways.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '4rem' }}>
            <div className="card">
              <h4 style={{ color: 'var(--emerald-400)', marginBottom: '0.5rem' }}>Safety First</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Strict adherence to Ontario industrial safety standards, clean modern plant floors, and full PPE allowances.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: 'var(--cyan-400)', marginBottom: '0.5rem' }}>Competitive Pay & Benefits</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Industry-competitive hourly rates, shift premiums, comprehensive health benefits, and overtime opportunities.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: 'var(--lime-400)', marginBottom: '0.5rem' }}>Modern Machinery</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Operate high-output blown extrusion towers and automated converting lines equipped with advanced touchscreen controls.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>GTA Locations</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Accessible facilities located in Woodbridge and Concord with nearby transit connections and free employee parking.
              </p>
            </div>
          </div>

          {/* Current Open Positions */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h2>Current Opportunities</h2>
                <p style={{ fontSize: '0.95rem' }}>Select an open position to review requirements and apply directly.</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {companyData.careers.map((job) => (
                <div
                  key={job.id}
                  className="card"
                  style={{
                    background: 'var(--bg-slate)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    padding: '2rem'
                  }}
                >
                  <div style={{ maxWidth: '720px' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-emerald" style={{ marginBottom: 0 }}>{job.department}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--cyan-400)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {job.description}
                    </p>

                    <div>
                      <strong style={{ fontSize: '0.82rem', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Key Requirements:
                      </strong>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.4rem', fontSize: '0.85rem' }}>
                        {job.requirements.map((req, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={15} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleApplyClick(job)}
                    >
                      Apply for Position
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="modal-overlay" onClick={() => setIsApplying(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsApplying(false)}>
              <X size={22} />
            </button>

            {!applicationSubmitted ? (
              <div>
                <span className="badge badge-emerald">Job Application</span>
                <h2>Apply for: {selectedJob.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '1.5rem' }}>
                  Location: {selectedJob.location} • {selectedJob.department}
                </p>

                <form onSubmit={handleAppSubmit}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        value={applicantData.name}
                        onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        placeholder="j.doe@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        placeholder="(416) 555-0199"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Years of Manufacturing Experience</label>
                      <select
                        className="form-select"
                        value={applicantData.experience}
                        onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                      >
                        <option value="Entry Level (< 1 year)">Entry Level (&lt; 1 year)</option>
                        <option value="1-3 years">1-3 years in plastics/manufacturing</option>
                        <option value="3-5 years">3-5 years (Extrusion line experience)</option>
                        <option value="5+ years">5+ years (Senior / Lead Operator)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Resume / CV Attachment</label>
                    <div style={{ border: '2px dashed var(--border-medium)', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
                      <Upload size={24} color="var(--cyan-400)" style={{ margin: '0 auto 0.5rem auto' }} />
                      <div style={{ fontSize: '0.88rem', color: '#FFFFFF', marginBottom: '0.35rem' }}>
                        {applicantData.resumeFileName ? applicantData.resumeFileName : 'Click to select PDF or Word Document'}
                      </div>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFakeFileUpload}
                        style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Brief Note to Hiring Manager (Optional)</label>
                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="Briefly describe your experience with blown film machinery, extruder dies, or shift work..."
                      value={applicantData.coverNote}
                      onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsApplying(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <Send size={16} />
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--emerald-subtle)', border: '2px solid var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 size={32} color="var(--emerald-400)" />
                </div>
                <h3>Application Received, {applicantData.name}!</h3>
                <p style={{ maxWidth: '440px', margin: '0.75rem auto 1.5rem auto', color: 'var(--text-muted)' }}>
                  Your application for <strong>{selectedJob.title}</strong> has been logged by Tycho Poly Human Resources. Qualified candidates will be contacted for an initial screening.
                </p>
                <button className="btn btn-secondary" onClick={() => setIsApplying(false)}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
