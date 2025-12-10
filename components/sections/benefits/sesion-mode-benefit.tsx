import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function SessionModeBenefit() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Interactive Card */}
        <div className="relative h-96 flex items-center justify-center px-4">
          <div className="absolute inset-0 flex items-center justify-center"> 
             <img src={"/Vector.png"}></img>
          </div>

         <div className="absolute top-0 right-8 z-10">
  <div className="relative w-fit">
    {/* BACKGROUND ELLIPSE */}
    <img
      src="/elipse.png"
      alt="ellipse"
      className="block"
    />

    {/* APPLE ICON — CENTERED OVER ELLIPSE */}
    <img
      src="/apple.png"
      alt="apple"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </div>
</div>


          {/* Session Mode Selection Card */}
          <div className="relative z-10 space-y-6 w-full">
            {/* Session Mode Selection Box */}
            <div className="bg-white rounded-lg shadow-lg     p-6 border border-yellow-200 max-w-sm">
              <p className="text-sm font-semibold text-gray-800 mb-4">Select your mode of session</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg border-2 border-green-600 bg-green-50 text-center cursor-pointer">
                  <p className="text-xs font-semibold text-gray-900">Free Call</p>
                  <p className="text-xs text-gray-600 mt-1">₹15 / Min</p>
                  <p className="text-xs text-green-600 mt-2">✓</p>
                </div>
                <div className="p-3 rounded-lg border-2 border-green-600 bg-green-50 text-center cursor-pointer">
                  <p className="text-xs font-semibold text-gray-900">Video</p>
                  <p className="text-xs text-gray-600 mt-1">₹15/Min</p>
                  <p className="text-xs text-green-600 mt-2">✓</p>
                </div>
                <div className="p-3 rounded-lg border-2 border-gray-200 bg-white text-center cursor-pointer hover:border-gray-300">
                  <p className="text-xs font-semibold text-gray-900">Chat</p>
                  <p className="text-xs text-gray-600 mt-1">₹15 / Text</p>
                </div>
              </div>
            </div>

            {/* Patient Details Card */}
            <div className="bg-white absolute rounded-lg shadow-md p-5 left-52 top-44 border border-gray-200 max-w-sm text-sm">
              <p className="text-gray-700 font-medium mb-3">Hi, Dr. Prema, here are my details:</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Name:</span>
                  <span className="font-medium">Geethanjali Shah</span>
                </div>
                <div className="flex justify-between">
                  <span>Age:</span>
                  <span className="font-medium">34</span>
                </div>
                <div className="flex justify-between">
                  <span>Gender:</span>
                  <span className="font-medium">Female</span>
                </div>
                <div className="flex justify-between">
                  <span>Height:</span>
                  <span className="font-medium">134 cm</span>
                </div>
                <div className="flex justify-between">
                  <span>Weight:</span>
                  <span className="font-medium">64 kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Concern:</span>
                  <span className="font-medium">Immunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="relative z-10 lg:pl-8">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Choose Your Session Mode</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each
            option offers flexibility and personalized care to suit individual needs.
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
