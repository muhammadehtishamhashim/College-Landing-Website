"use client"
import React, { useState, useEffect, useRef } from 'react';

const SimpleImageTransition = ({ images = [], width = 320, height = 192 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const intervalRef = useRef(null);
  
  // Preload images for smoother transitions
  useEffect(() => {
    if (!images || images.length === 0) return;
    
    let loadedCount = 0;
    const imageElements = images.map(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === images.length) {
          setIsLoaded(true);
        }
      };
      return img;
    });
    
    return () => {
      // Clean up image references
      imageElements.forEach(img => {
        img.onload = null;
      });
    };
  }, [images]);
  
  // Set up image rotation
  useEffect(() => {
    if (!isLoaded || images.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoaded, images.length]);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    // Reset interval timer when manually changing image
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 4000);
    }
  };
  
  // Helper function to handle width/height values that might be percentages
  const getDimensionStyle = (dimension) => {
    if (typeof dimension === 'number') {
      return `${dimension}px`;
    }
    return dimension; // If it's already a string like '100%'
  };
  
  if (!images || images.length === 0) {
    return (
      <div 
        className="bg-gray-800 rounded-lg flex items-center justify-center"
        style={{ 
          width: getDimensionStyle(width), 
          height: getDimensionStyle(height) 
        }}
      >
        <span className="text-gray-400">No images</span>
      </div>
    );
  }
  
  // Show loading state until images are preloaded
  if (!isLoaded) {
    return (
      <div 
        className="bg-gray-800 rounded-lg flex flex-col items-center justify-center"
        style={{ 
          width: getDimensionStyle(width), 
          height: getDimensionStyle(height) 
        }}
      >
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
        <span className="text-gray-400 text-xs">
          Loading images ({imagesLoaded}/{images.length})
        </span>
      </div>
    );
  }
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg"
      style={{ 
        width: getDimensionStyle(width), 
        height: getDimensionStyle(height) 
      }}
    >
      {/* Pure CSS transitions for better performance */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ 
              willChange: 'opacity',
              backfaceVisibility: 'hidden'
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 flex space-x-1 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleImageTransition;