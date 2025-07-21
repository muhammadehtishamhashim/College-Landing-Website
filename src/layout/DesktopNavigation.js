'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const DesktopNavigation = ({ isScrolled }) => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/affiliated-university', label: 'Affiliated University' },
    { href: '/contact', label: 'Contact' },
  ];

  // Smooth hover animations with GSAP
  const handleMouseEnter = (e, index) => {
    const item = e.currentTarget;
    const span = item.querySelector('span');

    // Scale and glow effect
    gsap.to(item, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });

    // Text glow effect
    gsap.to(span, {
      textShadow: '0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.4)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e) => {
    const item = e.currentTarget;
    const span = item.querySelector('span');

    // Reset scale and glow
    gsap.to(item, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });

    gsap.to(span, {
      textShadow: 'none',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <nav ref={navRef} className="hidden lg:flex items-center space-x-8">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <div
            key={item.href}
            className="relative group"
          >
            <Link
              href={item.href}
              className={`nav-item relative px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl block ${isActive
                ? 'text-green-400 font-semibold'
                : 'text-green-400/80 hover:text-white'
                }`}
              onMouseEnter={(e) => {
                setHoveredItem(index);
                handleMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                setHoveredItem(null);
                handleMouseLeave(e);
              }}
            >
              {/* Reliable hover background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 via-green-500/8 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

              {/* Enhanced hover background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400/5 via-green-500/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-95 group-hover:scale-100" />

              {/* Floating particles effect */}
              <AnimatePresence>
                {hoveredItem === index && (
                  <>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400/60 rounded-full"
                        initial={{
                          opacity: 0,
                          x: (i - 1) * 15,
                          y: 20
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: -20,
                          x: (i - 1) * 20
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        style={{
                          left: `${20 + i * 20}%`,
                          bottom: '0px'
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              <span className="relative z-10 block transition-all duration-300 group-hover:transform group-hover:-translate-y-0.5">{item.label}</span>

              {/* Active indicator with enhanced animation */}
              {isActive && (
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-green-400 via-green-300 to-green-400"
                  layoutId="activeIndicator"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Hover underline */}
              {!isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-green-400/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              )}
            </Link>

            {/* Enhanced hover tooltip */}
            <AnimatePresence>
              {hoveredItem === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8, rotateX: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.3
                  }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 z-50 pointer-events-none"
                >
                  <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white px-4 py-2 rounded-xl shadow-2xl border border-green-500/30 backdrop-blur-sm relative overflow-hidden">
                    {/* Animated background shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <div className="text-sm font-medium whitespace-nowrap relative z-10">
                      Navigate to {item.label}
                    </div>

                    {/* Enhanced arrow */}
                    <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-600 rotate-45 border-l border-t border-green-500/30"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;