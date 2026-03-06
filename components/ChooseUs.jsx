import features from "@/data/features"
const ChooseUs = () => {
    return (
<>
<section className="py-24 px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4 bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent font-semibold playfair"
              style={{ 

                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
            >
              Why Choose Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Experience luxury shopping with unmatched benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                {/* Icon Container with Glassmorphism */}
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 
                  className="mb-3 text-white playfair font-semibold"
                  style={{                    fontSize: '1.5rem',

                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-[1.8]" >
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
</>
    )
}
export default ChooseUs