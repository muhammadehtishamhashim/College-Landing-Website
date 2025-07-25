'use client';

import { useState } from 'react';
import Image from 'next/image';

const FacultyCard = ({ faculty, showDepartment = false }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getPositionColor = (position) => {
    if (position.toLowerCase().includes('professor')) {
      return 'from-blue-500 to-purple-500';
    } else if (position.toLowerCase().includes('lecturer')) {
      return 'from-green-500 to-teal-500';
    } else if (position.toLowerCase().includes('assistant')) {
      return 'from-orange-500 to-red-500';
    } else {
      return 'from-gray-500 to-gray-600';
    }
  };

  const getPositionIcon = (position) => {
    if (position.toLowerCase().includes('professor')) {
      return '👨‍🏫';
    } else if (position.toLowerCase().includes('lecturer')) {
      return '📚';
    } else if (position.toLowerCase().includes('assistant')) {
      return '🎓';
    } else {
      return '👤';
    }
  };

  return (
    <div className="group relative">
      {/* Constant gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 lg:h-80">
        {/* Header with image and basic info */}
        <div className="flex items-start gap-4 mb-4">
          {/* Profile image */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300">
              <Image
                src={imageError ? '/faculty/maleuser.png' : faculty.image}
                alt={faculty.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <span className="text-xs">{getPositionIcon(faculty.position)}</span>
            </div>
          </div>

          {/* Name and position */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white mb-1 truncate group-hover:text-blue-300 transition-colors duration-300">
              {faculty.name}
            </h3>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getPositionColor(faculty.position)} mb-2`}>
              {faculty.position}
            </div>
            {showDepartment && (
              <p className="text-sm text-gray-400">{faculty.specialization}</p>
            )}
          </div>
        </div>

        {/* Contact info */}
        {faculty.phone && (
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-300">
            <span className="text-blue-400">📞</span>
            <span className="font-mono">{faculty.phone}</span>
          </div>
        )}

        {/* Qualifications */}
        {faculty.qualifications && faculty.qualifications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <span className="text-yellow-400">🎓</span>
              Qualifications
            </h4>
            <div className="space-y-1">
              {faculty.qualifications.slice(0, 3).map((qualification, index) => (
                <div key={index} className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                  {qualification}
                </div>
              ))}
              {faculty.qualifications.length > 3 && (
                <div className="text-xs text-blue-400 font-medium">
                  +{faculty.qualifications.length - 3} more
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getPositionColor(faculty.position)} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`}></div>
      </div>
    </div>
  );
};

export default FacultyCard;