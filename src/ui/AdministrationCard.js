'use client';

import { useState } from 'react';
import Image from 'next/image';

const AdministrationCard = ({ faculty }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getAdminLevel = (position) => {
    if (position.toLowerCase().includes('principal') && !position.toLowerCase().includes('vice')) {
      return {
        level: 'primary',
        gradient: 'from-yellow-400 via-orange-500 to-red-500',
        bgGradient: 'from-yellow-900/20 via-orange-900/15 to-red-900/20',
        borderGradient: 'from-yellow-400 via-orange-400 to-red-400',
        glowColor: 'yellow-500/30',
        icon: '👑',
        title: 'Principal'
      };
    } else if (position.toLowerCase().includes('vice')) {
      return {
        level: 'secondary',
        gradient: 'from-blue-400 via-purple-500 to-pink-500',
        bgGradient: 'from-blue-900/20 via-purple-900/15 to-pink-900/20',
        borderGradient: 'from-blue-400 via-purple-400 to-pink-400',
        glowColor: 'purple-500/30',
        icon: '🎖️',
        title: 'Vice Principal'
      };
    } else {
      return {
        level: 'standard',
        gradient: 'from-emerald-400 via-cyan-500 to-blue-500',
        bgGradient: 'from-emerald-900/20 via-cyan-900/15 to-blue-900/20',
        borderGradient: 'from-emerald-400 via-cyan-400 to-blue-400',
        glowColor: 'cyan-500/30',
        icon: '👤',
        title: position
      };
    }
  };

  const adminLevel = getAdminLevel(faculty.position);
  const isPrincipal = adminLevel.level === 'primary';

  return (
    <div className="group relative">
      {/* Animated gradient border with enhanced effects */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${adminLevel.borderGradient} rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none`}></div>
      
      {/* Secondary glow effect */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${adminLevel.borderGradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl`}></div>

      {/* Main card with premium styling */}
      <div className={`relative bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-3xl p-8 ${isPrincipal ? 'lg:p-10' : ''} shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700/50 group-hover:border-gray-600/70 overflow-hidden h-full flex flex-col justify-center`}>
        
        {/* Premium background pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${adminLevel.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-600/30 group-hover:border-gray-400/50 transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-600/30 group-hover:border-gray-400/50 transition-colors duration-300"></div>

        {/* Content container */}
        <div className="flex flex-col items-center text-center space-y-6 relative z-10">

          {/* Enhanced profile image section */}
          <div className="relative">
            {/* Outer glow ring */}
            <div className={`absolute -inset-3 bg-gradient-to-r ${adminLevel.borderGradient} rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md`}></div>
            
            {/* Image container with enhanced styling */}
            <div className={`relative ${isPrincipal ? 'w-28 h-28' : 'w-24 h-24'} rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-gray-400 transition-all duration-300 shadow-xl`}>
              <Image
                src={imageError ? '/faculty/maleuser.png' : faculty.image}
                alt={faculty.name}
                width={isPrincipal ? 112 : 96}
                height={isPrincipal ? 112 : 96}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={handleImageError}
              />
              
              {/* Image overlay for premium effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Enhanced status indicator */}
            <div className={`absolute -bottom-2 -right-2 ${isPrincipal ? 'w-6 h-6' : 'w-4 h-4'} bg-gradient-to-r ${adminLevel.gradient} rounded-full border-4 border-gray-800 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            </div>


          </div>

          {/* Enhanced name and title section */}
          <div className="space-y-3 relative z-20">
            <h3 className={`${isPrincipal ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'} font-bold text-white transition-all duration-300`}>
              {faculty.name}
            </h3>

            {/* Enhanced position badge */}
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${adminLevel.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
              {adminLevel.title}
            </div>

            {/* Institution name with enhanced styling */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <p className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
                FG Science Degree College
              </p>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced contact info */}
          {faculty.phone && (
            <div className="flex items-center gap-3 text-sm text-gray-300 bg-gray-700/50 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-600/30 group-hover:border-gray-500/50 group-hover:bg-gray-700/70 transition-all duration-300">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs">📞</span>
              </div>
              <span className="font-mono group-hover:text-white transition-colors duration-300">{faculty.phone}</span>
            </div>
          )}

          {/* Enhanced leadership message for principal and vice principal */}
          {isPrincipal && (
            <div className="bg-gradient-to-r from-gray-700/30 via-gray-600/20 to-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                "Leading with vision, inspiring excellence in science education and fostering innovation for tomorrow's leaders."
              </p>
            </div>
          )}

          {/* Enhanced leadership message for vice principal */}
          {adminLevel.level === 'secondary' && (
            <div className="bg-gradient-to-r from-gray-700/30 via-gray-600/20 to-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                "Supporting academic excellence and student development through collaborative leadership and innovative educational practices."
              </p>
            </div>
          )}

          {/* Qualifications section for admin */}
          {faculty.qualifications && faculty.qualifications.length > 0 && (
            <div className="w-full max-w-sm">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center justify-center gap-2">
                <span className="text-yellow-400">🎓</span>
                Qualifications
              </h4>
              <div className="space-y-2">
                {faculty.qualifications.slice(0, 2).map((qualification, index) => (
                  <div key={index} className="text-xs text-gray-400 bg-gray-700/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-600/20 group-hover:bg-gray-700/60 group-hover:text-gray-300 transition-all duration-300">
                    {qualification}
                  </div>
                ))}
                {faculty.qualifications.length > 2 && (
                  <div className="text-xs text-cyan-400 font-medium text-center">
                    +{faculty.qualifications.length - 2} more credentials
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Premium floating particles effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${adminLevel.gradient} rounded-full animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Bottom accent with enhanced gradient */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${adminLevel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
      </div>
    </div>
  );
};

export default AdministrationCard;