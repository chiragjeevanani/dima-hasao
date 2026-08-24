import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';

export const Header = ({
  title = 'TOURIST PLACES',
  subtitle = 'Explore the Beauty of Dima Hasao',
  showBack = true,
  rightAction = 'search', // 'search' | 'favorite' | 'none'
  placeId = null,
  onSearchClick,
  className = ''
}) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useBooking();
  const isFav = placeId ? favorites.includes(placeId) : false;

  return (
    <header className={`bg-[#0a3a2a] text-white px-4 py-3 sticky top-0 z-40 shadow-md ${className}`}>
      <div className="flex items-center justify-between gap-2">
        {/* Left: Back Button */}
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go Back"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center text-white text-base cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        ) : (
          <div className="w-9"></div>
        )}

        {/* Center: Title & Subtitle */}
        <div className="text-center flex-1 px-2">
          <h1 className="text-base sm:text-lg font-bold tracking-widest flex items-center justify-center gap-2 uppercase">
            <span className="text-amber-400 text-xs">
              <i className="fa-solid fa-leaf"></i>
            </span>
            <span className="truncate">{title}</span>
            <span className="text-amber-400 text-xs">
              <i className="fa-solid fa-leaf"></i>
            </span>
          </h1>
          {subtitle && (
            <p className="text-[11px] italic font-playfair text-amber-100/90 mt-0.5 truncate">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Action */}
        <div className="w-9 flex justify-end">
          {rightAction === 'search' && (
            <button
              onClick={onSearchClick || (() => navigate('/places'))}
              aria-label="Search"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center text-white text-base cursor-pointer"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          )}

          {rightAction === 'favorite' && placeId && (
            <button
              onClick={() => toggleFavorite(placeId)}
              aria-label="Toggle Favorite"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center text-white text-base cursor-pointer"
            >
              <i className={`fa-heart text-base ${isFav ? 'fa-solid text-red-500 scale-110' : 'fa-regular text-white'}`}></i>
            </button>
          )}

          {rightAction === 'none' && <div className="w-9"></div>}
        </div>
      </div>
    </header>
  );
};
