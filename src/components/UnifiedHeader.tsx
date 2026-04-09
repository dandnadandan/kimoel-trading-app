import React, { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/Back.png";

const UnifiedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement | null>(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Track active section for visual indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with sticky header offset
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - (headerHeight + 8);
    window.scrollTo({ top, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50"
    >
      {/* Contact Bar - Top Section */}
      <div className="h-[44px] bg-gradient-to-r from-[#7A6A3A] via-[#8F7D42] to-[#7A6A3A] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-full">
            {/* Section 1: Location - Left */}
            <div className="flex items-center gap-2 flex-shrink-0 ml-32">
              <svg 
                className="w-4 h-4 text-[#C9A84C] flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="text-white text-[13px] hidden md:inline">
                Purok 1, Brgy. Lodlod, Lipa City, Batangas 4217 Philippines
              </span>
              <span className="text-white text-[13px] md:hidden">
                Lipa City, Batangas
              </span>
            </div>

            {/* Section 2: Phone - Center-left */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg 
                className="w-4 h-4 text-[#C9A84C] flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="text-white text-[13px]">+63 (043) 233-2566</span>
            </div>

            {/* Section 3: Social Icons - Right */}
            <div className="flex items-center gap-1">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=100075976223841" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-[#C9A84C] bg-black/20 hover:bg-[#C9A84C] transition-all duration-200 flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg 
                  className="w-3.5 h-3.5 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Messenger */}
              <a 
                href="https://www.facebook.com/profile.php?id=100075976223841" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-[#C9A84C] bg-black/20 hover:bg-[#C9A84C] transition-all duration-200 flex items-center justify-center"
                aria-label="Messenger"
              >
                <svg 
                  className="w-3.5 h-3.5 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" rx="2"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-[#C9A84C] bg-black/20 hover:bg-[#C9A84C] transition-all duration-200 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg 
                  className="w-3.5 h-3.5 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Bottom Section */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 md:py-3">
          <div className="flex items-center justify-between">
            {/* Logo + Company Name */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Kimoel Trading Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
              />

              {/* Two lines on mobile, one line from md+ */}
              <div className="leading-tight">
                {/* Mobile: two lines, compact size */}
                <span className="block md:hidden font-extrabold text-brand-blue-dark text-sm sm:text-base">
                  KIMOEL TRADING
                </span>
                <span className="block md:hidden font-extrabold text-brand-blue-dark text-sm sm:text-base">
                  &amp; CONSTRUCTION INC.
                </span>

                {/* Desktop: single line, larger */}
                <span className="hidden md:block font-extrabold text-brand-blue-dark text-lg lg:text-2xl">
                  KIMOEL TRADING AND CONSTRUCTION INC.
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              role="navigation"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    className={`relative px-2 py-1 transition-all duration-200 font-medium z-10 ${
                      activeSection === link.href.slice(1)
                        ? "text-[#FFD700]"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                  {/* Individual hover/active background effect for each nav item */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-full transition-all duration-300 pointer-events-none ${
                      activeSection === link.href.slice(1)
                        ? "h-[88px] bg-brand-blue-dark/10 -top-[44px]"
                        : "h-0 bg-brand-blue-dark/5 top-0"
                    }`}
                  />
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle (44px min tap target) */}
            <button
              className="md:hidden grid place-items-center w-11 h-11 rounded-md ring-offset-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 transition"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Animated Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden mt-2 pt-2 border-t border-gray-200 bg-background/95 rounded-md shadow-md"
              >
                <nav className="flex flex-col px-4 py-3 space-y-1.5" aria-label="Mobile">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => onNavClick(e, link.href)}
                      className={`py-2 text-base font-medium transition-colors duration-200 ${
                        activeSection === link.href.slice(1)
                          ? "text-[#FFD700]"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default UnifiedHeader;
