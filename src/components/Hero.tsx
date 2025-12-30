import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF6600] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF6600] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-[#FF6600] bg-opacity-10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-semibold text-[#FF6600]">Creative Design Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            Transforming Ideas Into
            <span className="block text-[#FF6600] mt-2">Digital Masterpieces</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            We craft stunning websites and captivating graphic designs that elevate your brand and engage your audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-[#FF6600] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-4xl font-bold text-[#FF6600] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6600] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6600] mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
