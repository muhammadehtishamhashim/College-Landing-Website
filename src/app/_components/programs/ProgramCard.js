import Link from 'next/link';

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {program.duration}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {program.description}
        </p>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Annual Fees</h4>
            <p className="text-blue-600 font-bold">{program.fees}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Intake</h4>
            <p className="text-green-600 font-bold">{program.intake} Students</p>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Eligibility Criteria</h4>
          <ul className="space-y-1">
            {program.eligibility.map((criteria, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {criteria}
              </li>
            ))}
          </ul>
        </div>

        {/* Subjects */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Subjects</h4>
          <div className="flex flex-wrap gap-2">
            {program.subjects.slice(0, 4).map((subject, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                {subject}
              </span>
            ))}
            {program.subjects.length > 4 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                +{program.subjects.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Career Prospects */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Career Prospects</h4>
          <div className="flex flex-wrap gap-2">
            {program.careerProspects.slice(0, 3).map((career, index) => (
              <span 
                key={index}
                className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full"
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/admissions?program=${program.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
        >
          Apply for {program.name.split(' ').pop()}
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;