import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Calculator, Menu, X, ArrowRight, Send, Phone, ChevronDown, ShieldCheck } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate, onOpenRFQ }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productSubmenu = [
    { label: 'Flexible Poly Packaging', route: '/flexible-poly-packaging/' },
    { label: 'Food Service Packaging', route: '/food-service-packaging/' },
    { label: 'Industrial Packaging', route: '/industrial-packaging/' },
    { label: 'Retail Products', route: '/retail-products/' },
    { label: 'Rollstock', route: '/rollstock/' },
    { label: 'Stand-up and Zipper Pouches', route: '/stand-up-and-zipper-pouches/' },
    { label: 'T-Shirt Bags', route: '/t-shirt-bags/' },
    { label: 'Vacuum bags', route: '/vacuum-bags/' },
    { label: 'Waste Management/Janitorial', route: '/waste-management-janitorial/' },
    { label: 'Wicketed Bags', route: '/wicketed-bags/' }
  ];

  const handleNav = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div
            className="brand-logo-wrap"
            onClick={() => handleNav('/')}
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

          {/* Desktop Navigation Links (Preserving Original Site Structure) */}
          <nav>
            <ul className="nav-links">
              <li>
                <button
                  className={`nav-link ${currentRoute === '/about-us/' ? 'active' : ''}`}
                  onClick={() => handleNav('/about-us/')}
                >
                  About Us
                </button>
              </li>

              {/* Our Products Dropdown */}
              <li
                ref={dropdownRef}
                style={{ position: 'relative' }}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  className={`nav-link ${productSubmenu.some((p) => p.route === currentRoute) ? 'active' : ''}`}
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  Our Products
                  <ChevronDown size={14} style={{ transform: productsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>

                {productsDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-20px',
                      width: '300px',
                      background: 'var(--bg-slate)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '10px',
                      boxShadow: 'var(--shadow-lg)',
                      padding: '0.65rem 0',
                      zIndex: 1050,
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <div style={{ padding: '0.4rem 1.25rem 0.6rem 1.25rem', fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-light)' }}>
                      Packaging Categories
                    </div>

                    <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
                      {productSubmenu.map((item) => (
                        <button
                          key={item.route}
                          onClick={() => handleNav(item.route)}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            padding: '0.65rem 1.25rem',
                            fontSize: '0.86rem',
                            color: currentRoute === item.route ? 'var(--emerald-400)' : '#E2E8F0',
                            fontWeight: currentRoute === item.route ? 600 : 400,
                            background: currentRoute === item.route ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.target.style.color = '#FFFFFF';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = currentRoute === item.route ? 'rgba(16, 185, 129, 0.08)' : 'transparent';
                            e.target.style.color = currentRoute === item.route ? 'var(--emerald-400)' : '#E2E8F0';
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-light)', padding: '0.6rem 1.25rem 0.2rem 1.25rem' }}>
                      <button
                        onClick={() => handleNav('/products/')}
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--cyan-400)',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        All Products Directory <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </li>

              {/* Sustainability */}
              <li>
                <button
                  className={`nav-link nav-link-greenline ${currentRoute === '/sustainability/' ? 'active' : ''}`}
                  onClick={() => handleNav('/sustainability/')}
                >
                  <Leaf size={14} />
                  Sustainability
                </button>
              </li>

              {/* Certifications */}
              <li>
                <button
                  className={`nav-link ${currentRoute === '/certifications/' ? 'active' : ''}`}
                  onClick={() => handleNav('/certifications/')}
                >
                  Certifications
                </button>
              </li>

              {/* Package Calculator (Replacing Broken external calc) */}
              <li>
                <button
                  className={`nav-link nav-link-calculator ${currentRoute === '/package-calculator/' ? 'active' : ''}`}
                  onClick={() => handleNav('/package-calculator/')}
                >
                  <Calculator size={14} />
                  Package calculator
                </button>
              </li>

              {/* Contact Us */}
              <li>
                <button
                  className={`nav-link ${currentRoute === '/contact-us/' ? 'active' : ''}`}
                  onClick={() => handleNav('/contact-us/')}
                >
                  Contact Us
                </button>
              </li>

              {/* View Jobs / Careers */}
              <li>
                <button
                  className={`nav-link ${currentRoute === '/careers/' ? 'active' : ''}`}
                  onClick={() => handleNav('/careers/')}
                >
                  View Jobs
                </button>
              </li>
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

        <ul className="mobile-nav-list" style={{ marginTop: '1.5rem', maxHeight: '65vh', overflowY: 'auto' }}>
          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/')} style={{ color: currentRoute === '/' ? 'var(--emerald-400)' : '#FFFFFF' }}>
              Home
            </button>
          </li>
          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/about-us/')} style={{ color: currentRoute === '/about-us/' ? 'var(--emerald-400)' : '#FFFFFF' }}>
              About Us
            </button>
          </li>

          {/* Products Dropdown Accordion in Mobile */}
          <li className="mobile-nav-item">
            <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Our Products:
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', borderLeft: '2px solid var(--border-medium)' }}>
              {productSubmenu.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => handleNav(item.route)}
                    style={{
                      fontSize: '0.95rem',
                      color: currentRoute === item.route ? 'var(--emerald-400)' : 'var(--text-muted)',
                      textAlign: 'left'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/sustainability/')} style={{ color: currentRoute === '/sustainability/' ? 'var(--emerald-400)' : '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Leaf size={18} color="var(--emerald-400)" />
              Sustainability
            </button>
          </li>
          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/certifications/')} style={{ color: currentRoute === '/certifications/' ? 'var(--emerald-400)' : '#FFFFFF' }}>
              Certifications
            </button>
          </li>
          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/package-calculator/')} style={{ color: currentRoute === '/package-calculator/' ? 'var(--cyan-400)' : '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={18} color="var(--cyan-400)" />
              Package calculator
            </button>
          </li>
          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/careers/')} style={{ color: currentRoute === '/careers/' ? 'var(--emerald-400)' : '#FFFFFF' }}>
              View Jobs
            </button>
          </li>
          <li className="mobile-nav-item">
            <button onClick={() => handleNav('/contact-us/')} style={{ color: currentRoute === '/contact-us/' ? 'var(--emerald-400)' : '#FFFFFF' }}>
              Contact Us
            </button>
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
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
        </div>
      </div>
    </header>
  );
}
