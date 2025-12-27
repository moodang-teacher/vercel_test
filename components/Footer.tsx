
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f2f2f2] pt-32 pb-16 px-8 md:px-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
          <div className="md:col-span-2">
            <h2 className="text-6xl md:text-[10rem] font-serif leading-none tracking-tight mb-12">
              Ready to <br /><span className="italic">Transform?</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-4">New Business</p>
              <a href="mailto:hello@studio.com" className="text-2xl font-light hover:underline underline-offset-8">hello@molang-collins.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-4">Offices</p>
              <p className="text-xl font-light text-gray-600">New York <br /> Seoul <br /> Berlin</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-12 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <p>© 2025 Studio Molang x Collins. All Rights Reserved.</p>
          <div className="flex gap-12 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">Vimeo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
