const Footer = () => {
    return (
        <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 
                className="mb-4 text-[#D4AF37] playfair font-semibold text-[1.5rem]"
              >
                Luxe Parfum
              </h4>
              <p className="text-gray-400 leading-[1.8]">
                Your destination for authentic luxury fragrances from around the world.
              </p>
            </div>

            <div>
              <h5 className="mb-4 text-white font-semibold" >Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Products</li>
                <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>

            <div>
              <h5 className="mb-4 text-white font-semibold" >Contact Info</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@luxeparfum.com</li>
                <li>Phone: +1 (234) 567-8900</li>
                <li>Hours: Mon-Sat 9AM-8PM</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2026 Luxe Parfum. All rights reserved. Crafted with excellence.</p>
          </div>
        </div>
      </footer>
    )
}
export default Footer