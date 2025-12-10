"use client"

export default function AppDownload() {
  const features = [
    {
      icon: <img src="/message.png" alt="" />,
      title: "Access To Prescriptions",
      description: "",
    },
    {
      icon: <img src="/message.png" alt="" />,
      title: "Track Health Efficiently",
      description: "",
    },
    {
      icon: <img src="/message.png" alt="" />,
      title: "Direct Chat With Doctors",
      description: "",
    },
    {
      icon: <img src="/message.png" alt="" />,
      title: "In-App Reminders For Consultations",
      description: "",
    },
  ]

  return (
    <section className="relative bg-[#fff7e2] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Download Amrutam Ayurveda App Now</h2>

            <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-md">
              The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website,
              the app has added benefits
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-transparent rounded-lg border border-gray-200">
                  <div className="text-2xl mt-1">{feature.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{feature.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-4 flex-wrap">
               

             <img src="/download.png" alt="" />
            </div>
          </div>
 
          {/* Right Section - Phone Mockup + Stats + Arrows */}
{/* RIGHT SECTION */}
<div className="relative h-full flex flex-col items-center justify-center">

  {/* PHONE */}
  <div className="relative z-10 left-44 bottom-44 w-full max-w-xs">
    <img src="/device.png" alt="phone" className="w-full" />
  </div>

  {/* TOP FLOATING CARD */}
  <div className="absolute top-10 right-96 z-20">
    <img src="/track.png" alt="stats" className="w-[200px]" />
  </div>

  {/* ARROW: STATS → PHONE */}
  <div className="absolute  top-0 right-72 z-10">
    <img 
      src="/arrow.png" 
      alt="arrow" 
      className="w-24 rotate-25" 
    />
  </div>

  {/* BOTTOM FLOATING CARD */}
  <div className="absolute bottom-2  right-56 z-20">
    <img src="/10k.png" alt="downloads" className="w-[210px]" />
  </div>

  {/* ARROW: DOWNLOADS → PHONE */}
  <div className="absolute bottom-36 left-96 z-10">
    <img 
      src="/arrow2.png" 
      alt="arrow" 
      className="w-16 rotate-25"
    />
  </div>
</div>


        </div>
      </div>

      {/* Decorative Background Circle */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100 rounded-full opacity-50 blur-3xl -z-10"></div>
    </section>
  )
}
