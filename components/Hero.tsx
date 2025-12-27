
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end bg-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/molang3dcopy-AUxDg47I2JeL3lgZK3jRzI5T/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-110"
          title="Molang 3D"
        ></iframe>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-8 md:p-16 mb-12 pointer-events-none">
        <h1 className="text-huge font-serif font-light italic leading-none max-w-4xl tracking-tight">
          Transformation <br /> Through Play.
        </h1>
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start justify-between">
          <p className="max-w-md text-xl font-light text-gray-600">
            Designing worlds where character leads strategy. We bridge the gap between high-fashion aesthetics and playful narrative.
          </p>
          <div className="flex gap-4 pointer-events-auto">
            <button className="px-8 py-4 bg-black text-white rounded-full uppercase text-xs tracking-widest font-semibold hover:bg-gray-800 transition-colors">
              View Case Study
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
