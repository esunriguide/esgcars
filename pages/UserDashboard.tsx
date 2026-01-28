
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  User, Bell, Bookmark, Settings, LogOut, Package, 
  CreditCard, PieChart, ShieldCheck, TrendingUp 
} from 'lucide-react';
import { MOCK_CARS } from '../constants';
import CarCard from '../components/CarCard';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface DashboardProps {
  role: 'user' | 'dealer' | 'admin';
}

const UserDashboard: React.FC<DashboardProps> = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // React to tab changes triggered by AppHeader icons
  useEffect(() => {
    const state = location.state as { activeTab?: string };
    if (state?.activeTab) {
      setActiveTab(state.activeTab);
    }
  }, [location.state]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = window.location.origin + window.location.pathname;
  };

  const stats = [
    { label: 'Live Ads', value: role === 'admin' ? '1,240' : '3', color: 'bg-emerald-500' },
    { label: 'Impressions', value: role === 'user' ? '450' : '12.8k', color: 'bg-blue-500' },
    { label: 'Favorites', value: '12', color: 'bg-indigo-500' },
    { label: 'Pending Task', value: '2', color: 'bg-brand-purple' }
  ];

  const RoleIndicator = () => {
    const userRole = user?.user_metadata?.role || role;
    switch(userRole) {
      case 'admin': return <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">Platform Admin</div>;
      case 'dealer': return <div className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">Verified Dealer</div>;
      default: return <div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">Verified User</div>;
    }
  };

  const displayName = user?.user_metadata?.full_name || "Esg Member";

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
            <div className="text-center mb-10">
              <div className="w-24 h-24 bg-indigo-50 rounded-full mx-auto flex items-center justify-center text-[#800080] mb-5 border-4 border-indigo-50/50 relative group">
                <User size={48} className="group-hover:scale-110 transition-transform" />
                <div className="absolute -bottom-1 -right-1 bg-[#800080] p-1.5 rounded-full border-2 border-white shadow-md">
                   <ShieldCheck size={14} className="text-white" />
                </div>
              </div>
              <h3 className="font-black text-gray-900 text-lg tracking-tight truncate px-2">{displayName}</h3>
              <div className="mt-3 flex justify-center"><RoleIndicator /></div>
            </div>

            <nav className="space-y-1">
              {[
                { id: 'overview', icon: PieChart, label: 'Control Center' },
                { id: 'listings', icon: Package, label: 'My Inventory' },
                { id: 'messages', icon: Bell, label: 'Chat Support' },
                { id: 'bookmarks', icon: Bookmark, label: 'Watchlist' },
                { id: 'billing', icon: CreditCard, label: 'Subscription' },
                { id: 'settings', icon: Settings, label: 'Profile Settings' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'settings') navigate('/dashboard/settings');
                    else setActiveTab(item.id);
                  }}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                    activeTab === item.id 
                    ? 'bg-indigo-50 text-[#800080]' 
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={18} strokeWidth={2.5} />
                  {item.label}
                </button>
              ))}
              
              <div className="pt-8 mt-8 border-t border-gray-100">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
                >
                  <LogOut size={18} strokeWidth={2.5} />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          {/* Welcome Banner */}
          <div className="bg-[#800080] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                Dashboard v3.0
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tighter italic">Hello, {displayName}!</h2>
              <p className="text-indigo-100 font-medium max-w-md">
                You are currently in the {user?.user_metadata?.role || role} management zone. All your activities are encrypted and verified.
              </p>
            </div>
            {/* Visual Decoration */}
            <div className="absolute right-[-10%] top-[-20%] w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
            <div className="absolute left-[40%] bottom-[-50%] w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px]"></div>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => (
                  <div key={stat.label} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:translate-y-[-4px] transition-all duration-300">
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-[0.15em]">{stat.label}</p>
                    <p className="text-3xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="font-black text-xl text-gray-900 tracking-tight flex items-center gap-3">
                     <TrendingUp className="text-[#800080]" /> System Logs
                   </h3>
                   <button className="text-[10px] font-bold text-[#800080] uppercase tracking-widest hover:underline">View All History</button>
                </div>
                <div className="space-y-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-6 py-6 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-4 -mx-4 rounded-xl transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#800080] flex items-center justify-center shrink-0">
                        <Package size={24} strokeWidth={2.5} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-bold text-gray-900">Mercedes GLK 350 validation complete</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Status: Published • Ref: #ES-9240</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-gray-800">Today</p>
                        <p className="text-[10px] text-gray-400">14:20</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'listings' || activeTab === 'bookmarks') && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-2xl text-gray-900 tracking-tight">
                  {activeTab === 'listings' ? 'Active Inventory' : 'My Watchlist'}
                </h3>
                {activeTab === 'listings' && (
                  <button className="bg-[#800080] text-white px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-900/20">
                    + NEW ADVERT
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_CARS.slice(0, 4).map(car => (
                  <CarCard key={car.id} car={car} viewMode="grid" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
