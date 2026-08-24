import { motion } from 'framer-motion';

export const CategoryCard = ({
  title,
  subtitle,
  icon,
  image,
  buttonText,
  buttonBg = 'bg-[#0a3a22]',
  gradientClass = 'from-[#18a465] to-[#0c5936]',
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`rounded-2xl overflow-hidden relative shadow-md cursor-pointer select-none bg-gradient-to-b ${gradientClass} flex flex-col justify-between p-2 h-[235px] transition-all`}
    >
      {/* Top Icon & Text */}
      <div className="flex flex-col items-center text-center pt-1">
        <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center mb-1 bg-white/10 shadow-xs">
          <i className={`${icon} text-white text-xs`}></i>
        </div>
        <h3 className="text-white font-extrabold text-[10.5px] leading-tight tracking-tight uppercase">
          {title}
        </h3>
        <p className="text-white/90 text-[8px] leading-tight mt-0.5 whitespace-pre-line px-0.5 font-medium">
          {subtitle}
        </p>
      </div>

      {/* Middle Arched Image */}
      <div className="w-full h-28 rounded-t-[32px] overflow-hidden my-1 shadow-xs bg-black/20">
        <img
          alt={title}
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Bottom Button */}
      <div>
        <button
          className={`w-full ${buttonBg} text-white rounded-full py-1.5 text-[8.5px] font-bold flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95 cursor-pointer`}
        >
          <span>{buttonText}</span>
          <i className="fa-solid fa-arrow-right text-[7.5px]"></i>
        </button>
      </div>
    </motion.div>
  );
};
