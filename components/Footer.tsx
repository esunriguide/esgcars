
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-purple text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 className="text-white font-bold mb-6 pb-2 border-b-2 border-indigo-400 inline-block">ABOUT US</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-indigo-300 transition-colors">About Esgcars</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-300 transition-colors">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/copyright" className="hover:text-indigo-300 transition-colors">Copyright Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-indigo-300 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 pb-2 border-b-2 border-indigo-400 inline-block">SUPPORT</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:support@esgcars.com" className="hover:text-indigo-300 transition-colors">support@esgcars.com</a></li>
            <li><Link to="/safety" className="hover:text-indigo-300 transition-colors">Safety Tips</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-300 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 pb-2 border-b-2 border-indigo-400 inline-block">CONNECT WITH US</h4>
          <div className="flex flex-col space-y-3 text-sm">
            <a href="#" className="flex items-center gap-2 hover:text-indigo-300"><Facebook size={16} /> Facebook</a>
            <a href="#" className="flex items-center gap-2 hover:text-indigo-300"><Instagram size={16} /> Instagram</a>
            <a href="#" className="flex items-center gap-2 hover:text-indigo-300"><Linkedin size={16} /> LinkedIn</a>
            <a href="#" className="flex items-center gap-2 hover:text-indigo-300"><Twitter size={16} /> Twitter</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 pb-2 border-b-2 border-indigo-400 inline-block">OUR APP</h4>
          <p className="text-sm mb-4">Download the app for the best experience.</p>
          <div className="flex gap-4">
            <img src="https://placehold.co/120x40?text=App+Store" alt="App Store" className="rounded cursor-pointer h-10" />
            <img src="https://placehold.co/120x40?text=Google+Play" alt="Google Play" className="rounded cursor-pointer h-10" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-indigo-900 text-center text-xs text-indigo-300">
        <p>© {new Date().getFullYear()} ESGCARS. All rights reserved. Powered by Early Sunrise Guide.</p>
      </div>
    </footer>
  );
};

export default Footer;
