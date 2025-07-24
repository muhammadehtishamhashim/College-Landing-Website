'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FacilitiesPreview = ({ facilities }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards.length) {
      // Animate section title
      gsap.fromTo(
        section.querySelector('.section-title'),
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 95%', // Trigger much earlier
            toggleActions: 'play none none none'
          }
        }
      );

      // Animate section description
      gsap.fromTo(
        section.querySelector('.section-description'),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 95%', // Trigger much earlier
            toggleActions: 'play none none none'
          }
        }
      );

      // Animate facility cards
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2 + index * 0.15,
            scrollTrigger: {
              trigger: section, // Use section as trigger instead of card
              start: 'top 95%', // Trigger much earlier
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl lg:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            World-Class Facilities
          </h2>
          <p className="section-description text-lg text-gray-300 max-w-3xl mx-auto">
            Our state-of-the-art infrastructure provides the perfect environment for learning, research, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.slice(0, 3).map((facility, index) => {
            // Map facility IDs to their corresponding images
            const getImagePath = (facilityId) => {
              switch (facilityId) {
                case 'physics-lab': return '/Facilities/PhysicsLab.png';
                case 'chemistry-lab': return '/Facilities/ChemistryLab.png';
                case 'computer-lab': return '/Facilities/ComputerLab.png';
                case 'library': return '/Facilities/Library.png';
                default: return '/Facilities/PhysicsLab.png';
              }
            };

            return (
              <div
                key={facility.id}
                ref={el => cardsRef.current[index] = el}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20"
              >
                {/* Facility Image */}
                <div className="h-48 rounded-xl mb-6 overflow-hidden bg-gray-700">
                  <img
                    src={getImagePath(facility.id)}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{facility.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{facility.description}</p>

                {/* Key Features */}
                <div className="space-y-2">
                  {facility.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-6 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Facilities
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPreview;