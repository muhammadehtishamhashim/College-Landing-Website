const FacilityCard = ({ facility }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Placeholder */}
      <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl mb-2 block">
            {facility.id === 'physics-lab' && '⚛️'}
            {facility.id === 'chemistry-lab' && '🧪'}
            {facility.id === 'computer-lab' && '💻'}
            {facility.id === 'library' && '📚'}
            {facility.id === 'auditorium' && '🎭'}
          </span>
          <p className="text-gray-500 text-sm">Facility Image</p>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{facility.name}</h3>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            {facility.capacity}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {facility.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {facility.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Capacity Badge */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Capacity</span>
            <span className="text-lg font-bold text-blue-600">{facility.capacity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;