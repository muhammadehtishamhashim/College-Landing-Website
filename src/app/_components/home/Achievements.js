'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const achievements = [
  {
    id: 'top-ranking',
    title: 'Top Ranking',
    description: 'Ranked among the top science colleges in the region for academic excellence',
    year: '2024',
    icon: '🏆'
  },
  {
    id: 'research-grants',
    title: 'Research Grants',
    description: 'Secured multiple research grants for faculty and student projects',
    year: '2023',
    icon: '💰'
  },
  {
    id: 'alumni-success',
    title: 'Alumni Success',
    description: 'Our graduates have achieved remarkable success in various scientific fields',
    year: '2022',
    icon: '🌟'
  },
  {
    id: 'innovation-award',
    title: 'Innovation Award',
    description: 'Received the National Innovation Award for our teaching methodologies',
    year: '2021',
    icon: '🔍'
  }
];

const Achievements = () => {
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

      // Animate achievement cards
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
            Our Achievements
          </h2>
          <p className="section-description text-lg text-gray-300 max-w-3xl mx-auto">
            We take pride in our accomplishments and the recognition we've received for our commitment to excellence in science education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex flex-col h-full">
                {/* Icon and Year */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-3xl">
                    {achievement.icon}
                  </div>
                  <span className="text-blue-400 font-semibold">{achievement.year}</span>
                </div>
                
                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-400 flex-grow">{achievement.description}</p>
                
                {/* Bottom decoration */}
                <div className="mt-6 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;