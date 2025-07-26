'use client';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full min-h-screen overflow-hidden">
            {/* Enhanced base gradient background matching DottedBG colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
            
            {/* Colorful accent gradients to match DottedBG */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 via-transparent to-blue-900/10"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/8 via-transparent to-emerald-900/8"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/6 via-transparent to-pink-900/6"></div>

            {/* Diagonal texture overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.02) 2px,
              rgba(255, 255, 255, 0.02) 4px
            )
          `
                }}
            ></div>

            {/* Subtle noise texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.005) 0%, transparent 50%)
          `,
                    backgroundSize: '100px 100px, 150px 150px, 200px 200px'
                }}
            ></div>

            {/* Enhanced curved flow lines with DottedBG colors */}
            <div className="absolute inset-0 opacity-15">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(52, 211, 153, 0.1)" />
                            <stop offset="50%" stopColor="rgba(96, 165, 250, 0.05)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="flowGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.08)" />
                            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.04)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="flowGradient3" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.06)" />
                            <stop offset="50%" stopColor="rgba(20, 184, 166, 0.03)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    {/* Enhanced curved flow paths */}
                    <path
                        d="M-100,200 Q300,100 600,300 T1300,200"
                        stroke="url(#flowGradient1)"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <path
                        d="M-100,400 Q400,250 800,450 T1300,350"
                        stroke="url(#flowGradient2)"
                        strokeWidth="1.2"
                        fill="none"
                    />
                    <path
                        d="M-100,600 Q200,450 700,600 T1300,500"
                        stroke="url(#flowGradient3)"
                        strokeWidth="0.8"
                        fill="none"
                    />
                    <path
                        d="M-100,100 Q500,50 900,200 T1300,100"
                        stroke="url(#flowGradient1)"
                        strokeWidth="0.6"
                        fill="none"
                    />
                    <path
                        d="M-100,700 Q600,650 1000,750 T1300,700"
                        stroke="url(#flowGradient2)"
                        strokeWidth="0.8"
                        fill="none"
                    />
                </svg>
            </div>

            {/* Subtle vignette effect */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 60%,
              rgba(0, 0, 0, 0.3) 100%
            )
          `
                }}
            ></div>

            {/* Responsive grain texture */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              rgba(255, 255, 255, 0.005) 1deg,
              transparent 2deg
            )
          `,
                    backgroundSize: '20px 20px'
                }}
            ></div>

            {/* Enhanced animated objects with DottedBG colors */}
            <div className="absolute inset-0 opacity-25">
                {/* Floating circles with colorful gradients */}
                <div 
                    className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-gradient-to-br from-green-400/8 via-blue-400/4 to-transparent"
                    style={{
                        animation: 'float 8s ease-in-out infinite',
                        animationDelay: '0s'
                    }}
                ></div>
                <div 
                    className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/6 via-pink-400/3 to-transparent"
                    style={{
                        animation: 'float 10s ease-in-out infinite',
                        animationDelay: '2s'
                    }}
                ></div>
                <div 
                    className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/7 via-emerald-400/4 to-transparent"
                    style={{
                        animation: 'float 12s ease-in-out infinite',
                        animationDelay: '4s'
                    }}
                ></div>
                <div 
                    className="absolute top-1/6 right-1/3 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-400/5 via-teal-400/3 to-transparent"
                    style={{
                        animation: 'float 14s ease-in-out infinite',
                        animationDelay: '6s'
                    }}
                ></div>
                
                {/* Floating rectangles with enhanced colors */}
                <div 
                    className="absolute top-1/2 right-1/6 w-16 h-40 bg-gradient-to-b from-blue-400/4 via-purple-400/2 to-transparent transform rotate-12"
                    style={{
                        animation: 'fadeFloat 15s ease-in-out infinite',
                        animationDelay: '1s'
                    }}
                ></div>
                <div 
                    className="absolute bottom-1/4 left-1/5 w-12 h-32 bg-gradient-to-b from-emerald-400/5 via-cyan-400/3 to-transparent transform -rotate-6"
                    style={{
                        animation: 'fadeFloat 18s ease-in-out infinite',
                        animationDelay: '3s'
                    }}
                ></div>
                <div 
                    className="absolute top-2/3 left-1/8 w-14 h-36 bg-gradient-to-b from-pink-400/4 via-purple-400/2 to-transparent transform rotate-45"
                    style={{
                        animation: 'fadeFloat 20s ease-in-out infinite',
                        animationDelay: '5s'
                    }}
                ></div>
                
                {/* Floating diamond shapes */}
                <div 
                    className="absolute top-1/3 right-1/5 w-16 h-16 bg-gradient-to-br from-green-400/6 to-blue-400/3 transform rotate-45"
                    style={{
                        animation: 'diamondFloat 16s ease-in-out infinite',
                        animationDelay: '2s'
                    }}
                ></div>
                <div 
                    className="absolute bottom-1/5 right-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/5 to-teal-400/3 transform rotate-45"
                    style={{
                        animation: 'diamondFloat 22s ease-in-out infinite',
                        animationDelay: '7s'
                    }}
                ></div>
            </div>
            
            {/* Subtle color orbs for ambient lighting */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-1/5 left-1/4 w-64 h-64 bg-gradient-radial from-green-400/10 via-green-400/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-radial from-blue-400/8 via-blue-400/4 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-gradient-radial from-purple-400/12 via-purple-400/6 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/6 w-72 h-72 bg-gradient-radial from-cyan-400/9 via-cyan-400/4 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Mobile-optimized overlay */}
            <div className="absolute inset-0 md:hidden bg-black/10"></div>

            {/* Tablet-optimized overlay */}
            <div className="absolute inset-0 hidden md:block lg:hidden bg-black/5"></div>
            
            {/* CSS animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) scale(1);
                        opacity: 0.2;
                    }
                    50% { 
                        transform: translateY(-20px) scale(1.05);
                        opacity: 0.4;
                    }
                }
                
                @keyframes fadeFloat {
                    0%, 100% { 
                        transform: translateY(0px) rotate(12deg);
                        opacity: 0.1;
                    }
                    50% { 
                        transform: translateY(-15px) rotate(15deg);
                        opacity: 0.3;
                    }
                }
                
                @keyframes diamondFloat {
                    0%, 100% { 
                        transform: translateY(0px) rotate(45deg) scale(1);
                        opacity: 0.15;
                    }
                    33% { 
                        transform: translateY(-12px) rotate(50deg) scale(1.1);
                        opacity: 0.25;
                    }
                    66% { 
                        transform: translateY(-8px) rotate(40deg) scale(0.95);
                        opacity: 0.3;
                    }
                }
                
                /* Reduce animations on mobile for performance */
                @media (max-width: 768px) {
                    @keyframes float {
                        0%, 100% { 
                            transform: translateY(0px);
                            opacity: 0.1;
                        }
                        50% { 
                            transform: translateY(-10px);
                            opacity: 0.2;
                        }
                    }
                    
                    @keyframes fadeFloat {
                        0%, 100% { 
                            transform: translateY(0px) rotate(12deg);
                            opacity: 0.05;
                        }
                        50% { 
                            transform: translateY(-8px) rotate(15deg);
                            opacity: 0.15;
                        }
                    }
                }
                
                /* Respect reduced motion preferences */
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroBackground;