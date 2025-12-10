import { Button } from "@/components/ui/button"
import logo from "../public/logo.png"
import { FactoryIcon } from "lucide-react"

export default function Header() {
  return (
    <>
    <nav className="w-full border-b border-gray-200">

  {/* ---------- TOP DARK BAR ---------- */}
  <div className="w-full bg-[#373636] text-white">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <p className="text-sm text-[#D9D9D9]  ">
        Register Yourself As An Amrutam Doctor
      </p>

      <button className="bg-[#3A643B] hover:bg-green-800 text-white px-5 py-2 rounded-lg font-medium">
         
        Join Now
      </button>
    </div>
  </div>

  {/* ---------- LOGO CENTERED ---------- */}
  <div className="max-w-7xl bg-[#fff7e2] mx-auto px-4 py-6 flex justify-center">
    <h1 className="text-3xl h-37px w-267px font-medium tracking-[0.4em] text-[#33643F]">
      AMRUTAM
    </h1>
  </div>

  {/* ---------- NAV LINKS CENTERED ---------- */}
  <div className="max-w-7xl mx-auto px-4 pb-4">
    <div className="flex justify-center gap-10 text-lg">
      <a href="#" className="text-[#474747] hover:text-green-700">About Us</a>
      <a href="#" className="text-[#474747] hover:text-green-700">Onboarding</a>
      <a href="#" className="text-[#474747] hover:text-green-700">FAQ</a>
      <a href="#" className="text-[#474747] hover:text-green-700">Testimonials</a>
    </div>
  </div>

</nav>
    </>
  )
}
