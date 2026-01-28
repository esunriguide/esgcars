
import React, { useState } from 'react';
import { 
  User, Briefcase, BadgeCheck, Phone, Mail, Globe, 
  MessageSquareOff, HeartOff, Bell, Lock, Trash2, LogOut, 
  Camera, ChevronLeft, ChevronRight, Calendar, MapPin, 
  Pencil, Save, CheckCircle2
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaved, setIsSaved] = useState(false);

  const sidebarItems = [
    { id: 'personal', label: 'Personal details', icon: User },
    { id: 'business', label: 'Business details', icon: Briefcase, hasArrow: true },
    { id: 'badge', label: '"Verified ID" badge', icon: BadgeCheck, extra: 'What is it?' },
    { type: 'divider' },
    { id: 'phone', label: 'Change phone number', icon: Phone },
    { id: 'email', label: 'Change email', icon: Mail },
    { id: 'language', label: 'Change language', icon: Globe },
    { type: 'divider' },
    { id: 'chats', label: 'Disable chats', icon: MessageSquareOff },
    { id: 'feedback', label: 'Disable Feedback', icon: HeartOff },
    { id: 'notifications', label: 'Manage notifications', icon: Bell },
    { type: 'divider' },
    { id: 'password', label: 'Change password', icon: Lock },
    { id: 'delete', label: 'Delete my account permanently', icon: Trash2, color: 'text-red-500' },
    { id: 'logout', label: 'Log out', icon: LogOut },
  ];

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
            <button className="w-full flex items-center gap-3 px-6 py-5 border-b border-gray-50 text-gray-500 hover:text-gray-900 font-bold transition-colors">
              <ChevronLeft size={20} />
              Settings
            </button>
            <div className="py-2">
              {sidebarItems.map((item, idx) => {
                if (item.type === 'divider') return <div key={`div-${idx}`} className="h-px bg-gray-100 mx-6 my-2" />;
                
                const Icon = item.icon!;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id!)}
                    className={`w-full flex items-center justify-between px-6 py-4 text-sm font-bold transition-all ${
                      activeTab === item.id 
                      ? 'text-[#800080] bg-indigo-50/50 relative after:content-[""] after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-[#800080]' 
                      : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={18} className={item.color || ""} />
                      <span className={item.color || ""}>{item.label}</span>
                    </div>
                    {item.hasArrow && <ChevronRight size={16} className="text-gray-300" />}
                    {item.extra && <span className="text-[10px] text-brand-purple hover:underline lowercase">{item.extra}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Personal details</h2>
              {isSaved && (
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <CheckCircle2 size={12} /> Saved
                </div>
              )}
            </div>

            {/* Form */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-col items-center mb-12">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-emerald-100 border-4 border-white shadow-md flex items-center justify-center text-emerald-600 overflow-hidden">
                    <User size={64} className="opacity-40" />
                  </div>
                  <label className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                    <Pencil size={16} className="text-gray-600" />
                    <input type="file" className="hidden" />
                  </label>
                  <div className="absolute -right-32 top-1/2 -translate-y-1/2 hidden lg:block">
                     <div className="bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded shadow-xl whitespace-nowrap">No file chosen</div>
                  </div>
                </div>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest z-10">First Name*</label>
                    <input 
                      type="text" 
                      defaultValue="Early"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#800080] focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-gray-800"
                    />
                    <span className="absolute bottom-[-18px] right-2 text-[10px] text-gray-300 font-bold uppercase">5 / 20</span>
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest z-10">Last Name*</label>
                    <input 
                      type="text" 
                      defaultValue="Sunrise Guide"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#800080] focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-gray-800"
                    />
                    <span className="absolute bottom-[-18px] right-2 text-[10px] text-gray-300 font-bold uppercase">13 / 20</span>
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-indigo-400 uppercase tracking-widest z-10">Select Location*</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#800080] focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-gray-800 appearance-none bg-white cursor-pointer">
                      <option>Lagos, Nigeria</option>
                      <option>Abuja, Nigeria</option>
                      <option>Ibadan, Nigeria</option>
                    </select>
                    <ChevronRight size={20} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-indigo-400 uppercase tracking-widest z-10">Birthday</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#800080] focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-gray-800"
                    />
                    <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest z-10">Sex</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#800080] focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-gray-800 appearance-none bg-white cursor-pointer">
                      <option>Do not specify</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <ChevronRight size={20} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-6">
                   <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative mb-8">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                           👋
                        </div>
                        <p className="text-sm font-bold text-gray-700">Connect your social media accounts for smoother experience!</p>
                     </div>
                   </div>

                   <div className="space-y-4 px-2">
                     <div className="flex items-center justify-between py-4 border-b border-gray-50">
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                             <Phone size={16} />
                           </div>
                           <span className="text-sm font-bold text-gray-600">Truecaller</span>
                        </div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
                           <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                        </div>
                     </div>
                     <div className="flex items-center justify-between py-4 border-b border-gray-50">
                        <div className="flex items-center gap-4">
                           <img src="https://www.google.com/favicon.ico" className="w-6 h-6" alt="Google" />
                           <span className="text-sm font-bold text-gray-600">Google</span>
                        </div>
                        <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer shadow-md">
                           <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                     </div>
                     <div className="flex items-center justify-between py-4 border-b border-gray-50">
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                             f
                           </div>
                           <span className="text-sm font-bold text-gray-600">Facebook</span>
                        </div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
                           <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                        </div>
                     </div>
                   </div>
                </div>

                <div className="pt-10 flex justify-center">
                  <button 
                    onClick={handleSave}
                    className="w-full md:w-80 bg-indigo-100/50 text-indigo-400 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-indigo-100 transition-all border border-indigo-100"
                  >
                    Saved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
