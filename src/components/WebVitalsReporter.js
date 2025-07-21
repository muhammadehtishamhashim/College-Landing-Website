'use client';

import { useEffect } from 'react';

export default function WebVitalsReporter() {
  useEffect(() => {
    // Import and initialize web vitals tracking with error handling
    import('../lib/vitals').then(({ initWebVitals }) => {
      try {
        initWebVitals();
      } catch (error) {
        console.warn('Web Vitals initialization failed:', error);
      }
    }).catch(error => {
      console.warn('Failed to load Web Vitals:', error);
    });
  }, []);

  return null;
}