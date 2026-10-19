export const companyData = {
  name: "Tycho Poly Inc.",
  foundedYear: 2013,
  experienceYears: "30+",
  tagline: "Engineered Packaging. Built Around Your Needs.",
  mission: "To deliver consistent quality, rapid turnaround times, and high-performance polyethylene and sustainable film solutions that empower distributors and enterprise converters across North America.",
  
  facilities: [
    {
      id: "woodbridge",
      name: "Head Office & Primary Extrusion Plant",
      type: "Headquarters & Primary Manufacturing",
      address: "101 Hanlan Rd",
      city: "Woodbridge",
      province: "ON",
      postalCode: "L4L 3P5",
      country: "Canada",
      phone: "(905) 264-3475",
      email: "info@tychopoly.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM EST",
      operations: [
        "High-output blown film multi-layer extrusion towers",
        "Polyethylene resin formulation, blending, and compounding",
        "Executive administration, engineering, and customer support",
        "Full-suite quality control and lab film testing"
      ],
      mapUrl: "https://maps.google.com/?q=101+Hanlan+Rd,+Woodbridge,+ON+L4L+3P5"
    },
    {
      id: "concord",
      name: "Concord Converting & Production Facility",
      type: "Expanded Converting & High-Speed Converting Line",
      address: "9030 Keele St Unit #2",
      city: "Concord",
      province: "ON",
      postalCode: "L4K 2N2",
      country: "Canada",
      phone: "(905) 264-3475",
      email: "concord@tychopoly.com",
      hours: "Monday - Friday: 7:30 AM - 4:30 PM EST",
      operations: [
        "Dedicated high-volume converting and precision bag making lines",
        "Multi-lane star-seal coreless rewinding and packaging",
        "Wicketed automated packaging line fabrication",
        "Warehouse distribution and rapid JIT logistics dispatch"
      ],
      mapUrl: "https://maps.google.com/?q=9030+Keele+St+Unit+2,+Concord,+ON+L4K+2N2"
    }
  ],

  certifications: [
    {
      name: "FSSC 22000",
      category: "Food Safety",
      issuer: "Foundation for Food Safety Certification",
      status: "Active & Verified",
      description: "Globally recognized food safety management certification covering manufacturing and processing of food contact packaging."
    },
    {
      name: "CFIA & FDA Compliant",
      category: "Regulatory Safety",
      issuer: "Health Canada / US FDA",
      status: "Active & Verified",
      description: "Resins and additives strictly adhere to FDA 21 CFR 177.1520 and Canadian Food Inspection Agency guidelines for direct food contact."
    },
    {
      name: "EcoLogo Certified",
      category: "Environmental",
      issuer: "Underwriters Laboratories (UL 126)",
      status: "Active & Verified",
      description: "Rigorous third-party validation verifying recycled plastic content and reduced environmental manufacturing footprint."
    },
    {
      name: "BPI Certified Compostable",
      category: "Compostability",
      issuer: "Biodegradable Products Institute",
      status: "Active & Verified",
      description: "Certified to decompose completely in municipal composting systems under ASTM D6400 and ASTM D6868 protocols within 90 days."
    },
    {
      name: "ISO Quality Framework",
      category: "Quality Management",
      issuer: "International Organization for Standardization",
      status: "Transition & Renewal Review",
      description: "Facility operations align with rigorous quality management protocols; ISO quality standards are actively maintained across all extrusion lines."
    }
  ],

  stats: [
    { value: "2013", label: "Founded in Canada", sub: "Built on 30+ yrs industry experience" },
    { value: "2", label: "GTA Facilities", sub: "Woodbridge HQ & Concord Plant" },
    { value: "10+", label: "Product Categories", sub: "From rollstock to bio-sustainable bags" },
    { value: "100%", label: "Recyclable / Bio Options", sub: "EcoLogo & BPI certified solutions" }
  ],

  careers: [
    {
      id: "shift-supervisor",
      title: "Shift Supervisor – Blown Film Extrusion",
      location: "Woodbridge, ON (On-Site)",
      department: "Production Operations",
      type: "Full-Time",
      description: "We are seeking an experienced Extrusion Shift Supervisor to lead production teams, monitor blown film line throughput, oversee resin blend changes, and ensure strict safety and quality compliance.",
      requirements: [
        "Minimum 3-5 years experience operating or supervising blown polyethylene film extrusion lines",
        "Demonstrated knowledge of gauge profiling, bubble stability, and corona treatment",
        "Strong leadership skills and commitment to workplace safety (WHMIS & OSHA)",
        "Ability to troubleshoot mechanical extrusion and converting equipment"
      ]
    },
    {
      id: "extrusion-operator",
      title: "Blown Film Extrusion Line Operator",
      location: "Woodbridge & Concord, ON (On-Site)",
      department: "Manufacturing",
      type: "Full-Time",
      description: "Operate modern high-capacity blown film extruders, handle roll changeovers, monitor die temperatures and resin feed, and perform inline quality checks.",
      requirements: [
        "1-3 years experience in plastics manufacturing or machinery operations",
        "Ability to read micrometers, gauge calipers, and technical order sheets",
        "Comfortable with rotating shift schedules and physical roll handling"
      ]
    },
    {
      id: "qa-technician",
      title: "Quality Assurance & Lab Technician",
      location: "Woodbridge, ON (On-Site)",
      department: "Quality Control",
      type: "Full-Time",
      description: "Conduct routine laboratory testing of extruded films including tensile strength, elongation, dart-drop impact, tear resistance, and seal integrity in our FSSC 22000 environment.",
      requirements: [
        "Post-secondary diploma in chemistry, materials science, or related technical field",
        "Familiarity with ASTM testing standards for flexible films (D882, D1709, D1922)",
        "Detail-oriented mindset with rigorous documentation habits"
      ]
    }
  ]
};
