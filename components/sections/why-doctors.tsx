import FreeCallBenefit from "./benefits/free-call-benefit"
import ForumBenefit from "./benefits/forum-benefit"
import SessionModeBenefit from "./benefits/sesion-mode-benefit"
import SmartWalletBenefit from "./benefits/smart-wallet-benefit"
import FlexibleTimingBenefit from "./benefits/flexible-timing-benefit"

export default function WhyDoctors() {
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
          <FreeCallBenefit />
          <ForumBenefit />
          <SessionModeBenefit />
          <SmartWalletBenefit />
          <FlexibleTimingBenefit />
        </div>
      </div>
    </section>
  )
}
