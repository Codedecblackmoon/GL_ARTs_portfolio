import { Target, Users, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable outcomes that drive your business forward'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work closely with clients to ensure their vision comes to life perfectly'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project we undertake'
  },
  {
    icon: Heart,
    title: 'Passionate',
    description: 'We love what we do and it shows in the quality of our work'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#FF6600]">GL Arts</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of designers and developers dedicated to transforming brands through innovative digital solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Since our founding, we've helped over 50 businesses establish their digital presence and achieve their goals. Our approach combines creative excellence with technical expertise to deliver solutions that not only look stunning but perform exceptionally.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Whether you're a startup looking to make your mark or an established business seeking a fresh perspective, we bring the creativity, technical skill, and strategic thinking needed to elevate your brand.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-[#FF6600] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl p-6 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#FF6600] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#FF6600]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
