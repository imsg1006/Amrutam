import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function ForumBenefit() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
        {/* Left - Interactive Card */}
        <div className="relative h-96 flex items-center justify-center px-4 lg:order-2">
          <div className="absolute inset-0 flex items-center justify-center">
             <img src={"/Vector.png"}></img>
          </div>

          <div className="absolute top-0 right-96 z-10">
            <img src="/leaf.png" alt="" />
          </div>

          {/* Doctor Profile Card */}
          <div className="  z-10 bg-transparent rounded-lg       ">
            <div className="left-16 bottom-6 absolute   "> 
                <img src={"/Home.png"}></img>
            </div>
          </div>
          <div className="absolute top-11 right-16">
          <img src={"frame.png"}></img>
          </div>
        </div>

        {/* Right - Content */}
        <div className="relative z-10 lg:order-1 lg:pl-8">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Forum for Meaningful Connections</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while
            the 'Thoughts' section allows you to share deeper Ayurvedic wisdom and build community trust.
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
