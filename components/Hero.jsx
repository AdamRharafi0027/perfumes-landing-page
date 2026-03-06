import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden inter">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZ29sZCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODEzNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Perfume"
            className="w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        {/* Floating Gold Particles Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#D4AF37] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#FFD700] rounded-full opacity-40 animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full opacity-50 animate-pulse delay-200"></div>
          <div className="absolute bottom-48 right-1/3 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse delay-300"></div>
        </div>

        {/* Hero Content with Glassmorphism */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mt-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 sm:p-16 shadow-2xl">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#FFD700] uppercase tracking-widest text-sm">
                Premium Fragrances
              </span>
            </div>

            <h1
              className="mb-6 bg-gradient-to-r from-white via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent playfair leading-[1.2] font-bold"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
              }}
            >
              Discover Your
              <br />
              Signature Scent
            </h1>

            <p
              className="mb-10 text-gray-300 max-w-2xl mx-auto leading-[1.8]"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              Indulge in the world's most exquisite fragrances. Handcrafted
              luxury perfumes that define elegance and sophistication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full overflow-hidden shadow-lg shadow-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/70 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 uppercase tracking-wider font-semibold">
                  Shop Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105">
                <span className="uppercase tracking-wider font-semibold">
                  View Collection
                </span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full"></div>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
export default Hero;
