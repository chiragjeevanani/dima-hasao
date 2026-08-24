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
      className={`rounded-2xl overflow-hidden relative shadow-xs cursor-pointer select-none bg-gradient-to-b ${gradientClass} flex flex-col justify-between p-1.5 h-[172px] transition-all`}
    >
      {/* Top Icon & Text */}
      <div className="flex flex-col items-center text-center pt-0.5">
        <div className="w-6 h-6 rounded-full border border-white/80 flex items-center justify-center mb-0.5 bg-white/10 shadow-xs">
          <i className={`${icon} text-white text-[10px]`}></i>
        </div>
        <h3 className="text-white font-extrabold text-[9.5px] leading-tight tracking-tight uppercase">
          {title}
        </h3>
        <p className="text-white/90 text-[7.5px] leading-tight mt-0.5 whitespace-pre-line px-0.5 font-medium">
          {subtitle}
        </p>
      </div>

      {/* Middle Arched Image */}
      <div className="w-full h-18 rounded-t-[22px] overflow-hidden my-0.5 shadow-xs bg-black/20">
        <img
          alt={title}
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Bottom Button */}
      <div>
        <button
          className={`w-full ${buttonBg} text-white rounded-full py-0.5 text-[8px] font-bold flex items-center justify-center gap-1 shadow-xs transition-all active:scale-95 cursor-pointer`}
        >
          <span>{buttonText}</span>
          <i className="fa-solid fa-arrow-right text-[7px]"></i>
        </button>
      </div>
    </motion.div>
  );
};
