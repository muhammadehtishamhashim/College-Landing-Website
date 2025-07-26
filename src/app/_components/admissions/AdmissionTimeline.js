const AdmissionTimeline = ({ dates }) => {
  return (
    <div className="relative px-1 sm:px-4">
      {/* Timeline Line */}
      <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-emerald-500"></div>
      
      <div className="space-y-6 sm:space-y-8">
        {dates.map((item, index) => (
          <div key={index} className={`relative flex items-start ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Timeline Dot */}
            <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full border-2 sm:border-4 border-gray-800 shadow-lg z-10"></div>
            
            {/* Content Card with Gradient Border */}
            <div className={`ml-5 sm:ml-6 md:ml-0 md:w-1/2 w-full ${
              index % 2 === 0 ? 'md:pr-4 lg:pr-8' : 'md:pl-4 lg:pl-8'
            }`}>
              <div className="p-0.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-500 shadow-lg">
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg sm:rounded-xl p-4 sm:p-6 h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 leading-tight">{item.event}</h3>
                    <span className="bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border border-cyan-500/30 self-start sm:flex-shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionTimeline;