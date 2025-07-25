const AdmissionTimeline = ({ dates }) => {
  return (
    <div className="relative px-1 sm:px-4">
      {/* Timeline Line */}
      <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      <div className="space-y-6 sm:space-y-8">
        {dates.map((item, index) => (
          <div key={index} className={`relative flex items-start ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Timeline Dot */}
            <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 sm:border-4 border-gray-800 shadow-lg z-10"></div>
            
            {/* Content Card with Gradient Border */}
            <div className={`ml-5 sm:ml-6 md:ml-0 md:w-1/2 w-full ${
              index % 2 === 0 ? 'md:pr-4 lg:pr-8' : 'md:pl-4 lg:pl-8'
            }`}>
              <div className="timeline-card-border p-0.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">{item.event}</h3>
                    <span className="bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border border-blue-500/30 self-start sm:flex-shrink-0">
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