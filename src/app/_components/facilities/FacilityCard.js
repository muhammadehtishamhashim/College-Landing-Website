'use client';

const FacilityCard = ({ facility }) => {
  // Determine border colors based on facility type
  const getBorderColors = (facilityId) => {
    if (facilityId.includes('physics')) {
      return ['#3b82f6', '#8b5cf6']; // Blue to Purple
    } else if (facilityId.includes('chemistry')) {
      return ['#ef4444', '#f59e0b']; // Red to Orange
    } else if (facilityId.includes('computer')) {
      return ['#10b981', '#3b82f6']; // Green to Blue
    } else if (facilityId.includes('library')) {
      return ['#8b5cf6', '#ec4899']; // Purple to Pink
    } else if (facilityId.includes('bio')) {
      return ['#10b981', '#34d399']; // Green to Emerald
    } else {
      return ['#f59e0b', '#ef4444']; // Orange to Red (default)
    }
  };

  // Get facility image path
  const getImagePath = (facilityId) => {
    const imageMap = {
      'physics-lab': '/Facilities/PhysicsLab.png',
      'chemistry-lab': '/Facilities/ChemistryLab.png',
      'computer-lab': '/Facilities/ComputerLab.png',
      'library': '/Facilities/Library.png',
      'bio-lab': '/Facilities/BioLab.png',
      'smart-classes': '/Facilities/SmartClasses.png'
    };
    return imageMap[facilityId] || '/Facilities/PhysicsLab.png';
  };

  const borderColors = getBorderColors(facility.id);
  const borderClass = `animated-border-${facility.id}`;

  return (
    <>
      <div className="animated-border-box group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
        <div className={`animated-border ${borderClass}`}></div>
        <div className="facility-card-content bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Facility Image */}
          <div className="h-64 relative overflow-hidden">
            <img
              src={getImagePath(facility.id)}
              alt={facility.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-blue-500/20 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm">
                {facility.capacity}
              </span>
            </div>
          </div>

          <div className="p-8 relative">
            {/* Subtle background animation on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>

            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                  {facility.name}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {facility.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Key Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {facility.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 group-hover:text-green-300 transition-colors duration-300">✓</span>
                      <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacity Badge */}
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50 group-hover:bg-gray-700/70 group-hover:border-gray-600/70 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Capacity</span>
                  <span className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{facility.capacity}</span>
                </div>
              </div>
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-b-2xl"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .animated-border-box {
          position: relative;
          border-radius: 16px;
          padding: 2px;
          margin-bottom: 0;
        }

        .animated-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px;
          z-index: 0;
          background-size: 300% 300%;
          animation: rotate 4s linear infinite;
        }

        .facility-card-content {
          position: relative;
          z-index: 1;
        }

        /* Physics Lab - Blue to Purple */
        .animated-border-physics-lab {
          background-image: conic-gradient(from var(--angle), #3b82f6, #8b5cf6, #3b82f6);
        }

        /* Chemistry Lab - Red to Orange */
        .animated-border-chemistry-lab {
          background-image: conic-gradient(from var(--angle), #ef4444, #f59e0b, #ef4444);
        }

        /* Computer Lab - Green to Blue */
        .animated-border-computer-lab {
          background-image: conic-gradient(from var(--angle), #10b981, #3b82f6, #10b981);
        }

        /* Library - Purple to Pink */
        .animated-border-library {
          background-image: conic-gradient(from var(--angle), #8b5cf6, #ec4899, #8b5cf6);
        }

        /* Bio Lab - Green to Emerald */
        .animated-border-bio-lab {
          background-image: conic-gradient(from var(--angle), #10b981, #34d399, #10b981);
        }

        /* Smart Classes - Orange to Red */
        .animated-border-smart-classes {
          background-image: conic-gradient(from var(--angle), #f59e0b, #ef4444, #f59e0b);
        }

        @keyframes rotate {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </>
  );
};

export default FacilityCard;