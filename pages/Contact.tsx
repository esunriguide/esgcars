
import React from 'react';
import { Mail, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-brand-purple mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            ESGCars customer support team is always ready to answer your questions and provide all the necessary assistance.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-brand-purple">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Us</p>
                <a href="mailto:support@esgcars.com.ng" className="text-gray-800 font-semibold hover:text-brand-purple">support@esgcars.com.ng</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-brand-purple">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Us</p>
                <p className="text-gray-800 font-semibold">+234 809 748 9596</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
            <h3 className="text-brand-purple font-bold mb-4 flex items-center gap-2">
              <HelpCircle size={20} /> Need quick answers?
            </h3>
            <p className="text-sm text-gray-600 mb-6">Check our frequently asked questions for instant help.</p>
            <Link to="/faq" className="inline-block bg-brand-purple text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all">
              Browse FAQs
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" placeholder="How can we help you today?"></textarea>
            </div>
            <button className="w-full bg-brand-purple text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
