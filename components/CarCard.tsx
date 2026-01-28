
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Tag } from 'lucide-react';
import { Car, CarType } from '../types';

interface CarCardProps {
  car: Car;
  viewMode: 'grid' | 'list';
}

const CarCard: React.FC<CarCardProps> = ({ car, viewMode }) => {
  const isGrid = viewMode === 'grid';

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link 
      to={`/car/${car.id}`}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group ${!isGrid ? 'flex flex-col sm:flex-row' : ''}`}
    >
      <div className={`relative ${!isGrid ? 'sm:w-1/3 h-48 sm:h-auto' : 'h-48'}`}>
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Transparent Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <span className="text-white font-bold text-lg rotate-12 tracking-tighter">ESGCARS</span>
        </div>
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <ShieldCheck size={12} /> {car.badge}
        </span>
      </div>

      <div className={`p-4 flex flex-col justify-between ${!isGrid ? 'sm:w-2/3' : ''}`}>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-purple transition-colors">{car.name}</h4>
          <p className="text-emerald-700 font-bold text-lg mb-2">{formatPrice(car.price)}</p>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4">
            {car.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center text-gray-400 text-xs gap-1">
            <MapPin size={14} className="text-gray-400" />
            {car.location}
          </div>
          <div className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${
            car.type === CarType.NEW ? 'bg-emerald-500' : 
            car.type === CarType.FOREIGN_USED ? 'bg-blue-500' : 'bg-indigo-500'
          }`}>
            {car.type}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
