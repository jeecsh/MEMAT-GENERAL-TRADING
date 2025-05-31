"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Wrench, Building, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const autoSlideRef = useRef(null);

  const categories = [
    {
      id: 'solar',
      title: 'Solar Energy',
      subtitle: 'Sustainable Power Solutions',
      icon: Sun,
      color: 'from-yellow-400 to-orange-500',
      products: [
        {
          name: 'Premium Solar Panels',
          description: 'High-efficiency photovoltaic panels for maximum energy conversion',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop'
        },
        {
          name: 'Smart Inverters',
          description: 'Advanced power conversion technology with monitoring capabilities',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop'
        },
        {
          name: 'Energy Storage Batteries',
          description: 'Long-lasting lithium batteries for reliable energy storage',
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'raw',
      title: 'Raw Materials',
      subtitle: 'Industrial Grade Components',
      icon: Wrench,
      color: 'from-gray-400 to-gray-600',
      products: [
        {
          name: 'Industrial Inputs',
          description: 'Premium quality materials for manufacturing processes',
          image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop'
        },
        {
          name: 'White Silica Sand',
          description: 'High-purity silica sand for glass and construction applications',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop'
        },
        {
          name: 'Gabbro Stone',
          description: 'Durable igneous rock for construction and road building',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'construction',
      title: 'Construction Materials',
      subtitle: 'Complete Building Solutions',
      icon: Building,
      color: 'from-blue-400 to-purple-500',
      products: [
        {
          name: 'Premium Paints',
          description: 'High-quality interior and exterior paints with durability',
          image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=300&fit=crop'
        },
        {
          name: 'Ceramic & Floor Finishing',
          description: 'Elegant tiles and finishing materials for modern spaces',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
        },
        {
          name: 'Lighting & Chandeliers',
          description: 'Sophisticated lighting solutions for residential and commercial use',
          image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=300&fit=crop'
        },
        {
          name: 'Glow-in-the-Dark Materials',
          description: 'Phosphorescent materials for safety and decorative applications',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop'
        },
        {
          name: 'Building Sand & Gravel',
          description: 'Various grades of sand and gravel for construction projects',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'traffic',
      title: 'Traffic Safety',
      subtitle: 'Road Safety Solutions',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      products: [
        {
          name: 'Road Paints & Planning',
          description: 'Professional road marking paints and planning services',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop'
        },
        {
          name: 'Traffic Signs',
          description: 'Complete range of warning, work-site, and guidance signs',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop'
        },
        {
          name: 'Safety Equipment',
          description: 'Cones, bollards, cat eyes, and speed humps for road safety',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop'
        },
        {
          name: 'Reflective Solutions',
          description: 'Reflective tapes, road studs, and LED signage systems',
          image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop'
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
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

  // Auto-slide products
  useEffect(() => {
    const currentProducts = categories[activeCategory].products;
    autoSlideRef.current = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % currentProducts.length);
    }, 5000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [activeCategory]);

  // Reset product index when category changes
  useEffect(() => {
    setCurrentProductIndex(0);
  }, [activeCategory]);

  const currentCategory = categories[activeCategory];
  const currentProducts = currentCategory.products;
  const IconComponent = currentCategory.icon;

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
  };

  const handleProductNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentProductIndex((prev) => (prev + 1) % currentProducts.length);
    } else {
      setCurrentProductIndex((prev) => (prev - 1 + currentProducts.length) % currentProducts.length);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative overflow-hidden py-20"
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

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header - Aligned left */}
        <div className={`text-left mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="inline-flex items-center mb-6 bg-neutral-900/70 backdrop-blur-sm px-6 py-2 rounded-full border border-neutral-800">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-medium tracking-wider text-sm">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Premium <span className="text-yellow-400">Solutions</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Discover our comprehensive range of high-quality products across four key industries
          </p>
        </div>

        {/* Category Selector - Aligned left */}
        <div className={`mb-5 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="flex flex-wrap justify-start gap-4 md:gap-8">
            {categories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(index)}
                  className={`group relative px-0 py-1 md:py-2 transition-all duration-300 ${
                    activeCategory === index
                      ? 'text-yellow-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <CategoryIcon className={`w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2 transition-all duration-300 ${
                      activeCategory === index ? 'scale-110 md:scale-125' : 'group-hover:scale-105 md:group-hover:scale-110'
                    }`} />
                    <div className="text-left">
                      <div className="font-medium text-xs md:text-sm">{category.title}</div>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeCategory === index && (
                    <div className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Showcase - Remains centered */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleProductNavigation('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleProductNavigation('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Products Container */}
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700 p-8">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
              >
                {currentProducts.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Product Image */}
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          
                          {/* Image overlay elements */}
                          <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-white text-sm font-medium">{currentCategory.title}</span>
                          </div>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-3xl font-bold text-white mb-4">{product.name}</h4>
                          <p className="text-lg text-neutral-300 leading-relaxed">{product.description}</p>
                        </div>

                        <div className="flex items-center space-x-4">
                          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                            Learn More
                          </button>
                          <button className="border border-neutral-600 hover:border-neutral-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-neutral-800">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-left mt-6">
                      <span className="bg-neutral-900/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-neutral-400 border border-neutral-800">
                        {String(currentProductIndex + 1).padStart(2, '0')} / {String(currentProducts.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Progress Indicators - Aligned left */}
            <div className="flex justify-start space-x-2 mt-8">
              {currentProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProductIndex 
                      ? 'w-8 bg-yellow-400' 
                      : 'w-2 bg-neutral-600 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;