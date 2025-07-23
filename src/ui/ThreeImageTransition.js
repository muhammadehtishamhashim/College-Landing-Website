"use client"
import React, { useEffect, useState } from 'react';

const ThreeImageTransition = ({ images = [], width = 320, height = 200 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 4000); // Slower transition - every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) {
        return (
            <div
                className="bg-gray-700 rounded-lg flex items-center justify-center"
                style={{ width: `${width}px`, height: `${height}px` }}
            >
                <span className="text-gray-400">No images</span>
            </div>
        );
    }

    return (
        <div
            className="relative rounded-lg overflow-hidden bg-gray-800"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {/* Simple CSS transition instead of AnimatePresence for better performance */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                />
            ))}

            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            {/* Simple dot indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                    ? 'bg-white scale-125'
                                    : 'bg-white/60 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThreeImageTransition;