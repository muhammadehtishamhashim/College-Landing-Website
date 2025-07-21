import MainLayout from '../../layout/MainLayout';
import collegeInfo from '../../../data/college-info.json';

export const metadata = {
    title: 'About Us | FG Science Degree College',
    description: 'Learn about FG Science Degree College - our history, mission, vision, and commitment to excellence in science education.',
};

export default function About() {
    return (
        <MainLayout>
            <div className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Us</h1>
                            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
                                Discover our journey of excellence in science education and our commitment to shaping future innovators.
                            </p>
                        </div>
                    </div>
                </section>

                {/* College Overview */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                    {collegeInfo.name}
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    {collegeInfo.description}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <h3 className="font-semibold text-blue-900 mb-2">Established</h3>
                                        <p className="text-2xl font-bold text-blue-600">{collegeInfo.establishedYear}</p>
                                    </div>
                                    <div className="bg-green-50 p-6 rounded-xl">
                                        <h3 className="font-semibold text-green-900 mb-2">Accreditation</h3>
                                        <p className="text-sm font-medium text-green-600">{collegeInfo.accreditation}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                <p className="text-gray-500">College Image Placeholder</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To provide quality education in science and technology, fostering academic excellence,
                                    research innovation, and character development to prepare students for successful careers
                                    and meaningful contributions to society.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To be a premier institution recognized for excellence in science education,
                                    producing competent professionals and researchers who contribute to the advancement
                                    of science and technology for the betterment of humanity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Affiliations */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Affiliations & Recognition</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {collegeInfo.affiliations?.map((affiliation, index) => (
                                <div key={index} className="bg-blue-50 p-6 rounded-xl">
                                    <h3 className="font-semibold text-blue-900">{affiliation}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}