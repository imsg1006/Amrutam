import { Facebook, Instagram, Youtube, Twitter, Linkedin, Paintbrush as Pinterest } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#dbdcc4] text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Logo and Contact */}
          <div> 
            <img src="/logo.png" alt="" />
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mt-5 text-[#33643f] mb-3">Get in touch</h4>
                <div className="space-y-2 text-sm text-[#4c4c4c]">
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
              </div>
            </div>
          </div>

          {/* Center Column - Information Links */}
          <div>
            <h4 className="font-bold text-[#33643f] mb-6 text-lg">Information</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#" },
                { label: "Terms and Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Privacy Policy for Mobile Apps", href: "#" },
                { label: "Shipping and Return Policy", href: "#" },
                { label: "International Delivery", href: "#" },
                { label: "For Business, Hotels and Resorts", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#4c4c4c] hover:text-emerald-700 transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Social Media */}
          <div>
            <h4 className="font-bold text-[#33643f] mb-6 text-lg">Follow Us</h4>
            <div className="flex gap-4 flex-wrap">
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
                    className="w-10 h-10 rounded-full bg-[#33643f] flex items-center justify-center text-white hover:bg-emerald-800 transition"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
