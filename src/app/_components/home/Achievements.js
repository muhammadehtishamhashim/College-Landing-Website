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
    id: 'bscs-topper',
    title: 'BSCS Topper',
    description: 'Ali Ahmad achieved the highest marks in Bachelor of Computer Science program',
    student: 'Ali Ahmad',
    image: '/Achievments/BSCStopper-Ali Ahmad.png',
    category: 'Academic Excellence'
  },
  {
    id: 'physics-topper',
    title: 'BS Physics Topper',
    description: 'Fatima Sajid secured top position in Bachelor of Physics program',
    student: 'Fatima Sajid',
    image: '/Achievments/BSPhysicsTopper-Fatima Sajid.png',
    category: 'Academic Excellence'
  },
  {
    id: 'software-competition',
    title: 'Software Development Competition',
    description: 'Our students won the inter-college software development competition',
    student: 'Team Winners',
    image: '/Achievments/SoftwareDevCompWinners.png',
    category: 'Competition'
  },
  {
    id: 'english-declamation',
    title: 'English Declamation Winner',
    description: 'Outstanding performance in English declamation contest',
    student: 'Winner',
    image: '/Achievments/WinnerOfEnglishDeclamation.png',
    category: 'Literary Excellence'
  },
  {
    id: 'annual-prize',
    title: 'Annual Prize Distribution',
    description: 'Celebrating academic achievements and outstanding performances',
    student: 'Multiple Winners',
    image: '/Achievments/AnnualPrizeDistribution.png',
    category: 'Annual Event'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20 max-w-sm mx-auto w-full"
            >
              <div className="flex flex-col h-full">
                {/* Achievement Image */}
                <div className="relative h-40 w-full overflow-hidden bg-gray-700">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 flex-grow">{achievement.description}</p>
                  
                  {/* Student Name */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-blue-400 font-medium text-sm">{achievement.student}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;