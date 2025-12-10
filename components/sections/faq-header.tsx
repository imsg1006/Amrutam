"use client"

import { useState } from "react"
import Link from "next/link" 

export default function FaqHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
       

      {/* Main Header */}
      <header className="w-full mt-4 bg-transparent border-b border-gray-200">
  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-4 px-4">

    {/* LEFT: Phone Number */}
    <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start mb-3 sm:mb-0">
      <img className="p-2 w-8 h-8" src="/call.png" alt="" />
      <span className="text-green-700 font-semibold text-sm sm:text-base">
        +91 9826352321
      </span>
    </div>

    {/* CENTER: Logo */}
    <div className="w-full sm:w-auto flex justify-center order-first sm:order-0 mb-3 sm:mb-0">
      <Link href="/">
        <img src="/logo.png" alt="Amrutam Logo" className="h-10 w-auto" />
      </Link>
    </div>

    {/* RIGHT: Spacer (Hidden on Mobile) */}
    <div className="hidden sm:block w-24"></div>

  </div> 


          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 pb-4 border-b border-gray-100">
            <Link href="/" className="text-gray-700 hover:text-green-700 transition font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition font-medium">
              Find Doctors
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition font-medium">
              Lab Tests
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition font-medium">
              Shop
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition font-medium">
              Forum
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-700 transition font-medium">
              About Us
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-4 ml-4">
              <button className="relative p-2 text-gray-700 hover:text-green-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-4 h-4 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="relative p-2 text-gray-700 hover:text-green-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"
                  />
                </svg>
              </button>
              <button className="relative p-2 text-gray-700 hover:text-green-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-4 h-4 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="p-2 text-gray-700 hover:text-green-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-700 absolute right-4 top-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        
      </header>
    </>
  )
}
