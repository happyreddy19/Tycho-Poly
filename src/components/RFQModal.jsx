import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Send, ShieldCheck, Clock, FileCheck } from 'lucide-react';

export default function RFQModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    productCategory: 'Flexible Poly Packaging',
    itemType: 'Custom Poly Bags',
    width: '12',
    length: '18',
    gusset: '0',
    thicknessMil: '1.5',
    materialResin: 'LLDPE (Tough Linear Low)',
    customization: 'Plain / Unprinted',
    printColors: 'None',
    quantity: '10000',
    applicationUse: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    destinationCity: 'Toronto, ON',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  // Sync initialData if provided by Calculator or Product
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        productCategory: initialData.productCategory || prev.productCategory,
        itemType: initialData.productType || prev.itemType,
        width: initialData.width ? String(initialData.width) : prev.width,
        length: initialData.length ? String(initialData.length) : prev.length,
        gusset: initialData.gusset !== undefined ? String(initialData.gusset) : prev.gusset,
        thicknessMil: initialData.thicknessMil ? String(initialData.thicknessMil) : prev.thicknessMil,
        materialResin: initialData.densityType || prev.materialResin,
        quantity: initialData.quantity ? String(initialData.quantity) : prev.quantity,
        comments: initialData.estimatedTotalWeight
          ? `Estimated total order weight: ~${initialData.estimatedTotalWeight} lbs (calculated via Tycho Poly tool).`
          : initialData.estimatedWeight
          ? `Estimated roll weight: ~${initialData.estimatedWeight} lbs, length: ~${initialData.rollLength} ft.`
          : prev.comments
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validateStep = (currentStep) => {
    const errs = {};
    if (currentStep === 1) {
      if (!formData.productCategory) errs.productCategory = 'Please choose a category';
    } else if (currentStep === 2) {
      if (!formData.width || Number(formData.width) <= 0) errs.width = 'Valid width required';
      if (!formData.thicknessMil || Number(formData.thicknessMil) <= 0) errs.thicknessMil = 'Valid thickness required';
    } else if (currentStep === 3) {
      if (!formData.quantity || Number(formData.quantity) <= 0) errs.quantity = 'Quantity required';
    } else if (currentStep === 4) {
      if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
      if (!formData.contactName.trim()) errs.contactName = 'Contact name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email required';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    // Simulate real enterprise dispatch
    setTimeout(() => {
      const generatedTicket = `TYC-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close RFQ Dialog">
          <X size={22} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="badge badge-emerald">Direct Factory Quote</span>
              <h2>Request an Engineered Packaging Quote</h2>
              <p style={{ marginTop: '0.35rem' }}>
                Tycho Poly supplies custom extrusion, rollstock, and bag converting to distributors and manufacturers across North America.
              </p>
            </div>

            {/* Step Indicators */}
            <div className="rfq-stepper">
              <div className={`rfq-step-node ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                <div className="rfq-step-circle">{step > 1 ? <Check size={16} /> : '1'}</div>
                <div className="rfq-step-title">Category</div>
              </div>
              <div className={`rfq-step-node ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                <div className="rfq-step-circle">{step > 2 ? <Check size={16} /> : '2'}</div>
                <div className="rfq-step-title">Dimensions</div>
              </div>
              <div className={`rfq-step-node ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
                <div className="rfq-step-circle">{step > 3 ? <Check size={16} /> : '3'}</div>
                <div className="rfq-step-title">Volume</div>
              </div>
              <div className={`rfq-step-node ${step >= 4 ? 'active' : ''}`}>
                <div className="rfq-step-circle">4</div>
                <div className="rfq-step-title">Contact</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: CATEGORY & PRODUCT TYPE */}
              {step === 1 && (
                <div>
                  <div className="form-group">
                    <label className="form-label">Primary Product Category</label>
                    <select
                      className="form-select"
                      value={formData.productCategory}
                      onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    >
                      <option value="Flexible Poly Packaging">Flexible Poly Packaging (Tubing, Sheeting, Shrink)</option>
                      <option value="Food Service Packaging">Food Service Packaging (Bakery, Deli, Produce)</option>
                      <option value="Industrial Packaging">Industrial Packaging (Gaylord Liners, Pallet Covers)</option>
                      <option value="Waste Management & Janitorial">Waste Management & Janitorial (Coreless, Biohazard)</option>
                      <option value="Rollstock Barrier Films">Rollstock Barrier Films (Meat, Cheese, Automated FFS)</option>
                      <option value="Stand-Up & Zipper Pouches">Stand-Up & Zipper Pouches (Food, Pharma, Pet)</option>
                      <option value="T-Shirt Bags">T-Shirt Carrier Bags (Retail, Grocery, Take-out)</option>
                      <option value="Vacuum Bags">Vacuum Bags (Multi-layer Perishables & Proteins)</option>
                      <option value="Wicketed Bags">Wicketed Bags (High-speed Automation)</option>
                      <option value="Retail Products">Retail Products (Contractor & Display Packaged)</option>
                      <option value="Greenline BioSustainable">Greenline BioSustainable™ (Microbiome Landfill Breakdown)</option>
                      <option value="Greenline Compostable">Greenline Compostable™ (BPI Certified 90-Day)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Packaging Construction Format</label>
                    <div className="grid-2">
                      {['Flat Poly Bags', 'Gusseted Bags', 'Continuous Tubing', 'Rollstock Film Webbing', 'Wicketed Bags', 'Stand-Up Pouch'].map((fmt) => (
                        <button
                          type="button"
                          key={fmt}
                          style={{
                            padding: '0.85rem 1rem',
                            borderRadius: '8px',
                            background: formData.itemType === fmt ? 'var(--emerald-subtle)' : 'var(--bg-card)',
                            border: `1px solid ${formData.itemType === fmt ? 'var(--emerald-500)' : 'var(--border-medium)'}`,
                            color: formData.itemType === fmt ? '#FFFFFF' : 'var(--text-muted)',
                            fontWeight: 500,
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                          onClick={() => setFormData({ ...formData, itemType: fmt })}
                        >
                          <span>{fmt}</span>
                          {formData.itemType === fmt && <Check size={16} color="var(--emerald-400)" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: DIMENSIONS & RESIN */}
              {step === 2 && (
                <div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Width (inches)</label>
                      <input
                        type="number"
                        min="1"
                        step="0.25"
                        className="form-input"
                        value={formData.width}
                        onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                      />
                      {errors.width && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.width}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Length (inches / ft)</label>
                      <input
                        type="number"
                        min="1"
                        step="0.5"
                        className="form-input"
                        value={formData.length}
                        onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Gusset (inches, optional)</label>
                      <input
                        type="number"
                        min="0"
                        step="0.5"
                        className="form-input"
                        value={formData.gusset}
                        onChange={(e) => setFormData({ ...formData, gusset: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Thickness / Mil</label>
                      <div className="input-with-unit">
                        <input
                          type="number"
                          min="0.4"
                          step="0.05"
                          className="form-input"
                          value={formData.thicknessMil}
                          onChange={(e) => setFormData({ ...formData, thicknessMil: e.target.value })}
                        />
                        <span className="input-unit">mil</span>
                      </div>
                      <div className="form-subtext">Equals {Math.round(Number(formData.thicknessMil) * 100)} Gauge</div>
                      {errors.thicknessMil && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.thicknessMil}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Target Resin Blend</label>
                      <select
                        className="form-select"
                        value={formData.materialResin}
                        onChange={(e) => setFormData({ ...formData, materialResin: e.target.value })}
                      >
                        <option value="LLDPE (Tough Linear Low)">LLDPE (High Puncture Resistance)</option>
                        <option value="LDPE (Clarity Low Density)">100% Virgin LDPE (High Clarity)</option>
                        <option value="HDPE (High Density / Stiff)">HDPE (High Tensile Rigidity)</option>
                        <option value="EcoLogo Recycled PCR Polyethylene">EcoLogo Certified Recycled Polyethylene</option>
                        <option value="Greenline BioSustainable">Greenline BioSustainable™ (Microbiome Landfill)</option>
                        <option value="Greenline Compostable">Greenline Compostable™ (BPI Certified)</option>
                        <option value="Nylon / PE Multi-layer Barrier">Multi-Layer Nylon/PE Barrier Co-Extrusion</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: CUSTOMIZATION & VOLUME */}
              {step === 3 && (
                <div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Order Volume / Quantity</label>
                      <input
                        type="number"
                        min="500"
                        step="500"
                        className="form-input"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                      <div className="form-subtext">Total bags or rolls required</div>
                      {errors.quantity && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.quantity}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Printing Specification</label>
                      <select
                        className="form-select"
                        value={formData.customization}
                        onChange={(e) => setFormData({ ...formData, customization: e.target.value })}
                      >
                        <option value="Plain / Unprinted">Plain / Unprinted Film</option>
                        <option value="1 Color Custom Print">1 Color Flexographic Print (Logo / Caution)</option>
                        <option value="2-4 Color Custom Print">2-4 Color Brand Print</option>
                        <option value="Full Process 6-Color Print">Full 6-Color High-Definition Print</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Intended Application / Operating Environment</label>
                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="e.g. Frozen seafood packaging at -25°C, high-speed automated Form-Fill-Seal machine, or hospital isolation laundry."
                      value={formData.applicationUse}
                      onChange={(e) => setFormData({ ...formData, applicationUse: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMISSION */}
              {step === 4 && (
                <div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Northern Packaging Distributors"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                      {errors.companyName && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.companyName}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Contact Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      />
                      {errors.contactName && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.contactName}</div>}
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="(416) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.phone}</div>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Delivery Destination (City, Province/State)</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.destinationCity}
                      onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Additional Engineering Notes / Specifications</label>
                    <textarea
                      rows={2}
                      className="form-textarea"
                      placeholder="Special slip levels, corona dyne level, anti-block, core size..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                {step > 1 ? (
                  <button type="button" className="btn btn-secondary" onClick={handleBack}>
                    <ArrowLeft size={16} />
                    Back
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next: {step === 1 ? 'Dimensions' : step === 2 ? 'Volume' : 'Contact'}
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Transmitting Request...' : 'Submit RFQ to Engineering Desk'}
                    <Send size={16} />
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--emerald-subtle)', border: '2px solid var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <Check size={32} color="var(--emerald-400)" />
            </div>

            <span className="badge badge-emerald">Quote Request Confirmed</span>
            <h2>Thank You, {formData.contactName}!</h2>
            <p style={{ maxWidth: '520px', margin: '0.75rem auto 1.5rem auto' }}>
              Your custom packaging RFQ has been received by Tycho Poly’s engineering and estimating team.
            </p>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border-medium)', maxWidth: '480px', margin: '0 auto 2rem auto', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Reference Ticket:</span>
                <span className="font-mono" style={{ color: 'var(--cyan-400)', fontWeight: 600 }}>{ticketId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Configured Item:</span>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{formData.productCategory}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Dimensions:</span>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{formData.width}" x {formData.length}" @ {formData.thicknessMil} mil</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Response Window:</span>
                <span style={{ color: 'var(--lime-400)', fontWeight: 500 }}>Within 1 Business Day</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-secondary" onClick={handleReset}>
                Done / Close
              </button>
              <a href="tel:9052643475" className="btn btn-primary">
                Call Direct: (905) 264-3475
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
