import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import ProductModal from './components/ProductModal';

// Dedicated Standalone Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CertificationsPage from './pages/CertificationsPage';
import PackageCalculatorPage from './pages/PackageCalculatorPage';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Product Category Pages
import AllProductsPage from './pages/products/AllProductsPage';
import FlexiblePolyPage from './pages/products/FlexiblePolyPage';
import FoodServicePage from './pages/products/FoodServicePage';
import IndustrialPackagingPage from './pages/products/IndustrialPackagingPage';
import RetailProductsPage from './pages/products/RetailProductsPage';
import RollstockPage from './pages/products/RollstockPage';
import StandUpPouchesPage from './pages/products/StandUpPouchesPage';
import TShirtBagsPage from './pages/products/TShirtBagsPage';
import VacuumBagsPage from './pages/products/VacuumBagsPage';
import WasteManagementPage from './pages/products/WasteManagementPage';
import WicketedBagsPage from './pages/products/WicketedBagsPage';

// Canonical route alias resolver
const routeAliasMap = {
  '/': '/',
  '/home/': '/',
  '/about/': '/about-us/',
  '/about-us/': '/about-us/',
  '/products/': '/products/',
  '/flexible-poly-packaging/': '/flexible-poly-packaging/',
  '/food-service-packaging/': '/food-service-packaging/',
  '/industrial-packaging/': '/industrial-packaging/',
  '/retail-products/': '/retail-products/',
  '/rollstock/': '/rollstock/',
  '/stand-up-and-zipper-pouches/': '/stand-up-and-zipper-pouches/',
  '/t-shirt-bags/': '/t-shirt-bags/',
  '/vacuum-bags/': '/vacuum-bags/',
  '/waste-management-janitorial/': '/waste-management-janitorial/',
  '/wicketed-bags/': '/wicketed-bags/',
  '/sustainability/': '/sustainability/',
  '/greenline/': '/sustainability/',
  '/certifications/': '/certifications/',
  '/calculator/': '/package-calculator/',
  '/package-calculator/': '/package-calculator/',
  '/careers/': '/careers/',
  '/view-jobs/': '/careers/',
  '/contact/': '/contact-us/',
  '/contact-us/': '/contact-us/',
  '/privacy-policy/': '/privacy-policy/'
};

function normalizeRoute(raw) {
  if (!raw) return '/';
  let path = raw.trim();
  if (path.startsWith('#')) path = path.slice(1);
  if (!path.startsWith('/')) path = '/' + path;
  if (path.length > 1 && !path.endsWith('/')) path += '/';
  return routeAliasMap[path] || path;
}

