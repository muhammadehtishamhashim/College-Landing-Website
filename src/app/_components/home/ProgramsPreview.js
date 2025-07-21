'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProgramsPreview = ({ programs }) => {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  // Filter only Physics and Computer Science programs
  const filteredPrograms = programs.filter(
    program => program.id === 'bsc-physics' || program.id === 'bsc-computer-science'
  );

  useEffect(() => {
    const section = sectionRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;

    if (section && leftCard && rightCard) {
      // Animate section title and description
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

      // Animate left card (Physics) from left to right
      gsap.fromTo(
        leftCard,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section, // Use section as trigger instead of card
            start: 'top 95%', // Trigger much earlier
            toggleActions: 'play none none none'
          }
        }
      );

      // Animate right card (Computer Science) from right to left
      gsap.fromTo(
        rightCard,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section, // Use section as trigger instead of card
            start: 'top 95%', // Trigger much earlier
            toggleActions: 'play none none none'
          }
        }
      );
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
            Our Programs
          </h2>
          <p className="section-description text-lg text-gray-300 max-w-3xl mx-auto">
            Choose from our premier science degree programs designed to prepare you for a successful career in the field of science and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredPrograms.map((program, index) => (
            <div 
              key={program.id} 
              ref={index === 0 ? leftCardRef : rightCardRef}
              className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">
                    {program.id === 'bsc-physics' && '⚛️'}
                    {program.id === 'bsc-computer-science' && '💻'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {program.name.replace('Bachelor of Science in ', 'B.Sc ')}
                </h3>
                <p className="text-gray-300 mb-6">
                  {program.description}
                </p>
                
                {/* Program details */}
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">⏱️</span>
                    <div>
                      <p className="text-sm font-semibold text-blue-400">Duration</p>
                      <p className="text-gray-400">{program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">💰</span>
                    <div>
                      <p className="text-sm font-semibold text-green-400">Fees</p>
                      <p className="text-gray-400">{program.fees}</p>
                    </div>
                  </div>
                </div>
                
                {/* Key subjects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 text-left">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.slice(0, 3).map((subject, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Bottom decoration */}
                <div className="w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
                
                {/* Learn more link */}
                <Link
                  href={`/programs#${program.id}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Programs
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;