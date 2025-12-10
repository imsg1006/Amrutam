import { Button } from "@/components/ui/button"
import { PhoneIcon } from "lucide-react"

export default function FreeCallBenefit() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Interactive Card */}
        <div className="relative h-96 flex items-center justify-center px-4">
          <div className="absolute inset-0 flex items-center justify-center"> 
             <img src={"/Vector.png"}></img>
          </div>

          <div className="absolute top-0 right-96 z-10">
            <img src="/call2.png" alt="" />
          </div>

          {/* Connecting State */}
          <div className="absolute bottom-10 left-8 z-20 bg-white rounded-lg shadow-md p-3 border border-gray-200">
            <div className="text-center">
              <div className="text-xs font-medium text-gray-700 mb-2">Connecting...</div>
              <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-gray-500 text-xs"><img src={"/prema.jpg"}></img></span>
              </div>
              <p className="text-xs text-gray-500 mt-2 max-w-xs">
                You'll connect with a suitable doctor from our networks
              </p>
            </div>
          </div>

          {/* Doctor Profile Card */}
          <div className="relative z-10 bottom-16  left-24 bg-white rounded-lg shadow-lg p-4 w-64 border border-yellow-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-20 h-20 bg-gray-300 rounded-lg shrink-0 flex items-center justify-center">
                 <img src={"/prema.jpg"}></img>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">Dr. Prema Narang</h4>
                <p className="text-xs text-gray-600">Gynecology • 2 others</p>
                <p className="text-xs text-green-700 mt-1">📅 7 years of Experience</p>
              </div>
              <div className="text-gray-400">→</div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="relative z-10 lg:pl-8">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Instant FREE 5-Mins Call</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We understand the importance of building trust with your patients. That's why Amrutam offers a free 5-minute
            call, helping you connect instantly and foster lasting patient relationships with ease.
          </p>
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium">
            Get Started
          </Button>
        </div>
      </div>

      <div className="absolute -bottom-8 right-0 w-32 h-32 bg-yellow-100 rounded-full opacity-20 pointer-events-none"></div>
    </div>
  )
}
