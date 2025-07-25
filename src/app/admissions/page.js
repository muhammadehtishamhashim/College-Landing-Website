
'use client';

import MainLayout from '../../layout/MainLayout';
import AdmissionTimeline from '../_components/admissions/AdmissionTimeline';
import AdmissionProcedures from '../_components/admissions/AdmissionProcedures';
import Particles from '../../ui/Particles';
import admissions from '../../../data/admissions.json';

// Metadata is handled by the parent layout since this is a client component

export default function Admissions() {
  return (
    <MainLayout>
      <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden py-12 sm:py-16 lg:py-32 flex items-center justify-center min-h-[60vh] sm:min-h-[70vh]">
          {/* Background Animation */}
          <div className="absolute inset-0 w-full h-full">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Particles animation */}
            <div className="absolute inset-0 opacity-40 sm:opacity-60">
              <Particles
                particleCount={80}
                particleColors={["#14b8a6", "#0891b2", "#06b6d4", "#ffffff"]}
              />
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4 sm:mb-6">
              Admissions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed px-2">
              Join our community of future scientists and innovators. Start your journey with us today.
            </p>
          </div>
        </section>

        {/* Admission Timeline */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
          {/* Static gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 sm:mb-4 px-2">
                Important Dates
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">
                Stay updated with our admission timeline and don't miss any important dates.
              </p>
            </div>

            {/* Timeline Container with FacilityCard styling */}
            <div className="animated-border-box group/timeline transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
              <div className="animated-border animated-border-timeline"></div>
              <div className="timeline-content bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8 relative">
                {/* Subtle background animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                <div className="relative z-10">
                  <AdmissionTimeline dates={admissions.importantDates} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Procedures */}
        <section className="bg-gray-800 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* Static gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3 sm:mb-4 px-2">
                Admission Process
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">
                Follow our step-by-step admission process to secure your place at our college.
              </p>
            </div>

            {/* Procedures Container with FacilityCard styling */}
            <div className="animated-border-box group/procedures transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20">
              <div className="animated-border animated-border-procedures"></div>
              <div className="procedures-content bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8 relative">
                {/* Subtle background animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 opacity-0 group-hover/procedures:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                <div className="relative z-10">
                  <AdmissionProcedures
                    procedures={admissions.procedures}
                    documents={admissions.requiredDocuments}
                    fees={admissions.fees}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Apply Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
          {/* Static gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

          <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 text-center relative z-10">
            {/* Apply Container with FacilityCard styling */}
            <div className="animated-border-box group/apply transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-900/20">
              <div className="animated-border animated-border-apply"></div>
              <div className="apply-content bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-6 sm:p-8 lg:p-12 text-center relative">
                {/* Subtle background animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-blue-900/10 opacity-0 group-hover/apply:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Ready to Apply?</h2>
                  <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 text-gray-300 px-2">
                    Take the first step towards your future in science and technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button className="group/btn relative bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 text-sm sm:text-base">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Start Application</span>
                    </button>
                    <button className="group/btn relative bg-gray-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-600 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-600 hover:border-gray-500 text-sm sm:text-base">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Download Brochure</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add styles for animated borders and zigzag lines */}
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
          margin-bottom: 0;
        }

        @media (min-width: 640px) {
          .animated-border-box {
            border-radius: 16px;
          }
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

        @media (min-width: 640px) {
          .animated-border {
            border-radius: 16px;
          }
        }

        .timeline-content,
        .procedures-content,
        .apply-content {
          position: relative;
          z-index: 1;
        }

        /* Timeline - Blue to Purple */
        .animated-border-timeline {
          background-image: conic-gradient(from var(--angle), #3b82f6, #8b5cf6, #3b82f6);
        }

        /* Procedures - Purple to Pink */
        .animated-border-procedures {
          background-image: conic-gradient(from var(--angle), #8b5cf6, #ec4899, #8b5cf6);
        }

        /* Apply - Green to Blue */
        .animated-border-apply {
          background-image: conic-gradient(from var(--angle), #10b981, #3b82f6, #10b981);
        }

        @keyframes rotate {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }


      `}</style>
    </MainLayout>
  );
}