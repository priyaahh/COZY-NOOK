import React, { useState } from 'react';

const HoverCard = ({
  image,
  title,
  description,
  revealTitle,
  revealContent,
  price,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 h-96 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isHovered ? 'rotate-y-180' : ''
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 backface-hidden rounded-[16px] overflow-hidden shadow-lg border border-cozy-rosy/20 bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-5 bg-white h-40 flex flex-col justify-between relative z-10 border-t border-cozy-rosy/10">
            <div>
              {category && (
                <span className="text-[0.7rem] font-sans font-medium text-cozy-dark uppercase tracking-wider bg-cozy-beige px-2 py-1 rounded-full inline-block mb-2">
                  {category}
                </span>
              )}
              <h3 className="text-xl font-serif font-semibold text-cozy-dark mt-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-sm text-cozy-dark/80 mt-2 line-clamp-2 font-sans font-light">
                {description}
              </p>
            </div>
            {price && (
              <span className="text-lg font-serif font-semibold text-cozy-rosy">
                {price}
              </span>
            )}
          </div>

          {/* Hover Hint */}
          <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full p-2 text-center shadow-sm z-20 transition-opacity opacity-80">
            <span className="text-white flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </span>
          </div>
        </div>

        <div
          className="absolute inset-0 backface-hidden rounded-[16px] overflow-hidden shadow-[0_10px_40px_rgba(205,97,132,0.1)] rotate-y-180 bg-cozy-beige border border-cozy-rosy/30"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Aesthetic Back Face */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

          <div className="absolute inset-x-2 inset-y-2 border border-cozy-rosy/20 rounded-[12px] opacity-60"></div>

          {/* Content with Elegant Effect */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
            {revealTitle && (
              <h3 className="text-2xl font-serif font-semibold text-cozy-dark mb-4 border-b border-cozy-rosy/30 pb-3">
                <span className="font-script text-[1.4em] font-normal text-cozy-rosy mr-1">R</span>eveal
              </h3>
            )}
            <div className="text-cozy-dark text-sm leading-relaxed space-y-3 font-sans font-light mt-2">
              {revealContent}
            </div>

            {/* Button */}
            <button className="mt-8 px-8 py-2.5 bg-cozy-dark hover:bg-cozy-moss text-cozy-gold rounded-[30px] font-serif font-semibold transition-all duration-300 shadow-sm text-lg tracking-wide border-none">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
