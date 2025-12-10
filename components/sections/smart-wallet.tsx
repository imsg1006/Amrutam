export default function SmartWallet() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-green-900 mb-4">Smart Wallet</h2>
            <p className="text-gray-600 mb-6">
              We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments,
              and for your security, a one-time password is sent to your registered mobile number during withdrawals.
            </p>

            <div className="bg-amber-100 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-semibold">Amrutam Account</span>
                <span className="text-green-700 font-bold text-2xl">₹ 12,000.00</span>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded">
                Request Withdrawal
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-3">Recent Withdrawals</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">28th July 2024</span>
                <span className="text-green-700 font-semibold">₹ 44,000.00</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Money Withdrawal</p>
            </div>
          </div>

          {/* Right - App Mockup Placeholder */}
          <div className="flex justify-center">
            <div className="w-full bg-gray-50 border border-gray-300 rounded-lg p-6 h-96 flex items-center justify-center">
              <span className="text-gray-500">Wallet App Interface - Replace with Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
