"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Award, Globe, Users, Target, Zap } from 'lucide-react';

const AboutUsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const aboutContent = [
    {
      icon: Globe,
      title: "Gulf Market Leaders",
      text: "Established as a premier trading company in the Gulf region, we've built strong partnerships across multiple industries, delivering excellence in every transaction.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: Zap,
      title: "Solar Energy Excellence",
      text: "Leading the renewable energy revolution with cutting-edge solar panels, inverters, and battery solutions that power the future of sustainable energy.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: Target,
      title: "Construction Innovation",
      text: "From premium paints to advanced lighting solutions, we provide comprehensive construction materials that meet the highest quality standards in the industry.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: Award,
      title: "Quality Raw Materials",
      text: "Sourcing and delivering the finest industrial inputs including white silica sand and gabbro, ensuring your projects have the strongest foundation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: Users,
      title: "Safety Solutions",
      text: "Comprehensive traffic safety solutions including road paints, warning signs, and reflective materials that protect lives and ensure smooth transportation.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAutoSlide();
        } else {
          stopAutoSlide();
        }
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
      stopAutoSlide();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutContent.length);
    }, 8000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const currentContent = aboutContent[currentSlide];
  const IconComponent = currentContent.icon;

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center py-20"
    >
      {/* Creative geometric background */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-tl from-neutral-800 to-neutral-900 transform rotate-45 opacity-25 blur-2xl"></div>
        
        {/* Diagonal structure lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-15"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-neutral-800 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-neutral-700 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/2 w-6 h-1 bg-neutral-600 opacity-40"></div>
      </div>

      {/* Mouse follow effect */}
      <div 
        className="absolute inset-0 opacity-5 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #fbbf24 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            
            {/* Section Header */}
            <div className="mb-12">
              <div className="inline-flex items-center mb-6 bg-neutral-900/70 backdrop-blur-sm px-6 py-2 rounded-full border border-neutral-800">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-medium tracking-wider text-sm">ABOUT US</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Building the
                <span className="block text-yellow-400">Gulf's Future</span>
              </h2>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-8">
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {currentContent.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white leading-relaxed">
                {currentContent.text}
              </p>

              {/* Progress Indicators */}
              <div className="flex space-x-2 mt-8">
                {aboutContent.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-12 bg-yellow-400' 
                        : 'w-4 bg-neutral-700 hover:bg-neutral-600'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-800">
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">Aiming for 1000+</div>
                  <div className="text-neutral-400 text-sm">Homes to Power</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">Launching in 2025</div>
                  <div className="text-neutral-400 text-sm">With Next-Gen Solar</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">Driven by Impact</div>
                  <div className="text-neutral-400 text-sm">Not Just Profit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative">
              {/* Modern frame */}
              <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-3xl border border-neutral-700 shadow-2xl">
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-yellow-400"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-yellow-400"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-yellow-400"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-yellow-400"></div>

                {/* Image container */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full h-full object-cover transition-all duration-1000 transform hover:scale-105"
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Floating elements on image */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                    <IconComponent className="w-4 h-4 text-yellow-400" />
                    <span className="text-white text-sm font-medium">{currentContent.title}</span>
                  </div>
                </div>

                {/* Slide counter */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(aboutContent.length).padStart(2, '0')}
                </div>
              </div>

              {/* Floating background elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-neutral-800 rounded-full opacity-20 blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-neutral-700 transform rotate-45 opacity-30 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner brackets */}
     
    </section>
  );
};

export default AboutUsSection;