import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookingProvider } from './modules/user/context/BookingContext';
import { MobileFrame } from './modules/user/components/layout/MobileFrame';
import { UserRoutes } from './modules/user/routes/userRoutes';
import { SplashScreen } from './modules/user/components/common/SplashScreen';
import { ScrollToTop } from './modules/user/components/common/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <BookingProvider>
        {/* Animated Splash Screen Overlay */}
        <AnimatePresence mode="wait">
          {showSplash && (
            <SplashScreen onFinish={() => setShowSplash(false)} />
          )}
        </AnimatePresence>

        {/* Main Application */}
        <MobileFrame>
          <UserRoutes />
        </MobileFrame>
      </BookingProvider>
    </Router>
  );
}

export default App;
