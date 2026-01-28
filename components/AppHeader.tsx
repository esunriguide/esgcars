
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bookmark, MessageSquare, Bell, Diamond, FileText, User as UserIcon,
  LayoutGrid, MessageCircle, BarChart3, Wallet, Settings, LogOut
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToDashboard = (tab?: string) => {
    const role = user?.user_metadata?.role || 'user';
    setIsDropdownOpen(false);
    navigate(`/dashboard/${role}`, { state: { activeTab: tab } });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = window.location.origin + window.location.pathname;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#800080] text-white shadow-md h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
        <Link to="/dashboard" className="flex items-center shrink-0">
            <img
              src="/images/brand/ESGCARS.png"
              alt="ESGCARS"
              className="h-8 w-auto"
            />
          </Link>


        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/90">
            Sell Faster, Buy Smarter
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button onClick={() => goToDashboard('bookmarks')} className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#800080] hover:bg-gray-100 transition-all shadow-sm" title="Saved">
            <Bookmark size={20} fill="currentColor" fillOpacity={0.1} />
          </button>
          
          <button onClick={() => goToDashboard('messages')} className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#800080] hover:bg-gray-100 transition-all shadow-sm" title="Messages">
            <MessageSquare size={20} />
          </button>

          <div className="relative">
            <button onClick={() => goToDashboard('notifications')} className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#800080] hover:bg-gray-100 transition-all shadow-sm" title="Notifications">
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 bg-[#ff4d4d] text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#800080]">
              3
            </span>
          </div>

          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#800080] hover:bg-gray-100 transition-all shadow-sm" title="My Adverts">
            <FileText size={20} />
          </button>

          {/* Profile with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#800080] border-2 transition-all ml-1 shadow-sm ${isDropdownOpen ? 'border-brand-purple ring-2 ring-white/20' : 'border-white'}`}
              title="Account"
            >
              <UserIcon size={22} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="px-5 py-3 border-b border-gray-50 mb-2">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Signed in as</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{user?.email}</p>
                </div>

                <div className="space-y-0.5">
                  <button onClick={() => goToDashboard('overview')} className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#800080] transition-colors group">
                    <LayoutGrid size={18} className="group-hover:scale-110 transition-transform" />
                    My shop
                  </button>
                  <button onClick={() => goToDashboard('messages')} className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#800080] transition-colors group">
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                    Feedback
                  </button>
                  <button onClick={() => goToDashboard('overview')} className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#800080] transition-colors group">
                    <BarChart3 size={18} className="group-hover:scale-110 transition-transform" />
                    Performance
                  </button>
                  <button onClick={() => goToDashboard('billing')} className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#800080] transition-colors group">
                    <Wallet size={18} className="group-hover:scale-110 transition-transform" />
                    My balance
                  </button>
                  <button onClick={() => { setIsDropdownOpen(false); navigate('/dashboard/settings'); }} className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#800080] transition-colors group">
                    <Settings size={18} className="group-hover:scale-110 transition-transform" />
                    Settings
                  </button>
                </div>

                <div className="mt-2 pt-2 border-t border-gray-100">
                  <button onClick={handleLogout} className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => goToDashboard('listings')} className="ml-2 bg-[#ff9f3b] hover:bg-[#f38d22] text-white px-8 py-2.5 rounded-lg font-black text-xs shadow-lg transition-all transform active:scale-95 uppercase tracking-wider">
            SELL
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
