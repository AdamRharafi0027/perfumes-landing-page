import Image from 'next/image';
import products from '../data/products';

const Features = () => {
    return (
        <section className="py-24 px-6 sm:px-8 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="mb-4 bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent playfair font-semibold"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
            >
              Featured Collection
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Explore our handpicked selection of the finest luxury perfumes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-transparent to-black/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37] text-black text-xs rounded-full uppercase tracking-wider" style={{ fontWeight: 600 }}>
                    New
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 
                    className="mb-2 text-white group-hover:text-[#FFD700] transition-colors duration-300"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.5rem',
                      fontWeight: 600
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#FFD700]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      {product.price}
                    </span>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 group-hover:scale-105">
                    <span className="uppercase tracking-wider" style={{ fontWeight: 600 }}>Buy Now</span>
                  </button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Features;