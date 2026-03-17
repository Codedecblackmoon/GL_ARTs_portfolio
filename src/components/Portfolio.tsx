import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  {
    title: 'Modern E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with seamless checkout experience',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    description: 'Complete brand overhaul for tech startup',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Restaurant Website',
    category: 'Web Development',
    description: 'Responsive website with online ordering system',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Corporate Branding',
    category: 'Graphic Design',
    description: 'Professional business cards and stationery suite',
    image: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'Minimalist portfolio for creative professional',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Marketing Campaign',
    category: 'Graphic Design',
    description: 'Social media graphics and promotional materials',
    image: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const categories = ['All', 'Web Development', 'Graphic Design'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#CC0000]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we bring creative visions to life
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#CC0000] text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0c0c0c] border-solid border-[#000000] border-t-4 border-r-7 border-b-7 border-l-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-[#CC0000] font-semibold text-sm">
                        {item.category}
                      </span>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-2 group-hover:text-[#CC0000] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#f0f0f0]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
