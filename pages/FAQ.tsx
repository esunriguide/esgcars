
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-indigo-400" /> : <ChevronDown size={20} className="text-indigo-400" />}
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-50 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-brand-purple mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-500 text-center mb-12">Everything you need to know about ESGCARS.</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-400 inline-block pb-1">General Information</h2>
          <FAQItem 
            question="What is ESGCARS?" 
            answer="ESGCARS is a platform for selling new, foreign used (Tokunbo), and Nigerian used cars. We offer value by bundling documentation, insurance, and added benefits like fire extinguishers and trackers." 
          />
          <FAQItem 
            question="How do I contact support?" 
            answer="You can reach our customer support via email at support@esgcars.com.ng. We are available to help you with any issues regarding listings, payments, or documentation." 
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-400 inline-block pb-1">Buying & Selling</h2>
          <FAQItem 
            question="How do I buy a car on ESGCARS?" 
            answer="Select the vehicle you like, fill out a form, and your invoice will be generated and sent to you. Complete KYC and documentation, and we deliver your plate & insurance within 48 hours." 
          />
          <FAQItem 
            question="What benefits do I get when purchasing a new car?" 
            answer="With a new car purchase via ESGCARS, you get free comprehensive insurance, a free vehicle tracker, a free fire extinguisher, free plate number (if applicable), and free one-month servicing." 
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-400 inline-block pb-1">Payments & Insurance</h2>
          <FAQItem 
            question="Do I get comprehensive insurance?" 
            answer="Yes. For new and foreign used cars, we provide free comprehensive insurance. For Nigerian used cars, we offer mini-comprehensive insurance as part of the purchase bundle." 
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
