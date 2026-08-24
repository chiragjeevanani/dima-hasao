import { motion } from 'framer-motion';

export const CategoryCard = ({
  title,
  subtitle,
  icon,
  image,
  buttonText,
  buttonBg = 'bg-[#044e29]',
  gradientClass = 'bg-gradient-to-b from-[#10b981] via-[#059669] to-[#044e29]',
  topOverlayColor = 'from-[#059669]',
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`min-w-0 h-[245px] rounded-[22px] overflow-hidden relative shadow-lg cursor-pointer select-none ${gradientClass} flex flex-col justify-between transition-all`}
    >
      {/* Top Header Content (Icon, Title, Subtitle) */}
      <div className="relative z-10 flex flex-col items-center text-center pt-3.5 px-1.5">
        <div className="w-9 h-9 rounded-full border-2 border-white/90 flex items-center justify-center mb-1.5 bg-white/15 backdrop-blur-xs shadow-xs">
          <i className={`${icon} text-white text-sm drop-shadow-xs`}></i>
        </div>
        <h3 className="text-white font-extrabold text-[11px] leading-tight tracking-tight uppercase drop-shadow-xs">
          {title}
        </h3>
        <p className="text-white/90 text-[8.5px] leading-tight mt-0.5 whitespace-pre-line px-0.5 font-medium text-center drop-shadow-xs">
          {subtitle}
        </p>
      </div>

      {/* Middle Arched Image with Seamless Gradient Blending */}
      <div className="absolute inset-x-0 bottom-0 top-[35%] z-0 rounded-t-[36px] overflow-hidden">
        {/* The Base Photo */}
        <img
          alt={title}
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 8%, black 22%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 8%, black 22%, black 100%)'
          }}
        />

        {/* Top color feathering overlay to blend the photo sky into card gradient */}
        <div
          className={`absolute top-0 inset-x-0 h-16 bg-gradient-to-b ${topOverlayColor} via-${topOverlayColor.replace('from-', '')}/40 to-transparent pointer-events-none opacity-90`}
        />

        {/* Bottom vignette behind the button */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bottom Button Container */}
      <div className="relative z-10 px-2.5 pb-3">
        <button
          className={`w-full ${buttonBg} text-white rounded-full py-1.5 text-[9px] font-bold flex items-center justify-center gap-1 shadow-md transition-all active:scale-95 cursor-pointer border border-white/25`}
        >
          <span>{buttonText}</span>
          <i className="fa-solid fa-arrow-right text-[7.5px]"></i>
        </button>
      </div>
    </motion.div>
  );
};
