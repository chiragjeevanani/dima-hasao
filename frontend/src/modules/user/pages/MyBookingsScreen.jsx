import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { Header } from '../components/layout/Header';
import { PatternDivider } from '../components/layout/PatternDivider';
import { motion } from 'framer-motion';

export const MyBookingsScreen = () => {
  const { bookings, showToast } = useBooking();
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF6ED] text-gray-800 antialiased min-h-screen pb-20 relative font-poppins">
      <Header
        title="MY BOOKINGS"
        subtitle="Manage your rides & stays"
        showBack={true}
        rightAction="none"
      />
      <PatternDivider variant="green-gold" />

      <main className="p-4 space-y-4">
        {bookings.length > 0 ? (
          bookings.map((b) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5DDC3] space-y-3"
            >
              <div className="flex justify-between items-start border-b border-gray-100 pb-2.5">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    {b.date}
                  </span>
                  <h3 className="font-bold text-sm text-gray-900">{b.placeName}</h3>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {b.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 bg-[#F1EBD7]/50 p-2.5 rounded-xl border border-[#E5DDC3]/60">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Pickup:</span>
                  <span className="font-semibold text-gray-900">{b.pickup}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Transport:</span>
                  <span className="font-semibold text-emerald-800">{b.transport} ({b.vehicleNo})</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Driver:</span>
                  <span className="font-medium text-gray-800">{b.driverName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Start OTP:</span>
                  <span className="font-mono font-bold text-amber-700">{b.otp}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-1">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase">Total Fare:</span>
                  <span className="text-sm font-bold text-gray-900 ml-1.5">₹{b.fare}</span>
                </div>
                <button
                  onClick={() => showToast(`Connecting to driver at ${b.driverPhone}`)}
                  className="bg-[#0a3a22] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <i className="fa-solid fa-phone text-[10px]"></i>
                  <span>Call Driver</span>
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DDC3] p-6">
            <i className="fa-solid fa-calendar-xmark text-4xl text-gray-300 mb-3"></i>
            <h3 className="font-bold text-gray-800 text-sm">No Active Bookings</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">You haven't booked any rides or tours yet.</p>
            <button
              onClick={() => navigate('/places')}
              className="bg-[#0a3a22] text-white text-xs font-bold px-4 py-2 rounded-xl shadow hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Explore Attractions
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
