import { BrowserRouter as Router } from 'react-router-dom';
import { BookingProvider } from './modules/user/context/BookingContext';
import { MobileFrame } from './modules/user/components/layout/MobileFrame';
import { UserRoutes } from './modules/user/routes/userRoutes';

function App() {
  return (
    <Router>
      <BookingProvider>
        <MobileFrame>
          <UserRoutes />
        </MobileFrame>
      </BookingProvider>
    </Router>
  );
}

export default App;
