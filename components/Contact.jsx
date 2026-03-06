"use client";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        })
        alert("Message sent successfully! We'll get back to you soon.")
    }
const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
}
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hi! I'm interested in ordering luxury perfumes from your collection.");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };
  return (
    <>
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4 bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent playfair font-semibold"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[1.125rem]">
              Have questions? We're here to help you find your perfect scent
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-500">
              <h3 className="mb-6 text-white playfair font-semi-bold text-[1.75rem]">
                Send us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all duration-300"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your preferences..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="uppercase tracking-wider font-bold">
                    Send Message
                  </span>
                </button>
              </form>
            </div>

            {/* WhatsApp Order */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-center items-center text-center">
              <div className="mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
                <MessageCircle className="w-16 h-16 text-[#25D366]" />
              </div>

              <h3 className="mb-4 text-white playfair font-semi-bold text-[1.75rem]">
                Order via WhatsApp
              </h3>

              <p className="mb-8 text-gray-400 max-w-mdtext-[1.125rem] leading-[1.8]">
                Get instant assistance and place your order directly through
                WhatsApp for a personalized shopping experience.
              </p>

              <button
                onClick={handleWhatsAppOrder}
                className="group relative px-10 py-4 bg-gradient-to-r from-[#25D366] to-[#1EBE57] text-white rounded-full overflow-hidden shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="uppercase tracking-wider font-bold">
                  Chat on WhatsApp
                </span>
              </button>

              <div className="mt-8 flex flex-col gap-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Instant Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Personal Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Quick Order Placement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
