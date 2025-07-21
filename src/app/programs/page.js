import MainLayout from '../../layout/MainLayout';
import ProgramCard from '../_components/programs/ProgramCard';
import programs from '../../../data/programs.json';

export const metadata = {
  title: 'Programs | FG Science Degree College',
  description: 'Explore our comprehensive science degree programs in Physics, Chemistry, Mathematics, and Computer Science.',
};

export default function Programs() {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Programs</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
                Choose from our comprehensive range of science degree programs designed to prepare you for a successful career.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Programs */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Programs?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our programs are designed with industry needs in mind, providing both theoretical knowledge and practical skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Labs</h3>
                <p className="text-gray-600">State-of-the-art laboratories with latest equipment for hands-on learning.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Faculty</h3>
                <p className="text-gray-600">Learn from experienced professors and industry professionals.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Support</h3>
                <p className="text-gray-600">Comprehensive placement assistance and career guidance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}