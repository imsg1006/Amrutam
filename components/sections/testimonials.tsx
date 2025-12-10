import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Pooja Deshmukh",
      credential: "BAMS",
      text: '"Amrutam\'s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."',
      rating: 5,
    },
    {
      name: "Dr. Rajesh Iyer",
      credential: "Ayurvedic Practitioner",
      text: '"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."',
      rating: 5,
    },
    {
      name: "Dr. Ananya Sharma",
      credential: "BAMS",
      text: '"As an Ayurvedic doctor, I appreciate Amrutam\'s commitment to efficacy. Their herbal blends are scientifically formulated, ensuring maximum benefits for patients seeking natural wellness."',
      rating: 5,
    },
  ]

  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4  ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-3">What other Ayurvedic Doctors are Saying</h2>
        <p className="text-gray-600 text-center mb-12">
          Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-amber-100 transition-transform duration-300 hover:scale-110 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-7   rounded-full flex items-center justify-center ">
                  <img className="rounded-full" src={"/testimonials.jpg"}></img>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.credential}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

         
      </div>
    </section>
  )
}
