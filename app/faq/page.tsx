"use client"

import { useState } from "react" 
import FaqHeader from "../../components/sections/faq-header"
import FaqAccordion from "../../components/sections/faq-accordian"
import AppDownload from "@/components/sections/benefits/app-download"
import FaqFooter from "@/components/sections/faq-footer"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("consultation")
  const [searchQuery, setSearchQuery] = useState("")

  const faqData = {
    consultation: [
      {
        question: "What types of consultations are available?",
        answer:
          "We provide three types of consultations - video, instant call and chat consultation. Each option offers flexibility and personalized care to suit individual needs.",
      },
      {
        question: "Can I get refund for the wallet money?",
        answer:
          "Yes, you can request a refund for unused wallet balance. Refunds are processed within 5-7 business days to your original payment method.",
      },
      {
        question: "What is the Amrutam Forum?",
        answer:
          "The Amrutam Forum is a community platform where you can ask health questions, share experiences with other users, and get answers from our network of Ayurvedic practitioners.",
      },
      {
        question: "Can I pause the audio consultation?",
        answer:
          "Yes, you can pause audio consultations at any time. The remaining time will be preserved for you to continue later within the same day.",
      },
      {
        question: "Is there a minimum duration for an audio consultation?",
        answer:
          "No, there is no minimum duration. You can consult for as long as you need, and charges apply on a per-minute basis.",
      },
      {
        question: "Can I get refund for the wallet money?",
        answer:
          "Yes, you can request a refund for unused wallet balance. Refunds are processed within 5-7 business days to your original payment method.",
      },
      {
        question: "What is the Amrutam Forum?",
        answer:
          "The Amrutam Forum is a community platform where you can ask health questions, share experiences with other users, and get answers from our network of Ayurvedic practitioners.",
      },
      {
        question: "Can I pause the audio consultation?",
        answer:
          "Yes, you can pause audio consultations at any time. The remaining time will be preserved for you to continue later within the same day.",
      },
    ],
    wallet: [
      {
        question: "Can I get refund for the wallet money?",
        answer:
          "Yes, you can request a refund for unused wallet balance. Refunds are processed within 5-7 business days to your original payment method.",
      },
      {
        question: "Is there any limit on wallet balance?",
        answer:
          "You can maintain up to ₹50,000 in your wallet. This balance can be used for future consultations or transferred to your bank account.",
      },
      {
        question: "How do I add money to my wallet?",
        answer:
          "You can add money through various payment methods including credit cards, debit cards, UPI, and net banking directly from the app.",
      },
      {
        question: "Are there any charges for wallet transactions?",
        answer:
          "No additional charges apply for adding money to your wallet. However, bank charges may apply for specific payment methods.",
      },
    ],
    forum: [
      {
        question: "What is the Amrutam Forum?",
        answer:
          "The Amrutam Forum is a community platform where you can ask health questions, share experiences with other users, and get answers from our network of Ayurvedic practitioners.",
      },
      {
        question: "Can I post anonymously in the forum?",
        answer:
          "Yes, you have the option to post anonymously if you prefer. This allows you to discuss sensitive health topics privately.",
      },
      {
        question: "How quickly will I get answers in the forum?",
        answer:
          "Most questions get responses within 24-48 hours from our community of practitioners and health experts.",
      },
      {
        question: "Are forum discussions confidential?",
        answer:
          "Forum discussions are visible to community members but your personal information is kept private. You can delete your posts anytime.",
      },
    ],
    shop: [
      {
        question: "What products are available in the shop?",
        answer:
          "We offer authentic Ayurvedic products, herbal supplements, wellness items, and health management tools recommended by our practitioners.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery takes 5-7 business days. We also offer express delivery options for urgent orders in selected areas.",
      },
      {
        question: "Do you offer returns or exchanges?",
        answer:
          "Yes, we offer 30-day returns for unopened products and exchanges for damaged items. Contact our support team for assistance.",
      },
      {
        question: "Are all products authentic?",
        answer:
          "All our products are sourced directly from certified Ayurvedic manufacturers and come with authenticity guarantees.",
      },
    ],
  }

  const categories = [
    { id: "consultation", label: "Consultation" },
    { id: "wallet", label: "Wallet" },
    { id: "forum", label: "Forum" },
    { id: "shop", label: "Shop" },
  ]

  const filteredFaqs = (faqData[activeCategory as keyof typeof faqData] || []).filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen flex flex-col">
      <FaqHeader />

      <div
        className="relative w-full py-12 md:py-16"
        style={{
          backgroundImage: "url('/faqbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* FAQ Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">FAQ</h1>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search for any queries you have"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 bg-white"
                />
                <svg
                  className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-[#fff7e2]">
        <div className="max-w-4xl mx-auto w-full px-4 py-12">
          <div className="flex justify-center gap-6   md:gap-8 mb-12 border-b border-gray-300 pb-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`pb-2 font-semibold text-base whitespace-nowrap transition ${
                  activeCategory === category.id
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => <FaqAccordion key={index} question={faq.question} answer={faq.answer} />)
            ) : (
              <p className="text-center text-gray-600 py-8">No FAQs found for your search query</p>
            )}
          </div>
        </div>
        <div className="flex justify-center mb-12">
          <button className="px-8 py-2 border cursor-pointer border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors">
            Load More
            <span className="ml-2">›</span>
          </button>
        </div>
      </main>
      <AppDownload />
      <FaqFooter/>
    </div>
  )
}
