"use client"
import { useState } from "react"
import Image from "next/image"

interface PhoneMockup {
  id: string
  title: string
  tab: string
  image: string
}

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState("consultations")

  const phoneMockups: PhoneMockup[] = [
    {
      id: "consultation-fee",
      title: "Consultation Fee",
      tab: "consultations",
      image: "/p1.png",
    },
    {
      id: "appointments",
      title: "Appointments",
      tab: "consultations",
      image: "/p2.png",
    },
    {
      id: "appointment-details",
      title: "Appointment Details",
      tab: "consultations",
      image: "/p3.png",
    },
  ]

  const currentMockups = phoneMockups.filter((m) => m.tab === activeTab)

  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Tabs */}
    <div className="flex flex-col lg:flex-row gap-4 mb-16 justify-center">
      {[
        { id: "consultations", label: "Consultations" },
        { id: "payment", label: "Payment withdrawal" },
        { id: "schedule", label: "Schedule" },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === tab.id
              ? "bg-green-700 text-white"
              : "border-2 border-green-700 text-green-700 hover:bg-green-50"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* 3-Phone Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

      {/* LEFT IMAGE (text above) */}
      <div className="flex flex-col items-center">
        <p className="text-center mb-4 font-semibold text-green-900 text-lg">
          Value Your Practice
        </p>
        <Image
          src="/p1.png"
          alt="Consultation Fee"
          width={224}
          height={480}
          className="w-56 h-auto"
        />
      </div>

      {/* MIDDLE IMAGE (text below + slight upward shift) */}
      <div className="flex flex-col items-center -mt-10">
        <Image
          src="/p2.png"
          alt="Appointments"
          width={224}
          height={480}
          className="w-56 h-auto"
        />
        <p className="text-center mt-4 font-semibold text-green-900 text-lg">
          Today's Healing Journey
        </p>
      </div>

      {/* RIGHT IMAGE (text above) */}
      <div className="flex flex-col items-center">
        <p className="text-center mb-4 font-semibold text-green-900 text-lg">
          Consultation Details
        </p>
        <Image
          src="/p3.png"
          alt="Appointment Details"
          width={224}
          height={480}
          className="w-56 h-auto"
        />
      </div>
    </div>

    {/* Button Section */}
    <div className="text-center mt-8">
      <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-10 rounded-lg transition">
        Join Now
      </button>
    </div>
  </div>
</section>

  )
}
