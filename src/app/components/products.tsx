"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Wrench, Building, Shield, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

const ProductsOverview = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categoryConfig = [
    {
      id: 'solar',
      icon: Sun,
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-400/10 to-orange-500/10',
      productCount: 3,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop'
    },
    {
      id: 'raw',
      icon: Wrench,
      color: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-400/10 to-gray-600/10',
      productCount: 3,
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=250&fit=crop'
    },
    {
      id: 'construction',
      icon: Building,
      color: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-400/10 to-purple-500/10',
      productCount: 5,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop'
    },
    {
      id: 'traffic',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      bgGradient: 'from-red-400/10 to-pink-500/10',
      productCount: 4,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop'
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
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="inline-flex items-center mb-6 bg-neutral-900/70 backdrop-blur-sm px-6 py-2 rounded-full border border-neutral-800">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-3 animate-pulse" />
            <span className="text-white font-medium tracking-wider text-sm">{t('products.title')}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            {t('products.subtitle')}
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {t('products.description')}
          </p>
        </div>

    

        {/* Categories Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {categoryConfig.map((config, index) => {
            const CategoryIcon = config.icon;
            const category = {
              ...config,
              title: t(`products.sections.${config.id}.title`),
              subtitle: t(`products.sections.${config.id}.subtitle`),
              description: t(`products.sections.${config.id}.description`)
            };
            return (
              <Link
                href={`/products?category=${category.id}`}
                key={category.id}
                className="block"
              >
                <div
                  className={`group relative bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-600 transition-all duration-500 hover:scale-105 cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative p-8 h-full flex flex-col min-h-[320px]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="bg-neutral-900/70 backdrop-blur-sm px-3 py-1 rounded-full border border-neutral-700">
                        
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-4 font-medium">
                        {category.subtitle}
                      </p>
                      <p className="text-neutral-300 leading-relaxed mb-6">
                        {category.description}
                      </p>
                    </div>

                    {/* Action area */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-yellow-400 font-medium text-sm group-hover:text-yellow-300 transition-colors duration-300">
                        <span>{t('common.products.explore')}</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      
                      {/* Animated indicator */}
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                    </div>

                    {/* Animated background elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-neutral-600 rounded-full animate-bounce opacity-30"></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('products.cta.title')}
            </h3>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
             {t('common.products.browse')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/products">
                <button className="group bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                  <span>{t('products.cta.button')}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
