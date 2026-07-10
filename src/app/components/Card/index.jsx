import React from 'react';
import PropTypes from 'prop-types';

const Card = React.memo(({ img, title, text }) => {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden w-full h-full flex flex-col bg-[#ADC8EB]">

      {/* Image wrapper */}
      <div className="w-full h-48 2xl:h-[15rem] overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt={title || 'Card image'}
          className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-200"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {title && (
          <h1 className="text-[#042182] text-xl font-semibold mb-2">
            {title}
          </h1>
        )}

        {text && (
          <p className="flex-grow">
            {text}
          </p>
        )}
      </div>
    </div>
  );
});

Card.displayName = 'Card';

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  title: 'Default Title',
  text: '',
};

export default Card;