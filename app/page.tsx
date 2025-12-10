import Hero from "@/components/sections/hero" 
import Featured from "@/components/sections/featured"
import WhyDoctors from "@/components/sections/why-doctors" 
import JoinCircle from "@/components/sections/join-circle"
import Testimonials from "@/components/sections/testimonials"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import AppFeatures from "@/components/sections/app-features"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LandingHero from "@/components/sections/landing-hero"

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <LandingHero/>
      <Featured />
      <WhyDoctors /> 
      <JoinCircle />
      <AppFeatures />
      <Testimonials />
      <FAQ />
      <Hero />
      <Contact />
      <Footer />
    </div>
  )
}
