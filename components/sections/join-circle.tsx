"use client"

import { Button } from "@/components/ui/button"

export default function JoinCircle() {
  return (
    <section className="w-full bg-[#fff7e2] py-20 px-4 border-t-4 border-red-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-3">Join Our Circle of Care</h2>
        <p className="text-gray-600 text-center mb-16">Becoming a part of Amrutam is simple</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="border-2 border-[#98ad90] rounded-lg p-6 bg-transparent hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right - Layered Design with Background, Landing Page, and Modal */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute   -inset-12">
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                <defs>
                  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                  </filter>
                </defs>
                <path
                  d="M 100 50 Q 150 0 200 20 Q 250 40 280 100 Q 300 150 260 200 Q 220 240 150 260 Q 80 270 50 220 Q 20 170 50 100 Q 70 60 100 50"
                  fill="#FEF08A"
                  opacity="0.6"
                  filter="url(#blur)"
                />
              </svg>
            </div>

            {/* Landing Page Background Mockup - positioned behind modal */}
            <div className="absolute inset-0 z-0 bg-transparent rounded-3xl shadow-xl   overflow-hidden">
              {/* Browser Header */}
              <div className="bg-black opacity-35 px-6 py-3    ">
                 <img src={"/landing.png"}></img>
              </div>
              {/* Page Content Area */}
              <div className="bg-amber-50 h-full p-6 text-center flex flex-col items-center justify-center">
                <h2 className="text-green-900 font-bold text-lg mb-2">Amrutam Landing Page</h2>
                <p className="text-gray-600 text-sm mb-4">Background Preview</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                  <div className="bg-white p-2 rounded">About Us</div>
                  <div className="bg-white p-2 rounded">Onboarding</div>
                  <div className="bg-white p-2 rounded">FAQ</div>
                  <div className="bg-white p-2 rounded">Testimonials</div>
                </div>
              </div>
            </div>

            {/* Modal Card - Positioned on top of everything */}
            <div className="relative z-20 bg-white border-4 border-gray-400 rounded-3xl shadow-2xl p-8 w-full max-w-md">
               
               

              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4 mt-2">
                <h3 className="text-lg font-bold text-green-900">Become An Amrutam Doctor</h3>
                <button className="text-gray-400 text-2xl font-light hover:text-gray-600">×</button>
              </div>

              {/* Modal Content - Two Column Layout */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Left - Image Placeholder */}
                <div className="col-span-1">
                  <div className="bg-gray-300 rounded-lg h-32 flex items-center justify-center overflow-hidden border-2 border-gray-400">
                    <img
                      src="/join.png"
                      alt="Doctor consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right - Form Fields */}
                <div className="col-span-1 space-y-3">
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="Vikas Kumar"
                      className="w-full border-b border-gray-300 pb-1 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Your Contact Number</label>
                    <input
                      type="tel"
                      placeholder="8743414476"
                      className="w-full border-b border-gray-300 pb-1 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="vikas@gmail.com"
                      className="w-full border-b border-gray-300 pb-1 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field - Full Width */}
              <div className="mb-4">
                <label className="text-xs text-gray-600 block mb-1">Message (Optional)</label>
                <textarea
                  placeholder="I want to On-board as a Doctor"
                  className="w-full border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none resize-none"
                  rows={2}
                ></textarea>
              </div>

              {/* Send Message Button */}
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white mb-4 rounded-lg py-2">
                Send Message
              </Button>

              {/* Publication Logos at Bottom */}
               
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
