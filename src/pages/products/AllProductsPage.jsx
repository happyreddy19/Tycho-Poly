import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, FileText, Send, ChevronRight, ArrowRight } from 'lucide-react';
import { productsData } from '../../data/productsData';

export default function AllProductsPage({ onNavigate, onOpenRFQ, onQuickRFQ }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Food & Beverage', 'Industrial & Manufacturing', 'Healthcare & Sanitation', 'Retail & Consumer'];

  // Map each product ID to its dedicated page route URL
  const productRoutes = {
    'flexible-poly-packaging': '/flexible-poly-packaging/',
    'food-service-packaging': '/food-service-packaging/',
    'industrial-packaging': '/industrial-packaging/',
    'retail-products': '/retail-products/',
    'rollstock-films': '/rollstock/',
    'stand-up-and-zipper-pouches': '/stand-up-and-zipper-pouches/',
    't-shirt-bags': '/t-shirt-bags/',
    'vacuum-bags': '/vacuum-bags/',
    'waste-management-janitorial': '/waste-management-janitorial/',
    'wicketed-bags': '/wicketed-bags/'
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.configurations.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.applications.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="all-products-page">
      {/* Breadcrumb & Hero */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            <button onClick={() => onNavigate('/')} style={{ color: 'var(--text-muted)' }}>Home</button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 500 }}>Our Products</span>
          </nav>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Comprehensive Product Lines</span>
              <h1>Industrial & Commercial Packaging Products</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
                Explore all 10 specialized packaging categories extruded and converted in our Canadian facilities. Each line offers dedicated specifications, materials, and configurations.
              </p>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-medium)', maxHeight: '220px' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Tycho Poly Packaging Catalog"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Search & Filtering */}
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {/* Search */}
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="form-input search-input"
                placeholder="Search products, resin, applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Chips */}
            <div className="filter-chips">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <div>
              Showing <strong style={{ color: '#FFFFFF' }}>{filteredProducts.length}</strong> of {productsData.length} product categories
            </div>
          </div>

          {/* Grid of Product Cards with Direct Dedicated Page Links */}
          <div className="grid-3">
            {filteredProducts.map((p) => {
              const route = productRoutes[p.id] || `/${p.slug}/`;
              return (
                <div key={p.id} className="card product-card">
                  <div className="product-card-top">
                    <div className="product-tag-row">
                      <span className="tag-badge tag-badge-green">{p.badge}</span>
                      <span className="tag-badge">{p.category}</span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>{p.name}</h3>
                    <p style={{ fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                      {p.shortDesc}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Configurations:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {p.configurations.slice(0, 3).map((cfg, idx) => (
                          <span key={idx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)' }}>
                            {cfg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      style={{ flexGrow: 1 }}
                      onClick={() => onNavigate(route)}
                    >
                      <FileText size={14} />
                      View Dedicated Page
                      <ArrowRight size={13} />
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onQuickRFQ(p)}
                    >
                      <Send size={14} />
                      Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
