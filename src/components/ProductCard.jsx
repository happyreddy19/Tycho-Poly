import React from 'react';
import { ArrowRight, FileText, Send } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onQuickRFQ }) {
  return (
    <div className="card product-card">
      <div className="product-card-top">
        <div className="product-tag-row">
          <span className="tag-badge tag-badge-green">{product.badge}</span>
          <span className="tag-badge">{product.category}</span>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>{product.name}</h3>
        <p style={{ fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
          {product.shortDesc}
        </p>

        {/* Formats snippet */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem', fontWeight: 600 }}>
            Key Configurations:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {product.configurations.slice(0, 3).map((cfg, idx) => (
              <span key={idx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)' }}>
                {cfg}
              </span>
            ))}
          </div>
        </div>

        {/* Spec snapshot */}
        <ul className="product-spec-list">
          {product.specifications.thicknessRange && (
            <li className="product-spec-item">
              <span>Gauge / Thickness</span>
              <span className="product-spec-val font-mono">{product.specifications.thicknessRange}</span>
            </li>
          )}
          {product.specifications.widthRange && (
            <li className="product-spec-item">
              <span>Available Widths</span>
              <span className="product-spec-val font-mono">{product.specifications.widthRange}</span>
            </li>
          )}
        </ul>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
        <button
          className="btn btn-secondary btn-sm"
          style={{ flexGrow: 1 }}
          onClick={() => onViewDetails(product)}
        >
          <FileText size={14} />
          Specifications
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => onQuickRFQ(product)}
        >
          <Send size={14} />
          Quote
        </button>
      </div>
    </div>
  );
}
