// Product data structure with detailed information for product detail pages

export interface ProductDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  brand: string;
  model: string;
  type: string;
  about: string;
  specifications: string[];
}

// Product images
import electricalSupplies from "@/assets/Electrical Supplies.jpg";
import electricalPanel from "@/assets/Electrical Panel.png";
import cableTray from "@/assets/Cable Tray.jpg";
import acMotor from "@/assets/AC Motors and Gear Motors.png";
import bearings from "@/assets/Bearing and Seal.jpg";
import pneumaticsPart from "@/assets/Pneumatic Cylinder Accessories.jpg";
import conveyor from "@/assets/Conveyor System.png";
import jigs from "@/assets/Jigs and Fixtures.png";

export const productsData: ProductDetail[] = [
  // Electrical Products
  {
    id: "electrical-supply",
    title: "Electrical Supply",
    description: "Complete solutions for industrial and commercial use.",
    image: electricalSupplies,
    imageAlt: "Electrical supply",
    category: "Electrical",
    brand: "KIMOEL",
    model: "KES-2024",
    type: "Electrical Components",
    about: "Comprehensive electrical supply solutions designed for industrial and commercial applications. Our products meet international safety standards and provide reliable performance in demanding environments.",
    specifications: [
      "Voltage Range: 220V-480V",
      "Frequency: 50/60 Hz",
      "Operating Temperature: -40°C to +85°C",
      "IP Rating: IP67",
      "Certification: ISO 9001, IEC 60364",
      "Warranty: 2 years"
    ]
  },
  {
    id: "electrical-panel",
    title: "Electrical Panel",
    description: "Durable and safe panels for power distribution.",
    image: electricalPanel,
    imageAlt: "Electrical panel",
    category: "Electrical",
    brand: "KIMOEL",
    model: "KEP-2024",
    type: "Power Distribution",
    about: "Heavy-duty electrical panels engineered for safe and efficient power distribution. Features robust construction, advanced protection mechanisms, and easy maintenance access.",
    specifications: [
      "Rated Current: 100A-400A",
      "Short Circuit Rating: 25kA-65kA",
      "Material: Cold-rolled steel with powder coating",
      "Protection: IP54 (standard), IP65 (optional)",
      "Busbar Material: High conductivity copper",
      "Standards: IEC 61439, UL 891"
    ]
  },
  {
    id: "cable-tray",
    title: "Cable Tray",
    description: "Reliable cable trays for safe wiring management.",
    image: cableTray,
    imageAlt: "Cable tray",
    category: "Electrical",
    brand: "KIMOEL",
    model: "KCT-2024",
    type: "Cable Management",
    about: "Premium cable tray systems designed for organized and secure cable routing. Ideal for industrial facilities, commercial buildings, and infrastructure projects.",
    specifications: [
      "Material: Galvanized steel / Aluminum / Stainless steel",
      "Load Capacity: 50-200 kg/m",
      "Standard Length: 3 meters",
      "Finish: Hot-dip galvanized or powder coated",
      "Temperature Range: -50°C to +150°C",
      "Corrosion Resistance: Salt spray tested 1000+ hours"
    ]
  },
  
  // Mechanical Components
  {
    id: "ac-motors",
    title: "AC Motors and Gear Motors",
    description: "Industrial-grade motors built for durability.",
    image: acMotor,
    imageAlt: "AC motor",
    category: "Mechanical Components",
    brand: "KIMOEL",
    model: "KAM-2024",
    type: "Electric Motors",
    about: "High-performance AC motors and gear motors designed for industrial applications. Built with precision engineering for maximum efficiency and longevity in demanding environments.",
    specifications: [
      "Power Range: 0.25kW to 315kW",
      "Speed: 750-3600 RPM",
      "Efficiency: IE3/IE4 (Premium Efficiency)",
      "Protection: IP55/IP65",
      "Insulation Class: F/H",
      "Mounting: B3, B5, B14 foot/flange mounted"
    ]
  },
  {
    id: "bearings-seals",
    title: "Bearings & Seals",
    description: "Durable bearings and seals for precision.",
    image: bearings,
    imageAlt: "Bearings and seals",
    category: "Mechanical Components",
    brand: "KIMOEL",
    model: "KBS-2024",
    type: "Mechanical Components",
    about: "Precision-engineered bearings and seals providing reliable performance for rotating machinery. Designed to reduce friction and extend equipment life.",
    specifications: [
      "Bearing Types: Ball, Roller, Tapered, Spherical",
      "Size Range: 10mm to 1000mm bore diameter",
      "Material: Chrome steel, stainless steel, ceramic hybrid",
      "Lubrication: Grease or oil lubricated options",
      "Load Capacity: Dynamic loads up to 5000 kN",
      "Operating Temperature: -40°C to +200°C"
    ]
  },
  
  // Automation & Pneumatics
  {
    id: "pneumatic-accessories",
    title: "Pneumatic Cylinder Accessories",
    description: "High-quality pneumatic parts for automation systems.",
    image: pneumaticsPart,
    imageAlt: "Pneumatics",
    category: "Automation & Pneumatics",
    brand: "KIMOEL",
    model: "KPA-2024",
    type: "Pneumatic Components",
    about: "Comprehensive range of pneumatic cylinder accessories designed for automation systems. Provides smooth operation and precise control in industrial applications.",
    specifications: [
      "Operating Pressure: 1-10 bar",
      "Cylinder Bore: 20mm to 320mm",
      "Stroke Length: 25mm to 2000mm",
      "Port Size: M5 to G1/2",
      "Temperature Range: -20°C to +80°C",
      "Cycle Life: 10+ million cycles"
    ]
  },
  
  // Systems & Tooling
  {
    id: "conveyor-system",
    title: "Conveyor System",
    description: "Custom conveyor systems for industrial use.",
    image: conveyor,
    imageAlt: "Conveyor system",
    category: "Systems & Tooling",
    brand: "KIMOEL",
    model: "KCS-2024",
    type: "Material Handling",
    about: "Custom-designed conveyor systems optimized for specific industrial applications. Built for efficiency, durability, and seamless integration with existing production lines.",
    specifications: [
      "Load Capacity: 50-2000 kg/m",
      "Speed: 0.1-2.5 m/s (variable)",
      "Width: 300mm to 2000mm",
      "Length: Customizable up to 100m",
      "Drive System: AC motor with VFD control",
      "Frame Material: Stainless steel / Powder coated steel"
    ]
  },
  {
    id: "jigs-fixtures",
    title: "Jigs and Fixtures",
    description: "Precision jigs and fixtures for manufacturing.",
    image: jigs,
    imageAlt: "Jigs and fixtures",
    category: "Systems & Tooling",
    brand: "KIMOEL",
    model: "KJF-2024",
    type: "Manufacturing Tools",
    about: "Custom-engineered jigs and fixtures designed to enhance manufacturing precision and efficiency. Built to exact specifications for optimal production performance.",
    specifications: [
      "Material: Tool steel, aluminum alloys, composites",
      "Precision: ±0.01mm tolerance",
      "Hardness: 45-65 HRC (heat treated)",
      "Custom Design: CAD/CAM engineered",
      "Quick Change: Tool-less changeover options",
      "Application: CNC, drilling, assembly, inspection"
    ]
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): ProductDetail[] => {
  return productsData.filter(product => product.category === category);
};

// Helper function to get product by ID
export const getProductById = (id: string): ProductDetail | undefined => {
  return productsData.find(product => product.id === id);
};
