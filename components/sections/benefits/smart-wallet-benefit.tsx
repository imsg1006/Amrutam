import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

export default function SmartWalletBenefit() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
        {/* Left - Interactive Card */}
        <div className="relative h-96 flex items-center justify-center px-4 lg:order-2">
          <div className="absolute inset-0 flex items-center justify-center"> 
             <img src={"/Vector.png"}></img>
          </div>

          <div className="absolute top-0 right-96 z-10">
            <img src="/box.png" alt="" />
          </div>

          {/* Recent Withdrawals Card */}
          <div className="relative z-10 w-full flex justify-end">
            <div className="bg-white rounded-xl absolute bottom-10  ">
               <img className=" " src={"/img1.png"}></img>
            <div className="mt-4 right-10   absolute">
               <img src={"/img2.png"}></img>
               </div>
          </div>
        </div>
        </div>

        {/* Right - Content */}
        <div className="relative z-10 lg:order-1 lg:pl-8">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Smart Wallet</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and
            for your security, a one-time password is sent to your registered mobile number during withdrawals.
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
