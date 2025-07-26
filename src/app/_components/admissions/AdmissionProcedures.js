const AdmissionProcedures = ({ procedures, documents, fees }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 lg:items-stretch">
      {/* Procedures */}
      <div className="p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg h-full">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 sm:mb-6">Admission Process</h3>
          <div className="space-y-3 sm:space-y-4 flex-grow">
            {procedures.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-emerald-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg h-full">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-4 sm:mb-6">Required Documents</h3>
          <div className="space-y-2 sm:space-y-3 flex-grow">
            {documents.map((document, index) => (
              <div key={index} className="flex items-start">
                <span className="text-emerald-400 mr-2 sm:mr-3 mt-1 text-sm">📄</span>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{document}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fees Structure */}
      <div className="p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg h-full md:col-span-2 lg:col-span-1">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6">Fee Structure</h3>
          <div className="space-y-3 sm:space-y-4 flex-grow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 gap-1 sm:gap-0">
              <span className="font-medium text-gray-300 text-sm">Application Fee</span>
              <span className="font-bold text-blue-400 text-sm">{fees.application}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-3 sm:p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 gap-1 sm:gap-2">
              <span className="font-medium text-gray-300 text-sm">Tuition Fee</span>
              <span className="font-bold text-blue-400 text-xs sm:text-sm break-words">{fees.tuition}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 gap-1 sm:gap-0">
              <span className="font-medium text-gray-300 text-sm">Other Fees</span>
              <span className="font-bold text-blue-400 text-sm">{fees.other}</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
            <p className="text-xs sm:text-sm text-blue-300">
              <strong>Note:</strong> Fee concessions available for eligible students based on merit and financial need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedures;