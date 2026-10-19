import React, { useState, useEffect } from 'react';
import { Leaf, Calculator, Menu, X, ArrowRight, Send, Phone } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate, onOpenRFQ }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'greenline', label: 'Greenline™', special: 'greenline' },
    { id: 'calculator', label: 'Packaging Calculator', special: 'calculator' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div
            className="brand-logo-wrap"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="/images/tychopoly-logo.png"
              alt="Tycho Poly Inc."
              className="brand-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="brand-logo-fallback" style={{ display: 'none' }}>
              <span>TYCHO POLY</span>
              <span className="brand-dot" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => {
                const isActive = currentRoute === item.id;
                if (item.special === 'greenline') {
                  return (
                    <li key={item.id}>
                      <button
                        className={`nav-link nav-link-greenline ${isActive ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.id)}
                      >
                        <Leaf size={15} />
                        {item.label}
                      </button>
                    </li>
                  );
                }
                if (item.special === 'calculator') {
                  return (
                    <li key={item.id}>
                      <button
                        className={`nav-link nav-link-calculator ${isActive ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.id)}
                      >
                        <Calculator size={15} />
                        {item.label}
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={item.id}>
                    <button
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            <a href="tel:9052643475" className="btn btn-secondary btn-sm" style={{ display: 'none', lg: 'inline-flex' }}>
              <Phone size={14} color="var(--emerald-400)" />
              (905) 264-3475
            </a>
            <button className="btn btn-primary btn-sm" onClick={onOpenRFQ}>
              <Send size={14} />
              Request a Quote
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/images/tychopoly-logo.png" alt="Tycho Poly" style={{ height: '32px' }} />
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <button
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: currentRoute === item.id ? 'var(--emerald-400)' : '#FFFFFF',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  textAlign: 'left'
                }}
              >
                {item.special === 'greenline' && <Leaf size={20} color="var(--emerald-400)" />}
                {item.special === 'calculator' && <Calculator size={20} color="var(--cyan-400)" />}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto', paddingTop: '2rem' }}>
          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRFQ();
            }}
          >
            <Send size={16} />
            Request a Quote
          </button>
          <a
            href="tel:9052643475"
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Phone size={16} />
            Direct Desk: (905) 264-3475
          </a>
        </div>
      </div>
    </header>
  );
}
