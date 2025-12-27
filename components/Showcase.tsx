
import React from 'react';

const projects = [
  { id: 1, title: 'Elastic Realities', category: '3D Direction', image: 'https://picsum.photos/1200/800?grayscale&v=1' },
  { id: 2, title: 'Molang X Fashion', category: 'Brand Identity', image: 'https://picsum.photos/1200/800?grayscale&v=2' },
  { id: 3, title: 'Digital Spirits', category: 'Metaverse Strategy', image: 'https://picsum.photos/1200/800?grayscale&v=3' },
  { id: 4, title: 'Soft Systems', category: 'Interface Design', image: 'https://picsum.photos/1200/800?grayscale&v=4' },
];

const Showcase: React.FC = () => {
  return (
    <section id="work" className="bg-white py-24 px-8 md:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-gray-100 pb-12">
          <h2 className="text-6xl md:text-8xl font-serif font-light">Featured <br /> Projects.</h2>
          <div className="text-sm uppercase tracking-widest font-bold hidden md:block">Scroll to explore (01 — 04)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden bg-gray-100 aspect-[4/3] mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-serif mb-2">{project.title}</h3>
                  <p className="text-gray-500 uppercase text-xs tracking-widest font-semibold">{project.category}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 7l-10 10M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
