import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function FlexibleTimingBenefit() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Interactive Card */}
        <div className="relative h-96 flex items-center justify-center px-4">
          <div className="absolute inset-0 flex items-center justify-center"> 
             <img src={"/Vector.png"}></img>
          </div>

          <div className="absolute top-0 right-32 z-10">
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-green-700" />
            </div>
          </div>

          {/* Doctor Profile Card */}
          <div className="relative z-10   rounded-lg   p-4 w-64 ">
            <div className="flex items-start gap-3 mb-4">
               
                 <img className="absolute bottom-14 right-20" src={"/img3.png"}></img>
                 <img className="absolute top-14 left-20" src={"/img4.png"}></img>
               
               
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="relative z-10 lg:pl-8">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Flexible Work Timing</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We recognize the importance of managing your time. With the availability toggle in the doctor's app, you
            control when patients can book consultations, ensuring a balanced and stress-free practice.
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
