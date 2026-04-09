import React from 'react';

const ContactBar = () => {

  return (
    <div className="h-[44px] bg-gradient-to-r from-[#7A6A3A] via-[#8F7D42] to-[#7A6A3A] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center h-full relative">
          {/* Section 1: Location - Left */}
          <div className="flex items-center gap-2 flex-shrink-0 absolute left-16">
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

          {/* Section 2: Phone - Center */}
          <div className="flex items-center gap-2 flex-shrink-0 absolute left-1/2 -translate-x-1/2 ml-8">
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
          <div className="flex items-center gap-1 absolute right-8">
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
  );
};

export default ContactBar;
