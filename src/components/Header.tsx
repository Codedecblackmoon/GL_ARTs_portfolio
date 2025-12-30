import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-black">GL</span>
            <span className="text-[#FF6600]">Arts</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black hover:text-[#FF6600] transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-black hover:text-[#FF6600] transition-colors font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-black hover:text-[#FF6600] transition-colors font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-black hover:text-[#FF6600] transition-colors font-medium">
              About
            </a>
            <a href="#testimonials" className="text-black hover:text-[#FF6600] transition-colors font-medium">
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-[#FF6600] text-white px-6 py-2 rounded-full hover:bg-black transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#home"
              className="block text-black hover:text-[#FF6600] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-black hover:text-[#FF6600] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block text-black hover:text-[#FF6600] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="block text-black hover:text-[#FF6600] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block text-black hover:text-[#FF6600] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block bg-[#FF6600] text-white px-6 py-2 rounded-full hover:bg-black transition-colors duration-300 font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
