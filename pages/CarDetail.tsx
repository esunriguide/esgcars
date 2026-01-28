
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Eye, Clock, ShieldCheck, Phone, MessageCircle, 
  ChevronLeft, ChevronRight, Share2, Heart, Info,
  CheckCircle2, AlertCircle, TrendingUp
} from 'lucide-react';
import { MOCK_CARS } from '../constants';
import CarCard from '../components/CarCard';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = MOCK_CARS.find(c => c.id === id) || MOCK_CARS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 overflow-hidden whitespace-nowrap">
          <Link to="/" className="hover:text-brand-purple">Home</Link>
          <span>/</span>
          <span className="hover:text-brand-purple cursor-pointer">Vehicles</span>
          <span>/</span>
          <span className="hover:text-brand-purple cursor-pointer">Cars</span>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{car.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Column */}
          <div className="lg:w-[68%] space-y-6">
            {/* Image Gallery Container */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group">
              <div className="relative aspect-[4/3] bg-gray-200">
                <img 
                  src={car.imageUrl} 
                  alt={car.name} 
                  className="w-full h-full object-contain"
                />
                {/* Watermark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                  <span className="text-black font-bold text-4xl lg:text-6xl rotate-12 tracking-tighter">ESGCARS</span>
                </div>
                
                {/* Image Nav Arrows */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all">
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <TrendingUp size={12} /> 1 / 6 images
                </div>
              </div>

              {/* Thumbnails */}
              <div className="p-4 flex gap-3 overflow-x-auto no-scrollbar border-t border-gray-50">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`relative flex-shrink-0 w-24 aspect-[4/3] rounded-lg border-2 overflow-hidden cursor-pointer ${i === 1 ? 'border-brand-purple' : 'border-transparent'}`}>
                    <img src={`https://picsum.photos/seed/${i + 100}/100/75`} alt="thumb" className="w-full h-full object-cover" />
                    {i === 6 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-sm">+1</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Title & Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">{car.name}</h1>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={24} />
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-gray-400 border-b border-gray-50 pb-6 mb-6">
                <span className="bg-indigo-50 text-brand-purple px-2 py-1 rounded font-bold uppercase tracking-tight">Promoted</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {car.location}, 12 hours ago</span>
                <span className="flex items-center gap-1"><Eye size={14} /> 190 views</span>
              </div>

              {/* Feature Icons */}
              <div className="flex gap-8 overflow-x-auto no-scrollbar pb-6 border-b border-gray-50 mb-6">
                <div className="flex flex-col items-center min-w-[80px]">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Condition</span>
                  <span className="text-sm font-semibold text-gray-800">{car.type}</span>
                </div>
                <div className="flex flex-col items-center min-w-[80px]">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2">
                    <Info size={24} />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Fuel</span>
                  <span className="text-sm font-semibold text-gray-800">Petrol</span>
                </div>
                <div className="flex flex-col items-center min-w-[80px]">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-2">
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Transmission</span>
                  <span className="text-sm font-semibold text-gray-800">Automatic</span>
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-8">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Make</p>
                  <p className="text-sm font-semibold text-gray-800">Toyota</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Model</p>
                  <p className="text-sm font-semibold text-gray-800">Camry</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Year</p>
                  <p className="text-sm font-semibold text-gray-800">2006</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Trim</p>
                  <p className="text-sm font-semibold text-gray-800 truncate">LE 4dr Sedan (2.4L 4cyl 5A)</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Body</p>
                  <p className="text-sm font-semibold text-gray-800">Sedan</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Drivetrain</p>
                  <p className="text-sm font-semibold text-gray-800">Front</p>
                </div>
              </div>
              
              <button className="text-brand-purple font-bold text-xs flex items-center gap-1 hover:underline">
                Show more <ChevronRight size={14} />
              </button>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {car.description}
                <br /><br />
                A popular midsize sedan known for its reliability, comfort and strong resale value suitable for the Nigeria current fuel economy. Clean title and documented maintenance history.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-emerald-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-sm">
                  <Phone size={20} /> Show contact
                </button>
                <div className="flex gap-2">
                  <button className="p-4 bg-indigo-50 text-indigo-700 rounded-xl hover:bg-indigo-100 transition-all"><Share2 size={20} /></button>
                  <button className="p-4 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-all"><MessageCircle size={20} /></button>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="text-emerald-500 font-bold text-sm border-2 border-emerald-500 px-8 py-3 rounded-xl hover:bg-emerald-50 transition-all">
                  Make an offer
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:w-[32%] space-y-6">
            {/* Price Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-extrabold text-gray-900">{formatPrice(car.price)}</h2>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded">Negotiable</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase mb-2">
                  <span>Market price:</span>
                  <span>₦ 8 M ~ 8.78 M</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full relative overflow-hidden">
                  <div className="absolute left-[30%] right-[20%] top-0 bottom-0 bg-brand-purple rounded-full"></div>
                </div>
              </div>

              <button className="w-full bg-emerald-50 text-emerald-600 font-bold py-4 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-all">
                Request call back
              </button>
            </div>

            {/* Seller Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Autosbylarry</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="flex items-center gap-1 text-[10px] text-gray-500"><TrendingUp size={10} /> New on ESGCARS</span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold"><ShieldCheck size={10} /> Verified ID</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Typically replies within minutes</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-sm">
                  <Phone size={20} /> Show contact
                </button>
                <button className="w-full bg-white border-2 border-emerald-500 text-emerald-500 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all">
                  <MessageCircle size={20} /> Start chat
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold py-3 rounded-lg hover:bg-gray-50">Mark unavailable</button>
              <button className="flex-1 bg-white border border-red-200 text-red-500 text-xs font-bold py-3 rounded-lg hover:bg-red-50 flex items-center justify-center gap-1">
                <AlertCircle size={14} /> Report Abuse
              </button>
            </div>

            {/* Safety Tips */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-center">Safety tips</h4>
              <ul className="text-xs text-gray-600 space-y-3">
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">•</span>
                  Avoid sending any prepayments
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">•</span>
                  Meet with the seller at a safe public place
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">•</span>
                  Inspect what you're going to buy to make sure it's what you need
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple font-bold">•</span>
                  Check all the docs and only pay if you're satisfied
                </li>
              </ul>
            </div>

            <button className="w-full bg-white border-2 border-emerald-500 text-emerald-500 font-bold py-4 rounded-xl hover:bg-emerald-50 transition-all text-sm">
              Post Ad Like This
            </button>
          </div>
        </div>

        {/* Similar Adverts Section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-bold text-gray-800">Similar adverts</h2>
            <div className="flex gap-2">
              <button className="p-2 text-gray-400 hover:text-brand-purple transition-colors"><TrendingUp size={20} /></button>
              <button className="p-2 text-gray-400 hover:text-brand-purple transition-colors"><TrendingUp size={20} /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_CARS.filter(c => c.id !== id).slice(0, 3).map(c => (
              <CarCard key={c.id} car={c} viewMode="grid" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarDetail;
