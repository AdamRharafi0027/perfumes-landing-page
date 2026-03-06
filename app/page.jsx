import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ChooseUs from "@/components/ChooseUs"
import HowItWorks from "@/components/HowItWorks"
import Offer from "@/components/Offer"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"


const page = () => {
  return (
    <>
     <div className="min-h-screen w-full bg-[#0a0a0a] text-white overflow-x-hidden">
      <Hero />
      <Features />
      <ChooseUs />
      <HowItWorks />
      <Offer />
      <Contact />
      <Footer />
     </div>
    </>
  )
}

export default page