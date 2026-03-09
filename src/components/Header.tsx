import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" display-flex items-center mt-2.5 w-500  left-12 right-12 fixed z-50 bg-[#1a1a1a] rounded-xl shadow-lg ">
      {/* Main navbar row */}
      <div className="flex items-center justify-between h-14">
        <div className="pl-6 text-2xl font-black italic tracking-tight">
          <span className="text-white">BRANDLIFT</span>
          <span className="text-[#CC0000]"> HUB</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8 px-8">
          {['home', 'services', 'portfolio', 'about'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[#CC0000] hover:text-white transition-colors font-bold uppercase text-sm tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center h-full">
          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex bg-[#CC0000] hover:bg-[#aa0000] text-white h-full px-8 items-center font-bold uppercase text-sm tracking-widest transition-colors duration-300 rounded-r-xl"
          >
            Contact Us
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white pr-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] pb-4 space-y-1 border-t border-[#333]">
          {['home', 'services', 'portfolio', 'about'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block text-[#CC0000] hover:text-white hover:bg-[#252525] transition-colors font-bold uppercase text-sm tracking-widest px-6 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="block bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold uppercase text-sm tracking-widest px-6 py-3 mx-6 text-center transition-colors duration-300 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
