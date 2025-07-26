'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const MobileSidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/about', 
      label: 'About',
      dropdown: [
        { href: '/about#history', label: 'History of FG' },
        { href: '/about#faculty', label: 'Faculty' }
      ]
    },
    { href: '/programs', label: 'Programs' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/affiliated-university', label: 'Affiliated University' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
  ];

  // Close sidebar when route changes (only if actually navigating)
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (isOpen && pathname !== prevPathname.current) {
      onClose();
      prevPathname.current = pathname;
    }
  }, [pathname, isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 left-0 h-full w-80 max-w-[85vw] z-[70] lg:hidden bg-black/90 backdrop-blur-md border-r border-green-500/20 mobile-sidebar will-change-transform"
            style={{
              boxShadow: '4px 0 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-6 border-b border-green-900/30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                  <span className="text-green-400 font-bold text-lg">FG</span>
                </div>
                <div>
                  <h2 className="font-bold text-md text-green-400">FG Science College</h2>
                  <p className="text-sm text-green-400/80">Excellence in Education</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-green-500/20 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(dropItem => pathname.startsWith(dropItem.href.split('#')[0])));
                  const hasDropdown = item.dropdown && item.dropdown.length > 0;
                  const isExpanded = expandedItem === index;
                  
                  return (
                    <motion.li 
                      key={item.href || item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    >
                      {hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setExpandedItem(isExpanded ? null : index)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 relative overflow-hidden ${
                              isActive
                                ? 'bg-green-500/20 text-green-300 border-l-4 border-green-400 font-medium'
                                : 'text-green-400/80 hover:bg-green-500/10 hover:text-green-300'
                            }`}
                            style={{ minHeight: '44px' }}
                          >
                            {/* Simplified hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                            <span className="relative z-10">{item.label}</span>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 relative z-10 ${isExpanded ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {item.dropdown.map((dropItem, dropIndex) => (
                                  <Link
                                    key={dropItem.href}
                                    href={dropItem.href}
                                    className="block px-4 py-2 text-sm text-green-400/70 hover:text-green-300 hover:bg-green-500/5 rounded-lg transition-all duration-200 relative overflow-hidden"
                                    onClick={onClose}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/3 to-blue-400/3 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                                    <span className="relative z-10">• {dropItem.label}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 relative overflow-hidden ${
                            isActive
                              ? 'bg-green-500/20 text-green-300 border-l-4 border-green-400 font-medium'
                              : 'text-green-400/80 hover:bg-green-500/10 hover:text-green-300'
                          }`}
                          style={{ minHeight: '44px' }}
                        >
                          {/* Simplified hover effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                          <span className="relative z-10">{item.label}</span>
                        </Link>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="p-6 border-t border-green-900/30"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/admissions"
                  className="block w-full px-6 py-3 bg-green-600 text-white text-center font-semibold rounded-xl hover:bg-green-500 transition-colors relative overflow-hidden"
                  style={{ minHeight: '44px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-50"></div>
                  <span className="relative z-10">Apply Now</span>
                </Link>
              </motion.div>
              
              <div className="mt-4 text-center space-y-1">
                <p className="text-sm text-green-400/80">
                  +91-123-456-7890
                </p>
                <p className="text-sm text-green-400/80">
                  info@fgscience.edu.in
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;