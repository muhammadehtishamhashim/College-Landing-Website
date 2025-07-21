import MainLayout from '../../layout/MainLayout';
import FacilityCard from '../_components/facilities/FacilityCard';
import facilities from '../../../data/facilities.json';

export const metadata = {
  title: 'Facilities | FG Science Degree College',
  description: 'Explore our world-class facilities including advanced laboratories, library, computer labs, and modern infrastructure.',
};

export default function Facilities() {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Facilities</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
                State-of-the-art infrastructure and modern facilities to support your academic journey and research endeavors.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Highlights */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Infrastructure Highlights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our campus is equipped with modern amenities to provide the best learning environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Labs</h3>
                <p className="text-gray-600 text-sm">Modern equipment for practical learning</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Library</h3>
                <p className="text-gray-600 text-sm">Extensive collection of books and e-resources</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Computer Labs</h3>
                <p className="text-gray-600 text-sm">High-speed internet and latest software</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Auditorium</h3>
                <p className="text-gray-600 text-sm">Modern AV systems for events and seminars</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}