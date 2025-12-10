"use client"

import type React from "react"

import { useState } from "react"
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Paintbrush as Pinterest } from "lucide-react"

export default function FaqFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="w-full bg-[#dbe3dc] text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Get in Touch */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-6">Get in touch</h4>
            <div className="space-y-3 text-sm text-gray-700 mb-6">
              <p>
                <a href="mailto:support@amrutam.global" className="hover:text-emerald-700 transition">
                  support@amrutam.global
                </a>
              </p>
              <p className="text-xs leading-relaxed">
                Amrutam Pharmaceuticals Pvt Ltd.,
                <br />
                chitraguptganj, Nai Sadak, Lashkar,
                <br />
                Gwalior - 474001
              </p>
              <p>
                <a href="tel:+919713171999" className="hover:text-emerald-700 transition">
                  +91 9713171999
                </a>
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Pinterest, href: "#", label: "Pinterest" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-[#3a643b] flex items-center justify-center text-white hover:bg-emerald-800 transition"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Center Column - Information */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-6">Information</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#" },
                { label: "Terms and Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Privacy Policy for Mobile Apps", href: "#" },
                { label: "Shipping, return and cancellation Policy", href: "#" },
                { label: "International Delivery", href: "#" },
                { label: "For Business, Hotels and Resorts", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-700 hover:text-emerald-700 transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Newsletter Subscription */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Subscribe to our Newsletter and join</h4>
            <p className="text-sm text-gray-700 mb-6">Amrutam Family today!</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-700"
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
              {isSubscribed && <p className="text-xs text-emerald-700 text-center">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
