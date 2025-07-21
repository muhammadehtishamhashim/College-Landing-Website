const ContactInfo = ({ contact }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      
      <div className="space-y-8">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">📍</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 leading-relaxed">{contact.address}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">📞</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <div className="space-y-1">
              {contact.phone.map((phone, index) => (
                <p key={index} className="text-gray-600">
                  <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
                    {phone}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">✉️</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <div className="space-y-1">
              {contact.email.map((email, index) => (
                <p key={index} className="text-gray-600">
                  <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
                    {email}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">🕒</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">{contact.officeHours}</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">🌐</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              {contact.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.platform}
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
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;