'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientText from '../../textanimations/GradientText';
import DottedBG from '../../../ui/DottedBG';
import { motion } from 'framer-motion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const IntroPreview = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [activeSection, setActiveSection] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse position for interactive effects
    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setMousePosition({ x, y });
    };

    useEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;
        const text = textRef.current;
        const particlesContainer = document.getElementById('particles-container');

        if (section && image && text) {
            // Create particles dynamically on the client side
            if (particlesContainer) {
                // Clear any existing particles
                particlesContainer.innerHTML = '';

                // Create 20 particles with random positions and animations
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse';

                    // Set random position and animation properties
                    const top = Math.random() * 100;
                    const left = Math.random() * 100;
                    const delay = Math.random() * 3;
                    const duration = 2 + Math.random() * 3;

                    particle.style.top = `${top}%`;
                    particle.style.left = `${left}%`;
                    particle.style.animationDelay = `${delay}s`;
                    particle.style.animationDuration = `${duration}s`;

                    particlesContainer.appendChild(particle);
                }
            }

            // Animate image
            gsap.fromTo(
                image,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 95%', // Trigger much earlier
                        toggleActions: 'play none none none'
                    }
                }
            );

            // Animate text
            gsap.fromTo(
                text.querySelectorAll('.animate-text'),
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
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

    // Variants for title animations
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            textShadow: "0 0 8px rgba(255,255,255,0.5)",
            transition: { duration: 0.3 }
        }
    };

    // Variants for card animations
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: (i) => ({
            scale: 1.03,
            y: -8,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            backgroundColor: "rgba(55, 65, 81, 0.7)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        })
    };

    // Variants for icon animations
    const iconVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.3,
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    // Variants for text reveal animations
    const textRevealVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white overflow-hidden relative"
        >
            {/* Background animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

            {/* Animated background dots */}
            <DottedBG />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title with AnimatedGradientText */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={titleVariants}
                        whileHover="hover"
                    >
                        <GradientText
                            colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 px-2"
                        >
                            FG Science Degree College, Wah Cantt
                        </GradientText>
                    </motion.div>
                    <motion.div
                        variants={titleVariants}
                        custom={1}
                        transition={{ delay: 0.3 }}
                        whileHover="hover"
                    >
                        <GradientText
                            colors={['#10b981', '#3b82f6', '#8b5cf6']}
                            className="text-lg sm:text-xl md:text-2xl font-medium px-2"
                        >
                            A Legacy of Excellence in Education
                        </GradientText>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left side - Image with advanced animation */}
                    <motion.div
                        ref={imageRef}
                        className="relative group overflow-hidden rounded-2xl border border-gray-700 shadow-xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        onMouseMove={handleMouseMove}
                        whileHover={{
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        {/* Main image container with 3D effect */}
                        <motion.div
                            className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden"
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: "1000px"
                            }}
                            animate={{
                                rotateY: mousePosition.x * 10 - 5,
                                rotateX: -(mousePosition.y * 10 - 5),
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Placeholder for college image */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{
                                    z: 20,
                                    scale: mousePosition.x > 0.8 ? 1.1 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className="text-6xl sm:text-7xl"
                                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    🏛️
                                </motion.div>
                            </motion.div>

                            {/* Animated overlay with depth effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                                animate={{
                                    opacity: 0.6 + mousePosition.y * 0.2,
                                    backgroundPosition: `${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%`
                                }}
                                transition={{ duration: 0.2 }}
                            ></motion.div>

                            {/* Animated particles container - particles will be added via JS */}
                            <div className="absolute inset-0" id="particles-container"></div>

                            {/* Interactive light effect */}
                            <motion.div
                                className="absolute rounded-full bg-white/10 blur-2xl w-32 h-32"
                                animate={{
                                    x: mousePosition.x * 100 + "%",
                                    y: mousePosition.y * 100 + "%",
                                    opacity: 0.5
                                }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            ></motion.div>
                        </motion.div>

                        {/* Hover effect overlay with ripple */}
                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500 rounded-2xl overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient id="hover-ripple" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                        <animate attributeName="r" values="0%;150%" dur="2.5s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite" />
                                        <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                                <circle className="group-hover:opacity-100 opacity-0 transition-opacity duration-300" cx="50%" cy="50%" r="50%" fill="url(#hover-ripple)" />
                            </svg>
                        </div>

                        {/* Caption with reveal animation */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent"
                            initial={{ y: 20, opacity: 0.8 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.h3
                                className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg flex items-center"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <motion.span
                                    className="mr-2"
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >✨</motion.span>
                                Excellence in Education
                            </motion.h3>
                            <motion.p
                                className="text-xs sm:text-sm text-gray-200 drop-shadow-md"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Our campus provides a perfect environment for academic growth
                            </motion.p>

                            {/* Interactive button that appears on hover */}
                            <motion.div
                                className="mt-3 hidden sm:block"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                            >
                                <motion.button
                                    className="px-4 py-1.5 bg-blue-600/80 hover:bg-blue-500 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore Campus
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Text content with advanced hover animations */}
                    <motion.div
                        ref={textRef}
                        className="space-y-6 bg-gray-800/40 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-700/50 relative overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        onMouseMove={handleMouseMove}
                    >
                        {/* Animated background gradient that follows mouse */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl opacity-0"
                            animate={{
                                opacity: 0.5,
                                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.05))`
                            }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>

                        {/* Content container */}
                        <div className="relative z-10">
                            <motion.div
                                className="animate-text"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <GradientText
                                        colors={['#10b981', '#3b82f6', '#8b5cf6']}
                                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                                    >
                                        Our Legacy
                                    </GradientText>
                                </motion.div>

                                <div className="text-sm sm:text-base md:text-lg text-gray-300 space-y-4">
                                    <motion.p
                                        className="animate-text"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        It was 1986 when on a visit to POF the then Prime Minister, Muhammad Khan Junejo, approached by the representatives of Wah Cantt residents, promised the establishment of another F.G. College to cater to the ever growing demand for a standard educational institution.
                                    </motion.p>

                                    <motion.div
                                        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border-l-4 border-blue-500 relative overflow-hidden"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                            borderImage: "linear-gradient(to bottom, #3b82f6, #8b5cf6) 1 100%"
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        {/* Animated highlight effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"
                                            animate={{
                                                x: [-100, 300],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: "easeInOut",
                                                repeatDelay: 1
                                            }}
                                        ></motion.div>

                                        <GradientText
                                            colors={['#60a5fa', '#a78bfa', '#5eead4']}
                                            className="text-sm sm:text-base md:text-lg font-medium relative z-10"
                                        >
                                            FG Science Degree College, located in the heart of Wah Cantt, Pakistan, has been a provider of quality education since 1993.
                                        </GradientText>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <div className="space-y-4 animate-text mt-6">
                                {[
                                    {
                                        id: 'campus',
                                        icon: '🌳',
                                        title: 'Campus & Facilities',
                                        colors: ['#34d399', '#60a5fa'],
                                        content: 'With picturesque green grounds spanning approximately 60 canals, our college offers a serene learning environment. Students can pursue their sporting interests with access to various sports facilities. Our well-equipped science labs enable a practical understanding of scientific principles.'
                                    },
                                    {
                                        id: 'academic',
                                        icon: '🎓',
                                        title: 'Academic Programs',
                                        colors: ['#8b5cf6', '#ec4899'],
                                        content: 'We offer HSSC classes in science groups (for boys only), along with BS Physics and BS IT programs (co-education). Graduates from our college have excelled in their fields, making valuable contributions to society.'
                                    },
                                    {
                                        id: 'commitment',
                                        icon: '✨',
                                        title: 'Our Commitment',
                                        colors: ['#f59e0b', '#ef4444'],
                                        content: 'We are committed to upholding educational excellence and nurturing both academic and personal growth. Join us in achieving your academic and career aspirations.'
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        className={`group bg-gray-800/60 p-4 rounded-lg relative overflow-hidden ${activeSection === item.id ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-500/50' : ''}`}
                                        variants={cardVariants}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        whileHover="hover"
                                        viewport={{ once: true, amount: 0.1 }}
                                        onHoverStart={() => setActiveSection(item.id)}
                                        onHoverEnd={() => setActiveSection(null)}
                                    >
                                        {/* Animated border */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                            initial={{ opacity: 0 }}
                                            animate={activeSection === item.id ? { opacity: 1 } : { opacity: 0 }}
                                        >
                                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite_0.5s]"></div>
                                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-green-500 to-transparent animate-[shimmer-vertical_2s_infinite_0.25s]"></div>
                                                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-[shimmer-vertical_2s_infinite_0.75s]"></div>
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-lg sm:text-xl font-semibold flex items-center">
                                                <motion.span
                                                    className="mr-2 inline-block"
                                                    variants={iconVariants}
                                                    initial="initial"
                                                    whileHover="hover"
                                                >
                                                    {item.icon}
                                                </motion.span>
                                                <GradientText
                                                    colors={item.colors}
                                                    className="text-base sm:text-lg md:text-xl font-semibold"
                                                >
                                                    {item.title}
                                                </GradientText>
                                            </h3>

                                            <motion.div
                                                className="mt-2 text-gray-300 text-sm sm:text-base"
                                                variants={textRevealVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.1 }}
                                            >
                                                {item.content}
                                            </motion.div>

                                            {/* Interactive button that appears on hover */}
                                            <motion.div
                                                className="mt-3 text-right"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <motion.button
                                                    className="px-3 py-1 text-xs font-medium text-white/80 hover:text-white flex items-center gap-1 ml-auto"
                                                    whileHover={{ x: 3 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Learn more
                                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </motion.button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Add responsive styles for smaller screens */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes shimmer-vertical {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 8s linear infinite;
                }
                @media (max-width: 640px) {
                    .text-2xl { font-size: 1.25rem; }
                    .text-xl { font-size: 1.125rem; }
                    .text-lg { font-size: 1rem; }
                    .text-base { font-size: 0.9375rem; }
                    .p-6 { padding: 1rem; }
                    .space-y-6 { margin-top: 1.25rem; }
                    .space-y-4 { margin-top: 0.75rem; }
                }
            `}</style>
        </section>
    );
};

export default IntroPreview;

