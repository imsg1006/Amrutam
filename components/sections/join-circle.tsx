"use client"

import { Button } from "@/components/ui/button"

export default function JoinCircle() {
  return (
    <section className="w-full bg-[#fff7e2] py-20 px-4  relative overflow-hidden">
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
                  fill="#ffeec3"
                  opacity="0.6"
                  filter="url()"
                />
              </svg>
            </div>
            {/* left side */}
            <div className="relative">
  <img className="relative" src={"/Vector3.png"} alt="" />
  <img className="absolute top-0 left-0 z-10" src="/group1.png" alt="" />
</div>
 

               
               
            </div>
          </div>
        </div>
      
    </section>
  )
}
