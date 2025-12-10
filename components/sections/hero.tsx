import { Button } from "@/components/ui/button"
import { Users, DollarSign, Phone, Wallet } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full bg-[#ffedbf] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-green-900 mb-6">Get Started Today – Download the App Now!</h1>
            <p className="text-lg text-gray-700 mb-8">
              Simplify consultations, manage patients, and grow your practice—all in one place.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border-2 border-green-700 rounded-lg p-4 bg-white">
                <div className="flex gap-3 items-center">
                  <Users className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Build Trust and Community with Forum</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-green-700 rounded-lg p-4 bg-white">
                <div className="flex gap-3 items-center">
                  <DollarSign className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Earn More with Pay Per Conversation</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-green-700 rounded-lg p-4 bg-white">
                <div className="flex gap-3 items-center">
                  <Phone className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Attract Patients with 5-Minute Free Call</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-green-700 rounded-lg p-4 bg-white">
                <div className="flex gap-3 items-center">
                  <Wallet className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Instant Access to Your Earnings with Wallet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 py-6 text-base">GET IT ON Google Play</Button>
              <Button className="bg-black text-white hover:bg-gray-800 py-6 text-base">
                Download on the App Store
              </Button>
            </div>
          </div>

          {/* Right - Phone Mockup Placeholder */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl border-8 border-black shadow-2xl w-72 h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <span className="text-sm">Phone Mockup - Replace with Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
