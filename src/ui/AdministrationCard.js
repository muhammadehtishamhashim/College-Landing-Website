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
        icon: '👑',
        title: 'Principal'
      };
    } else if (position.toLowerCase().includes('vice')) {
      return {
        level: 'secondary',
        gradient: 'from-blue-400 via-purple-500 to-pink-500',
        icon: '🎖️',
        title: 'Vice Principal'
      };
    } else {
      return {
        level: 'standard',
        gradient: 'from-gray-400 to-gray-600',
        icon: '👤',
        title: position
      };
    }
  };

  const adminLevel = getAdminLevel(faculty.position);
  const isPrincipal = adminLevel.level === 'primary';

  return (
    <div className={`group relative ${isPrincipal ? 'col-span-full md:col-span-2' : ''}`}>
      {/* Constant gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main card */}
      <div className="relative bg-gray-800 rounded-2xl p-6 lg:h-80 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500">

        {/* Content container */}
        <div className="flex flex-col items-center text-center space-y-5 relative z-10 py-2">

          {/* Profile image section */}
          <div className="relative">
            <div className={`${isPrincipal ? 'w-20 h-20' : 'w-16 h-16'} rounded-full overflow-hidden border-3 border-gray-600 group-hover:border-cyan-400 transition-colors duration-300`}>
              <Image
                src={imageError ? '/faculty/maleuser.png' : faculty.image}
                alt={faculty.name}
                width={isPrincipal ? 80 : 64}
                height={isPrincipal ? 80 : 64}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>

            {/* Status indicator */}
            <div className={`absolute -bottom-1 -right-1 ${isPrincipal ? 'w-6 h-6' : 'w-5 h-5'} bg-gradient-to-r ${adminLevel.gradient} rounded-full border-2 border-gray-800 flex items-center justify-center`}>
              <span className="text-xs">{adminLevel.icon}</span>
            </div>
          </div>

          {/* Name and title */}
          <div className="space-y-2">
            <h3 className={`${isPrincipal ? 'text-xl md:text-2xl' : 'text-lg'} font-bold text-white`}>
              {faculty.name}
            </h3>

            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${adminLevel.gradient}`}>
              {adminLevel.title}
            </div>

            <p className="text-gray-400 text-sm">FG Science Degree College</p>
          </div>

          {/* Contact info */}
          {faculty.phone && (
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-700/50 px-3 py-2 rounded-full">
              <span className="text-cyan-400">📞</span>
              <span className="font-mono">{faculty.phone}</span>
            </div>
          )}

          {/* Leadership message for principal */}
          {isPrincipal && (
            <div className="bg-gray-700/30 p-3 rounded-lg border border-gray-600/50 mt-4">
              <p className="text-xs text-gray-300 italic">
                "Leading with vision, inspiring excellence in science education and fostering innovation for tomorrow's leaders."
              </p>
            </div>
          )}

          {/* Simple and smooth hover effects */}

          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-teal-400/6 to-green-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          {/* Border enhancement */}
          <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/30 transition-colors duration-300 rounded-2xl pointer-events-none"></div>

          {/* Text readability enhancement */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default AdministrationCard;