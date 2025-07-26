import MainLayout from '../../layout/MainLayout';
import Particles from '../../ui/Particles';

export const metadata = {
  title: 'Gallery | FG Science Degree College',
  description: 'Explore our photo gallery showcasing campus life, events, facilities, and student activities at FG Science Degree College.',
};

export default function Gallery() {
  return (
    <MainLayout>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden py-20 lg:py-32 flex items-center justify-center">
          {/* Background Animation */}
          <div className="absolute inset-0 w-full h-full">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Particles animation */}
            <div className="absolute inset-0 opacity-50">
              <Particles
                particleCount={180}
                particleColors={["#f59e0b", "#ef4444", "#8b5cf6", "#ffffff"]}
              />
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
              Gallery
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Discover the vibrant life at FG Science Degree College through our photo gallery showcasing campus events, facilities, and student achievements.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-800/40 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">📸</span>
              </div>
              
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6">
                Gallery Coming Soon
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're currently curating an amazing collection of photos showcasing our campus life, 
                student activities, academic events, and facilities. Check back soon to explore our visual journey!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Campus Life</h3>
                  <p className="text-gray-400 text-sm">Beautiful campus grounds and modern facilities</p>
                </div>

                <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Academic Events</h3>
                  <p className="text-gray-400 text-sm">Graduation ceremonies and academic achievements</p>
                </div>

                <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🔬</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Lab Activities</h3>
                  <p className="text-gray-400 text-sm">Students engaged in practical learning</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-600 text-white hover:border-gray-500 hover:bg-gray-700 font-semibold rounded-xl transition-all duration-300"
                >
                  Back to Home
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder for Future Gallery Categories */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                Future Gallery Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Here's what you can expect to see in our upcoming gallery sections.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Campus Views', icon: '🏫', description: 'Beautiful shots of our campus architecture and grounds' },
                { title: 'Laboratory Work', icon: '🔬', description: 'Students conducting experiments and practical work' },
                { title: 'Events & Ceremonies', icon: '🎉', description: 'Academic events, graduations, and celebrations' },
                { title: 'Student Life', icon: '👥', description: 'Daily life and activities of our students' },
                { title: 'Faculty & Staff', icon: '👨‍🏫', description: 'Our dedicated teaching and administrative team' },
                { title: 'Sports & Recreation', icon: '⚽', description: 'Athletic activities and recreational events' },
                { title: 'Library & Study', icon: '📚', description: 'Students engaged in learning and research' },
                { title: 'Achievements', icon: '🏆', description: 'Awards, recognitions, and success stories' }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}