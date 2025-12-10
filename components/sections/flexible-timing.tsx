export default function FlexibleTiming() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - App Mockup Placeholder */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="w-full bg-gray-50 border border-gray-300 rounded-lg p-6 h-96 flex items-center justify-center">
              <span className="text-gray-500">Flexible Timing Interface - Replace with Image</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Flexible Work Timing</h2>
            <p className="text-gray-600 mb-6">
              We recognize the importance of managing your time. With the availability toggle in the doctor's app, you
              control when patients can book consultations, ensuring a balanced and stress-free practice.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
