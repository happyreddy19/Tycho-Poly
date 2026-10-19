# Tycho Poly Inc. – Enterprise Website Redesign

Modern, high-performance website and engineering portal for **Tycho Poly Inc.**, a Canadian manufacturer of blown polyethylene film, high-barrier food packaging, industrial covers, and certified **Greenline™** bio-sustainable and compostable products.

---

## 🚀 Live Redesign Highlights

1. **Enterprise B2B Visual Identity:**
   - Deep charcoal (`#090D16`) and technical slate theme with vibrant emerald green (`#10B981`) sustainability accents and electric lime (`#84CC16`) indicators.
   - Clean industrial typography pairing **Space Grotesk** for confident headlines, **Inter** for readable body specifications, and **JetBrains Mono** for engineering formulas.
   - Custom high-resolution photography covering real blown-film extrusion lines, sustainable biopolymer rolls, and cleanroom converting operations.

2. **10 Dedicated Product Categories (Zero Boilerplate):**
   - **Flexible Poly Packaging** (Tubing, sheeting, shrink films, garment bags)
   - **Food Service Packaging** (FDA/CFIA approved high-clarity bags, bakery & deli)
   - **Industrial Packaging** (Gaylord box liners, pallet covers, mattress shrouds)
   - **Waste Management & Janitorial** (Star-sealed coreless rolls, biohazard, water-soluble)
   - **Rollstock Films** (Multi-layer barrier films for automated Form-Fill-Seal lines)
   - **Stand-Up & Zipper Pouches** (Shelf-standing barrier pouches with resealable zippers)
   - **T-Shirt Bags** (Retail, supermarket, and municipal-compliant carrier bags)
   - **Vacuum Bags** (Multi-layer oxygen barrier pouches for meat, cheese & seafood)
   - **Wicketed Bags** (High-speed automated packaging line wicketed bags)
   - **Retail Products** (Contractor clean-up boxes, outdoor bags, display cartons)

3. **Built-in Packaging Calculator Suite (Replaces Broken `calc.tychopoly.com`):**
   - **Tool A: Roll Weight & Footage Estimator:** Calculates net/gross roll weight, footage, yield (in²/lb), and roll outer diameter (O.D.) based on exact polymer density (LDPE, LLDPE, HDPE, Compostable).
   - **Tool B: Bag Yield & Material Usage:** Two-wall poly bag geometry calculator computing weight per 1,000 bags (lbs/M), total resin requirements, and bags per pound.
   - **Tool C: Mil ⇄ Gauge ⇄ Micron Converter:** Instant bidirectional conversion based on ASTM D2103 standards.
   - **RFQ Integration:** Direct "Use These Details in a Quote Request" action that transfers calculated dimensions and weights directly into the RFQ configurator.

4. **Dedicated Greenline™ Sustainability Hub:**
   - **Greenline BioSustainable™:** Canadian patent-pending microbiome-triggered natural biodegradation without releasing persistent microplastics.
   - **Greenline Compostable™:** 100% plant-based renewable resins certified under BPI (ASTM D6400) to break down in municipal facilities within 90 days.
   - **Recycled Polyethylene:** EcoLogo certified (UL 126) post-consumer (PCR) and post-industrial (PIR) blends.
   - Full technical comparison matrix and FAQ section.

5. **Integrated Request for Quote (RFQ) Engine:**
   - 4-step interactive wizard with conditional fields, instant validation, and automated ticket generation (`TYC-RFQ-YYYY-XXXX`).

6. **Dual Canadian Facilities:**
   - **Head Office & Primary Plant:** 101 Hanlan Rd, Woodbridge, ON L4L 3P5
   - **Converting & Production Plant:** 9030 Keele St Unit #2, Concord, ON L4K 2N2

---

## 🛠️ Technology Stack

* **Framework:** React 18 + Vite 6
* **Styling:** Modular Vanilla CSS Design System with custom tokens (`src/styles/index.css`)
* **Icons:** Lucide React
* **Typography:** Space Grotesk, Inter, JetBrains Mono (Google Fonts)
* **SEO:** OpenGraph, Twitter Cards, Semantic HTML5, and Schema.org ManufacturingBusiness JSON-LD

---

## 🏃 Running Locally

```bash
# Install dependencies
npm.cmd install

# Start Vite development server (default port 3000)
npm.cmd run dev

# Build production bundle
npm.cmd run build
```
