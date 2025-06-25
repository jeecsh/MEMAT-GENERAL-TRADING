"use client";
import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Send,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer-with-map');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    { 
      icon: MapPin, 
      label: "Address",
      text: t('footer.address'),
      subtext: t('location.address')
    },
    { 
      icon: Phone, 
      label: "Phone",
      text: "+971 52 632 5959", 
      subtext: "Available 9AM - 6PM GST"
    },
    { 
      icon: Mail, 
      label: "Email",
      text: "kh2005h@yahoo.com", 
      subtext: "We'll respond within 24 hours"
    }
  ];

  return (
    <footer id="footer-with-map" className="bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400/50"></div>
            <div className="mx-4 px-6 py-2 bg-neutral-900/50 backdrop-blur-sm rounded-full border border-neutral-800">
              <span className="text-yellow-400 text-sm font-medium tracking-widest">{t('contact.title')}</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400/50"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-yellow-400">MEMAT</span>{' '}
            <span className="text-white">{t('footer.company').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('footer.description')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-white">
             {t('footer.location.info')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const isHovered = hoveredContact === index;
                  
                  return (
                    <div 
                      key={index}
                      className="group relative"
                      onMouseEnter={() => setHoveredContact(index)}
                      onMouseLeave={() => setHoveredContact(null)}
                    >
                      <div className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                        isHovered 
                          ? 'bg-neutral-900/80 border-yellow-400/50 shadow-lg shadow-yellow-400/10' 
                          : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center transition-all duration-300 ${
                            isHovered ? 'bg-yellow-400/20 scale-110' : ''
                          }`}>
                            <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                              isHovered ? 'text-yellow-400' : 'text-neutral-400'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                              isHovered ? 'text-yellow-400' : 'text-neutral-500'
                            }`}>
                              {item.label}
                            </p>
                            <p className={`font-medium mb-1 transition-colors duration-300 break-all sm:break-normal ${
                              isHovered ? 'text-white' : 'text-neutral-300'
                            }`}>
                              {item.text}
                            </p>
                            <p className="text-sm text-neutral-500">
                            
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover indicator */}
                        <div className={`absolute right-4 top-6 transition-all duration-300 ${
                          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                        }`}>
                          <ArrowRight className="w-4 h-4 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LinkedIn CTA */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="mt-8 p-6 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-sm rounded-2xl border border-neutral-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('footer.social.linkedin')}</h4>
                  </div>
                  <a
                    href="#"
                    className="group flex items-center gap-2 bg-yellow-400/10 hover:bg-yellow-400/20 px-4 py-3 rounded-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section - Right Side */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative h-full">
                <div className="sticky top-8">
                  <div className="relative group">
                    {/* Map header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{t('footer.location.title')}</h3>
                      <div className="flex items-center gap-2 text-neutral-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Al Fahidi, Dubai</span>
                      </div>
                    </div>
                    
                    {/* Map container */}
                    <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group-hover:shadow-yellow-400/5 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                      
                      <iframe
                        src="https://maps.google.com/maps?q=25.2631386,55.2962885&z=15&output=embed"
                        width="100%"
                        height="400"
                        className="sm:h-96 lg:h-[500px] w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Memat General Trading Location"
                      />
                      
                      {/* Map overlay ring */}
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-neutral-800 group-hover:ring-yellow-400/30 transition-all duration-700 pointer-events-none"></div>
                    </div>
                    
                    {/* Address card */}
                    <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-lg border border-neutral-800 rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{t('footer.location.address')}</p>
                          <p className="text-neutral-400 text-xs">Bur Dubai, United Arab Emirates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* Decorative divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-black px-6 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-400/40 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <p className="text-neutral-500 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>

      {/* Modern corner accents */}
      <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-neutral-800/60 rounded-tl-sm"></div>
      <div className="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-neutral-800/60 rounded-tr-sm"></div>
      <div className="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-neutral-800/60 rounded-bl-sm"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-neutral-800/60 rounded-br-sm"></div>
    </footer>
  );
};

export default Footer;
