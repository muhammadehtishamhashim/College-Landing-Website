import MainLayout from '../../layout/MainLayout';
import Particles from '../../ui/Particles';

export const metadata = {
    title: 'Affiliated University | FG Science Degree College',
    description: 'Learn about our affiliation with the University of Punjab and other academic partnerships.',
};

export default function AffiliatedUniversity() {
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
                                particleCount={150}
                                particleColors={["#3b82f6", "#8b5cf6", "#06b6d4", "#ffffff"]}
                            />
                        </div>
                    </div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
                            Affiliated University
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                            Discover our academic partnerships and university affiliations that ensure quality education and recognized degrees.
                        </p>
                    </div>
                </section>

                {/* University of Punjab Affiliation */}
                <section className="py-20 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                                University of Punjab
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Our primary affiliation with the prestigious University of Punjab ensures academic excellence and degree recognition.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10">
                                <h3 className="text-2xl font-bold text-white mb-6">About University of Punjab</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        The University of Punjab, established in 1882, is one of the oldest and most prestigious universities in Pakistan.
                                        It has a rich history of academic excellence and has produced numerous notable alumni who have made significant
                                        contributions to various fields.
                                    </p>
                                    <p>
                                        Our affiliation with the University of Punjab ensures that our degree programs meet the highest academic standards
                                        and are recognized both nationally and internationally.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-purple-500/10">
                                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Affiliation</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        Recognized degree programs with national and international acceptance
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        Access to university resources and research facilities
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        Standardized curriculum following university guidelines
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        Regular academic audits ensuring quality education
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        Opportunities for higher education and research
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Programs */}
                <section className="py-20 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                                Affiliated Programs
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Our degree programs are affiliated with the University of Punjab, ensuring quality education and recognized qualifications.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-700/50 p-8 rounded-2xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">⚛️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Bachelor of Science in Physics</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    A comprehensive 4-year degree program in Physics affiliated with the University of Punjab,
                                    covering theoretical and practical aspects of physics.
                                </p>
                                <div className="flex items-center text-sm text-blue-400">
                                    <span className="mr-2">🎓</span>
                                    University of Punjab Affiliated
                                </div>
                            </div>

                            <div className="bg-gray-700/50 p-8 rounded-2xl border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-900/20">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">💻</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    A modern 4-year degree program in Computer Science affiliated with the University of Punjab,
                                    focusing on programming, software development, and emerging technologies.
                                </p>
                                <div className="flex items-center text-sm text-green-400">
                                    <span className="mr-2">🎓</span>
                                    University of Punjab Affiliated
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recognition and Accreditation */}
                <section className="py-20 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                                Recognition & Accreditation
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Our college maintains high standards through various recognitions and accreditations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-purple-500/10">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">Higher Education Commission</h3>
                                <p className="text-gray-300 text-sm">
                                    Recognized by the Higher Education Commission (HEC) of Pakistan for quality education standards.
                                </p>
                            </div>

                            <div className="text-center bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📜</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">Federal Government</h3>
                                <p className="text-gray-300 text-sm">
                                    Established and operated under the Federal Government of Pakistan with full authorization.
                                </p>
                            </div>

                            <div className="text-center bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-green-500/10">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🌍</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">International Recognition</h3>
                                <p className="text-gray-300 text-sm">
                                    Our degrees are internationally recognized, opening doors for global opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20 bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10">
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                                Need More Information?
                            </h2>
                            <p className="text-gray-300 mb-6">
                                For detailed information about our university affiliation and degree programs, contact our admissions office.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/admissions"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Apply Now
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 border-2 border-gray-600 text-white hover:border-gray-500 hover:bg-gray-700 font-semibold rounded-xl transition-all duration-300"
                                >
                                    Contact Us
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}