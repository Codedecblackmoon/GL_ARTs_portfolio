import { Code, Palette, Zap, Smartphone, TrendingUp, Package } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built websites with modern technologies, responsive design, and seamless user experiences that drive results.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visual designs that communicate your brand story and captivate your target audience effectively.',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials']
  },
  {
    icon: Zap,
    title: 'Branding & Identity',
    description: 'Comprehensive brand strategies that establish a memorable presence and differentiate you from competitors.',
    features: ['Brand Strategy', 'Visual Guidelines', 'Brand Positioning']
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed to enhance user satisfaction and optimize conversion rates.',
    features: ['User Research', 'Prototyping', 'Usability Testing']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions that boost your online visibility and connect you with your ideal customers.',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy']
  },
  {
    icon: Package,
    title: 'Print Design',
    description: 'Professional print materials that leave lasting impressions and reinforce your brand across all touchpoints.',
    features: ['Business Cards', 'Brochures', 'Packaging Design']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#FF6600]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and achieve your business goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#FF6600] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#FF6600] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#FF6600] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#FF6600] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#FF6600] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
