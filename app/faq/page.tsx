"use client"

import { useState } from "react"
import Footer from "@/components/footer"
import FaqHeader from "../../components/sections/faq-header"
import FaqAccordion from "../../components/sections/faq-accordian"

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
        question: "How long does a consultation typically last?",
        answer:
          "Most consultations last between 15-30 minutes depending on the nature of your health concern. Video and audio consultations can be scheduled for specific durations.",
      },
      {
        question: "Can I reschedule my consultation?",
        answer:
          "Yes, you can reschedule your consultation up to 24 hours before the scheduled time. Use the app to manage your appointments easily.",
      },
      {
        question: "What should I prepare for my consultation?",
        answer:
          "Please have your medical history, current medications, and any relevant reports ready. Find a quiet, well-lit space for video consultations.",
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
    <div className="min-h-screen flex flex-col bg-amber-50">
      <FaqHeader />

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* FAQ Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h1>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search for any question"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
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

        {/* Category Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-300 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pb-2 font-semibold transition ${
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
      </main>

      <Footer />
    </div>
  )
}
