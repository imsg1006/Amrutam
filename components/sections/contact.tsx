import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function Contact() {
  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4   ">
      <div className="max-w-7xl mx-auto">
        <div className="    rounded-lg p-8 mb-8  ">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-2">Let's Connect</h2>
          <p className="text-gray-700 text-center">
            We're here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or
            personalized advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full bg-gray-100 rounded-lg p-6 h-80 flex items-center justify-center overflow-hidden">
              <span className="text-gray-500"></span>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-transparent rounded-lg p-8 border-2 border-gray-400">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Vikas Kumar"
                    className="w-full border-b-2 border-gray-300 py-2 px-0 focus:border-green-700 outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Your Contact Number</label>
                  <input
                    type="text"
                    placeholder="8743414476"
                    className="w-full border-b-2 border-gray-300 py-2 px-0 focus:border-green-700 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="vikas@gmail.com"
                  className="w-full border-b-2 border-gray-300 py-2 px-0 focus:border-green-700 outline-none bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  placeholder="I want to On-board as a Doctor"
                  rows={4}
                  className="w-full border-b-2 border-gray-300 py-2 px-0 focus:border-green-700 outline-none bg-transparent resize-none"
                />
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
