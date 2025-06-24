"use client";
import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  ArrowUpRight,
  Building2
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <footer id="footer-with-map" className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-15"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
        
        {/* Subtle floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-neutral-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
          }`}>
            
            {/* Company Name with Modern Badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-neutral-900/70 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-neutral-800 hover:border-yellow-400/50 transition-all duration-500 group">
                <Building2 className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
                    MEMAT GENERAL
                  </h2>
                  <p className="text-yellow-400 text-xs sm:text-sm font-medium tracking-widest">
                    TRADING COMPANY
                  </p>
                </div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse ml-2"></div>
              </div>
              
              <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                Your trusted partner for premium trading solutions across the Gulf region, delivering excellence through innovation.
              </p>
            </div>

            {/* Contact Information with Modern Cards */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: MapPin, text: "Office 43-44, Al Fahidi, Bur Dubai", type: "address" },
                { icon: Phone, text: "+971 52 632 5959", type: "phone" },
                { icon: Mail, text: "kh2005h@yahoo.com", type: "email" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-yellow-400/50 hover:bg-neutral-900/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800/50 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <IconComponent className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-neutral-400 text-sm sm:text-base group-hover:text-white transition-colors duration-300 break-all sm:break-normal">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* LinkedIn Link */}
            <div className="pt-4">
              <a
                href="#"
                aria-label="Connect with us on LinkedIn"
                className="group inline-flex items-center gap-3 bg-neutral-900/60 hover:bg-yellow-400/10 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-neutral-800 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-800/50 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <Linkedin className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-neutral-400 font-medium text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                  Connect on LinkedIn
                </span>
                <ArrowUpRight className="text-yellow-400 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Map */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="relative group">
              {/* Map container with modern styling */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 bg-neutral-900/30 backdrop-blur-sm">
                {/* Map header */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">Our Location</span>
                  </div>
                </div>
                
                {/* Interactive map */}
                <iframe
                  src="https://maps.google.com/maps?q=25.2631386,55.2962885&z=15&output=embed"
                  width="100%"
                  height="280"
                  className="sm:h-80 lg:h-96 w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Memat General Trading Location - Al Fahidi, Bur Dubai"
                />
                
                {/* Map overlay effects */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-neutral-800 group-hover:ring-yellow-400/20 transition-all duration-500 pointer-events-none"></div>
              </div>
              
              {/* Floating address card */}
              <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-xl p-3 sm:p-4 shadow-lg">
                <p className="text-white text-xs sm:text-sm font-medium text-center">
                  📍 Al Fahidi Historic District, Bur Dubai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Divider */}
        <div className="relative my-8 sm:my-12 lg:my-16">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black px-4 py-2 rounded-full border border-neutral-800">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Copyright with modern styling */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-neutral-900/70 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-neutral-800">
            <span className="text-neutral-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Memat General Trading Company
            </span>
            <span className="text-neutral-700 text-xs sm:text-sm">•</span>
            <span className="text-neutral-500 text-xs sm:text-sm">
              All rights reserved
            </span>
          </div>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-neutral-800 rounded-tl-lg"></div>
      </div>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-neutral-800 rounded-tr-lg"></div>
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-neutral-800 rounded-bl-lg"></div>
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-neutral-800 rounded-br-lg"></div>
      </div>
    </footer>
  );
};

export default Footer;