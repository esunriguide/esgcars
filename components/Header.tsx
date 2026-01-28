
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
              src="/images/brand/ESGCARS.jpg"
              alt="ESGCARS"
              className="
                h-7 sm:h-8 md:h-10
                w-auto
                transition-transform
                hover:scale-105
              "
          />
        </Link>

        <div className="hidden md:block italic text-gray-500 text-sm">
          Buy and sell cars with a difference.
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/auth/login" className="text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors">Log In</Link>
          <Link to="/auth/register" className="bg-brand-purple text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all">Sign Up</Link>
        </nav>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute top-16 left-0 w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="py-2 text-gray-700">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="py-2 text-gray-700">About Us</Link>
            <Link to="/auth/login" onClick={() => setIsOpen(false)} className="py-2 text-gray-700">Log In</Link>
            <Link to="/auth/register" onClick={() => setIsOpen(false)} className="bg-brand-purple text-white px-4 py-2 rounded-md text-center font-semibold">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
