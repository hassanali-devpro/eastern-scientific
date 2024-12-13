import React from 'react';
import PropTypes from 'prop-types';

const Card = React.memo(({ img, title, text }) => {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden w-full flex flex-col bg-[#ADC8EB]">
      <div className="w-full h-44 overflow-hidden">
        <img
          src={img}
          alt={title || 'Card image'}
          className="w-full hover:scale-110 transition-all duration-200"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        {title && <h1 className="text-[#042182] text-xl font-semibold">{title}</h1>}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
});

// Set the displayName
Card.displayName = 'Card';

Card.propTypes = {
  img: PropTypes.string.isRequired, // URL for the image is required
  title: PropTypes.string, // Title can be optional
  text: PropTypes.string, // Text can also be optional
};

Card.defaultProps = {
  title: 'Default Title', // Default value for title
  text: '', // Default empty string for text
};

export default Card;

