const AdmissionProcedures = ({ procedures, documents, fees }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:items-stretch">
      {/* Procedures */}
      <div className="p-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 h-full">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6">Admission Process</h3>
          <div className="space-y-4 flex-grow">
            {procedures.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="p-0.5 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 h-full">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6">Required Documents</h3>
          <div className="space-y-3 flex-grow">
            {documents.map((document, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">📄</span>
                <p className="text-gray-300 text-sm leading-relaxed">{document}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fees Structure */}
      <div className="p-0.5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 h-full">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6">Fee Structure</h3>
          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
              <span className="font-medium text-gray-300">Application Fee</span>
              <span className="font-bold text-blue-400">{fees.application}</span>
            </div>
            <div className="flex justify-between items-start p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
              <span className="font-medium text-gray-300 flex-shrink-0 mr-2">Tuition Fee</span>
              <span className="font-bold text-blue-400 text-right text-sm break-words">{fees.tuition}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
              <span className="font-medium text-gray-300">Other Fees</span>
              <span className="font-bold text-blue-400">{fees.other}</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
            <p className="text-sm text-blue-300">
              <strong>Note:</strong> Fee concessions available for eligible students based on merit and financial need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedures;