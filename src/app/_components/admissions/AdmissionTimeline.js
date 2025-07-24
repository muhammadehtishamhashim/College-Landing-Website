const AdmissionTimeline = ({ dates }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
      
      <div className="space-y-8">
        {dates.map((item, index) => (
          <div key={index} className={`relative flex items-center ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            
            {/* Content Card */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
            }`}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{item.event}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2 flex-shrink-0">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionTimeline;