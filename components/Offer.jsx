import { Clock, Sparkles } from "lucide-react"

const Offer = () => {
    return (
        <>
<section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#FFD700]/10"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#D4AF37]/50 rounded-3xl p-12 sm:p-16 text-center shadow-2xl shadow-[#D4AF37]/30 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse delay-150"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full shadow-lg">
                <span className="uppercase tracking-widest font-bold" >Limited Time Offer</span>
              </div>

              <h2 
                className="mb-6 text-white playfair font-bold leading-[1.2]"
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                }}
              >
                Get 25% Off
                <br />
                <span className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Your First Order
                </span>
              </h2>

              <p className="mb-10 text-gray-300 max-w-2xl mx-auto text-[1.25rem] leading-[1.8]" >
                Elevate your senses with our exclusive collection. Use code <span className="text-[#FFD700] font-bold">LUXURY25</span> at checkout.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <button className="group relative px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full overflow-hidden shadow-xl shadow-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/70 transition-all duration-300 hover:scale-110">
                  <span className="relative z-10 uppercase tracking-wider text-[1.125rem] font-bold" >Claim Offer Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  <span>Offer ends soon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FFD700]" />
                  <span>Limited stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Offer