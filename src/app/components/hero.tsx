"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const TradingCompanyHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [excellenceText, setExcellenceText] = useState('');
  const [taglineText, setTaglineText] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const excellenceWords = ['EXCELLENCE', 'QUALITY', 'AUTHENTICITY', 'RELIABILITY'];
  const taglineString = ' Solar Energy, Construction Materials, Raw Materials & Traffic Safety Solutions';

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Excellence typing animation with word cycling
  useEffect(() => {
    let excellenceIndex = 0;
    let isTyping = true;
    const currentWord = excellenceWords[currentWordIndex];
    
    const typeExcellence = () => {
      if (isTyping) {
        if (excellenceIndex <= currentWord.length) {
          setExcellenceText(currentWord.slice(0, excellenceIndex));
          excellenceIndex++;
        } else {
          // Finished typing, wait then start erasing
          setTimeout(() => {
            isTyping = false;
          }, 2500);
        }
      } else {
        if (excellenceIndex > 0) {
          excellenceIndex--;
          setExcellenceText(currentWord.slice(0, excellenceIndex));
        } else {
          // Finished erasing, move to next word
          setCurrentWordIndex((prev) => (prev + 1) % excellenceWords.length);
          isTyping = true;
          excellenceIndex = 0;
        }
      }
    };

    const excellenceInterval = setInterval(typeExcellence, 150);
    return () => clearInterval(excellenceInterval);
  }, [currentWordIndex]);

  // Tagline typing animation (one time only)
  useEffect(() => {
    let taglineIndex = 0;
    
    // Start tagline animation after Excellence has typed once
    const startDelay = setTimeout(() => {
      setShowCursor2(true);
      
      const typeTagline = () => {
        if (taglineIndex <= taglineString.length) {
          setTaglineText(taglineString.slice(0, taglineIndex));
          taglineIndex++;
        } else {
          // Finished typing, keep the cursor visible
          clearInterval(taglineInterval);
        }
      };

      const taglineInterval = setInterval(typeTagline, 60);
    }, 1000);

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor1(prev => !prev);
      setShowCursor2(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const renderTaglineWithHighlight = (text: string) => {
    const highlights = ['Solar Energy', 'Construction Materials', 'Raw Materials', 'Traffic Safety'];
    let result = text;
    
    highlights.forEach(highlight => {
      if (text.includes(highlight)) {
        result = result.replace(
          highlight,
          `<span class="text-yellow-400 font-medium">${highlight}</span>`
        );
      }
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Background image with better desktop positioning */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center"
          alt="UAE Background"
          className="w-full h-full object-cover object-center md:object-[center_10%] opacity-50"
        />
        {/* Black overlay fade from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        {/* Additional subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Modern geometric background elements */}
      <div className="absolute inset-0 z-10">
        {/* Large geometric shapes */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-tl from-neutral-800 to-neutral-900 transform rotate-45 opacity-30 blur-2xl"></div>
        
        {/* Diagonal lines for structure */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-15"></div>
        
        {/* Gulf-inspired geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neutral-800 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-neutral-700 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-1 bg-neutral-600 opacity-50"></div>
      </div>
      
      {/* Subtle mouse follow effect */}
      <div 
        className="absolute inset-0 opacity-8 transition-all duration-1000 ease-out z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #fbbf24 0%, transparent 50%)`
        }}
      />
      

      {/* Main content */}
      <div className={`text-center px-6 relative z-20 transition-all duration-1500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        
        {/* Company branding */}
        <div className="mb-8">
          
          {/* Gulf Trading identity */}
          <div className="inline-flex items-center mb-6 bg-neutral-900/70 backdrop-blur-sm px-8 py-3 rounded-full border border-neutral-800">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 animate-pulse"></div>
            <span className="text-white font-medium tracking-widest text-sm">MEMAT GENERAL TRADING</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full ml-4 animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 relative min-h-[120px] flex items-center justify-center">
            <span className="text-white">
              {excellenceText}
              <span className={`${showCursor1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-yellow-400"></div>
          </h1>
        </div>

        {/* Trading focus tagline with typing animation */}
        <div className="mb-12 min-h-[120px] flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed">
            Premium {renderTaglineWithHighlight(taglineText)}
            <span className={`${showCursor2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="group mb-16">
          <a 
            href="#products"
            className="relative inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Discover Products
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </span>
            
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>

        {/* Simple stats with Gulf region focus */}
        <div className="flex justify-center space-x-12 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">500+</div>
            <div className="text-neutral-400 text-sm">Products</div>
          </div>
          <div className="w-px h-12 bg-neutral-800"></div>
          <div className="group">
            <div className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">15+</div>
            <div className="text-neutral-400 text-sm">Years</div>
          </div>
          <div className="w-px h-12 bg-neutral-800"></div>
          <div className="group">
            <div className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">Gulf</div>
            <div className="text-neutral-400 text-sm">Region</div>
          </div>
        </div>
      </div>

      {/* Corner brackets for modern framing */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-neutral-800 z-30"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-neutral-800 z-30"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-neutral-800 z-30"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-neutral-800 z-30"></div>
    </div>
  );
};

export default TradingCompanyHero;