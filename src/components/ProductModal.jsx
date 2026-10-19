import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, FileText, Send, Sparkles } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onSelectForRFQ }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close product spec dialog">
          <X size={22} />
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
            <span className="badge badge-emerald">{product.category}</span>
            <span className="tag-badge tag-badge-green">{product.badge}</span>
          </div>
          <h2>{product.name}</h2>
          <p style={{ marginTop: '0.45rem', fontSize: '1rem', color: '#CBD5E1' }}>
            {product.shortDesc}
          </p>
        </div>

        {/* Configurations & Materials Grid */}
        <div className="grid-2" style={{ marginBottom: '1.75rem' }}>
          <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--cyan-400)' }}>
              <FileText size={18} />
              Available Formats
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
              {product.configurations.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                  <Check size={14} color="var(--cyan-400)" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--lime-400)' }}>
              <Sparkles size={18} />
              Resin & Polymer Blends
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
              {product.materials.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                  <Check size={14} color="var(--lime-400)" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ marginBottom: '0.75rem' }}>Engineered Technical Specifications</h4>
          <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
            {Object.entries(product.specifications).map(([key, val], idx) => {
              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
              return (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1.25rem',
                    borderBottom: idx === Object.keys(product.specifications).length - 1 ? 'none' : '1px solid var(--border-light)',
                    fontSize: '0.88rem'
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>{formattedKey}</span>
                  <span className="font-mono" style={{ color: '#FFFFFF', fontWeight: 500 }}>{val}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Typical Applications & Compliance */}
        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '0.65rem' }}>Primary Industrial Applications</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {product.applications.map((app, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                  <span style={{ color: 'var(--emerald-400)', marginTop: '2px' }}>•</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.65rem' }}>Regulatory & Standards Compliance</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {product.compliance.map((comp, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#CBD5E1' }}>
                  <ShieldCheck size={16} color="var(--emerald-400)" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              onClose();
              if (onSelectForRFQ) onSelectForRFQ(product);
            }}
          >
            <Send size={16} />
            Configure in Direct RFQ
          </button>
        </div>
      </div>
    </div>
  );
}
