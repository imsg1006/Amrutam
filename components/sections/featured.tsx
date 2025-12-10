export default function Featured() {
  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4  ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-3">Featured</h2>
        <p className="text-gray-600 mb-12">
          Recognized and celebrated by leading publications – Amrutam in the spotlight!
        </p>

        {/* Logo Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-6 items-center justify-center">
          {[
            <img src={"/toi.png"} alt="The Time of India"></img>,
            <img src={"/your.png"} alt="YourStory"></img>,
            <img src={"/traveler.png"} alt="Traveler"></img>,
            <img src={"/etc.png"} alt="livingetc"></img>,
            <img src={"/cof.png"} alt="VOICE OF FASHION"></img>,
            <img src={"/gq.png"} alt="GQ"></img>,
            <img src={"/life.png"} alt="Life Of Asia"></img>,
            <img src={"/vogue.png"} alt="Vogue"></img>,
            <img src={"/forbes.png"} alt="ZERO 30"></img>,
          ].map((logo, i) => (
            <div key={i} className="bg-transparent rounded p-4 h-20 flex items-center justify-center">
              <span className="text-xs text-gray-500 text-center">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
