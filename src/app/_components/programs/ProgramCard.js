'use client';

import Link from 'next/link';

const ProgramCard = ({ program }) => {
  // Determine border colors based on program type
  const getBorderColors = (programId) => {
    if (programId.includes('physics') || programId.includes('pre-engineering')) {
      return ['#3b82f6', '#8b5cf6']; // Blue to Purple
    } else if (programId.includes('computer') || programId.includes('ics') || programId.includes('fcs')) {
      return ['#10b981', '#3b82f6']; // Green to Blue
    } else if (programId.includes('medical')) {
      return ['#ef4444', '#f59e0b']; // Red to Orange
    } else {
      return ['#8b5cf6', '#ec4899']; // Purple to Pink (default)
    }
  };

  const borderColors = getBorderColors(program.id);
  const borderClass = `animated-border-${program.id}`;

  return (
    <>
      <div className="animated-border-box group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
        <div className={`animated-border ${borderClass}`}></div>
        <div className="program-card-content bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 relative">
            {/* Subtle background animation on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{program.name}</h3>
                <span className="bg-blue-500/20 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                  {program.duration}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {program.description}
              </p>

              {/* Key Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50 group-hover:bg-gray-700/70 group-hover:border-gray-600/70 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Annual Fees</h4>
                  <p className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors duration-300">{program.fees}</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50 group-hover:bg-gray-700/70 group-hover:border-gray-600/70 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Intake</h4>
                  <p className="text-green-400 font-bold group-hover:text-green-300 transition-colors duration-300">{program.intake} Students</p>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Eligibility Criteria</h4>
                <ul className="space-y-1">
                  {program.eligibility.map((criteria, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300">
                      <span className="text-green-400 mr-2 group-hover:text-green-300 transition-colors duration-300">✓</span>
                      {criteria}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Key Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.slice(0, 4).map((subject, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    >
                      {subject}
                    </span>
                  ))}
                  {program.subjects.length > 4 && (
                    <span className="bg-gray-600/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-500/30 group-hover:bg-gray-600/70 group-hover:border-gray-500/50 transition-all duration-300">
                      +{program.subjects.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Career Prospects */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Career Prospects</h4>
                <div className="flex flex-wrap gap-2">
                  {program.careerProspects.slice(0, 3).map((career, index) => (
                    <span
                      key={index}
                      className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30 group-hover:bg-green-500/30 group-hover:border-green-400/50 transition-all duration-300"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/admissions?program=${program.id}`}
                className="group/btn relative block w-full bg-gray-800 border-2 border-white text-white font-bold rounded-2xl text-center py-3 px-6 overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-1 transform-gpu shadow-lg hover:shadow-2xl hover:shadow-green-400/30"
              >
                {/* Liquid fill effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-out rounded-2xl"></div>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-green-400/0 group-hover/btn:border-green-400 transition-all duration-500"></div>

                {/* Sparkle effects */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-3 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-6 right-4 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute bottom-4 left-12 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                </div>

                {/* Electric border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-2xl opacity-0 group-hover/btn:opacity-50 blur-sm transition-all duration-500 animate-pulse"></div>

                <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover/btn:text-black group-hover/btn:font-extrabold group-hover/btn:drop-shadow-sm">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Apply for {program.name.split(' ').pop()}</span>
                </span>
              </Link>
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl"></div>
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

        .program-card-content {
          position: relative;
          z-index: 1;
        }

        /* Physics and Pre-Engineering - Blue to Purple */
        .animated-border-bsc-physics,
        .animated-border-pre-engineering {
          background-image: conic-gradient(from var(--angle), #3b82f6, #8b5cf6, #3b82f6);
        }

        /* Computer Science programs - Green to Blue */
        .animated-border-bsc-computer-science,
        .animated-border-ics,
        .animated-border-fcs {
          background-image: conic-gradient(from var(--angle), #10b981, #3b82f6, #10b981);
        }

        /* Pre-Medical - Red to Orange */
        .animated-border-premedical {
          background-image: conic-gradient(from var(--angle), #ef4444, #f59e0b, #ef4444);
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

export default ProgramCard;