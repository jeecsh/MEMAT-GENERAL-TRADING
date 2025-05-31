"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Shield, FileCheck, Truck } from 'lucide-react';
import createGlobe from 'cobe';

const LegalCertificationsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  interface LabelPosition {
    x: number;
    y: number;
    visible: boolean;
    lat: number;
    lng: number;
    color: string;
    name: string;
  }
  const [labelPositions, setLabelPositions] = useState<LabelPosition[]>([]);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const pointerInteractionMovement = useRef(0);
  const pointerDownPosition = useRef([0, 0]);
  interface GlobeInstance {
    destroy: () => void;
  }
  const globeRef = useRef<GlobeInstance | null>(null);
  const phiRef = useRef<number>(0);
  const lastInteractionTimeRef = useRef<number>(0);

  // Region data (lat, lng, color)
  const regions = [
    { lat: 25, lng: 50, color: '#fbbf24', name: "Gulf States" },  // Middle East
    { lat: 35, lng: 105, color: '#f59e0b', name: "Asia" },        // East Asia
    { lat: -8, lng: 20, color: '#eab308', name: "Africa" }        // Africa
  ];

  const certifications = [
    {
      icon: FileCheck,
      title: "Trade License",
      text: "Fully authorized operations with comprehensive trade license ensuring complete legal compliance across all business sectors."
    },
    {
      icon: Shield,
      title: "Commercial Register",
      text: "Officially registered with commercial authorities, maintaining the highest standards of business integrity and regulatory compliance."
    }
  ];

  // Helper function to convert hex to RGB
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b];
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.9, 0.6, 0.2],
      glowColor: [1, 0.8, 0.3],
      markers: regions.map((region) => ({
        location: [region.lat, region.lng],
        size: 0.08,
        color: hexToRgb(region.color)
      })),
      onRender: (state) => {
        const currentTime = Date.now();
        
        // Manual interaction takes priority
        if (isPointerDown && pointerInteractionMovement.current !== 0) {
          phiRef.current += pointerInteractionMovement.current;
          pointerInteractionMovement.current *= 0.9;
          lastInteractionTimeRef.current = currentTime;
        }
        // Auto-rotate only if no recent manual interaction (1.5 seconds grace period)
        else if (currentTime - lastInteractionTimeRef.current > 1500) {
          phiRef.current += 0.003;
        }
        
        state.phi = phiRef.current;
        
        // Update label positions based on current rotation
        const newPositions = regions.map((region) => {
          const pos = project3DTo2D(region.lat, region.lng, phiRef.current, width);
          return {
            ...region,
            x: pos.x,
            y: pos.y,
            visible: pos.visible
          };
        });
        setLabelPositions(newPositions);
      }
    });

    globeRef.current = globe;

    // Mouse/Touch event handlers for manual rotation
    const handlePointerEvent = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        return { x: e.clientX, y: e.clientY };
      } else {
        return e.touches[0] ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      setIsPointerDown(true);
      const pos = handlePointerEvent(e);
      if (pos) {
        pointerDownPosition.current = [pos.x, pos.y];
        if (canvasRef.current) {
          canvasRef.current.style.cursor = 'grabbing';
        }
      }
    };

    const onPointerUp = () => {
      setIsPointerDown(false);
      pointerInteractionMovement.current = 0;
      lastInteractionTimeRef.current = Date.now();
      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grab';
      }
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isPointerDown) return;
      
      const pos = handlePointerEvent(e);
      if (pos) {
        const deltaX = pos.x - pointerDownPosition.current[0];
        pointerInteractionMovement.current = deltaX * 0.008;
        pointerDownPosition.current[0] = pos.x;
      }
    };

    // Add event listeners
    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousedown', onPointerDown);
      canvasRef.current.addEventListener('touchstart', onPointerDown, { passive: false });
      canvasRef.current.style.cursor = 'grab';
    }
    
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchend', onPointerUp);
    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('touchmove', onPointerMove, { passive: false });

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
      }
      window.removeEventListener('resize', onResize);
      
      // Clean up event listeners
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', onPointerDown);
        canvasRef.current.removeEventListener('touchstart', onPointerDown);
      }
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchend', onPointerUp);
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('touchmove', onPointerMove);
    };
  }, [isPointerDown]);

  // Helper function to convert lat/lng to 3D coordinates and project to 2D
  const project3DTo2D = (lat: number, lng: number, phi: number, canvasSize: number) => {
    // Convert to radians
    const latRad = (lat * Math.PI) / 180;
    const lngRad = ((lng + phi * 180 / Math.PI) * Math.PI) / 180;
    
    // 3D coordinates on unit sphere
    const x = Math.cos(latRad) * Math.cos(lngRad);
    const y = Math.sin(latRad);
    const z = Math.cos(latRad) * Math.sin(lngRad);
    
    // Simple orthographic projection
    const screenX = (x * canvasSize * 0.35) + canvasSize / 2;
    const screenY = (-y * canvasSize * 0.35) + canvasSize / 2;
    
    // Check if point is on the visible side of the globe
    const isVisible = z > -0.3;
    
    return { x: screenX, y: screenY, visible: isVisible };
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center py-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-40 w-64 h-64 bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-60 h-60 bg-gradient-to-tl from-yellow-800 to-yellow-900 transform rotate-45 opacity-25 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Cobe Globe Container */}
          <div className="relative w-full aspect-square max-w-[24rem] mx-auto">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ width: '100%', height: '100%' }}
            />
            
            {/* Rotating region labels inside the globe */}
            {labelPositions.map((region, index) => (
              <div 
                key={index}
                className={`absolute text-xs font-bold transition-opacity duration-300 ${
                  region.visible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${region.x}px`,
                  top: `${region.y}px`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }}
              >
                <div className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-yellow-400/40 text-yellow-300 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: region.color }}
                    ></div>
                    <span className="text-[10px] font-semibold tracking-wide">{region.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div>
            {/* Section Header */}
            <div className="mb-10">
              <div className="inline-flex items-center mb-5 bg-neutral-900/70 backdrop-blur-sm px-5 py-1.5 rounded-full border border-neutral-800">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-medium tracking-wider text-sm">LEGAL & CERTIFICATIONS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
                Trusted &
                <span className="block text-yellow-400">Certified</span>
              </h2>
            </div>

            {/* Certifications */}
            <div className="space-y-5 mb-10">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1.5">{cert.title}</h3>
                      <p className="text-white/90 leading-relaxed">{cert.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Coverage */}
            <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-xl p-5 mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <Truck className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Global Delivery Network</h3>
              </div>
                <p className="text-base text-white font-medium">
                &quot;We deliver to the Gulf States, Asia, and Africa&quot;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 pt-7 border-t border-neutral-800">
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-neutral-400 text-sm">Legal Compliance</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">3</div>
                <div className="text-neutral-400 text-sm">Major Regions</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-neutral-400 text-sm">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCertificationsSection;
