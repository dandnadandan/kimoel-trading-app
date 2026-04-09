import engineeringImage from "@/assets/ENGINEERING SERVICES.jpg";
import machiningImage from "@/assets/MACHINING AND FABRICATION.jpg";
import civilWorksImage from "@/assets/CIVIL WORKS.jpeg";
import automationDesign from "@/assets/Automation and Machine Design.png";
import cncLaser from "@/assets/CNC Laser Cutting Machine.png";
import roadRehab from "@/assets/Road Rehabilitation.png";

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string[];
  image: string;
  heroImage: string;
}

export const services: Service[] = [
  {
    id: "engineering-services",
    name: "Engineering Services",
    shortDescription: "Automation & design, electrical works, sheet metal, and control panels.",
    description: [
      "Kimoel Trading provides comprehensive engineering services designed to meet the complex needs of modern industries. Our team of skilled engineers combines technical expertise with innovative solutions to deliver projects that exceed expectations.",
      "We specialize in automation and machine design, creating custom solutions that optimize productivity and efficiency. Our electrical works services ensure reliable power distribution and control systems for industrial and commercial applications.",
      "Our sheet metal fabrication and electrical control panel services are executed with precision and attention to detail, ensuring high-quality results that meet industry standards and client specifications."
    ],
    image: engineeringImage,
    heroImage: automationDesign
  },
  {
    id: "machining-fabrication",
    name: "Machining & Fabrication",
    shortDescription: "CNC machining, milling, lathe, bending, shearing, and fabrication services.",
    description: [
      "Our machining and fabrication services utilize state-of-the-art equipment and skilled technicians to deliver precision components for various industrial applications. We maintain strict quality control throughout the manufacturing process.",
      "With advanced CNC laser cutting, milling, and lathe machines, we can produce complex parts with tight tolerances. Our fabrication services include sheet metal processing, bending, and assembly to meet diverse project requirements.",
      "From prototyping to large-scale production, we offer flexible machining solutions that cater to different industries, including automotive, construction, and manufacturing sectors."
    ],
    image: machiningImage,
    heroImage: cncLaser
  },
  {
    id: "civil-works",
    name: "Civil Works",
    shortDescription: "Comprehensive construction and civil engineering services.",
    description: [
      "Kimoel Trading's civil works division provides comprehensive construction services for residential, commercial, and industrial projects. We have extensive experience in executing complex civil engineering projects with precision and efficiency.",
      "Our services include road rehabilitation, structural works, concreting, and fire protection system installation. We also provide heavy equipment rental, including backhoes, to support various construction activities.",
      "With a team of experienced civil engineers and construction professionals, we ensure that every project is completed to the highest standards of quality, safety, and compliance with local regulations."
    ],
    image: civilWorksImage,
    heroImage: roadRehab
  }
];
