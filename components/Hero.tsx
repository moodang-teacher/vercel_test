
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Increased multipliers for higher sensitivity as requested.
  // Using translate3d up to -100px and rotation up to 10 degrees.
  const iframeTransform = {
    transform: `
      translate3d(${mousePos.x * -100}px, ${mousePos.y * -100}px, 0) 
      scale(1.2)
      rotateY(${mousePos.x * 12}deg)
      rotateX(${mousePos.y * -12}deg)
    `,
    transition: 'transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)' // Using a cleaner easing for high-end feel
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col justify-end bg-white overflow-hidden"
    >
      {/* 3D Background Wrapper with Mouse Parallax */}
      {/* Removed pointer-events-none to allow user to drag/interact with the Spline scene directly */}
      <div className="absolute inset-0 z-0 overflow-hidden cursor-move">
        <div className="w-full h-full" style={iframeTransform}>
          <iframe 
            src='https://my.spline.design/molang3dcopy-AUxDg47I2JeL3lgZK3jRzI5T/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
            title="Molang 3D"
          ></iframe>
        </div>
      </div>

      {/* Content Overlay */}
      {/* Keeping pointer-events-none on the text so it doesn't block the 3D interaction underneath */}
      <div className="relative z-10 p-8 md:p-16 mb-12 pointer-events-none select-none">
        <h1 className="text-huge font-serif font-light italic leading-none max-w-4xl tracking-tight text-black drop-shadow-xl">
          Transformation <br /> Through Play.
        </h1>
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start justify-between">
          <p className="max-w-md text-xl font-light text-gray-800 bg-white/40 backdrop-blur-md p-6 -ml-6 rounded-lg border border-white/20 shadow-lg">
            Designing worlds where character leads strategy. We bridge the gap between high-fashion aesthetics and playful narrative.
          </p>
          <div className="flex gap-4 pointer-events-auto">
            <button className="px-8 py-4 bg-black text-white rounded-full uppercase text-xs tracking-widest font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-2xl">
              View Case Study
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce hidden md:block opacity-40 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>

      {/* Decorative center crosshair for agency aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <div className="w-12 h-px bg-black"></div>
        <div className="h-12 w-px bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;
