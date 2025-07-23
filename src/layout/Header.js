'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import DesktopNavigation from './DesktopNavigation';
import MobileNavToggle from './MobileNavToggle';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified header animation (removed heavy GSAP animation)
  useEffect(() => {
    // Removed heavy animation for better performance
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 will-change-transform ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-green-500/20' 
            : 'bg-black/70 backdrop-blur-sm border-b border-green-500/10'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Mobile Menu Toggle - Left Side */}
            <div className="lg:hidden">
              <MobileNavToggle 
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>

            {/* Logo */}
            <div 
              ref={logoRef}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20 relative overflow-hidden transition-all duration-200 group-hover:border-green-500/40 group-hover:bg-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 opacity-50"></div>
                  <span className="text-green-400 font-bold text-lg lg:text-xl relative z-10">FG</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-bold text-green-400 text-sm sm:text-base md:text-lg lg:text-xl">
                    <span className="lg:hidden">FG Science Degree College</span>
                    <span className="hidden lg:inline">FG Science Degree College for Men</span>
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - More spacing from college name */}
            <div className="hidden lg:block ml-auto pl-16">
              <DesktopNavigation isScrolled={isScrolled} />
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
};

export default Header;