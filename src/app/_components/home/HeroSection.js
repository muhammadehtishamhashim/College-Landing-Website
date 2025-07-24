'use client';

import Particles from '../../../ui/Particles';
import BlurText from '../../textanimations/BlurText';
import GradientText from '../../textanimations/GradientText';

const HeroSection = ({ collegeInfo }) => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden hero-section will-change-transform">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Particles animation */}
        <div className="absolute inset-0 opacity-80">
          <Particles
            particleCount={300}
            particleSpread={12}
            speed={0.4}
            particleColors={["#00ffff", "#40ffaa", "#4079ff", "#ffffff"]}
            moveParticlesOnHover={true}
            particleHoverFactor={1.5}
            alphaParticles={true}
            particleBaseSize={120}
            sizeRandomness={1.2}
            cameraDistance={12}
            disableRotation={false}
          />
        </div>
      </div>

      {/* Ribbons Overlay */}


      {/* Content Layout */}
      <div className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Side - Text Content with BlurText */}
            <div className="text-white">

              <BlurText
                text="Welcome to"
                delay={40}
                animateBy="words"
                direction="top"
                stepDuration={0.15}
                className="lg:mt-12 md:mt-8 sm:mt-6 mt-4 text-lg sm:text-xl lg:text-2xl font-medium mb-1 text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              />
              <BlurText
                text="FG Science Degree College for Men, Wah Cantt"
                delay={50}
                animateBy="words"
                direction="top"
                stepDuration={0.2}
                className="text-2xl sm:text-3xl lg:text-4.5xl font-bold mb-1 lg:mb-4 leading-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              />

              <BlurText
                text="A Legacy of Excellence in Education"
                delay={40}
                animateBy="words"
                direction="top"
                stepDuration={0.15}
                className="text-lg font-bold sm:text-xl lg:text-xl text-gray-300 mb-2 lg:mb-4 font-light mt-1"
              />

              {/* Mobile Logo Container - Only visible on mobile */}
              <div className="lg:hidden flex justify-center my-6">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center relative overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 animate-spin" style={{ animationDuration: '8s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-gray-900/80 backdrop-blur-sm"></div>
                  <div className="text-center relative z-10">
                    {/* College Logo Placeholder */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center mb-2 sm:mb-3 mx-auto shadow-lg">
                      <span className="text-xl sm:text-2xl font-bold text-white">FG</span>
                    </div>
                    <p className="text-gray-400 text-xs">College Logo</p>
                    <p className="text-gray-500 text-xs">Image will be placed here</p>
                  </div>
                </div>
              </div>

              {/* Green separator line - Mobile only */}
              <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent my-6"></div>

              <div className="mb-6 lg:mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}

                  animationSpeed={3}

                  showBorder={false}

                  className="custom-class"
                >
                  FG Science Degree College is a premier institution dedicated to providing quality education in science and technology. We foster academic excellence, research innovation, and character development to prepare students for successful careers and meaningful contributions to society.
                </GradientText>
              </div>

              {/* Premium Interactive Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 lg:mb-12">
                {/* Primary Button - Explore Facilities */}
                <a
                  href="/facilities"
                  className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-bold rounded-2xl text-sm sm:text-base text-center overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-1 transform-gpu shadow-lg hover:shadow-2xl"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>

                  {/* Floating orbs */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                    <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}></div>
                    <div className="absolute bottom-3 left-6 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.2s' }}></div>
                  </div>

                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>

                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>

                  <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-white group-hover:font-extrabold">
                    <span>Explore Facilities</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>

                {/* Secondary Button - View Programs */}
                <a
                  href="/programs"
                  className="group relative px-8 py-4 border-2 border-white text-white font-bold rounded-2xl text-sm sm:text-base text-center overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-1 transform-gpu shadow-lg hover:shadow-2xl hover:shadow-green-400/30"
                >
                  {/* Liquid fill effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out rounded-2xl"></div>

                  {/* Border animation */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-green-400/0 group-hover:border-green-400 transition-all duration-500"></div>

                  {/* Pulsing rings */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-2 border border-white/30 rounded-xl animate-ping"></div>
                    <div className="absolute inset-4 border border-white/20 rounded-lg animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  </div>

                  {/* Sparkle effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-3 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-4 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute bottom-4 left-12 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    <div className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                  </div>

                  {/* Electric border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500 animate-pulse"></div>

                  <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-black group-hover:font-extrabold group-hover:drop-shadow-sm">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>View Programs</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side - Circular Logo Container - Desktop only */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-1 rounded-full bg-gray-900/80 backdrop-blur-sm"></div>
                <div className="text-center relative z-10">
                  {/* College Logo Placeholder */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center mb-3 lg:mb-4 mx-auto shadow-lg">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">FG</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">College Logo</p>
                  <p className="text-gray-500 text-xs">Image will be placed here</p>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Section */}
          <div className="mt-16 lg:mt-20 mb-20 sm:mb-24 lg:mb-32">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {/* Stats Card Component */}
                  {[
                    { value: '1993', label: 'Established', color: 'green', gradientFrom: 'green-400', gradientTo: 'emerald-500' },
                    { value: '2', label: 'Degree Programs', color: 'blue', gradientFrom: 'blue-400', gradientTo: 'indigo-500' },
                    { value: '20+', label: 'Expert Faculty', color: 'purple', gradientFrom: 'purple-400', gradientTo: 'violet-500' },
                    { value: '95%', label: 'Placement Rate', color: 'emerald', gradientFrom: 'emerald-400', gradientTo: 'teal-500' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-xl"
                    >
                      {/* Animated gradient background fill */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${stat.gradientFrom}/80 to-${stat.gradientTo}/80 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl`}></div>

                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-xl bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>

                      {/* Shimmer sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>

                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.gradientFrom} to-${stat.gradientTo} rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>

                      {/* Floating particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute top-2 left-3 w-1.5 h-1.5 bg-${stat.color}-200 rounded-full animate-bounce`} style={{ animationDuration: '2s' }}></div>
                        <div className={`absolute top-4 right-4 w-1 h-1 bg-${stat.color}-300 rounded-full animate-bounce`} style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}></div>
                        <div className={`absolute bottom-3 left-5 w-1 h-1 bg-${stat.color}-100 rounded-full animate-bounce`} style={{ animationDelay: '0.6s', animationDuration: '2.2s' }}></div>
                      </div>

                      {/* Pulsing border - using colored border instead of white */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute inset-0 border border-${stat.color}-400/30 rounded-lg animate-pulse`} style={{ animationDuration: '2s' }}></div>
                        <div className={`absolute inset-1 border border-${stat.color}-300/20 rounded-lg animate-pulse`} style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className={`text-4xl font-bold text-${stat.color}-400 mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300 group-hover:font-semibold">
                          {stat.label}
                        </div>
                      </div>

                      {/* Bottom border animation */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${stat.color}-400/0 via-${stat.color}-400 to-${stat.color}-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;