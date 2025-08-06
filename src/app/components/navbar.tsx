"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Download, FileText } from 'lucide-react';
import { gsap } from 'gsap';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageSwitch } from './LanguageSwitch';
import { ClientOnly } from './ClientOnly';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bgElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const downloadMenuRef = useRef(null);

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

  const { t } = useTranslation();

  // PDF download items
  const pdfItems = [
    { name: t('downloads.catalog'), filename: 'DEYEProductsCatalogue.pdf' },
    { name: t('downloads.solar'), filename: 'MematSolarEnergyCOMPANYPROFILE.pdf' },
    { name: t('downloads.glow'), filename: 'MematGlowintheDarkCOMPANYPROFILE.pdf' },
    { name: t('downloads.terms'), filename: 'MematTrafficSafetyCOMPANYPROFILE.pdf' }
  ];

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

    const handleClickOutside = (event: MouseEvent) => {
      if (downloadMenuRef.current && !(downloadMenuRef.current as HTMLElement).contains(event.target as Node)) {
        setIsDownloadOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Separate effect for animations that runs after ClientOnly renders
  useEffect(() => {
    // Small delay to ensure ClientOnly has rendered the elements
    const animationTimer = setTimeout(() => {
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
    }, 100); // Small delay to ensure elements are rendered

    return () => {
      clearTimeout(animationTimer);
      bgElementsRef.current.forEach(el => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, [bgElements, isMobile]);

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

  const toggleDownloadMenu = () => {
    setIsDownloadOpen(!isDownloadOpen);
  };

  const handleDownload = (filename: string) => {
    // In a real application, you would implement the actual download logic here
    // For now, we'll just simulate the download
    console.log(`Downloading: ${filename}`);
    
    // Create a temporary link element for download simulation
    const link = document.createElement('a');
 link.href = `${window.location.origin}/${filename}`;// Adjust path as needed
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the dropdown menu
    setIsDownloadOpen(false);
  };

  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = async (elementId: string) => {
    if (isMenuOpen) {
      closeMenu();
    }

    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      await router.push(`/#${elementId}`);
      return;
    }

    // If we're already on the home page, smooth scroll to the section
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
  };

  const navItems = [
    { name: t('nav.home'), href: '#hero', id: 'hero' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.coverage'), href: '#certfed', id: 'certfed' },
    { name: t('nav.products'), href: '#products', id: 'products' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' }
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

        {/* Enhanced floating balls - Client-side only to prevent hydration issues */}
        <ClientOnly>
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
                    ref={(el: HTMLDivElement | null) => {
                      if (bgElementsRef.current) bgElementsRef.current[i] = el;
                    }}
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
        </ClientOnly>

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

            <div className="flex items-center space-x-4">
              {/* Language Switch */}
              <LanguageSwitch />
              
              {/* Download Button */}
              <div className="relative" ref={downloadMenuRef}>
                <button
                  onClick={toggleDownloadMenu}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-black/50 focus:outline-none transition-all duration-300 relative"
                  aria-expanded={isDownloadOpen}
                  aria-label="Download resources"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Download Dropdown Menu */}
                <div 
                  className={`absolute right-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-yellow-400/20 transition-all duration-300 transform origin-top-right ${
                    isDownloadOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-yellow-400 uppercase tracking-wider border-b border-yellow-400/20">
                      {t('downloads.title')}
                    </div>
                    {pdfItems.map((item, index) => (
                      <button
                        key={item.filename}
                        onClick={() => handleDownload(item.filename)}
                        className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 group"
                      >
                        <FileText className="h-4 w-4 mr-3 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
                        <span className="flex-1 text-left">{item.name}</span>
                        <Download className="h-3 w-3 text-gray-500 group-hover:text-yellow-400 transition-colors duration-200" />
                      </button>
                    ))}
                  </div>
                  <div className="absolute top-0 right-4 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-yellow-400/20"></div>
                </div>
              </div>

              {/* Mobile Menu Button */}
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
         
            </div>
            <p className="mt-6 text-xs text-gray-500 text-center">
              {t('footer.copyright')}
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
