"use client"
import React, { useState } from 'react';

const SimpleImageTransition = ({ images = [], width = "100%", height = "100%" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  
  if (!images || images.length === 0) {
    return (
      <div 
        className="bg-gray-800 rounded-lg flex items-center justify-center"
        style={{ width, height }}
      >
        <span className="text-gray-400">No images</span>
      </div>
    );
  }

  const goToPrevious = () => {
    if (isSliding) return;
    setIsSliding(true);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsSliding(false), 500);
  };

  const goToNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsSliding(false), 500);
  };
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg group bg-gray-800"
      style={{ width, height }}
    >
      {/* Image container with slide animation */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ 
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            style={{ width: `${100 / images.length}%` }}
          >
            <img 
              src={src} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                console.log(`Failed to load image: ${src}`);
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
              onLoad={() => {
                console.log(`Successfully loaded image: ${src}`);
              }}
            />
            {/* Fallback content */}
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
              <div className="text-center">
                <div className="mb-2">📷</div>
                <div>Image not found</div>
                <div className="text-xs mt-1 opacity-70">{src.split('/').pop()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          {/* Previous button - left center */}
          <button
            onClick={goToPrevious}
            disabled={isSliding}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 disabled:opacity-50 shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button - right center */}
          <button
            onClick={goToNext}
            disabled={isSliding}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 disabled:opacity-50 shadow-lg"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Image indicators - bottom center */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleImageTransition;