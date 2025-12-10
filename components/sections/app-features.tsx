export default function AppFeatures() {
  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 mb-8 justify-center">
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">Consultations</button>
          <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-50">
            Payment withdrawal
          </button>
          <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-50">
            Schedule
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Phone Mockups */}
          {[
            { title: "Value Your Practice", subtitle: "Set consultation fees" },
            { title: "Appointments", subtitle: "Manage bookings" },
            { title: "Consultation Details", subtitle: "View details" },
          ].map((item, i) => (
            <div key={i} className="flex justify-center">
              <div className="bg-white rounded-3xl border-8 border-black shadow-lg w-56 h-96">
                <div className="bg-gray-100 w-full h-full rounded-2xl flex items-center justify-center flex-col">
                  <span className="text-sm text-gray-500 mb-2">{item.title}</span>
                  <span className="text-xs text-gray-400">{item.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-6">Today's Healing Journey</h3>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded">
            Join Now
          </button>
        </div>
      </div>
    </section>
  )
}
