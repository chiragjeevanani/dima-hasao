import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'framer-motion';

export const LoginScreen = () => {
  const [phone, setPhone] = useState('+91 98765 43210');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('dima2026');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [authMode, setAuthMode] = useState('otp'); // 'otp', 'password'
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, showToast } = useBooking();
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone) {
      showToast('Please enter your phone number');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpSent(true);
      setOtp('7412');
      showToast('OTP sent! Demo OTP: 7412 📱');
    }, 600);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      showToast('Please enter the 4-digit OTP');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login(phone || '+91 98765 43210');
      showToast(isSignUp ? '✨ Account created! Welcome to Dima Hasao!' : '✨ Welcome back!');
      navigate('/');
    }, 500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (authMode === 'otp') {
      if (!isOtpSent) {
        handleSendOtp(e);
      } else {
        handleVerifyOtp(e);
      }
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      login(phone || '+91 98765 43210');
      showToast(isSignUp ? '✨ Account created! Welcome to Dima Hasao!' : '✨ Welcome back!');
      setIsLoading(false);
      navigate('/');
    }, 600);
  };

  const handleSocialLogin = (provider) => {
    showToast(`Connecting to ${provider}...`);
    setTimeout(() => {
      login('+91 98765 43210');
      navigate('/');
    }, 700);
  };

  const handleForgotPassword = () => {
    showToast('🔑 Password reset OTP sent to your registered number.');
  };

  const handleGuestLogin = () => {
    login('Guest Explorer');
    showToast('🌿 Exploring Dima Hasao as Guest');
    navigate('/');
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-dvh min-h-dvh max-h-dvh mx-auto overflow-hidden shadow-2xl flex flex-col justify-between select-none p-2.5 sm:p-3 bg-[#04190c]"
    >
      {/* 100% Full-bleed Continuous Background with /updated.png */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src="/updated.png"
          alt="Dima Hasao Heritage Gate"
          className="w-full h-full object-cover object-top"
        />

        {/* Top Sky Overlay for Typography Crispness */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/20 via-white/5 to-transparent z-10" />

        {/* Soft Ambient Vignette behind bottom login card */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 via-black/15 to-transparent z-10" />
      </div>

      {/* Top Header: Official Seal & Typography (Matching Reference) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="pt-1 text-center relative z-20 flex flex-col items-center px-2"
      >
        {/* Official Tourism Seal with Falcon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] mb-1"
        >
          <img
            alt="Dima Hasao Tourism Logo"
            className="w-full h-full object-contain"
            src="/logo.png"
          />
        </motion.div>

        {/* JUTHAI Header */}
        <h1 className="font-playfair font-black text-2xl sm:text-[28px] tracking-wider text-[#062c14] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] leading-none mt-0.5">
          JUTHAI
        </h1>

        {/* —• WELCOME TO •— */}
        <div className="flex items-center justify-center gap-1.5 my-0.5">
          <div className="h-[1.5px] bg-[#062c14] w-6"></div>
          <span className="text-[8.5px] sm:text-[9px] font-black tracking-[0.25em] text-[#062c14] uppercase">
            • WELCOME TO •
          </span>
          <div className="h-[1.5px] bg-[#062c14] w-6"></div>
        </div>

        {/* DIMA HASAO */}
        <h2 className="font-montserrat font-black text-lg sm:text-xl text-[#062c14] tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          DIMA HASAO
        </h2>
      </motion.div>

      {/* Heritage Gate Viewing Space */}
      <div className="flex-1 min-h-[40px] pointer-events-none" />

      {/* Bottom Login / Sign Up Card (Matching Reference Image) */}
      <div className="relative z-20 w-full max-w-[390px] mx-auto pb-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#051f11]/96 backdrop-blur-md border-2 border-[#caa83e] rounded-[22px] p-3.5 sm:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          {/* Leaf flourishes & Card Title */}
          <div className="flex items-center justify-center space-x-2 mb-2.5 relative z-10">
            <i className="fa-solid fa-leaf text-[#caa83e] text-[11px] transform -scale-x-100"></i>
            <h3 className="text-[#caa83e] font-extrabold tracking-wider text-[11px] uppercase font-cinzel">
              {isSignUp ? 'CREATE YOUR ACCOUNT' : 'LOGIN TO YOUR ACCOUNT'}
            </h3>
            <i className="fa-solid fa-leaf text-[#caa83e] text-[11px]"></i>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-2 relative z-10">
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="name-field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user text-[#caa83e] text-[11px]"></i>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="block w-full pl-8 pr-3 py-1.5 border border-[#caa83e]/50 rounded-xl bg-[#02130a] text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#caa83e] text-xs transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phone Number Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fa-solid fa-phone text-[#caa83e] text-[11px]"></i>
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                disabled={isOtpSent}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="block w-full pl-8 pr-3 py-1.5 border border-[#caa83e]/50 rounded-xl bg-[#02130a] text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#caa83e] text-xs transition-all disabled:opacity-75"
              />
              {isOtpSent && (
                <button
                  type="button"
                  onClick={() => setIsOtpSent(false)}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#caa83e] text-[10px] hover:underline cursor-pointer"
                >
                  Edit
                </button>
              )}
            </div>

            {/* OTP Input (Shown when OTP sent in OTP mode) */}
            {authMode === 'otp' && isOtpSent && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-shield-halved text-[#caa83e] text-[11px]"></i>
                  </div>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    maxLength={4}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 4-Digit OTP"
                    className="block w-full pl-8 pr-3 py-1.5 border border-[#caa83e] rounded-xl bg-[#02130a] text-amber-300 font-mono font-bold tracking-widest text-center focus:outline-none focus:ring-1 focus:ring-[#caa83e] text-sm transition-all"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] px-1">
                  <span className="text-amber-200/80">Demo Code: 7412</span>
                  <button
                    type="button"
                    onClick={() => {
                      setOtp('7412');
                      showToast('OTP resent: 7412');
                    }}
                    className="text-[#caa83e] hover:underline cursor-pointer font-semibold"
                  >
                    Resend OTP
                  </button>
                </div>
              </motion.div>
            )}

            {/* Password Input (Shown in password mode) */}
            {authMode === 'password' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-lock text-[#caa83e] text-[11px]"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="block w-full pl-8 pr-8 py-1.5 border border-[#caa83e]/50 rounded-xl bg-[#02130a] text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#caa83e] text-xs transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-[#caa83e] transition-colors cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-xs`}></i>
                </button>
              </div>
            )}

            {/* Mode Switcher */}
            <div className="flex justify-between items-center text-[10.5px]">
              <button
                type="button"
                onClick={() => {
                  setAuthMode((prev) => (prev === 'otp' ? 'password' : 'otp'));
                  setIsOtpSent(false);
                }}
                className="text-[#caa83e] font-medium hover:text-amber-200 transition-colors cursor-pointer"
              >
                {authMode === 'otp' ? 'Login with Password' : 'Login with OTP'}
              </button>

              {authMode === 'password' && !isSignUp && (
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[#caa83e] font-medium hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Forgot?
                </button>
              )}
            </div>

            {/* LOGIN / GET OTP Button */}
            <motion.button
              whileHover={{ scale: 1.02, filter: 'brightness(1.06)' }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-2 px-4 rounded-xl shadow-md text-xs font-black text-black bg-[#e5b33b] hover:bg-[#efc04c] transition-all cursor-pointer uppercase tracking-wider"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <span>
                  {authMode === 'otp'
                    ? !isOtpSent
                      ? 'GET OTP'
                      : 'VERIFY & EXPLORE'
                    : isSignUp
                    ? 'SIGN UP & EXPLORE'
                    : 'LOGIN'}
                </span>
              )}
            </motion.button>
          </form>

          {/* Social Divider */}
          <div className="mt-2.5 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#caa83e]/40"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-[#051f11] text-[#caa83e] font-semibold tracking-wide flex items-center space-x-1 text-[8.5px] uppercase">
                  <span className="w-1 h-1 rounded-full bg-[#caa83e]"></span>
                  <span>OR CONTINUE WITH</span>
                  <span className="w-1 h-1 rounded-full bg-[#caa83e]"></span>
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-2 flex justify-center space-x-3">
              {/* Google */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleSocialLogin('Google')}
                type="button"
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer border border-gray-200 p-1"
                aria-label="Login with Google"
              >
                <img
                  alt="Google"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvLeqN13rlXv-44xRAQ-nGDsa9Tzl8-nZnA4mOmR6S_UXReRXl3VJPkszskBAfqg_VTL7msfRCXQX9LF1AuM6fvYQ9soNvATpm6Lv-40gMq4HLAey6hv0NHTdgHq6FWkTC0V7uEu03rWOHbcg0QdUyF5iF05n6dLDmYN25g8ZoFotl1lxprPrQqmCs1i_h5DlhvxV4tBZdS0k8VOgcXX6dTvH1U5CxjOyBtHjKUhLKOnV4RX9d0Clc"
                />
              </motion.button>

              {/* Facebook */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
                className="w-7 h-7 bg-[#1877F2] rounded-full flex items-center justify-center shadow-md cursor-pointer text-white"
                aria-label="Login with Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </motion.button>

              {/* Apple */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleSocialLogin('Apple')}
                type="button"
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer border border-gray-200 text-black"
                aria-label="Login with Apple"
              >
                <i className="fa-brands fa-apple text-xs pb-0.5"></i>
              </motion.button>
            </div>

            {/* Toggle Sign Up / Login */}
            <div className="mt-2 text-center text-[10.5px] text-gray-200">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-bold text-[#caa83e] hover:text-amber-200 underline transition-colors cursor-pointer ml-0.5"
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>
            </div>

            {/* Quick Guest Bypass */}
            <div className="mt-0.5 text-center">
              <motion.button
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={handleGuestLogin}
                className="text-[10px] text-emerald-300 hover:text-white transition-colors cursor-pointer font-semibold inline-flex items-center gap-1"
              >
                <span>Continue as Guest Explorer →</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};


