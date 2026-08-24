import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { SearchBar } from '../components/common/SearchBar';
import { CategoryCard } from '../components/home/CategoryCard';
import { QuickLinksGrid } from '../components/home/QuickLinksGrid';
import { PromoBanner } from '../components/home/PromoBanner';
import { WhyVisitGrid } from '../components/home/WhyVisitGrid';
import { motion } from 'framer-motion';

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { setIsNotificationsOpen } = useBooking();

  return (
    <div className="text-gray-800 pb-20 relative bg-[#FDFBF7] min-h-screen">
      {/* BEGIN: Tall Grand Header Section (Matching Image Reference) */}
      <header
        className="relative w-full h-[340px] sm:h-[360px] overflow-hidden rounded-b-3xl shadow-sm"
        data-purpose="main-header"
      >
        {/* Heritage Gate Background Image - Complete Monument Visible */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Dima Hasao Heritage Gate"
            className="w-full h-full object-cover object-top"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAisXJyBuwvtu3RwaO56QvfH4gOMAxK-8JVUZ-5T_0OsStjONvhXG6zMD2BcQ9EuUDZzSwZ1zuTlnst7xFPkf7yeqgeiX3VnbAQCDxMW2TaiWgIYsBobvZ8uXui6Fcvjh4R-wR-ufkS7iR-bPyLVgH4KahVsxSpBN7-k0CRlOg_MUk31J_1PvunJ_78_6Ba54YPIva1RKzXP-ONbIL_3of7pf5SVRjfR30Jbd5I0XwlQfYmDGZIaGsB"
          />
          {/* Subtle gradient to keep typography crisp */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/20 to-black/20 pointer-events-none" />
        </div>

        {/* Top Bar Navigation Icons */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-20">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/more')}
            aria-label="Open Navigation Menu"
            className="w-9 h-9 bg-[#06381e] text-white rounded-full flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-xs hover:bg-[#094c2a] transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-bars text-sm"></i>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsNotificationsOpen(true)}
            aria-label="View Notifications"
            className="w-9 h-9 bg-[#06381e] text-white rounded-full flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-xs relative hover:bg-[#094c2a] transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-bell text-sm"></i>
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </motion.button>
        </div>

        {/* Main Header Typography & Logo Layout */}
        <div className="absolute top-8 left-3.5 right-3.5 z-10 flex items-center justify-center gap-3.5">
          {/* Official Round Seal Logo */}
          <div className="w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] rounded-full shadow-xl border-2 border-amber-400 overflow-hidden bg-white shrink-0">
            <img
              alt="Dima Hasao Tourism Seal"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpKxrrAMcqCtg37mOIMy8mnnPSo8mnfzA-MY5AedXF8YNQhVosR5R3-lX84Q6dcift5Cjgeb80xCIQAfBZdr2Z0TUrt63N04m_YREpwR6nNEvhau2t5w_m1TWqzMV2vv9rfXYXRLE3E0U6C2850nQo_Uf5zlnUiwI0Z_XpUW3GMVUUIksTboYKNEitTtDa_CBLJk2Kqdp3wjkeHiFjWQ5C5pMKE_7EFyBLWxOjGpWFCS8oTzC3YaFO"
            />
          </div>

          {/* Festive Typography Banner */}
          <div className="flex flex-col text-left drop-shadow-sm">
            {/* JHUTHAI! */}
            <div className="flex items-center font-black text-2xl sm:text-[28px] tracking-wide leading-none select-none">
              <span className="text-[#e53e3e]">J</span>
              <span className="text-[#dd6b20]">H</span>
              <span className="text-[#d69e2e]">U</span>
              <span className="text-[#38a169]">T</span>
              <span className="text-[#3182ce]">H</span>
              <span className="text-[#553c9a]">A</span>
              <span className="text-[#805ad5]">I</span>
              <span className="text-[#b83280]">!</span>
            </div>

            {/* WELCOME TO */}
            <div className="flex items-center gap-1.5 my-0.5">
              <div className="h-[1.5px] bg-[#06381e]/70 w-5"></div>
              <p className="text-[9px] sm:text-[9.5px] font-black tracking-widest text-[#06381e] uppercase">
                WELCOME TO
              </p>
              <div className="h-[1.5px] bg-[#06381e]/70 w-5"></div>
            </div>

            {/* DIMA HASAO */}
            <h1 className="font-montserrat text-2xl sm:text-[26px] font-black text-[#06381e] leading-none tracking-tight">
              DIMA HASAO
            </h1>

            {/* Subtitle */}
            <p className="text-[#06381e] font-serif font-semibold italic text-xs mt-0.5">
              Explore • Experience • Discover
            </p>
          </div>
        </div>
      </header>
      {/* END: Header Section */}

      {/* BEGIN: Search Bar (Overlapping) */}
      <SearchBar />
      {/* END: Search Bar */}

      {/* BEGIN: Main Content Area */}
      <main className="space-y-4 pt-3" data-purpose="main-content">
        {/* Primary 3 Categories Grid with Seamless Color Blending */}
        <div className="grid grid-cols-3 gap-2 px-3" data-purpose="primary-categories">
          <CategoryCard
            title="TOURIST PLACES"
            subtitle={`Explore the Beauty\nof Dima Hasao`}
            icon="fa-solid fa-location-dot"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDNCBOtk-v5CpAuzZ1kd7mndMkJZKKwMy00a2zicQ0HpEEfpw427eAibYCSi2nD2wHFUkrbD1pzwIzejGOFn5WqC6zu_oE1z2PO5Z2B1LMuzEvrGDcapXZ2xU8jST_VXGR9TxKd25HsrNfffLqEY_Xm1289lDT9d4F7I68sPPhKOmC33cLzcrcIo7RfCXTsf-KCLrE92u-ebldONSuUSfat64_5N4AFn8Z0bfjeYXSmC8Y2I5u8t3g1"
            buttonText="Explore Now"
            buttonBg="bg-[#044e29]"
            gradientClass="bg-gradient-to-b from-[#10b981] via-[#059669] to-[#044e29]"
            topOverlayColor="from-[#059669]"
            onClick={() => navigate('/places')}
          />

          <CategoryCard
            title="TAXI / AUTO"
            subtitle={`Book Your Ride,\nTravel with Ease`}
            icon="fa-solid fa-car"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJDblprWgYBvh1_FLMSBqIvOXSdwgS_fPcH_MyWvag50_LwhLZums5qzaDWSIT0HbG0SJMToG7JpPvejlX3Qy5bLkCG38QZIqu5mBcSGP2wl3HGzM_X0PCK0xdHmNkET-dGu7TRc-monu00rabiXzQRo3EhbHNOkDMNkXrPK1awEDEd4ZGfwJUS4cVNDcKYVkqKl3pjgKMkPrLtYQA-IL07hjQc-c-KZlD6NT-lo8WH27nCiKI8JN"
            buttonText="Book Now"
            buttonBg="bg-[#ea580c]"
            gradientClass="bg-gradient-to-b from-[#f59e0b] via-[#ea580c] to-[#c2410c]"
            topOverlayColor="from-[#ea580c]"
            onClick={() => navigate('/book-ride')}
          />

          <CategoryCard
            title="HOTELS"
            subtitle={`Comfortable Stays\nfor Every Journey`}
            icon="fa-solid fa-bed"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDu5Pbf3ToUuNDG3Ykr_oqb6a2-hh7vSE60pCjbagFjqrigh7ETKBYtUYP7bOC8sCPqF0oHQXdi1TbZ6LCZblOychxaZYt5SDhg9YBw8bMVPI1wmeURSYs_MNOhhGyoCRPAC9-VGTQdSfd8KZYlU0HzlecyFoFwn74vcZ8e1vWAXxYQSCHsoElObyZAiJJcMFxfV2a_b6cT4dn9fzfOO2k4ySEorPC6hLD-PnNLxB8w9sDFxhc1j9FU"
            buttonText="View Hotels"
            buttonBg="bg-[#6d28d9]"
            gradientClass="bg-gradient-to-b from-[#8b5cf6] via-[#6d28d9] to-[#4c1d95]"
            topOverlayColor="from-[#6d28d9]"
            onClick={() => navigate('/places/1')}
          />
        </div>

        {/* Quick Links (5 Columns) */}
        <QuickLinksGrid />

        {/* Promotional Banner */}
        <PromoBanner />

        {/* Why Visit Section (4 Columns) */}
        <WhyVisitGrid />
      </main>
      {/* END: Main Content Area */}
    </div>
  );
};
