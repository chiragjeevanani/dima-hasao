import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

import { LoginScreen } from '../pages/LoginScreen';
import { HomeScreen } from '../pages/HomeScreen';
import { TouristPlacesList } from '../pages/TouristPlacesList';
import { TouristPlaceDetail } from '../pages/TouristPlaceDetail';
import { RideBookingScreen } from '../pages/RideBookingScreen';
import { MyBookingsScreen } from '../pages/MyBookingsScreen';
import { ProfileScreen } from '../pages/ProfileScreen';
import { MoreScreen } from '../pages/MoreScreen';
import { BottomNav } from '../components/layout/BottomNav';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0.9 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.12, ease: 'easeOut' }}
    className="w-full flex-1 flex flex-col"
  >
    {children}
  </motion.div>
);

export const UserRoutes = () => {
  const location = useLocation();
  const { user } = useBooking();

  // Hide bottom nav on login and booking screens
  const showBottomNav = user.isLoggedIn && location.pathname !== '/login' && location.pathname !== '/book-ride';

  return (
    <div className="w-full flex-1 flex flex-col relative">
      {/* Route Content */}
      <div className="flex-1 w-full flex flex-col">
        <Routes location={location} key={location.pathname}>
          {/* Default demo entrypoint: If not logged in, show Login Screen */}
          <Route
            path="/login"
            element={
              <PageWrapper>
                <LoginScreen />
              </PageWrapper>
            }
          />

          <Route
            path="/"
            element={
              user.isLoggedIn ? (
                <PageWrapper>
                  <HomeScreen />
                </PageWrapper>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/home"
            element={
              <PageWrapper>
                <HomeScreen />
              </PageWrapper>
            }
          />

          <Route
            path="/places"
            element={
              <PageWrapper>
                <TouristPlacesList />
              </PageWrapper>
            }
          />
          <Route
            path="/places/:id"
            element={
              <PageWrapper>
                <TouristPlaceDetail />
              </PageWrapper>
            }
          />
          <Route
            path="/book-ride"
            element={
              <PageWrapper>
                <RideBookingScreen />
              </PageWrapper>
            }
          />
          <Route
            path="/bookings"
            element={
              <PageWrapper>
                <MyBookingsScreen />
              </PageWrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <PageWrapper>
                <ProfileScreen />
              </PageWrapper>
            }
          />
          <Route
            path="/more"
            element={
              <PageWrapper>
                <MoreScreen />
              </PageWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Persistent Bottom Nav (Mounted only when logged in) */}
      {showBottomNav && <BottomNav />}
    </div>
  );
};
