import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroSection } from "../components/ui/feature-carousel";
import photo1 from '../assets/images/image1.jpg';
import photo2 from '../assets/images/image2.jpg';
import photo3 from '../assets/images/image3.jpg';
import photo4 from '../assets/images/image4.jpg';
import photo5 from '../assets/images/image5.png';


export default function Hero() {
  const images = [
    { src: photo1, alt: 'Photo 1' },
    { src: photo2, alt: 'Photo 2' },
    { src: photo3, alt: 'Photo 3' },
    { src: photo4, alt: 'Photo 4' },
    { src: photo5, alt: 'Photo 5' },
  ];

  const title = (
    <>
      Edit Your Photos <span className="text-primary">on the Go</span>
    </>
  );

  return (
    <section id="home" className=" relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#CC0000] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#CC0000] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className=" container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1 id='hero1' className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            Transforming Ideas Into
            <span className="block text-[#CC0000] mt-2">Digital Masterpieces</span>
          </h1>

          <p id='hero1' className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed mx-auto">
            We craft stunning websites and captivating graphic designs that elevate your brand and engage your audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-[#CC0000] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 transform hover:scale-105"
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

          <div>
            <HeroSection
              // title={title}
              subtitle="Transform your photos with powerful editing tools, anywhere, anytime."
              images={images}
            />
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto  ">
            <div>
              <div className="text-4xl font-bold text-[#CC0000] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#CC0000] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#CC0000] mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
