"use client"

import { useState } from "react"

interface FaqAccordionProps {
  question: string
  answer: string
}

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition bg-white"
      >
        <span className="text-lg font-semibold text-gray-900 text-left">{question}</span>
        <span
          className={`text-2xl text-gray-600 transition-transform duration-300  shrink-0 ml-4 ${
            isExpanded ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isExpanded && (
        <div className="bg-gray-50 px-5 py-4 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
