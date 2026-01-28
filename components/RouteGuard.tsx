
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AppHeader from './AppHeader';
import Home from '../pages/Home';

interface RouteGuardProps {
  children?: React.ReactNode;
  allowedRoles?: ('user' | 'dealer' | 'admin')[];
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      // Not logged in -> Auth Gate redirect
      navigate('/auth/login', { state: { from: location.pathname } });
    }
  }, [user, loading, navigate, location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#800080] border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-[#800080] font-black text-lg tracking-tighter">🔐 AUTH + DATABASE GATE</h2>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">Syncing with Supabase</p>
      </div>
    );
  }

  // If no user after loading, useEffect handles navigation, but we return null to be safe
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <div className="flex-grow pt-16">
        {children || <Home />}
      </div>
    </div>
  );
};

export default RouteGuard;
