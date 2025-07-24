const AdmissionTimeline = ({ dates }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      <div className="space-y-8">
        {dates.map((item, index) => (
          <div key={index} className={`relative flex items-center ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-800 shadow-lg z-10"></div>
            
            {/* Content Card with Gradient Border */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
            }`}>
              <div className="timeline-card-border p-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{item.event}</h3>
                    <span className="bg-blue-500/20 text-blue-300 text-sm font-medium px-3 py-1 rounded-full ml-2 flex-shrink-0 border border-blue-500/30">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
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