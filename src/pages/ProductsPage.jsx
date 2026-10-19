import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, FileText, Send, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';

export default function ProductsPage({ onSelectProduct, onQuickRFQ, onOpenRFQ }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = ['All', 'Food & Beverage', 'Industrial & Manufacturing', 'Healthcare & Sanitation', 'Retail & Consumer'];
  const tags = ['All', 'FDA & CFIA Certified', 'Automation Ready', 'Shelf-Ready Resealable', 'Heavy-Duty Protection', 'Maximum Oxygen Barrier'];

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.configurations.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.applications.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || p.badge === selectedTag;

      return matchesSearch && matchesCat && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  return (
    <div className="products-page">
      {/* Banner */}
      <section className="section-tight" style={{ background: 'var(--bg-slate)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-emerald">Comprehensive Extrusion Portfolio</span>
              <h1>Industrial & Flexible Packaging Catalog</h1>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.6' }}>
                Extruding high-clarity films, protective industrial liners, high-barrier protein packaging, and sustainable biopolymers tailored for automated packaging lines and commercial converters.
              </p>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-medium)', maxHeight: '240px' }}>
              <img
                src="/images/products-catalog.jpg"
                alt="Tycho Poly Packaging Products"
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
                placeholder="Search products, resin, applications (e.g. vacuum, bakery, shrink)..."
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

          {/* Active Results Count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <div>
              Showing <strong style={{ color: '#FFFFFF' }}>{filteredProducts.length}</strong> of {productsData.length} product categories
            </div>
            {(searchQuery || selectedCategory !== 'All' || selectedTag !== 'All') && (
              <button
                style={{ color: 'var(--emerald-400)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedTag('All');
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid-3">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onViewDetails={onSelectProduct}
                  onQuickRFQ={onQuickRFQ}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>No products matching your search criteria.</div>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Search Query
              </button>
            </div>
          )}

          {/* Custom Extrusion Callout */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-medium)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="badge badge-lime">Custom Polymer Compounding</span>
              <h3>Need a Custom Formulation or Non-Standard Dimension?</h3>
              <p style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
                Tycho Poly routinely extrudes custom blend ratios, anti-static films, high-slip bakery films, and specialized gauge ranges up to 8.0 mil.
              </p>
            </div>

            <button className="btn btn-primary btn-lg" onClick={onOpenRFQ}>
              <Send size={18} />
              Consult an Extrusion Engineer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
