import { Button } from "@/components/ui/button"

export default function LandingHero() {
  return (
    <section className="w-full bg-linear-to-b from-[#f8eed4] to-[#fbebc2]   py-20 px-4">
      <div className="max-w-7xl  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <p className="text-[#666666] text-lg mb-4">Namaste, Welcome to Amrutam</p>

            <h1 className="text-5xl text-[#0c0c0c] lg:text-6xl font-bold mb-6 leading-tight">
              Join Amrutam – <span className="text-[#3a643c]">Grow Your Practice</span>
            </h1>

            <p className="text-[#666666] text-lg mb-8 leading-relaxed max-w-lg">
              Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <Button className="bg-[#3A643C] hover:bg-green-900 text-white px-8 py-6 text-lg rounded-lg font-semibold">
                Join Now
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600 text-sm mt-1">
                  Average Active
                  <br />
                  Users
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">40+</p>
                <p className="text-gray-600 text-sm mt-1">
                  Average daily
                  <br />
                  free calls
                </p>
              </div>
            </div>
          </div>

          {/* Right - Doctor Images Placeholder */}
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Main placeholder for doctor group image */}
              <div className="absolute inset-0 bg-gray-200 rounded-full opacity-10 blur-3xl"></div>

              {/* Doctors group image placeholder */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-full w-96 h-96 flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-center px-8">
                    <div className="text-sm">Doctors Group Image</div>
                    <div className="text-xs mt-2">Replace with your doctors image</div>
                  </span>
                </div>
              </div>

              {/* Decorative icons */}
              <div className="absolute top-12 right-8 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="absolute bottom-20 left-8 w-14 h-14 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">📋</span>
              </div>
              <div className="absolute bottom-12 right-4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-lg">🗂️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
