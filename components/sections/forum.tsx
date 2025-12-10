export default function Forum() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-green-900 mb-6">Forum for Meaningful Connections</h2>
            <p className="text-lg text-gray-600 mb-8">
              We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions,
              while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.
            </p>
          </div>

          {/* Right - Forum Interface Placeholder */}
          <div className="flex justify-center">
            <div className="w-full bg-gray-50 border border-gray-300 rounded-lg p-6 h-80 flex items-center justify-center">
              <span className="text-gray-500">Forum Interface - Replace with Image</span>
            </div>
          </div>
        </div>

        {/* Session Modes at Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="border-2 border-gray-300 rounded-lg p-6 text-center flex-1 max-w-xs bg-white">
            <p className="font-semibold text-gray-900 mb-2">Free Call</p>
            <p className="text-gray-600">₹15 / Min</p>
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-6 text-center flex-1 max-w-xs bg-white">
            <p className="font-semibold text-gray-900 mb-2">Video</p>
            <p className="text-gray-600">₹15 / Min</p>
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-6 text-center flex-1 max-w-xs bg-white">
            <p className="font-semibold text-gray-900 mb-2">Chat</p>
            <p className="text-gray-600">₹15 / Text</p>
          </div>
        </div>
      </div>
    </section>
  )
}
