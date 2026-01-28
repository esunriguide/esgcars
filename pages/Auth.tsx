
import React, { useState } from 'react';
import { Mail, Lock, User as UserIcon, ArrowLeft, Facebook, Eye, EyeOff, Check, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

type AuthView = 'login' | 'register' | 'forgot';

const Auth: React.FC<{ mode: 'login' | 'register' }> = ({ mode }) => {
  const [view, setView] = useState<AuthView>(mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      if (view === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate('/dashboard');
      } else if (view === 'register') {
        if (!agreedToTerms) throw new Error("You must agree to the rules.");
        
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: `${firstName} ${lastName}`.trim(),
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              role: 'user'
            }
          }
        });
        if (error) throw error;
        setMessage({ type: 'success', text: "Registration successful! Please check your email for confirmation." });
      } else if (view === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) throw error;
        setMessage({ type: 'success', text: "Password reset link sent! Check your email." });
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || "Authentication failed" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialAuth = async (provider: 'google' | 'facebook') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[420px] bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
        
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
            {message.type === 'success' ? <Check className="shrink-0 mt-0.5" size={18} /> : <AlertCircle className="shrink-0 mt-0.5" size={18} />}
            <span className="text-sm font-medium">{message.text}</span>
          </div>
        )}

        {view === 'forgot' ? (
          <div className="space-y-6">
            <button onClick={() => setView('login')} className="flex items-center gap-2 text-gray-500 hover:text-brand-purple transition-colors text-sm font-bold">
              <ArrowLeft size={16} /> Back to Login
            </button>
            <h2 className="text-2xl font-bold text-indigo-900">Forgot Password?</h2>
            <p className="text-sm text-gray-500">Enter your email address and we'll send you a link to reset your password.</p>
            <form onSubmit={handleAuth} className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#000033] text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </div>
        ) : view === 'register' ? (
          <div className="space-y-5">
            <p className="text-gray-500 text-sm">Register via email and phone</p>
            <form onSubmit={handleAuth} className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                required
              />
              
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-[10px] text-gray-400 -mt-2">Never disclose your ESGCARS password to anyone</p>

              <input 
                type="text" 
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                required
              />

              <input 
                type="text" 
                placeholder="Last name (optional)"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
              />

              <input 
                type="tel" 
                placeholder="Phone number (digits only)"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                required
              />

              <div className="flex items-center gap-2">
                <div 
                  onClick={() => setAgreedToTerms(!agreedToTerms)}
                  className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-all ${agreedToTerms ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-gray-300'}`}
                >
                  {agreedToTerms && <Check size={14} className="text-white" />}
                </div>
                <span className="text-[11px] font-bold text-[#000066]">
                  I agree with <Link to="/terms" className="underline hover:text-brand-purple">the rules</Link>
                </span>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#000055] text-white py-4 rounded-md font-bold text-lg hover:opacity-95 transition-all shadow-md active:scale-[0.98]"
              >
                {isSubmitting ? 'Registering...' : 'Sign in with your E-mail'}
              </button>
            </form>

            <div className="text-center text-xs pt-2">
              <span className="text-gray-500">Already have an account? </span>
              <button onClick={() => setView('login')} className="text-[#000088] font-black underline">Sign In</button>
            </div>

            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-x-0 h-px bg-gray-100"></div>
              <span className="relative bg-white px-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">or</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSocialAuth('google')}
                className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-md hover:bg-gray-50 transition-all font-bold text-sm text-gray-600"
              >
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                via Google
              </button>
              <button 
                onClick={() => handleSocialAuth('facebook')}
                className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-3 rounded-md hover:opacity-90 transition-all font-bold text-sm"
              >
                <Facebook size={16} fill="currentColor" />
                via Facebook
              </button>
            </div>
          </div>
        ) : (
          /* LOGIN VIEW */
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-indigo-900">Login</h2>
            <form onSubmit={handleAuth} className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                required
              />
              <div className="space-y-2">
                <input 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-brand-purple transition-all font-medium"
                  required
                />
                <div className="text-right">
                  <button type="button" onClick={() => setView('forgot')} className="text-xs font-bold text-brand-purple hover:underline">
                    Forgot password?
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#000033] text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-md active:scale-[0.98]"
              >
                {isSubmitting ? 'Logging in...' : 'Sign In'}
              </button>
            </form>

            <div className="text-center text-sm pt-4">
              <span className="text-gray-500">Don't have an account? </span>
              <button onClick={() => setView('register')} className="text-brand-purple font-bold hover:underline">Register</button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-0 h-px bg-gray-100"></div>
              <span className="relative bg-white px-4 text-xs text-gray-400">Social Login</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSocialAuth('google')}
                className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-md hover:bg-gray-50 transition-all font-bold text-sm text-gray-600"
              >
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                Google
              </button>
              <button 
                onClick={() => handleSocialAuth('facebook')}
                className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-3 rounded-md hover:opacity-90 transition-all font-bold text-sm"
              >
                <Facebook size={16} fill="currentColor" />
                Facebook
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