function getInitialRoute() {
  if (typeof window === 'undefined') return '/';
  if (window.location.hash) {
    return normalizeRoute(window.location.hash);
  }
  return normalizeRoute(window.location.pathname);
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqInitialData, setRfqInitialData] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  // Sync route on popstate and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const route = getInitialRoute();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update document title for SEO & clarity on route change
  useEffect(() => {
    const titles = {
      '/': 'Tycho Poly Inc. | Canadian Blown Film & Flexible Packaging Manufacturer',
      '/about-us/': 'About Us | Tycho Poly Inc. - Ontario Blown Film Manufacturer',
      '/products/': 'Products Directory | Tycho Poly Inc.',
      '/flexible-poly-packaging/': 'Flexible Poly Packaging | Tubing, Sheeting, Garment Bags | Tycho Poly',
      '/food-service-packaging/': 'Food Service Packaging | Bread, Ice, Produce Bags | Tycho Poly',
      '/industrial-packaging/': 'Industrial Packaging | Gaylord Liners, Pallet Covers | Tycho Poly',
      '/retail-products/': 'Retail Products | Patch & Die-Cut Shopping Bags | Tycho Poly',
      '/rollstock/': 'Rollstock Films | Form-Fill-Seal Converting Rolls | Tycho Poly',
      '/stand-up-and-zipper-pouches/': 'Stand-up and Zipper Pouches | High-Barrier Packaging | Tycho Poly',
      '/t-shirt-bags/': 'T-Shirt Bags | Supermarket & Retail Carry-Out | Tycho Poly',
      '/vacuum-bags/': 'Vacuum Bags | Multi-Layer High-Barrier Pouches | Tycho Poly',
      '/waste-management-janitorial/': 'Waste Management & Janitorial Bags | EcoLogo Liners | Tycho Poly',
      '/wicketed-bags/': 'Wicketed Bags | Automated Bakery & Produce Bags | Tycho Poly',
      '/sustainability/': 'Greenline™ Sustainability | Biopolymers & Compostable Films | Tycho Poly',
      '/certifications/': 'Certifications & Quality Assurance | FSSC 22000, FDA, EcoLogo | Tycho Poly',
      '/package-calculator/': 'Packaging Calculator | Roll Weight, Footage & Yield | Tycho Poly',
      '/careers/': 'Careers & View Jobs | Tycho Poly Inc. GTA Facilities',
      '/contact-us/': 'Contact Us | Woodbridge & Concord Plants | Tycho Poly',
      '/privacy-policy/': 'Privacy Policy | Tycho Poly Inc.'
    };

    document.title = titles[currentRoute] || 'Tycho Poly Inc. | Packaging Solutions';
  }, [currentRoute]);

  const navigateTo = (rawRoute) => {
    const canonical = normalizeRoute(rawRoute);
    setCurrentRoute(canonical);

    try {
      window.history.pushState({}, '', canonical);
    } catch {
      window.location.hash = canonical;
    }

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
      productType: product.configurations ? product.configurations[0] : 'Custom Poly Bags',
      thicknessMil: '1.5',
      comments: `Inquiring about technical specifications for ${product.name} (${product.category}).`
    });
  };

  return (
    <div className="app-layout">
      {/* Sticky Header Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenRFQ={() => openRFQ()}
      />

      {/* Main View Router - Each Section Has Its Own Dedicated Standalone Page */}
      <main id="brx-content" style={{ flexGrow: 1 }}>
        {currentRoute === '/' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ()}
            onSelectProduct={openProductModal}
            onQuickRFQ={handleProductRFQ}
          />
        )}

        {currentRoute === '/about-us/' && (
          <AboutUsPage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === '/products/' && (
          <AllProductsPage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ()}
            onQuickRFQ={handleProductRFQ}
          />
        )}

        {currentRoute === '/flexible-poly-packaging/' && (
          <FlexiblePolyPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/food-service-packaging/' && (
          <FoodServicePage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/industrial-packaging/' && (
          <IndustrialPackagingPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/retail-products/' && (
          <RetailProductsPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/rollstock/' && (
          <RollstockPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/stand-up-and-zipper-pouches/' && (
          <StandUpPouchesPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/t-shirt-bags/' && (
          <TShirtBagsPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/vacuum-bags/' && (
          <VacuumBagsPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/waste-management-janitorial/' && (
          <WasteManagementPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/wicketed-bags/' && (
          <WicketedBagsPage
            onNavigate={navigateTo}
            onOpenRFQ={openRFQ}
          />
        )}

        {currentRoute === '/sustainability/' && (
          <SustainabilityPage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ({ productCategory: 'Greenline BioSustainable' })}
          />
        )}

        {currentRoute === '/certifications/' && (
          <CertificationsPage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === '/package-calculator/' && (
          <PackageCalculatorPage
            onNavigate={navigateTo}
            onApplyToRFQ={(calcSpecs) => openRFQ(calcSpecs)}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === '/careers/' && (
          <CareersPage />
        )}

        {currentRoute === '/contact-us/' && (
          <ContactUsPage
            onNavigate={navigateTo}
            onOpenRFQ={() => openRFQ()}
          />
        )}

        {currentRoute === '/privacy-policy/' && (
          <PrivacyPolicyPage />
        )}
      </main>

      {/* Global Brand Footer */}
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
