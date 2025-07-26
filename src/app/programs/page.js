import MainLayout from '../../layout/MainLayout';
import ProgramCard from '../_components/programs/ProgramCard';
import Particles from '../../ui/Particles';
import programs from '../../../data/programs.json';

export const metadata = {
  title: 'Programs | FG Science Degree College',
  description: 'Explore our comprehensive intermediate and degree programs in Computer Science, Physics, Pre-Medical, and Pre-Engineering.',
};

export default function Programs() {
  return (
    <MainLayout>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden py-20 lg:py-32 flex items-center justify-center">
          {/* Particles Background */}
          <div className="absolute inset-0 w-full h-full">
            <Particles
              particleCount={200}
              particleColors={["#00ffff", "#40ffaa", "#4079ff", "#ffffff"]}
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
              Our Programs
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of intermediate and degree programs designed to prepare you for academic excellence and successful careers.
            </p>
          </div>
        </section>

        {/* Section Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        {/* Intermediate Programs Section */}
        <section className="py-16 sm:py-20 bg-gray-800 relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                Intermediate Programs
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                Foundation programs to prepare students for higher education and specialized career paths.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.intermediate.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        {/* Degree Programs Section */}
        <section className="py-12 sm:py-16 bg-gray-900 relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                Degree Programs
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                Advanced four-year bachelor's degree programs for specialized professional careers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.degree.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        {/* Why Choose Our Programs */}
        <section className="py-12 sm:py-16 bg-gray-800 relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Why Choose Our Programs?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                Our programs are designed with industry needs in mind, providing both theoretical knowledge and practical skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Modern Labs</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">State-of-the-art laboratories with latest equipment for hands-on learning.</p>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-green-500/10 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">Expert Faculty</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Learn from experienced professors and industry professionals.</p>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-purple-500/10 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">Career Support</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Comprehensive placement assistance and career guidance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}