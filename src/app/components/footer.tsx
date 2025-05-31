"use client";
import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
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

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer id="footer-with-map" className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-15"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
          }`}>
            <div>
              <div className="inline-flex items-center mb-4 bg-neutral-900/70 backdrop-blur-sm px-8 py-3 rounded-full border border-neutral-800">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 animate-pulse"></div>
                <span className="text-white font-bold tracking-widest text-lg">MEMAT GENERAL TRADING</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full ml-4 animate-pulse"></div>
              </div>
              <p className="text-neutral-400 text-lg">
                Your trusted partner for premium trading solutions across the Gulf region.
              </p>
            </div>

            <div className="space-y-2 text-neutral-400">
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" size={20} />
                <span>Office 43-44, Al Fahidi, Bur Dubai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" size={20} />
                <span>+971 52 632 5959</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={20} />
                <span>kh2005h@yahoo.com</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative w-10 h-10 bg-neutral-900/60 hover:bg-yellow-400/10 border border-neutral-800 hover:border-yellow-400/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent 
                      size={18} 
                      className="text-neutral-400 group-hover:text-yellow-400 transition-colors duration-300" 
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Map with Marker */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
            <iframe
  src="https://maps.google.com/maps?q=25.2631386,55.2962885&z=15&output=embed"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-2xl"
  title="Memat General Trading Location"
/>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-12"></div>

        {/* Copyright */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Memat General Trading Company. All rights reserved.
          </p>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-neutral-800"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-neutral-800"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-neutral-800"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-neutral-800"></div>
    </footer>
  );
};

export default Footer;
