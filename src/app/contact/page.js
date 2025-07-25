import MainLayout from '../../layout/MainLayout';
import ContactForm from '../_components/contact/ContactForm';
import ContactInfo from '../_components/contact/ContactInfo';
import Particles from '../../ui/Particles';
import contact from '../../../data/contact.json';

export const metadata = {
  title: 'Contact Us | FG Science Degree College',
  description: 'Get in touch with FG Science Degree College. Find our contact information, location, and send us a message.',
};

export default function Contact() {
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
            <div className="absolute inset-0 opacity-60">
              <Particles
                particleCount={150}
                particleColors={["#14b8a6", "#0891b2", "#06b6d4", "#ffffff"]}
              />
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help you with any questions about admissions, programs, or campus life.
            </p>
          </div>
        </section>

        {/* Section Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <ContactInfo contact={contact} />
              
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        {/* Map Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">Visit our campus and experience our facilities firsthand.</p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🗺️</span>
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500 mt-2">{contact.address}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}