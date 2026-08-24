import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';

export const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, showToast } = useBooking();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault();
    login(phone || '+91 98765 43210');
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    showToast(`Logging in with ${provider}...`);
    setTimeout(() => {
      login('+91 98765 43210');
      navigate('/');
    }, 800);
  };

  const handleForgotPassword = () => {
    showToast('🔑 Password reset OTP sent to your registered phone number.');
  };

  return (
    <main
      className="relative w-full h-[850px] mx-auto overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXaCppCAWOTw7SSjshaeIT4q9Vk0sB5Tr17OoPDuE5bf0M4Z6M3i_0R44YXYi1zVklA0SUNaOaO42Eh0hqM_PEI_T_amXdisJpNfS1A-TivdXkWbTBux83Fk9AVABTFh1VBJGpWMtMQTuQBA_6meYQYFBLjTLtw2gaMNfUVrEQLsFJY42tJ1O-N7vVOLbCcHjo5YJftD2kg_GRjfROfbeTe19eGQsss-baNDmi_I1W-lpjDNFIKeseDlQr2vZ9wVP0EQ')"
      }}
    >
      {/* Top section overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/60 pointer-events-none" />

      {/* Header section */}
      <div className="pt-8 text-center px-4 relative z-10">
        <div className="inline-block bg-[#0a2e12]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/40 mb-2 shadow-lg">
          <span className="text-xs font-bold text-amber-300 tracking-widest flex items-center gap-1.5">
            <i className="fa-solid fa-leaf text-[10px]"></i>
            JHUTHAI DIMA HASAO
            <i className="fa-solid fa-leaf text-[10px]"></i>
          </span>
        </div>
      </div>

      {/* Login Card Container */}
      <div className="p-4 relative z-10 mb-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0a2e12] border border-[#d4af37] rounded-3xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Subtle leaf pattern background overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* Card Title */}
          <div className="flex items-center justify-center space-x-3 mb-5 relative z-10">
            <i className="fa-solid fa-leaf text-[#d4af37] text-xs transform -scale-x-100"></i>
            <h3 className="text-[#d4af37] font-semibold tracking-wider text-xs sm:text-sm uppercase">
              {isSignUp ? 'CREATE YOUR ACCOUNT' : 'LOGIN TO YOUR ACCOUNT'}
            </h3>
            <i className="fa-solid fa-leaf text-[#d4af37] text-xs"></i>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-3.5 relative z-10">
            {/* Phone Number Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <i className="fa-solid fa-phone text-[#d4af37] text-sm"></i>
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number (e.g. 98765 43210)"
                className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-[#d4af37]/50 rounded-xl bg-[#061c0a] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-xs sm:text-sm transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <i className="fa-solid fa-lock text-[#d4af37] text-sm"></i>
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full pl-10 pr-10 py-2.5 sm:py-3 border border-[#d4af37]/50 rounded-xl bg-[#061c0a] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-xs sm:text-sm transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-300 cursor-pointer"
              >
                <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-xs`}></i>
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end pt-0.5">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[#d4af37] text-xs font-medium hover:text-[#e8c558] transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-black bg-gradient-to-r from-[#b38f2a] via-[#e8c558] to-[#b38f2a] hover:from-[#e8c558] hover:to-[#d4af37] transition-all duration-300 cursor-pointer"
            >
              {isSignUp ? 'SIGN UP & EXPLORE' : 'LOGIN'}
            </motion.button>
          </form>

          {/* Social Login & Footer */}
          <div className="mt-4 relative z-10">
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d4af37]/30"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-[#0a2e12] text-[#d4af37] font-medium tracking-wide flex items-center space-x-1.5 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  <span>OR CONTINUE WITH</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-4 flex justify-center space-x-4">
              {/* Google */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocialLogin('Google')}
                type="button"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <img
                  alt="Google"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvLeqN13rlXv-44xRAQ-nGDsa9Tzl8-nZnA4mOmR6S_UXReRXl3VJPkszskBAfqg_VTL7msfRCXQX9LF1AuM6fvYQ9soNvATpm6Lv-40gMq4HLAey6hv0NHTdgHq6FWkTC0V7uEu03rWOHbcg0QdUyF5iF05n6dLDmYN25g8ZoFotl1lxprPrQqmCs1i_h5DlhvxV4tBZdS0k8VOgcXX6dTvH1U5CxjOyBtHjKUhLKOnV4RX9d0Clc"
                />
              </motion.button>
              {/* Facebook */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center shadow-md hover:bg-[#166fe5] transition-colors cursor-pointer"
              >
                <i className="fa-brands fa-facebook-f text-white text-base"></i>
              </motion.button>
              {/* Apple */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocialLogin('Apple')}
                type="button"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-md hover:bg-gray-900 transition-colors cursor-pointer"
              >
                <i className="fa-brands fa-apple text-white text-base pb-0.5"></i>
              </motion.button>
            </div>

            {/* Toggle Sign Up / In */}
            <div className="mt-4 text-center text-xs text-gray-300">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-semibold text-[#d4af37] hover:text-[#e8c558] underline transition-colors cursor-pointer"
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>
            </div>

            {/* Quick Guest Bypass */}
            <div className="mt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  login('Guest');
                  navigate('/');
                }}
                className="text-[11px] text-emerald-300 hover:text-white transition-colors cursor-pointer"
              >
                Continue as Guest Explorer →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
