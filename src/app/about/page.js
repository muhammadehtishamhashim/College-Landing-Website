import MainLayout from '../../layout/MainLayout';
import collegeInfo from '../../../data/college-info.json';
import RippleGrid from '../../ui/RippleGrid';
import Particles from '../../ui/Particles';
import FacultyCard from '../../ui/FacultyCard';
import AdministrationCard from '../../ui/AdministrationCard';

// Import faculty data
import administrationData from '../../../data/faculty/administration.json';
import mathematicsData from '../../../data/faculty/mathematics.json';
import computerScienceData from '../../../data/faculty/computer-science.json';
import physicsData from '../../../data/faculty/physics.json';
import chemistryData from '../../../data/faculty/chemistry.json';
import englishData from '../../../data/faculty/english.json';

export const metadata = {
    title: 'About Us | FG Science Degree College',
    description: 'Learn about FG Science Degree College - our history, mission, vision, and commitment to excellence in science education.',
};

export default function About() {
    return (
        <MainLayout>
            <div className="bg-gray-900 text-white min-h-screen">
                {/* Hero Section with Particles Background */}
                <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden py-20 lg:py-32 flex items-center justify-center">
                    {/* Particles Background */}
                    <div className="absolute inset-0 w-full h-full">
                        <Particles
                            particleCount={180}
                            particleColors={['#3b82f6', '#8b5cf6', '#06b6d4', '#ffffff']}
                        />
                    </div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
                            About Us
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                            Discover the legacy of excellence at FG Science Degree College, where innovation meets education and dreams transform into reality.
                        </p>
                    </div>
                </section>

                {/* Section Separator */}
                <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                {/* College Overview */}
                <section className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6">
                                        {collegeInfo.name}
                                    </h2>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                        {collegeInfo.description}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-4 sm:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
                                            <h3 className="font-semibold text-blue-400 mb-2 text-sm sm:text-base">Established</h3>
                                            <p className="text-xl sm:text-2xl font-bold text-blue-300">{collegeInfo.establishedYear}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-4 sm:p-6 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                                            <h3 className="font-semibold text-green-400 mb-2 text-sm sm:text-base">Accreditation</h3>
                                            <p className="text-xs sm:text-sm font-medium text-green-300">{collegeInfo.accreditation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                                    <div className="text-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl sm:text-3xl">🏛️</span>
                                        </div>
                                        <p className="text-gray-400 text-sm sm:text-base">College Campus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Separator */}
                <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                {/* Faculty Section */}
                <section className="py-16 sm:py-20 bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 opacity-60"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6">
                                Our Faculty
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Meet our dedicated team of educators and administrators who are committed to excellence in science education and student development.
                            </p>
                        </div>

                        {/* Administration Cards */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 sm:mb-8 text-center">
                                Leadership Team
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {administrationData.faculty.map((member) => (
                                    <AdministrationCard key={member.id} faculty={member} />
                                ))}
                            </div>
                        </div>

                        {/* Faculty by Department */}
                        <div className="space-y-12 sm:space-y-16">
                            {/* Mathematics Faculty */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 sm:mb-8 text-center">
                                    Mathematics Department
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {mathematicsData.faculty.map((member) => (
                                        <FacultyCard key={member.id} faculty={member} showDepartment={false} />
                                    ))}
                                </div>
                            </div>

                            {/* Computer Science Faculty */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-6 sm:mb-8 text-center">
                                    Computer Science Department
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {computerScienceData.faculty.map((member) => (
                                        <FacultyCard key={member.id} faculty={member} showDepartment={false} />
                                    ))}
                                </div>
                            </div>

                            {/* Physics Faculty */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6 sm:mb-8 text-center">
                                    Physics Department
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {physicsData.faculty.map((member) => (
                                        <FacultyCard key={member.id} faculty={member} showDepartment={false} />
                                    ))}
                                </div>
                            </div>

                            {/* Chemistry Faculty */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6 sm:mb-8 text-center">
                                    Chemistry Department
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {chemistryData.faculty.map((member) => (
                                        <FacultyCard key={member.id} faculty={member} showDepartment={false} />
                                    ))}
                                </div>
                            </div>

                            {/* English Faculty */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 sm:mb-8 text-center">
                                    English Department
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {englishData.faculty.map((member) => (
                                        <FacultyCard key={member.id} faculty={member} showDepartment={false} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Separator */}
                <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                {/* Mission & Vision */}
                <section className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10 group">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-lg sm:text-xl">🎯</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Our Mission</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                    To provide quality education in science and technology, fostering academic excellence,
                                    research innovation, and character development to prepare students for successful careers
                                    and meaningful contributions to society.
                                </p>
                            </div>
                            <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-purple-500/10 group">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-lg sm:text-xl">🔮</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Our Vision</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                    To be a premier institution recognized for excellence in science education,
                                    producing competent professionals and researchers who contribute to the advancement
                                    of science and technology for the betterment of humanity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Separator */}
                <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                {/* Affiliations */}
                <section className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 sm:mb-12">
                            Affiliations & Recognition
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                            {collegeInfo.affiliations?.map((affiliation, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-500 hover:border-gray-600/70 hover:shadow-xl hover:shadow-blue-500/10 group"
                                >
                                    <div className="flex items-center justify-center mb-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                                            <span className="text-lg sm:text-xl">🏆</span>
                                        </div>
                                        <h3 className="font-semibold text-blue-400 text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                                            {affiliation}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}