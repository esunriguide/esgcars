
import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-indigo-400 py-12 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <div className="hidden lg:block w-1/4">
         <img
            src="/images/brand/Ladies.png"
            alt="ESGCARS Happy Buyers"
            className="rounded-lg shadow-xl"
          />

        </div>

        <div className="flex-1 text-center text-white">
          <h1 className="text-sm md:text-base font-semibold mb-6 uppercase tracking-wider">
            Simple. Fast. Affordable. Huge Bonuses.
          </h1>
          <div className="relative max-w-xl mx-auto group">
            <input 
              type="text" 
              placeholder="Search your dream car here!" 
              className="w-full pl-6 pr-14 py-4 rounded-full text-gray-800 shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all text-sm md:text-base"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-purple text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-1/4">
          <img
            src="/images/brand/Ribbon.png"
            alt="ESGCARS Deals"
            className="rounded-lg shadow-xl"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;
