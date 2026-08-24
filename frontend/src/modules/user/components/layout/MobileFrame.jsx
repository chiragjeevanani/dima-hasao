import { useBooking } from '../../context/BookingContext';
import { NotificationsDrawer } from '../common/NotificationsDrawer';
import { AnimatePresence, motion } from 'framer-motion';

export const MobileFrame = ({ children }) => {
  const { toastMessage } = useBooking();

  return (
    <div className="min-h-dvh w-full bg-[#f4ede2] flex justify-center selection:bg-amber-400 selection:text-black">
      {/* Main Responsive Mobile View Container without simulated phone frames/bezels */}
      <div className="w-full max-w-[430px] min-h-dvh flex flex-col relative bg-[#fdfbf7] shadow-sm">
        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col relative bg-[#fdfbf7]">
          {children}
        </div>

        {/* Global Toast Alert Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-16 left-4 right-4 max-w-sm mx-auto z-[999] pointer-events-none flex justify-center"
            >
              <div className="bg-slate-900/95 text-amber-300 text-xs font-medium px-4 py-2 rounded-full shadow-xl backdrop-blur-md border border-amber-400/30 flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
                <span>{toastMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notifications Drawer (Bell icon action) */}
        <NotificationsDrawer />
      </div>
    </div>
  );
};
