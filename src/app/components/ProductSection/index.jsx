"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "../Card";

const Index = React.memo(({ cardData, heading, text }) => {
  // Responsive Typography
  const headingStyle =
    "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#042182] leading-tight";

  const paragraphStyle =
    "text-sm sm:text-base md:text-[17px] lg:text-lg xl:text-xl 2xl:text-2xl leading-7 xl:leading-9 text-gray-800";

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const renderCards = () =>
    cardData.map((card, index) => (
      <motion.div
        key={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: index * 0.4,
        }}
      >
        <Card
          img={card.img}
          title={card.title}
          text={card.text}
        />
      </motion.div>
    ));

  return (
    <div className="p-[5%] flex flex-col">
      {heading && (
        <h1 className={`${headingStyle} pt-5 pb-4`}>
          {heading}
        </h1>
      )}

      {text && (
        <p className={`${paragraphStyle} mb-6`}>
          {text}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-6">
        {renderCards()}
      </div>
    </div>
  );
});

Index.displayName = "ProductSection";

export default Index;