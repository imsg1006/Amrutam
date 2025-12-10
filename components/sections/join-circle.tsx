import { Button } from "@/components/ui/button"

export default function JoinCircle() {
  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4 border-t-4 border-red-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-3">Join Our Circle of Care</h2>
        <p className="text-gray-600 text-center mb-12">Becoming a part of Amrutam is simple</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Steps */}
          <div className="space-y-4">
            {[
              { step: 1, title: "Get your referral code", desc: "Contact us to receive your unique referral code." },
              {
                step: 2,
                title: "Register on Amrutam",
                desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
              },
              {
                step: 3,
                title: "Complete KYC",
                desc: "Fill in your details and upload the required documents for verification.",
              },
              {
                step: 4,
                title: "Start consulting",
                desc: "Once verified, begin offering consultations and helping patients.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border-2 border-gray-300 rounded-lg p-6 bg-white hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right - Modal Mockup */}
          <div className="flex justify-center">
            <div className="bg-white border-4 border-gray-300 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Become An Amrutam Doctor</h3>
                <button className="text-gray-400 text-2xl">×</button>
              </div>

              <div className="bg-gray-100 rounded h-32 mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Modal Image - Replace with Image</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Name</span>
                  <span className="font-semibold">Vikas Kumar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Contact</span>
                  <span className="font-semibold">8743414476</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Email</span>
                  <span className="font-semibold">vikas@gmail.com</span>
                </div>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800 text-white mt-6">Send Message</Button>

              <div className="flex gap-2 justify-center mt-4 text-xs">
                {["TIMES", "STORY", "Traveler"].map((logo, i) => (
                  <div key={i} className="bg-gray-200 px-2 py-1 rounded text-gray-600">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
