import MainLayout from '../../layout/MainLayout';
import FacilityCard from '../_components/facilities/FacilityCard';
import Particles from '../../ui/Particles';

import facilities from '../../../data/facilities.json';

export const metadata = {
  title: 'Facilities | FG Science Degree College',
  description: 'Explore our world-class facilities including advanced laboratories, library, computer labs, and modern infrastructure.',
};

export default function Facilities() {
  return (
    <MainLayout>
      <div className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden py-20 lg:py-32 flex items-center justify-center">
          {/* Background Animation */}
          <div className="absolute inset-0 w-full h-full">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Particles animation */}
            <div className="absolute inset-0 opacity-50">
              <Particles
                particleCount={120}
                particleColors={["#8b5cf6", "#ec4899", "#a855f7", "#ffffff"]}
              />
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
              Our Facilities
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art infrastructure and modern facilities to support your academic journey and research endeavors.
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                World-Class Facilities
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of modern facilities designed to enhance your learning experience.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Highlights */}
        <section className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                Infrastructure Highlights
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our campus is equipped with modern amenities to provide the best learning environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gray-700 p-6 rounded-xl shadow-lg text-center border border-gray-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Advanced Labs</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Modern equipment for practical learning</p>
              </div>

              <div className="group bg-gray-700 p-6 rounded-xl shadow-lg text-center border border-gray-600 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-900/20">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">Digital Library</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Extensive collection of books and e-resources</p>
              </div>

              <div className="group bg-gray-700 p-6 rounded-xl shadow-lg text-center border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">Computer Labs</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">High-speed internet and latest software</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}