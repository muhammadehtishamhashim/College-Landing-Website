
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
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 sm:mb-4 px-2">
                Important Dates
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">
                Stay updated with our admission timeline and don't miss any important dates.
              </p>
            </div>

            {/* Timeline without outer container */}
            <AdmissionTimeline dates={admissions.importantDates} />
          </div>
        </section>

        {/* Admission Procedures */}
        <section className="bg-gray-800 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* Static gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 sm:mb-4 px-2">
                Admission Process
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">
                Follow our step-by-step admission process to secure your place at our college.
              </p>
            </div>

            {/* Procedures Container - Simplified */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl sm:rounded-2xl border border-cyan-500/30 shadow-xl p-4 sm:p-6 lg:p-8 hover:border-cyan-400/50 transition-all duration-300">
              <AdmissionProcedures
                procedures={admissions.procedures}
                documents={admissions.requiredDocuments}
                fees={admissions.fees}
              />
            </div>
          </div>
        </section>

        {/* Quick Apply Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
          {/* Static gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 text-center relative z-10">
            {/* Apply Container - Simplified */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl sm:rounded-2xl border border-cyan-500/30 shadow-xl p-6 sm:p-8 lg:p-12 hover:border-cyan-400/50 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ready to Apply?</h2>
              <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 text-gray-300 px-2">
                Take the first step towards your future in science and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="group/btn relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 text-sm sm:text-base">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Application</span>
                </button>
                <button className="group/btn relative bg-gray-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-600 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-600 hover:border-gray-500 text-sm sm:text-base">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Download Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>


    </MainLayout>
  );
}