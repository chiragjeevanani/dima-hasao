import { createContext, useContext, useState } from 'react';
import { PLACES_DATA, TRANSPORTS_DATA } from '../data/tourismData';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  // Authentication State: defaults to false so demo starts on Login Screen
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem('dima_user');
    return saved ? JSON.parse(saved) : { name: 'Guest', phone: '', isLoggedIn: false };
  });

  // Selected Trip Details
  const [selectedPlaceId, setSelectedPlaceId] = useState('1');
  const [selectedTransportId, setSelectedTransportId] = useState('auto');
  const [pickupLocation, setPickupLocation] = useState('Haflong Station');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Favorites
  const [favorites, setFavorites] = useState(['1']);

  // Bookings list
  const [bookings, setBookings] = useState([
    {
      id: 'DH-BK-8902',
      placeId: '1',
      placeName: 'I LOVE DIMA HASAO',
      pickup: 'Haflong Station',
      transport: 'Auto',
      fare: 150,
      date: 'Today, 4:30 PM',
      status: 'Confirmed',
      driverName: 'Ramen Dimasa',
      driverPhone: '+91 94350 12345',
      vehicleNo: 'AS-09-A-4821',
      otp: '7412'
    }
  ]);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Active Place & Transport Objects
  const activePlace = PLACES_DATA.find(p => p.id === selectedPlaceId) || PLACES_DATA[0];
  const activeTransport = TRANSPORTS_DATA.find(t => t.id === selectedTransportId) || TRANSPORTS_DATA[1];

  const showToast = (msg, duration = 3000) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  const toggleFavorite = (placeId) => {
    setFavorites(prev => {
      const exists = prev.includes(placeId);
      const updated = exists ? prev.filter(id => id !== placeId) : [...prev, placeId];
      showToast(exists ? 'Removed from favorites' : 'Added to favorites ❤️');
      return updated;
    });
  };

  const login = (phone) => {
    const newUser = { name: 'Dima Explorer', phone: phone || '+91 98765 43210', isLoggedIn: true };
    setUser(newUser);
    sessionStorage.setItem('dima_user', JSON.stringify(newUser));
    showToast('Welcome to Dima Hasao! 🌿');
  };

  const logout = () => {
    setUser({ name: 'Guest', phone: '', isLoggedIn: false });
    sessionStorage.removeItem('dima_user');
    showToast('Logged out successfully');
  };

  const createBooking = () => {
    const newId = `DH-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: newId,
      placeId: activePlace.id,
      placeName: activePlace.name,
      pickup: pickupLocation,
      transport: activeTransport.name,
      fare: activeTransport.fare,
      date: 'Just now',
      status: 'Confirmed',
      driverName: 'Haflong Express Partner',
      driverPhone: '+91 94351 98765',
      vehicleNo: activeTransport.id === 'bike' ? 'AS-09-B-1089' : activeTransport.id === 'cab' ? 'AS-09-C-9921' : 'AS-09-A-5420',
      otp: Math.floor(1000 + Math.random() * 9000).toString(),
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  return (
    <BookingContext.Provider
      value={{
        user,
        login,
        logout,
        selectedPlaceId,
        setSelectedPlaceId,
        selectedTransportId,
        setSelectedTransportId,
        pickupLocation,
        setPickupLocation,
        paymentMethod,
        setPaymentMethod,
        activePlace,
        activeTransport,
        favorites,
        toggleFavorite,
        bookings,
        createBooking,
        searchQuery,
        setSearchQuery,
        isNotificationsOpen,
        setIsNotificationsOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
