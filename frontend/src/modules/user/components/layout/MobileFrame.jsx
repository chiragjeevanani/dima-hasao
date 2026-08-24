import { useState, useEffect } from 'react';
import { useBooking } from '../../context/BookingContext';
import { NotificationsDrawer } from '../common/NotificationsDrawer';
import { AnimatePresence, motion } from 'framer-motion';

export const MobileFrame = ({ children }) => {
  const [time, setTime] = useState('9:41');
  const [isFullWidth, setIsFullWidth] = useState(false);
  const { toastMessage } = useBooking();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start md:py-6 md:px-4 selection:bg-amber-400 selection:text-black">
      {/* Desktop Helper Toggle */}
      <aside aria-label="Device view switcher" className="hidden md:flex items-center gap-3 mb-3 text-xs text-emerald-200/80 bg-emerald-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-800/40 shadow-lg">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Dima Hasao Tourism Mobile App
        </span>
        <span className="text-emerald-600">|</span>
        <button
          onClick={() => setIsFullWidth(!isFullWidth)}
          className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
        >
          {isFullWidth ? '📱 Switch to Phone Frame' : '🖥️ Switch to Expanded View'}
        </button>
      </aside>

      {/* Main Container */}
      <div
        className={`w-full transition-all duration-300 relative bg-[#fdfbf7] md:rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ${
          isFullWidth ? 'max-w-xl min-h-[90vh]' : 'max-w-[420px] min-h-[850px] max-h-[920px]'
        } md:border-[8px] md:border-slate-800`}
      >
        {/* Mobile Status Bar (Simulated on desktop frame) */}
        <div className="hidden md:flex justify-between items-center px-6 pt-3 pb-1 text-xs font-semibold select-none z-50 text-slate-800/80 bg-transparent">
          <span>{time}</span>
          <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto -mt-1 opacity-90"></div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-battery-full text-sm"></i>
          </div>
        </div>

        {/* Scrollable Viewport */}
        <div className="flex-1 w-full overflow-y-auto hide-scrollbar flex flex-col relative bg-[#fdfbf7]">
          {children}
        </div>

        {/* Toast Alert Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 left-4 right-4 z-[999] pointer-events-none flex justify-center"
            >
              <div className="bg-slate-900/95 text-amber-300 text-xs font-medium px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md border border-amber-400/30 flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
                <span>{toastMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notifications Drawer (Bell icon only) */}
        <NotificationsDrawer />
      </div>
    </div>
  );
};
