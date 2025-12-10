"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon, MessageCircle, Wallet, Clock } from "lucide-react"

export default function WhyDoctors() {
  const benefits = [
    {
      title: "Instant FREE 5-Mins Call",
      description:
        "We understand the importance of building trust with your patients. That's why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
      icon: "phone",
      color: "bg-green-200",
      iconColor: "text-green-700",
      doctorName: "Dr. Prema Narang",
      specialty: "Gynecology • 2 others",
      experience: "7 years of Experience",
      hasConnection: true,
    },
    {
      title: "Forum for Meaningful Connections",
      description:
        "We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the 'Thoughts' section allows you to share deeper Ayurvedic wisdom and build community trust.",
      icon: "message",
      color: "bg-green-200",
      iconColor: "text-green-700",
      doctorName: "Dr. Aman Singh",
      specialty: "Ayurveda • Internal Medicine",
      experience: "5 years of Experience",
      hasConnection: false,
    },
    {
      title: "Smart Wallet",
      description:
        "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
      icon: "wallet",
      color: "bg-green-200",
      iconColor: "text-green-700",
      walletAmount: "₹12,000.00",
      recentWithdrawal: "₹44,000.00",
      recentWithdrawalDate: "28th July 2024",
      hasWallet: true,
    },
    {
      title: "Flexible Work Timing",
      description:
        "We recognize the importance of managing your time. With the availability toggle in the doctor's app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
      icon: "clock",
      color: "bg-green-200",
      iconColor: "text-green-700",
      doctorName: "Dr. Priya Sharma",
      specialty: "Cardiology • Wellness",
      experience: "8 years of Experience",
      hasConnection: false,
    },
  ]

  return (
    <section className="w-full bg-[#fff7e2] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-green-900 mb-3">Why Doctors Choose Us?</h2>
          <p className="text-gray-600 text-lg">Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-24">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="relative">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Left - Interactive Card with Connection/Wallet State */}
                <div
                  className={`relative h-80 flex items-center justify-center px-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  {/* Large cream circle background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-yellow-100 rounded-full opacity-40 absolute"></div>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-0 right-8 z-10">
                    <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center`}>
                      {benefit.icon === "phone" && <PhoneIcon className={`w-8 h-8 ${benefit.iconColor}`} />}
                      {benefit.icon === "message" && <MessageCircle className={`w-8 h-8 ${benefit.iconColor}`} />}
                      {benefit.icon === "wallet" && <Wallet className={`w-8 h-8 ${benefit.iconColor}`} />}
                      {benefit.icon === "clock" && <Clock className={`w-8 h-8 ${benefit.iconColor}`} />}
                    </div>
                  </div>

                  {/* Doctor Profile Card */}
                  {!benefit.hasWallet && (
                    <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 w-64 border border-yellow-200">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <span className="text-gray-500 text-xs text-center">Doctor Image</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{benefit.doctorName}</h4>
                          <p className="text-xs text-gray-600">{benefit.specialty}</p>
                          <p className="text-xs text-green-700 mt-1">📅 {benefit.experience}</p>
                        </div>
                        <div className="text-gray-400">→</div>
                      </div>
                    </div>
                  )}

                  {benefit.hasWallet && (
                    <div className="relative z-10 w-full flex justify-end">
                      {/* Recent Withdrawals Card - Primary */}
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200 w-80">
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-gray-900 mb-3">Recent Withdrawals</p>
                          <p className="text-sm text-gray-600 mb-1">{benefit.recentWithdrawalDate}</p>
                          <p className="text-xs text-gray-500">Money Withdrawal</p>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-yellow-100">
                          <span className="text-xs text-gray-600">Amrutam Account</span>
                          <span className="text-lg font-bold text-green-700">{benefit.recentWithdrawal}</span>
                        </div>

                        <div className="mt-6 pt-4 border-t border-yellow-100">
                          <p className="text-xs text-gray-600 mb-3">Balance Available</p>
                          <p className="text-2xl font-bold text-gray-900 mb-4">{benefit.walletAmount}</p>
                          <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 text-sm rounded-lg font-medium">
                            Request Withdrawal
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Connecting State */}
                  {benefit.hasConnection && (
                    <div className="absolute bottom-16 left-8 z-20 bg-white rounded-lg shadow-md p-3 border border-gray-200">
                      <div className="text-center">
                        <div className="text-xs font-medium text-gray-700 mb-2">Connecting...</div>
                        <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center mx-auto">
                          <span className="text-gray-500 text-xs">Avatar</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 max-w-xs">
                          You'll connect with a suitable doctor from our networks
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right - Content */}
                <div className={`relative z-10 ${idx % 2 === 1 ? "lg:order-1" : ""} lg:pl-8`}>
                  <h3 className="text-3xl font-bold text-green-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">{benefit.description}</p>
                  <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Decorative bottom circle */}
              {idx < benefits.length - 1 && (
                <div className="absolute -bottom-8 right-0 w-32 h-32 bg-yellow-100 rounded-full opacity-20 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
