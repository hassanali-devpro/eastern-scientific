"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // Import Framer Motion
import Card from '../Card';
import ViewMore from '../ViewMore';

const Index = React.memo(({ link, header, cardData }) => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: 50 }, // Start hidden and shifted to the right
    visible: { opacity: 1, x: 0 }, // Animate to visible and original position
  };

  // Render function for cards
  const renderCards = () =>
    cardData.length > 0 ? (
      cardData.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
          transition={{ duration: 0.8, delay: index * 0.4 }} // Staggered animation
        >
          <Card img={card.img} title={card.title} text={card.text} />
        </motion.div>
      ))
    ) : (
      <p>No cards available.</p>
    );

  return (
    <div className="m-[3%] p-[5%] px-[8%] flex flex-col justify-center items-center bg-gradient-to-br from-[#BCD2F0] to-white rounded-3xl shadow-2xl">
      {header && <h1 className="text-[#042182] text-3xl font-semibold">{header}</h1>}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 py-10">
        {renderCards()}
      </div>
      <ViewMore link={link} />
    </div>
  );
});

// Set the displayName for the memoized component
Index.displayName = 'Index';

// Add PropTypes for validation
Index.propTypes = {
  link: PropTypes.string.isRequired,
  header: PropTypes.string,
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
};

// Default props
Index.defaultProps = {
  header: 'Default Header',
};

export default Index;
