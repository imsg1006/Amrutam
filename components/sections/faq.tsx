"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Amrutam?",
      answer:
        "Amrutam is a comprehensive healthcare platform that helps Ayurvedic practitioners connect with patients, manage consultations, and grow their practice effortlessly. It provides tools for appointment scheduling, patient management, and secure transactions.",
    },
    {
      question: "How does Amrutam help me grow as a practitioner?",
      answer:
        "Amrutam connects you with a wider patient base, provides flexible consultation options (call, chat, video), offers secure payment processing, and gives you access to a supportive community of practitioners. You can set your own schedule and rates.",
    },
    {
      question: "How do I become a part of Amrutam Doctor?",
      answer:
        "Simply contact us to receive your unique referral code, register on the Amrutam Doctors app or website, complete KYC verification by providing required documents, and once verified, you can start offering consultations and helping patients.",
    },
    {
      question: "What is Amrutam Global as a platform?",
      answer:
        "Amrutam Global is our comprehensive platform that connects Ayurvedic doctors with patients worldwide. It facilitates instant consultations, manages patient records, processes payments securely, and builds a community of trusted practitioners.",
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "You'll need to provide government-issued ID, medical license/credentials, proof of address, bank account details for payments, and any additional professional certifications. All documents are verified securely for your protection.",
    },
    {
      question: "Is there a fee to join Amrutam?",
      answer:
        "There is no fee to join Amrutam as a practitioner. We operate on a commission-based model where Amrutam takes a small percentage of consultation fees. This way, you only pay when you earn.",
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#fff7e2] py-16 px-4">
      <div className="mb-8">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-8">
            Find quick answers to common questions to help you navigate the app and its features easily.
          </p>
          </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-3 mb-8">
          {faqs.map((faq, i) => (
            <div key={i} className="  rounded-lg overflow-hidden">
              <div
                onClick={() => toggleExpanded(i)}
                className="p-5 flex justify-between items-center border-b-[#c6c1b9] border-b-2 cursor-pointer hover:shadow-md transition bg-transparent"
              > 
                <span className="font-semibold text-[#6f6f6f]">{faq.question}</span>
                <span
                  className={`text-2xl text-[#666666] transition-transform duration-300 ${
                    expandedIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              {expandedIndex === i && (
                <div className="bg-gray-50 px-5 py-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
           <Link href="/faq">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition">
              See More
            </button>
          </Link></div>
      </div>
    </section>
  )
}
