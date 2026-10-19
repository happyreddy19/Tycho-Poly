import React, { useState, useId } from 'react';
import { Calculator as CalcIcon, Layers, Package, ArrowRightLeft, Send, Info, CheckCircle2, RefreshCw } from 'lucide-react';

export default function Calculator({ onApplyToRFQ }) {
  const [activeTab, setActiveTab] = useState('roll'); // 'roll', 'bag', 'converter'

  // Tool A: Roll Estimator State
  const [rollWidth, setRollWidth] = useState(24); // inches
  const [rollThicknessMil, setRollThicknessMil] = useState(1.5); // mil
  const [rollCalcMode, setRollCalcMode] = useState('length'); // 'length' -> calc weight, 'weight' -> calc length
  const [rollLength, setRollLength] = useState(3000); // feet
  const [targetWeight, setTargetWeight] = useState(100); // lbs
  const [rollDensity, setRollDensity] = useState(0.92); // g/cm³ (LDPE default)
  const [coreDiameter, setCoreDiameter] = useState(3); // inches
  const [coreWeight, setCoreWeight] = useState(2); // lbs

  // Tool B: Bag Yield State
  const [bagWidth, setBagWidth] = useState(12); // inches
  const [bagLength, setBagLength] = useState(18); // inches
  const [bagGusset, setBagGusset] = useState(0); // inches (side gusset expansion)
  const [bagThicknessMil, setBagThicknessMil] = useState(2.0); // mil
  const [bagDensity, setBagDensity] = useState(0.925); // g/cm³ (LLDPE)
  const [bagQuantity, setBagQuantity] = useState(10000); // count

  // Tool C: Converter State
  const [convMil, setConvMil] = useState(1.5);
  const [convGauge, setConvGauge] = useState(150);
  const [convMicron, setConvMicron] = useState(38.1);

  // Density factor in lbs / cu in: 1 g/cm³ = 0.036127 lbs/in³
  const getDensityFactor = (d) => d * 0.036127;

  // --- Calculations for Tool A (Roll) ---
  const densityFactorA = getDensityFactor(rollDensity);
  const thicknessInA = rollThicknessMil / 1000;
  
  let calculatedRollWeight = 0;
  let calculatedRollLength = 0;

  if (rollCalcMode === 'length') {
    calculatedRollLength = rollLength;
    // Roll film weight = Width(in) * Length(in) * Thickness(in) * densityFactor
    const lengthInches = rollLength * 12;
    const filmWeight = rollWidth * lengthInches * thicknessInA * densityFactorA;
    calculatedRollWeight = filmWeight + Number(coreWeight);
  } else {
    calculatedRollWeight = targetWeight;
    const filmNetWeight = Math.max(0, targetWeight - coreWeight);
    const volumeCuIn = filmNetWeight / densityFactorA;
    const lengthInches = volumeCuIn / (rollWidth * thicknessInA);
    calculatedRollLength = lengthInches / 12;
  }

  // Roll Outer Diameter (in) = sqrt( core_od^2 + (4 * thick_in * length_in / pi) )
  const lengthInchesForOD = calculatedRollLength * 12;
  const rollOD = Math.sqrt(
    Math.pow(coreDiameter, 2) + (4 * thicknessInA * lengthInchesForOD) / Math.PI
  );

  // Yield: sq in per lb for this gauge/density
  const yieldSqInPerLb = (1 / (thicknessInA * densityFactorA));

  // --- Calculations for Tool B (Bag) ---
  const densityFactorB = getDensityFactor(bagDensity);
  const thicknessInB = bagThicknessMil / 1000;
  // Effective width considering 2-wall construction and gusset
  const effectiveWidth = Number(bagWidth) + Number(bagGusset);
  // Area for both walls in square inches
  const bagAreaSqIn = 2 * effectiveWidth * bagLength;
  const singleBagWeightLbs = bagAreaSqIn * thicknessInB * densityFactorB;
  const weightPerThousand = singleBagWeightLbs * 1000;
  const totalOrderWeightLbs = (bagQuantity / 1000) * weightPerThousand;
  const bagsPerPound = singleBagWeightLbs > 0 ? (1 / singleBagWeightLbs) : 0;

  // Converter Handlers
  const handleMilChange = (val) => {
    const num = parseFloat(val) || 0;
    setConvMil(num);
    setConvGauge(Math.round(num * 100));
    setConvMicron(parseFloat((num * 25.4).toFixed(2)));
  };

  const handleGaugeChange = (val) => {
    const num = parseFloat(val) || 0;
    setConvGauge(num);
    setConvMil(parseFloat((num / 100).toFixed(4)));
    setConvMicron(parseFloat(((num / 100) * 25.4).toFixed(2)));
  };

  const handleMicronChange = (val) => {
    const num = parseFloat(val) || 0;
    setConvMicron(num);
    const milVal = num / 25.4;
    setConvMil(parseFloat(milVal.toFixed(3)));
    setConvGauge(Math.round(milVal * 100));
  };

  // Pre-fill RFQ handler
  const handleSendRollToRFQ = () => {
    if (onApplyToRFQ) {
      onApplyToRFQ({
        productType: 'Rollstock / Film Sheeting',
        width: rollWidth,
        thicknessMil: rollThicknessMil,
        rollLength: Math.round(calculatedRollLength),
        estimatedWeight: Math.round(calculatedRollWeight),
        densityType: rollDensity === 0.92 ? 'LDPE (Standard)' : rollDensity === 0.95 ? 'HDPE' : rollDensity === 1.25 ? 'Greenline Compostable' : 'Custom LLDPE'
      });
    }
  };

  const handleSendBagToRFQ = () => {
    if (onApplyToRFQ) {
      onApplyToRFQ({
        productType: 'Custom Poly Bags',
        width: bagWidth,
        length: bagLength,
        gusset: bagGusset,
        thicknessMil: bagThicknessMil,
        quantity: bagQuantity,
        estimatedTotalWeight: Math.round(totalOrderWeightLbs),
        densityType: bagDensity === 0.925 ? 'LLDPE (Tough)' : bagDensity === 0.92 ? 'LDPE' : 'Greenline BioSustainable'
      });
    }
  };

  return (
    <div className="calc-container" id="integrated-calculator">
      {/* Tabs */}
      <div className="calc-tabs">
        <button
          className={`calc-tab-btn ${activeTab === 'roll' ? 'active' : ''}`}
          onClick={() => setActiveTab('roll')}
        >
          <Layers size={18} />
          Roll Weight & Footage Estimator
        </button>
        <button
          className={`calc-tab-btn ${activeTab === 'bag' ? 'active' : ''}`}
          onClick={() => setActiveTab('bag')}
        >
          <Package size={18} />
          Bag Yield & Material Usage
        </button>
        <button
          className={`calc-tab-btn ${activeTab === 'converter' ? 'active' : ''}`}
          onClick={() => setActiveTab('converter')}
        >
          <ArrowRightLeft size={18} />
          Mil ⇄ Gauge ⇄ Micron Converter
        </button>
      </div>

      <div className="calc-body">
        {/* =========================================================================
            TOOL A: ROLL WEIGHT & LENGTH ESTIMATOR
           ========================================================================= */}
        {activeTab === 'roll' && (
          <div className="calc-grid">
            <div className="calc-inputs-pane">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="badge badge-emerald">Engineered Extrusion Formulas</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>ASTM D2103 Standard Density Basis</span>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label htmlFor="roll-width-input" className="form-label">Film Width</label>
                  <div className="input-with-unit">
                    <input
                      id="roll-width-input"
                      type="number"
                      min="1"
                      step="0.5"
                      className="form-input"
                      value={rollWidth}
                      onChange={(e) => setRollWidth(Number(e.target.value))}
                    />
                    <span className="input-unit">inches</span>
                  </div>
                  <div className="form-subtext">Slit width or web width</div>
                </div>

                <div className="form-group">
                  <label htmlFor="roll-thickness-input" className="form-label">Film Thickness (Gauge / Mil)</label>
                  <div className="input-with-unit">
                    <input
                      id="roll-thickness-input"
                      type="number"
                      min="0.1"
                      step="0.05"
                      className="form-input"
                      value={rollThicknessMil}
                      onChange={(e) => setRollThicknessMil(Number(e.target.value))}
                    />
                    <span className="input-unit">mil</span>
                  </div>
                  <div className="form-subtext">Equals {Math.round(rollThicknessMil * 100)} Gauge</div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Calculation Mode</label>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="rollCalcMode"
                      checked={rollCalcMode === 'length'}
                      onChange={() => setRollCalcMode('length')}
                    />
                    Enter Length → Calculate Weight
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="rollCalcMode"
                      checked={rollCalcMode === 'weight'}
                      onChange={() => setRollCalcMode('weight')}
                    />
                    Enter Target Weight → Calculate Length
                  </label>
                </div>
              </div>

              {rollCalcMode === 'length' ? (
                <div className="form-group">
                  <label htmlFor="roll-length-input" className="form-label">Total Roll Length</label>
                  <div className="input-with-unit">
                    <input
                      id="roll-length-input"
                      type="number"
                      min="100"
                      step="100"
                      className="form-input"
                      value={rollLength}
                      onChange={(e) => setRollLength(Number(e.target.value))}
                    />
                    <span className="input-unit">linear ft</span>
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="target-weight-input" className="form-label">Target Gross Weight</label>
                  <div className="input-with-unit">
                    <input
                      id="target-weight-input"
                      type="number"
                      min="10"
                      step="5"
                      className="form-input"
                      value={targetWeight}
                      onChange={(e) => setTargetWeight(Number(e.target.value))}
                    />
                    <span className="input-unit">lbs (gross)</span>
                  </div>
                </div>
              )}

              <div className="grid-2">
                <div className="form-group">
                  <label htmlFor="roll-resin-select" className="form-label">Resin Type / Density</label>
                  <select
                    id="roll-resin-select"
                    className="form-select"
                    value={rollDensity}
                    onChange={(e) => setRollDensity(Number(e.target.value))}
                  >
                    <option value={0.92}>LDPE (Standard Low Density - 0.920 g/cm³)</option>
                    <option value={0.925}>LLDPE (High-Tear Linear Low - 0.925 g/cm³)</option>
                    <option value={0.95}>HDPE (High Density / Stiff - 0.950 g/cm³)</option>
                    <option value={1.25}>Greenline Compostable (Biopolymer - 1.250 g/cm³)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="core-diameter-select" className="form-label">Core Size & Weight</label>
                  <select
                    id="core-diameter-select"
                    className="form-select"
                    value={coreDiameter}
                    onChange={(e) => {
                      const d = Number(e.target.value);
                      setCoreDiameter(d);
                      setCoreWeight(d === 3 ? 2.5 : 5.0);
                    }}
                  >
                    <option value={3}>3" I.D. Fiberboard Core (~2.5 lbs)</option>
                    <option value={6}>6" I.D. Heavy Industrial Core (~5.0 lbs)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="calc-result-panel">
              <div>
                <div className="calc-primary-stat">
                  <div className="calc-stat-label">
                    {rollCalcMode === 'length' ? 'Estimated Total Roll Weight' : 'Estimated Roll Footage'}
                  </div>
                  <div className="calc-stat-val">
                    {rollCalcMode === 'length'
                      ? `${calculatedRollWeight.toFixed(1)} lbs`
                      : `${Math.round(calculatedRollLength).toLocaleString()} ft`}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {rollCalcMode === 'length'
                      ? `Net Film: ${(calculatedRollWeight - coreWeight).toFixed(1)} lbs | Core: ${coreWeight} lbs`
                      : `Gross Weight: ${targetWeight} lbs | Net Film: ${(targetWeight - coreWeight).toFixed(1)} lbs`}
                  </div>
                </div>

                <div className="calc-secondary-grid">
                  <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Approx. Outer Diameter</div>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#FFFFFF' }}>
                      {rollOD.toFixed(1)}" O.D.
                    </div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Theoretical Yield</div>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--lime-400)' }}>
                      {Math.round(yieldSqInPerLb).toLocaleString()} in²/lb
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '0.75rem', borderRadius: '6px', border: '1px solid rgba(56,189,248,0.2)' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', color: 'var(--cyan-400)' }}>
                    <Info size={16} />
                    <span>Total Area: {Math.round((rollWidth * calculatedRollLength) / 12).toLocaleString()} sq ft</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1.5rem' }}
                  onClick={handleSendRollToRFQ}
                >
                  <Send size={16} />
                  Use These Details in a Quote Request
                </button>
                <div className="calc-disclaimer">
                  * Calculations are theoretical estimates based on nominal density values. Extrusion tension, winding hardness, and core wall thickness may cause standard manufacturing variance of ±5%.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TOOL B: BAG YIELD & MATERIAL USAGE CALCULATOR
           ========================================================================= */}
        {activeTab === 'bag' && (
          <div className="calc-grid">
            <div className="calc-inputs-pane">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="badge badge-emerald">Two-Wall Poly Bag Geometry</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Flat & Gusseted Formats</span>
              </div>

              <div className="grid-3">
                <div className="form-group">
                  <label htmlFor="bag-width-input" className="form-label">Bag Width (W)</label>
                  <div className="input-with-unit">
                    <input
                      id="bag-width-input"
                      type="number"
                      min="2"
                      step="0.25"
                      className="form-input"
                      value={bagWidth}
                      onChange={(e) => setBagWidth(Number(e.target.value))}
                    />
                    <span className="input-unit">in</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bag-length-input" className="form-label">Bag Length (L)</label>
                  <div className="input-with-unit">
                    <input
                      id="bag-length-input"
                      type="number"
                      min="2"
                      step="0.5"
                      className="form-input"
                      value={bagLength}
                      onChange={(e) => setBagLength(Number(e.target.value))}
                    />
                    <span className="input-unit">in</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bag-gusset-input" className="form-label">Side Gusset (G)</label>
                  <div className="input-with-unit">
                    <input
                      id="bag-gusset-input"
                      type="number"
                      min="0"
                      step="0.5"
                      className="form-input"
                      value={bagGusset}
                      onChange={(e) => setBagGusset(Number(e.target.value))}
                    />
                    <span className="input-unit">in</span>
                  </div>
                  <div className="form-subtext">Enter 0 for flat bags</div>
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label htmlFor="bag-thickness-input" className="form-label">Single-Wall Gauge / Mil</label>
                  <div className="input-with-unit">
                    <input
                      id="bag-thickness-input"
                      type="number"
                      min="0.4"
                      step="0.1"
                      className="form-input"
                      value={bagThicknessMil}
                      onChange={(e) => setBagThicknessMil(Number(e.target.value))}
                    />
                    <span className="input-unit">mil</span>
                  </div>
                  <div className="form-subtext">Equals {Math.round(bagThicknessMil * 100)} Gauge</div>
                </div>

                <div className="form-group">
                  <label htmlFor="bag-resin-select" className="form-label">Polymer Material</label>
                  <select
                    id="bag-resin-select"
                    className="form-select"
                    value={bagDensity}
                    onChange={(e) => setBagDensity(Number(e.target.value))}
                  >
                    <option value={0.925}>LLDPE (Tough Linear Low - 0.925 g/cm³)</option>
                    <option value={0.92}>LDPE (Clarity Low Density - 0.920 g/cm³)</option>
                    <option value={0.95}>HDPE (High Density - 0.950 g/cm³)</option>
                    <option value={1.25}>Greenline Compostable (BPI Resin - 1.250 g/cm³)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="bag-quantity-input" className="form-label">Production Order Quantity</label>
                <div className="input-with-unit">
                  <input
                    id="bag-quantity-input"
                    type="number"
                    min="1000"
                    step="1000"
                    className="form-input"
                    value={bagQuantity}
                    onChange={(e) => setBagQuantity(Number(e.target.value))}
                  />
                  <span className="input-unit">bags</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="calc-result-panel">
              <div>
                <div className="calc-primary-stat">
                  <div className="calc-stat-label">Weight per 1,000 Bags (M)</div>
                  <div className="calc-stat-val">
                    {weightPerThousand.toFixed(2)} lbs/M
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Single bag weight: {(singleBagWeightLbs * 16).toFixed(2)} oz ({singleBagWeightLbs.toFixed(4)} lbs)
                  </div>
                </div>

                <div className="calc-secondary-grid">
                  <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Total Resin Required</div>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--cyan-400)' }}>
                      {Math.round(totalOrderWeightLbs).toLocaleString()} lbs
                    </div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Bags Per Pound</div>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--lime-400)' }}>
                      {bagsPerPound.toFixed(1)}
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-emerald)' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', color: 'var(--emerald-400)' }}>
                    <CheckCircle2 size={16} />
                    <span>Configured: {bagWidth}" x {bagLength}"{bagGusset > 0 ? ` + ${bagGusset}" Gusset` : ''} @ {bagThicknessMil} mil</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1.5rem' }}
                  onClick={handleSendBagToRFQ}
                >
                  <Send size={16} />
                  Use These Details in a Quote Request
                </button>
                <div className="calc-disclaimer">
                  * Excludes seal bead trim and bottom weld bleed. For printed bags or punched vent holes, slight tare weight allowances apply.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TOOL C: MIL / GAUGE / MICRON CONVERTER
           ========================================================================= */}
        {activeTab === 'converter' && (
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-lime">Universal Plastics Standard</span>
              <h3>Polyethylene Thickness Cross-Reference</h3>
              <p style={{ marginTop: '0.5rem' }}>
                North American packaging uses <strong>Mils</strong> and <strong>Gauge</strong> interchangeably (1 mil = 100 gauge), while metric markets use <strong>Microns (µm)</strong>.
              </p>
            </div>

            <div className="grid-3" style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="conv-mil-input" className="form-label" style={{ fontSize: '1rem', color: 'var(--cyan-400)' }}>Mils (Thousandths)</label>
                <div className="input-with-unit">
                  <input
                    id="conv-mil-input"
                    type="number"
                    step="0.1"
                    className="form-input font-mono"
                    style={{ fontSize: '1.25rem', fontWeight: 600 }}
                    value={convMil}
                    onChange={(e) => handleMilChange(e.target.value)}
                  />
                  <span className="input-unit">mil</span>
                </div>
                <div className="form-subtext">1 mil = 0.001 inch</div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="conv-gauge-input" className="form-label" style={{ fontSize: '1rem', color: 'var(--lime-400)' }}>Gauge Number</label>
                <div className="input-with-unit">
                  <input
                    id="conv-gauge-input"
                    type="number"
                    step="5"
                    className="form-input font-mono"
                    style={{ fontSize: '1.25rem', fontWeight: 600 }}
                    value={convGauge}
                    onChange={(e) => handleGaugeChange(e.target.value)}
                  />
                  <span className="input-unit">ga</span>
                </div>
                <div className="form-subtext">100 gauge = 1.0 mil</div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="conv-micron-input" className="form-label" style={{ fontSize: '1rem', color: '#FFFFFF' }}>Microns (µm)</label>
                <div className="input-with-unit">
                  <input
                    id="conv-micron-input"
                    type="number"
                    step="1"
                    className="form-input font-mono"
                    style={{ fontSize: '1.25rem', fontWeight: 600 }}
                    value={convMicron}
                    onChange={(e) => handleMicronChange(e.target.value)}
                  />
                  <span className="input-unit">µm</span>
                </div>
                <div className="form-subtext">25.4 µm = 1.0 mil</div>
              </div>
            </div>

            {/* Quick Reference Benchmark Table */}
            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Standard Commercial Packaging Benchmarks</h4>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--text-dim)' }}>
                      <th style={{ padding: '0.75rem' }}>Application</th>
                      <th style={{ padding: '0.75rem' }}>Mils</th>
                      <th style={{ padding: '0.75rem' }}>Gauge</th>
                      <th style={{ padding: '0.75rem' }}>Microns</th>
                      <th style={{ padding: '0.75rem' }}>Typical Film Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 500 }}>Light Produce & Bakery Sleeves</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>0.75 mil</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>75 ga</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>19.0 µm</td>
                      <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>High-Clarity LDPE</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 500 }}>Standard Retail Carrier (T-Shirt)</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>1.25 mil</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>125 ga</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>31.7 µm</td>
                      <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>HMW-HDPE or Compostable</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 500 }}>Commercial Janitorial Can Liners</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>1.50 mil</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>150 ga</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>38.1 µm</td>
                      <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>EcoLogo Recycled / LLDPE</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 500 }}>Meat & Cheese Vacuum Pouches</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>3.00 mil</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>300 ga</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>76.2 µm</td>
                      <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Multi-Layer Nylon/PE Barrier</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', fontWeight: 500 }}>Heavy Industrial Gaylord Liners</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>4.00 - 6.00 mil</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>400 - 600 ga</td>
                      <td style={{ padding: '0.75rem', fontFamily: 'var(--font-mono)' }}>101 - 152 µm</td>
                      <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Hexene / Octene Heavy LLDPE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
