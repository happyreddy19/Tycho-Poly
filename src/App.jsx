import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import ProductModal from './components/ProductModal';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import GreenlinePage from './pages/GreenlinePage';
import CalculatorPage from './pages/CalculatorPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqInitialData, setRfqInitialData] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  // Sync route with URL hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openRFQ = (initialData = null) => {
    setRfqInitialData(initialData);
    setRfqOpen(true);
  };

  const closeRFQ = () => {
    setRfqOpen(false);
    setRfqInitialData(null);
  };

  const openProductModal = (product) => {
    setModalProduct(product);
  };

  const closeProductModal = () => {
    setModalProduct(null);
  };

  const handleProductRFQ = (product) => {
    openRFQ({
      productCategory: product.name,
      productType: product.configurations[0] || 'Custom Poly Bags',
      thicknessMil: '1.5',
      comments: `Inquiring about specifications for ${product.name} (${product.category}).`
    });
  };

  return (
    <div className="app-layout">
      {/* Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenRFQ={() => openRFQ()}
      />

      {/* Main Content Router */}
      <main id="brx-content" style={{ flexGrow: 1 }}>
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ()}
            onSelectProduct={openProductModal}
            onQuickRFQ={handleProductRFQ}
          />
        )}

        {currentRoute === 'products' && (
          <ProductsPage
            onSelectProduct={openProductModal}
            onQuickRFQ={handleProductRFQ}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            onSelectProduct={openProductModal}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === 'greenline' && (
          <GreenlinePage
            onOpenRFQ={() => openRFQ({ productCategory: 'Greenline BioSustainable' })}
          />
        )}

        {currentRoute === 'calculator' && (
          <CalculatorPage
            onApplyToRFQ={(calcSpecs) => openRFQ(calcSpecs)}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === 'capabilities' && (
          <CapabilitiesPage
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === 'careers' && (
          <CareersPage />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === 'privacy-policy' && (
          <PrivacyPolicyPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenRFQ={() => openRFQ()}
      />

      {/* Global Interactive Modals */}
      <RFQModal
        isOpen={rfqOpen}
        onClose={closeRFQ}
        initialData={rfqInitialData}
      />

      <ProductModal
        product={modalProduct}
        isOpen={!!modalProduct}
        onClose={closeProductModal}
        onSelectForRFQ={(prod) => handleProductRFQ(prod)}
      />
    </div>
  );
}
