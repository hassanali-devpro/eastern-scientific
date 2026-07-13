import React from "react";
import PropTypes from "prop-types";

const Card = React.memo(({ img, title, text }) => {
  // Responsive Typography
const titleStyle =
  "text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[24px] font-semibold text-[#042182] leading-tight";
  const paragraphStyle =
    "text-sm sm:text-base md:text-[17px] lg:text-lg xl:text-xl 2xl:text-2xl leading-7 xl:leading-9 text-gray-800";

  return (
    <div className="rounded-2xl shadow-xl overflow-hidden w-full h-full flex flex-col bg-[#ADC8EB]">
      {/* Image */}
      <div className="w-full h-52 2xl:h-[22rem] overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt={title || "Card image"}
          className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {title && (
          <h1 className={`${titleStyle} mb-3`}>
            {title}
          </h1>
        )}

        {text && (
          <p className={`${paragraphStyle} flex-grow`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
});

Card.displayName = "Card";

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  title: "Default Title",
  text: "",
};

export default Card;