'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GradientText from '../../textanimations/GradientText';
import DottedBG from '../../../ui/DottedBG';
import SimpleImageTransition from '../../../ui/SimpleImageTransition';

const IntroPreview = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const cardsRef = useRef([]);

    // GSAP animations
    useEffect(() => {
        // Title animations
        const titleElements = titleRef.current.querySelectorAll('.animate-title');
        gsap.fromTo(titleElements,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }
        );

        // Content animations
        const contentElements = contentRef.current.querySelectorAll('.animate-text');
        gsap.fromTo(contentElements,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out"
            }
        );

        // Card animations
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "power2.out"
                }
            );
        });

        // Cleanup
        return () => {
            gsap.killTweensOf(titleElements);
            gsap.killTweensOf(contentElements);
            cardsRef.current.forEach(card => {
                gsap.killTweensOf(card);
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white overflow-hidden relative"
        >
            {/* Background animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

            {/* Animated background dots - reduced for performance */}
            <div className="opacity-30">
                <DottedBG />
            </div>

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
                {/* Title section */}
                <div
                    ref={titleRef}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="animate-title">
                        <GradientText
                            colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 px-2"
                        >
                            FG Science Degree College, Wah Cantt
                        </GradientText>
                    </div>
                    <div className="animate-title">
                        <GradientText
                            colors={['#10b981', '#3b82f6', '#8b5cf6']}
                            className="text-lg sm:text-xl md:text-2xl font-medium px-2"
                        >
                            A Legacy of Excellence in Education
                        </GradientText>
                    </div>
                </div>

                {/* Full width content container with proper margins */}
                <div className="mx-1 sm:mx-8 lg:mx-12">
                    {/* Text content with expanded width */}
                    <div
                        ref={contentRef}
                        className="space-y-6 bg-gray-800/40 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-700/50 relative overflow-hidden main-content-group hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10"
                    >
                        {/* Content container */}
                        <div className="relative z-10">
                            <div className="animate-text">
                                <GradientText
                                    colors={['#10b981', '#3b82f6', '#8b5cf6']}
                                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                                >
                                    Our Legacy
                                </GradientText>

                                <div className="text-sm sm:text-base md:text-lg text-gray-300 space-y-4">
                                    <p className="animate-text">
                                        It was 1986 when on a visit to POF the then Prime Minister, Muhammad Khan Junejo, approached by the representatives of Wah Cantt residents, promised the establishment of another F.G. College to cater to the ever growing demand for a standard educational institution.
                                    </p>

                                    <div className="quote-box bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-5 sm:p-6 rounded-lg border-l-4 border-blue-500 relative animate-text transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 hover:border-l-[6px] group/quote">
                                        {/* Shimmer effect on hover - properly clipped */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover/quote:translate-x-full transition-transform duration-1200 ease-in-out rounded-lg"></div>

                                        {/* Subtle glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover/quote:opacity-100 blur-lg transition-opacity duration-500 rounded-lg"></div>

                                        <div className="relative z-10 px-1">
                                            <GradientText
                                                colors={['#60a5fa', '#a78bfa', '#5eead4']}
                                                className="text-sm sm:text-base md:text-lg font-medium transition-all duration-300 group-hover/quote:scale-[1.01]"
                                            >
                                                FG Science Degree College, located in the heart of Wah Cantt, Pakistan, has been a provider of quality education since 1993.
                                            </GradientText>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Add RegionalDirector image for history section */}
                            <div className="mt-6 mb-8 relative animate-text">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="w-full md:w-1/3 group/historical relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20">
                                        {/* Simple glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover/historical:opacity-50 blur-md transition-opacity duration-500"></div>

                                        <img
                                            src="/IntroPreview/RegionalDirectorVisit.png"
                                            alt="Regional Director Visit - Establishment 1993, Wah Cantt"
                                            className="w-full h-48 object-cover rounded-lg border border-gray-600 transition-transform duration-500 group-hover/historical:scale-110"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 hover:text-blue-300">Historical Milestone</h3>
                                        <p className="text-gray-300 text-sm transition-all duration-500 hover:text-gray-100">
                                            Established in 1993 in Wah Cantt, Pakistan, our college has been serving the community with dedication and excellence for over three decades.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 mt-6">
                                {[
                                    {
                                        id: 'campus',
                                        icon: '🌳',
                                        title: 'Campus & Facilities',
                                        colors: ['#34d399', '#60a5fa'],
                                        content: 'With picturesque green grounds spanning approximately 60 canals, our college offers a serene learning environment. Students can pursue their sporting interests with access to various sports facilities. Our well-equipped science labs enable a practical understanding of scientific principles.',
                                        images: ['/IntroPreview/Campus.png', '/IntroPreview/Campus2.png']
                                    },
                                    {
                                        id: 'academic',
                                        icon: '🎓',
                                        title: 'Academic Programs',
                                        colors: ['#8b5cf6', '#ec4899'],
                                        content: 'We offer HSSC classes in science groups (for boys only), along with BS Physics and BS IT programs (co-education). Graduates from our college have excelled in their fields, making valuable contributions to society.',
                                        images: ['/IntroPreview/Programs1.png', '/IntroPreview/Programs2.png']
                                    },
                                    {
                                        id: 'commitment',
                                        icon: '✨',
                                        title: 'Our Commitment',
                                        colors: ['#f59e0b', '#ef4444'],
                                        content: 'We are committed to upholding educational excellence and nurturing both academic and personal growth. Join us in achieving your academic and career aspirations.',
                                        images: ['/IntroPreview/Commitement.png', '/IntroPreview/Commitement2.png']
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={item.id}
                                        ref={el => cardsRef.current[index] = el}
                                        className="animated-border-box"
                                    >
                                        <div className={`animated-border animated-border-${item.id}`}></div>
                                        <div className={`content-box group/${item.id} transition-all duration-500 hover:shadow-lg hover:shadow-[#60a5fa]/20 overflow-hidden`}>
                                            {/* Shimmer effect on hover - properly contained */}
                                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent -translate-x-full group-hover/${item.id}:translate-x-full transition-transform duration-1200 ease-in-out`}></div>

                                            {/* Subtle background fill on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-${item.colors[0]}/5 to-${item.colors[1]}/5 opacity-0 group-hover/${item.id}:opacity-100 transition-opacity duration-500`}></div>

                                            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 relative z-10">
                                                {/* Image first on mobile, right on desktop */}
                                                <div className={`w-full lg:w-80 h-40 sm:h-48 relative order-1 lg:order-2 overflow-hidden rounded-lg transition-all duration-500 group-hover/${item.id}:shadow-md group-hover/${item.id}:shadow-[#60a5fa]/20`}>
                                                    <div className={`w-full h-full transition-transform duration-500 group-hover/${item.id}:scale-105`}>
                                                        <img
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover rounded-lg"
                                                            loading="lazy"
                                                        />
                                                    </div>

                                                    {/* Subtle floating particles on hover */}
                                                    <div className={`absolute inset-0 opacity-0 group-hover/${item.id}:opacity-100 transition-opacity duration-500 pointer-events-none z-20`}>
                                                        <div className="absolute top-3 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
                                                        <div className="absolute top-6 right-5 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
                                                        <div className="absolute bottom-4 left-6 w-1 h-1 bg-white/55 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '2.2s' }}></div>
                                                    </div>
                                                </div>

                                                {/* Text content - second on mobile, left on desktop */}
                                                <div className="flex-1 order-2 lg:order-1">
                                                    <h3 className={`text-lg sm:text-xl font-semibold flex items-center mb-3 transition-all duration-300 group-hover/${item.id}:translate-x-1`}>
                                                        <span className={`mr-2 inline-block transition-transform duration-300 group-hover/${item.id}:scale-110 group-hover/${item.id}:-translate-y-0.5`}>
                                                            {item.icon}
                                                        </span>
                                                        <GradientText
                                                            colors={item.colors}
                                                            className={`text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 group-hover/${item.id}:scale-[1.02]`}
                                                        >
                                                            {item.title}
                                                        </GradientText>
                                                    </h3>

                                                    <div className={`text-gray-300 text-sm sm:text-base leading-relaxed transition-colors duration-500 group-hover/${item.id}:text-gray-100`}>
                                                        {item.content}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom border animation */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-${item.colors[0]}/0 via-${item.colors[0]} to-${item.colors[0]}/0 opacity-0 group-hover/${item.id}:opacity-100 transition-opacity duration-300`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add responsive styles and animated border styles */}
            <style jsx global>{`
                @property --angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }

                .animated-border-box {
                    position: relative;
                    border-radius: 12px;
                    padding: 2px;
                    margin-bottom: 24px;
                }

                .animated-border {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 12px;
                    z-index: 0;
                    background-size: 200% 200%;
                    animation: rotate 6s linear infinite;
                    will-change: transform;
                }

                .content-box {
                    background-color: #111827;
                    border-radius: 10px;
                    padding: 16px;
                    position: relative;
                    z-index: 1;
                }

                .animated-border-campus {
                    background: linear-gradient(45deg, #34d399, #60a5fa);
                }

                .animated-border-academic {
                    background: linear-gradient(45deg, #8b5cf6, #ec4899);
                }

                .animated-border-commitment {
                    background: linear-gradient(45deg, #f59e0b, #ef4444);
                }

                @keyframes rotate {
                    from {
                        --angle: 0deg;
                    }
                    to {
                        --angle: 360deg;
                    }
                }

                @media (min-width: 640px) {
                    .content-box {
                        padding: 24px;
                    }
                }
            `}</style>
        </section>
    );
};

export default IntroPreview;