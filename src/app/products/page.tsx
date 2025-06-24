"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Wrench, Building, Shield, ArrowRight, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';
import Navbar from "../components/navbar";
import { useSearchParams } from 'next/navigation';

// Main Products Page Component
const ProductsPage = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    {
      id: 'solar',
      title: 'Solar Energy',
      subtitle: 'Sustainable Power Solutions',
      icon: Sun,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-400/10 to-orange-500/10',
      products: [
        {
          name: 'Premium Solar Panels',
          description: 'High-efficiency photovoltaic panels for maximum energy conversion with advanced silicon technology and weather-resistant design.',
          features: ['25-year warranty', 'High efficiency rating', 'Weather resistant', 'Easy installation'],
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop'
        },
        {
          name: 'Smart Inverters',
          description: 'Advanced power conversion technology with monitoring capabilities and smart grid integration for optimal performance.',
          features: ['Smart monitoring', 'Grid integration', 'High conversion rate', 'Remote control'],
          image: 'inverters.jpg'
        },
        {
          name: 'Energy Storage Batteries',
          description: 'Long-lasting lithium batteries for reliable energy storage with advanced battery management systems.',
          features: ['Long lifespan', 'Fast charging', 'Safe operation', 'Scalable capacity'],
          image: 'batt.avif'
        }
      ]
    },
    {
      id: 'raw',
      title: 'Raw Materials',
      subtitle: 'Industrial Grade Components',
      icon: Wrench,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-400/10 to-gray-600/10',
      products: [
        {
          name: 'Industrial Inputs',
          description: 'Premium quality materials for manufacturing processes with consistent quality and reliable supply chain.',
          features: ['Consistent quality', 'Reliable supply', 'Bulk availability', 'Quality certified'],
          image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop'
        },
        {
          name: 'White Silica Sand',
          description: 'High-purity silica sand for glass and construction applications with excellent chemical properties.',
          features: ['High purity', 'Consistent grain size', 'Low impurities', 'Multiple grades'],
          image: 'rmla.jpg'
        },
        {
          name: 'Gabbro Stone',
          description: 'Durable igneous rock for construction and road building with excellent strength and durability.',
          features: ['High durability', 'Excellent strength', 'Weather resistant', 'Various sizes'],
          image: 'gabro.jpg'
        }
      ]
    },
    {
      id: 'construction',
      title: 'Construction Materials',
      subtitle: 'Complete Building Solutions',
      icon: Building,
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-400/10 to-purple-500/10',
      products: [
        {
          name: 'Premium Paints',
          description: 'High-quality interior and exterior paints with durability and excellent coverage for all surfaces.',
          features: ['Long-lasting finish', 'Excellent coverage', 'Eco-friendly', 'Multiple colors'],
          image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=300&fit=crop'
        },
        {
          name: 'Ceramic & Floor Finishing',
          description: 'Elegant tiles and finishing materials for modern spaces with contemporary designs and durability.',
          features: ['Modern designs', 'Easy maintenance', 'Slip resistant', 'Water resistant'],
          image: 'cer.webp'
        },
        {
          name: 'Lighting & Chandeliers',
          description: 'Sophisticated lighting solutions for residential and commercial use with energy-efficient technology.',
          features: ['Energy efficient', 'Modern designs', 'Easy installation', 'Long lifespan'],
          image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=300&fit=crop'
        },
        {
          name: 'Glow-in-the-Dark Materials',
          description: 'Phosphorescent materials for safety and decorative applications with long-lasting glow properties.',
          features: ['Long-lasting glow', 'Safety approved', 'Easy application', 'Multiple colors'],
          image: 'glow.jpg'
        },
        {
          name: 'Building Sand & Gravel',
          description: 'Various grades of sand and gravel for construction projects with consistent quality and sizing.',
          features: ['Consistent quality', 'Multiple grades', 'Clean materials', 'Bulk supply'],
          image: 'rmala.jpg'
        }
      ]
    },
    {
      id: 'traffic',
      title: 'Traffic Safety',
      subtitle: 'Road Safety Solutions',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-400/10 to-pink-500/10',
      products: [
        {
          name: 'Road Paints & Planning',
          description: 'Professional road marking paints and planning services with high visibility and durability.',
          features: ['High visibility', 'Weather resistant', 'Fast drying', 'Long-lasting'],
          image: 'road.jpg'
        },
        {
          name: 'Traffic Signs',
          description: 'Complete range of warning, work-site, and guidance signs with reflective materials for safety.',
          features: ['Reflective materials', 'Weather resistant', 'Easy installation', 'Standard compliant'],
          image: 'signs.jpg'
        },
        {
          name: 'Safety Equipment',
          description: 'Cones, bollards, cat eyes, and speed humps for road safety with high visibility design.',
          features: ['High visibility', 'Durable materials', 'Easy deployment', 'Safety certified'],
          image: 'safty.jpeg'
        },
        {
          name: 'Reflective Solutions',
          description: 'Reflective tapes, road studs, and LED signage systems for enhanced visibility and safety.',
          features: ['Enhanced visibility', 'Energy efficient', 'Long lifespan', 'Easy maintenance'],
          image: 'refff.avif'}
      ]
    }
  ];

  // Find initial category index based on URL parameter
  const getInitialCategory = () => {
    if (!categoryParam) return 0;
    const index = categories.findIndex(cat => cat.id === categoryParam);
    return index >= 0 ? index : 0;
  };

  const [activeCategory, setActiveCategory] = useState(getInitialCategory);

  // Update active category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      const index = categories.findIndex(cat => cat.id === categoryParam);
      if (index >= 0) {
        setActiveCategory(index);
      }
    }
  }, [categoryParam]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleWhatsAppMessage = (categoryTitle: string, productName: string) => {
    const message = `Hello! I'm interested in learning more about your ${productName} from the ${categoryTitle} category. Could you please provide more details about pricing, availability, and specifications?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+971503800249?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main 
        ref={sectionRef}
        className="relative overflow-hidden pt-20"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-tl from-neutral-800 to-neutral-900 transform rotate-45 opacity-25 blur-2xl"></div>
          
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-15"></div>
          
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-neutral-800 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-neutral-700 rounded-full animate-bounce"></div>
        </div>

        {/* Mouse follow effect */}
        <div 
          className="absolute inset-0 opacity-5 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #fbbf24 0%, transparent 50%)`
          }}
        />

        <div className="container mx-auto px-6 relative z-10 py-12">
          
          {/* Page Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="inline-flex items-center mb-6 bg-neutral-900/70 backdrop-blur-sm px-6 py-2 rounded-full border border-neutral-800">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-white font-medium tracking-wider text-sm">ALL PRODUCTS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Our <span className="text-yellow-400">Products</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore our comprehensive range of premium products across all categories
            </p>
          </div>

          {/* Category Navigation */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {categories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`group relative px-6 py-3 transition-all duration-300 rounded-2xl ${
                      activeCategory === index
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-neutral-900/70 backdrop-blur-sm border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <CategoryIcon className={`w-5 h-5 transition-all duration-300 ${
                        activeCategory === index ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      <div className="text-left">
                        <div className="font-medium text-sm">{category.title}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className={`${currentCategory.bgColor} rounded-3xl p-8 mb-8 border border-neutral-800`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentCategory.color}`}>
                    <currentCategory.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentCategory.title}</h2>
                    <p className="text-neutral-400">{currentCategory.subtitle}</p>
                  </div>
                </div>
                <div className="bg-neutral-900/70 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                  <span className="text-neutral-300 text-sm">{currentCategory.products.length} Products</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.products.map((product, index) => (
                  <div key={index} className="group bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700 hover:border-neutral-500 transition-all duration-300 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">{currentCategory.title}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span className="text-xs text-neutral-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => handleWhatsAppMessage(currentCategory.title, product.name)}
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Learn More or Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Help Finding the Right <span className="text-yellow-400">Product</span>?
              </h3>
              <p className="text-lg text-neutral-300 mb-6">
                Our experts are ready to help you choose the perfect solution for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
                <button className="border border-neutral-600 hover:border-yellow-400 text-white hover:text-yellow-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;