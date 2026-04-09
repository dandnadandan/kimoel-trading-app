// Services.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

// Import category images
import engineeringImage from "@/assets/ENGINEERING SERVICES.jpg";
import machiningImage from "@/assets/MACHINING AND FABRICATION.jpg";
import civilWorksImage from "@/assets/CIVIL WORKS.jpeg";

// Sub-service images
import automationDesign from "@/assets/Automation and Machine Design.png";
import architecturalDesign from "@/assets/Architectural and Structural Design.jpg";
import electricalWorks from "@/assets/Electrical Works.png";
import sheetMetal from "@/assets/Sheet Metal Works.png";
import controlPanel from "@/assets/Fabrication of Electrical Control Panel.png";

import cncLaser from "@/assets/CNC Laser Cutting Machine.png";
import cncMilling from "@/assets/CNC Milling Machine.jpg";
import latheMachine from "@/assets/Lathe Machine.png";
import millingMachine from "@/assets/Milling Machine.png";
import pressBrake from "@/assets/Press Break Bending Machine.jpg";
import shearing from "@/assets/Shearing Machine.jpg";
import bandSaw from "@/assets/Band Saw Machine.jpg";

import backhoe from "@/assets/Rental of Backhoe.jpg";
import roadRehab from "@/assets/Road Rehabilitation.png";
import concreting from "@/assets/Concreting.png";
import structural from "@/assets/Structural.png.jpg";
import fireProtection from "@/assets/Fire Protection System.png";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10, transition: { duration: 0.18 } },
};

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  // Main categories matching the services data
  const categories = [
    {
      title: "Engineering Services",
      description:
        "Automation & design, electrical works, sheet metal, and control panels.",
      image: engineeringImage,
      serviceId: "engineering-services"
    },
    {
      title: "Machining & Fabrication",
      description:
        "CNC machining, milling, lathe, bending, shearing, and fabrication services.",
      image: machiningImage,
      serviceId: "machining-fabrication"
    },
    {
      title: "Civil Works",
      description:
        "Comprehensive construction and civil engineering services.",
      image: civilWorksImage,
      serviceId: "civil-works"
    },
  ];

  // Auto-cycle images for each category
  React.useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    categories.forEach(category => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => {
          const categoryImages = subServices[category.title] || [];
          const currentIndex = prev[category.title] || 0;
          const nextIndex = (currentIndex + 1) % categoryImages.length;
          return { ...prev, [category.title]: nextIndex };
        });
      }, 3500); // Change image every 3.5 seconds (faster)
      
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Get current image for each category
  const getCurrentImage = (categoryTitle: string) => {
    const categoryImages = subServices[categoryTitle] || [];
    const index = currentImageIndex[categoryTitle] || 0;
    return categoryImages[index]?.image || categories.find(c => c.title === categoryTitle)?.image;
  };

  // Sub-services for each category (non-clickable highlights)
  const subServices: Record<
    string,
    { title: string; description: string; image: string; imageAlt: string }[]
  > = {
    "Engineering Services": [
      {
        title: "Automation & Machine Design",
        description: "Custom automation and machine design solutions.",
        image: automationDesign,
        imageAlt: "Automation & Machine Design",
      },
      {
        title: "Architectural & Structural Design",
        description: "Designing functional and durable structures.",
        image: architecturalDesign,
        imageAlt: "Architectural & Structural Design",
      },
      {
        title: "Electrical Works",
        description: "Reliable electrical works for industrial and commercial use.",
        image: electricalWorks,
        imageAlt: "Electrical Works",
      },
      {
        title: "Sheet Metal Works",
        description: "Fabrication and processing of sheet metal components.",
        image: sheetMetal,
        imageAlt: "Sheet Metal Works",
      },
      {
        title: "Fabrication of Electrical Control Panel",
        description: "High-quality electrical control panel fabrication.",
        image: controlPanel,
        imageAlt: "Control Panel Fabrication",
      },
    ],
    "Machining & Fabrication": [
      {
        title: "CNC Laser Cutting Machine",
        description: "Precision cutting with advanced CNC laser technology.",
        image: cncLaser,
        imageAlt: "CNC Laser Cutting",
      },
      {
        title: "CNC Milling Machine",
        description: "High-precision CNC milling for complex components.",
        image: cncMilling,
        imageAlt: "CNC Milling",
      },
      {
        title: "Lathe Machine",
        description: "Turning solutions using high-grade lathe machines.",
        image: latheMachine,
        imageAlt: "Lathe Machine",
      },
      {
        title: "Milling Machine",
        description: "Reliable milling machine services for all industries.",
        image: millingMachine,
        imageAlt: "Milling Machine",
      },
      {
        title: "Press Brake Bending Machine",
        description:
          "Accurate sheet metal bending with press brake technology.",
        image: pressBrake,
        imageAlt: "Press Brake Bending",
      },
      {
        title: "Shearing Machine",
        description: "Efficient sheet metal cutting using shearing machines.",
        image: shearing,
        imageAlt: "Shearing Machine",
      },
      {
        title: "Band Saw Machine",
        description: "Versatile cutting services with band saw machines.",
        image: bandSaw,
        imageAlt: "Band Saw Machine",
      },
    ],
    "Civil Works": [
      {
        title: "Rental of Backhoe",
        description: "Reliable backhoe rental for construction projects.",
        image: backhoe,
        imageAlt: "Backhoe Rental",
      },
      {
        title: "Road Rehabilitation",
        description: "Comprehensive road rehabilitation and maintenance.",
        image: roadRehab,
        imageAlt: "Road Rehabilitation",
      },
      {
        title: "Concreting",
        description: "High-quality concreting for structural integrity.",
        image: concreting,
        imageAlt: "Concreting",
      },
      {
        title: "Structural",
        description: "Strong and reliable structural construction services.",
        image: structural,
        imageAlt: "Structural Works",
      },
      {
        title: "Fire Protection System",
        description: "Installation of reliable fire protection systems.",
        image: fireProtection,
        imageAlt: "Fire Protection",
      },
    ],
  };
  return (
    <section id="services" className="py-8 md:py-12 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide engineering, machining, and civil works services to support
            industrial and construction needs with precision and reliability.
          </p>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {/* Main Categories Grid */}
          <motion.div
            key="categories"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={gridVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            {categories.map((category, i) => (
              <motion.div
                key={category.title}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={itemVariants}
                transition={{
                  delay: i * 0.03,
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group text-left bg-white rounded-2xl overflow-hidden shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hover:shadow-xl"
              >
                <Link to={`/services/${category.serviceId}`} className="block">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    {/* Render all images with controlled opacity */}
                    {subServices[category.title]?.map((service, index) => {
                      const currentIndex = currentImageIndex[category.title] || 0;
                      const isCurrent = index === currentIndex;
                      const isPrevious = index === ((currentIndex - 1 + subServices[category.title].length) % subServices[category.title].length);
                      
                      return (
                        <motion.img
                          key={`${category.title}-${index}`}
                          src={service.image}
                          alt={`${category.title} - ${service.title}`}
                          className="w-full h-full object-cover absolute inset-0"
                          animate={{ 
                            opacity: isCurrent ? 1 : isPrevious ? 0 : 0
                          }}
                          transition={{ 
                            duration: 1.0,
                            ease: "easeInOut"
                          }}
                          loading="lazy"
                        />
                      );
                    })}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-semibold text-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        Inquire Now
                      </span>
                    </div>
                    {/* Image indicators */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {subServices[category.title]?.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-1000 easeInOut ${
                            index === (currentImageIndex[category.title] || 0)
                              ? 'bg-white'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-semibold transition-colors duration-300 text-brand-blue-dark md:group-hover:text-[#FFD700]">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
