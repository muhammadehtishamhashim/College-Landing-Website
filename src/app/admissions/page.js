import MainLayout from '../../layout/MainLayout';
import AdmissionTimeline from '../_components/admissions/AdmissionTimeline';
import AdmissionProcedures from '../_components/admissions/AdmissionProcedures';
import admissions from '../../../data/admissions.json';

export const metadata = {
  title: 'Admissions | FG Science Degree College',
  description: 'Apply to FG Science Degree College. Learn about admission procedures, requirements, important dates, and fees.',
};

export default function Admissions() {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 to-orange-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Admissions</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                Join our community of future scientists and innovators. Start your journey with us today.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold mb-2">Application Deadline</h3>
                <p className="text-2xl font-bold text-yellow-300">{admissions.applicationDeadline}</p>
              </div>
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