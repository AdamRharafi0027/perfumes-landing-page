import steps from "@/data/steps"

const HowItWorks = () => {
    return (
<section className="py-24 px-6 sm:px-8 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/30 to-[#0a0a0a] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="mb-4 bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 600
              }}
            >
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[1.25rem]" >
              Three simple steps to luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-y-1/2"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105 text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] text-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/50" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 
                  className="mb-4 text-white"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-400" style={{ lineHeight: 1.8 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}

export default HowItWorks