const AdmissionProcedures = ({ procedures, documents, fees }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Procedures */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h3>
        <div className="space-y-4">
          {procedures.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                {index + 1}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
        <div className="space-y-3">
          {documents.map((document, index) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">📄</span>
              <p className="text-gray-600 text-sm leading-relaxed">{document}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fees Structure */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Application Fee</span>
            <span className="font-bold text-blue-600">{fees.application}</span>
          </div>
          <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Tuition Fee</span>
            <span className="font-bold text-blue-600 text-right text-sm">{fees.tuition}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Other Fees</span>
            <span className="font-bold text-blue-600">{fees.other}</span>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Fee concessions available for eligible students based on merit and financial need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedures;