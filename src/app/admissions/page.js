import MainLayout from '../../layout/MainLayout';
import AdmissionTimeline from '../_components/admissions/AdmissionTimeline';
import AdmissionProcedures from '../_components/admissions/AdmissionProcedures';
import Particles from '../../ui/Particles';
import admissions from '../../../data/admissions.json';

export const metadata = {
  title: 'Admissions | FG Science Degree College',
  description: 'Apply to FG Science Degree College. Learn about admission procedures, requirements, important dates, and fees.',
};

export default function Admissions() {
  return (
    <MainLayout>
      <div className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 lg:py-32 flex items-center justify-center overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 w-full h-full">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Particles animation */}
            <div className="absolute inset-0 opacity-60">
              <Particles
                particleCount={180}
                particleSpread={10}
                speed={0.7}
                particleColors={["#14b8a6", "#0891b2", "#06b6d4", "#ffffff"]}
                moveParticlesOnHover={false}
                particleHoverFactor={1.2}
                alphaParticles={true}
                particleBaseSize={90}
                sizeRandomness={0.9}
                cameraDistance={14}
                disableRotation={false}
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Admissions</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                Join our community of future scientists and innovators. Start your journey with us today.
              </p>

            </div>
          </div>
        </section>

        {/* Admission Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Important Dates
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with our admission timeline and don't miss any important dates.
              </p>
            </div>
            <AdmissionTimeline dates={admissions.importantDates} />
          </div>
        </section>

        {/* Admission Procedures */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdmissionProcedures
              procedures={admissions.procedures}
              documents={admissions.requiredDocuments}
              fees={admissions.fees}
            />
          </div>
        </section>

        {/* Quick Apply Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-blue-600 text-white rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Take the first step towards your future in science and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                  Start Application
                </button>
                <button className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}