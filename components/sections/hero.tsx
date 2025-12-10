import { Button } from "@/components/ui/button"
import { Users, DollarSign, Phone, Wallet } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full bg-[#ffedbf] py-12 md:py-20 px-4 relative overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6 leading-tight">
              Get Started Today — Download the App Now!
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Simplify consultations, manage patients, and grow your practice—all in one place.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <FeatureCard
                icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-green-700" />}
                text="Build Trust and Community with Forum"
              />
              <FeatureCard
                icon={<DollarSign className="w-5 h-5 md:w-6 md:h-6 text-green-700" />}
                text="Earn More with Pay Per Conversation"
              />
              <FeatureCard
                icon={<Phone className="w-5 h-5 md:w-6 md:h-6 text-green-700" />}
                text="Attract Patients with 5-Minute Free Call"
              />
              <FeatureCard
                icon={<Wallet className="w-5 h-5 md:w-6 md:h-6 text-green-700" />}
                text="Instant Access to Your Earnings with Wallet"
              />
            </div>

            {/* APP STORE BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
               <img src="/download.png" alt="" />
            </div>
          </div>

          {/* RIGHT SIDE — PHONE + FLOATING IMAGES */}
          <div className="hidden lg:flex justify-center relative min-h-[400px] lg:min-h-[600px]">

            {/* FLOATING AVATARS */}
            <div className="absolute -left-8 lg:-left-16 top-8 lg:top-12 z-20">
              <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-lg overflow-hidden  ">
                <Image
                  src="/person4.png"
                  width={112}
                  height={112}
                  alt="doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-lg overflow-hidden  ">
                <Image
                  src="/person3.png"
                  width={64}
                  height={64}
                  alt="doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute right-6 lg:right-10 bottom-6 lg:bottom-10 z-20">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-lg overflow-hidden  ">
                <Image
                  src="/person2.png"
                  width={80}
                  height={80}
                  alt="doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute right-0 lg:right-2 top-1/3 z-20">
              <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-lg overflow-hidden  ">
                <Image
                  src="/person1.png"
                  width={112}
                  height={112}
                  alt="doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* PHONE MOCKUP */}
            <div className="relative w-48 lg:w-64 z-30">
              <div className="bg-transparent rounded-3xl   overflow-hidden ">
                <div className="bg-transparent rounded-2xl overflow-hidden">
                  <Image
                    src="/mobile.png"
                    width={400}
                    height={700}
                    alt="Phone Screen"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* MOBILE PHONE DISPLAY */}
          <div className="lg:hidden flex justify-center relative -mx-4 px-4 py-12 -my-12">
            <div className="relative w-40 sm:w-48">
              <div className="bg-transparent rounded-3xl   overflow-hidden  ">
                <div className="bg-transparent rounded-2xl overflow-hidden">
                  <Image
                    src="/mobile.png"
                    width={400}
                    height={700}
                    alt="Phone Screen"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, text }: { icon: any; text: string }) {
  return (
    <div className="border-2 border-green-700 rounded-lg p-3 md:p-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex gap-2 md:gap-3 items-start">
        <div className="shrink-0 mt-1">
          {icon}
        </div>
        <p className="font-semibold text-gray-900 text-xs md:text-sm lg:text-base leading-snug">
          {text}
        </p>
      </div>
    </div>
  )
}