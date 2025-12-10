export default function Featured() {
  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4 border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-3">Featured</h2>
        <p className="text-gray-600 mb-12">
          Recognized and celebrated by leading publications – Amrutam in the spotlight!
        </p>

        {/* Logo Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-6 items-center justify-center">
          {[
            "",
            "YOURSTORY",
            "Travel Mag",
            "livingetc",
            "VOICE OF FASHION",
            "GQ",
            "LIFESTYLE ASIA",
            "VOGUE",
            "ZERO 30",
          ].map((logo, i) => (
            <div key={i} className="bg-gray-100 rounded p-4 h-20 flex items-center justify-center">
              <span className="text-xs text-gray-500 text-center">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
