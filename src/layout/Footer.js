import Link from 'next/link';
import footerData from '../../data/footer.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { collegeInfo, quickLinks, programs, socialLinks, contactInfo, legalLinks } = footerData;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{collegeInfo.shortName}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{collegeInfo.name}</h3>
                <p className="text-gray-400 text-sm">{collegeInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {collegeInfo.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-sm">{social.emoji}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-0.5">📍</span>
                <p className="text-gray-300">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.area}<br />
                  {contactInfo.address.city} {contactInfo.address.postalCode}<br />
                  {contactInfo.address.country}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <div>
                  {contactInfo.phones.map((phone, index) => (
                    <p key={index} className="text-gray-300">{phone}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <div>
                  {contactInfo.emails.map((email, index) => (
                    <p key={index} className="text-gray-300">{email}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-0.5">🕒</span>
                <p className="text-gray-300">
                  {contactInfo.workingHours.weekdays}<br />
                  {contactInfo.workingHours.saturday}<br />
                  {contactInfo.workingHours.sunday}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {collegeInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;