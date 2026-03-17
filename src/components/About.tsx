
import { Target, Users, Award, Heart } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';

const values = [
  {
    icon: Heart,
    title: 'Rvision',
    description: 'To become the default digital launchpad for every new and growing small business in South Africa and eventually across Sub-Saharan Africa.'
  },
  {
    icon: Target,
    title: 'Mission',
    description: 'To make world-class branding and digital presence accessible and affordable for every South African small business, regardless of budget or technical ability'
  },
  {
    icon: Award,
    title: 'Values',
    description: 'Breaking barriers for small businesses by delivering affordable, high-quality digital services with reliable turnaround times, while supporting South African talent and entrepreneurs.'
  },
  // {
  //   icon: Users,
  //   title: 'Passionate',
  //   description: 'We love what we do and it shows in the quality of our work'
  // }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About    
              <span className="text-white">    BRANDLIFT</span>
              <span className="text-[#CC0000]"> HUB</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              BrandLaunch is a South African digital services platform that provides affordable, done-for-you branding and web presence solutions to small and micro businesses.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              The platform combines AI-assisted design tools with a vetted network of South African creative professionals to deliver logos, brand identities, websites, social media graphics, and mobile apps at a price point accessible to township-based and emerging SMMEs. BrandLaunch addresses one of the most critical and underserved gaps in the South African SMME ecosystem: the inability of small businesses to establish a credible, professional digital presence due to cost and complexity barriers..
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Whether you're a startup looking to make your mark or an established business seeking a fresh perspective, we bring the creativity, technical skill, and strategic thinking needed to elevate your brand.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-[#CC0000] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <GlowCard
                key={index}
                customSize
                className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl p-6 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#CC0000] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#CC0000]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}