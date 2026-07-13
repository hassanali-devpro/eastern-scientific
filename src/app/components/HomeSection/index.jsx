"use client";

import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Card from "../Card";
import ViewMore from "../ViewMore";

const Index = React.memo(({ link, header, cardData }) => {
  // Responsive heading
  const heading =
    "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-[#042182] leading-tight text-center";

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const renderCards = () =>
    cardData.length > 0 ? (
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
      ))
    ) : (
      <p>No cards available.</p>
    );

  return (
    <div className="m-[3%] p-[5%] px-[8%] flex flex-col justify-center items-center bg-gradient-to-br from-[#BCD2F0] to-white rounded-3xl shadow-2xl">
      {header && (
        <h1 className={`${heading} mb-8`}>
          {header}
        </h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-6 w-full">
        {renderCards()}
      </div>

      <ViewMore link={link} />
    </div>
  );
});

Index.displayName = "Index";

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

Index.defaultProps = {
  header: "Default Header",
};

export default Index;