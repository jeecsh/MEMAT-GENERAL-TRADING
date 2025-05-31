"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bgElementsRef = useRef([]);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Initialize background elements with enhanced properties
  const [bgElements] = useState(() => {
    if (typeof window === 'undefined') return [];
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 25 + 10,
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 40 + 30,
      xRange: Math.random() * 800 + 500,
      yRange: Math.random() * 200 + 100,
      colorVariation: Math.random(),
      delay: Math.random() * 5,
      rotationSpeed: Math.random() * 2 + 1
    }));
  });

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Enhanced animation only on desktop
    if (!isMobile && bgElements.length > 0) {
      bgElementsRef.current.forEach((el, index) => {
        if (!el || index >= bgElements.length) return;
        
        const element = bgElements[index];
        const direction = Math.random() > 0.5 ? 1 : -1;
        
        gsap.set(el, {
          x: gsap.utils.random(-element.xRange, element.xRange),
          y: gsap.utils.random(-element.yRange, element.yRange),
          opacity: element.opacity,
          scale: gsap.utils.random(0.6, 1.4),
          rotate: Math.random() * 360
        });

        const animateElement = () => {
          // X and Y movement with boundary wrapping
          gsap.to(el, {
            x: `+=${direction * gsap.utils.random(element.xRange * 0.3, element.xRange)}`,
            y: `+=${direction * gsap.utils.random(element.yRange * 0.3, element.yRange)}`,
            duration: element.speed,
            ease: "sine.inOut",
            modifiers: {
              x: x => {
                const parsedX = parseFloat(x);
                if (parsedX > element.xRange) return `-=${element.xRange * 2}`;
                if (parsedX < -element.xRange) return `+=${element.xRange * 2}`;
                return x;
              },
              y: y => {
                const parsedY = parseFloat(y);
                if (parsedY > element.yRange) return `-=${element.yRange * 2}`;
                if (parsedY < -element.yRange) return `+=${element.yRange * 2}`;
                return y;
              }
            },
            onComplete: animateElement
          });

          // Continuous rotation
          gsap.to(el, {
            rotation: `+=${gsap.utils.random(90, 270)}`,
            duration: element.speed * element.rotationSpeed,
            ease: "none",
            repeat: -1
          });

          // Scale and opacity pulsing
          gsap.to(el, {
            scale: gsap.utils.random(0.7, 1.3),
            opacity: gsap.utils.random(element.opacity * 0.7, element.opacity * 1.3),
            duration: element.speed * 0.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        };

        gsap.delayedCall(element.delay, animateElement);
      });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      bgElementsRef.current.forEach(el => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, [bgElements, isMobile, isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setIsMenuOpen(false)
      });
    } else {
      setIsMenuOpen(true);
      gsap.set(mobileMenuRef.current, { x: '100%' });
      gsap.to(mobileMenuRef.current, {
        x: '0%',
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const closeMenu = () => {
    gsap.to(mobileMenuRef.current, {
      x: '100%',
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => setIsMenuOpen(false)
    });
  };

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navHeight = 64; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    if (isMenuOpen) {
      closeMenu();
    }
  };

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Coverage & Delivery', href: '#certfed', id: 'certfed' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Contact Us', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <nav 
        ref={navbarRef}
        className={`fixed w-full top-0 z-50 transition-all duration-300 h-16 ${
          scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className={`absolute inset-0 ${
          scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
        }`}></div>

        {/* Enhanced floating balls */}
        {!isMobile && bgElements.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {bgElements.map((element, i) => {
              const colorClass = element.colorVariation > 0.7 
                ? 'from-yellow-400/50 to-yellow-600/50' 
                : element.colorVariation > 0.4 
                  ? 'from-yellow-400/50 to-yellow-600/50' 
                  : 'from-yellow-400/50 to-yellow-600/50';
              
              return (
                <div
                  key={element.id}
                  ref={el => (bgElementsRef.current[i] = el)}
                  className={`absolute rounded-full bg-gradient-to-br ${colorClass} pointer-events-none`}
                  style={{
                    width: `${element.size}px`,
                    height: `${element.size}px`,
                    opacity: element.opacity,
                    filter: 'blur(1px)',
                    willChange: 'transform, opacity, rotate',
                    mixBlendMode: 'screen'
                  }}
                />
              );
            })}
          </div>
        )}

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-30">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <Link href="/" className="relative group">
                <Image
                  src="/logo-01.png"
                  alt="Gulf Trading Logo"
                  width={150}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center ml-20">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-black/50 focus:outline-none transition-all duration-300 relative z-[60]"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent z-30" />
      </nav>

      {/* Mobile menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl z-[60] md:hidden overflow-y-auto transform translate-x-full"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-white/10 focus:outline-none transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="px-6 pb-6">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-gray-300 hover:text-yellow-400 py-3 transition-all duration-300 transform hover:translate-x-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-60"></span>
                    {item.name}
                  </span>
                </Link>
                {index < navItems.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-yellow-400/20">
            <div className="flex space-x-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Gulf Trading. All rights reserved.
            </p>
          </div>
        </nav>
      </div>

      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
