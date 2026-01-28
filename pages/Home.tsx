
import React, { useState } from 'react';
import Hero from '../components/Hero';
import { MOCK_CARS } from '../constants';
import CarCard from '../components/CarCard';
import { LayoutGrid, List, Car as CarIcon, Truck, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className={!isDashboard ? "pt-16" : ""}>
      {/* Hero only shows on Public Home or we can show a modified one for Dashboard */}
      <Hero />

      {/* Categories / Quick Links */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-all group shadow-sm border border-emerald-100">
              <CarIcon size={36} className="mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs md:text-sm font-bold">New Cars</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl bg-indigo-50 text-indigo-800 hover:bg-indigo-100 transition-all group shadow-sm border border-indigo-100">
              <Globe size={36} className="mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs md:text-sm font-bold">Foreign Used</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl bg-purple-50 text-purple-800 hover:bg-purple-100 transition-all group shadow-sm border border-purple-100">
              <Truck size={36} className="mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs md:text-sm font-bold">Local Used</span>
            </button>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="py-12 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Trending Cars on ESGCars</h2>
              <p className="text-sm text-gray-500 mt-1">The most popular deals right now</p>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-brand-purple' : 'text-gray-400'}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-brand-purple' : 'text-gray-400'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-6"
          }>
            {MOCK_CARS.map(car => (
              <CarCard key={car.id} car={car} viewMode={viewMode} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-brand-purple text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
              Explore More Listings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
