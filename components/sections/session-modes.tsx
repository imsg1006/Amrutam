export default function SessionModes() {
  return (
    <section className="w-full bg-amber-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-3">Choose Your Session Mode</h2>
          <p className="text-gray-700 text-lg">
            Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each
            option offers flexibility and personalized care to suit individual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Free Call", description: "₹15 / Min", icon: "☎️" },
            { title: "Video Call", description: "₹15 / Min", icon: "📹" },
            { title: "Chat", description: "₹15 / Text", icon: "💬" },
          ].map((mode, i) => (
            <div key={i} className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">{mode.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{mode.title}</h3>
              <p className="text-gray-600">{mode.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
