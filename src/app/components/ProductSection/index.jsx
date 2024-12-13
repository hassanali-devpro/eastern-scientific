"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Card from '../Card';

const Index = React.memo(({ cardData, heading, text }) => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: 50 }, // Start hidden and shifted to the right
    visible: { opacity: 1, x: 0 }, // Animate to visible and original position
  };

  // Render function for cards
  const renderCards = () =>
    cardData.map((card, index) => (
      <motion.div
        key={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
        transition={{ duration: 0.8, delay: index * 0.4 }} // Staggered animation
      >
        <Card img={card.img} title={card.title} text={card.text} />
      </motion.div>
    ));

  return (
    <div className="p-[5%] flex flex-col justify-center items-left">
      {heading && (
        <h1 className="text-[#042182] text-2xl font-semibold pt-5 pb-3">
          {heading}
        </h1>
      )}
      {text && <p>{text}</p>}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 py-10">
        {renderCards()}
      </div>
    </div>
  );
});

// Adding displayName
Index.displayName = 'ProductSection';

export default Index;
