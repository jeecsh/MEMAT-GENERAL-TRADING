"use client";
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Sun, Wrench, Building, Shield, ArrowRight, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';
import Navbar from "../components/navbar";
import { useSearchParams } from 'next/navigation';
import { useTranslation } from '../hooks/useTranslation';
import { getCategorySummary, getProductsByCategory, getProductsBySubcategory, allProducts } from '../data/products';

// Main Products Page Component
const ProductsPageContent = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { t, language } = useTranslation();
  
  const sectionRef = useRef<HTMLElement>(null);

  // Get category summary and products from our database
  const categorySummary = getCategorySummary(language as 'en' | 'ar');
  
  const categories = [
    {
      id: 'solar',
      title: categorySummary.solar.name,
      subtitle: categorySummary.solar.description,
      icon: Sun,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-400/10 to-orange-500/10',
      products: getProductsByCategory('solar')
    },
    {
      id: 'raw-materials',
      title: categorySummary['raw-materials'].name,
      subtitle: categorySummary['raw-materials'].description,
      icon: Wrench,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-400/10 to-gray-600/10',
      products: getProductsByCategory('raw-materials')
    },
    {
      id: 'construction',
      title: categorySummary.construction.name,
      subtitle: categorySummary.construction.description,
      icon: Building,
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-400/10 to-purple-500/10',
      products: getProductsByCategory('construction')
    },
    {
      id: 'traffic-safety',
      title: categorySummary['traffic-safety'].name,
      subtitle: categorySummary['traffic-safety'].description,
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-400/10 to-pink-500/10',
      products: getProductsByCategory('traffic-safety')
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

  const handleWhatsAppMessage = (categoryTitle: string, productName: string) => {
    const message = t('productsPage.whatsapp.message')
      .replace('{productName}', productName)
      .replace('{categoryTitle}', categoryTitle);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+971503800249?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className={`min-h-screen bg-black text-white `}>
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
          
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-neutral-800 transform rotate-45"></div>
          <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-neutral-700 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-12">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6 bg-neutral-900/70 backdrop-blur-sm px-6 py-2 rounded-full border border-neutral-800">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-white font-medium tracking-wider text-sm">{t('productsPage.header.badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              {t('productsPage.header.title.prefix')} <span className="text-yellow-400">{t('productsPage.header.title.highlight')}</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              {t('productsPage.header.description')}
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mb-12">
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
          <div className="">
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
               
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.products && currentCategory.products.length > 0 ? (
                  currentCategory.products.map((product, index) => (
                  <div key={product.id || index} className="group bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700 hover:border-neutral-500 transition-all duration-300 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.images?.[0] || 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop'}
                        alt={product.name?.[language as 'en' | 'ar'] || 'Product'}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">{currentCategory.title}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {product.name?.[language as 'en' | 'ar'] || 'Product Name'}
                      </h3>
                      <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                        {product.shortDescription?.[language as 'en' | 'ar'] || 'Product Description'}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {product.keyFeatures?.[language as 'en' | 'ar']?.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                              <span className="text-xs text-neutral-400">{feature}</span>
                            </div>
                          )) || []}
                        </div>
                      </div>

                      {product.specifications && product.specifications.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Specifications:</h4>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            {product.specifications.slice(0, 4).map((spec, idx) => (
                              <div key={idx} className="text-neutral-400">
                                <span className="text-white">{spec.name}:</span> {spec.value}{spec.unit ? ` ${spec.unit}` : ''}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => handleWhatsAppMessage(currentCategory.title, product.name?.[language as 'en' | 'ar'] || 'Product')}
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-neutral-400 text-lg">No products available in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('productsPage.contactSection.title.prefix')} <span className="text-yellow-400">{t('productsPage.contactSection.title.highlight')}</span>?
              </h3>
              <p className="text-lg text-neutral-300 mb-6">
                {t('productsPage.contactSection.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('productsPage.contactSection.callButton')}
                </button>
                <button className="border border-neutral-600 hover:border-yellow-400 text-white hover:text-yellow-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  {t('productsPage.contactSection.emailButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Wrapper component with Suspense
const ProductsPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-yellow-400 text-lg">Loading products...</div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
};

export default ProductsPage;