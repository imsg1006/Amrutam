"use client"

import { useState } from "react"

interface FaqAccordionProps {
  question: string
  answer: string
}

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="  rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex justify-between items-center cursor-pointer border-b    border-b-[#c6c1b9] transition bg-transparent"
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
        <div className="bg-[#fff7e2] px-5 py-4  ">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
