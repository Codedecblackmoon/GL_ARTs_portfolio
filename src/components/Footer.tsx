import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">BRANDLIFT</span>
              <span className="text-[#CC0000]"> HUB</span>
            </div>
            <p i className="text-gray-400 mb-4">
              Everything a small business needs to look professional and get found online in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-[#CC0000] transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#CC0000] transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#CC0000] transition-colors">Branding</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#CC0000] transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#CC0000] transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#CC0000] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-[#CC0000] transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-[#CC0000] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#CC0000] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CC0000] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates and creative insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC0000] text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-[#CC0000] text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} GL Arts. All rights reserved. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
