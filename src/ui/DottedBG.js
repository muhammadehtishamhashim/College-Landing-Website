'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DottedBG = ({ className = '' }) => {
  const cornerDotsRef = useRef([]);
  const edgeParticlesRef = useRef([]);

  useEffect(() => {
    // Animate corner dots with staggered pulsing
    cornerDotsRef.current.forEach((dot, index) => {
      if (dot) {
        gsap.to(dot, {
          scale: 1.5,
          opacity: 0.8,
          duration: 2 + index * 0.3,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.5
        });
      }
    });

    // Animate edge particles with floating motion
    edgeParticlesRef.current.forEach((particle, index) => {
      if (particle) {
        const isTopBottom = index < 8; // First 8 are top/bottom
        const movement = isTopBottom ? 'x' : 'y';
        const distance = isTopBottom ? 30 : 20;

        gsap.to(particle, {
          [movement]: `+=${distance}`,
          duration: 3 + Math.random() * 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        });

        gsap.to(particle, {
          opacity: 0.8,
          scale: 1.2,
          duration: 1.5 + Math.random(),
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 1.5
        });
      }
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(cornerDotsRef.current);
      gsap.killTweensOf(edgeParticlesRef.current);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle base layer - very light */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Corner Accent Dots - More Visible */}
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-64 h-64">
        {[...Array(6)].map((_, i) => (
          <div
            key={`tl-${i}`}
            ref={el => cornerDotsRef.current[i] = el}
            className="absolute w-2 h-2 bg-green-400/40 rounded-full"
            style={{
              left: `${20 + i * 35}px`,
              top: `${20 + i * 25}px`,
            }}
          />
        ))}
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 w-64 h-64">
        {[...Array(6)].map((_, i) => (
          <div
            key={`tr-${i}`}
            ref={el => cornerDotsRef.current[6 + i] = el}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              right: `${20 + i * 35}px`,
              top: `${20 + i * 25}px`,
            }}
          />
        ))}
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-64 h-64">
        {[...Array(6)].map((_, i) => (
          <div
            key={`bl-${i}`}
            ref={el => cornerDotsRef.current[12 + i] = el}
            className="absolute w-2 h-2 bg-purple-400/40 rounded-full"
            style={{
              left: `${20 + i * 35}px`,
              bottom: `${20 + i * 25}px`,
            }}
          />
        ))}
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64">
        {[...Array(6)].map((_, i) => (
          <div
            key={`br-${i}`}
            ref={el => cornerDotsRef.current[18 + i] = el}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
            style={{
              right: `${20 + i * 35}px`,
              bottom: `${20 + i * 25}px`,
            }}
          />
        ))}
      </div>

      {/* Edge Particles */}
      {/* Top Edge */}
      <div className="absolute top-0 left-1/4 right-1/4 h-16">
        {[...Array(4)].map((_, i) => (
          <div
            key={`top-${i}`}
            ref={el => edgeParticlesRef.current[i] = el}
            className="absolute w-1.5 h-1.5 bg-cyan-400/50 rounded-full"
            style={{
              left: `${i * 25}%`,
              top: `${10 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Bottom Edge */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-16">
        {[...Array(4)].map((_, i) => (
          <div
            key={`bottom-${i}`}
            ref={el => edgeParticlesRef.current[4 + i] = el}
            className="absolute w-1.5 h-1.5 bg-teal-400/50 rounded-full"
            style={{
              left: `${i * 25}%`,
              bottom: `${10 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Left Edge */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={`left-${i}`}
            ref={el => edgeParticlesRef.current[8 + i] = el}
            className="absolute w-1.5 h-1.5 bg-indigo-400/50 rounded-full"
            style={{
              left: `${10 + Math.random() * 20}px`,
              top: `${i * 33}%`,
            }}
          />
        ))}
      </div>

      {/* Right Edge */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={`right-${i}`}
            ref={el => edgeParticlesRef.current[11 + i] = el}
            className="absolute w-1.5 h-1.5 bg-pink-400/50 rounded-full"
            style={{
              right: `${10 + Math.random() * 20}px`,
              top: `${i * 33}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Corner Sparkles */}
      <div className="absolute top-8 left-8">
        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
      </div>
      <div className="absolute top-12 right-12">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute bottom-8 left-12">
        <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute bottom-12 right-8">
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default DottedBG;