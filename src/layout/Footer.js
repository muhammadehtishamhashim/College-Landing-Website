import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/admissions', label: 'Admissions' },
  ];

  const programs = [
    { href: '/programs#physics', label: 'B.Sc Physics' },
    { href: '/programs#chemistry', label: 'B.Sc Chemistry' },
    { href: '/programs#mathematics', label: 'B.Sc Mathematics' },
    { href: '/programs#computer-science', label: 'B.Sc Computer Science' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com/fgsciencecollege', label: 'Facebook', icon: 'facebook' },
    { href: 'https://twitter.com/fgsciencecollege', label: 'Twitter', icon: 'twitter' },
    { href: 'https://linkedin.com/company/fgsciencecollege', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://youtube.com/fgsciencecollege', label: 'YouTube', icon: 'youtube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FG</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">FG Science College</h3>
                <p className="text-gray-400 text-sm">Excellence in Science Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premier institution dedicated to providing quality education in science and technology since 2010.
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
                  <span className="text-sm">
                    {social.icon === 'facebook' && '📘'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'linkedin' && '💼'}
                    {social.icon === 'youtube' && '📺'}
                  </span>
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
                  123 Education Street<br />
                  Science City, State 123456<br />
                  India
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <div>
                  <p className="text-gray-300">+91-123-456-7890</p>
                  <p className="text-gray-300">+91-123-456-7891</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <div>
                  <p className="text-gray-300">info@fgscience.edu.in</p>
                  <p className="text-gray-300">admissions@fgscience.edu.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-0.5">🕒</span>
                <p className="text-gray-300">
                  Mon-Fri: 9:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} FG Science Degree College. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;