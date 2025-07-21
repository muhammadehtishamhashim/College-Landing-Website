import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Core Web Vitals monitoring
export function reportWebVitals(metric) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
        // You can send to Google Analytics, Vercel Analytics, etc.
        // Example: gtag('event', metric.name, { value: metric.value });
    }
}

// Initialize Web Vitals tracking
export function initWebVitals() {
    onCLS(reportWebVitals);
    onINP(reportWebVitals); // INP replaced FID in newer versions
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
}

// Performance optimization utilities
export const performanceUtils = {
    // Preload critical resources
    preloadResource: (href, as = 'script') => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
    },

    // Lazy load images with intersection observer
    lazyLoadImages: () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    // Optimize animations for performance
    optimizeAnimations: () => {
        // Reduce motion for users who prefer it
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        return !prefersReducedMotion.matches;
    }
};