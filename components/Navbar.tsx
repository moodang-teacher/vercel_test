
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="font-bold text-xl tracking-tighter uppercase">
        Studio / Molang
      </div>
      <div className="flex gap-12 text-sm font-medium uppercase tracking-widest hidden md:flex">
        <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
        <a href="#studio" className="hover:opacity-50 transition-opacity">Studio</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
